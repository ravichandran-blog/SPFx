import * as React from 'react';
import styles from './SpfxPnpIconpicker.module.scss';
import { ISpfxPnpIconpickerProps } from './ISpfxPnpIconpickerProps';
import { IconPicker } from '@pnp/spfx-controls-react/lib/IconPicker';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Stack, IStackTokens } from 'office-ui-fabric-react';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

export interface ISpfxPnpIconpickerState {
  icon: string;
}

const iconClass = mergeStyles({
  fontSize: 50,
  height: 50,
  width: 50,
  margin: '0 25px',
});

const stackTokens: IStackTokens = { childrenGap: 40 };

export default class SpfxPnpIconpicker extends React.Component<ISpfxPnpIconpickerProps, ISpfxPnpIconpickerState> {
  constructor(props: ISpfxPnpIconpickerProps, state: ISpfxPnpIconpickerState) {
    super(props);
    this.state = ({ icon: '' });
  }
  public render(): React.ReactElement<ISpfxPnpIconpickerProps> {
    return (
      <div className={styles.spfxPnpIconpicker}>
        <Stack horizontal wrap tokens={stackTokens}>
          <Icon iconName={this.state.icon} className={iconClass} />
          <IconPicker buttonLabel={'Icon'}
            onChange={(iconName: string) => { this.setState({ icon: iconName }); }}
            onSave={(iconName: string) => { this.setState({ icon: iconName }); }} />
        </Stack>
      </div>
    );
  }
}
