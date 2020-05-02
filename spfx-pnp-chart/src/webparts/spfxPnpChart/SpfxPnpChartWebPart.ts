import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxPnpChartWebPartStrings';
import SpfxPnpChart from './components/SpfxPnpChart';
import { ISpfxPnpChartProps } from './components/ISpfxPnpChartProps';

export interface ISpfxPnpChartWebPartProps {
  description: string;
}

export default class SpfxPnpChartWebPart extends BaseClientSideWebPart <ISpfxPnpChartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxPnpChartProps> = React.createElement(
      SpfxPnpChart,
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
