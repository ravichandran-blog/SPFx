import * as React from 'react';
import styles from './SpfxQrcode.module.scss';
import { ISpfxQrcodeProps } from './ISpfxQrcodeProps';

export default class SpfxQrcode extends React.Component<ISpfxQrcodeProps, {}> {
  public render(): React.ReactElement<ISpfxQrcodeProps> {
    return (
      <div className={styles.spfxQrcode}>
        <img className={styles.img} src={this.props.qrcodedata} alt={this.props.qrcontent} />
        <small>{this.props.qrcontent}</small>
      </div>
    );
  }
}
