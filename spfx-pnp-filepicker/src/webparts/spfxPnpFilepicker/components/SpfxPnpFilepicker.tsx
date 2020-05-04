import * as React from 'react';
import styles from './SpfxPnpFilepicker.module.scss';
import { ISpfxPnpFilepickerProps } from './ISpfxPnpFilepickerProps';
import { ISpfxPnpFilepickerState } from './ISpfxPnpFilepickerState';
import { sp } from "@pnp/sp";
import { FilePicker, IFilePickerResult } from '@pnp/spfx-controls-react/lib';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";

export default class SpfxPnpFilepicker extends React.Component<ISpfxPnpFilepickerProps, ISpfxPnpFilepickerState> {
  constructor(props: ISpfxPnpFilepickerProps, state: ISpfxPnpFilepickerState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = {
      ImageURL: 'https://via.placeholder.com/150'
    }
  }

  public render(): React.ReactElement<ISpfxPnpFilepickerProps> {
    return (
      <div className={styles.spfxPnpFilepicker}>
        <img src={this.state.ImageURL} height={'150px'} width={'150px'}></img>
        <br></br>
        <br></br>
        <FilePicker
          label={'Select or upload image'}
          buttonClassName={styles.button}
          buttonLabel={'Images'}
          accepts={[".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"]}
          buttonIcon="FileImage"
          onSave={this.saveIntoSharePoint}
          onChanged={this.saveIntoSharePoint}
          context={this.props.context}
        />
      </div>
    );
  }

  @autobind
  private async saveIntoSharePoint(file: IFilePickerResult) {
    if (file.fileAbsoluteUrl == null) {
      file.downloadFileContent()
        .then(async r => {
          let fileresult = await sp.web.getFolderByServerRelativeUrl("/sites/TheLanding/Shared%20Documents/").files.add(file.fileName, r, true);
          this.setState({ ImageURL: document.location.origin + fileresult.data.ServerRelativeUrl });
        });
    }
    else {
      this.setState({ ImageURL: file.fileAbsoluteUrl });
    }
  }
}
