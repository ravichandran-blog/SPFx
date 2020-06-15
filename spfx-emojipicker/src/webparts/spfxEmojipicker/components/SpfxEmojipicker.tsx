import * as React from 'react';
import styles from './SpfxEmojipicker.module.scss';
import { ISpfxEmojipickerProps } from './ISpfxEmojipickerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { getEmojiDataFromNative, Emoji } from 'emoji-mart'
const data = require("emoji-mart/data/all.json");
import { NimblePicker } from 'emoji-mart'


export default class SpfxEmojipicker extends React.Component<ISpfxEmojipickerProps, {}> {

  constructor(props: ISpfxEmojipickerProps) {
    super(props);
  }
  public render(): React.ReactElement<ISpfxEmojipickerProps> {
    return (
      <div className={styles.spfxEmojipicker}>
        <Picker onSelect={(emoji) => { console.log(emoji) }} />
        <Emoji emoji={{ id: 'santa', skin: 3 }} size={32} />
        <Emoji emoji=':santa::skin-tone-3:' size={32} />
        <Emoji emoji='santa' set='apple' size={32} />
      </div>
    );
  }
}
