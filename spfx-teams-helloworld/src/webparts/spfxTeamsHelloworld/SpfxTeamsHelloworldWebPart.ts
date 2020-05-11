import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import styles from './SpfxTeamsHelloworldWebPart.module.scss';


export default class SpfxTeamsHelloworldWebPart extends BaseClientSideWebPart <any> {

  public render(): void {
    let title: string = '';
    let subTitle: string = '';
    let contextDetail: string = '';

 if (this.context.sdks.microsoftTeams) {
    // We have teams context for the web part
    title = "Welcome to Teams!";
    subTitle = "Building custom enterprise tabs for your business.";
    contextDetail = "We are in the context of following Team: " + this.context.sdks.microsoftTeams.context.teamName;
  }
  else
  {
    // We are rendered in normal SharePoint context
    title = "Welcome to SharePoint!";
    subTitle = "Customize SharePoint experiences using Web Parts.";
    contextDetail = "We are in the context of following site: " + this.context.pageContext.web.title;
  }
    this.domElement.innerHTML = `
      <div class="${ styles.spfxTeamsHelloworld}">
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
