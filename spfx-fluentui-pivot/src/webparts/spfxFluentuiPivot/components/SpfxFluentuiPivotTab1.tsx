import * as React from 'react';
import styles from './SpfxFluentuiPivot.module.scss';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react';


export default class SpfxFluentuiPivotTab1 extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.spfxFluentuiPivot}>
        <h3>New user details</h3>
        <TextField label="First Name" />
        <TextField label="Last Name" />
        <TextField label="House number" />
        <TextField label="City" />
        <TextField label="State" />
        <br />
        <PrimaryButton text="Save" />
      </div>
    );
  }
}
