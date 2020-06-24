import * as React from 'react';
import styles from './SpfxPnpGetset.module.scss';
import { ISpfxPnpGetsetProps } from './ISpfxPnpGetsetProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpfxPnpGetset extends React.Component<ISpfxPnpGetsetProps, {}> {
  public render(): React.ReactElement<ISpfxPnpGetsetProps> {
    return (
      <div className={ styles.spfxPnpGetset }>
       
      </div>
    );
  }
}
