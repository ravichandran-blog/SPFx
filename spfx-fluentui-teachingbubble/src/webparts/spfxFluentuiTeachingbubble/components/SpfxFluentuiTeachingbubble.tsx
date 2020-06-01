import * as React from 'react';
import * as moment from 'moment';
import styles from './SpfxFluentuiTeachingbubble.module.scss';
import { ISpfxFluentuiTeachingbubbleProps } from './ISpfxFluentuiTeachingbubbleProps';
import { ISpfxFluentuiTeachingbubbleState } from './ISpfxFluentuiTeachingbubbleState';
import { ListView, IViewField, SelectionMode } from "@pnp/spfx-controls-react/lib/ListView";
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';

import { sp } from "@pnp/sp";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";

const options: IChoiceGroupOption[] = [
  { key: 'day', text: 'Day', iconProps: { iconName: 'CalendarDay' } },
  { key: 'week', text: 'Week', iconProps: { iconName: 'CalendarWeek' } },
  { key: 'month', text: 'Month', iconProps: { iconName: 'Calendar' }, disabled: true },
];




export default class SpfxFluentuiTeachingbubble extends React.Component<ISpfxFluentuiTeachingbubbleProps, ISpfxFluentuiTeachingbubbleState> {
  constructor(props: ISpfxFluentuiTeachingbubbleProps, state: ISpfxFluentuiTeachingbubbleState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    var _viewFields: IViewField[] = [
      {
        name: "Name",
        linkPropertyName: "ServerRelativeUrl",
        displayName: "Name",
        sorting: true,
        minWidth: 250,
      },
      {
        name: "Author.Title",
        displayName: "Author",
        sorting: false,
        minWidth: 200,
        render: (item: any) => {
          const authoremail = item['Author.UserPrincipalName'];
          return <a href={'mailto:' + authoremail}>{item['Author.Title']}</a>;
        }
      },
      {
        name: "TimeCreated",
        displayName: "Created",
        minWidth: 150,
        render: (item: any) => {
          const created = item["TimeCreated"];
          if (created) {
            const createdDate = moment(created);
            return <span>{createdDate.format('DD/MM/YYYY HH:mm:ss')}</span>;
          }
        }
      }
    ];
    this.state = { items: [], viewFields: _viewFields, bubble1: false, bubble2: false, bubble3: false, };
    this._getfiles();
  }

  @autobind
  private async _getfiles() {
    const allItems: any[] = await sp.web.getFolderByServerRelativeUrl("/sites/TheLanding/Policies").files.select().expand("ListItemAllFields,Author").get();
    this.setState({ items: allItems });
  }

  public render(): React.ReactElement<ISpfxFluentuiTeachingbubbleProps> {
    return (
      <div className={styles.spfxFluentuiTeachingbubble}>
        <DefaultButton href="http://bing.com" target="_blank" title="let us bing!" >
          Bing
        </DefaultButton>
        <br />
        <br />
        <ChoiceGroup label="Pick one icon" defaultSelectedKey="day" options={options} />

        <br />
        <br />
        <ListView
          items={this.state.items}
          viewFields={this.state.viewFields}
          iconFieldName="ServerRelativeUrl"
          compact={true}
          selectionMode={SelectionMode.multiple}
          selection={this._getSelection}
          showFilter={true}
          filterPlaceHolder="Search..." />



        <DefaultButton
          id="targetButton"
          onClick={this.toggleTeachingBubbleVisible}
          text={'Show TeachingBubble'}
        />

        {this.state.bubble1 && (
          <TeachingBubble
            target="#targetButton"
            primaryButtonProps={this.bubble1Next}
            secondaryButtonProps={this.bubble1Dontshowagain}
            footerContent="1 of 3"
            headline="Discover what’s trending around you">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni
            harum non?
          </TeachingBubble>
        )}
        {this.state.bubble2 && (
          <TeachingBubble
            target="#targetButton"
            primaryButtonProps={this.bubble2Previous}
            secondaryButtonProps={this.bubble2Next}
            onDismiss={this.toggleTeachingBubbleVisible}
            footerContent="2 of 3"
            headline="Discover what’s trending around you">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni
            harum non?
          </TeachingBubble>
        )}
        {this.state.bubble3 && (
          <TeachingBubble
            target="#targetButton"
            primaryButtonProps={this.bubble3Previous}
            secondaryButtonProps={this.bubble3Close}
            onDismiss={this.toggleTeachingBubbleVisible}
            footerContent="3 of 3"
            headline="Discover what’s trending around you">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni
            harum non?
          </TeachingBubble>
        )}
      </div>
    );
  }

  private onClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement, MouseEvent>) => console.log('test');


  private bubble1Next: IButtonProps = {
    children: 'Next',
    this.onClick:this._getSelection
  };

  private bubble1Dontshowagain: IButtonProps = {
    children: 'Close',
    text'nice'
  };

  private bubble2Previous: IButtonProps = {
    children: 'Previous',
  };

  private bubble2Next: IButtonProps = {
    children: 'Next',
  };

  private bubble3Previous: IButtonProps = {
    children: 'Previous',
  };

  private bubble3Close: IButtonProps = {
    children: 'Close',
  };

  @autobind
  private toggleTeachingBubbleVisible() {
    this.setState({ bubble1: true })
  }

  private _getSelection(items: any[]) {
    console.log('Selected items:', items);
  }
}
