import * as React from 'react';
import styles from './SpfxAzureBingspellcheck.module.scss';
import { ISpfxAzureBingspellcheckProps } from './ISpfxAzureBingspellcheckProps';
import { ISpfxAzureBingspellcheckState } from './ISpfxAzureBingspellcheckState';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const stackTokens = { childrenGap: 50 };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};
const smallcolumnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 180 } },
};


export default class SpfxAzureBingspellcheck extends React.Component<ISpfxAzureBingspellcheckProps, ISpfxAzureBingspellcheckState> {
  constructor(props: ISpfxAzureBingspellcheckProps, state: ISpfxAzureBingspellcheckState) {
    super(props);
    this.state = ({ content: '', processedcontnet: '' });
  }

  @autobind
  private async getSpellcheckedContent() {
    let text = this.state.content;
    if (text !== '') {
      let response = await fetch('https://api.cognitive.microsoft.com/bing/v7.0/spellcheck?text=' + text + '&mkt=en-US&mode=spell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Ocp-Apim-Subscription-Key': 'd4dccba163fb4b1d8e4b97cfdad952a5',
          'Content-Length': (text.length + 5) + ''
        },
        body: ''
      });
      let jresponse = await response.json();
      console.log(jresponse)
      jresponse.flaggedTokens.forEach(word => {
        text = text.replace(word.token, word.suggestions[0].suggestion);
      });
      this.setState({ processedcontnet: text })
    }
  }

  public render(): React.ReactElement<ISpfxAzureBingspellcheckProps> {
    return (
      <div className={styles.spfxAzureBingspellcheck}>
        <Stack horizontal tokens={stackTokens} styles={stackStyles}>
          <Stack {...columnProps}>
            <TextField label="Original" multiline autoAdjustHeight onChanged={(newtext) => this.setState({ content: newtext })} />
          </Stack>
          <Stack {...smallcolumnProps}>
            <PrimaryButton className={styles.button} text="Check spell >>" onClick={this._processClicked} />
          </Stack>
          <Stack {...columnProps}>
            <TextField label="Result" value={this.state.processedcontnet} multiline autoAdjustHeight />
          </Stack>
        </Stack>
      </div >
    );
  }

  @autobind
  private _processClicked(): void {
    this.getSpellcheckedContent();
  }
}
