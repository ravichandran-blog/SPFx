import * as React from 'react';
import styles from './SpfxCors.module.scss';
import { ISpfxCorsProps } from './ISpfxCorsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { HttpClient } from '@microsoft/sp-http';

export default class SpfxCors extends React.Component<ISpfxCorsProps, {}> {
  constructor(props: ISpfxCorsProps) {
    super(props);
    this._getFeeds();
  }

  private async _getFeeds() {
    // let response = await this.props.context.httpClient.get("https://kljdlkf87.azurewebsites.net/api/HttpTrigger1?code=XgdKg2k5zMRaOumro5Gv16uz81I1fp0yZyyUpiPES7cYHtskjgavMQ==", HttpClient.configurations.v1);
    let response = await this.props.context.httpClient.get("https://api.darksky.net/forecast/febb2871126cd24613f32a79c32d4158/1.222,2.333", HttpClient.configurations.v1);
    console.log(response);
    console.log("REST API response received.");
    let tasks = await response.json();
    console.log(tasks);

  }

  public render(): React.ReactElement<ISpfxCorsProps> {
    return (
      <div className={styles.spfxCors}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}