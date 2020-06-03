import * as React from 'react';
import styles from './SpfxAzureBingspellcheck.module.scss';
import { ISpfxAzureBingspellcheckProps } from './ISpfxAzureBingspellcheckProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpfxAzureBingspellcheck extends React.Component<ISpfxAzureBingspellcheckProps, {}> {
  public render(): React.ReactElement<ISpfxAzureBingspellcheckProps> {
    return (
      <div className={ styles.spfxAzureBingspellcheck }>
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
