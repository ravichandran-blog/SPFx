import * as React from 'react';
import styles from './SpfxPnpPropertyfieldcollectiondata.module.scss';
import { ISpfxPnpPropertyfieldcollectiondataProps } from './ISpfxPnpPropertyfieldcollectiondataProps';
import { Link } from 'office-ui-fabric-react/lib/Link';

export default class SpfxPnpPropertyfieldcollectiondata extends React.Component<ISpfxPnpPropertyfieldcollectiondataProps, {}> {
  public render(): React.ReactElement<ISpfxPnpPropertyfieldcollectiondataProps> {
    return (
      <div className={styles.spfxPnpPropertyfieldcollectiondata}>
        <h2>{this.props.description}</h2>
        {this.props.listinformation &&
          <ul>
            {this.props.listinformation.map(function (linkinfo, i) {
              return <li><Link target={linkinfo.Openinnewtab ? '_blank' : '_self'} href={linkinfo.URL}>{linkinfo.LinkName}</Link></li>
            })}
          </ul>
        }
      </div>
    );
  }
}