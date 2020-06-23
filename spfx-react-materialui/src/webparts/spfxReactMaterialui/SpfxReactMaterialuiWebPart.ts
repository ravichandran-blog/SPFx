import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxReactMaterialuiWebPartStrings';
import SpfxReactMaterialui from './components/SpfxReactMaterialui';
import { ISpfxReactMaterialuiProps } from './components/ISpfxReactMaterialuiProps';

export interface ISpfxReactMaterialuiWebPartProps {
  description: string;
}

export default class SpfxReactMaterialuiWebPart extends BaseClientSideWebPart <ISpfxReactMaterialuiWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxReactMaterialuiProps> = React.createElement(
      SpfxReactMaterialui,
      {
        description: this.properties.description
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
