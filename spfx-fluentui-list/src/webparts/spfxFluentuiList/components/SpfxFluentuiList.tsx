import * as React from 'react';
import styles from './SpfxFluentuiList.module.scss';
import { ISpfxFluentuiListProps } from './ISpfxFluentuiListProps';
import { ISpfxFluentuiListState } from './ISpfxFluentuiListState';
import { List } from 'office-ui-fabric-react/lib/List';
import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { IRectangle } from 'office-ui-fabric-react/lib/Utilities';
import { ITheme, getTheme, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";

const theme: ITheme = getTheme();
const { palette, fonts } = theme;
const classNames = mergeStyleSets({
  listGridExample: {
    overflow: 'hidden',
    fontSize: 0,
    position: 'relative',
  },
  listGridExampleTile: {
    textAlign: 'center',
    outline: 'none',
    position: 'relative',
    float: 'left',
    background: palette.neutralLighter,
    selectors: {
      'focus:after': {
        content: '',
        position: 'absolute',
        left: 2,
        right: 2,
        top: 2,
        bottom: 2,
        boxSizing: 'border-box',
        border: `1px solid ${palette.white}`,
      },
    },
  },
  listGridExampleSizer: {
    paddingBottom: '100%',
  },
  listGridExamplePadder: {
    position: 'absolute',
    left: 2,
    top: 2,
    right: 2,
    bottom: 2,
  },
  listGridExampleLabel: {
    background: 'rgba(0, 0, 0, 0.3)',
    color: '#FFFFFF',
    position: 'absolute',
    padding: 10,
    bottom: 0,
    left: 0,
    width: '100%',
    fontSize: fonts.small.fontSize,
    boxSizing: 'border-box',
  },
  listGridExampleImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
});


export default class SpfxFluentuiList extends React.Component<ISpfxFluentuiListProps, ISpfxFluentuiListState> {
  constructor(props: ISpfxFluentuiListProps, state: ISpfxFluentuiListState) {
    super(props);
    this.state = ({ description: '', Images: [], ImageElements: [] })
    sp.setup({
      spfxContext: this.props.context
    });
    this._getFiles()
  }

  @autobind
  private async _getFiles() {
    let cardsdata: any[] = [];
    const items: any[] = await sp.web.getFolderByServerRelativeUrl("/sites/TheLanding/Images1").files.select().expand("ListItemAllFields").get();
    let siteurl = this.props.context.pageContext.web.absoluteUrl;
    let siterooturl = this.props.context.pageContext.web.absoluteUrl.replace(this.props.context.pageContext.web._serverRelativeUrl, "");
    items.forEach(function (v, i) {
      let url = siterooturl + v.ServerRelativeUrl;
      cardsdata.push({
        thumbnail: siteurl + '/_layouts/15/getpreview.ashx?resolution=1&path=' + encodeURIComponent(url),
        title: v.Name,
        url: url
      })
    });
    this.setState({ Images: cardsdata });
  }

  public render(): React.ReactElement<ISpfxFluentuiListProps> {
    return (
      <div className={styles.spfxFluentuiList}>
        <FocusZone>
          <List
            className={classNames.listGridExample}
            items={this.state.Images}
            renderedWindowsAhead={6}
            getItemCountForPage={this.getItemCountForPage}
            onRenderCell={this.onRenderCell}
          />
        </FocusZone>


      </div>
    );
  }

  private getItemCountForPage = (itemIndex: number, surfaceRect: IRectangle) => {
    return 14;
  }

  private onRenderCell(item: any, index: number | undefined) {
    return (
      <div
        className={classNames.listGridExampleTile}
        data-is-focusable
        style={{
          width: '25%',
        }}
      >
        <div className={classNames.listGridExampleSizer}>
          <div className={classNames.listGridExamplePadder}>
            <img src={item.thumbnail} className={classNames.listGridExampleImage} />
            <span className={classNames.listGridExampleLabel}>{item.title}</span>
          </div>
        </div>
      </div>
    );
  }
}
