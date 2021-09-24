import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxPnpDynamicformWebPartStrings';
import SpfxPnpDynamicform from './components/SpfxPnpDynamicform';
import { ISpfxPnpDynamicformProps } from './components/ISpfxPnpDynamicformProps';

export interface ISpfxPnpDynamicformWebPartProps {
  description: string;
}

export default class SpfxPnpDynamicformWebPart extends BaseClientSideWebPart<ISpfxPnpDynamicformWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxPnpDynamicformProps> = React.createElement(
      SpfxPnpDynamicform,
      {
        description: this.properties.description,
        context: this.context
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
