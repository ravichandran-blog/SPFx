import * as React from 'react';
import styles from './PropertyPaneSpFx.module.scss';
import { IPropertyPaneSpFxWebPartProps } from '../PropertyPaneSpFxWebPart';
import { escape } from '@microsoft/sp-lodash-subset';
import { Persona } from 'office-ui-fabric-react/lib/Persona';


export default class PropertyPaneSpFx extends React.Component<IPropertyPaneSpFxWebPartProps, {}> {
  public render(): React.ReactElement<IPropertyPaneSpFxWebPartProps> {
    return (
      <div className={ styles.propertyPaneSpFx }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to Ravichandran blog!</span>
              <p className={ styles.subTitle }>Seleted Users</p>
                {this.props.selectedusers.map((row, index) => (
                        <Persona {...row}  />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
