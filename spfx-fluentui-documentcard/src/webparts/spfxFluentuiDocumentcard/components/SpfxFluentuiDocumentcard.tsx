import * as React from 'react';
import styles from './SpfxFluentuiDocumentcard.module.scss';
import { ISpfxFluentuiDocumentcardProps } from './ISpfxFluentuiDocumentcardProps';
import { ISpfxFluentuiDocumentcardState } from './ISpfxFluentuiDocumentcardState';
import { Carousel, CarouselButtonsLocation, CarouselButtonsDisplay } from "@pnp/spfx-controls-react/lib/Carousel";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";


import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardDetails,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardLocation,
  DocumentCardType
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import { ISize } from 'office-ui-fabric-react/lib/Utilities';


export default class SpfxFluentuiDocumentcard extends React.Component<ISpfxFluentuiDocumentcardProps, ISpfxFluentuiDocumentcardState> {
  constructor(props: ISpfxFluentuiDocumentcardProps, state: ISpfxFluentuiDocumentcardState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = {
      carouselElements: []
    };

    this._getFiles();
  }

  @autobind
  private async _getFiles() {
    let cardsdata: any[] = [];
    const items: any[] = await sp.web.getFolderByServerRelativeUrl("/sites/TheLanding/Books").files.select().expand("ListItemAllFields,Author").get();
    let siteurl = this.props.context.pageContext.web.absoluteUrl;
    let siterooturl = this.props.context.pageContext.web.absoluteUrl.replace(this.props.context.pageContext.web._serverRelativeUrl, "");
    // const items: any[] = await sp.web.lists.getByTitle("Documents").items.get();
    items.forEach(function (v, i) {
      let url = siterooturl + v.ServerRelativeUrl;
      console.log(v);
      cardsdata.push({
        thumbnail: siteurl + '/_layouts/15/getpreview.ashx?resolution=1&path=' + encodeURIComponent(url),
        title: v.Name,
        name: v.Author.Title,
        profileImageSrc: siteurl + "/_layouts/15/userphoto.aspx?AccountName=" + v.Author.LoginName + "&Size=L",
        location: "SharePoint",
        activity: v.TimeLastModified,
        url: url
      })
    });
    let cardsElements: JSX.Element[] = [];

    cardsdata.forEach(item => {
      const previewProps: IDocumentCardPreviewProps = {
        previewImages: [
          {
            previewImageSrc: item.thumbnail,
            imageFit: ImageFit.cover,
            height: 130
          }
        ]
      };
      cardsElements.push(<div>
        <DocumentCard
          type={DocumentCardType.normal}
          onClick={(ev: React.SyntheticEvent<HTMLElement>) => alert("You clicked on a grid item")}>
          <DocumentCardPreview {...previewProps} />
          <DocumentCardLocation location={item.location} />
          <DocumentCardDetails>
            <DocumentCardTitle
              title={item.title}
              shouldTruncate={true} />
            <DocumentCardActivity
              activity={item.activity}
              people={[{ name: item.name, profileImageSrc: item.profileImageSrc }]} />
          </DocumentCardDetails>
        </DocumentCard>
      </div>);
    });
    this.setState({ carouselElements: cardsElements });
  }

  public render(): React.ReactElement<ISpfxFluentuiDocumentcardProps> {
    return (
      <div className={styles.spfxFluentuiDocumentcard}>
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
