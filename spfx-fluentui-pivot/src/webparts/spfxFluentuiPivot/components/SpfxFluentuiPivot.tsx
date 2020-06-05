import * as React from 'react';
import styles from './SpfxFluentuiPivot.module.scss';
import { ISpfxFluentuiPivotProps } from './ISpfxFluentuiPivotProps';
import SpfxFluentuiPivotTab1 from './SpfxFluentuiPivotTab1';
import SpfxFluentuiPivotTab2 from './SpfxFluentuiPivotTab2';
import SpfxFluentuiPivotTab3 from './SpfxFluentuiPivotTab3';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';


export default class SpfxFluentuiPivot extends React.Component<ISpfxFluentuiPivotProps, {}> {
  public render(): React.ReactElement<ISpfxFluentuiPivotProps> {
    return (
      <div className={styles.spfxFluentuiPivot}>
        <Pivot aria-label="Basic Pivot Example">
          <PivotItem headerText="New User">
            <SpfxFluentuiPivotTab1></SpfxFluentuiPivotTab1>
          </PivotItem>
          <PivotItem headerText="Users">
            <SpfxFluentuiPivotTab2></SpfxFluentuiPivotTab2>
          </PivotItem>
          <PivotItem headerText="Shared Memberships">
            <SpfxFluentuiPivotTab3></SpfxFluentuiPivotTab3>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}
