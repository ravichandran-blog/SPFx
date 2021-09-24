import * as React from 'react';
import styles from './SpfxPnpDynamicform.module.scss';
import { ISpfxPnpDynamicformProps } from './ISpfxPnpDynamicformProps';
import { DynamicForm } from '@pnp/spfx-controls-react/lib/DynamicForm';

export default class SpfxPnpDynamicform extends React.Component<ISpfxPnpDynamicformProps, {}> {
  public render(): React.ReactElement<ISpfxPnpDynamicformProps> {
    return (
      <div className={styles.spfxPnpDynamicform}>
        <DynamicForm context={this.props.context} listId={"3071c058-549f-461d-9d73-8b9a52049a80"} listItemId={14}
          onBeforeSubmit={(listItemData) => { console.log(listItemData); return listItemData }}
          onSubmitted={async (listItemData) => { console.log(listItemData) }}></DynamicForm>
      </div>
    );
  }
}
