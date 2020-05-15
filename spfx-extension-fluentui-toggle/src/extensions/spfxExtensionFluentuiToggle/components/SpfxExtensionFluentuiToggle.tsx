import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import * as React from 'react';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import styles from './SpfxExtensionFluentuiToggle.module.scss';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export interface ISpfxExtensionFluentuiToggleProps {
  text: string;
  listitemid: string;
  listname: string;
  context: any;
}

const LOG_SOURCE: string = 'SpfxExtensionFluentuiToggle';

export default class SpfxExtensionFluentuiToggle extends React.Component<ISpfxExtensionFluentuiToggleProps, {}> {
  constructor(props: ISpfxExtensionFluentuiToggleProps) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
  }

  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: SpfxExtensionFluentuiToggle mounted');
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: SpfxExtensionFluentuiToggle unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {
    let dvalue = false;
    if (this.props.text == 'Yes')
      dvalue = true;
    return (
      <div className={styles.cell}>
        <Toggle label="" onText="Active" offText="Inactive" onChange={this._onChange} defaultChecked={dvalue} />
      </div>
    );
  }

  @autobind
  private async _onChange(ev: React.MouseEvent<HTMLElement>, checked: boolean) {
    console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
    let list = sp.web.lists.getByTitle(this.props.listname);

    const i = await list.items.getById(+this.props.listitemid).update({
      Active: checked
    });

  }
}
