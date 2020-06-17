import * as React from 'react';
import styles from './SpfxGoogletranslate.module.scss';
import { ISpfxGoogletranslateProps } from './ISpfxGoogletranslateProps';
import { escape } from '@microsoft/sp-lodash-subset';
import translate from 'translate';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { IDropdownOption, Dropdown } from 'office-ui-fabric-react';


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

const languages = [
  { key: '', text: 'Select a language' },
  { key: 'ab', text: 'Abkhazian' },
  { key: 'aa', text: 'Afar' },
  { key: 'af', text: 'Afrikaans' },
  { key: 'ak', text: 'Akan' },
  { key: 'sq', text: 'Albanian' },
  { key: 'am', text: 'Amharic' },
  { key: 'ar', text: 'Arabic' },
  { key: 'an', text: 'Aragonese' },
  { key: 'hy', text: 'Armenian' },
  { key: 'as', text: 'Assamese' },
  { key: 'av', text: 'Avaric' },
  { key: 'ae', text: 'Avestan' },
  { key: 'ay', text: 'Aymara' },
  { key: 'az', text: 'Azerbaijani' },
  { key: 'bm', text: 'Bambara' },
  { key: 'ba', text: 'Bashkir' },
  { key: 'eu', text: 'Basque' },
  { key: 'be', text: 'Belarusian' },
  { key: 'bn', text: 'Bengali' },
  { key: 'bh', text: 'Bihari languages' },
  { key: 'bi', text: 'Bislama' },
  { key: 'bs', text: 'Bosnian' },
  { key: 'br', text: 'Breton' },
  { key: 'bg', text: 'Bulgarian' },
  { key: 'my', text: 'Burmese' },
  { key: 'ca', text: 'Catalan, Valencian' },
  { key: 'km', text: 'Central Khmer' },
  { key: 'ch', text: 'Chamorro' },
  { key: 'ce', text: 'Chechen' },
  { key: 'ny', text: 'Chichewa, Chewa, Nyanja' },
  { key: 'zh', text: 'Chinese' },
  { key: 'cu', text: 'Church Slavonic, Old Bulgarian, Old Church Slavonic' },
  { key: 'cv', text: 'Chuvash' },
  { key: 'kw', text: 'Cornish' },
  { key: 'co', text: 'Corsican' },
  { key: 'cr', text: 'Cree' },
  { key: 'hr', text: 'Croatian' },
  { key: 'cs', text: 'Czech' },
  { key: 'da', text: 'Danish' },
  { key: 'dv', text: 'Divehi, Dhivehi, Maldivian' },
  { key: 'nl', text: 'Dutch, Flemish' },
  { key: 'dz', text: 'Dzongkha' },
  { key: 'en', text: 'English' },
  { key: 'eo', text: 'Esperanto' },
  { key: 'et', text: 'Estonian' },
  { key: 'ee', text: 'Ewe' },
  { key: 'fo', text: 'Faroese' },
  { key: 'fj', text: 'Fijian' },
  { key: 'fi', text: 'Finnish' },
  { key: 'fr', text: 'French' },
  { key: 'ff', text: 'Fulah' },
  { key: 'gd', text: 'Gaelic, Scottish Gaelic' },
  { key: 'gl', text: 'Galician' },
  { key: 'lg', text: 'Ganda' },
  { key: 'ka', text: 'Georgian' },
  { key: 'de', text: 'German' },
  { key: 'ki', text: 'Gikuyu, Kikuyu' },
  { key: 'el', text: 'Greek (Modern)' },
  { key: 'kl', text: 'Greenlandic, Kalaallisut' },
  { key: 'gn', text: 'Guarani' },
  { key: 'gu', text: 'Gujarati' },
  { key: 'ht', text: 'Haitian, Haitian Creole' },
  { key: 'ha', text: 'Hausa' },
  { key: 'he', text: 'Hebrew' },
  { key: 'hz', text: 'Herero' },
  { key: 'hi', text: 'Hindi' },
  { key: 'ho', text: 'Hiri Motu' },
  { key: 'hu', text: 'Hungarian' },
  { key: 'is', text: 'Icelandic' },
  { key: 'io', text: 'Ido' },
  { key: 'ig', text: 'Igbo' },
  { key: 'id', text: 'Indonesian' },
  { key: 'ia', text: 'Interlingua (International Auxiliary Language Association)' },
  { key: 'ie', text: 'Interlingue' },
  { key: 'iu', text: 'Inuktitut' },
  { key: 'ik', text: 'Inupiaq' },
  { key: 'ga', text: 'Irish' },
  { key: 'it', text: 'Italian' },
  { key: 'ja', text: 'Japanese' },
  { key: 'jv', text: 'Javanese' },
  { key: 'kn', text: 'Kannada' },
  { key: 'kr', text: 'Kanuri' },
  { key: 'ks', text: 'Kashmiri' },
  { key: 'kk', text: 'Kazakh' },
  { key: 'rw', text: 'Kinyarwanda' },
  { key: 'kv', text: 'Komi' },
  { key: 'kg', text: 'Kongo' },
  { key: 'ko', text: 'Korean' },
  { key: 'kj', text: 'Kwanyama, Kuanyama' },
  { key: 'ku', text: 'Kurdish' },
  { key: 'ky', text: 'Kyrgyz' },
  { key: 'lo', text: 'Lao' },
  { key: 'la', text: 'Latin' },
  { key: 'lv', text: 'Latvian' },
  { key: 'lb', text: 'Letzeburgesch, Luxembourgish' },
  { key: 'li', text: 'Limburgish, Limburgan, Limburger' },
  { key: 'ln', text: 'Lingala' },
  { key: 'lt', text: 'Lithuanian' },
  { key: 'lu', text: 'Luba-Katanga' },
  { key: 'mk', text: 'Macedonian' },
  { key: 'mg', text: 'Malagasy' },
  { key: 'ms', text: 'Malay' },
  { key: 'ml', text: 'Malayalam' },
  { key: 'mt', text: 'Maltese' },
  { key: 'gv', text: 'Manx' },
  { key: 'mi', text: 'Maori' },
  { key: 'mr', text: 'Marathi' },
  { key: 'mh', text: 'Marshallese' },
  { key: 'ro', text: 'Moldovan, Moldavian, Romanian' },
  { key: 'mn', text: 'Mongolian' },
  { key: 'na', text: 'Nauru' },
  { key: 'nv', text: 'Navajo, Navaho' },
  { key: 'nd', text: 'Northern Ndebele' },
  { key: 'ng', text: 'Ndonga' },
  { key: 'ne', text: 'Nepali' },
  { key: 'se', text: 'Northern Sami' },
  { key: 'no', text: 'Norwegian' },
  { key: 'nb', text: 'Norwegian Bokmål' },
  { key: 'nn', text: 'Norwegian Nynorsk' },
  { key: 'ii', text: 'Nuosu, Sichuan Yi' },
  { key: 'oc', text: 'Occitan (post 1500)' },
  { key: 'oj', text: 'Ojibwa' },
  { key: 'or', text: 'Oriya' },
  { key: 'om', text: 'Oromo' },
  { key: 'os', text: 'Ossetian, Ossetic' },
  { key: 'pi', text: 'Pali' },
  { key: 'pa', text: 'Panjabi, Punjabi' },
  { key: 'ps', text: 'Pashto, Pushto' },
  { key: 'fa', text: 'Persian' },
  { key: 'pl', text: 'Polish' },
  { key: 'pt', text: 'Portuguese' },
  { key: 'qu', text: 'Quechua' },
  { key: 'rm', text: 'Romansh' },
  { key: 'rn', text: 'Rundi' },
  { key: 'ru', text: 'Russian' },
  { key: 'sm', text: 'Samoan' },
  { key: 'sg', text: 'Sango' },
  { key: 'sa', text: 'Sanskrit' },
  { key: 'sc', text: 'Sardinian' },
  { key: 'sr', text: 'Serbian' },
  { key: 'sn', text: 'Shona' },
  { key: 'sd', text: 'Sindhi' },
  { key: 'si', text: 'Sinhala, Sinhalese' },
  { key: 'sk', text: 'Slovak' },
  { key: 'sl', text: 'Slovenian' },
  { key: 'so', text: 'Somali' },
  { key: 'st', text: 'Sotho, Southern' },
  { key: 'nr', text: 'South Ndebele' },
  { key: 'es', text: 'Spanish, Castilian' },
  { key: 'su', text: 'Sundanese' },
  { key: 'sw', text: 'Swahili' },
  { key: 'ss', text: 'Swati' },
  { key: 'sv', text: 'Swedish' },
  { key: 'tl', text: 'Tagalog' },
  { key: 'ty', text: 'Tahitian' },
  { key: 'tg', text: 'Tajik' },
  { key: 'ta', text: 'Tamil' },
  { key: 'tt', text: 'Tatar' },
  { key: 'te', text: 'Telugu' },
  { key: 'th', text: 'Thai' },
  { key: 'bo', text: 'Tibetan' },
  { key: 'ti', text: 'Tigrinya' },
  { key: 'to', text: 'Tonga (Tonga Islands)' },
  { key: 'ts', text: 'Tsonga' },
  { key: 'tn', text: 'Tswana' },
  { key: 'tr', text: 'Turkish' },
  { key: 'tk', text: 'Turkmen' },
  { key: 'tw', text: 'Twi' },
  { key: 'ug', text: 'Uighur, Uyghur' },
  { key: 'uk', text: 'Ukrainian' },
  { key: 'ur', text: 'Urdu' },
  { key: 'uz', text: 'Uzbek' },
  { key: 've', text: 'Venda' },
  { key: 'vi', text: 'Vietnamese' },
  { key: 'vo', text: 'Volap_k' },
  { key: 'wa', text: 'Walloon' },
  { key: 'cy', text: 'Welsh' },
  { key: 'fy', text: 'Western Frisian' },
  { key: 'wo', text: 'Wolof' },
  { key: 'xh', text: 'Xhosa' },
  { key: 'yi', text: 'Yiddish' },
  { key: 'yo', text: 'Yoruba' },
  { key: 'za', text: 'Zhuang, Chuang' },
  { key: 'zu', text: 'Zulu' }
];

interface ISpfxGoogletranslateState {
  toLanguage: string;
  content: string;
  userinput: string;
}

export default class SpfxGoogletranslate extends React.Component<ISpfxGoogletranslateProps, ISpfxGoogletranslateState> {
  constructor(props: ISpfxGoogletranslateProps, state: ISpfxGoogletranslateState) {
    super(props);
    this.state = ({ toLanguage: '', content: '', userinput: '' })
    this._translate();
  }

  private async _translate() {
    const result = await translate(this.state.userinput, { to: this.state.toLanguage, engine: 'google', key: 'AIzaSyCM_wBhu6T_fBU0f6vfi5Q9U_1ARuaN-oQ' });
    this.setState({ content: result })
  }

  public render(): React.ReactElement<ISpfxGoogletranslateProps> {
    return (
      <div className={styles.spfxGoogletranslate}>
        <Stack horizontal tokens={stackTokens} styles={stackStyles}>
          <Stack {...columnProps}>
            <TextField label="Original" multiline autoAdjustHeight onChanged={(newtext) => { this.setState({ userinput: newtext }); this._translate() }} />
          </Stack>
          <Stack {...smallcolumnProps}>
            <Dropdown
              placeholder="Select a language"
              label="Languages"
              options={languages}
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
