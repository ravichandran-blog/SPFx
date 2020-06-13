import * as React from 'react';
import styles from './SpfxReceive.module.scss';
import { ISpfxReceiveProps } from './ISpfxReceiveProps';

export default class SpfxReceive extends React.Component<ISpfxReceiveProps, {}> {
  public render(): React.ReactElement<ISpfxReceiveProps> {
    return (
      <div className={styles.spfxReceive}>
        <h1>{this.props.title}</h1>
        <b>Selected List ID:</b>   {this.props.selectedlist}
      </div>
    );
  }
}
