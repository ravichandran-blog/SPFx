import * as React from 'react';
import styles from './SpfxJquery3Dtagcloud.module.scss';
import { ISpfxJquery3DtagcloudProps } from './ISpfxJquery3DtagcloudProps';
import svg3DTagCloud from '3d-word-cloud';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

export default class SpfxJquery3Dtagcloud extends React.Component<ISpfxJquery3DtagcloudProps, {}> {
  constructor(props: ISpfxJquery3DtagcloudProps, any) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this._getLinks();
  }

  @autobind
  private async _getLinks() {
    const allItems: any[] = await sp.web.lists.getByTitle("3DTags").items.getAll();
    var entries = [];
    allItems.forEach(element => {
      entries.push({ label: element.URL.Description, url: element.URL.Url, target: '_top' });
    });

    const settings = {
      entries: entries,
      width: 480,
      height: 480,
      radius: '65%',
      radiusMin: 75,
      bgDraw: true,
      bgColor: '#fff',
      opacityOver: 1.00,
      opacityOut: 0.05,
      opacitySpeed: 6,
      fov: 800,
      speed: 1,
      fontFamily: 'Oswald, Arial, sans-serif',
      fontSize: '15',
      fontColor: '#111',
      fontWeight: 'normal',//bold
      fontStyle: 'normal',//italic 
      fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
      fontToUpperCase: true,
      tooltipFontFamily: 'Oswald, Arial, sans-serif',
      tooltipFontSize: '11',
      tooltipFontColor: '#111',
      tooltipFontWeight: 'normal',//bold
      tooltipFontStyle: 'normal',//italic 
      tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
      tooltipFontToUpperCase: false,
      tooltipTextAnchor: 'left',
      tooltipDiffX: 0,
      tooltipDiffY: 10,
      animatingSpeed: 0.01,
      animatingRadiusLimit: 1.3
    };
    new svg3DTagCloud(document.getElementById('holder'), settings);
    this.render();
  }

  public render(): React.ReactElement<ISpfxJquery3DtagcloudProps> {
    return (
      <div className={styles.spfxJquery3Dtagcloud}>
        <div id={'holder'}></div>
      </div>
    );
  }
}
