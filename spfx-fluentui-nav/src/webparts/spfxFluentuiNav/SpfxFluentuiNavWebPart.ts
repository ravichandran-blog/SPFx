import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxFluentuiNavWebPartStrings';
import SpfxFluentuiNav from './components/SpfxFluentuiNav';
import { ISpfxFluentuiNavProps } from './components/ISpfxFluentuiNavProps';

export interface ISpfxFluentuiNavWebPartProps {
  description: string;
}

export default class SpfxFluentuiNavWebPart extends BaseClientSideWebPart <ISpfxFluentuiNavWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxFluentuiNavProps> = React.createElement(
      SpfxFluentuiNav,
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
