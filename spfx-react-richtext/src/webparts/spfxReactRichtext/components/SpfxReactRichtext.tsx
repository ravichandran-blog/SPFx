import * as React from 'react';
import styles from './SpfxReactRichtext.module.scss';
import { ISpfxReactRichtextProps } from './ISpfxReactRichtextProps';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton, autobind } from 'office-ui-fabric-react';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link'
];

export interface ISpfxReactRichtextState {
  title: string;
  reactrichtext: string;
  place: string
}


export default class SpfxReactRichtext extends React.Component<ISpfxReactRichtextProps, ISpfxReactRichtextState> {
  constructor(props: ISpfxReactRichtextProps, state: ISpfxReactRichtextState) {
    super(props)
    sp.setup({ spfxContext: this.props.context });
    this.state = { title: '', reactrichtext: '', place: '' }
    this._getValuesFromSP();
  }



  public render(): React.ReactElement<ISpfxReactRichtextProps> {
    return (
      <div className={styles.spfxReactRichtext}>
        <TextField label="Name" value={this.state.title} onChanged={(newtext) => this.setState({ title: newtext })} />
        <br />
        <label>React rich text editor</label>
        <ReactQuill value={this.state.reactrichtext} theme="snow" modules={modules}
          formats={formats}
          onChange={(newvalue) => this.setState({ reactrichtext: newvalue })} />
        <TextField label="Place" value={this.state.place} onChanged={(newtext) => this.setState({ place: newtext })} />
        <br />
        <PrimaryButton text="Save" onClick={this._SaveIntoSP} />
      </div>
    );
  }

  private async _getValuesFromSP() {
    const item: any = await sp.web.lists.getByTitle("ReactRichText").items.getById(1).get();
    this.setState({ title: item.Title, reactrichtext: item.ReactRichText, place: item.Place })
  }

  @autobind
  private async _SaveIntoSP() {
    let list = sp.web.lists.getByTitle("ReactRichText");
    const i = await list.items.getById(1).update({
      Title: this.state.title,
      ReactRichText: this.state.reactrichtext,
      Place: this.state.place
    });
  }
}
