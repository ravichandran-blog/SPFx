import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxGoogletranslateWebPartStrings';
import SpfxGoogletranslate from './components/SpfxGoogletranslate';
import { ISpfxGoogletranslateProps } from './components/ISpfxGoogletranslateProps';

export interface ISpfxGoogletranslateWebPartProps {
  description: string;
}

export default class SpfxGoogletranslateWebPart extends BaseClientSideWebPart <ISpfxGoogletranslateWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxGoogletranslateProps> = React.createElement(
      SpfxGoogletranslate,
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
