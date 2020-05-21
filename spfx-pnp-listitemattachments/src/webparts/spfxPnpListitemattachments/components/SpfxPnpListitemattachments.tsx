import * as React from 'react';
import styles from './SpfxPnpListitemattachments.module.scss';
import { ISpfxPnpListitemattachmentsProps } from './ISpfxPnpListitemattachmentsProps';
import { ISpfxPnpListitemattachmentsState } from './ISpfxPnpListitemattachmentsState';
import { ListPicker, ListItemPicker } from "@pnp/spfx-controls-react/lib";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { SpfxAttachmentControl } from '../../spfxPnpListitemattachments/components/SpfxAttachmentControl';

export default class SpfxPnpListitemattachments extends React.Component<ISpfxPnpListitemattachmentsProps, ISpfxPnpListitemattachmentsState> {
  constructor(props: ISpfxPnpListitemattachmentsProps, state: ISpfxPnpListitemattachmentsState) {
    super(props);
    this.state = { SeletedList: "", SelectedItem: null };
  }

  public render(): React.ReactElement<ISpfxPnpListitemattachmentsProps> {
    let attaprops: any = [];
    attaprops = ({ SeletedList: this.state.SeletedList, SelectedItem: this.state.SelectedItem, context: this.props.context });
    return (
      <div className={styles.spfxPnpListitemattachments}>
        <ListPicker context={this.props.context}
          label="Select your list"
          placeHolder="Select your list"
          baseTemplate={100}
          includeHidden={false}
          multiSelect={false}
          onSelectionChanged={this.onListPickerChange} />
        <br></br>
        <label>Search List Item</label>
        <ListItemPicker listId={this.state.SeletedList}
          columnInternalName='Title'
          keyColumnInternalName='Id'
          itemLimit={1}
          onSelectedItem={this.onSelectedItem}
          context={this.props.context} />
        <br></br>
        <SpfxAttachmentControl {...attaprops}></SpfxAttachmentControl>
      </div>
    );
  }


  @autobind
  private onListPickerChange(selectedlist: string) {
    this.setState({
      SeletedList: selectedlist
    });
  }

  @autobind
  private onSelectedItem(data: { key: string; name: string }[]) {
    if (data.length == 0) {
      this.setState({ SelectedItem: null });
    }
    else
      for (const item of data) {
        this.setState({ SelectedItem: +item.key })
      }
  }
}
