import * as React from 'react';
import styles from './SpfxPnpListListitemPicker.module.scss';
import { ISpfxPnpListListitemPickerProps } from './ISpfxPnpListListitemPickerProps';
import { ISpfxPnpListListitemPickerState } from './ISpfxPnpListListitemPickerState';
import { sp } from "@pnp/sp";
import { ListPicker, ListItemPicker } from "@pnp/spfx-controls-react/lib";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

export default class SpfxPnpListListitemPicker extends React.Component<ISpfxPnpListListitemPickerProps, ISpfxPnpListListitemPickerState> {
  constructor(props: ISpfxPnpListListitemPickerProps, state: ISpfxPnpListListitemPickerState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = { SeletedList: '' };
  }


  public render(): React.ReactElement<ISpfxPnpListListitemPickerState> {
    return (
      <div className={styles.spfxPnpListListitemPicker}>
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
      </div>
    );
  }

  @autobind
  private onListPickerChange(selectedlist: string) {
    this.setState({
      SeletedList: selectedlist
    });
  }

  private onSelectedItem(data: { key: string; name: string }[]) {
    for (const item of data) {
      console.log(`Item value: ${item.key}`);
      console.log(`Item text: ${item.name}`);
    }
  }

}
