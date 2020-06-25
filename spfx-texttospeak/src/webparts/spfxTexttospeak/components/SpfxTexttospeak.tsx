import * as React from 'react';
import styles from './SpfxTexttospeak.module.scss';
import { ISpfxTexttospeakProps } from './ISpfxTexttospeakProps';
import { ISpfxTexttospeakState } from './ISpfxTexttospeakState';
import Speech from 'speak-tts'
import { TextField, DefaultButton, Stack, IStackTokens } from 'office-ui-fabric-react/lib';

const sectionStackTokens: IStackTokens = { childrenGap: 10 };
export default class SpfxTexttospeak extends React.Component<ISpfxTexttospeakProps, ISpfxTexttospeakState> {
  private speech: Speech;
  constructor(props: ISpfxTexttospeakProps, state: ISpfxTexttospeakState) {
    super(props);
    this.state = {
      textcontent: ''
    };
    
    this.speech = new Speech();
    this.speech
      .init({
        volume: 1,
        lang: 'en-GB',
        rate: 1,
        pitch: 1,
        'voice': 'Google UK English Male',
        //'splitSentences': false,
        listeners: {
          onvoiceschanged: voices => {
            console.log("Voices changed", voices);
          }
        }
      })
      .then(data => {
        console.log("Speech is ready", data);
      })
      .catch(e => {
        console.log("An error occured while initializing : ", e);
      });
  }
  
  public render(): React.ReactElement<ISpfxTexttospeakProps> {
    return (
      <div className={styles.spfxTexttospeak}>
        <TextField rows={10} label="Text content" multiline autoAdjustHeight onChange={(e, newval) => this.setState({ textcontent: newval })} />
        <br />
        <Stack horizontal tokens={sectionStackTokens}>
          <DefaultButton
            text={'Play'}
            allowDisabledFocus onClick={this.onclickPlay} />
          <DefaultButton
            text={'Stop'}
            allowDisabledFocus onClick={this.onclickStop} />
        </Stack>
      </div>
    );
  }

  private onclickPause = (): void => {
    this.speech
      .speak({
        text: this.state.textcontent,
        queue: false,
        listeners: {
          onstart: () => {
            console.log("Start utterance");
          },
          onend: () => {
            console.log("End utterance");
          },
          onresume: () => {
            console.log("Resume utterance");
          },
          onboundary: event => {
            console.log(
              event.name +
              " boundary reached after " +
              event.elapsedTime +
              " milliseconds."
            );
          }
        }
      })
      .then(data => {
        console.log("Success !", data);
      })
      .catch(e => {
        console.error("An error occurred :", e);
      });
  };

  private onclickStop = (): void => {
    this.speech.cancel();
  };

  private onclickPlay = (): void => {
    this.speech.speak({
      text: this.state.textcontent,
      queue: false,
      listeners: {
        onstart: () => {
          console.log("Start utterance");
        },
        onend: () => {
          console.log("End utterance");
        },
        onresume: () => {
          console.log("Resume utterance");

        },
        onboundary: event => {
          console.log(
            event.name +
            " boundary reached after " +
            event.elapsedTime +
            " milliseconds."
          );
        }
      }
    })
      .then(data => {
        console.log("Success !", data);
      })
      .catch(e => {
        console.error("An error occurred :", e);
      });
  }
}
