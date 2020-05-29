import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxPnpPropertyfieldcollectiondataWebPartStrings';
import SpfxPnpPropertyfieldcollectiondata from './components/SpfxPnpPropertyfieldcollectiondata';
import { ISpfxPnpPropertyfieldcollectiondataProps } from './components/ISpfxPnpPropertyfieldcollectiondataProps';

import { PropertyFieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';


export interface ISpfxPnpPropertyfieldcollectiondataWebPartProps {
  description: string;
  collectionData: any[];
}

export default class SpfxPnpPropertyfieldcollectiondataWebPart extends BaseClientSideWebPart<ISpfxPnpPropertyfieldcollectiondataWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxPnpPropertyfieldcollectiondataProps> = React.createElement(
      SpfxPnpPropertyfieldcollectiondata,
      {
        description: this.properties.description,
        listinformation: this.properties.collectionData,
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
                }),
                PropertyFieldCollectionData("collectionData", {
                  key: "collectionData",
                  label: "Collection data",
                  panelHeader: "Collection data panel header",
                  manageBtnLabel: "Manage collection data",
                  value: this.properties.collectionData,
                  fields: [
                    {
                      id: "ColumnName",
                      title: "Column Name",
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                    {
                      id: "Description",
                      title: "Description",
                      type: CustomCollectionFieldType.string
                    },
                    {
                      id: "ColumnType",
                      title: "Column Type",
                      type: CustomCollectionFieldType.dropdown,
                      options: [
                        {
                          key: "Text",
                          text: "Text"
                        },
                        {
                          key: "List",
                          text: "List"
                        },
                        {
                          key: "YesNo",
                          text: "Yes/No"
                        }
                      ],
                      required: true
                    },
                    {
                      id: "Required",
                      title: "Required",
                      type: CustomCollectionFieldType.boolean
                    }
                  ],
                  disabled: false
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
