import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxPnpPeoplepickerWebPartStrings';
import SpfxPnpPeoplepicker from './components/SpfxPnpPeoplepicker';
import { ISpfxPnpPeoplepickerProps } from './components/ISpfxPnpPeoplepickerProps';

export interface ISpfxPnpPeoplepickerWebPartProps {
  description: string;
}

export default class SpfxPnpPeoplepickerWebPart extends BaseClientSideWebPart <ISpfxPnpPeoplepickerWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxPnpPeoplepickerProps> = React.createElement(
      SpfxPnpPeoplepicker,
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
