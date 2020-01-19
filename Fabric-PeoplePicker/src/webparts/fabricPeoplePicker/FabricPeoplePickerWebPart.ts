import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'FabricPeoplePickerWebPartStrings';
import FabricPeoplePicker from './components/FabricPeoplePicker';
import { IFabricPeoplePickerProps } from './components/IFabricPeoplePickerProps';


export default class FabricPeoplePickerWebPart extends BaseClientSideWebPart<IFabricPeoplePickerProps> {

  public render(): void {
    const element: React.ReactElement<IFabricPeoplePickerProps > = React.createElement(
      FabricPeoplePicker,
      {
        description: this.properties.description,
        spcontect: this.context
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
