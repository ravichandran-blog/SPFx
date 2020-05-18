import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'SpfxQrcodeWebPartStrings';
import SpfxQrcode from './components/SpfxQrcode';
import { ISpfxQrcodeProps } from './components/ISpfxQrcodeProps';
import QRCode from 'qrcode'

export interface ISpfxQrcodeWebPartProps {
  qrcontent: string;
}

export default class SpfxQrcodeWebPart extends BaseClientSideWebPart<ISpfxQrcodeWebPartProps> {

  public render(): void {
    QRCode.toDataURL(this.properties.qrcontent)
      .then(url => {
        const element: React.ReactElement<ISpfxQrcodeProps> = React.createElement(
          SpfxQrcode,
          {
            qrcontent: this.properties.qrcontent,
            qrcodedata: url
          }
        );
        ReactDom.render(element, this.domElement);
      })
      .catch(err => {
        console.error(err)
      })
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
                PropertyPaneTextField('qrcontent', {
                  label: 'Code content'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
