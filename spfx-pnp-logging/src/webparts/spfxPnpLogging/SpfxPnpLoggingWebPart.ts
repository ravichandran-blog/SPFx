import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxPnpLoggingWebPartStrings';
import SpfxPnpLogging from './components/SpfxPnpLogging';
import { ISpfxPnpLoggingProps } from './components/ISpfxPnpLoggingProps';



import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from "history";




export interface ISpfxPnpLoggingWebPartProps {
  description: string;
}

export default class SpfxPnpLoggingWebPart extends BaseClientSideWebPart <ISpfxPnpLoggingWebPartProps> {



  public render(): void {

    const browserHistory = createBrowserHistory({ basename: '' });
    var reactPlugin = new ReactPlugin();
    var appInsights = new ApplicationInsights({
        config: {
            // instrumentationKey: 'YOUR_INSTRUMENTATION_KEY_GOES_HERE',
            instrumentationKey: '6c0f2fd6-76a0-4671-9fad-e3c75ee02901',
            extensions: [reactPlugin],
            extensionConfig: {
              [reactPlugin.identifier]: { history: browserHistory }
            }
        }
    });
    appInsights.loadAppInsights();


    const element: React.ReactElement<ISpfxPnpLoggingProps> = React.createElement(
      SpfxPnpLogging,
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
