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

export interface IList {
  selectedlist: string;
}

export interface ISpfxSendWebPartProps {
  description: string;
}

export default class SpfxSendWebPart extends BaseClientSideWebPart<ISpfxSendWebPartProps> implements IDynamicDataCallables {

  private _selectedlist: IList;
  protected onInit(): Promise<void> {
    this.context.dynamicDataSourceManager.initializeSource(this);
    this.context.dynamicDataSourceManager.notifyPropertyChanged('selectedlist');
    return Promise.resolve();
  }

  public getPropertyDefinitions(): ReadonlyArray<IDynamicDataPropertyDefinition> {
    return [
      {
        id: 'selectedlist',
        title: 'selectedlist'
      }
    ];
  }

  private _listelected = (list: IList): void => {
    this._selectedlist = list;
    this.context.dynamicDataSourceManager.notifyPropertyChanged('selectedlist');
  }

  public getPropertyValue(propertyId: string): IList {
    return this._selectedlist;
  }

  public render(): void {
    const element: React.ReactElement<ISpfxSendProps> = React.createElement(
      SpfxSend,
      {
        title: this.properties.description,
        context: this.context,
        _listelected: this._listelected
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
