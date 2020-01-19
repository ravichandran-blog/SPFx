"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_http_1 = require("@microsoft/sp-http");
var DatePicker_1 = require("office-ui-fabric-react/lib/DatePicker");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var FabricDatePicker_module_scss_1 = require("./FabricDatePicker.module.scss");
var FabricDatePicker = (function (_super) {
    __extends(FabricDatePicker, _super);
    function FabricDatePicker(props, state) {
        var _this = _super.call(this, props) || this;
        _this.etag = undefined;
        _this._onSelectDate = function (date) {
            _this.setState({ birthday: date });
        };
        _this._onFormatDate = function (date) {
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        };
        _this.state = {
            birthday: null,
            message: ''
        };
        if (sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.SharePoint) {
            _this.props.spcontect.spHttpClient.get(_this.props.spcontect.pageContext.web.absoluteUrl + '/_api/web/lists/getbytitle(\'sampleLIST\')/items(1)', sp_http_1.SPHttpClient.configurations.v1).then(function (Response) {
                // this.etag = Response.headers.get('ETag');
                Response.json().then(function (listItem) {
                    _this.setState({ birthday: new Date(listItem.Birthday) });
                });
            });
        }
        else if (sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local) {
            // return (<div>Whoops! you are using local host...</div>);
        }
        _this._alertClicked = _this._alertClicked.bind(_this);
        return _this;
    }
    FabricDatePicker.prototype.render = function () {
        return (React.createElement("div", { className: FabricDatePicker_module_scss_1.default.fabricDatePicker },
            React.createElement("div", { id: "DivLocalHost" }),
            React.createElement("div", { className: FabricDatePicker_module_scss_1.default.container },
                React.createElement("div", { className: FabricDatePicker_module_scss_1.default.row },
                    React.createElement(Label_1.Label, null, "Birthday"),
                    React.createElement(DatePicker_1.DatePicker, { placeholder: "Select a date...", onSelectDate: this._onSelectDate, value: this.state.birthday, formatDate: this._onFormatDate, minDate: new Date(2000, 12, 30), isMonthPickerVisible: false }),
                    React.createElement("div", null,
                        React.createElement("div", { className: FabricDatePicker_module_scss_1.default.label },
                            React.createElement("label", null, this.state.message)),
                        React.createElement("div", { className: FabricDatePicker_module_scss_1.default.button },
                            React.createElement(Button_1.PrimaryButton, { "data-automation-id": "test", text: "Save", onClick: this._alertClicked })))))));
    };
    FabricDatePicker.prototype._alertClicked = function () {
        var _this = this;
        var body = JSON.stringify({
            '__metadata': {
                'type': 'SP.Data.SampleLISTListItem'
            },
            'Birthday': this.state.birthday
        });
        this.props.spcontect.spHttpClient.get(this.props.spcontect.pageContext.web.absoluteUrl + '/_api/web/lists/getbytitle(\'sampleLIST\')/items(1)', sp_http_1.SPHttpClient.configurations.v1).then(function (Response) {
            _this.props.spcontect.spHttpClient.post(_this.props.spcontect.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('sampleLIST')/items(1)", sp_http_1.SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'Content-type': 'application/json;odata=verbose',
                    'odata-version': '',
                    'IF-MATCH': Response.headers.get('ETag'),
                    'X-HTTP-Method': 'MERGE'
                },
                body: body
            }).then(function (response) {
                // Access properties of the response object. 
                _this.setState({ message: 'Successfully saved' });
                console.log("Status code: " + response.status);
                console.log("Status text: " + response.statusText);
                //response.json() returns a promise so you get access to the json in the resolve callback.
                response.json().then(function (responseJSON) {
                    console.log(responseJSON);
                });
            });
        });
    };
    return FabricDatePicker;
}(React.Component));
exports.default = FabricDatePicker;

//# sourceMappingURL=FabricDatePicker.js.map
