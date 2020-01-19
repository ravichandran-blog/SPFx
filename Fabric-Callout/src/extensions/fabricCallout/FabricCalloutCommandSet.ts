import { override } from '@microsoft/decorators';
import {
  BaseListViewCommandSet,
  Command,
  IListViewCommandSetListViewUpdatedParameters,
  IListViewCommandSetExecuteEventParameters
} from '@microsoft/sp-listview-extensibility';
import Callout from '../components/Callout'; 

export default class FabricCalloutCommandSet extends BaseListViewCommandSet<{}> {
  @override
  public onInit(): Promise<void> {
    return Promise.resolve();
  }

  @override
  public onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void {
    const compareOneCommand: Command = this.tryGetCommand('COMMAND_1');
    if (compareOneCommand) {
      // This command should be hidden unless exactly one row is selected.
      compareOneCommand.visible = event.selectedRows.length === 1;
    }
  }

  @override
  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {
    switch (event.itemId) {
      case 'COMMAND_1':
        const callout: Callout = new Callout();
        callout.itemTitle=event.selectedRows[0].getValueByName('Title');
        callout.itemID=event.selectedRows[0].getValueByName('ID');
        callout.spcontext= this.context;
        callout.show();
        break;
      default:
        throw new Error('Unknown command');
    }
  }
}
