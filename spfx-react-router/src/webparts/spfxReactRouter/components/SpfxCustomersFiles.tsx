import * as React from 'react';
import styles from './SpfxReactRouter.module.scss';
import { ISpfxReactRouterProps } from './ISpfxReactRouterProps';




export default class SpfxCustomersFiles extends React.Component<ISpfxReactRouterProps, {}> {

  public render(): React.ReactElement<ISpfxReactRouterProps> {
    return (
      <div className={styles.spfxReactRouter}>
        <h1>Files Component</h1>
      </div>
    );
  }
}
