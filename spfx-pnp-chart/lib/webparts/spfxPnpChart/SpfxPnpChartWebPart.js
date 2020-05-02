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
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'SpfxPnpChartWebPartStrings';
import SpfxPnpChart from './components/SpfxPnpChart';
var SpfxPnpChartWebPart = /** @class */ (function (_super) {
    __extends(SpfxPnpChartWebPart, _super);
    function SpfxPnpChartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxPnpChartWebPart.prototype.render = function () {
        var element = React.createElement(SpfxPnpChart, {
            description: this.properties.description,
            context: this.context
        });
        ReactDom.render(element, this.domElement);
    };
    SpfxPnpChartWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(SpfxPnpChartWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SpfxPnpChartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return SpfxPnpChartWebPart;
}(BaseClientSideWebPart));
export default SpfxPnpChartWebPart;
//# sourceMappingURL=SpfxPnpChartWebPart.js.map