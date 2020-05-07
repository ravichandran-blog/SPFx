import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxPnpMapWebPartStrings';
import SpfxPnpMap from './components/SpfxPnpMap';
import { ISpfxPnpMapProps } from './components/ISpfxPnpMapProps';

export interface ISpfxPnpMapWebPartProps {
  description: string;
}

export default class SpfxPnpMapWebPart extends BaseClientSideWebPart <ISpfxPnpMapWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxPnpMapProps> = React.createElement(
      SpfxPnpMap,
      {
        description: this.properties.description,
        context:this.context
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
