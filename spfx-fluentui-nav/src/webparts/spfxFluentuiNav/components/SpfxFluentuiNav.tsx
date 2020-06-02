import * as React from 'react';
import styles from './SpfxFluentuiNav.module.scss';
import { ISpfxFluentuiNavProps } from './ISpfxFluentuiNavProps';
import { ISpfxFluentuiNavState } from './ISpfxFluentuiNavState';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';

import { autobind } from 'office-ui-fabric-react/lib/Utilities';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

// const navLinkGroups: INavLinkGroup[] = [
//   {
//     links: [
//       {
//         name: 'Home',
//         url: 'http://example.com',
//         expandAriaLabel: 'Expand Home section',
//         collapseAriaLabel: 'Collapse Home section',
//         links: [
//           {
//             name: 'Activity',
//             url: 'http://msn.com',
//             key: 'key1',
//             target: '_blank',
//           },
//           {
//             name: 'MSN',
//             url: 'http://msn.com',
//             disabled: true,
//             key: 'key2',
//             target: '_blank',
//           },
//         ],
//         isExpanded: true,
//       },
//       {
//         name: 'Documents',
//         url: 'http://example.com',
//         key: 'key3',
//         isExpanded: true,
//         target: '_blank',
//       },
//       {
//         name: 'Pages',
//         url: 'http://msn.com',
//         key: 'key4',
//         target: '_blank',
//       },
//       {
//         name: 'Notebook',
//         url: 'http://msn.com',
//         key: 'key5',
//         disabled: true,
//       },
//       {
//         name: 'Communication and Media',
//         url: 'http://msn.com',
//         key: 'key6',
//         target: '_blank',
//       },
//       {
//         name: 'News',
//         url: 'http://cnn.com',
//         icon: 'News',
//         key: 'key7',
//         target: '_blank',
//       },
//     ],
//   },
// ];



export default class SpfxFluentuiNav extends React.Component<ISpfxFluentuiNavProps, ISpfxFluentuiNavState> {
  constructor(props: ISpfxFluentuiNavProps) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = {
      links: []
    }
    //this._getLinks();
  }

  private async _getLinks() {
    const allItems: any[] = await sp.web.lists.getByTitle("TreeLinks").items.getAll();
    var treearr: INavLinkGroup[] = [];
    allItems.forEach(function (v, i) {

      if (v["ParentId"] == null) {
        const tree: INavLink = {
          key: v.Id,
          label: v["Title"],
          data: v["Link"],
          children: []
        }
        treearr.push(tree);
      }
      else {
        const tree: INavLink = {
          key: v.Id,
          label: v["Title"],
          data: v["Link"]
        }
        var treecol: Array<INavLink> = treearr.filter(function (value) { return value.key == v["ParentId"] })
        if (treecol.length != 0) {
          treecol[0].children.push(tree);
        }
      }

      console.log(v);
    });
    console.log(treearr);
    this.setState({ links: treearr });
  }


  public render(): React.ReactElement<ISpfxFluentuiNavProps> {
    return (
      <div className={styles.spfxFluentuiNav}>
        <Nav onLinkClick={this._onLinkClick}
          selectedKey="key3"
          ariaLabel="Nav basic example"
          styles={navStyles}
          groups={this.state.links} />
      </div>
    );
  }

  private _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
    if (item && item.name === 'News') {
      alert('News link clicked');
    }
  }
}
