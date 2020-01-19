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
import * as React from 'react';
import styles from './FabricPeoplePicker.module.scss';
import { NormalPeoplePicker } from 'office-ui-fabric-react/lib/Pickers';
import { SPHttpClient } from '@microsoft/sp-http';
import { autobind } from 'office-ui-fabric-react/lib//Utilities';
var FabricPeoplePicker = /** @class */ (function (_super) {
    __extends(FabricPeoplePicker, _super);
    function FabricPeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FabricPeoplePicker.prototype.render = function () {
        return (React.createElement("div", { className: styles.fabricPeoplePicker },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement(NormalPeoplePicker, { onResolveSuggestions: this._onFilterChanged, resolveDelay: 200 }))))));
    };
    FabricPeoplePicker.prototype._onFilterChanged = function (filterText) {
        if (filterText) {
            if (filterText.length > 2) {
                return this.searchPeople(filterText);
            }
        }
        else {
            return [];
        }
    };
    FabricPeoplePicker.prototype.searchPeople = function (terms) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.props.spcontect.spHttpClient.get(_this.props.spcontect.pageContext.web.absoluteUrl + "/_api/search/query?querytext='*" + terms + "*'&rowlimit=10&sourceid='b09a7990-05ea-4af9-81ef-edfab16c4e31'", SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'odata-version': ''
                }
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                var relevantResults = response.PrimaryQueryResult.RelevantResults;
                var resultCount = relevantResults.TotalRows;
                var people = [];
                if (resultCount > 0) {
                    relevantResults.Table.Rows.forEach(function (row) {
                        var persona = {};
                        row.Cells.forEach(function (cell) {
                            if (cell.Key === 'JobTitle')
                                persona.secondaryText = cell.Value;
                            if (cell.Key === 'PictureURL')
                                persona.imageUrl = cell.Value;
                            if (cell.Key === 'PreferredName')
                                persona.primaryText = cell.Value;
                        });
                        people.push(persona);
                    });
                }
                resolve(people);
            }, function (error) {
                reject();
            });
        });
    };
    __decorate([
        autobind
    ], FabricPeoplePicker.prototype, "_onFilterChanged", null);
    return FabricPeoplePicker;
}(React.Component));
export default FabricPeoplePicker;
//# sourceMappingURL=FabricPeoplePicker.js.map