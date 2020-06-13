import * as React from 'react';
import { ISpfxReactImagefullscreenProps } from './ISpfxReactImagefullscreenProps';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";


export interface ISpfxReactImagefullscreenState {
  photoIndex: number;
  isOpen: boolean;
  Images: string[]
}

export default class SpfxReactImagefullscreen extends React.Component<ISpfxReactImagefullscreenProps, ISpfxReactImagefullscreenState> {
  constructor(props: ISpfxReactImagefullscreenProps, state: ISpfxReactImagefullscreenState) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      Images: []
    };
    this._getFiles();
  }

  @autobind
  private async _getFiles() {
    let cardsdata: string[] = [];
    const items: any[] = await sp.web.getFolderByServerRelativeUrl("/sites/TheLanding/Images1").files.select().expand("ListItemAllFields").get();
    let siteurl = this.props.context.pageContext.web.absoluteUrl;
    let siterooturl = this.props.context.pageContext.web.absoluteUrl.replace(this.props.context.pageContext.web._serverRelativeUrl, "");
    items.forEach(function (v, i) {
      let url = siterooturl + v.ServerRelativeUrl;
      cardsdata.push(url)
    });
    this.setState({ Images: cardsdata });
  }

  public render(): React.ReactElement<ISpfxReactImagefullscreenProps> {
    const { photoIndex, isOpen, Images } = this.state;
  
    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={Images[photoIndex]}
            nextSrc={Images[(photoIndex + 1) % Images.length]}
            prevSrc={Images[(photoIndex + Images.length - 1) % Images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + Images.length - 1) % Images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % Images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
