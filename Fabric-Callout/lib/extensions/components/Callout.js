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
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import styles01 from './Callout.module.scss';
import { BaseDialog } from '@microsoft/sp-dialog';
import { SPHttpClient } from '@microsoft/sp-http';
var CalloutComponent = /** @class */ (function (_super) {
    __extends(CalloutComponent, _super);
    function CalloutComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalloutComponent.prototype.render = function () {
        ReactDOM.render(React.createElement(Cillout, { itemID: this.itemID, spcontext: this.spcontext, Title: this.itemTitle, domElement: document.activeElement.parentElement, onDismiss: this.onDismiss.bind(this) }), this.domElement);
    };
    CalloutComponent.prototype.getConfig = function () {
        return {
            isBlocking: false
        };
    };
    CalloutComponent.prototype.onDismiss = function () {
        ReactDOM.unmountComponentAtNode(this.domElement);
    };
    return CalloutComponent;
}(BaseDialog));
export default CalloutComponent;
var Cillout = /** @class */ (function (_super) {
    __extends(Cillout, _super);
    function Cillout(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            Title: _this.props.Title
        };
        _this.setState({ Title: _this.props.Title });
        _this._saveClicked = _this._saveClicked.bind(_this);
        _this._onChangedTitle = _this._onChangedTitle.bind(_this);
        return _this;
    }
    Cillout.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Callout, { className: styles01["ms-CalloutExample-callout"], role: "alertdialog", gapSpace: 0, target: this.props.domElement, onDismiss: this.onDismiss.bind(this), setInitialFocus: true, hidden: false },
                React.createElement("div", { className: styles01["ms-CalloutExample-header"] },
                    React.createElement("p", { className: styles01["ms-CalloutExample-title"] }, "Property panel")),
                React.createElement("div", { className: styles01["ms-CalloutExample-inner"] },
                    React.createElement("div", { className: styles01["ms-CalloutExample-content"] },
                        React.createElement("p", { className: styles01["ms-CalloutExample-subText"] },
                            React.createElement(TextField, { label: "Title", value: this.state.Title, underlined: true, onChanged: this._onChangedTitle }))),
                    React.createElement("div", { className: styles01["ms-CalloutExample-actions"] },
                        React.createElement(PrimaryButton, { text: "Save", onClick: this._saveClicked }))))));
    };
    Cillout.prototype.onDismiss = function (ev) {
        this.props.onDismiss();
    };
    Cillout.prototype._onChangedTitle = function (newValue) {
        this.setState({ Title: newValue });
    };
    Cillout.prototype._saveClicked = function () {
        var _this = this;
        var body = JSON.stringify({
            '__metadata': {
                'type': 'SP.Data.' + this.props.spcontext.pageContext.list.title + 'ListItem'
            },
            'Title': this.state.Title
        });
        this.props.spcontext.spHttpClient.get(this.props.spcontext.pageContext.web.absoluteUrl + ("/_api/web/lists/getbytitle('" + this.props.spcontext.pageContext.list.title + "')/items(") + this.props.itemID + ')', SPHttpClient.configurations.v1).then(function (Response) {
            _this.props.spcontext.spHttpClient.post(_this.props.spcontext.pageContext.web.absoluteUrl + ("/_api/web/lists/getbytitle('" + _this.props.spcontext.pageContext.list.title + "')/items(") + _this.props.itemID + ')', SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'Content-type': 'application/json;odata=verbose',
                    'odata-version': '',
                    'IF-MATCH': Response.headers.get('ETag'),
                    'X-HTTP-Method': 'MERGE'
                },
                body: body
            }).then(function (response) {
                console.log("Status code: " + response.status);
                console.log("Status text: " + response.statusText);
                _this.props.onDismiss();
            });
        });
    };
    return Cillout;
}(React.Component));
//# sourceMappingURL=Callout.js.map