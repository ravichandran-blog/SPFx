import * as React from 'react';
import styles from './SpfxSend.module.scss';
import { ISpfxSendProps } from './ISpfxSendProps';
import { ListPicker } from "@pnp/spfx-controls-react/lib";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

export default class SpfxSend extends React.Component<ISpfxSendProps, {}> {
  constructor(props: ISpfxSendProps) {
    super(props);
  }
  public render(): React.ReactElement<ISpfxSendProps> {
    return (
      <div className={styles.spfxSend}>
        <h1>{this.props.title}</h1>
        <ListPicker context={this.props.context}
          label="Select your list"
          placeHolder="Select your list"
          baseTemplate={100}
          includeHidden={false}
          multiSelect={false}
          onSelectionChanged={this.onListPickerChange} />
      </div>
    );
  }

  @autobind
  private onListPickerChange(selectedlist: string) {
    this.props._listelected({ selectedlist: selectedlist });
  }
}
