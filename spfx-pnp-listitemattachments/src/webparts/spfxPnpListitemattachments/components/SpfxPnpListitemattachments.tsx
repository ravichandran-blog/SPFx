import * as React from 'react';
import styles from './SpfxPnpListitemattachments.module.scss';
import { ISpfxPnpListitemattachmentsProps } from './ISpfxPnpListitemattachmentsProps';
import { ISpfxPnpListitemattachmentsState } from './ISpfxPnpListitemattachmentsState';
import { ListPicker, ListItemPicker, ListItemAttachments } from "@pnp/spfx-controls-react/lib";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

export default class SpfxPnpListitemattachments extends React.Component<ISpfxPnpListitemattachmentsProps, ISpfxPnpListitemattachmentsState> {
  constructor(props: ISpfxPnpListitemattachmentsProps, state: ISpfxPnpListitemattachmentsState) {
    super(props);
    this.state = { SeletedList: "753d4340-5c3d-4db9-a7ee-1ba650afb1f5", SelectedItem: 1 };
  }

  public render(): React.ReactElement<ISpfxPnpListitemattachmentsProps> {
    return (
      <div className={styles.spfxPnpListitemattachments}>
        <ListPicker context={this.props.context}
          label="Select your list"
          placeHolder="Select your list"
          baseTemplate={100}
          includeHidden={false}
          multiSelect={false}
          selectedList={this.state.SeletedList}
          onSelectionChanged={this.onListPickerChange} />
        <br></br>
        <label>Search List Item</label>
        <ListItemPicker listId={this.state.SeletedList}
          columnInternalName='Title'
          keyColumnInternalName='Id'
          itemLimit={1}
          onSelectedItem={this.onSelectedItem}
          context={this.props.context}
          defaultSelectedItems={[{ key: this.state.SelectedItem, name: 'Apples' }]} />
        <br></br>
        <label>Attachments</label>
        <ListItemAttachments listId={this.state.SeletedList}
          itemId={this.state.SelectedItem}
          context={this.props.context}
          disabled={false} />
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
    for (const item of data) {
      this.setState({ SelectedItem: +item.key })
    }
  }
}
