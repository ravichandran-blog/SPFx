import * as React from 'react';
import styles from './SpfxPnpLogging.module.scss';
import { ISpfxPnpLoggingProps } from './ISpfxPnpLoggingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as los from './Listener';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from "history";
import { AILogListenerService } from "./Listener";

import {
  Logger,
  ConsoleListener,
  LogLevel
} from "@pnp/logging";



const browserHistory = createBrowserHistory({ basename: '' });



export default class SpfxPnpLogging extends React.Component<ISpfxPnpLoggingProps, {}> {
  constructor(props: ISpfxPnpLoggingProps) {
    super(props)
    Logger.subscribe(new ConsoleListener());
    Logger.subscribe(new AILogListenerService());

  }
  public render(): React.ReactElement<ISpfxPnpLoggingProps> {
    return (
      <div className={styles.spfxPnpLogging}>
        <PrimaryButton onClick={this.btnclicked} text="nice"></PrimaryButton>
      </div>
    );
  }

  @autobind
  private btnclicked() {
    // write logs a simple string as the message value of the LogEntry
    Logger.write("This is logging a simple string");

    // optionally passing a level, default level is Verbose
    Logger.write("This is logging a simple string", LogLevel.Error);

    // this will convert the object to a string using JSON.stringify and set the message with the result
    Logger.writeJSON({ name: "value", name2: "value2" });

    // optionally passing a level, default level is Verbose
    Logger.writeJSON({ name: "value", name2: "value2" }, LogLevel.Warning);

    // specify the entire LogEntry interface using log
    Logger.log({
      data: { name: "value", name2: "value2" },
      level: LogLevel.Warning,
      message: "This is my message"
    });
  }
}

