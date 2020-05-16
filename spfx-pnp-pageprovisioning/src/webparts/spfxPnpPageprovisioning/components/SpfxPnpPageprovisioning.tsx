import * as React from 'react';
import styles from './SpfxPnpPageprovisioning.module.scss';
import { ISpfxPnpPageprovisioningProps } from './ISpfxPnpPageprovisioningProps';
import { ISpfxPnpPageprovisioningState } from './ISpfxPnpPageprovisioningState';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/clientside-pages/web";
import { PrimaryButton, TextField } from 'office-ui-fabric-react';
import { ClientsideText, ClientsideWebpart } from "@pnp/sp/clientside-pages";
import "@pnp/sp/comments/clientside-page";

export default class SpfxPnpPageprovisioning extends React.Component<ISpfxPnpPageprovisioningProps, ISpfxPnpPageprovisioningState> {
  constructor(props: ISpfxPnpPageprovisioningProps) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = {
      title: '',
      name: ''
    }
  }

  @autobind
  private async _CreatePage() {
    //Page layout type are "Article" | "Home"
    const page = await sp.web.addClientsidePage(this.state.name, this.state.title, "Article");
    let section = page.addSection()
    //Column size factor. Max value is 12 (= one column), other options are 8,6,4 or 0
    let column1 = section.addColumn(8);
    let column2 = section.addColumn(4);

    column1.addControl(new ClientsideText("This is text added into column 1"))
    column2.addControl(new ClientsideText("This is text added into column 2"))

    const partDefs = await sp.web.getClientsideWebParts();
    const partDef = partDefs.filter(c => c.Id === "490d7c76-1824-45b2-9de3-676421c997fa");
    const part = ClientsideWebpart.fromComponentDef(partDef[0]);
    column1.addControl(part);
    await page.save();
    // //Header
    // page.topicHeader = "My cool header!";
    // page.headerTextAlignment = "Center";

    // //You can manage to show and hide the published date
    // page.showPublishDate = true;

    // //can hide/show the comments
    // await page.enableComments();
    // //Banner image can change like this
    // page.bannerImageUrl = "/server/relative/path/to/image.png";
  }

  public render(): React.ReactElement<ISpfxPnpPageprovisioningProps> {
    return (
      <div className={styles.spfxPnpPageprovisioning}>
        <TextField label="Page Name" onChanged={(val) => { this.setState({ name: val }) }} />
        <TextField label="Page Title" onChanged={(val) => { this.setState({ title: val }) }} />
        <br />
        <PrimaryButton text="Create Page" onClick={this._CreatePage} />
      </div>
    );
  }
}
