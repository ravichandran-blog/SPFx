import * as React from 'react';
import styles from './SpfxPnpMap.module.scss';
import { ISpfxPnpMapProps } from './ISpfxPnpMapProps';
import { ISpfxPnpMapState } from './ISpfxPnpMapState';
import { Map, ICoordinates, MapType } from "@pnp/spfx-controls-react/lib/Map";
import { sp } from "@pnp/sp";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export default class SpfxPnpMap extends React.Component<ISpfxPnpMapProps, ISpfxPnpMapState> {
  constructor(props: ISpfxPnpMapProps, state: ISpfxPnpMapState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = {
      location: null,
      Name: ''
    }
    this._getValues();
  }

  @autobind
  private async _getValues() {
    const item: any = await sp.web.lists.getByTitle("CustomerLocation").items.getById(1).get();
    this.setState({
      location: { latitude: item.Latitude, longitude: item.Longitude },
      Name: item.Title
    });
  }

  public render(): React.ReactElement<ISpfxPnpMapProps> {
    return (
      <div className={styles.spfxPnpMap}>
        <Map titleText={this.state.Name}
          coordinates={this.state.location}
          enableSearch={false}
          zoom={14} />
      </div>
    );
  }
}
