import * as React from 'react';
import styles from './SpfxReactConfetti.module.scss';
import { ISpfxReactConfettiProps } from './ISpfxReactConfettiProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Confetti from 'react-confetti'
import { PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';

const stackTokens: IStackTokens = { childrenGap: 40 };

export interface ISpfxReactConfettiState {
  showConfetti: boolean;
}

export default class SpfxReactConfetti extends React.Component<ISpfxReactConfettiProps, ISpfxReactConfettiState> {
  constructor(props: ISpfxReactConfettiProps, state: ISpfxReactConfettiState) {
    super(props);
    this.state = ({ showConfetti: true });
  }
  public render(): React.ReactElement<ISpfxReactConfettiProps> {
    return (
      <div className={styles.spfxReactConfetti}>
        {this.state.showConfetti == true ?
          <Confetti
            width={750}
            height={200}
          />
          : ''
        }
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <Stack horizontal tokens={stackTokens}>
                <a href="https://aka.ms/spfx" className={styles.button}>
                  <span className={styles.label}>Learn more</span>
                </a>
                <PrimaryButton text="Stop Confetti" onClick={() => this.setState({ showConfetti: false })} />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
