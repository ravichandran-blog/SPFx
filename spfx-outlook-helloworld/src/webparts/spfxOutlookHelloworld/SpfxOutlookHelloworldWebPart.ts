import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import styles from './SpfxOutlookHelloworldWebPart.module.scss';

export default class SpfxOutlookHelloworldWebPart extends BaseClientSideWebPart<any> {
  public render(): void {
    let title: string = '';
    let subTitle: string = '';
    let contextDetail: string = '';

    if (this.context.sdks.office) {
      title = "Welcome to Office!";
      subTitle = "Extending Office with custom business extensions.";
      contextDetail = "We are in the context of following email: " + this.context.sdks.office.context.mailbox.userProfile.emailAddress;
      let attachments = this.context.sdks.office.context.mailbox.item.attachments;
      console.log(this.context.sdks.office.context.mailbox.item);
      console.log(this.context.sdks.office.context.mailbox);
      console.log('touchEnabled :'+this.context.sdks.office.context.touchEnabled);
      attachments.forEach(function (v, i) {
        console.log(v.name + v.url, v.size)
      });
    }
    else {
      // We are rendered in normal SharePoint context
      title = "Welcome to SharePoint!";
      subTitle = "Customize SharePoint experiences using Web Parts.";
      contextDetail = "We are in the context of following site: " + this.context.pageContext.web.title;
    }

    this.domElement.innerHTML = `
      <div class="${ styles.spfxOutlookHelloworld}">
    <div class="${ styles.container}">
      <div class="${ styles.row}">
        <div class="${ styles.column}">
          <span class="${ styles.title}">${title}</span>
            <p class="${ styles.subTitle}">${subTitle}</p>
              <p class="${ styles.description}">${contextDetail}</p>
          </div>
          </div>
          </div>
          </div>`;
  }
}
