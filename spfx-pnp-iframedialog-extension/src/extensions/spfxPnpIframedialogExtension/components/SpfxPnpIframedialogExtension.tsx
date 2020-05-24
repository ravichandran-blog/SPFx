import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';
import { IFrameDialog } from "@pnp/spfx-controls-react/lib/IFrameDialog";
import { DialogType, IconButton, IIconProps } from 'office-ui-fabric-react';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

import styles from './SpfxPnpIframedialogExtension.module.scss';

export interface ISpfxPnpIframedialogExtensionProps {
  FileName: string;
  FileURL: string;
}

export interface ISpfxPnpIframedialogExtensionState {
  souldhide: boolean;
}

const LOG_SOURCE: string = 'SpfxPnpIframedialogExtension';
const emojiIcon: IIconProps = { iconName: 'ViewOriginal' };

export default class SpfxPnpIframedialogExtension extends React.Component<ISpfxPnpIframedialogExtensionProps, ISpfxPnpIframedialogExtensionState> {
  constructor(props: ISpfxPnpIframedialogExtensionProps, state: ISpfxPnpIframedialogExtensionState) {
    super(props)
    this.state = ({ souldhide: true });
  }

  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: SpfxPnpIframedialogExtension mounted');
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: SpfxPnpIframedialogExtension unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.cell}>
        <IconButton iconProps={emojiIcon} onClick={this._alertClicked} />
        <IFrameDialog
          url={this.props.FileURL}
          hidden={this.state.souldhide}
          onDismiss={() => this.setState({ souldhide: true })}
          modalProps={{
            isBlocking: false
          }}
          dialogContentProps={{
            type: DialogType.close,
            showCloseButton: true
          }}
          width={'1000px'}
          height={'600px'} />

      </div>
    );
  }

  @autobind
  private _alertClicked() {
    this.setState({ souldhide: false });
  }
}
