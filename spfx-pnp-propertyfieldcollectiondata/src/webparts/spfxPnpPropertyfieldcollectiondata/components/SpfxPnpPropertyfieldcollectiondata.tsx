import * as React from 'react';
import styles from './SpfxPnpPropertyfieldcollectiondata.module.scss';
import { ISpfxPnpPropertyfieldcollectiondataProps } from './ISpfxPnpPropertyfieldcollectiondataProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpfxPnpPropertyfieldcollectiondata extends React.Component<ISpfxPnpPropertyfieldcollectiondataProps, {}> {
  public render(): React.ReactElement<ISpfxPnpPropertyfieldcollectiondataProps> {
    return (
      <div className={ styles.spfxPnpPropertyfieldcollectiondata }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
