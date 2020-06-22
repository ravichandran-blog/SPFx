import * as React from 'react';
import styles from './SpfxReactSelect.module.scss';
import { ISpfxReactSelectProps } from './ISpfxReactSelectProps';
import { ISpfxReactSelectState, Ioption } from './ISpfxReactSelectState';
import Select from 'react-select';
import { PrimaryButton, autobind } from 'office-ui-fabric-react';
import { IFieldInfo } from "@pnp/sp/fields/types";
import { sp } from "@pnp/sp";
import "@pnp/sp/fields";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export default class SpfxReactSelect extends React.Component<ISpfxReactSelectProps, ISpfxReactSelectState> {
  constructor(props: ISpfxReactSelectProps, state: ISpfxReactSelectState) {
    super(props);
    sp.setup({ spfxContext: this.props.context });
    this.state = ({ options: [], selectedvalue: null, selectedvalues: [] })
    this._getvalues();
  }

  private async _getvalues() {
    const field1: IFieldInfo = await sp.web.lists.getByTitle("Sales").fields.getByInternalNameOrTitle("Country")();
    let listofCountries: Ioption[] = [];
    field1["Choices"].forEach(function (Country, i) {
      listofCountries.push({ value: Country, label: Country });
    });
    const item: any = await sp.web.lists.getByTitle("Sales").items.getById(1).get();
    let selectedCountries: Ioption[] = [];
    item.Countries.forEach(function (selected, i) {
      selectedCountries.push({ value: selected, label: selected });
    });
    let selectedCountry: Ioption = { label: item.Country, value: item.Country };
    this.setState({ options: listofCountries, selectedvalue: selectedCountry, selectedvalues: selectedCountries })
  }

  public render(): React.ReactElement<ISpfxReactSelectProps> {
    return (
      <div className={styles.spfxReactSelect}>
        <label>Country</label>
        <Select
          className="basic-single"
          classNamePrefix="Select"
          isClearable={true}
          isSearchable={true}
          value={this.state.selectedvalue}
          options={this.state.options}
          onChange={(value) => this.setState({ selectedvalue: value })}
        />
        <br />
        <label>Countries</label>
        <Select
          className="basic-single"
          classNamePrefix="Select"
          isClearable={true}
          isSearchable={true}
          isMulti
          value={this.state.selectedvalues}
          options={this.state.options}
          onChange={(value) => this.setState({ selectedvalues: value })}
        />
        <br />
        <PrimaryButton text="Save" onClick={this._savevalues} />
      </div>
    );
  }

  @autobind
  private async _savevalues() {
    let res: string[] = [];
    this.state.selectedvalues.forEach(function (va, i) {
      res.push(va.value);
    });
    let list = sp.web.lists.getByTitle("Sales");
    const i = await list.items.getById(1).update({
      Country: this.state.selectedvalue.value,
      Countries: { results: res }
    });
  }
}
