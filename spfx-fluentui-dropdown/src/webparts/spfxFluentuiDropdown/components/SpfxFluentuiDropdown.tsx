import * as React from 'react';
import styles from './SpfxFluentuiDropdown.module.scss';
import { ISpfxFluentuiDropdownProps } from './ISpfxFluentuiDropdownProps';
import { ISpfxFluentuiDropdownState } from './ISpfxFluentuiDropdownState';
import { Dropdown, IDropdownOption, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";


export default class SpfxFluentuiDropdown extends React.Component<ISpfxFluentuiDropdownProps, ISpfxFluentuiDropdownState> {
  constructor(props: ISpfxFluentuiDropdownProps, state: ISpfxFluentuiDropdownState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = ({ projectlookupvalues: [], salestitle: '', seletedprojects: null })
    this._getLookupvalues();
  }

  @autobind
  private async _getLookupvalues() {
    const allItems: any[] = await sp.web.lists.getByTitle("Projects").items.getAll();

    let projectarr: IDropdownOption[] = [];
    allItems.forEach(project => {
      projectarr.push({ key: project.ID, text: project.Title });
    })
    this.setState({
      projectlookupvalues: projectarr
    });
    this._getSalesInfo();
  }

  @autobind
  private async _getSalesInfo() {
    const salesitem: any = await sp.web.lists.getByTitle("Sales").items.getById(1).get();
    console.log(salesitem)
    this.setState({ seletedprojects: salesitem.ProjectsId, salestitle: salesitem.Title })
  }

  public render(): React.ReactElement<ISpfxFluentuiDropdownProps> {
    return (
      <div className={styles.spfxFluentuiDropdown}>
        <TextField
          className={styles.fixedwidth}
          label="Title" value={this.state.salestitle} onChanged={(titlevalue) => this.setState({ salestitle: titlevalue })} />
        {this.state.seletedprojects == null ? '' : <Dropdown
          placeholder="Select projects"
          label="Projects"
          onChange={this.projects_selection}
          multiSelect
          options={this.state.projectlookupvalues}
          className={styles.fixedwidth}
          defaultSelectedKeys={this.state.seletedprojects}
        />}

        <br />
        <PrimaryButton text="Save" onClick={this._savesales} />
      </div>
    );
  }

  @autobind
  private async _savesales() {
    await sp.web.lists.getByTitle("Sales").items.getById(1).update({
      Title: this.state.salestitle,
      ProjectsId: {
        results: this.state.seletedprojects
      }
    });
  }

  @autobind
  private projects_selection(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption) {
    if (item.selected) {
      let seleteditemarr = this.state.seletedprojects;
      seleteditemarr.push(+item.key);
      this.setState({ seletedprojects: seleteditemarr });
    }
    else {
      let seleteditemarr = this.state.seletedprojects;
      let i = seleteditemarr.indexOf(+item.key);
      if (i >= 0) {
        seleteditemarr.splice(i, 1);
      }
      this.setState({ seletedprojects: seleteditemarr });
    }
  }
}
