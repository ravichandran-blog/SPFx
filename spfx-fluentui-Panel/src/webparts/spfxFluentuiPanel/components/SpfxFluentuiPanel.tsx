import * as React from 'react';
import styles from './SpfxFluentuiPanel.module.scss';
import { ISpfxFluentuiPanelProps } from './ISpfxFluentuiPanelProps';
import { ISpfxFluentuiPanelState } from './ISpfxFluentuiPanelState';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, IDropdownOption, Dropdown, IStackTokens, Stack, IIconProps, TextField, } from 'office-ui-fabric-react';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
const stackTokens: IStackTokens = { childrenGap: 20 };
const addIcon: IIconProps = { iconName: 'Add' };


export default class SpfxFluentuiPanel extends React.Component<ISpfxFluentuiPanelProps, ISpfxFluentuiPanelState> {
  constructor(props: ISpfxFluentuiPanelProps, state: ISpfxFluentuiPanelState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = { showpanel: false, projects: [] };
    this._getProjects();
  }

  private async _getProjects() {
    const allItems: any[] = await sp.web.lists.getByTitle("Projects").items.getAll();
    const options: IDropdownOption[] = [];
    allItems.forEach(function (v, i) {
      options.push({ key: v.ID, text: v.Title });
    });
    this.setState({ projects: options });
  }

  public render(): React.ReactElement<ISpfxFluentuiPanelProps> {
    let buttonStyles = { root: { marginRight: 8 } };
    const onRenderFooterContent = () => (
      <div>
        <PrimaryButton onClick={this._saveclick} styles={buttonStyles}>
          Save
        </PrimaryButton>
        <DefaultButton onClick={this._cancelclick}>Cancel</DefaultButton>
      </div>
    );

    return (
      <div className={styles.spfxFluentuiPanel}>
        <Stack tokens={stackTokens} verticalAlign="end">
          <Stack horizontal tokens={stackTokens} verticalAlign="end">
            <Dropdown className={styles.Dropdown}
              placeholder="Select a Project"
              label="Projects"
              options={this.state.projects}
            />
            <DefaultButton text="Project" iconProps={addIcon} onClick={() => this.setState({ showpanel: true, projectname: '' })} />
          </Stack>
        </Stack>
        {this.state.showpanel &&
          <Panel
            headerText={"New Project Name"}
            isOpen={true}
            isBlocking={false}
            closeButtonAriaLabel="Close"
            onRenderFooterContent={onRenderFooterContent}>
            <TextField placeholder={'Enter a new project name'} onChanged={(strproject) => this.setState({ projectname: strproject })}></TextField>
          </Panel>
        }

      </div>
    );
  }

  @autobind
  private async _saveclick() {
    if (this.state.projectname != '') {
      const iar = await sp.web.lists.getByTitle("Projects").items.add({
        Title: this.state.projectname,
      });
      const projectsarr = this.state.projects;
      projectsarr.push({ key: iar.data.ID, text: this.state.projectname })
      this.setState({ showpanel: false, projects: projectsarr });
    }
    else {
      //here you can add code for show error message if project name is blank
    }
  }

  @autobind
  private _cancelclick() {
    this.setState({ showpanel: false });
  }
}
