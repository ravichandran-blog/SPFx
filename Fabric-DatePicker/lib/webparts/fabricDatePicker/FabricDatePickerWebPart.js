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
var ReactDom = require("react-dom");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var FabricDatePicker_1 = require("./components/FabricDatePicker");
var FabricPeoplePickerWebPart = (function (_super) {
    __extends(FabricPeoplePickerWebPart, _super);
    function FabricPeoplePickerWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FabricPeoplePickerWebPart.prototype.render = function () {
        var element = React.createElement(FabricDatePicker_1.default, {
            spcontect: this.context
        });
        ReactDom.render(element, this.domElement);
    };
    return FabricPeoplePickerWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = FabricPeoplePickerWebPart;

//# sourceMappingURL=FabricDatePickerWebPart.js.map
