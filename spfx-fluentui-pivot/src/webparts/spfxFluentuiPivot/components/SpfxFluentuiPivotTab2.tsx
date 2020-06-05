import * as React from 'react';
import styles from './SpfxFluentuiPivot.module.scss';
import { ISpfxFluentuiPivotProps } from './ISpfxFluentuiPivotProps';

export default class SpfxFluentuiPivotTab2 extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div className={ styles.spfxFluentuiPivot }>
        Tab 2
      </div>
    );
  }
}
