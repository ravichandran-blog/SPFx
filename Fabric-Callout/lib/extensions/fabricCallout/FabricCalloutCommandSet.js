var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { BaseListViewCommandSet } from '@microsoft/sp-listview-extensibility';
import Callout from '../components/Callout';
var FabricCalloutCommandSet = /** @class */ (function (_super) {
    __extends(FabricCalloutCommandSet, _super);
    function FabricCalloutCommandSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FabricCalloutCommandSet.prototype.onInit = function () {
        return Promise.resolve();
    };
    FabricCalloutCommandSet.prototype.onListViewUpdated = function (event) {
        var compareOneCommand = this.tryGetCommand('COMMAND_1');
        if (compareOneCommand) {
            // This command should be hidden unless exactly one row is selected.
            compareOneCommand.visible = event.selectedRows.length === 1;
        }
    };
    FabricCalloutCommandSet.prototype.onExecute = function (event) {
        switch (event.itemId) {
            case 'COMMAND_1':
                var callout = new Callout();
                callout.itemTitle = event.selectedRows[0].getValueByName('Title');
                callout.itemID = event.selectedRows[0].getValueByName('ID');
                callout.spcontext = this.context;
                callout.show();
                break;
            default:
                throw new Error('Unknown command');
        }
    };
    __decorate([
        override
    ], FabricCalloutCommandSet.prototype, "onInit", null);
    __decorate([
        override
    ], FabricCalloutCommandSet.prototype, "onListViewUpdated", null);
    __decorate([
        override
    ], FabricCalloutCommandSet.prototype, "onExecute", null);
    return FabricCalloutCommandSet;
}(BaseListViewCommandSet));
export default FabricCalloutCommandSet;
//# sourceMappingURL=FabricCalloutCommandSet.js.map