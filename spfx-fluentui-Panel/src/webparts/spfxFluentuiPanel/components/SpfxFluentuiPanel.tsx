import * as React from 'react';
import styles from './SpfxFluentuiPanel.module.scss';
import { ISpfxFluentuiPanelProps } from './ISpfxFluentuiPanelProps';
import { ISpfxFluentuiPanelState } from './ISpfxFluentuiPanelState';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, IDropdownOption, Dropdown } from 'office-ui-fabric-react';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";



export default class SpfxFluentuiPanel extends React.Component<ISpfxFluentuiPanelProps, ISpfxFluentuiPanelState> {
  constructor(props: ISpfxFluentuiPanelProps, state: ISpfxFluentuiPanelState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = { description: "", colors: [] };
  }

  private async _getColors() {
    const allItems: any[] = await sp.web.lists.getByTitle("TreeLinks").items.getAll();
    const options: IDropdownOption[] = [
      { key: 'Red', text: 'Red' },
      { key: 'banana', text: 'Banana' },
      { key: 'orange', text: 'Orange', disabled: true },
      { key: 'grape', text: 'Grape' },
      { key: 'broccoli', text: 'Broccoli' },
      { key: 'carrot', text: 'Carrot' },
      { key: 'lettuce', text: 'Lettuce' },
    ];

    allItems.forEach(function (v, i) {

      console.log(v);
    });
    this.setState({ colors: options });
  }

  public render(): React.ReactElement<ISpfxFluentuiPanelProps> {
    let buttonStyles = { root: { marginRight: 8 } };
    const onRenderFooterContent = () => (
      <div>
        <PrimaryButton onClick={this._click} styles={buttonStyles}>
          Save
        </PrimaryButton>
        <DefaultButton onClick={this._click}>Cancel</DefaultButton>
      </div>
    );

    return (
      <div>
       <span><Dropdown
          placeholder="Select an option"
          label="Basic uncontrolled example"
          options={this.state.colors}
        />
         <DefaultButton text="Add new color" />
        </span> 

        <DefaultButton text="Open panel" />
        <Panel
          headerText="Sample panel"
          isOpen={true}
          closeButtonAriaLabel="Close"
          onRenderFooterContent={onRenderFooterContent}>
          <p>Content goes here.</p>
        </Panel>
      </div>
    );

    // return (
    //   <div className={styles.spfxFluentuiPanel}>
    //     <DefaultButton text="Open panel" onClick={openPanel} />
    //     <Panel
    //       isOpen={isOpen}
    //       onDismiss={dismissPanel}
    //       headerText="Panel with footer at bottom"
    //       closeButtonAriaLabel="Close"
    //       onRenderFooterContent={onRenderFooterContent}
    //       isFooterAtBottom={true}>
    //       <p>Content goes here.</p>
    //     </Panel>
    //   </div>
    // );
  }

  private _click() {

  }

  @autobind
  private onListPickerChange(selectedlist: string) {

  }

}
