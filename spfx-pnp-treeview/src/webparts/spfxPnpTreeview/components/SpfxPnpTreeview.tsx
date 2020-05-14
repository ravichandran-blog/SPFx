import * as React from 'react';
import styles from './SpfxPnpTreeview.module.scss';
import { ISpfxPnpTreeviewProps } from './ISpfxPnpTreeviewProps';
import { ISpfxPnpTreeviewState } from './ISpfxPnpTreeviewState';
import { TreeView, ITreeItem, TreeViewSelectionMode, TreeItemActionsDisplayMode } from "@pnp/spfx-controls-react/lib/TreeView";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export default class SpfxPnpTreeview extends React.Component<ISpfxPnpTreeviewProps, ISpfxPnpTreeviewState> {
  constructor(props: ISpfxPnpTreeviewProps) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = {
      TreeLinks: []
    }
    this._getLinks();
  }

  private async _getLinks() {
    const allItems: any[] = await sp.web.lists.getByTitle("TreeLinks").items.getAll();
    var treearr: ITreeItem[] = [];
    allItems.forEach(function (v, i) {

      if (v["ParentId"] == null) {
        const tree: ITreeItem = {
          key: v.Id,
          label: v["Title"],
          data: v["Link"],
          children: []
        }
        treearr.push(tree);
      }
      else {
        const tree: ITreeItem = {
          key: v.Id,
          label: v["Title"],
          data: v["Link"]
        }
        var treecol: Array<ITreeItem> = treearr.filter(function (value) { return value.key == v["ParentId"] })
        if (treecol.length != 0) {
          treecol[0].children.push(tree);
        }
      }

      console.log(v);
    });
    console.log(treearr);
    this.setState({ TreeLinks: treearr });
  }

  public render(): React.ReactElement<ISpfxPnpTreeviewProps> {
    return (
      <div className={styles.spfxPnpTreeview}>
        <TreeView
          items={this.state.TreeLinks}
          defaultExpanded={false}
          selectionMode={TreeViewSelectionMode.None}
          selectChildrenIfParentSelected={true}
          showCheckboxes={true}
          treeItemActionsDisplayMode={TreeItemActionsDisplayMode.Buttons}
          onSelect={this.onTreeItemSelect}
          onExpandCollapse={this.onTreeItemExpandCollapse}
          onRenderItem={this.renderCustomTreeItem} />


      </div>
    );
  }

  private onTreeItemSelect(items: ITreeItem[]) {
    console.log("Items selected: ", items);
  }

  private onTreeItemExpandCollapse(item: ITreeItem, isExpanded: boolean) {
    console.log((isExpanded ? "Item expanded: " : "Item collapsed: ") + item);
  }

  private renderCustomTreeItem(item: ITreeItem): JSX.Element {
    return (
      <span>
        <a href={item.data} target={'_blank'}>
          {item.label}
        </a>
      </span>
    );
  }


}
