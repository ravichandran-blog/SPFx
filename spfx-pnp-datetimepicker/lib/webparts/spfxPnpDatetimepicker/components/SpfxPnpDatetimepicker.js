var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import styles from './SpfxPnpDatetimepicker.module.scss';
import { sp } from "@pnp/sp";
import { DateTimePicker, DateConvention, TimeConvention, TimeDisplayControlType } from '@pnp/spfx-controls-react/lib/dateTimePicker';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
var SpfxPnpDatetimepicker = /** @class */ (function (_super) {
    __extends(SpfxPnpDatetimepicker, _super);
    function SpfxPnpDatetimepicker(props, state) {
        var _this = _super.call(this, props) || this;
        sp.setup({
            spfxContext: _this.props.context
        });
        _this.state = {
            StartDateTime: new Date(),
            DueDate: new Date(),
            SuccessMessage: ''
        };
        _this._getFiles();
        return _this;
    }
    SpfxPnpDatetimepicker.prototype._getFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.getByTitle("ActionInfo").items.getById(1).get()];
                    case 1:
                        item = _a.sent();
                        this.setState({
                            StartDateTime: new Date(item.StartDateTime),
                            DueDate: new Date(item.DueDate)
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SpfxPnpDatetimepicker.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.spfxPnpDatetimepicker },
            React.createElement(DateTimePicker, { label: "Start date and time", dateConvention: DateConvention.DateTime, timeConvention: TimeConvention.Hours12, timeDisplayControlType: TimeDisplayControlType.Dropdown, formatDate: function (date) { return date.toLocaleDateString(); }, showLabels: false, value: this.state.StartDateTime, onChange: function (date) { return _this.setState({ StartDateTime: date }); } }),
            React.createElement("label", { className: styles.label },
                "Selected value: ",
                this.state.StartDateTime.toString()),
            React.createElement(DateTimePicker, { label: "Due date", dateConvention: DateConvention.Date, timeConvention: TimeConvention.Hours12, timeDisplayControlType: TimeDisplayControlType.Dropdown, formatDate: function (date) { return date.toLocaleDateString(); }, showLabels: false, value: this.state.DueDate, onChange: function (date) { return _this.setState({ DueDate: date }); } }),
            React.createElement("label", { className: styles.label },
                "Selected value: ",
                this.state.DueDate.toString()),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("button", { className: styles.button, onClick: this.saveIntoSharePoint }, "Save"),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("label", { className: styles.label }, this.state.SuccessMessage)));
    };
    SpfxPnpDatetimepicker.prototype.saveIntoSharePoint = function () {
        return __awaiter(this, void 0, void 0, function () {
            var updatedItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.getByTitle("ActionInfo").items.getById(1).update({
                            StartDateTime: this.state.StartDateTime,
                            DueDate: this.state.DueDate
                        })];
                    case 1:
                        updatedItem = _a.sent();
                        this.setState({ SuccessMessage: 'Successfully saved' });
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        autobind
    ], SpfxPnpDatetimepicker.prototype, "_getFiles", null);
    __decorate([
        autobind
    ], SpfxPnpDatetimepicker.prototype, "saveIntoSharePoint", null);
    return SpfxPnpDatetimepicker;
}(React.Component));
export default SpfxPnpDatetimepicker;
//# sourceMappingURL=SpfxPnpDatetimepicker.js.map