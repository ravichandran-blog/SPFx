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
import styles from './SpfxPnpFilepicker.module.scss';
import { sp } from "@pnp/sp";
import { FilePicker } from '@pnp/spfx-controls-react/lib';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";
var SpfxPnpFilepicker = /** @class */ (function (_super) {
    __extends(SpfxPnpFilepicker, _super);
    function SpfxPnpFilepicker(props, state) {
        var _this = _super.call(this, props) || this;
        sp.setup({
            spfxContext: _this.props.context
        });
        _this.state = {
            ImageURL: 'https://via.placeholder.com/150'
        };
        return _this;
    }
    SpfxPnpFilepicker.prototype.render = function () {
        return (React.createElement("div", { className: styles.spfxPnpFilepicker },
            React.createElement("img", { src: this.state.ImageURL, height: '150px', width: '150px' }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(FilePicker, { label: 'Select or upload image', buttonClassName: styles.button, buttonLabel: 'Images', accepts: [".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"], buttonIcon: "FileImage", onSave: this.saveIntoSharePoint, onChanged: this.saveIntoSharePoint, context: this.props.context })));
    };
    SpfxPnpFilepicker.prototype.saveIntoSharePoint = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (file.fileAbsoluteUrl == null) {
                    file.downloadFileContent()
                        .then(function (r) { return __awaiter(_this, void 0, void 0, function () {
                        var fileresult;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, sp.web.getFolderByServerRelativeUrl("/sites/TheLanding/Shared%20Documents/").files.add(file.fileName, r, true)];
                                case 1:
                                    fileresult = _a.sent();
                                    this.setState({ ImageURL: document.location.origin + fileresult.data.ServerRelativeUrl });
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                else {
                    this.setState({ ImageURL: file.fileAbsoluteUrl });
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        autobind
    ], SpfxPnpFilepicker.prototype, "saveIntoSharePoint", null);
    return SpfxPnpFilepicker;
}(React.Component));
export default SpfxPnpFilepicker;
//# sourceMappingURL=SpfxPnpFilepicker.js.map