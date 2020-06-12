import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxReceiveWebPartStrings';
import SpfxReceive from './components/SpfxReceive';
import { ISpfxReceiveProps } from './components/ISpfxReceiveProps';


import { DynamicProperty } from '@microsoft/sp-component-base';
import { IWebPartPropertiesMetadata } from '@microsoft/sp-webpart-base';

import {
  PropertyPaneDynamicFieldSet,
  PropertyPaneDynamicField,
  DynamicDataSharedDepth,
  IPropertyPaneConditionalGroup
} from '@microsoft/sp-property-pane';

export interface ISpfxReceiveWebPartProps {
  description: string;
  product: DynamicProperty<string>;
}

export default class SpfxReceiveWebPart extends BaseClientSideWebPart<ISpfxReceiveWebPartProps> {

  
  public render(): void {
    const product: string | undefined = this.properties.product.tryGetValue();
    const needsConfiguration: boolean = (!product && !this.properties.product.tryGetSource());

    const element: React.ReactElement<ISpfxReceiveProps> = React.createElement(
      SpfxReceive,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get propertiesMetadata(): IWebPartPropertiesMetadata {
    return {
      'product': {
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
                groupName: "strings.DataGroupName",
                groupFields: [
                  PropertyPaneTextField('description', {
                    label: strings.DescriptionFieldLabel
                  })
                ]
              },
              secondaryGroup: {
                groupName: "strings.DataGroupName",
                groupFields: [
                  PropertyPaneDynamicFieldSet({
                    label: 'product',
                    fields: [
                      PropertyPaneDynamicField('product', {
                        label: "strings.ProductFieldLabel"
                      })
                    ],
                    sharedConfiguration: {
                      depth: DynamicDataSharedDepth.Property
                    }
                  })
                ]
              },
              showSecondaryGroup: !!this.properties.product.tryGetSource()
            } as IPropertyPaneConditionalGroup
          ]
        }
      ]
    };
  }
}
