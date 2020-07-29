import * as React from 'react';
import styles from './SpfxAzureTranslator.module.scss';
import { ISpfxAzureTranslatorProps } from './ISpfxAzureTranslatorProps';
import { ISpfxAzureTranslatorState } from './ISpfxAzureTranslatorState';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { IDropdownOption, Dropdown } from 'office-ui-fabric-react';
import $ from "jquery";


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

export default class SpfxAzureTranslator extends React.Component<ISpfxAzureTranslatorProps, ISpfxAzureTranslatorState> {
  constructor(props: ISpfxAzureTranslatorProps, state: ISpfxAzureTranslatorState) {
    super(props);
    this.state = ({ toLanguage: '', content: '', userinput: '', langarr: [] })
    this._getSupportedLangualge();
  }

  private async _getSupportedLangualge() {
    $.get({
      url: 'https://api.cognitive.microsofttranslator.com/languages?api-version=3.0&scope=translation'
    })
      .done((languages: any): void => {
        let droparr: IDropdownOption[] = []
        let langobjs = languages.translation;
        for (var key in langobjs) {
          if (langobjs.hasOwnProperty(key)) {
            droparr.push({ key: key, text: langobjs[key].name })
          }
        }
        this.setState({ langarr: droparr })
      }).fail(function (res) {
        console.log(res);
      });
  }

  private async _translate() {
    $.post({
      url: 'https://' + this.props.ServiceName + '.cognitiveservices.azure.com/sts/v1.0/issueToken',
      headers: {
        'Ocp-Apim-Subscription-Key': this.props.AzureSubscriptionKey,
        'Authorization': this.props.ServiceName + '.cognitiveservices.azure.com'
      }
    })
      .done((tocken: any): void => {
        $.post({
          url: 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=' + this.state.toLanguage,
          headers: {
            'Ocp-Apim-Subscription-Key': this.props.AzureSubscriptionKey,
            'Authorization': 'Bearer ' + tocken,
            'Content-Type': 'application/json'
          },
          data: JSON.stringify([{ "Text": this.state.userinput }])
        })
          .done((result: any): void => {
            console.log(result);
            this.setState({ content: result[0].translations[0].text })
          }).fail(function (res) {
            console.log(res);
          });

      }).fail(function (res) {
        console.log(res);
      });
  }

  public render(): React.ReactElement<ISpfxAzureTranslatorProps> {
    return (
      <div className={styles.spfxAzureTranslator}>
        <Stack horizontal tokens={stackTokens} styles={stackStyles}>
          <Stack {...columnProps}>
            <TextField label="Any language (auto deducted)" multiline autoAdjustHeight onChanged={(newtext) => { this.setState({ userinput: newtext }); this._translate() }} />
          </Stack>
          <Stack {...smallcolumnProps}>
            <Dropdown
              placeholder="Select a language"
              label="Select Language"
              options={this.state.langarr}
              onChanged={(value) => { this.setState({ toLanguage: value.key.toString() }); this._translate() }}
            />
          </Stack>
          <Stack {...columnProps}>
            <label>{this.state.content}</label>
          </Stack>
        </Stack>
      </div>
    );
  }
}
