import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxPnpLocationpickerWebPartStrings';
import SpfxPnpLocationpicker from './components/SpfxPnpLocationpicker';
import { ISpfxPnpLocationpickerProps } from './components/ISpfxPnpLocationpicker';

export interface ISpfxPnpLocationpickerWebPartProps {
  description: string;
}

export default class SpfxPnpLocationpickerWebPart extends BaseClientSideWebPart<ISpfxPnpLocationpickerWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxPnpLocationpickerProps> = React.createElement(
      SpfxPnpLocationpicker,
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
