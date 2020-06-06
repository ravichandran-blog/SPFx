import * as React from 'react';
import * as moment from 'moment';
import styles from './SpfxFluentuiTooltip.module.scss';
import { ISpfxFluentuiTooltipProps } from './ISpfxFluentuiTooltipProps';
import { ISpfxFluentuiTooltipState } from './ISpfxFluentuiTooltipState';
import { ListView, IViewField, SelectionMode } from "@pnp/spfx-controls-react/lib/ListView";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import {
  TooltipHost,
  TooltipDelay,
  DirectionalHint,
  ITooltipProps,
  ITooltipHostStyles,
} from 'office-ui-fabric-react/lib/Tooltip';

const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };

export default class SpfxFluentuiTooltip extends React.Component<ISpfxFluentuiTooltipProps, ISpfxFluentuiTooltipState> {
  constructor(props: ISpfxFluentuiTooltipProps, state: ISpfxFluentuiTooltipState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    var _viewFields: IViewField[] = [
      {
        name: "Name",
        displayName: "Name",
        sorting: false,
        minWidth: 200,
        render: (item: any) => {
          let tooltipProps: ITooltipProps = {
            onRenderContent: () => (
              <ul style={{ margin: 10, padding: 0 }}>
                <li><b>Description</b></li>
                <li>{item['ListItemAllFields.Description0']}</li>
              </ul>
            ),
          };

          return <TooltipHost
            tooltipProps={tooltipProps}
            delay={TooltipDelay.zero}
            id={'tooltipId' + item['ID']}
            directionalHint={DirectionalHint.rightCenter}
            styles={hostStyles}
          ><a href={item['ServerRelativeUrl']}>{item['Name']}</a></TooltipHost>;
        }
      },
      {
        name: "Author.Title",
        displayName: "Author",
        sorting: false,
        minWidth: 200,
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
  private async _getfiles() {
    const allItems: any[] = await sp.web.getFolderByServerRelativeUrl("/sites/TheLanding/Policies").files.select().expand("ListItemAllFields,Author,Description").get();
    this.setState({ items: allItems });
  }
  public render(): React.ReactElement<ISpfxFluentuiTooltipProps> {
    return (
      <div className={styles.spfxFluentuiTooltip}>

        <ListView
          items={this.state.items}
          viewFields={this.state.viewFields}
          iconFieldName="ServerRelativeUrl"
          compact={true}
          selectionMode={SelectionMode.multiple}
          showFilter={true}
          filterPlaceHolder="Search..." />
      </div>
    );
  }
}
