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
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import FabricDetailsList from './components/FabricDetailsList';
var FabricDetailsListWebPart = /** @class */ (function (_super) {
    __extends(FabricDetailsListWebPart, _super);
    function FabricDetailsListWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FabricDetailsListWebPart.prototype.render = function () {
        var element = React.createElement(FabricDetailsList, {
            spcontect: this.context
        });
        ReactDom.render(element, this.domElement);
    };
    FabricDetailsListWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    return FabricDetailsListWebPart;
}(BaseClientSideWebPart));
export default FabricDetailsListWebPart;
//# sourceMappingURL=FabricDetailsListWebPart.js.map