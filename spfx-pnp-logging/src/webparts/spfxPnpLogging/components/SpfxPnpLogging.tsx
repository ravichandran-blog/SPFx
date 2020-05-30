import * as React from 'react';
import styles from './SpfxPnpLogging.module.scss';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

import {
  Logger,
  LogLevel
} from "@pnp/logging";

export default class SpfxPnpLogging extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.spfxPnpLogging}>
        <PrimaryButton onClick={this.btnclicked} text="Tigger"></PrimaryButton>
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