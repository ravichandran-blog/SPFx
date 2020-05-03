import * as React from 'react';
import styles from './SpfxPnpDatetimepicker.module.scss';
import { ISpfxPnpDatetimepickerProps } from './ISpfxPnpDatetimepickerProps';
import { ISpfxPnpDatetimepickerState } from './ISpfxPnpDatetimepickerState';
import { sp } from "@pnp/sp";
import { DateTimePicker, DateConvention, TimeConvention, TimeDisplayControlType } from '@pnp/spfx-controls-react/lib/dateTimePicker';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export default class SpfxPnpDatetimepicker extends React.Component<ISpfxPnpDatetimepickerProps, ISpfxPnpDatetimepickerState> {
  constructor(props: ISpfxPnpDatetimepickerProps, state: ISpfxPnpDatetimepickerState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = {
      StartDateTime: new Date(),
      DueDate: new Date(),
      SuccessMessage: ''
    }
    this._getFiles();
  }

  @autobind
  private async _getFiles() {
    const item: any = await sp.web.lists.getByTitle("ActionInfo").items.getById(1).get();
    this.setState({
      StartDateTime: new Date(item.StartDateTime),
      DueDate: new Date(item.DueDate)
    });
  }

  public render(): React.ReactElement<ISpfxPnpDatetimepickerProps> {
    return (
      <div className={styles.spfxPnpDatetimepicker}>
        <DateTimePicker label="Start date and time"
          dateConvention={DateConvention.DateTime}
          timeConvention={TimeConvention.Hours12}
          timeDisplayControlType={TimeDisplayControlType.Dropdown}
          formatDate={(date: Date) => date.toLocaleDateString()}
          showLabels={false}
          value={this.state.StartDateTime}
          onChange={(date: Date) => this.setState({ StartDateTime: date })}
        />
        <label className={styles.label}>Selected value: {this.state.StartDateTime.toString()}</label>
        <DateTimePicker label="Due date"
          dateConvention={DateConvention.Date}
          timeConvention={TimeConvention.Hours12}
          timeDisplayControlType={TimeDisplayControlType.Dropdown}
          formatDate={(date: Date) => date.toLocaleDateString()}
          showLabels={false}
          value={this.state.DueDate}
          onChange={(date: Date) => this.setState({ DueDate: date })}
        />
        <label className={styles.label}>Selected value: {this.state.DueDate.toString()}</label>
        <br></br><br></br>
        <button className={styles.button} onClick={this.saveIntoSharePoint}>Save</button>
        <br></br>
        <br></br>
        <label className={styles.label}>{this.state.SuccessMessage}</label>
      </div>
    );
  }

  @autobind
  private async saveIntoSharePoint() {
    const updatedItem = await sp.web.lists.getByTitle("ActionInfo").items.getById(1).update({
      StartDateTime: this.state.StartDateTime,
      DueDate: this.state.DueDate
    });
    this.setState({ SuccessMessage: 'Successfully saved' });
  }

}
