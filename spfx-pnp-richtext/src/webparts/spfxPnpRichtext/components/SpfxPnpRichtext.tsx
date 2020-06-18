import * as React from 'react';
import styles from './SpfxPnpRichtext.module.scss';
import { ISpfxPnpRichtextProps } from './ISpfxPnpRichtextProps';
import { ISpfxPnpRichtextState } from './ISpfxPnpRichtextState';
import { sp } from "@pnp/sp";
import { RichText } from "@pnp/spfx-controls-react/lib/RichText";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";


export default class SpfxPnpRichtext extends React.Component<ISpfxPnpRichtextProps, ISpfxPnpRichtextState> {
  constructor(props: ISpfxPnpRichtextProps, state: ISpfxPnpRichtextState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = { SuccessMessage: '', description: '' };
  }


  public render(): React.ReactElement<ISpfxPnpRichtextProps> {
    let tamil = (this.state.description === '') ? 'Dummy' : this.state.description;
    return (
      <div className={styles.spfxPnpRichtext}>
        <RichText isEditMode={true} value={this.props.richtext} onChange={this._onTextChange} />
        <br></br>
        <button className={styles.button} onClick={this._updateDescription}>Save</button>
        <br></br>
        <br></br>
        <label className={styles.label}>{this.state.SuccessMessage}</label>
      </div>
    );
  }

  private _onTextChange = (newText: string) => {
    this.setState({ description: newText });
    return newText;
  }


  @autobind
  private async _updateDescription() {
    console.log(this.state.description);
    const updatedItem = await sp.web.lists.getByTitle("Teams").items.getById(1).update(
      {
        Description: this.state.description
      });
    this.setState({ SuccessMessage: 'Successfully saved' });
  }
}
