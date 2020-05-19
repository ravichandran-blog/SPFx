import * as React from 'react';
import styles from './SpfxPnpTaxonomypicker.module.scss';
import { ISpfxPnpTaxonomypickerProps } from './ISpfxPnpTaxonomypickerProps';
import { ISpfxPnpTaxonomypickerState } from './ISpfxPnpTaxonomypickerState';
import { escape } from '@microsoft/sp-lodash-subset';
import { TaxonomyPicker, IPickerTerms } from "@pnp/spfx-controls-react/lib/TaxonomyPicker";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";


export default class SpfxPnpTaxonomypicker extends React.Component<ISpfxPnpTaxonomypickerProps, ISpfxPnpTaxonomypickerState> {
  constructor(props: ISpfxPnpTaxonomypickerProps) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    // this.state = {

    // }
    this._gettags();
  }

  private async _gettags() {
    const item: any = await sp.web.lists.getByTitle("GroupTags").items.getById(1).get();
    console.log(item);
    // this.setState({
    //   location: { latitude: item.Latitude, longitude: item.Longitude },
    //   Name: item.Title
    // });

  }

  public render(): React.ReactElement<ISpfxPnpTaxonomypickerProps> {
    return (
      <div className={styles.spfxPnpTaxonomypicker}>
        <TaxonomyPicker allowMultipleSelections={true}
          termsetNameOrID="Department"
          panelTitle="Select Departments"
          label="Departments Picker"
          context={this.props.context}
          onChange={this.onTaxPickerChange}

          isTermSetSelectable={false} />

      </div>
    );
  }





  private async onTaxPickerChange(terms: IPickerTerms) {
    console.log("Terms", terms);
    let termsString: string = '';
    terms.forEach(function (v, i) {
      let guid = v.key;
      if (guid !== undefined) {
        guid = guid.replace('/Guid(', '').replace('/', '').replace(')', '');
      } else {
        guid = '';
      }
      termsString += `-1;#${v.name}|${guid};#`;
    })


    let list = sp.web.lists.getByTitle("GroupTags");


    terms.forEach(term => {

    })
    const data = {};
    data['Tags'] = termsString;



    const i = await list.items.getById(1).update(data);
  }
}
