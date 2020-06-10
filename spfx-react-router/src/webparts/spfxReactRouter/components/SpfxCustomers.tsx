import * as React from 'react';
import styles from './SpfxReactRouter.module.scss';
import { ISpfxReactRouterProps } from './ISpfxReactRouterProps';




export default class SpfxCustomers extends React.Component<ISpfxReactRouterProps, {}> {

  public render(): React.ReactElement<ISpfxReactRouterProps> {
    return (
      <div className={ styles.spfxReactRouter }>
          <h1>Customers Component</h1>
          <h1><a href="#/Customer/153">Customer 153</a></h1>
          <h1><a href="#/Customer/154">Customer 153</a></h1>
          <h1><a href="#/Customer/155">Customer 153</a></h1>
          <h1><a href="#/Customer/156">Customer 153</a></h1>
      </div>
    );
  }
}
