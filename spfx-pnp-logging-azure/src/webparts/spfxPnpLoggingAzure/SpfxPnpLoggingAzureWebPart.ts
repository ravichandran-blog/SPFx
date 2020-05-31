import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import SpfxPnpLoggingAzure from './components/SpfxPnpLoggingAzure';
import { appInsights } from './components/AppInsights';
import {
  Logger,
  ConsoleListener,
  ILogEntry,
  ILogListener,
  LogLevel
} from "@pnp/logging";
import { SeverityLevel } from '@microsoft/applicationinsights-web';


class CustomListener implements ILogListener {
  log(entry: ILogEntry): void {
    if (entry.level == LogLevel.Error)
      appInsights.trackException({ error: new Error(entry.message), severityLevel: SeverityLevel.Error });
    else if (entry.level == LogLevel.Warning)
      appInsights.trackException({ error: new Error(entry.message), severityLevel: SeverityLevel.Error });
    else if (entry.level == LogLevel.Info)
      appInsights.trackException({ error: new Error(entry.message), severityLevel: SeverityLevel.Error });
    else
      appInsights.trackException({ error: new Error(entry.message), severityLevel: SeverityLevel.Error });
  }
}


export default class SpfxPnpLoggingAzureWebPart extends BaseClientSideWebPart<{}> {

  public onInit(): Promise<void> {
    Logger.activeLogLevel = LogLevel.Info;
    Logger.subscribe(new ConsoleListener());
    Logger.subscribe(new CustomListener());
    return Promise.resolve<void>();
  }

  public render(): void {
    const element: React.ReactElement<{}> = React.createElement(SpfxPnpLoggingAzure);
    ReactDom.render(element, this.domElement);
  }
}
