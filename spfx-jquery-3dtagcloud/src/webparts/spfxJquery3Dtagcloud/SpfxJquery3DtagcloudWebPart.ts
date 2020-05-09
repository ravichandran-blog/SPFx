import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxJquery3DtagcloudWebPartStrings';
import SpfxJquery3Dtagcloud from './components/SpfxJquery3Dtagcloud';
import { ISpfxJquery3DtagcloudProps } from './components/ISpfxJquery3DtagcloudProps';

export interface ISpfxJquery3DtagcloudWebPartProps {
  description: string;
}

export default class SpfxJquery3DtagcloudWebPart extends BaseClientSideWebPart <ISpfxJquery3DtagcloudWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxJquery3DtagcloudProps> = React.createElement(
      SpfxJquery3Dtagcloud,
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
