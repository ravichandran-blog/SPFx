import * as React from 'react';
import styles from './SpfxPnpLocationpicker.module.scss';
import { ISpfxPnpLocationpickerProps, ISpfxPnpLocationpickerState } from './ISpfxPnpLocationpicker';
import { escape } from '@microsoft/sp-lodash-subset';
import { LocationPicker, ILocationPickerItem } from "@pnp/spfx-controls-react/lib/LocationPicker";
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export default class SpfxPnpLocationpicker extends React.Component<ISpfxPnpLocationpickerProps, ISpfxPnpLocationpickerState> {
  constructor(props: ISpfxPnpLocationpickerProps, state: ISpfxPnpLocationpickerState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = { selectedAddress: null }
    this._getListItem();
  }

  public render(): React.ReactElement<ISpfxPnpLocationpickerProps> {
    return (
      <div className={styles.spfxPnpLocationpicker}>
        <LocationPicker
          context={this.props.context}
          label="Location"
          defaultValue={this.state.selectedAddress}
          onChange={(locValue: ILocationPickerItem) => {
            this.setState({ selectedAddress: locValue })
          }
          } />
        <br></br>
        <PrimaryButton text="Update" onClick={this._updateListItem} allowDisabledFocus />
      </div>
    );
  }

  _getListItem = async () => {
    const item: any = await sp.web.lists.getByTitle("Demo").items.getById(1).select("Title", "Address").get();
    console.log(item);
    this.setState({
      selectedAddress: JSON.parse(item.Address)
    });
  }

  _updateListItem = async () => {
    const updatedItem = await sp.web.lists.getByTitle("Demo").items.getById(1).validateUpdateListItem(
      [{
        FieldName: "Address",
        FieldValue: JSON.stringify(this.state.selectedAddress),
      }]);
  }


}
