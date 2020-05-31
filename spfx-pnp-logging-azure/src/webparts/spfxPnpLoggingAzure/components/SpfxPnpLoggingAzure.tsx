import * as React from 'react';
import styles from './SpfxPnpLoggingAzure.module.scss';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

import {
  Logger,
  LogLevel
} from "@pnp/logging";

export default class SpfxPnpLoggingAzure extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div className={ styles.spfxPnpLoggingAzure }>
       <PrimaryButton onClick={this.btnclicked} text="Trigger"></PrimaryButton>
      </div>
    );
  }

  private btnclicked() {
    Logger.write("This information triggerd from react component");
    Logger.write("This warning triggerd from react component", LogLevel.Warning);
    Logger.write("This error triggerd from react component", LogLevel.Error);
    Logger.writeJSON({ FirstName: "Ravichandran", LastName: "Krishnasamy" }, LogLevel.Info);
  }
}
