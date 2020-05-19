import * as React from 'react';
import styles from './SpfxPnpTaxonomypicker.module.scss';
import { ISpfxPnpTaxonomypickerProps } from './ISpfxPnpTaxonomypickerProps';
import { ISpfxPnpTaxonomypickerState } from './ISpfxPnpTaxonomypickerState';
import { TaxonomyPicker, IPickerTerms } from "@pnp/spfx-controls-react/lib/TaxonomyPicker";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/fields";
import { IField } from "@pnp/sp/fields/types";

export default class SpfxPnpTaxonomypicker extends React.Component<ISpfxPnpTaxonomypickerProps, ISpfxPnpTaxonomypickerState> {
  constructor(props: ISpfxPnpTaxonomypickerProps) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
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
          onChange={this.onMultySelectTaxPickerChange}
          isTermSetSelectable={false} />

      </div>
    );
  }

  //Use this function if your control's select type is Multy
  private async onMultySelectTaxPickerChange(terms: IPickerTerms) {
    let list = sp.web.lists.getByTitle("GroupTags");
    const field = await list.fields.getByTitle(`Tags_0`).get();
    let termsString: string = '';
    terms.forEach(function (v, i) {
      termsString += `-1;#${v.name}|${v.key};#`;
    })
    const data = {};
    data[field.InternalName] = termsString;
    const i = await list.items.getById(1).update(data);
  }

  //Use this function if your control's select type is Single
  private async onSingleSelectTaxPickerChange(terms: IPickerTerms) {
    const data = {};
    data['Tags'] = {
      "__metadata": { "type": "SP.Taxonomy.TaxonomyFieldValue" },
      "Label": terms[0].name,
      'TermGuid': terms[0].key,
      'WssId': '-1'
    };
    return await sp.web.lists.getByTitle("GroupTags").items.getById(1).update(data);
  }
}
