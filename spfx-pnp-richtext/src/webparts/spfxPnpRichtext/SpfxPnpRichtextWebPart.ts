import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import * as strings from 'SpfxPnpRichtextWebPartStrings';
import SpfxPnpRichtext from './components/SpfxPnpRichtext';
import { ISpfxPnpRichtextProps } from './components/ISpfxPnpRichtextProps';

export interface ISpfxPnpRichtextWebPartProps {
  description: string;
}

export default class SpfxPnpRichtextWebPart extends BaseClientSideWebPart<ISpfxPnpRichtextWebPartProps> {
  protected onInit() {
    sp.setup({
      spfxContext: this.context
    });
    return Promise.resolve<void>();
  }
  public async render() {
    const item: any = await sp.web.lists.getByTitle("Teams").items.getById(1).get();
    const element: React.ReactElement<ISpfxPnpRichtextProps> = React.createElement(
      SpfxPnpRichtext,
      {
        description: this.properties.description,
        context: this.context,
        richtext: item.Description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
