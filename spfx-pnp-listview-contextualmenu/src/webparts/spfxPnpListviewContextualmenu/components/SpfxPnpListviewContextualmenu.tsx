import * as React from 'react';
import * as moment from 'moment';
import styles from './SpfxPnpListviewContextualmenu.module.scss';
import { ISpfxPnpListviewContextualmenuProps } from './ISpfxPnpListviewContextualmenuProps';
import { ISpfxPnpListviewContextualmenuState } from './ISpfxPnpListviewContextualmenuState';
import { ListView, IViewField, SelectionMode, GroupOrder, IGrouping } from "@pnp/spfx-controls-react/lib/ListView";
import { sp } from "@pnp/sp";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { IfilemenuProps, filemenu } from './filemenu';

export default class SpfxPnpListviewContextualmenu extends React.Component<ISpfxPnpListviewContextualmenuProps, ISpfxPnpListviewContextualmenuState> {
  constructor(props: ISpfxPnpListviewContextualmenuProps, state: ISpfxPnpListviewContextualmenuState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    var _viewFields: IViewField[] = [
      {
        name: "Name",
        linkPropertyName: "ServerRelativeUrl",
        displayName: "Name",
        sorting: true,
        minWidth: 250,
      },
      {
        name: "",
        sorting: false,
        maxWidth: 40,
        render: (rowitem: any) => {
          const element: React.ReactElement<IfilemenuProps> = React.createElement(
            filemenu,
            {
              item: rowitem,
              context: this.props.context,
              ondatachange: this._getfiles
            }
          );
          return element;
        }
      },
      {
        name: "Author.Title",
        displayName: "Author",
        sorting: false,
        minWidth: 180,
        render: (item: any) => {
          const authoremail = item['Author.UserPrincipalName'];
          return <a href={'mailto:' + authoremail}>{item['Author.Title']}</a>;
        }
      },
      {
        name: "TimeCreated",
        displayName: "Created",
        minWidth: 150,
        render: (item: any) => {
          const created = item["TimeCreated"];
          if (created) {
            const createdDate = moment(created);
            return <span>{createdDate.format('DD/MM/YYYY HH:mm:ss')}</span>;
          }
        }
      }
    ];
    this.state = { items: [], viewFields: _viewFields };
    this._getfiles();
  }

  @autobind
  public async _getfiles() {
    const allItems: any[] = await sp.web.getFolderByServerRelativeUrl("/sites/TheLanding/Policies").files.select().expand("ListItemAllFields,Author").get();
    this.setState({ items: allItems });
  }

  public render(): React.ReactElement<ISpfxPnpListviewContextualmenuProps> {
    return (
      <div className={styles.spfxPnpListviewContextualmenu}>
        <ListView
          items={this.state.items}
          viewFields={this.state.viewFields}
          iconFieldName="ServerRelativeUrl"
          compact={true}
          selectionMode={SelectionMode.multiple}
          selection={this._getSelection}
          showFilter={true}
          filterPlaceHolder="Search..." />
      </div>
    );
  }

  private _getSelection(items: any[]) {
    console.log('Selected items:', items);
  }
}
