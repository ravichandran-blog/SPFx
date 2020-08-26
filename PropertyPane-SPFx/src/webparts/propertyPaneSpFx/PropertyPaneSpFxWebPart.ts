import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration
} from '@microsoft/sp-property-pane';
import * as strings from 'PropertyPaneSpFxWebPartStrings';
import PropertyPaneSpFx from './components/PropertyPaneSpFx';
import { PropertyPanetextboxcustom } from './components/PropertyPaneControl';

export interface IPropertyPaneSpFxWebPartProps {
  selectedusers: any;
  onchange(stringvalue:string):void;
}

export default class PropertyPaneSpFxWebPart extends BaseClientSideWebPart<IPropertyPaneSpFxWebPartProps> {

  public render(): void {
    if(this.properties.selectedusers == "[]")
    {
      this.properties.selectedusers=[];
    }
    const element: React.ReactElement<IPropertyPaneSpFxWebPartProps> = React.createElement(
      PropertyPaneSpFx,
      {
        selectedusers: this.properties.selectedusers,
        onchange:this.onChanged
      }
    );
    ReactDom.render(element, this.domElement);
  }

  private onChanged(stringvalue:any): void {
    this.properties.selectedusers=stringvalue;
    this.render();
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
                PropertyPanetextboxcustom(this.properties.selectedusers,this.onChanged.bind(this), this.context)
              ]
            }
          ]
        }
      ]
    };
  }
}
