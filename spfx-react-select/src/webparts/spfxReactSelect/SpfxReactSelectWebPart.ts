import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxReactSelectWebPartStrings';
import SpfxReactSelect from './components/SpfxReactSelect';
import { ISpfxReactSelectProps } from './components/ISpfxReactSelectProps';

export interface ISpfxReactSelectWebPartProps {
  description: string;
}

export default class SpfxReactSelectWebPart extends BaseClientSideWebPart <ISpfxReactSelectWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxReactSelectProps> = React.createElement(
      SpfxReactSelect,
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
