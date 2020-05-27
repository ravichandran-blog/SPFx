import * as React from 'react';
import styles from './SpfxReactDropzone.module.scss';
import { ISpfxReactDropzoneProps } from './ISpfxReactDropzoneProps';
import { ISpfxReactDropzoneState } from './ISpfxReactDropzoneState';
import { PrimaryButton } from 'office-ui-fabric-react';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

export default class SpfxReactDropzone extends React.Component<ISpfxReactDropzoneProps, ISpfxReactDropzoneState> {
  constructor(props: ISpfxReactDropzoneProps, state: ISpfxReactDropzoneState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = ({ files: [] });
    registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
  }

  public render(): React.ReactElement<ISpfxReactDropzoneProps> {
    return (
      <div className={styles.spfxReactDropzone}>
        <FilePond files={this.state.files} allowMultiple={true} onupdatefiles={fileItems => {
          this.setState({
            files: fileItems.map(fileItem => fileItem.file)
          });
        }} />
        <br />
        <PrimaryButton text="Upload" onClick={this._uploadFiles} />
      </div>
    );
  }


  @autobind
  private async _uploadFiles() {
    this.state.files.forEach(function (file, i) {
      // you can adjust this number to control what size files are uploaded in chunks
      if (file.size <= 10485760) {
        // small upload
        const newfile = sp.web.getFolderByServerRelativeUrl("/sites/TheLanding/Books/").files.add(file.name, file, true);
      } else {
        // large upload
        const newfile = sp.web.getFolderByServerRelativeUrl("/sites/TheLanding/Books/").files.addChunked(file.name, file, data => {
        }, true);
      }
    });
    this.setState({ files: [] })
  }
}
