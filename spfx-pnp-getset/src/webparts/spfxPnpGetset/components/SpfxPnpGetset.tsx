import * as React from 'react';
import styles from './SpfxPnpGetset.module.scss';
import { ISpfxPnpGetsetProps } from './ISpfxPnpGetsetProps';
import { ISpfxPnpGetsetState } from './ISpfxPnpGetsetState';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";
import { ISiteUserProps } from "@pnp/sp/site-users/";
import "@pnp/sp/fields";

export default class SpfxPnpGetset extends React.Component<ISpfxPnpGetsetProps, ISpfxPnpGetsetState> {
  constructor(props: ISpfxPnpGetsetProps, state: ISpfxPnpGetsetState) {
    super(props);
    this._getListItem();
  }

  private async _getListItem() {
    const list = sp.web.lists.getByTitle("GetSet");
    const item: any = await list.items.getById(1).get();

    //get value
    let textvalue: string = item["Title"];
    let multipleLineTextValue: string = item["MultipleLinesText"];
    let multipleLineHTMLValue: string = item["MultipleLinesHTML"];
    let singleChoice: string = item["Location"];
    let multiChoice: string[] = item["Locations"];
    let numvervalue: number = item["Quantity"];
    let currencyvalue: number = item["Cost"];
    let datevalue: Date = item["BirthDay"];
    let lookupvalue: number = item["ColorId"];
    let lookupvalues: number[] = item["ColorsId"];
    let yesnovalue: boolean = item["IsActive"];
    let uservalue: number = item["OwnerId"];
    let usersvalue: number[] = item["OwnersId"];
    let linkvalue: object = item["Reference"];
    const Description = linkvalue["Description"];
    const Url = linkvalue["Url"];
    let tagvalue: any = item["Tag"];


    //set value 
    const i = await list.items.getById(1).update({
      Title: textvalue,
      MultipleLinesText: multipleLineTextValue,
      MultipleLinesHTML: multipleLineHTMLValue,
      Location: singleChoice,
      Locations: { results: multiChoice },
      Quantity: numvervalue,
      Cost: currencyvalue,
      BirthDay: datevalue,
      ColorId: lookupvalue,
      ColorsId: { results: lookupvalues },
      IsActive: yesnovalue,
      OwnerId: uservalue,
      OwnersId: { results: uservalue },
      Reference: {
        "__metadata": { type: "SP.FieldUrlValue" },
        Description: Description,
        Url: Url
      },
      Tag: {
        "__metadata": { "type": "SP.Taxonomy.TaxonomyFieldValue" },
        "Label": tagvalue.Label,
        'TermGuid': tagvalue.TermGuid,
        'WssId': '-1'
      }
    });

    //get value
    let tagsvalue: any = item["Tags"];
    let tagsString: string = '';
    tagsvalue.forEach(function (v, i) {
      tagsString += `${v.Label}|${v.TermGuid};`;
    })
    //set value 
    const ir = await list.items.getById(1).validateUpdateListItem([{
      ErrorMessage: null,
      FieldName: "Tags",
      FieldValue: tagsString,
      HasException: false
    }]);
  }



  public render(): React.ReactElement<ISpfxPnpGetsetProps> {
    return (
      <div className={styles.spfxPnpGetset}>
        This web part just for explain how to set and set value into SharePoint using PnP js
      </div>
    );
  }
}
