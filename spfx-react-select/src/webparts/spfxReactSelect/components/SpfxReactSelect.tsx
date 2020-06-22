import * as React from 'react';
import styles from './SpfxReactSelect.module.scss';
import { ISpfxReactSelectProps } from './ISpfxReactSelectProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpfxReactSelect extends React.Component<ISpfxReactSelectProps, {}> {
  public render(): React.ReactElement<ISpfxReactSelectProps> {
    return (
      <div className={ styles.spfxReactSelect }>
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
