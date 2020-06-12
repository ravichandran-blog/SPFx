import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxSendWebPartStrings';
import SpfxSend from './components/SpfxSend';
import { ISpfxSendProps } from './components/ISpfxSendProps';


import { IDynamicDataPropertyDefinition, IDynamicDataCallables } from '@microsoft/sp-dynamic-data';

export interface IProduct {
  product: string;
}



export interface ISpfxSendWebPartProps {
  description: string;
}

export default class SpfxSendWebPart extends BaseClientSideWebPart<ISpfxSendWebPartProps> implements IDynamicDataCallables {

  protected onInit(): Promise<void> {
    // register this web part as dynamic data source
    this.context.dynamicDataSourceManager.initializeSource(this);

    return Promise.resolve();
  }

  public getPropertyDefinitions(): ReadonlyArray<IDynamicDataPropertyDefinition> {
    return [
      {
        id: 'product',
        title: 'Product'
      }
    ];
  }
  private _selectedProduct: IProduct;

  private _productSelected = (product: IProduct): void => {
    this._selectedProduct = product;
    this.context.dynamicDataSourceManager.notifyPropertyChanged('product');
  }


  public getPropertyValue(propertyId: string): IProduct {
    switch (propertyId) {
      case 'product':
        return this._selectedProduct;
    }
    throw new Error('Bad property id');
  }



  public render(): void {
    const element: React.ReactElement<ISpfxSendProps> = React.createElement(
      SpfxSend,
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
