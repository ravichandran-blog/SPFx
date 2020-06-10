import * as React from 'react';
import styles from './SpfxReactRouter.module.scss';
import { ISpfxReactRouterProps } from './ISpfxReactRouterProps';

export default class SpfxCustomerDetails extends React.Component<ISpfxReactRouterProps, {}> {

  public render(): React.ReactElement<ISpfxReactRouterProps> {
    return (
      <div className={styles.spfxReactRouter}>
        <h1>Selected Customer Id is <span style={{color:'green'}}>{this.props["match"]["params"]["id"]}</span></h1>
      </div>
    );
  }
}
