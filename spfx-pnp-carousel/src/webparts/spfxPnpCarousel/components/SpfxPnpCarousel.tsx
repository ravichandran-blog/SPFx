import * as React from 'react';
import styles from './SpfxPnpCarousel.module.scss';
import { ISpfxPnpCarouselProps } from './ISpfxPnpCarouselProps';
import { ISpfxPnpCarouselState } from './ISpfxPnpCarouselState';
import { sp } from "@pnp/sp";
import { Carousel, CarouselButtonsLocation, CarouselButtonsDisplay } from "@pnp/spfx-controls-react/lib/Carousel";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export default class SpfxPnpCarousel extends React.Component<ISpfxPnpCarouselProps, ISpfxPnpCarouselState> {
  constructor(props: ISpfxPnpCarouselProps, state: ISpfxPnpCarouselState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = {
      carouselElements: []
    }
    this._getFiles();
  }

  @autobind
  private async _getFiles() {
    const items: any[] = await sp.web.lists.getByTitle("Banners").items.select("FileLeafRef", "FileRef").get();
    let banner: any[] = [];
    let i: number;
    items.forEach(element => {
      i++;
      let url = this.props.context.pageContext.web.absoluteUrl.replace(this.props.context.pageContext.web._serverRelativeUrl, "") + element.FileRef;
      banner.push(<div key={i} >
        <div>
          <a href="#">
            <img style={{ width: '100%', height: '250px' }} src={url} alt="banner" className={[styles['rounded-top'], styles['img-responsive']].join(' ')} />
          </a>
          <div style={{ background: 'rgba(0, 0, 0, 0.3)', overflow: 'hidden', fontSize: 16, top: 0, transition: '.7s ease', textAlign: 'left', width: '200px', height: '200px', position: 'absolute', color: '#ffffff', padding: '25px' }}>
            <h2 style={{ fontSize: 20, textTransform: 'uppercase', color: 'white' }}>{element.FileLeafRef}</h2>
            <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, laborum quibusdam adipisci recusandae, alias aspernatur error maiores repellat.'}</p>
          </div>
        </div>
      </div>);
    });
    this.setState({ carouselElements: banner });
  }

  public render(): React.ReactElement<ISpfxPnpCarouselProps> {
    return (
      <div className={styles.spfxPnpCarousel}>
        <Carousel
          buttonsLocation={CarouselButtonsLocation.top}
          buttonsDisplay={CarouselButtonsDisplay.block}
          isInfinite={true}
          element={this.state.carouselElements}
          onMoveNextClicked={(index: number) => { console.log(`Next button clicked: ${index}`); }}
          onMovePrevClicked={(index: number) => { console.log(`Prev button clicked: ${index}`); }}
        />
      </div>
    );
  }
}
