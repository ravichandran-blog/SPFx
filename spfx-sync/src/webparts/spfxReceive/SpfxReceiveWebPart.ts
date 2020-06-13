import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDynamicFieldSet,
  PropertyPaneDynamicField,
  DynamicDataSharedDepth,
  IPropertyPaneConditionalGroup
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'SpfxReceiveWebPartStrings';
import SpfxReceive from './components/SpfxReceive';
import { ISpfxReceiveProps } from './components/ISpfxReceiveProps';
import { DynamicProperty } from '@microsoft/sp-component-base';
import { IWebPartPropertiesMetadata } from '@microsoft/sp-webpart-base';

export interface ISpfxReceiveWebPartProps {
  description: string;
  selectedlist: DynamicProperty<string>;
}

export default class SpfxReceiveWebPart extends BaseClientSideWebPart<ISpfxReceiveWebPartProps> {
  public render(): void {
    const selectedlist: string | undefined = this.properties.selectedlist.tryGetValue();
    const element: React.ReactElement<ISpfxReceiveProps> = React.createElement(
      SpfxReceive,
      {
        title: this.properties.description,
        selectedlist:selectedlist
      }
    );
    ReactDom.render(element, this.domElement);
  }

  protected get propertiesMetadata(): IWebPartPropertiesMetadata {
    return {
      'selectedlist': {
        dynamicPropertyType: 'string'
      }
    };
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
          groups: [
            {
              primaryGroup: {
                groupName: "PrimaryGroup",
                groupFields: [
                  PropertyPaneTextField('description', {
                    label: strings.DescriptionFieldLabel
                  })
                ]
              },
              secondaryGroup: {
                groupName: "SecondaryGroup",
                groupFields: [
                  PropertyPaneDynamicFieldSet({
                    label: 'selectedlist',
                    fields: [
                      PropertyPaneDynamicField('selectedlist', {
                        label: ""
                      })
                    ],
                    sharedConfiguration: {
                      depth: DynamicDataSharedDepth.Property
                    }
                  })
                ]
              },
              showSecondaryGroup: !!this.properties.selectedlist.tryGetSource()
            } as IPropertyPaneConditionalGroup
          ]
        }
      ]
    };
  }
}
