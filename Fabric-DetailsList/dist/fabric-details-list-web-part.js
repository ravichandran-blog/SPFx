define("87bc1c76-bfe9-4091-badd-b93e7d952be3_0.0.1", ["react","react-dom","@microsoft/sp-webpart-base","@microsoft/sp-core-library","@microsoft/sp-http"], function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(1);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// EXTERNAL MODULE: external "@microsoft/sp-webpart-base"
var sp_webpart_base_ = __webpack_require__(3);
var sp_webpart_base__default = /*#__PURE__*/__webpack_require__.n(sp_webpart_base_);

// CONCATENATED MODULE: ./node_modules/@uifabric/set-version/lib/setVersion.js
// A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
// this cache is local to the module closure inside this bundle
var packagesCache = {};
function setVersion(packageName, packageVersion) {
    if (typeof window !== 'undefined') {
        // tslint:disable-next-line:no-any
        var packages = (window.__packages__ = window.__packages__ || {});
        // We allow either the global packages or local packages caches to invalidate so testing can just clear the global to set this state
        if (!packages[packageName] || !packagesCache[packageName]) {
            packagesCache[packageName] = packageVersion;
            var versions = (packages[packageName] = packages[packageName] || []);
            versions.push(packageVersion);
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/set-version/lib/index.js


setVersion('@uifabric/set-version', '6.0.0');

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/version.js
// office-ui-fabric-react@6.143.0
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

setVersion('office-ui-fabric-react', '6.143.0');

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/Async.js
/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async_Async = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () {
            /* do nothing */
        };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            /* tslint:disable:ban-native-functions */
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    if (_this._onErrorHandler) {
                        _this._onErrorHandler(e);
                    }
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearTimeout(id);
            delete this._timeoutIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback) {
        var _this = this;
        var immediateId = 0;
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     */
    Async.prototype.clearImmediate = function (id) {
        if (this._immediateIds && this._immediateIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
            delete this._immediateIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            /* tslint:disable:ban-native-functions */
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearInterval(id);
            delete this._intervalIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = new Date().getTime();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () {
                return;
            };
            /* tslint:disable:no-any */
            noOpFunction.flush = (function () { return null; });
            /* tslint:enable:no-any */
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = new Date().getTime();
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof options.maxWait === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(_this._parent, lastArgs);
        };
        var callback = function (userCall) {
            var now = new Date().getTime();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(new Date().getTime());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(new Date().getTime());
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback) {
        var _this = this;
        var animationFrameId = 0;
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = window.requestAnimationFrame
                ? window.requestAnimationFrame(animationFrameCallback)
                : window.setTimeout(animationFrameCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id) {
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
            /* tslint:enable:ban-native-functions */
            delete this._animationFrameIds[id];
        }
    };
    // tslint:disable-next-line:no-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());


// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/Stylesheet.js

var InjectionMode = {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    none: 0,
    /**
     * Inserts rules using the insertRule api.
     */
    insertNode: 1,
    /**
     * Appends rules using appendChild.
     */
    appendChild: 2
};
var STYLESHEET_SETTING = '__stylesheet__';
// tslint:disable-next-line:no-any
var _global = {};
// Grab window.
try {
    _global = window;
}
catch (_a) {
    /* leave as blank object */
}
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet_Stylesheet = /** @class */ (function () {
    function Stylesheet(config) {
        this._rules = [];
        this._preservedRules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._keyToClassName = {};
        this._onResetCallbacks = [];
        // tslint:disable-next-line:no-any
        this._classNameToArgs = {};
        this._config = __assign({ injectionMode: InjectionMode.insertNode, defaultPrefix: 'css', namespace: undefined, cspSettings: undefined }, config);
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function () {
        // tslint:disable-next-line:no-any
        _stylesheet = _global[STYLESHEET_SETTING];
        if (!_stylesheet || (_stylesheet._lastStyleElement && _stylesheet._lastStyleElement.ownerDocument !== document)) {
            // tslint:disable-next-line:no-string-literal
            var fabricConfig = (_global && _global['FabricConfig']) || {};
            _stylesheet = _global[STYLESHEET_SETTING] = new Stylesheet(fabricConfig.mergeStyles);
        }
        return _stylesheet;
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = __assign({}, this._config, config);
    };
    /**
     * Configures a reset callback.
     *
     * @param callback - A callback which will be called when the Stylesheet is reset.
     */
    Stylesheet.prototype.onReset = function (callback) {
        this._onResetCallbacks.push(callback);
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var namespace = this._config.namespace;
        var prefix = displayName || this._config.defaultPrefix;
        return "" + (namespace ? namespace + '-' : '') + prefix + "-" + this._counter++;
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.args;
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.rules;
    };
    /**
     * Inserts a css rule into the stylesheet.
     * @param preserve - Preserves the rule beyond a reset boundary.
     */
    Stylesheet.prototype.insertRule = function (rule, preserve) {
        var injectionMode = this._config.injectionMode;
        var element = injectionMode !== InjectionMode.none ? this._getStyleElement() : undefined;
        if (preserve) {
            this._preservedRules.push(rule);
        }
        if (element) {
            switch (this._config.injectionMode) {
                case InjectionMode.insertNode:
                    var sheet = element.sheet;
                    try {
                        sheet.insertRule(rule, sheet.cssRules.length);
                    }
                    catch (e) {
                        // The browser will throw exceptions on unsupported rules (such as a moz prefix in webkit.)
                        // We need to swallow the exceptions for this scenario, otherwise we'd need to filter
                        // which could be slower and bulkier.
                    }
                    break;
                case InjectionMode.appendChild:
                    element.appendChild(document.createTextNode(rule));
                    break;
            }
        }
        else {
            this._rules.push(rule);
        }
        if (this._config.onInsertRule) {
            this._config.onInsertRule(rule);
        }
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function (includePreservedRules) {
        return (includePreservedRules ? this._preservedRules.join('') : '') + this._rules.join('') + this._rulesToInsert.join('');
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
        this._onResetCallbacks.forEach(function (callback) { return callback(); });
    };
    // Forces the regeneration of incoming styles without totally resetting the stylesheet.
    Stylesheet.prototype.resetKeys = function () {
        this._keyToClassName = {};
    };
    Stylesheet.prototype._getStyleElement = function () {
        var _this = this;
        if (!this._styleElement && typeof document !== 'undefined') {
            this._styleElement = this._createStyleElement();
            // Reset the style element on the next frame.
            window.requestAnimationFrame(function () {
                _this._styleElement = undefined;
            });
        }
        return this._styleElement;
    };
    Stylesheet.prototype._createStyleElement = function () {
        var styleElement = document.createElement('style');
        styleElement.setAttribute('data-merge-styles', 'true');
        styleElement.type = 'text/css';
        var cspSettings = this._config.cspSettings;
        if (cspSettings) {
            if (cspSettings.nonce) {
                styleElement.setAttribute('nonce', cspSettings.nonce);
            }
        }
        if (this._lastStyleElement && this._lastStyleElement.nextElementSibling) {
            document.head.insertBefore(styleElement, this._lastStyleElement.nextElementSibling);
        }
        else {
            document.head.appendChild(styleElement);
        }
        this._lastStyleElement = styleElement;
        return styleElement;
    };
    return Stylesheet;
}());


// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/transforms/kebabRules.js
function kebabRules(rulePairs, index) {
    rulePairs[index] = rulePairs[index].replace(/([A-Z])/g, '-$1').toLowerCase();
}

// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/getVendorSettings.js
var _vendorSettings;
function getVendorSettings() {
    if (!_vendorSettings) {
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = nav ? nav.userAgent.toLowerCase() : undefined;
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent)))
            };
        }
    }
    return _vendorSettings;
}
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/transforms/prefixRules.js

var autoPrefixNames = {
    'user-select': 1
};
function prefixRules(rulePairs, index) {
    var vendorSettings = getVendorSettings();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/transforms/provideUnits.js
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex-basis',
    'flex',
    'flex-grow',
    'flex-shrink',
    'fill-opacity',
    'opacity',
    'order',
    'z-index',
    'zoom'
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
        var unit = NON_PIXEL_NUMBER_PROPS.indexOf(name) === -1 ? 'px' : '';
        rulePairs[index + 1] = "" + value + unit;
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/transforms/rtlifyRules.js

var LEFT = 'left';
var RIGHT = 'right';
var NO_FLIP = '@noflip';
var NAME_REPLACEMENTS = (rtlifyRules__a = {},
    rtlifyRules__a[LEFT] = RIGHT,
    rtlifyRules__a[RIGHT] = LEFT,
    rtlifyRules__a);
var VALUE_REPLACEMENTS = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize'
};
var _rtl = getRTL();
/**
 * Sets the current RTL value.
 */
function setRTL(isRTL) {
    if (_rtl !== isRTL) {
        Stylesheet_Stylesheet.getInstance().resetKeys();
        _rtl = isRTL;
    }
}
/**
 * Gets the current RTL value.
 */
function getRTL() {
    if (_rtl === undefined) {
        _rtl = typeof document !== 'undefined' && !!document.documentElement && document.documentElement.getAttribute('dir') === 'rtl';
    }
    return _rtl;
}
/**
 * RTLifies the rulePair in the array at the current index. This mutates the array for performance
 * reasons.
 */
function rtlifyRules(rulePairs, index) {
    if (getRTL()) {
        var name_1 = rulePairs[index];
        if (!name_1) {
            return;
        }
        var value = rulePairs[index + 1];
        if (typeof value === 'string' && value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf(LEFT) >= 0) {
            rulePairs[index] = name_1.replace(LEFT, RIGHT);
        }
        else if (name_1.indexOf(RIGHT) >= 0) {
            rulePairs[index] = name_1.replace(RIGHT, LEFT);
        }
        else if (String(value).indexOf(LEFT) >= 0) {
            rulePairs[index + 1] = value.replace(LEFT, RIGHT);
        }
        else if (String(value).indexOf(RIGHT) >= 0) {
            rulePairs[index + 1] = value.replace(RIGHT, LEFT);
        }
        else if (NAME_REPLACEMENTS[name_1]) {
            rulePairs[index] = NAME_REPLACEMENTS[name_1];
        }
        else if (VALUE_REPLACEMENTS[value]) {
            rulePairs[index + 1] = VALUE_REPLACEMENTS[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
/**
 * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
 */
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
/**
 * Given a string quad, flips the left and right values.
 */
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
        }
    }
    return value;
}
var rtlifyRules__a;

// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/styleToClassName.js





var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
var globalSelectorRegExp = /\:global\((.+?)\)/g;
/**
 * Finds comma separated selectors in a :global() e.g. ":global(.class1, .class2, .class3)"
 * and wraps them each in their own global ":global(.class1), :global(.class2), :global(.class3)"
 *
 * @param selectorWithGlobals The selector to process
 * @returns The updated selector
 */
function expandCommaSeparatedGlobals(selectorWithGlobals) {
    // We the selector does not have a :global() we can shortcut
    if (!globalSelectorRegExp.test(selectorWithGlobals)) {
        return selectorWithGlobals;
    }
    var replacementInfo = [];
    var findGlobal = /\:global\((.+?)\)/g;
    var match = null;
    // Create a result list for global selectors so we can replace them.
    while ((match = findGlobal.exec(selectorWithGlobals))) {
        // Only if the found selector is a comma separated list we'll process it.
        if (match[1].indexOf(',') > -1) {
            replacementInfo.push([
                match.index,
                match.index + match[0].length,
                // Wrap each of the found selectors in :global()
                match[1]
                    .split(',')
                    .map(function (v) { return ":global(" + v.trim() + ")"; })
                    .join(', ')
            ]);
        }
    }
    // Replace the found selectors with their wrapped variants in reverse order
    return replacementInfo.reverse().reduce(function (selector, _a) {
        var matchIndex = _a[0], matchEndIndex = _a[1], replacement = _a[2];
        var prefix = selector.slice(0, matchIndex);
        var suffix = selector.slice(matchEndIndex);
        return prefix + replacement + suffix;
    }, selectorWithGlobals);
}
function expandSelector(newSelector, currentSelector) {
    if (newSelector.indexOf(':global(') >= 0) {
        return newSelector.replace(globalSelectorRegExp, '$1');
    }
    else if (newSelector.indexOf(':') === 0) {
        return currentSelector + newSelector;
    }
    else if (newSelector.indexOf('&') < 0) {
        return currentSelector + ' ' + newSelector;
    }
    return newSelector;
}
function extractRules(args, rules, currentSelector) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var stylesheet = Stylesheet_Stylesheet.getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules, currentSelector);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector);
        }
        else {
            // tslint:disable-next-line:no-any
            for (var prop in arg) {
                if (prop === 'selectors') {
                    // tslint:disable-next-line:no-any
                    var selectors = arg.selectors;
                    for (var newSelector in selectors) {
                        if (selectors.hasOwnProperty(newSelector)) {
                            var selectorValue = selectors[newSelector];
                            if (newSelector.indexOf('@') === 0) {
                                newSelector = newSelector + '{' + currentSelector;
                                extractRules([selectorValue], rules, newSelector);
                            }
                            else if (newSelector.indexOf(',') > -1) {
                                var commaSeparatedSelectors = expandCommaSeparatedGlobals(newSelector)
                                    .split(/,/g)
                                    .map(function (s) { return s.trim(); });
                                extractRules([selectorValue], rules, commaSeparatedSelectors
                                    .map(function (commaSeparatedSelector) { return expandSelector(commaSeparatedSelector, currentSelector); })
                                    .join(', '));
                            }
                            else {
                                extractRules([selectorValue], rules, expandSelector(newSelector, currentSelector));
                            }
                        }
                    }
                }
                else {
                    if (arg[prop] !== undefined) {
                        // Else, add the rule to the currentSelector.
                        if (prop === 'margin' || prop === 'padding') {
                            // tslint:disable-next-line:no-any
                            expandQuads(currentRules, prop, arg[prop]);
                        }
                        else {
                            // tslint:disable-next-line:no-any
                            currentRules[prop] = arg[prop];
                        }
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = typeof value === 'string' ? value.split(' ') : [value];
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(rules) {
    var serialized = [];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function serializeRuleEntries(ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME && ruleEntries[entry] !== undefined) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        kebabRules(allEntries, i);
        provideUnits(allEntries, i);
        rtlifyRules(allEntries, i);
        prefixRules(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
function styleToRegistration() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var rules = extractRules(args);
    var key = getKeyForRules(rules);
    if (key) {
        var stylesheet = Stylesheet_Stylesheet.getInstance();
        var registration = {
            className: stylesheet.classNameFromKey(key),
            key: key,
            args: args
        };
        if (!registration.className) {
            registration.className = stylesheet.getClassName(getDisplayName(rules));
            var rulesToInsert = [];
            for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
                var selector = _b[_a];
                rulesToInsert.push(selector, serializeRuleEntries(rules[selector]));
            }
            registration.rulesToInsert = rulesToInsert;
        }
        return registration;
    }
}
function applyRegistration(registration, classMap) {
    var stylesheet = Stylesheet_Stylesheet.getInstance();
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
        // rulesToInsert is an ordered array of selector/rule pairs.
        for (var i = 0; i < rulesToInsert.length; i += 2) {
            var rules = rulesToInsert[i + 1];
            if (rules) {
                var selector = rulesToInsert[i];
                // Fix selector using map.
                selector = selector.replace(/(&)|\$([\w-]+)\b/g, function (match, amp, cn) {
                    if (amp) {
                        return '.' + registration.className;
                    }
                    else if (cn) {
                        return '.' + ((classMap && classMap[cn]) || cn);
                    }
                    return '';
                });
                // Insert. Note if a media query, we must close the query with a final bracket.
                var processedRule = selector + "{" + rules + "}" + (selector.indexOf('@') === 0 ? '}' : '');
                stylesheet.insertRule(processedRule);
            }
        }
        stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
}
function styleToClassName() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var registration = styleToRegistration.apply(void 0, args);
    if (registration) {
        applyRegistration(registration);
        return registration.className;
    }
    return '';
}

// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/extractStyleParts.js

/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */
function extractStyleParts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = Stylesheet_Stylesheet.getInstance();
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    if (arg.indexOf(' ') >= 0) {
                        _processArgs(arg.split(' '));
                    }
                    else {
                        var translatedArgs = stylesheet.argsFromClassName(arg);
                        if (translatedArgs) {
                            _processArgs(translatedArgs);
                        }
                        else {
                            // Avoid adding the same class twice.
                            if (classes.indexOf(arg) === -1) {
                                classes.push(arg);
                            }
                        }
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    return {
        classes: classes,
        objects: objects
    };
}

// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/mergeStyles.js


/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = extractStyleParts(args), classes = _a.classes, objects = _a.objects;
    if (objects.length) {
        classes.push(styleToClassName(objects));
    }
    return classes.join(' ');
}

// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/concatStyleSets.js
/**
 * Combine a set of styles together (but does not register css classes).
 * @param styleSets - One or more stylesets to be merged (each param can also be falsy).
 */
function concatStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    var mergedSet = {};
    // We process sub component styles in two phases. First we collect them, then we combine them into 1 style function.
    var workingSubcomponentStyles = {};
    for (var _a = 0, styleSets_1 = styleSets; _a < styleSets_1.length; _a++) {
        var currentSet = styleSets_1[_a];
        if (currentSet) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    if (prop === 'subComponentStyles' && currentSet.subComponentStyles !== undefined) {
                        // subcomponent styles - style functions or objects
                        var currentComponentStyles = currentSet.subComponentStyles;
                        for (var subCompProp in currentComponentStyles) {
                            if (currentComponentStyles.hasOwnProperty(subCompProp)) {
                                if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                                    workingSubcomponentStyles[subCompProp].push(currentComponentStyles[subCompProp]);
                                }
                                else {
                                    workingSubcomponentStyles[subCompProp] = [currentComponentStyles[subCompProp]];
                                }
                            }
                        }
                        continue;
                    }
                    // the as any casts below is a workaround for ts 2.8.
                    // todo: remove cast to any in ts 2.9.
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = (Array.isArray(mergedValue) ? mergedValue : [mergedValue]).concat((Array.isArray(currentValue) ? currentValue : [currentValue]));
                    }
                }
            }
        }
    }
    if (Object.keys(workingSubcomponentStyles).length > 0) {
        mergedSet.subComponentStyles = {};
        var mergedSubStyles = mergedSet.subComponentStyles;
        var _loop_1 = function (subCompProp) {
            if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                var workingSet_1 = workingSubcomponentStyles[subCompProp];
                mergedSubStyles[subCompProp] = function (styleProps) {
                    return concatStyleSets.apply(void 0, workingSet_1.map(function (styleFunctionOrObject) {
                        return typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject;
                    }));
                };
            }
        };
        // now we process the subcomponent styles if there are any
        for (var subCompProp in workingSubcomponentStyles) {
            _loop_1(subCompProp);
        }
    }
    return mergedSet;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/mergeStyleSets.js



/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 */
function mergeStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-any
    var classNameSet = { subComponentStyles: {} };
    var classMap = {};
    var styleSet = styleSets[0];
    if (!styleSet && styleSets.length <= 1) {
        return { subComponentStyles: {} };
    }
    var concatenatedStyleSet = 
    // we have guarded against falsey values just above.
    styleSet;
    concatenatedStyleSet = concatStyleSets.apply(void 0, styleSets);
    var registrations = [];
    for (var styleSetArea in concatenatedStyleSet) {
        if (concatenatedStyleSet.hasOwnProperty(styleSetArea)) {
            if (styleSetArea === 'subComponentStyles') {
                classNameSet.subComponentStyles = concatenatedStyleSet.subComponentStyles || {};
                continue;
            }
            var styles = concatenatedStyleSet[styleSetArea];
            var _a = extractStyleParts(styles), classes = _a.classes, objects = _a.objects;
            var registration = styleToRegistration({ displayName: styleSetArea }, objects);
            registrations.push(registration);
            if (registration) {
                classMap[styleSetArea] = registration.className;
                // as any cast not needed in ts >=2.9
                classNameSet[styleSetArea] = classes.concat([registration.className]).join(' ');
            }
        }
    }
    for (var _b = 0, registrations_1 = registrations; _b < registrations_1.length; _b++) {
        var registration = registrations_1[_b];
        if (registration) {
            applyRegistration(registration, classMap);
        }
    }
    return classNameSet;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/fontFace.js


/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    Stylesheet_Stylesheet.getInstance().insertRule("@font-face{" + serializeRuleEntries(font) + "}", true);
}

// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/keyframes.js


/**
 * Registers keyframe definitions.
 *
 * @public
 */
function keyframes(timeline) {
    var stylesheet = Stylesheet_Stylesheet.getInstance();
    var name = stylesheet.getClassName();
    var rulesArray = [];
    for (var prop in timeline) {
        if (timeline.hasOwnProperty(prop)) {
            rulesArray.push(prop, '{', serializeRuleEntries(timeline[prop]), '}');
        }
    }
    var rules = rulesArray.join('');
    stylesheet.insertRule("@keyframes " + name + "{" + rules + "}", true);
    stylesheet.cacheClassName(name, rules, [], ['keyframes', rules]);
    return name;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/version.js
// @uifabric/merge-styles@6.17.4
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

setVersion('@uifabric/merge-styles', '6.17.4');

// CONCATENATED MODULE: ./node_modules/@uifabric/merge-styles/lib/index.js









// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/setSSR.js
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/getWindow.js

var _window = undefined;
// Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
// hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
// Caching the window value at the file scope lets us minimize the impact.
try {
    _window = window;
}
catch (e) {
    /* no-op */
}
/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the
 * window object won't match the "global" window object, and for these scenarios, you should
 * pass in an element hosted within the popup.
 *
 * @public
 */
function getWindow(rootElement) {
    if (_isSSR || typeof _window === 'undefined') {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument && rootElement.ownerDocument.defaultView
            ? rootElement.ownerDocument.defaultView
            : _window;
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/object.js


// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__';
// tslint:disable-next-line:no-any
var object__global = getWindow() || {};
if (object__global[CURRENT_ID_PROPERTY] === undefined) {
    object__global[CURRENT_ID_PROPERTY] = 0;
}
// tslint:disable-next-line:no-any
function checkProperties(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || b[propName] !== a[propName]) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Compares a to b and b to a.
 *
 * @public
 */
function shallowCompare(a, b) {
    return checkProperties(a, b) && checkProperties(b, a);
}
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function object_assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) && (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
// Configure ids to reset on stylesheet resets.
var object_stylesheet = Stylesheet_Stylesheet.getInstance();
if (object_stylesheet && object_stylesheet.onReset) {
    object_stylesheet.onReset(resetIds);
}
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    var index = object__global[CURRENT_ID_PROPERTY]++;
    return (prefix || DEFAULT_ID_STRING) + index;
}
/**
 * Resets id counter to an (optional) number.
 *
 * @public
 */
function resetIds(counter) {
    if (counter === void 0) { counter = 0; }
    object__global[CURRENT_ID_PROPERTY] = counter;
}
/* Takes an enum and iterates over each value of the enum (as a string), running the callback on each, returning a mapped array.
 * The callback takes as a first parameter the string that represents the name of the entry, and the second parameter is the
 * value of that entry, which is the value you'd normally use when using the enum (usually a number).
 * */
function mapEnumByName(
// tslint:disable-next-line:no-any
theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum)
        .map(function (p) {
        // map on each property name as a string
        if (String(Number(p)) !== p) {
            // if the property is not just a number (because enums in TypeScript will map both ways)
            return callback(p, theEnum[p]);
        }
    })
        .filter(function (v) { return !!v; }); // only return elements with values
}
/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */
// tslint:disable-next-line:no-any
function values(obj) {
    return Object.keys(obj).reduce(function (arr, key) {
        arr.push(obj[key]);
        return arr;
    }, []);
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/EventGroup.js
/* tslint:disable:no-string-literal */

/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onclick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 * {@docCategory EventGroup}
 */
var EventGroup_EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    // tslint:disable-next-line:no-any
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (
    // tslint:disable-next-line:no-any
    target, eventName, 
    // tslint:disable-next-line:no-any
    eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent || false, true);
                object_assign(ev, eventArgs);
                retVal = target.dispatchEvent(ev);
                // tslint:disable-next-line:no-any
            }
            else if (document['createEventObject']) {
                // IE8
                // tslint:disable-next-line:no-any
                var evObj = document['createEventObject'](eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    // tslint:disable-next-line:no-any
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    // tslint:disable-next-line:no-any
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    // tslint:disable-next-line:no-any
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            // IE8
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return !!target && (!!target.addEventListener || (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /** On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.on = function (target, eventName, callback, options) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, options);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                options: options
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] =
                events[eventName] ||
                    {
                        count: 0
                    };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                // tslint:disable-next-line:no-any
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        /* ErrorHelper.log(e); */
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    /* tslint:disable:ban-native-functions */
                    target.addEventListener(eventName, processElementEvent, options);
                    /* tslint:enable:ban-native-functions */
                }
                else if (target.attachEvent) {
                    // IE8
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                // tslint:disable-next-line:no-any
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    // tslint:disable-next-line:no-any
    EventGroup.prototype.off = function (target, eventName, callback, options) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                (typeof options !== 'boolean' || options === eventRecord.options)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.options);
                    }
                    else if (eventRecord.target.detachEvent) {
                        // IE8
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = (this._parent.__declaredEvents = this._parent.__declaredEvents || {});
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    // tslint:disable-next-line:no-inferrable-types
    EventGroup._uniqueId = 0;
    return EventGroup;
}());


// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/getDocument.js

/**
 * Helper to get the document object. Note that in popup window cases, document
 * might be the wrong document, which is why we look at ownerDocument for the
 * truth. Also note that the SSR flag is used to test ssr scenarios even if
 * document is defined (from JSDOM for example.)
 *
 * @public
 */
function getDocument(rootElement) {
    if (_isSSR || typeof document === 'undefined') {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/scroll.js


var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
var DisabledScrollClassName = mergeStyles({
    overflow: 'hidden !important'
});
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
var DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
var _makeElementScrollAllower = function () {
    var _previousClientY = 0;
    var _element = null;
    // remember the clientY for future calls of _preventOverscrolling
    var _saveClientY = function (event) {
        if (event.targetTouches.length === 1) {
            _previousClientY = event.targetTouches[0].clientY;
        }
    };
    // prevent the body from scrolling when the user attempts
    // to scroll past the top or bottom of the element
    var _preventOverscrolling = function (event) {
        // only respond to a single-finger touch
        if (event.targetTouches.length !== 1) {
            return;
        }
        // prevent the body touchmove handler from firing
        // so that scrolling is allowed within the element
        event.stopPropagation();
        if (!_element) {
            return;
        }
        var clientY = event.targetTouches[0].clientY - _previousClientY;
        var scrollableParent = findScrollableParent(event.target);
        if (scrollableParent) {
            _element = scrollableParent;
        }
        // if the element is scrolled to the top,
        // prevent the user from scrolling up
        if (_element.scrollTop === 0 && clientY > 0) {
            event.preventDefault();
        }
        // if the element is scrolled to the bottom,
        // prevent the user from scrolling down
        if (_element.scrollHeight - _element.scrollTop <= _element.clientHeight && clientY < 0) {
            event.preventDefault();
        }
    };
    return function (element, events) {
        if (!element) {
            return;
        }
        events.on(element, 'touchstart', _saveClientY, { passive: false });
        events.on(element, 'touchmove', _preventOverscrolling, { passive: false });
        _element = element;
    };
};
/**
 * Allows the user to scroll within a element,
 * while preventing the user from scrolling the body
 */
var allowScrollOnElement = _makeElementScrollAllower();
var _disableIosBodyScroll = function (event) {
    event.preventDefault();
};
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = getDocument();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(DisabledScrollClassName);
        doc.body.addEventListener('touchmove', _disableIosBodyScroll, { passive: false, capture: false });
    }
    _bodyScrollDisabledCount++;
}
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = getDocument();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(DisabledScrollClassName);
            doc.body.removeEventListener('touchmove', _disableIosBodyScroll);
        }
        _bodyScrollDisabledCount--;
    }
}
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    // First do a quick scan for the scrollable attribute.
    while (el && el !== document.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== document.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === document.body) {
        // tslint:disable-next-line:no-any
        el = window;
    }
    return el;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/getRect.js
/**
 * Helper to get bounding client rect. Passing in window will get the window size.
 *
 * @public
 */
function getRect(element) {
    var rect;
    if (element) {
        if (element === window) {
            rect = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/AutoScroll.js



var SCROLL_ITERATION_DELAY = 16;
var SCROLL_GUTTER_HEIGHT = 100;
var MAX_SCROLL_VELOCITY = 15;
/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 *
 * @public
 * {@docCategory AutoScroll}
 */
var AutoScroll_AutoScroll = /** @class */ (function () {
    function AutoScroll(element) {
        this._events = new EventGroup_EventGroup(this);
        this._scrollableParent = findScrollableParent(element);
        this._incrementScroll = this._incrementScroll.bind(this);
        this._scrollRect = getRect(this._scrollableParent);
        // tslint:disable-next-line:no-any
        if (this._scrollableParent === window) {
            this._scrollableParent = document.body;
        }
        if (this._scrollableParent) {
            this._events.on(window, 'mousemove', this._onMouseMove, true);
            this._events.on(window, 'touchmove', this._onTouchMove, true);
        }
    }
    AutoScroll.prototype.dispose = function () {
        this._events.dispose();
        this._stopScroll();
    };
    AutoScroll.prototype._onMouseMove = function (ev) {
        this._computeScrollVelocity(ev.clientY);
    };
    AutoScroll.prototype._onTouchMove = function (ev) {
        if (ev.touches.length > 0) {
            this._computeScrollVelocity(ev.touches[0].clientY);
        }
    };
    AutoScroll.prototype._computeScrollVelocity = function (clientY) {
        if (!this._scrollRect) {
            return;
        }
        var scrollRectTop = this._scrollRect.top;
        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER_HEIGHT;
        if (clientY < scrollRectTop + SCROLL_GUTTER_HEIGHT) {
            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER_HEIGHT - (clientY - scrollRectTop)) / SCROLL_GUTTER_HEIGHT));
        }
        else if (clientY > scrollClientBottom) {
            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((clientY - scrollClientBottom) / SCROLL_GUTTER_HEIGHT));
        }
        else {
            this._scrollVelocity = 0;
        }
        if (this._scrollVelocity) {
            this._startScroll();
        }
        else {
            this._stopScroll();
        }
    };
    AutoScroll.prototype._startScroll = function () {
        if (!this._timeoutId) {
            this._incrementScroll();
        }
    };
    AutoScroll.prototype._incrementScroll = function () {
        if (this._scrollableParent) {
            this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
        }
        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
    };
    AutoScroll.prototype._stopScroll = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            delete this._timeoutId;
        }
    };
    return AutoScroll;
}());


// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/warn/warn.js
var _warningCallback = undefined;
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback && "dev" !== 'production') {
        _warningCallback(message);
    }
    else if (console && console.warn) {
        console.warn(message);
    }
}
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/warn/warnConditionallyRequiredProps.js

/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
 */
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true && "dev" !== 'production') {
        for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
            var requiredPropName = requiredProps_1[_i];
            if (!(requiredPropName in props)) {
                warn(componentName + " property '" + requiredPropName + "' is required when '" + conditionalPropName + "' is used.'");
            }
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/warn/warnMutuallyExclusive.js

/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    if (true) {
        for (var propName in exclusiveMap) {
            if (props && props[propName] !== undefined) {
                var propInExclusiveMapValue = exclusiveMap[propName];
                if (propInExclusiveMapValue && props[propInExclusiveMapValue] !== undefined) {
                    warn(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. Use one or the other.");
                }
            }
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/warn/warnDeprecations.js

/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    if (true) {
        for (var propName in deprecationMap) {
            if (props && propName in props) {
                var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
                var replacementPropName = deprecationMap[propName];
                if (replacementPropName) {
                    deprecationMessage += " Use '" + replacementPropName + "' instead.";
                }
                warn(deprecationMessage);
            }
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/KeyCodes.js
/**
 * Simulated enum for keycodes. These will get inlined by uglify when used much like an enum
 *
 * @public
 * {@docCategory KeyCodes}
 */
var KeyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pauseBreak: 19,
    capslock: 20,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindow: 91,
    rightWindow: 92,
    select: 93,
    zero_numpad: 96,
    one_numpad: 97,
    two_numpad: 98,
    three_numpad: 99,
    four_numpad: 100,
    five_numpad: 101,
    six_numpad: 102,
    seven_numpad: 103,
    eight_numpad: 104,
    nine_numpad: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrollLock: 145,
    semicolon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    graveAccent: 192,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222
};

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/keyboard.js

var DirectionalKeyCodes = (keyboard__a = {},
    keyboard__a[KeyCodes.up] = 1,
    keyboard__a[KeyCodes.down] = 1,
    keyboard__a[KeyCodes.left] = 1,
    keyboard__a[KeyCodes.right] = 1,
    keyboard__a[KeyCodes.home] = 1,
    keyboard__a[KeyCodes.end] = 1,
    keyboard__a[KeyCodes.tab] = 1,
    keyboard__a[KeyCodes.pageUp] = 1,
    keyboard__a[KeyCodes.pageDown] = 1,
    keyboard__a);
/**
 * Returns true if the keycode is a directional keyboard key.
 */
function isDirectionalKeyCode(which) {
    return !!DirectionalKeyCodes[which];
}
/**
 * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to add global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
function addDirectionalKeyCode(which) {
    DirectionalKeyCodes[which] = 1;
}
var keyboard__a;

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/initializeFocusRects.js


var IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'ms-Fabric--isFocusVisible' classname
 *    to the document body.
 * 3. When the user clicks a mouse button, we remove the classname if it exists.
 *
 * This logic allows components on the page to conditionally render focus treatments only
 * if the global classname exists, which simplifies logic overall.
 *
 * @param window - the window used to add the event listeners
 */
function initializeFocusRects(window) {
    var win = (window || getWindow());
    if (win && !win.__hasInitializeFocusRects__) {
        win.__hasInitializeFocusRects__ = true;
        win.addEventListener('mousedown', _onMouseDown, true);
        win.addEventListener('keydown', _onKeyDown, true);
    }
}
function _onMouseDown(ev) {
    var win = getWindow(ev.target);
    if (win) {
        var classList = win.document.body.classList;
        if (classList.contains(IsFocusVisibleClassName)) {
            classList.remove(IsFocusVisibleClassName);
        }
    }
}
function _onKeyDown(ev) {
    var win = getWindow(ev.target);
    if (win) {
        var classList = win.document.body.classList;
        if (isDirectionalKeyCode(ev.which) && !classList.contains(IsFocusVisibleClassName)) {
            classList.add(IsFocusVisibleClassName);
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/initializeDir.js

function initializeDir(window) {
    var win = (window || getWindow());
    if (win && !win.__hasInitializedDir__) {
        win.__hasInitializedDir__ = true;
        // Ensure that the documentElement has a 'dir' attribute.
        var documentElement = win.document.documentElement;
        if (!documentElement.hasAttribute('dir')) {
            documentElement.setAttribute('dir', 'ltr');
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/BaseComponent.js









/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 * {@docCategory BaseComponent}
 */
var BaseComponent_BaseComponent = /** @class */ (function (_super) {
    __extends(BaseComponent, _super);
    // tslint:enable:variable-name
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // tslint:disable-next-line:no-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Ensure basic assumptions about the environment.
        initializeFocusRects();
        initializeDir();
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentDidMount',
            'shouldComponentUpdate',
            'getSnapshotBeforeUpdate',
            'render',
            'componentDidUpdate',
            'componentWillUnmount'
        ]);
        return _this;
    }
    /**
     * When the component receives props, make sure the componentRef is updated.
     */
    BaseComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._updateComponentRef(prevProps, this.props);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._setComponentRef(this.props.componentRef, this);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        this._setComponentRef(this.props.componentRef, null);
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = funcNameRegex.exec(this.constructor.toString());
                this.__className = results && results.length > 1 ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new Async_Async(this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new EventGroup_EventGroup(this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     * @deprecated Use `createRef` from React.createRef.
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            // tslint:disable-next-line:no-any
            this.__resolves[refName] = function (ref) {
                // tslint:disable-next-line:no-any
                return (_this[refName] = ref);
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        // currentProps *should* always be defined, but verify that just in case a subclass is manually
        // calling a lifecycle method with no parameters (which has happened) or other odd usage.
        if (currentProps && newProps && currentProps.componentRef !== newProps.componentRef) {
            this._setComponentRef(currentProps.componentRef, null);
            this._setComponentRef(newProps.componentRef, this);
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        warnDeprecations(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        warnMutuallyExclusive(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        warnConditionallyRequiredProps(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    BaseComponent.prototype._setComponentRef = function (ref, value) {
        if (!this._skipComponentRefResolution && ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            if (typeof ref === 'object') {
                // tslint:disable:no-any
                ref.current = value;
            }
        }
    };
    return BaseComponent;
}(external__react_["Component"]));

/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
function _makeSafe(obj, prototype, methodName) {
    // tslint:disable:no-any
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    // tslint:enable:no-any
    if (classMethod || prototypeMethod) {
        // tslint:disable-next-line:no-any
        obj[methodName] = function () {
            var retVal;
            if (prototypeMethod) {
                retVal = prototypeMethod.apply(this, arguments);
            }
            if (classMethod !== prototypeMethod) {
                retVal = classMethod.apply(this, arguments);
            }
            return retVal;
        };
    }
}
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() {
    return null;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/Context.js


/**
 * @deprecated This function uses the legacy context API, which is deprecated and should not be
 * used in new code. Please migrate to the new context API. https://reactjs.org/docs/context.html
 */
function provideContext(contextTypes, mapPropsToContext) {
    var Provider = /** @class */ (function (_super) {
        __extends(Provider, _super);
        function Provider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Provider.prototype.getChildContext = function () {
            return mapPropsToContext(this.props);
        };
        Provider.prototype.render = function () {
            return external__react_["Children"].only(this.props.children);
        };
        Provider.childContextTypes = contextTypes;
        return Provider;
    }(external__react_["Component"]));
    return Provider;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/DelayedRender.js


/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 * {@docCategory DelayedRender}
 */
var DelayedRender_DelayedRender = /** @class */ (function (_super) {
    __extends(DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: false
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = setTimeout(function () {
            _this.setState({
                isRendered: true
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? external__react_["Children"].only(this.props.children) : null;
    };
    DelayedRender.defaultProps = {
        delay: 0
    };
    return DelayedRender;
}(external__react_["Component"]));


// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/FabricPerformance.js
var now = function () { return (typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now()); };
var RESET_INTERVAL = 3 * 60 * 1000; // auto reset every 3 minutes
/**
 * Performance helper class for measuring things.
 *
 * @public
 * {@docCategory FabricPerformance}
 */
var FabricPerformance = /** @class */ (function () {
    function FabricPerformance() {
    }
    /**
     * Measures execution time of the given syncronous function. If the same logic is executed multiple times,
     * each individual measurement will be collected as well the overall numbers.
     * @param name - The name of this measurement
     * @param func - The logic to be measured for execution time
     */
    FabricPerformance.measure = function (name, func) {
        if (FabricPerformance._timeoutId) {
            FabricPerformance.setPeriodicReset();
        }
        var start = now();
        func();
        var end = now();
        var measurement = FabricPerformance.summary[name] || {
            totalDuration: 0,
            count: 0,
            all: []
        };
        var duration = end - start;
        measurement.totalDuration += duration;
        measurement.count++;
        measurement.all.push({
            duration: duration,
            timeStamp: end
        });
        FabricPerformance.summary[name] = measurement;
    };
    FabricPerformance.reset = function () {
        FabricPerformance.summary = {};
        clearTimeout(FabricPerformance._timeoutId);
        FabricPerformance._timeoutId = NaN;
    };
    FabricPerformance.setPeriodicReset = function () {
        FabricPerformance._timeoutId = setTimeout(function () { return FabricPerformance.reset(); }, RESET_INTERVAL);
    };
    FabricPerformance.summary = {};
    return FabricPerformance;
}());


// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/GlobalSettings.js

/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
// tslint:disable:no-any
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
var _counter = 0;
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 * {@docCategory GlobalSettings}
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        var globalSettings = _getGlobalSettings();
        if (globalSettings[key] === undefined) {
            globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var globalSettings = _getGlobalSettings();
        var callbacks = globalSettings[CALLBACK_STATE_PROP_NAME];
        var oldValue = globalSettings[key];
        if (value !== oldValue) {
            globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key
            };
            for (var id in callbacks) {
                if (callbacks.hasOwnProperty(id)) {
                    callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        var callbacks = _getCallbacks();
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        var callbacks = _getCallbacks();
        delete callbacks[cb.__id__];
    };
    return GlobalSettings;
}());

function _getGlobalSettings() {
    var win = getWindow();
    var globalObj = win || {};
    if (!globalObj[GLOBAL_SETTINGS_PROP_NAME]) {
        globalObj[GLOBAL_SETTINGS_PROP_NAME] = (_a = {},
            _a[CALLBACK_STATE_PROP_NAME] = {},
            _a);
    }
    return globalObj[GLOBAL_SETTINGS_PROP_NAME];
    var _a;
}
function _getCallbacks() {
    var globalSettings = _getGlobalSettings();
    return globalSettings[CALLBACK_STATE_PROP_NAME];
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/Rectangle.js
/**
 * Rectangle helper class.
 *
 * @public
 * {@docCategory Rectangle}
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // I'm fixing it to 4 decimal places because it allows enough precision and will handle cases when something should be rounded,
        // like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());


// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/appendFunction.js
// tslint:disable:no-any
/**
 * Returns a single function which will call each of the given functions in the context of the
 * parent.
 */
function appendFunction(parent) {
    var functions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        functions[_i - 1] = arguments[_i];
    }
    if (functions.length < 2) {
        return functions[0];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        functions.forEach(function (f) { return f && f.apply(parent, args); });
    };
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/aria.js
/**
 * ARIA helper to concatenate attributes, returning undefined if all attributes
 * are undefined. (Empty strings are not a valid ARIA attribute value.)
 *
 * @param ariaAttributes - ARIA attributes to merge
 */
function mergeAriaAttributeValues() {
    var ariaAttributes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ariaAttributes[_i] = arguments[_i];
    }
    var mergedAttribute = ariaAttributes
        .filter(function (arg) { return arg !== undefined && arg !== null; })
        .join(' ')
        .trim();
    return mergedAttribute === '' ? undefined : mergedAttribute;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/array.js
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 */
function findIndex(array, cb) {
    var index = -1;
    for (var i = 0; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
/**
 * Returns a boolean indicating if the two given arrays are equal in length and values.
 *
 * @param array1 - First array to compare
 * @param array2 - Second array to compare
 * @returns True if the arrays are the same length and have the same values in the same positions, false otherwise.
 */
function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/asAsync.js
/**
 * asAsync - a HOC for async loading components.
 *
 * Usage:
 *
 * const AsyncDialog = asAsync({
 *   load: () => import('Dialog').then(result => result.default),
 * });
 *
 * React.render(domElement, <AsyncDialog asyncPlaceholder={ () => <Spinner/> } { ...dialogProps } />);
 *
 * Note the `asyncPlaceholder` prop will be respected when rendering the async component and it hasn't
 * been loaded yet.
 */


/**
 * If possible, use a WeakMap to maintain a cache of loaded components.
 * This can be used to synchronously render components that have already been loaded,
 * rather than having to wait for at least one async tick.
 */
var _syncModuleCache = typeof WeakMap !== 'undefined'
    ? // tslint:disable-next-line:no-any
        new WeakMap()
    : undefined;
/**
 * Produces a component which internally loads the target component before first mount.
 * The component passes all props through to the loaded component.
 *
 * This overload accepts a module with a default export for the component.
 */
function asAsync(options) {
    var Async = /** @class */ (function (_super) {
        __extends(Async, _super);
        function Async() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                Component: _syncModuleCache ? _syncModuleCache.get(options.load) : undefined
            };
            return _this;
        }
        Async.prototype.render = function () {
            // Typescript issue: the rest can't be pulled without the any cast, as TypeScript fails with rest on generics.
            // tslint:disable-next-line:no-any
            var _a = this.props, forwardedRef = _a.forwardedRef, Placeholder = _a.asyncPlaceholder, rest = __rest(_a, ["forwardedRef", "asyncPlaceholder"]);
            var Component = this.state.Component;
            return Component ? external__react_["createElement"](Component, __assign({ ref: forwardedRef }, rest)) : Placeholder ? external__react_["createElement"](Placeholder, null) : null;
        };
        Async.prototype.componentDidMount = function () {
            var _this = this;
            var Component = this.state.Component;
            if (!Component) {
                options
                    .load()
                    .then(function (LoadedComponent) {
                    if (LoadedComponent) {
                        // Cache component for future reference.
                        _syncModuleCache && _syncModuleCache.set(options.load, LoadedComponent);
                        // Set state.
                        _this.setState({
                            Component: LoadedComponent
                        }, options.onLoad);
                    }
                })
                    .catch(options.onError);
            }
        };
        return Async;
    }(external__react_["Component"]));
    return external__react_["forwardRef"](function (props, ref) { return (external__react_["createElement"](Async, __assign({}, props, { forwardedRef: ref }))); });
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/assertNever.js
/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 *
 * @public
 */
function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/autobind.js
/**
 * Autobind is a utility for binding methods in a class. This simplifies tagging methods as being "bound" to the this pointer
 * so that they can be used in scenarios that simply require a function callback.
 * @deprecated This has been deprecated in favor of using arrow function properties
 */
function autobind(
// tslint:disable-next-line:no-any
target, key, descriptor) {
    var fn = descriptor.value;
    var defining = false;
    return {
        configurable: true,
        get: function () {
            if (defining || (fn && this === fn.prototype) || this.hasOwnProperty(key)) {
                return fn;
            }
            // Bind method only once, and update the property to return the bound value from now on
            var fnBound = fn && fn.bind(this);
            defining = true;
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: fnBound
            });
            defining = false;
            return fnBound;
        },
        // tslint:disable-next-line:no-any
        set: function (newValue) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: newValue
            });
        }
    };
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/classNamesFunction.js

/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 */
function classNamesFunction(options) {
    // TODO: memoize.
    if (options === void 0) { options = {}; }
    var getClassNames = function (styleFunctionOrObject, styleProps) {
        if (styleProps === void 0) { styleProps = {}; }
        // styleSet might be undefined if styleFunctionOrObject is undefined, but getStyles should never
        // ordinarily be undefined (it would hardly make any sense).
        // However, because we usually use `props.styles` as the argument to an invocation of this method, and
        // `props.styles` itself is defined as optional, this avoids the need to use `!` at all invocation points.
        if (styleFunctionOrObject === undefined) {
            return {};
        }
        var styleSet = styleFunctionOrObject && (typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject);
        return mergeStyleSets(styleSet);
    };
    return getClassNames;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/createRef.js
/**
 * @deprecated Use React.createRef.
 * May be removed in 6 months (Jan '19).
 */
function createRef() {
    var refObject = (function (element) {
        refObject.current = element;
    });
    // This getter is here to support the deprecated value prop on the refObject.
    Object.defineProperty(refObject, 'value', {
        get: function () {
            return refObject.current;
        }
    });
    refObject.current = null;
    return refObject;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/css.js
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
                classes.push(arg.toString());
            }
            else {
                // tslint:disable-next-line:no-any
                for (var key in arg) {
                    // tslint:disable-next-line:no-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/customizations/Customizations.js


var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {}, inCustomizerContext: false };
var _allSettings = GlobalSettings.getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {},
    inCustomizerContext: false
});
var _events = [];
var Customizations_Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    // tslint:disable-next-line:no-any
    Customizations.applySettings = function (settings) {
        _allSettings.settings = __assign({}, _allSettings.settings, settings);
        Customizations._raiseChange();
    };
    // tslint:disable-next-line:no-any
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = __assign({}, _allSettings.scopedSettings[scopeName], settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings
    // tslint:disable-next-line:no-any
    ) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        // tslint:disable-next-line:no-any
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] =
                localScopedSettings[property] ||
                    localSettings.settings[property] ||
                    globalScopedSettings[property] ||
                    _allSettings.settings[property];
        }
        return settings;
    };
    Customizations.observe = function (onChange) {
        _events.push(onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events = _events.filter(function (cb) { return cb !== onChange; });
    };
    Customizations._raiseChange = function () {
        _events.forEach(function (cb) { return cb(); });
    };
    return Customizations;
}());


// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/customizations/CustomizerContext.js

var CustomizerContext = external__react_["createContext"]({
    customizations: {
        inCustomizerContext: false,
        settings: {},
        scopedSettings: {}
    }
});

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/customizations/mergeSettings.js

/**
 * Merge new and old settings, giving priority to new settings.
 * New settings is optional in which case oldSettings is returned as-is.
 * @param oldSettings - Old settings to fall back to.
 * @param newSettings - New settings that will be merged over oldSettings.
 * @returns Merged settings.
 */
function mergeSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _settingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function mergeScopedSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _scopedSettingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function _isSettingsFunction(settings) {
    return typeof settings === 'function';
}
function _settingsMergeWith(newSettings) {
    return function (settings) { return (newSettings ? __assign({}, settings, newSettings) : settings); };
}
function _scopedSettingsMergeWith(scopedSettingsFromProps) {
    if (scopedSettingsFromProps === void 0) { scopedSettingsFromProps = {}; }
    return function (oldScopedSettings) {
        var newScopedSettings = __assign({}, oldScopedSettings);
        for (var scopeName in scopedSettingsFromProps) {
            if (scopedSettingsFromProps.hasOwnProperty(scopeName)) {
                newScopedSettings[scopeName] = __assign({}, oldScopedSettings[scopeName], scopedSettingsFromProps[scopeName]);
            }
        }
        return newScopedSettings;
    };
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/customizations/mergeCustomizations.js

/**
 * Merge props and customizations giving priority to props over context.
 * NOTE: This function will always perform multiple merge operations. Use with caution.
 * @param props - New settings to merge in.
 * @param parentContext - Context containing current settings.
 * @returns Merged customizations.
 */
function mergeCustomizations(props, parentContext) {
    var _a = (parentContext || {}).customizations, customizations = _a === void 0 ? { settings: {}, scopedSettings: {} } : _a;
    return {
        customizations: {
            settings: mergeSettings(customizations.settings, props.settings),
            scopedSettings: mergeScopedSettings(customizations.scopedSettings, props.scopedSettings),
            inCustomizerContext: true
        }
    };
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/customizations/Customizer.js





/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator, or use the styled HOC. This enables
 * injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop which should be one of the following:
 * - A json map which contains 1 or more name/value pairs representing injectable props.
 * - A function that receives the current settings and returns the new ones that apply to the scope
 *
 * @public
 */
var Customizer_Customizer = /** @class */ (function (_super) {
    __extends(Customizer, _super);
    function Customizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onCustomizationChange = function () { return _this.forceUpdate(); };
        return _this;
    }
    Customizer.prototype.componentDidMount = function () {
        Customizations_Customizations.observe(this._onCustomizationChange);
    };
    Customizer.prototype.componentWillUnmount = function () {
        Customizations_Customizations.unobserve(this._onCustomizationChange);
    };
    Customizer.prototype.render = function () {
        var _this = this;
        var contextTransform = this.props.contextTransform;
        return (external__react_["createElement"](CustomizerContext.Consumer, null, function (parentContext) {
            var newContext = mergeCustomizations(_this.props, parentContext);
            if (contextTransform) {
                newContext = contextTransform(newContext);
            }
            return external__react_["createElement"](CustomizerContext.Provider, { value: newContext }, _this.props.children);
        }));
    };
    return Customizer;
}(external__react_["Component"]));


// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/hoistStatics.js
/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
function hoistStatics(source, dest) {
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            // tslint:disable-next-line:no-any
            dest[name_1] = source[name_1];
        }
    }
    return dest;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/customizations/customizable.js






function customizable_customizable(scope, fields, concatStyles
// tslint:disable-next-line:no-any
) {
    // tslint:disable-next-line:no-shadowed-variable
    return function customizableFactory(
    // tslint:disable-next-line:no-any
    ComposedComponent
    // tslint:disable-next-line:no-any
    ) {
        var resultClass = (_a = /** @class */ (function (_super) {
                __extends(ComponentWithInjectedProps, _super);
                // tslint:disable-next-line:no-any
                function ComponentWithInjectedProps(props) {
                    var _this = _super.call(this, props) || this;
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    Customizations_Customizations.observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    Customizations_Customizations.unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var _this = this;
                    return (external__react_["createElement"](CustomizerContext.Consumer, null, function (context) {
                        var defaultProps = Customizations_Customizations.getSettings(fields, scope, context.customizations);
                        // tslint:disable-next-line:no-any
                        var componentProps = _this.props;
                        // If defaultProps.styles is a function, evaluate it before calling concatStyleSets
                        if (defaultProps.styles && typeof defaultProps.styles === 'function') {
                            defaultProps.styles = defaultProps.styles(__assign({}, defaultProps, componentProps));
                        }
                        if (concatStyles) {
                            var mergedStyles = concatStyleSets(defaultProps.styles, componentProps.styles);
                            return external__react_["createElement"](ComposedComponent, __assign({}, defaultProps, componentProps, { styles: mergedStyles }));
                        }
                        return external__react_["createElement"](ComposedComponent, __assign({}, defaultProps, componentProps));
                    }));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(external__react_["Component"])),
            _a.displayName = 'Customized' + scope,
            _a);
        return hoistStatics(ComposedComponent, resultClass);
        var _a;
    };
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/isVirtualElement.js
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/getVirtualParent.js

/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
function getVirtualParent(child) {
    var parent;
    if (child && isVirtualElement(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/getParent.js

/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return child && ((allowVirtualParents && getVirtualParent(child)) || (child.parentNode && child.parentNode));
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/elementContains.js

/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            isContained = false;
            while (child) {
                var nextParent = getParent(child);
                if (nextParent === parent) {
                    isContained = true;
                    break;
                }
                child = nextParent;
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/findElementRecursive.js

/**
 * Finds the first parent element where the matchFunction returns true
 * @param element - element to start searching at
 * @param matchFunction - the function that determines if the element is a match
 * @returns the matched element or null no match was found
 */
function findElementRecursive(element, matchFunction) {
    if (!element || element === document.body) {
        return null;
    }
    return matchFunction(element) ? element : findElementRecursive(getParent(element), matchFunction);
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/elementContainsAttribute.js

/**
 * Determines if an element, or any of its ancestors, contain the given attribute
 * @param element - element to start searching at
 * @param attribute - the attribute to search for
 * @returns the value of the first instance found
 */
function elementContainsAttribute(element, attribute) {
    var elementMatch = findElementRecursive(element, function (testElement) { return testElement.hasAttribute(attribute); });
    return elementMatch && elementMatch.getAttribute(attribute);
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/getChildren.js

/**
 * Gets the elements which are child elements of the given element.
 * If `allowVirtualChildren` is `true`, this method enumerates virtual child elements
 * after the original children.
 * @param parent - The element to get the children of.
 * @param allowVirtualChildren - true if the method should enumerate virtual child elements.
 */
function getChildren(parent, allowVirtualChildren) {
    if (allowVirtualChildren === void 0) { allowVirtualChildren = true; }
    var children = [];
    if (parent) {
        for (var i = 0; i < parent.children.length; i++) {
            children.push(parent.children.item(i));
        }
        if (allowVirtualChildren && isVirtualElement(parent)) {
            children.push.apply(children, parent._virtual.children);
        }
    }
    return children;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/on.js
function on(element, eventName, callback, options) {
    element.addEventListener(eventName, callback, options);
    return function () { return element.removeEventListener(eventName, callback, options); };
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/setPortalAttribute.js
var DATA_PORTAL_ATTRIBUTE = 'data-portal-element';
/**
 * Identify element as a portal by setting an attribute.
 * @param element - Element to mark as a portal.
 */
function setPortalAttribute(element) {
    element.setAttribute(DATA_PORTAL_ATTRIBUTE, 'true');
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/portalContainsElement.js


/**
 * Determine whether a target is within a portal from perspective of root or optional parent.
 * This function only works against portal components that use the setPortalAttribute function.
 * If both parent and child are within the same portal this function will return false.
 * @param target - Element to query portal containment status of.
 * @param parent - Optional parent perspective. Search for containing portal stops at parent (or root if parent is undefined or invalid.)
 */
function portalContainsElement(target, parent) {
    var elementMatch = findElementRecursive(target, function (testElement) { return parent === testElement || testElement.hasAttribute(DATA_PORTAL_ATTRIBUTE); });
    return elementMatch !== null && elementMatch.hasAttribute(DATA_PORTAL_ATTRIBUTE);
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/raiseClick.js
/** Raises a click event. */
function raiseClick(target) {
    var event = new Event('MouseEvents');
    event.initEvent('click', true, true);
    target.dispatchEvent(event);
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom/setVirtualParent.js
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: []
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: []
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/dom.js
















// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/extendComponent.js

/**
 * Extends a component's lifetime methods by appending new functions to the existing lifetime functions.
 */
function extendComponent(parent, methods) {
    for (var name_1 in methods) {
        if (methods.hasOwnProperty(name_1)) {
            // tslint:disable-next-line:no-any
            parent[name_1] = appendFunction(parent, parent[name_1], methods[name_1]);
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/focus.js





var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones);
}
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones);
}
/**
 * Gets the first tabbable element.
 * The difference between focusable and tabbable is that tabbable elements are focusable elements that also have tabIndex != -1.
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues forward.  Typical use passes rootElement.firstChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
function getFirstTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode) {
    if (checkNode === void 0) { checkNode = true; }
    return getNextElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Gets the last tabbable element.
 * The difference between focusable and tabbable is that tabbable elements are focusable elements that also have tabIndex != -1.
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues in reverse.  Typical use passes rootElement.lastChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode) {
    if (checkNode === void 0) { checkNode = true; }
    return getPreviousElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        focusAsync(element);
        return true;
    }
    return false;
}
/**
 * Traverse to find the previous element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            if ((tabbable && isElementTabbable(childMatch, true)) || !tabbable) {
                return childMatch;
            }
            var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
            if (childMatchSiblingMatch) {
                return childMatchSiblingMatch;
            }
            var childMatchParent = childMatch.parentElement;
            // At this point if we have not found any potential matches
            // start looking at the rest of the subtree under the currentParent.
            // NOTE: We do not want to recurse here because doing so could
            // cause elements to get skipped.
            while (childMatchParent && childMatchParent !== currentElement) {
                var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
                if (childMatchParentMatch) {
                    return childMatchParentMatch;
                }
                childMatchParent = childMatchParent.parentElement;
            }
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Traverse to find the next focusable element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 * @param checkNode - Include currentElement in search when true.
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // tslint:disable-next-line:no-any
        element.isVisible === true); // used as a workaround for testing.
}
/**
 * Determines if an element can receive focus programmatically or via a mouse click.
 * If checkTabIndex is true, additionally checks to ensure the element can be focused with the tab key, meaning tabIndex != -1.
 *
 * @public
 */
function isElementTabbable(element, checkTabIndex) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    var result = !!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            element.tagName === 'BUTTON' ||
            element.tagName === 'INPUT' ||
            element.tagName === 'TEXTAREA' ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet);
    return checkTabIndex ? tabIndex !== -1 && result : result;
}
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var document = getDocument(element);
    var currentActiveElement = document && document.activeElement;
    if (currentActiveElement && elementContains(element, currentActiveElement)) {
        return true;
    }
    return false;
}
/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */
function shouldWrapFocus(element, noWrapDataAttribute) {
    return elementContainsAttribute(element, noWrapDataAttribute) === 'true' ? false : true;
}
var targetToFocusOnNextRepaint = undefined;
/**
 * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
 * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
 * only the latest called focusAsync element will actually be focused
 * @param element - The element to focus
 */
function focusAsync(element) {
    if (element) {
        // An element was already queued to be focused, so replace that one with the new element
        if (targetToFocusOnNextRepaint) {
            targetToFocusOnNextRepaint = element;
            return;
        }
        targetToFocusOnNextRepaint = element;
        var win = getWindow(element);
        if (win) {
            // element.focus() is a no-op if the element is no longer in the DOM, meaning this is always safe
            win.requestAnimationFrame(function () {
                targetToFocusOnNextRepaint && targetToFocusOnNextRepaint.focus();
                // We are done focusing for this frame, so reset the queued focus element
                targetToFocusOnNextRepaint = undefined;
            });
        }
    }
}
/**
 * Finds the closest focusable element via an index path from a parent. See
 * `getElementIndexPath` for getting an index path from an element to a child.
 */
function getFocusableByIndexPath(parent, path) {
    var element = parent;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var index = path_1[_i];
        var nextChild = element.children[Math.min(index, element.children.length - 1)];
        if (!nextChild) {
            break;
        }
        element = nextChild;
    }
    element =
        isElementTabbable(element) && isElementVisible(element)
            ? element
            : getNextElement(parent, element, true) || getPreviousElement(parent, element);
    return element;
}
/**
 * Finds the element index path from a parent element to a child element.
 *
 * If you had this node structure: "A has children [B, C] and C has child D",
 * the index path from A to D would be [1, 0], or `parent.chidren[1].children[0]`.
 */
function getElementIndexPath(fromElement, toElement) {
    var path = [];
    while (toElement && fromElement && toElement !== fromElement) {
        var parent_1 = getParent(toElement, true);
        if (parent_1 === null) {
            return [];
        }
        path.unshift(Array.prototype.indexOf.call(parent_1.children, toElement));
        toElement = parent_1;
    }
    return path;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/hoist.js
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'UNSAFE_componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'UNSAFE_componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'getSnapshotBeforeUpdate',
    'UNSAFE_componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount'
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
function hoistMethods(
// tslint:disable-next-line:no-any
destination, 
// tslint:disable-next-line:no-any
source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            /* tslint:disable:no-function-expression */
            destination[methodName] = function () {
                source[methodName].apply(source, arguments);
            };
            /* tslint:enable */
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// tslint:disable-next-line:no-any
function unhoistMethods(source, methodNames) {
    methodNames.forEach(function (methodName) { return delete source[methodName]; });
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/initializeComponentRef.js

/**
 * Helper to manage componentRef resolution. Internally appends logic to
 * lifetime methods to resolve componentRef to the passed in object.
 *
 * Usage: call initializeComponentRef(this) in the constructor,
 */
function initializeComponentRef(obj) {
    extendComponent(obj, {
        componentDidMount: _onMount,
        componentDidUpdate: _onUpdate,
        componentWillUnmount: _onUnmount
    });
}
function _onMount() {
    _setComponentRef(this.props.componentRef, this);
}
function _onUpdate(prevProps) {
    if (prevProps.componentRef !== this.props.componentRef) {
        // tslint:disable-next-line:no-any
        _setComponentRef(prevProps.componentRef, null);
        _setComponentRef(this.props.componentRef, this);
    }
}
function _onUnmount() {
    _setComponentRef(this.props.componentRef, null);
}
function _setComponentRef(componentRef, value) {
    if (componentRef) {
        if (typeof componentRef === 'object') {
            componentRef.current = value;
        }
        else if (typeof componentRef === 'function') {
            componentRef(value);
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/initials.js
/**
 * Regular expression matching characters to ignore when calculating the initials.
 * The first part matches characters within parenthesis, including the parenthesis.
 * The second part matches special ASCII characters except space, plus some unicode special characters.
 */
var UNWANTED_CHARS_REGEX = /\([^)]*\)|[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/**
 * Regular expression matching phone numbers. Applied after chars matching UNWANTED_CHARS_REGEX have been removed
 * and number has been trimmed for whitespaces
 */
var PHONENUMBER_REGEX = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs, CJK Unified Ideographs Extension B
 */
/* tslint:disable:max-line-length */
var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
/* tslint:enable:max-line-length */
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
function getInitials(displayName, isRtl, allowPhoneInitials) {
    if (!displayName) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    // For names containing CJK characters, and phone numbers, we don't display initials
    if (UNSUPPORTED_TEXT_REGEX.test(displayName) || (!allowPhoneInitials && PHONENUMBER_REGEX.test(displayName))) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/localStorage.js

/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = getWindow();
        result = win ? win.localStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        var win = getWindow();
        win && win.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/language.js


// Default to undefined so that we initialize on first read.
var _language;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 *
 * @public
 */
function getLanguage() {
    if (_language === undefined) {
        var doc = getDocument();
        var savedLanguage = getItem('language');
        if (savedLanguage !== null) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 *
 * @public
 */
function setLanguage(language, avoidPersisting) {
    if (avoidPersisting === void 0) { avoidPersisting = false; }
    var doc = getDocument();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    if (!avoidPersisting) {
        setItem('language', language);
    }
    _language = language;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/math.js
/**
 * Determines the distance between two points.
 *
 * @public
 */
function getDistanceBetweenPoints(point1, point2) {
    var distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    return distance;
}
/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options - the options for the bounds fit operation
 */
function fitContentToBounds(options) {
    var contentSize = options.contentSize, boundsSize = options.boundsSize, _a = options.mode, mode = _a === void 0 ? 'contain' : _a, _b = options.maxScale, maxScale = _b === void 0 ? 1 : _b;
    var contentAspectRatio = contentSize.width / contentSize.height;
    var boundsAspectRatio = boundsSize.width / boundsSize.height;
    var scale;
    if (mode === 'contain' ? contentAspectRatio > boundsAspectRatio : contentAspectRatio < boundsAspectRatio) {
        scale = boundsSize.width / contentSize.width;
    }
    else {
        scale = boundsSize.height / contentSize.height;
    }
    var finalScale = Math.min(maxScale, scale);
    return {
        width: contentSize.width * finalScale,
        height: contentSize.height * finalScale
    };
}
/**
 * Calculates a number's precision based on the number of trailing
 * zeros if the number does not have a decimal indicated by a negative
 * precision. Otherwise, it calculates the number of digits after
 * the decimal point indicated by a positive precision.
 * @param value - the value to determine the precision of
 */
function calculatePrecision(value) {
    /**
     * Group 1:
     * [1-9]([0]+$) matches trailing zeros
     * Group 2:
     * \.([0-9]*) matches all digits after a decimal point.
     */
    var groups = /[1-9]([0]+$)|\.([0-9]*)/.exec(String(value));
    if (!groups) {
        return 0;
    }
    if (groups[1]) {
        return -groups[1].length;
    }
    if (groups[2]) {
        return groups[2].length;
    }
    return 0;
}
/**
 * Rounds a number to a certain level of precision. Accepts negative precision.
 * @param value - The value that is being rounded.
 * @param precision - The number of decimal places to round the number to
 */
function precisionRound(value, precision, base) {
    if (base === void 0) { base = 10; }
    var exp = Math.pow(base, precision);
    return Math.round(value * exp) / exp;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/memoize.js

var memoize_stylesheet = Stylesheet_Stylesheet.getInstance();
if (memoize_stylesheet && memoize_stylesheet.onReset) {
    Stylesheet_Stylesheet.getInstance().onReset(resetMemoizations);
}
var _resetCounter = 0;
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = typeof WeakMap === 'undefined' ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
/**
 * Reset memoizations.
 */
function resetMemoizations() {
    _resetCounter++;
}
/**
 * Memoize decorator to be used on class methods. WARNING: the `this` reference
 * will be inaccessible within a memoized method, given that a cached method's `this`
 * would not be instance-specific.
 *
 * @public
 */
function memoize(target, key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        }
    };
}
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    var rootNode;
    var cacheSize = 0;
    var localResetCounter = _resetCounter;
    // tslint:disable-next-line:no-function-expression
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined || localResetCounter !== _resetCounter || (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
            localResetCounter = _resetCounter;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        return currentNode.value;
    };
}
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object' || typeof val === 'function') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null
    };
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/merge.js
/**
 * Simple deep merge function. Takes all arguments and returns a deep copy of the objects merged
 * together in the order provided. If an object creates a circular reference, it will assign the
 * original reference.
 */
function merge(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        _merge(target || {}, arg);
    }
    return target;
}
/**
 * The _merge helper iterates through all props on source and assigns them to target.
 * When the value is an object, we will create a deep clone of the object. However if
 * there is a circular reference, the value will not be deep cloned and will persist
 * the reference.
 */
// tslint:disable-next-line:no-any
function _merge(target, source, circularReferences) {
    if (circularReferences === void 0) { circularReferences = []; }
    circularReferences.push(source);
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            var value = source[name_1];
            if (typeof value === 'object') {
                var isCircularReference = circularReferences.indexOf(value) > -1;
                // tslint:disable-next-line:no-any
                target[name_1] = isCircularReference ? value : _merge(target[name_1] || {}, value, circularReferences);
            }
            else {
                target[name_1] = value;
            }
        }
    }
    circularReferences.pop();
    return target;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/mobileDetector.js
/**
 * Returns true if and only if the user is on a iOS device.
 * Used to determine whether iOS-specific behavior should be applied.
 */
var isIOS = function () {
    if (!window || !window.navigator || !window.navigator.userAgent) {
        return false;
    }
    return /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
};

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/osDetector.js

var isMacResult;
/**
 * Returns true if the user is on a Mac. Caches the result value.
 * @param reset - Reset the cached result value (mainly for testing).
 */
function isMac(reset) {
    if (typeof isMacResult === 'undefined' || reset) {
        var win = getWindow();
        var userAgent = win && win.navigator.userAgent;
        isMacResult = !!userAgent && userAgent.indexOf('Macintosh') !== -1;
    }
    return !!isMacResult;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/overflow.js
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/properties.js

/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
var baseElementEvents = [
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel',
    'onPointerCancel',
    'onPointerDown',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerMove',
    'onPointerOut',
    'onPointerOver',
    'onPointerUp',
    'onGotPointerCapture',
    'onLostPointerCapture'
];
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
var baseElementProperties = [
    'defaultChecked',
    'defaultValue',
    'accept',
    'acceptCharset',
    'accessKey',
    'action',
    'allowFullScreen',
    'allowTransparency',
    'alt',
    'async',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'challenge',
    'checked',
    'children',
    'classID',
    'className',
    'cols',
    'colSpan',
    'content',
    'contentEditable',
    'contextMenu',
    'controls',
    'coords',
    'crossOrigin',
    'data',
    'dateTime',
    'default',
    'defer',
    'dir',
    'download',
    'draggable',
    'encType',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'headers',
    'height',
    'hidden',
    'high',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'icon',
    'id',
    'inputMode',
    'integrity',
    'is',
    'keyParams',
    'keyType',
    'kind',
    'lang',
    'list',
    'loop',
    'low',
    'manifest',
    'marginHeight',
    'marginWidth',
    'max',
    'maxLength',
    'media',
    'mediaGroup',
    'method',
    'min',
    'minLength',
    'multiple',
    'muted',
    'name',
    'noValidate',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'poster',
    'preload',
    'radioGroup',
    'readOnly',
    'rel',
    'required',
    'role',
    'rows',
    'rowSpan',
    'sandbox',
    'scope',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'spellCheck',
    'src',
    'srcDoc',
    'srcLang',
    'srcSet',
    'start',
    'step',
    'style',
    'summary',
    'tabIndex',
    'title',
    'type',
    'useMap',
    'value',
    'width',
    'wmode',
    'wrap'
];
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
var htmlElementProperties = baseElementProperties.concat(baseElementEvents);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
var anchorProperties = htmlElementProperties.concat(['href', 'target']);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
var buttonProperties = htmlElementProperties.concat(['disabled']);
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
var divProperties = htmlElementProperties.concat(['align', 'noWrap']);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
var inputProperties = buttonProperties;
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
var textAreaProperties = buttonProperties;
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
var imageProperties = divProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames-  The array of allowed propnames.
 * @returns The filtered props
 */
function getNativeProps(props, allowedPropNames, excludedPropNames) {
    return filteredAssign(function (propName) {
        return ((!excludedPropNames || excludedPropNames.indexOf(propName) < 0) &&
            (propName.indexOf('data-') === 0 || propName.indexOf('aria-') === 0 || allowedPropNames.indexOf(propName) >= 0));
    }, {}, props);
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/resources.js
var _baseUrl = '';
/** Sets the current base url used for fetching images. */
function getResourceUrl(url) {
    return _baseUrl + url;
}
/** Gets the current base url used for fetching images. */
function setBaseUrl(baseUrl) {
    _baseUrl = baseUrl;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/sessionStorage.js
/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function sessionStorage_getItem(key) {
    var result = null;
    try {
        result = window.sessionStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function sessionStorage_setItem(key, data) {
    try {
        window.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/rtl.js




var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function rtl_getRTL() {
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = sessionStorage_getItem(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            rtl_setRTL(_isRTL);
        }
        var doc = getDocument();
        if (_isRTL === undefined && doc) {
            _isRTL = ((doc.body && doc.body.getAttribute('dir')) || doc.documentElement.getAttribute('dir')) === 'rtl';
            setRTL(_isRTL);
        }
    }
    return !!_isRTL;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function rtl_setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = getDocument();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        sessionStorage_setItem(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    setRTL(_isRTL);
}
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key) {
    if (rtl_getRTL()) {
        if (key === KeyCodes.left) {
            key = KeyCodes.right;
        }
        else if (key === KeyCodes.right) {
            key = KeyCodes.left;
        }
    }
    return key;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/safeRequestAnimationFrame.js

/**
 * Generates a function to be attached to a React component, which can be called
 * as a replacement to RAF. In-flight async calls will be auto canceled if the component
 * is unmounting before the async code is executed, preventing bugs where code
 * accesses things within the component after being unmounted.
 */
var safeRequestAnimationFrame = function (component) {
    var activeTimeouts;
    return function (cb) {
        if (!activeTimeouts) {
            activeTimeouts = new Set();
            extendComponent(component, {
                componentWillUnmount: function () {
                    activeTimeouts.forEach(function (id) { return cancelAnimationFrame(id); });
                }
            });
        }
        var timeoutId = requestAnimationFrame(function () {
            activeTimeouts.delete(timeoutId);
            cb();
        });
        activeTimeouts.add(timeoutId);
    };
};

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/safeSetTimeout.js

/**
 * Generates a function to be attached to a React component, which can be called
 * as a replacement to setTimeout. In-flight async calls will be auto canceled if the component
 * is unmounting before the async code is executed, preventing bugs where code
 * accesses things within the component after being unmounted.
 */
var safeSetTimeout = function (component) {
    var activeTimeouts;
    return function (cb, duration) {
        if (!activeTimeouts) {
            activeTimeouts = new Set();
            extendComponent(component, {
                componentWillUnmount: function () {
                    activeTimeouts.forEach(function (id) { return clearTimeout(id); });
                }
            });
        }
        var timeoutId = setTimeout(function () {
            activeTimeouts.delete(timeoutId);
            cb();
        }, duration);
        activeTimeouts.add(timeoutId);
    };
};

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/string.js
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * @example
 * ```tsx
 * "I love {0} every {1}".format("CXP")
 * ```
 * will result in a Debug Exception.
 *
 * @public
 */
// tslint:disable-next-line:no-any
function format(s) {
    'use strict';
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replace_func(match) {
        // looks up in the args
        // tslint:disable-next-line:no-any
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return s.replace(FORMAT_REGEX, replace_func);
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/styled.js





var DefaultFields = ['theme', 'styles'];
/**
 * The styled HOC wrapper allows you to create a functional wrapper around a given component which will resolve
 * getStyles functional props, and mix customized props passed in using concatStyleSets.
 *
 * @example
 * ```tsx
 * export const Toggle = styled(
 *   ToggleBase,
 *   props => ({ root: { background: 'red' }})
 * );
 * ```
 * @param Component - The unstyled base component to render, which receives styles.
 * @param baseStyles - The styles which should be curried with the component.
 * @param getProps - A helper which provides default props.
 * @param customizable - An object which defines which props can be customized using the Customizer.
 * @param pure - A boolean indicating if the component should avoid re-rendering when props haven't changed.
 * Note that pure should not be used on components which allow children, or take in complex objects or
 * arrays as props which could mutate on every render.
 */
function styled(Component, baseStyles, getProps, customizable, pure) {
    customizable = customizable || { scope: '', fields: undefined };
    var scope = customizable.scope, _a = customizable.fields, fields = _a === void 0 ? DefaultFields : _a;
    var ParentComponent = pure ? external__react_["PureComponent"] : external__react_["Component"];
    var Wrapped = /** @class */ (function (_super) {
        __extends(Wrapped, _super);
        function Wrapped() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._inCustomizerContext = false;
            _this._renderContent = function (context) {
                _this._inCustomizerContext = !!context.customizations.inCustomizerContext;
                var settings = Customizations_Customizations.getSettings(fields, scope, context.customizations);
                var customizedStyles = settings.styles, rest = __rest(settings, ["styles"]);
                var additionalProps = getProps ? getProps(_this.props) : undefined;
                _this._customizedStyles = customizedStyles;
                return external__react_["createElement"](Component, __assign({}, rest, additionalProps, _this.props, { styles: _this._resolveClassNames }));
            };
            _this._resolveClassNames = function (styleProps) {
                return _resolve(styleProps, baseStyles, _this._customizedStyles, _this.props.styles);
            };
            _this._onSettingsChanged = function () { return _this.forceUpdate(); };
            return _this;
        }
        Wrapped.prototype.render = function () {
            return external__react_["createElement"](CustomizerContext.Consumer, null, this._renderContent);
        };
        Wrapped.prototype.componentDidMount = function () {
            if (!this._inCustomizerContext) {
                Customizations_Customizations.observe(this._onSettingsChanged);
            }
        };
        Wrapped.prototype.componentWillUnmount = function () {
            if (!this._inCustomizerContext) {
                Customizations_Customizations.unobserve(this._onSettingsChanged);
            }
        };
        // Function.prototype.name is an ES6 feature, so the cast to any is required until we're
        // able to drop IE 11 support and compile with ES6 libs
        // tslint:disable-next-line:no-any
        Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
        return Wrapped;
    }(ParentComponent));
    // This preserves backwards compatibility.
    // tslint:disable-next-line:no-any
    return Wrapped;
}
function _resolve(styleProps) {
    var allStyles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        allStyles[_i - 1] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, allStyles_1 = allStyles; _a < allStyles_1.length; _a++) {
        var styles = allStyles_1[_a];
        if (styles) {
            result.push(typeof styles === 'function' ? styles(styleProps) : styles);
        }
    }
    if (result.length === 1) {
        return result[0];
    }
    else if (result.length) {
        // cliffkoh: I cannot figure out how to avoid the cast to any here.
        // It is something to do with the use of Omit in IStyleSet.
        // It might not be necessary once  Omit becomes part of lib.d.ts (when we remove our own Omit and rely on
        // the official version).
        // tslint:disable-next-line:no-any
        return concatStyleSets.apply(void 0, result);
    }
    return undefined;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/warn.js





// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/setFocusVisibility.js

var setFocusVisibility_IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
/**
 * Sets the visibility of focus styling.
 * By default, focus styling (the box surrounding a focused Button, for example) only show up when navigational
 * keypresses occur (through TAB, arrows, pgup/down, home and end), and are hidden when mouse interactions occur.
 * This API provides an imperative way to turn them on/off.
 * A use case might be when you have a keypress like ctrl-f6 navigate to a particular region on the page, and want focus to show up.
 *
 * @param enabled - whether to remove or add focus
 * @param target - optional target
 */
function setFocusVisibility(enabled, target) {
    var win = target ? getWindow(target) : getWindow();
    if (win) {
        var classList = win.document.body.classList;
        if (enabled) {
            classList.add(setFocusVisibility_IsFocusVisibleClassName);
        }
        else {
            classList.remove(setFocusVisibility_IsFocusVisibleClassName);
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/version.js
// @uifabric/utilities@6.39.0
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

setVersion('@uifabric/utilities', '6.39.0');

// CONCATENATED MODULE: ./node_modules/@uifabric/utilities/lib/index.js























































// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/Utilities.js



// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Label/Label.base.js




var Label_base_getClassNames = classNamesFunction();
var Label_base_LabelBase = /** @class */ (function (_super) {
    __extends(LabelBase, _super);
    function LabelBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelBase.prototype.render = function () {
        var _a = this.props, _b = _a.as, RootType = _b === void 0 ? 'label' : _b, children = _a.children, className = _a.className, disabled = _a.disabled, styles = _a.styles, required = _a.required, theme = _a.theme;
        var classNames = Label_base_getClassNames(styles, {
            className: className,
            disabled: disabled,
            required: required,
            theme: theme
        });
        return (external__react_["createElement"](RootType, __assign({}, getNativeProps(this.props, divProperties), { className: classNames.root }), children));
    };
    return LabelBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/MergeStyles.js


// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/utilities/buildClassMap.js

/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */
function buildClassMap(styles) {
    var classes = {};
    var _loop_1 = function (styleName) {
        if (styles.hasOwnProperty(styleName)) {
            var className_1;
            Object.defineProperty(classes, styleName, {
                get: function () {
                    if (className_1 === undefined) {
                        // tslint:disable-next-line:no-any
                        className_1 = mergeStyles(styles[styleName]).toString();
                    }
                    return className_1;
                },
                enumerable: true,
                configurable: true
            });
        }
    };
    for (var styleName in styles) {
        _loop_1(styleName);
    }
    return classes;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/utilities/icons.js



var ICON_SETTING_NAME = 'icons';
var _iconSettings = GlobalSettings.getValue(ICON_SETTING_NAME, {
    __options: {
        disableWarnings: false,
        warnOnMissingIcons: true
    },
    __remapped: {}
});
// Reset icon registration on stylesheet resets.
var icons_stylesheet = Stylesheet_Stylesheet.getInstance();
if (icons_stylesheet && icons_stylesheet.onReset) {
    icons_stylesheet.onReset(function () {
        for (var name_1 in _iconSettings) {
            if (_iconSettings.hasOwnProperty(name_1) && !!_iconSettings[name_1].subset) {
                _iconSettings[name_1].subset.className = undefined;
            }
        }
    });
}
/**
 * Normalizes an icon name for consistent mapping.
 * Current implementation is to convert the icon name to lower case.
 *
 * @param name - Icon name to normalize.
 * @returns {string} Normalized icon name to use for indexing and mapping.
 */
var normalizeIconName = function (name) { return name.toLowerCase(); };
/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */
function registerIcons(iconSubset, options) {
    var subset = __assign({}, iconSubset, { isRegistered: false, className: undefined });
    var icons = iconSubset.icons;
    // Grab options, optionally mix user provided ones on top.
    options = options ? __assign({}, _iconSettings.__options, options) : _iconSettings.__options;
    for (var iconName in icons) {
        if (icons.hasOwnProperty(iconName)) {
            var code = icons[iconName];
            var normalizedIconName = normalizeIconName(iconName);
            if (_iconSettings[normalizedIconName]) {
                _warnDuplicateIcon(iconName);
            }
            else {
                _iconSettings[normalizedIconName] = {
                    code: code,
                    subset: subset
                };
            }
        }
    }
}
/**
 * Unregisters icons by name.
 *
 * @param iconNames - List of icons to unregister.
 */
function unregisterIcons(iconNames) {
    var options = _iconSettings.__options;
    var _loop_1 = function (iconName) {
        var normalizedIconName = normalizeIconName(iconName);
        if (_iconSettings[normalizedIconName]) {
            delete _iconSettings[normalizedIconName];
        }
        else {
            // Warn that we are trying to delete an icon that doesn't exist
            if (!options.disableWarnings) {
                warn("The icon \"" + iconName + "\" tried to unregister but was not registered.");
            }
        }
        // Delete any aliases for this iconName
        if (_iconSettings.__remapped[normalizedIconName]) {
            delete _iconSettings.__remapped[normalizedIconName];
        }
        // Delete any items that were an alias for this iconName
        Object.keys(_iconSettings.__remapped).forEach(function (key) {
            if (_iconSettings.__remapped[key] === normalizedIconName) {
                delete _iconSettings.__remapped[key];
            }
        });
    };
    for (var _i = 0, iconNames_1 = iconNames; _i < iconNames_1.length; _i++) {
        var iconName = iconNames_1[_i];
        _loop_1(iconName);
    }
}
/**
 * Remaps one icon name to another.
 */
function registerIconAlias(iconName, mappedToName) {
    _iconSettings.__remapped[normalizeIconName(iconName)] = normalizeIconName(mappedToName);
}
/**
 * Gets an icon definition. If an icon is requested but the subset has yet to be registered,
 * it will get registered immediately.
 *
 * @public
 * @param name - Name of icon.
 */
function getIcon(name) {
    var icon = undefined;
    var options = _iconSettings.__options;
    name = name ? normalizeIconName(name) : '';
    name = _iconSettings.__remapped[name] || name;
    if (name) {
        icon = _iconSettings[name];
        if (icon) {
            var subset = icon.subset;
            if (subset && subset.fontFace) {
                if (!subset.isRegistered) {
                    fontFace(subset.fontFace);
                    subset.isRegistered = true;
                }
                if (!subset.className) {
                    subset.className = mergeStyles(subset.style, {
                        fontFamily: subset.fontFace.fontFamily,
                        fontWeight: subset.fontFace.fontWeight || 'normal',
                        fontStyle: subset.fontFace.fontStyle || 'normal'
                    });
                }
            }
        }
        else {
            if (!options.disableWarnings && options.warnOnMissingIcons) {
                warn("The icon \"" + name + "\" was used but not registered. See http://aka.ms/fabric-icon-usage for more information.");
            }
        }
    }
    return icon;
}
/**
 * Sets the icon options.
 *
 * @public
 */
function setIconOptions(options) {
    _iconSettings.__options = __assign({}, _iconSettings.__options, options);
}
var _missingIcons = [];
var _missingIconsTimer = undefined;
function _warnDuplicateIcon(iconName) {
    var options = _iconSettings.__options;
    var warningDelay = 2000;
    var maxIconsInMessage = 10;
    if (!options.disableWarnings) {
        _missingIcons.push(iconName);
        if (_missingIconsTimer === undefined) {
            _missingIconsTimer = setTimeout(function () {
                warn("Some icons were re-registered. Applications should only call registerIcons for any given " +
                    "icon once. Redefining what an icon is may have unintended consequences. Duplicates " +
                    "include: \n" +
                    _missingIcons.slice(0, maxIconsInMessage).join(', ') +
                    (_missingIcons.length > maxIconsInMessage ? " (+ " + (_missingIcons.length - maxIconsInMessage) + " more)" : ''));
                _missingIconsTimer = undefined;
                _missingIcons = [];
            }, warningDelay);
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/utilities/getIconClassName.js


var defaultIconStyles = {
    display: 'inline-block'
};
/**
 * Gets an icon classname. You should be able to add this classname to an I tag with no
 * additional classnames, and render the icon.
 *
 * @public
 */
function getIconClassName(name) {
    var className = '';
    var icon = getIcon(name);
    if (icon) {
        className = mergeStyles(icon.subset.className, defaultIconStyles, {
            selectors: {
                '::before': {
                    content: "\"" + icon.code + "\""
                }
            }
        });
    }
    return className;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/utilities/index.js




// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/AnimationStyles.js

/* Register the keyframes */
var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 }
});
var FADE_OUT = keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 }
});
var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
var SLIDE_LEFT_IN10 = _createSlideInX(10);
var SLIDE_LEFT_IN20 = _createSlideInX(20);
var SLIDE_LEFT_IN40 = _createSlideInX(40);
var SLIDE_LEFT_IN400 = _createSlideInX(400);
var SLIDE_UP_IN10 = _createSlideInY(10);
var SLIDE_UP_IN20 = _createSlideInY(20);
var SLIDE_DOWN_IN10 = _createSlideInY(-10);
var SLIDE_DOWN_IN20 = _createSlideInY(-20);
var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
var SLIDE_UP_OUT10 = _createSlideOutY(-10);
var SLIDE_UP_OUT20 = _createSlideOutY(-20);
var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
var SCALE_UP100 = keyframes({
    from: { transform: 'scale3d(.98,.98,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_DOWN98 = keyframes({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(.98,.98,1)' }
});
var SCALE_DOWN100 = keyframes({
    from: { transform: 'scale3d(1.03,1.03,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_UP103 = keyframes({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(1.03,1.03,1)' }
});
var ROTATE90 = keyframes({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(90deg)' }
});
var ROTATE_N90 = keyframes({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(-90deg)' }
});
/**
 * Exporting raw duraction values and easing functions to be used in custom animations
 */
var AnimationVariables = {
    easeFunction1: EASING_FUNCTION_1,
    easeFunction2: EASING_FUNCTION_2,
    durationValue1: DURATION_1,
    durationValue2: DURATION_2,
    durationValue3: DURATION_3,
    durationValue4: DURATION_4
};
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
var AnimationStyles = {
    slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
    slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
    slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
    slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
    scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
    scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
    scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
    scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
    fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
    fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
    fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
    fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
    fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
    fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
    fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
    fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
    rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
    rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2)
    // expandCollapse 100/200/400, delay 100/200
};
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return {
        animationName: animationName,
        animationDuration: animationDuration,
        animationTimingFunction: animationTimingFunction,
        animationFillMode: 'both'
    };
}
function _createSlideInX(fromX) {
    return keyframes({
        from: { transform: "translate3d(" + fromX + "px,0,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideInY(fromY) {
    return keyframes({
        from: { transform: "translate3d(0," + fromY + "px,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideOutX(toX) {
    return keyframes({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(" + toX + "px,0,0)" }
    });
}
function _createSlideOutY(toY) {
    return keyframes({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(0," + toY + "px,0)" }
    });
}

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/DefaultPalette.js
// When adding or removing a color, make sure you keep this consistent with IColorClassNames by adding the color variants.
var DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d4',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#212121',
    neutralPrimary: '#333333',
    neutralPrimaryAlt: '#3c3c3c',
    neutralSecondary: '#666666',
    neutralSecondaryAlt: '#767676',
    neutralTertiary: '#a6a6a6',
    neutralTertiaryAlt: '#c8c8c8',
    neutralQuaternary: '#d0d0d0',
    neutralQuaternaryAlt: '#dadada',
    neutralLight: '#eaeaea',
    neutralLighter: '#f4f4f4',
    neutralLighterAlt: '#f8f8f8',
    accent: '#0078d4',
    white: '#ffffff',
    whiteTranslucent40: 'rgba(255,255,255,.4)',
    yellowDark: '#d29200',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a80000',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d4',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a'
};

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/fonts.js
// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// Font face names to be registered.
var LocalizedFontNames;
(function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
})(LocalizedFontNames || (LocalizedFontNames = {}));
// Font families with fallbacks, for the general regions.
var LocalizedFontFamilies;
(function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'" + LocalizedFontNames.Arabic + "'";
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'" + LocalizedFontNames.Cyrillic + "'";
    LocalizedFontFamilies.EastEuropean = "'" + LocalizedFontNames.EastEuropean + "'";
    LocalizedFontFamilies.Greek = "'" + LocalizedFontNames.Greek + "'";
    LocalizedFontFamilies.Hebrew = "'" + LocalizedFontNames.Hebrew + "'";
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'" + LocalizedFontNames.Selawik + "'";
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'" + LocalizedFontNames.Vietnamese + "'";
    LocalizedFontFamilies.WestEuropean = "'" + LocalizedFontNames.WestEuropean + "'";
})(LocalizedFontFamilies || (LocalizedFontFamilies = {}));
// By default, we favor system fonts for the default.
// All localized fonts use a web font and never use the system font.
var defaultFontFamily = "'Segoe UI', '" + LocalizedFontNames.WestEuropean + "'";
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    ar: LocalizedFontFamilies.Arabic,
    bg: LocalizedFontFamilies.Cyrillic,
    cs: LocalizedFontFamilies.EastEuropean,
    el: LocalizedFontFamilies.Greek,
    et: LocalizedFontFamilies.EastEuropean,
    he: LocalizedFontFamilies.Hebrew,
    hi: LocalizedFontFamilies.Hindi,
    hr: LocalizedFontFamilies.EastEuropean,
    hu: LocalizedFontFamilies.EastEuropean,
    ja: LocalizedFontFamilies.Japanese,
    kk: LocalizedFontFamilies.EastEuropean,
    ko: LocalizedFontFamilies.Korean,
    lt: LocalizedFontFamilies.EastEuropean,
    lv: LocalizedFontFamilies.EastEuropean,
    pl: LocalizedFontFamilies.EastEuropean,
    ru: LocalizedFontFamilies.Cyrillic,
    sk: LocalizedFontFamilies.EastEuropean,
    'sr-latn': LocalizedFontFamilies.EastEuropean,
    th: LocalizedFontFamilies.Thai,
    tr: LocalizedFontFamilies.EastEuropean,
    uk: LocalizedFontFamilies.Cyrillic,
    vi: LocalizedFontFamilies.Vietnamese,
    'zh-hans': LocalizedFontFamilies.ChineseSimplified,
    'zh-hant': LocalizedFontFamilies.ChineseTraditional
};
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.mini = '10px';
    FontSizes.xSmall = '11px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '13px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '15px';
    FontSizes.icon = '16px';
    FontSizes.large = '17px';
    FontSizes.xLarge = '21px';
    FontSizes.xxLarge = '28px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '72px';
})(FontSizes || (FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights || (FontWeights = {}));
// Standard Icon Sizes.
var IconFontSizes;
(function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
})(IconFontSizes || (IconFontSizes = {}));
function _fontFamilyWithFallbacks(fontFamily) {
    return fontFamily + ", " + FontFamilyFallbacks;
}
function createFontStyles(localeCode) {
    var localizedFont = _getLocalizedFontFamily(localeCode);
    var fontFamilyWithFallback = _fontFamilyWithFallbacks(localizedFont);
    var semilightFontFamilyWithFallback = fontFamilyWithFallback;
    // Chrome has a bug where it does not render Segoe UI Semilight correctly, so we force the webfont to be used in that case
    if (localizedFont === defaultFontFamily) {
        semilightFontFamilyWithFallback = _fontFamilyWithFallbacks(LocalizedFontFamilies.WestEuropean);
    }
    var fontStyles = {
        tiny: _createFont(FontSizes.mini, FontWeights.semibold, fontFamilyWithFallback),
        xSmall: _createFont(FontSizes.xSmall, FontWeights.regular, fontFamilyWithFallback),
        small: _createFont(FontSizes.small, FontWeights.regular, fontFamilyWithFallback),
        smallPlus: _createFont(FontSizes.smallPlus, FontWeights.regular, fontFamilyWithFallback),
        medium: _createFont(FontSizes.medium, FontWeights.regular, fontFamilyWithFallback),
        mediumPlus: _createFont(FontSizes.mediumPlus, FontWeights.regular, fontFamilyWithFallback),
        large: _createFont(FontSizes.large, FontWeights.semilight, semilightFontFamilyWithFallback),
        xLarge: _createFont(FontSizes.xLarge, FontWeights.light, fontFamilyWithFallback),
        xxLarge: _createFont(FontSizes.xxLarge, FontWeights.light, fontFamilyWithFallback),
        superLarge: _createFont(FontSizes.superLarge, FontWeights.light, fontFamilyWithFallback),
        mega: _createFont(FontSizes.mega, FontWeights.light, fontFamilyWithFallback)
    };
    return fontStyles;
}
/**
 * If there is a localized font for this language, return that. Returns undefined if there is no localized font for that language.
 */
function _getLocalizedFontFamily(language) {
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // tslint:disable-next-line:no-any
            return LanguageToFontMap[lang];
        }
    }
    return defaultFontFamily;
}
function _createFont(size, weight, fontFamily) {
    return {
        fontFamily: fontFamily,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight
    };
}

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/DefaultFontStyles.js



// Default urls.
var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
// Standard font styling.
var DefaultFontStyles = createFontStyles(getLanguage());
function _registerFontFace(fontFamily, url, fontWeight, localFontName) {
    fontFamily = "'" + fontFamily + "'";
    var localFontSrc = localFontName !== undefined ? "local('" + localFontName + "')," : '';
    fontFace({
        fontFamily: fontFamily,
        src: localFontSrc + ("url('" + url + ".woff2') format('woff2'),") + ("url('" + url + ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal'
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    _registerFontFace(fontFamily, urlBase + '-light', FontWeights.light, localFontName && localFontName + ' Light');
    _registerFontFace(fontFamily, urlBase + '-semilight', FontWeights.semilight, localFontName && localFontName + ' SemiLight');
    _registerFontFace(fontFamily, urlBase + '-regular', FontWeights.regular, localFontName);
    _registerFontFace(fontFamily, urlBase + '-semibold', FontWeights.semibold, localFontName && localFontName + ' SemiBold');
}
function registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
        var fontUrl = baseUrl + "/fonts";
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, LocalizedFontNames.Thai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, LocalizedFontNames.Arabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, LocalizedFontNames.Cyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, LocalizedFontNames.EastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, LocalizedFontNames.Greek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, LocalizedFontNames.Hebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, LocalizedFontNames.Vietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, LocalizedFontNames.WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');
        _registerFontFaceSet(fontUrl, LocalizedFontFamilies.Selawik, 'selawik', 'selawik');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", FontWeights.light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", FontWeights.semibold);
    }
}
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var win = getWindow();
    // tslint:disable-next-line:no-string-literal no-any
    var fabricConfig = win ? win['FabricConfig'] : undefined;
    return fabricConfig && fabricConfig.fontBaseUrl !== undefined ? fabricConfig.fontBaseUrl : DefaultBaseUrl;
}
/**
 * Register the font faces.
 */
registerDefaultFontFaces(_getFontBaseUrl());

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/CommonStyles.js
var HighContrastSelector = '@media screen and (-ms-high-contrast: active)';
var HighContrastSelectorWhite = '@media screen and (-ms-high-contrast: black-on-white)';
var HighContrastSelectorBlack = '@media screen and (-ms-high-contrast: white-on-black)';
var ScreenWidthMinSmall = 320;
var ScreenWidthMinMedium = 480;
var ScreenWidthMinLarge = 640;
var ScreenWidthMinXLarge = 1024;
var ScreenWidthMinXXLarge = 1366;
var ScreenWidthMinXXXLarge = 1920;
var ScreenWidthMaxSmall = ScreenWidthMinMedium - 1;
var ScreenWidthMaxMedium = ScreenWidthMinLarge - 1;
var ScreenWidthMaxLarge = ScreenWidthMinXLarge - 1;
var ScreenWidthMaxXLarge = ScreenWidthMinXXLarge - 1;
var ScreenWidthMaxXXLarge = ScreenWidthMinXXXLarge - 1;
var ScreenWidthMinUhfMobile = 768;
function getScreenSelector(min, max) {
    return "@media only screen and (min-width: " + min + "px) and (max-width: " + max + "px)";
}

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/zIndexes.js
var ZIndexes;
(function (ZIndexes) {
    ZIndexes.Nav = 1;
    /**
     * @deprecated ScrollablePane
     */
    ZIndexes.ScrollablePane = 1;
    ZIndexes.FocusStyle = 1;
    ZIndexes.Coachmark = 1000;
    ZIndexes.Layer = 1000000;
    ZIndexes.KeytipLayer = 1000001;
})(ZIndexes || (ZIndexes = {}));

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/getFocusStyle.js



function getFocusStyle(theme, insetOrOptions, position, highContrastStyle, borderColor, outlineColor, isFocusedOnly) {
    if (typeof insetOrOptions === 'number' || !insetOrOptions) {
        return _getFocusStyleInternal(theme, { inset: insetOrOptions, position: position, highContrastStyle: highContrastStyle, borderColor: borderColor, outlineColor: outlineColor, isFocusedOnly: isFocusedOnly });
    }
    else {
        return _getFocusStyleInternal(theme, insetOrOptions);
    }
}
function _getFocusStyleInternal(theme, options) {
    if (options === void 0) { options = {}; }
    var _a = options.inset, inset = _a === void 0 ? 0 : _a, _b = options.width, width = _b === void 0 ? 1 : _b, _c = options.position, position = _c === void 0 ? 'relative' : _c, highContrastStyle = options.highContrastStyle, _d = options.borderColor, borderColor = _d === void 0 ? theme.palette.white : _d, _e = options.outlineColor, outlineColor = _e === void 0 ? theme.palette.neutralSecondary : _e, _f = options.isFocusedOnly, isFocusedOnly = _f === void 0 ? true : _f;
    return {
        // Clear browser-specific focus styles and use 'transparent' as placeholder for focus style.
        outline: 'transparent',
        // Requirement because pseudo-element is absolutely positioned.
        position: position,
        selectors: (_g = {
                // Clear the focus border in Firefox.
                // Reference: http://stackoverflow.com/a/199319/1436671
                '::-moz-focus-inner': {
                    border: '0'
                }
            },
            // When the element that uses this mixin is in a :focus state, add a pseudo-element to
            // create a border.
            _g["." + IsFocusVisibleClassName + " &" + (isFocusedOnly ? ':focus' : '') + ":after"] = {
                content: '""',
                position: 'absolute',
                left: inset + 1,
                top: inset + 1,
                bottom: inset + 1,
                right: inset + 1,
                border: width + "px solid " + borderColor,
                outline: width + "px solid " + outlineColor,
                zIndex: ZIndexes.FocusStyle,
                selectors: (_h = {},
                    _h[HighContrastSelector] = highContrastStyle,
                    _h)
            },
            _g)
    };
    var _g, _h;
}
/**
 * Generates style to clear browser specific focus styles.
 */
function focusClear() {
    return {
        selectors: {
            '&::-moz-focus-inner': {
                // Clear the focus border in Firefox. Reference: http://stackoverflow.com/a/199319/1436671
                border: 0
            },
            '&': {
                // Clear browser specific focus styles and use transparent as placeholder for focus style
                outline: 'transparent'
            }
        }
    };
}
/**
 * Generates a style which can be used to set a border on focus.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border (default 0)
 * @param width - The border width in pixels (default 1)
 * @param color - Color of the outline (default `theme.palette.neutralSecondary`)
 * @returns The style object.
 */
function getFocusOutlineStyle(theme, inset, width, color) {
    if (inset === void 0) { inset = 0; }
    if (width === void 0) { width = 1; }
    return {
        selectors: (_a = {},
            _a[":global(" + IsFocusVisibleClassName + ") &:focus"] = {
                outline: width + " solid " + (color || theme.palette.neutralSecondary),
                outlineOffset: -inset + "px"
            },
            _a)
    };
    var _a;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/hiddenContentStyle.js
var hiddenContentStyle = {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    border: 0,
    overflow: 'hidden'
};

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/PulsingBeaconAnimationStyles.js


var DEFAULT_DURATION = '14s';
var DEFAULT_DELAY = '2s';
var DEFAULT_ITERATION_COUNT = '1';
function _continuousPulseStepOne(beaconColorOne, innerDimension) {
    return {
        borderColor: beaconColorOne,
        borderWidth: '0px',
        width: innerDimension,
        height: innerDimension
    };
}
function _continuousPulseStepTwo(borderWidth) {
    return {
        opacity: 1,
        borderWidth: borderWidth
    };
}
function _continuousPulseStepThree() {
    return {
        opacity: 1
    };
}
function _continuousPulseStepFour(beaconColorTwo, outerDimension) {
    return {
        borderWidth: '0',
        width: outerDimension,
        height: outerDimension,
        opacity: 0,
        borderColor: beaconColorTwo
    };
}
function _continuousPulseStepFive(beaconColorOne, innerDimension) {
    return __assign({}, _continuousPulseStepOne(beaconColorOne, innerDimension), {
        opacity: 0
    });
}
function _continuousPulseAnimationDouble(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return keyframes({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '1.42%': _continuousPulseStepTwo(borderWidth),
        '3.57%': _continuousPulseStepThree(),
        '7.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '8%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '29.99%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '30%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '31.42%': _continuousPulseStepTwo(borderWidth),
        '33.57%': _continuousPulseStepThree(),
        '37.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '38%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.42%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.43': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '81.85': _continuousPulseStepTwo(borderWidth),
        '83.42': _continuousPulseStepThree(),
        '87%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {}
    });
}
function _continuousPulseAnimationSingle(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return keyframes({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '14.2%': _continuousPulseStepTwo(borderWidth),
        '35.7%': _continuousPulseStepThree(),
        '71.4%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {}
    });
}
function _createDefaultAnimation(animationName, delayLength) {
    return {
        animationName: animationName,
        animationIterationCount: DEFAULT_ITERATION_COUNT,
        animationDuration: DEFAULT_DURATION,
        animationDelay: delayLength || DEFAULT_DELAY
    };
}
var PulsingBeaconAnimationStyles = {
    continuousPulseAnimationDouble: _continuousPulseAnimationDouble,
    continuousPulseAnimationSingle: _continuousPulseAnimationSingle,
    createDefaultAnimation: _createDefaultAnimation
};

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/getGlobalClassNames.js


/**
 * Internal memoized function which simply takes in the class map and the
 * disable boolean. These immutable values can be memoized.
 */
var _getGlobalClassNames = memoizeFunction(function (classNames, disableGlobalClassNames) {
    var styleSheet = Stylesheet_Stylesheet.getInstance();
    if (disableGlobalClassNames) {
        // disable global classnames
        return Object.keys(classNames).reduce(function (acc, className) {
            acc[className] = styleSheet.getClassName(classNames[className]);
            return acc;
        }, {});
    }
    // use global classnames
    return classNames;
});
/**
 * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
 * Note that calls to this function are memoized.
 *
 * @param classNames - The collection of global class names that apply when the flag is false. Make sure to pass in
 * the same instance on each call to benefit from memoization.
 * @param theme - The theme to check the flag on
 * @param disableGlobalClassNames - Optional. Explicitly opt in/out of disabling global classnames. Defaults to false.
 */
function getGlobalClassNames(classNames, theme, disableGlobalClassNames) {
    return _getGlobalClassNames(classNames, disableGlobalClassNames !== undefined ? disableGlobalClassNames : theme.disableGlobalClassNames);
}

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/scheme.js

/**
 * @internal
 * This function is still in experimental phase in support of Foundation experimental development. Its API signature and existence
 * are subject to change.
 *
 * Modify context to activate the specified scheme or theme. For schemes, look in context (if available) and fall back to global
 * Customizations. If both scheme and theme are specified, scheme will be looked up in theme. In this case, scheme must be
 * present in theme arg, otherwise new context will default to theme arg (there is no fallback to settings to look up scheme.)
 *
 * @param context - Context in which to get schemed customizations.
 * @param scheme - Scheme to get customizations for from theme arg (if supplied) OR from context and global settings.
 * @param theme - Theme to merge into context.
 * @returns modified schemed context if scheme is valid and not already applied, unmodified context otherwise.
 */
function getThemedContext(context, scheme, theme) {
    var newContext = context;
    var newSettings;
    // Only fall back to context and customizations when theme arg is not provided.
    var schemeSource = theme || Customizations_Customizations.getSettings(['theme'], undefined, context.customizations).theme;
    if (theme) {
        newSettings = { theme: theme };
    }
    var schemeTheme = scheme && schemeSource && schemeSource.schemes && schemeSource.schemes[scheme];
    // These first two checks are logically redundant but TS doesn't infer schemeSource.schemes is defined when schemeTheme is defined.
    if (schemeSource && schemeTheme && schemeSource !== schemeTheme) {
        newSettings = { theme: schemeTheme };
        newSettings.theme.schemes = schemeSource.schemes;
    }
    if (newSettings) {
        newContext = {
            customizations: {
                settings: mergeSettings(context.customizations.settings, newSettings),
                scopedSettings: context.customizations.scopedSettings
            }
        };
    }
    return newContext;
}

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/DefaultSpacing.js
var DefaultSpacing = {
    s2: '4px',
    s1: '8px',
    m: '16px',
    l1: '20px',
    l2: '32px'
};

// EXTERNAL MODULE: ./node_modules/@microsoft/load-themed-styles/lib/index.js
var lib = __webpack_require__(4);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/DefaultEffects.js
var DefaultEffects = {
    // commented values are the defaults for Fluent
    elevation4: '0 0 5px 0 rgba(0,0,0,.4)',
    elevation8: '0 0 5px 0 rgba(0,0,0,.4)',
    elevation16: '0 0 5px 0 rgba(0,0,0,.4)',
    elevation64: '0 0 5px 0 rgba(0,0,0,.4)',
    roundedCorner2: '0px' // 2
};

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/theme.js







var _theme = createTheme({
    palette: DefaultPalette,
    semanticColors: _makeSemanticColorsFromPalette(DefaultPalette, false, false),
    fonts: DefaultFontStyles,
    isInverted: false,
    disableGlobalClassNames: false
});
var _onThemeChangeCallbacks = [];
var ThemeSettingName = 'theme';
if (!Customizations_Customizations.getSettings([ThemeSettingName]).theme) {
    var theme_win = getWindow();
    // tslint:disable:no-string-literal no-any
    if (theme_win && theme_win['FabricConfig'] && theme_win['FabricConfig'].theme) {
        _theme = createTheme(theme_win['FabricConfig'].theme);
    }
    // tslint:enable:no-string-literal no-any
    // Set the default theme.
    Customizations_Customizations.applySettings((theme__a = {}, theme__a[ThemeSettingName] = _theme, theme__a));
}
/**
 * Gets the theme object
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function getTheme(depComments) {
    if (depComments === void 0) { depComments = false; }
    if (depComments === true) {
        _theme = createTheme({}, depComments);
    }
    return _theme;
}
/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
function registerOnThemeChangeCallback(callback) {
    if (_onThemeChangeCallbacks.indexOf(callback) === -1) {
        _onThemeChangeCallbacks.push(callback);
    }
}
/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
function removeOnThemeChangeCallback(callback) {
    var i = _onThemeChangeCallbacks.indexOf(callback);
    if (i === -1) {
        return;
    }
    _onThemeChangeCallbacks.splice(i, 1);
}
/**
 * Applies the theme, while filling in missing slots.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function loadTheme(theme, depComments) {
    if (depComments === void 0) { depComments = false; }
    _theme = createTheme(theme, depComments);
    // Invoke the legacy method of theming the page as well.
    Object(lib["loadTheme"])(__assign({}, _theme.palette, _theme.semanticColors, _theme.effects, _loadFonts(_theme)));
    Customizations_Customizations.applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
    _onThemeChangeCallbacks.forEach(function (callback) {
        try {
            callback(_theme);
        }
        catch (e) {
            // don't let a bad callback break everything else
        }
    });
    return _theme;
    var _a;
}
/**
 * Loads font variables into a JSON object.
 * @param theme - The theme object
 */
function _loadFonts(theme) {
    var lines = {};
    for (var _i = 0, _a = Object.keys(theme.fonts); _i < _a.length; _i++) {
        var fontName = _a[_i];
        var font = theme.fonts[fontName];
        for (var _b = 0, _c = Object.keys(font); _b < _c.length; _b++) {
            var propName = _c[_b];
            var name_1 = 'ms-font-' + fontName + '-' + propName;
            lines[name_1] = "\"[theme:" + name_1 + ", default: " + font[propName] + "]\"";
        }
    }
    return lines;
}
/**
 * Creates a custom theme definition which can be used with the Customizer.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function createTheme(theme, depComments) {
    if (depComments === void 0) { depComments = false; }
    var newPalette = __assign({}, DefaultPalette, theme.palette);
    if (!theme.palette || !theme.palette.accent) {
        newPalette.accent = newPalette.themePrimary;
    }
    // mix in custom overrides with good slots first, since custom overrides might be used in fixing deprecated slots
    var newSemanticColors = __assign({}, _makeSemanticColorsFromPalette(newPalette, !!theme.isInverted, depComments), theme.semanticColors);
    var defaultFontStyles = __assign({}, DefaultFontStyles);
    if (theme.defaultFontStyle) {
        for (var _i = 0, _a = Object.keys(defaultFontStyles); _i < _a.length; _i++) {
            var fontStyle = _a[_i];
            defaultFontStyles[fontStyle] = merge({}, defaultFontStyles[fontStyle], theme.defaultFontStyle);
        }
    }
    if (theme.fonts) {
        for (var _b = 0, _c = Object.keys(theme.fonts); _b < _c.length; _b++) {
            var fontStyle = _c[_b];
            defaultFontStyles[fontStyle] = merge({}, defaultFontStyles[fontStyle], theme.fonts[fontStyle]);
        }
    }
    return {
        palette: newPalette,
        fonts: __assign({}, defaultFontStyles),
        semanticColors: newSemanticColors,
        isInverted: !!theme.isInverted,
        disableGlobalClassNames: !!theme.disableGlobalClassNames,
        spacing: __assign({}, DefaultSpacing, theme.spacing),
        effects: __assign({}, DefaultEffects, theme.effects)
    };
}
/**
 * Helper to pull a given property name from a given set of sources, in order, if available. Otherwise returns the property name.
 */
function _expandFrom(propertyName) {
    var maps = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        maps[_i - 1] = arguments[_i];
    }
    if (propertyName) {
        for (var _a = 0, maps_1 = maps; _a < maps_1.length; _a++) {
            var map = maps_1[_a];
            if (map[propertyName]) {
                return map[propertyName];
            }
        }
    }
    return propertyName;
}
// Generates all the semantic slot colors based on the Fabric palette.
// We'll use these as fallbacks for semantic slots that the passed in theme did not define.
function _makeSemanticColorsFromPalette(p, isInverted, depComments) {
    var toReturn = {
        bodyBackground: p.white,
        bodyStandoutBackground: p.neutralLighterAlt,
        bodyFrameBackground: p.white,
        bodyFrameDivider: p.neutralLight,
        bodyText: p.neutralPrimary,
        bodyTextChecked: p.black,
        bodySubtext: p.neutralSecondary,
        bodyDivider: p.neutralLight,
        disabledBackground: p.neutralLighter,
        disabledText: p.neutralTertiary,
        disabledBodyText: p.neutralTertiary,
        disabledSubtext: p.neutralQuaternary,
        disabledBodySubtext: p.neutralTertiaryAlt,
        focusBorder: p.neutralSecondary,
        variantBorder: p.neutralLight,
        variantBorderHovered: p.neutralTertiary,
        defaultStateBackground: p.neutralLighterAlt,
        errorText: !isInverted ? p.redDark : '#ff5f5f',
        warningText: !isInverted ? '#333333' : '#ffffff',
        errorBackground: !isInverted ? 'rgba(232, 17, 35, .2)' : 'rgba(232, 17, 35, .5)',
        blockingBackground: !isInverted ? 'rgba(234, 67, 0, .2)' : 'rgba(234, 67, 0, .5)',
        warningBackground: !isInverted ? 'rgba(255, 185, 0, .2)' : 'rgba(255, 251, 0, .6)',
        warningHighlight: !isInverted ? '#ffb900' : '#fff100',
        successBackground: !isInverted ? 'rgba(186, 216, 10, .2)' : 'rgba(186, 216, 10, .4)',
        inputBorder: p.neutralTertiary,
        inputBorderHovered: p.neutralPrimary,
        inputBackground: p.white,
        inputBackgroundChecked: p.themePrimary,
        inputBackgroundCheckedHovered: p.themeDarkAlt,
        inputForegroundChecked: p.white,
        inputFocusBorderAlt: p.themePrimary,
        smallInputBorder: p.neutralSecondary,
        inputText: p.neutralPrimary,
        inputTextHovered: p.neutralDark,
        inputPlaceholderText: p.neutralSecondary,
        buttonBackground: p.neutralLighter,
        buttonBackgroundChecked: p.neutralTertiaryAlt,
        buttonBackgroundHovered: p.neutralLight,
        buttonBackgroundCheckedHovered: p.neutralLight,
        buttonBackgroundPressed: p.neutralLight,
        buttonBackgroundDisabled: p.neutralLighter,
        buttonBorder: 'transparent',
        buttonText: p.neutralPrimary,
        buttonTextHovered: p.neutralDark,
        buttonTextChecked: p.neutralDark,
        buttonTextCheckedHovered: p.black,
        buttonTextPressed: p.neutralDark,
        buttonTextDisabled: p.neutralTertiary,
        buttonBorderDisabled: 'transparent',
        primaryButtonBackground: p.themePrimary,
        primaryButtonBackgroundHovered: p.themeDarkAlt,
        primaryButtonBackgroundPressed: p.themeDark,
        primaryButtonBackgroundDisabled: p.neutralLighter,
        primaryButtonBorder: 'transparent',
        primaryButtonText: p.white,
        primaryButtonTextHovered: p.white,
        primaryButtonTextPressed: p.white,
        primaryButtonTextDisabled: p.neutralQuaternary,
        accentButtonBackground: p.accent,
        accentButtonText: p.white,
        menuBackground: p.white,
        menuDivider: p.neutralTertiaryAlt,
        menuIcon: p.themePrimary,
        menuHeader: p.themePrimary,
        menuItemBackgroundHovered: p.neutralLighter,
        menuItemBackgroundPressed: p.neutralLight,
        menuItemText: p.neutralPrimary,
        menuItemTextHovered: p.neutralDark,
        listBackground: p.white,
        listText: p.neutralPrimary,
        listItemBackgroundHovered: p.neutralLighter,
        listItemBackgroundChecked: p.neutralLight,
        listItemBackgroundCheckedHovered: p.neutralQuaternaryAlt,
        listHeaderBackgroundHovered: p.neutralLighter,
        listHeaderBackgroundPressed: p.neutralLight,
        actionLink: p.neutralPrimary,
        actionLinkHovered: p.neutralDark,
        link: p.themePrimary,
        linkHovered: p.themeDarker,
        // Deprecated slots, second pass by _fixDeprecatedSlots() later for self-referential slots
        listTextColor: '',
        menuItemBackgroundChecked: p.neutralLight
    };
    return _fixDeprecatedSlots(toReturn, depComments);
}
function _fixDeprecatedSlots(s, depComments) {
    // Add @deprecated tag as comment if enabled
    var dep = '';
    if (depComments === true) {
        dep = ' /* @deprecated */';
    }
    s.listTextColor = s.listText + dep;
    s.menuItemBackgroundChecked += dep;
    return s;
}
var theme__a;

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/GeneralStyles.js
// This file mimics styles and mixins from _General.Mixins.scss
var normalize = {
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
};
var noWrap = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/getFadedOverflowStyle.js
var DEFAULT_HEIGHT = '50%';
var DEFAULT_WIDTH = 20;
/**
 * - Generates a style used to fade out an overflowing content by defining a style for an :after pseudo element.
 * - Apply it to the :after selector for all combination of states the parent of content might have (normal, hover, selected, focus).
 * - Requires the target to have position set to relative and overflow set to hidden.
 *
 * @example
 * ```tsx
 * // Assuming the following DOM structure and the different background colors coming from the parent holding the content.
 * <div className={classNames.parent}>
 *   <span className={classNames.content}>Overflown Content</span>
 * </div>
 * ```
 * ```ts
 * // This is how the style set would look in Component.styles.ts
 * const { bodyBackground } = theme.semanticColors;
 * const { neutralLighter } = theme.palette;
 *
 * // The second argument of getFadedOverflowStyle function is a string representing a key of ISemanticColors or IPalette.
 *
 * const styles = {
 *   parent: [
 *     backgroundColor: bodyBackground,
 *     selectors: {
 *       '&:hover: {
 *         backgroundColor: neutralLighter
 *       },
 *       '$content:after': {
 *         ...getFadedOverflowStyle(theme, 'bodyBackground')
 *       },
 *       '&:hover $content:after': {
 *         ...getFadedOverflowStyle(theme, 'neutralLighter')
 *       }
 *     }
 *   ],
 *   content: [
 *     width: '100%',
 *     display: 'inline-block',
 *     position: 'relative',
 *     overflow: 'hidden'
 *   ]
 * }
 * ```
 * @param theme - The theme object to use.
 * @param color - The background color to fade out to. Accepts only keys of ISemanticColors or IPalette. Defaults to 'bodyBackground'.
 * @param direction - The direction of the overflow. Defaults to horizontal.
 * @param width - The width of the fading overflow. Vertical direction defaults it to 100% vs 20px when horizontal.
 * @param height - The Height of the fading overflow. Vertical direction defaults it to 50% vs 100% when horizontal.
 * @returns The style object.
 */
function getFadedOverflowStyle(theme, color, direction, width, height) {
    if (color === void 0) { color = 'bodyBackground'; }
    if (direction === void 0) { direction = 'horizontal'; }
    if (width === void 0) { width = getDefaultValue('width', direction); }
    if (height === void 0) { height = getDefaultValue('height', direction); }
    // Get the color value string from the theme semanticColors or palette.
    var colorValue = theme.semanticColors[color] || theme.palette[color];
    // Get the red, green, blue values of the colorValue.
    var rgbColor = color2rgb(colorValue);
    // Apply opacity 0 to serve as a start color of the gradient.
    var rgba = "rgba(" + rgbColor.r + ", " + rgbColor.g + ", " + rgbColor.b + ", 0)";
    // Get the direction of the gradient.
    var gradientDirection = direction === 'vertical' ? 'to bottom' : 'to right'; // mergeStyles take care of RTL direction.
    return {
        content: '""',
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: width,
        height: height,
        pointerEvents: 'none',
        backgroundImage: "linear-gradient(" + gradientDirection + ", " + rgba + " 0%, " + colorValue + " 100%)"
    };
}
// TODO consider moving this to a separate module along with some more color functions from OUFR/utilities.
/**
 * Helper function to convert a string hex color to an RGB object.
 *
 * @param colorValue - Color to be converted from hex to rgba.
 */
function color2rgb(colorValue) {
    if (colorValue[0] === '#') {
        // If it's a hex code
        return {
            r: parseInt(colorValue.slice(1, 3), 16),
            g: parseInt(colorValue.slice(3, 5), 16),
            b: parseInt(colorValue.slice(5, 7), 16)
        };
    }
    else if (colorValue.indexOf('rgba(') === 0) {
        // If it's an rgba color string
        colorValue = colorValue.match(/rgba\(([^)]+)\)/)[1];
        var parts = colorValue.split(/ *, */).map(Number);
        return {
            r: parts[0],
            g: parts[1],
            b: parts[2]
        };
    }
    // The only remaining possibility is transparent.
    return {
        r: 255,
        g: 255,
        b: 255
    };
}
/**
 * Helper function to get the default values for parameters of main function.
 *
 * @param style - Which style to get the default value for.
 * @param direction - What direction to take into consideration.
 */
function getDefaultValue(style, direction) {
    if (style === 'width') {
        return direction === 'horizontal' ? DEFAULT_WIDTH : '100%';
    }
    else {
        return direction === 'vertical' ? DEFAULT_HEIGHT : '100%';
    }
}

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/styles/index.js















// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/classNames/AnimationClassNames.js


/**
 * {@docCategory AnimationClassNames}
 */
var AnimationClassNames = buildClassMap(AnimationStyles);

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/classNames/FontClassNames.js


/**
 * {@docCategory FontClassNames}
 */
var FontClassNames = buildClassMap(DefaultFontStyles);

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/classNames/ColorClassNames.js



var ColorClassNames = {};
for (var ColorClassNames_colorName in DefaultPalette) {
    if (DefaultPalette.hasOwnProperty(ColorClassNames_colorName)) {
        // Foreground color
        _defineGetter(ColorClassNames, ColorClassNames_colorName, '', false, 'color');
        // Hover color
        _defineGetter(ColorClassNames, ColorClassNames_colorName, 'Hover', true, 'color');
        // Background color
        _defineGetter(ColorClassNames, ColorClassNames_colorName, 'Background', false, 'background');
        // Background hover
        _defineGetter(ColorClassNames, ColorClassNames_colorName, 'BackgroundHover', true, 'background');
        // Border color
        _defineGetter(ColorClassNames, ColorClassNames_colorName, 'Border', false, 'borderColor');
        // Border hover color
        _defineGetter(ColorClassNames, ColorClassNames_colorName, 'BorderHover', true, 'borderColor');
    }
}
/**
 * Defines a getter for the given class configuration.
 */
function _defineGetter(obj, colorName, suffix, isHover, cssProperty) {
    Object.defineProperty(obj, colorName + suffix, {
        get: function () {
            // tslint:disable-next-line:no-any
            var style = (_a = {}, _a[cssProperty] = getTheme().palette[colorName], _a);
            return mergeStyles(isHover ? { selectors: { ':hover': style } } : style).toString();
            var _a;
        },
        enumerable: true,
        configurable: true
    });
}

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/classNames/index.js




// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/version.js
// @uifabric/styling@6.47.6
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

setVersion('@uifabric/styling', '6.47.6');

// CONCATENATED MODULE: ./node_modules/@uifabric/styling/lib/index.js






// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/Styling.js



// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Label/Label.styles.js

var Label_styles_getStyles = function (props) {
    var theme = props.theme, className = props.className, disabled = props.disabled, required = props.required;
    return {
        root: [
            'ms-Label',
            theme.fonts.medium,
            {
                color: theme.semanticColors.bodyText,
                boxSizing: 'border-box',
                boxShadow: 'none',
                margin: 0,
                display: 'block',
                padding: '5px 0',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
            },
            disabled && {
                color: theme.semanticColors.disabledBodyText,
                selectors: (_a = {},
                    _a[HighContrastSelector] = {
                        color: 'GrayText'
                    },
                    _a)
            },
            required && {
                selectors: {
                    '::after': {
                        content: "' *'",
                        color: theme.semanticColors.errorText,
                        paddingRight: 12
                    }
                }
            },
            className
        ]
    };
    var _a;
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Label/Label.js



var Label = styled(Label_base_LabelBase, Label_styles_getStyles, undefined, {
    scope: 'Label'
});

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Label/index.js



// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/Label.js


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.types.js
// Please keep alphabetized
var IconType;
(function (IconType) {
    /**
     * Render using the fabric icon font.
     */
    IconType[IconType["default"] = 0] = "default";
    /**
     * Render using an image, where imageProps would be used.
     */
    IconType[IconType["image"] = 1] = "image";
    /**
     * Deprecated, use `default`.
     * @deprecated Use `default`.
     */
    IconType[IconType["Default"] = 100000] = "Default";
    /**
     * Deprecated, use `image`.
     * @deprecated Use `image`.
     */
    IconType[IconType["Image"] = 100001] = "Image";
})(IconType || (IconType = {}));

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Image/Image.types.js
/**
 * The possible methods that can be used to fit the image.
 */
var ImageFit;
(function (ImageFit) {
    /**
     * The image is not scaled. The image is centered and cropped within the content box.
     */
    ImageFit[ImageFit["center"] = 0] = "center";
    /**
     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["contain"] = 1] = "contain";
    /**
     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["cover"] = 2] = "cover";
    /**
     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
     * frame will have empty space.
     */
    ImageFit[ImageFit["none"] = 3] = "none";
    /**
     * The image will be centered horizontally and vertically within the frame and maintains its aspect ratio. It will
     * behave as ImageFit.center if the image's natural height or width is less than the Image frame's height or width,
     * but if both natural height and width are larger than the frame it will behave as ImageFit.cover.
     */
    ImageFit[ImageFit["centerCover"] = 4] = "centerCover";
})(ImageFit || (ImageFit = {}));
/**
 * The cover style to be used on the image
 */
var ImageCoverStyle;
(function (ImageCoverStyle) {
    /**
     * The image will be shown at 100% height of container and the width will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["landscape"] = 0] = "landscape";
    /**
     * The image will be shown at 100% width of container and the height will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["portrait"] = 1] = "portrait";
})(ImageCoverStyle || (ImageCoverStyle = {}));
var ImageLoadState;
(function (ImageLoadState) {
    /**
     * The image has not yet been loaded, and there is no error yet.
     */
    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
    /**
     * The image has been loaded successfully.
     */
    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
    /**
     * An error has been encountered while loading the image.
     */
    ImageLoadState[ImageLoadState["error"] = 2] = "error";
    /**
     * Deprecated at v1.3.6, to replace the src in case of errors, use `onLoadingStateChange` instead
     * and rerender the Image with a difference src.
     * @deprecated Use `onLoadingStateChange` instead
     * and rerender the Image with a difference src.
     */
    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
})(ImageLoadState || (ImageLoadState = {}));

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Image/Image.base.js




var Image_base_getClassNames = classNamesFunction();
var KEY_PREFIX = 'fabricImage';
var Image_base_ImageBase = /** @class */ (function (_super) {
    __extends(ImageBase, _super);
    function ImageBase(props) {
        var _this = _super.call(this, props) || this;
        // Make an initial assumption about the image layout until we can
        // check the rendered element. The value here only takes effect when
        // shouldStartVisible is true.
        _this._coverStyle = ImageCoverStyle.portrait;
        _this._imageElement = external__react_["createRef"]();
        _this._frameElement = external__react_["createRef"]();
        _this._onImageLoaded = function (ev) {
            var _a = _this.props, src = _a.src, onLoad = _a.onLoad;
            if (onLoad) {
                onLoad(ev);
            }
            _this._computeCoverStyle(_this.props);
            if (src) {
                _this.setState({
                    loadState: ImageLoadState.loaded
                });
            }
        };
        _this._onImageError = function (ev) {
            if (_this.props.onError) {
                _this.props.onError(ev);
            }
            _this.setState({
                loadState: ImageLoadState.error
            });
        };
        _this.state = {
            loadState: ImageLoadState.notLoaded
        };
        return _this;
    }
    ImageBase.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({
                loadState: ImageLoadState.notLoaded
            });
        }
        else if (this.state.loadState === ImageLoadState.loaded) {
            this._computeCoverStyle(nextProps);
        }
    };
    ImageBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._checkImageLoaded();
        if (this.props.onLoadingStateChange && prevState.loadState !== this.state.loadState) {
            this.props.onLoadingStateChange(this.state.loadState);
        }
    };
    ImageBase.prototype.render = function () {
        var imageProps = getNativeProps(this.props, imageProperties, ['width', 'height']);
        var _a = this.props, src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, shouldFadeIn = _a.shouldFadeIn, shouldStartVisible = _a.shouldStartVisible, className = _a.className, imageFit = _a.imageFit, role = _a.role, maximizeFrame = _a.maximizeFrame, styles = _a.styles, theme = _a.theme;
        var loadState = this.state.loadState;
        var coverStyle = this.props.coverStyle !== undefined ? this.props.coverStyle : this._coverStyle;
        var classNames = Image_base_getClassNames(styles, {
            theme: theme,
            className: className,
            width: width,
            height: height,
            maximizeFrame: maximizeFrame,
            shouldFadeIn: shouldFadeIn,
            shouldStartVisible: shouldStartVisible,
            isLoaded: loadState === ImageLoadState.loaded || (loadState === ImageLoadState.notLoaded && this.props.shouldStartVisible),
            isLandscape: coverStyle === ImageCoverStyle.landscape,
            isCenter: imageFit === ImageFit.center,
            isCenterCover: imageFit === ImageFit.centerCover,
            isContain: imageFit === ImageFit.contain,
            isCover: imageFit === ImageFit.cover,
            isNone: imageFit === ImageFit.none,
            isError: loadState === ImageLoadState.error,
            isNotImageFit: imageFit === undefined
        });
        // If image dimensions aren't specified, the natural size of the image is used.
        return (external__react_["createElement"]("div", { className: classNames.root, style: { width: width, height: height }, ref: this._frameElement },
            external__react_["createElement"]("img", __assign({}, imageProps, { onLoad: this._onImageLoaded, onError: this._onImageError, key: KEY_PREFIX + this.props.src || '', className: classNames.image, ref: this._imageElement, src: src, alt: alt, role: role }))));
    };
    ImageBase.prototype._checkImageLoaded = function () {
        var src = this.props.src;
        var loadState = this.state.loadState;
        if (loadState === ImageLoadState.notLoaded) {
            // testing if naturalWidth and naturalHeight are greater than zero is better than checking
            // .complete, because .complete will also be set to true if the image breaks. However,
            // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
            // to checking .complete for these images.
            var isLoaded = this._imageElement.current
                ? (src && (this._imageElement.current.naturalWidth > 0 && this._imageElement.current.naturalHeight > 0)) ||
                    (this._imageElement.current.complete && ImageBase._svgRegex.test(src))
                : false;
            if (isLoaded) {
                this._computeCoverStyle(this.props);
                this.setState({
                    loadState: ImageLoadState.loaded
                });
            }
        }
    };
    ImageBase.prototype._computeCoverStyle = function (props) {
        var imageFit = props.imageFit, width = props.width, height = props.height;
        // Do not compute cover style if it was already specified in props
        if ((imageFit === ImageFit.cover || imageFit === ImageFit.contain || imageFit === ImageFit.centerCover) &&
            this.props.coverStyle === undefined &&
            this._imageElement.current &&
            this._frameElement.current) {
            // Determine the desired ratio using the width and height props.
            // If those props aren't available, measure measure the frame.
            var desiredRatio = void 0;
            if (!!width && !!height && imageFit !== ImageFit.centerCover) {
                desiredRatio = width / height;
            }
            else {
                desiredRatio = this._frameElement.current.clientWidth / this._frameElement.current.clientHeight;
            }
            // Examine the source image to determine its original ratio.
            var naturalRatio = this._imageElement.current.naturalWidth / this._imageElement.current.naturalHeight;
            // Should we crop from the top or the sides?
            if (naturalRatio > desiredRatio) {
                this._coverStyle = ImageCoverStyle.landscape;
            }
            else {
                this._coverStyle = ImageCoverStyle.portrait;
            }
        }
    };
    ImageBase.defaultProps = {
        shouldFadeIn: true
    };
    ImageBase._svgRegex = /\.svg$/i;
    return ImageBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Image/Image.styles.js


var GlobalClassNames = {
    root: 'ms-Image',
    rootMaximizeFrame: 'ms-Image--maximizeFrame',
    image: 'ms-Image-image',
    imageCenter: 'ms-Image-image--center',
    imageContain: 'ms-Image-image--contain',
    imageCover: 'ms-Image-image--cover',
    imageCenterCover: 'ms-Image-image--centerCover',
    imageNone: 'ms-Image-image--none',
    imageLandscape: 'ms-Image-image--landscape',
    imagePortrait: 'ms-Image-image--portrait'
};
var Image_styles_getStyles = function (props) {
    var className = props.className, width = props.width, height = props.height, maximizeFrame = props.maximizeFrame, isLoaded = props.isLoaded, shouldFadeIn = props.shouldFadeIn, shouldStartVisible = props.shouldStartVisible, isLandscape = props.isLandscape, isCenter = props.isCenter, isContain = props.isContain, isCover = props.isCover, isCenterCover = props.isCenterCover, isNone = props.isNone, isError = props.isError, isNotImageFit = props.isNotImageFit, theme = props.theme;
    var classNames = getGlobalClassNames(GlobalClassNames, theme);
    var ImageFitStyles = {
        position: 'absolute',
        left: '50% /* @noflip */',
        top: '50%',
        transform: 'translate(-50%,-50%)' // @todo test RTL renders transform: translate(50%,-50%);
    };
    // Cut the mustard using msMaxTouchPoints to detect IE11 which does not support CSS object-fit
    var window = getWindow();
    var supportsObjectFit = window !== undefined && window.navigator.msMaxTouchPoints === undefined;
    var fallbackObjectFitStyles = (isContain && isLandscape) || (isCover && !isLandscape) ? { width: '100%', height: 'auto' } : { width: 'auto', height: '100%' };
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                overflow: 'hidden'
            },
            maximizeFrame && [
                classNames.rootMaximizeFrame,
                {
                    height: '100%',
                    width: '100%'
                }
            ],
            (isCenter || isContain || isCover || isCenterCover) && {
                position: 'relative'
            },
            className
        ],
        image: [
            classNames.image,
            {
                display: 'block',
                opacity: 0
            },
            isLoaded && [
                'is-loaded',
                {
                    opacity: 1
                }
            ],
            isCenter && [classNames.imageCenter, ImageFitStyles],
            isContain && [
                classNames.imageContain,
                supportsObjectFit && {
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                },
                !supportsObjectFit && fallbackObjectFitStyles,
                ImageFitStyles
            ],
            isCover && [
                classNames.imageCover,
                supportsObjectFit && {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                },
                !supportsObjectFit && fallbackObjectFitStyles,
                ImageFitStyles
            ],
            isCenterCover && [
                classNames.imageCenterCover,
                isLandscape && {
                    maxHeight: '100%'
                },
                !isLandscape && {
                    maxWidth: '100%'
                },
                ImageFitStyles
            ],
            isNone && [
                classNames.imageNone,
                {
                    width: 'auto',
                    height: 'auto'
                }
            ],
            isNotImageFit && [
                !!width &&
                    !height && {
                    height: 'auto',
                    width: '100%'
                },
                !width &&
                    !!height && {
                    height: '100%',
                    width: 'auto'
                },
                !!width &&
                    !!height && {
                    height: '100%',
                    width: '100%'
                }
            ],
            isLoaded && shouldFadeIn && !shouldStartVisible && AnimationClassNames.fadeIn400,
            isLandscape && classNames.imageLandscape,
            !isLandscape && classNames.imagePortrait,
            !isLoaded && 'is-notLoaded',
            shouldFadeIn && 'is-fadeIn',
            isError && 'is-error'
        ]
    };
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Image/Image.js



var Image = styled(Image_base_ImageBase, Image_styles_getStyles, undefined, {
    scope: 'Image'
});

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.base.js

/* tslint:disable */

/* tslint:enable */





var Icon_base_getClassNames = classNamesFunction();
var Icon_base_IconBase = /** @class */ (function (_super) {
    __extends(IconBase, _super);
    function IconBase(props) {
        var _this = _super.call(this, props) || this;
        _this.onImageLoadingStateChange = function (state) {
            if (_this.props.imageProps && _this.props.imageProps.onLoadingStateChange) {
                _this.props.imageProps.onLoadingStateChange(state);
            }
            if (state === ImageLoadState.error) {
                _this.setState({ imageLoadError: true });
            }
        };
        _this.state = {
            imageLoadError: false
        };
        return _this;
    }
    IconBase.prototype.render = function () {
        var _a = this.props, ariaLabel = _a.ariaLabel, className = _a.className, styles = _a.styles, iconName = _a.iconName, imageErrorAs = _a.imageErrorAs, theme = _a.theme;
        var isPlaceholder = typeof iconName === 'string' && iconName.length === 0;
        var isImage = this.props.iconType === IconType.image || this.props.iconType === IconType.Image;
        var _b = this._getIconContent(iconName), iconClassName = _b.iconClassName, children = _b.children;
        var classNames = Icon_base_getClassNames(styles, {
            theme: theme,
            className: className,
            iconClassName: iconClassName,
            isImage: isImage,
            isPlaceholder: isPlaceholder
        });
        var containerProps = ariaLabel
            ? {
                'aria-label': ariaLabel
            }
            : {
                role: 'presentation'
            };
        var RootType = isImage ? 'div' : 'i';
        var nativeProps = getNativeProps(this.props, htmlElementProperties);
        var imageLoadError = this.state.imageLoadError;
        var imageProps = __assign({}, this.props.imageProps, { onLoadingStateChange: this.onImageLoadingStateChange });
        var ImageType = (imageLoadError && imageErrorAs) || Image;
        return (external__react_["createElement"](RootType, __assign({ "data-icon-name": iconName }, nativeProps, containerProps, { className: classNames.root }), isImage ? external__react_["createElement"](ImageType, __assign({}, imageProps)) : children));
    };
    IconBase.prototype._getIconContent = function (name) {
        var iconDefinition = getIcon(name) || {
            subset: {
                className: undefined
            },
            code: undefined
        };
        return {
            children: iconDefinition.code,
            iconClassName: iconDefinition.subset.className
        };
    };
    return IconBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js
var Icon_styles_getStyles = function (props) {
    var className = props.className, iconClassName = props.iconClassName, isPlaceholder = props.isPlaceholder, isImage = props.isImage, styles = props.styles;
    return {
        root: [
            isImage && 'ms-Icon-imageContainer',
            isPlaceholder && 'ms-Icon-placeHolder',
            {
                display: 'inline-block'
            },
            isPlaceholder && {
                width: '1em'
            },
            isImage && {
                overflow: 'hidden'
            },
            iconClassName,
            className,
            styles && styles.root,
            styles && styles.imageContainer
        ]
    };
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.js



/**
 * Icons are used for rendering an individual's avatar, presence and details.
 * They are used within the PeoplePicker components.
 */
var Icon = styled(Icon_base_IconBase, Icon_styles_getStyles, undefined, { scope: 'Icon' });

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Icon/index.js




// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/Icon.js


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/TextField/TextField.base.js





var TextField_base_getClassNames = classNamesFunction();
var DEFAULT_STATE_VALUE = '';
var TextField_base_TextFieldBase = /** @class */ (function (_super) {
    __extends(TextFieldBase, _super);
    function TextFieldBase(props) {
        var _this = _super.call(this, props) || this;
        _this._textElement = createRef();
        _this._onFocus = function (ev) {
            if (_this.props.onFocus) {
                _this.props.onFocus(ev);
            }
            _this.setState({ isFocused: true });
            if (_this.props.validateOnFocusIn) {
                _this._validate(_this.state.value);
            }
        };
        _this._onBlur = function (ev) {
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
            _this.setState({ isFocused: false });
            if (_this.props.validateOnFocusOut) {
                _this._validate(_this.state.value);
            }
        };
        _this._onRenderLabel = function (props) {
            var label = props.label, required = props.required;
            // IProcessedStyleSet definition requires casting for what Label expects as its styles prop
            var labelStyles = _this._classNames.subComponentStyles
                ? _this._classNames.subComponentStyles.label
                : undefined;
            if (label) {
                return (external__react_["createElement"](Label, { required: required, htmlFor: _this._id, styles: labelStyles, disabled: props.disabled }, props.label));
            }
            return null;
        };
        _this._onRenderDescription = function (props) {
            if (props.description) {
                return external__react_["createElement"]("span", { className: _this._classNames.description }, props.description);
            }
            return null;
        };
        _this._onInputChange = function (event) {
            event.persist();
            var element = event.target;
            var value = element.value;
            // Avoid doing unnecessary work when the value has not changed.
            if (value === _this._latestValue) {
                return;
            }
            _this._latestValue = value;
            _this.setState({ value: value }, function () {
                _this._adjustInputHeight();
                if (_this.props.onChange) {
                    _this.props.onChange(event, value);
                }
                if (_this.props.onChanged) {
                    _this.props.onChanged(value);
                }
            });
            var _a = _this.props, validateOnFocusIn = _a.validateOnFocusIn, validateOnFocusOut = _a.validateOnFocusOut;
            if (!(validateOnFocusIn || validateOnFocusOut)) {
                _this._delayedValidate(value);
            }
            if (_this.props.onBeforeChange) {
                _this.props.onBeforeChange(value);
            }
        };
        _this._warnDeprecations({
            iconClass: 'iconProps',
            addonString: 'prefix',
            onRenderAddon: 'onRenderPrefix',
            onChanged: 'onChange'
        });
        _this._warnMutuallyExclusive({
            value: 'defaultValue'
        });
        _this._id = props.id || getId('TextField');
        _this._descriptionId = getId('TextFieldDescription');
        if (props.value !== undefined) {
            _this._latestValue = props.value;
        }
        else if (props.defaultValue !== undefined) {
            _this._latestValue = props.defaultValue;
        }
        else {
            _this._latestValue = DEFAULT_STATE_VALUE;
        }
        _this.state = {
            value: _this._latestValue,
            isFocused: false,
            errorMessage: ''
        };
        _this._delayedValidate = _this._async.debounce(_this._validate, _this.props.deferredValidationTime);
        _this._lastValidation = 0;
        return _this;
    }
    Object.defineProperty(TextFieldBase.prototype, "value", {
        /**
         * Gets the current value of the text field.
         */
        get: function () {
            return this.state.value;
        },
        enumerable: true,
        configurable: true
    });
    TextFieldBase.prototype.componentDidMount = function () {
        this._isMounted = true;
        this._adjustInputHeight();
        if (this.props.validateOnLoad) {
            this._validate(this.state.value);
        }
    };
    TextFieldBase.prototype.componentWillReceiveProps = function (newProps) {
        var onBeforeChange = this.props.onBeforeChange;
        // If old value prop was undefined, then component is controlled and we should
        //    respect new undefined value and update state accordingly.
        if (newProps.value !== this.state.value && (newProps.value !== undefined || this.props.value !== undefined)) {
            if (onBeforeChange) {
                onBeforeChange(newProps.value);
            }
            this._id = newProps.id || this._id;
            this._setValue(newProps.value);
            var validateOnFocusIn = newProps.validateOnFocusIn, validateOnFocusOut = newProps.validateOnFocusOut;
            if (!(validateOnFocusIn || validateOnFocusOut)) {
                this._delayedValidate(newProps.value);
            }
        }
        // If component is not currently controlled and defaultValue changes, set value to new defaultValue.
        if (newProps.defaultValue !== this.props.defaultValue && newProps.value === undefined) {
            this._setValue(newProps.defaultValue);
        }
        // Text field is changing between single- and multi-line. After the change is complete,
        // we'll need to reset focus and selection/cursor.
        if (!!newProps.multiline !== !!this.props.multiline && this.state.isFocused) {
            this._shouldResetFocusAfterRender = true;
            this._selectionBeforeInputTypeChange = [this.selectionStart, this.selectionEnd];
        }
    };
    TextFieldBase.prototype.componentDidUpdate = function () {
        if (this._shouldResetFocusAfterRender) {
            // The text field has just changed between single- and multi-line, so we need to reset focus
            // and selection/cursor.
            this._shouldResetFocusAfterRender = false;
            this.focus();
            if (this._selectionBeforeInputTypeChange) {
                var _a = this._selectionBeforeInputTypeChange, start = _a[0], end = _a[1];
                if (start !== null && end !== null) {
                    this.setSelectionRange(start, end);
                }
            }
        }
    };
    TextFieldBase.prototype.componentWillUnmount = function () {
        this._isMounted = false;
    };
    TextFieldBase.prototype.render = function () {
        var _a = this.props, borderless = _a.borderless, className = _a.className, disabled = _a.disabled, iconClass = _a.iconClass, iconProps = _a.iconProps, inputClassName = _a.inputClassName, label = _a.label, multiline = _a.multiline, required = _a.required, underlined = _a.underlined, addonString = _a.addonString, // @deprecated
        prefix = _a.prefix, resizable = _a.resizable, suffix = _a.suffix, theme = _a.theme, styles = _a.styles, autoAdjustHeight = _a.autoAdjustHeight, _b = _a.onRenderAddon, onRenderAddon = _b === void 0 ? this._onRenderAddon : _b, // @deprecated
        _c = _a.onRenderPrefix, // @deprecated
        onRenderPrefix = _c === void 0 ? this._onRenderPrefix : _c, _d = _a.onRenderSuffix, onRenderSuffix = _d === void 0 ? this._onRenderSuffix : _d, _e = _a.onRenderLabel, onRenderLabel = _e === void 0 ? this._onRenderLabel : _e, _f = _a.onRenderDescription, onRenderDescription = _f === void 0 ? this._onRenderDescription : _f;
        var isFocused = this.state.isFocused;
        var errorMessage = this._errorMessage;
        this._classNames = TextField_base_getClassNames(styles, {
            theme: theme,
            className: className,
            disabled: disabled,
            focused: isFocused,
            required: required,
            multiline: multiline,
            hasLabel: !!label,
            hasErrorMessage: !!errorMessage,
            borderless: borderless,
            resizable: resizable,
            hasIcon: !!iconProps,
            underlined: underlined,
            iconClass: iconClass,
            inputClassName: inputClassName,
            autoAdjustHeight: autoAdjustHeight
        });
        return (external__react_["createElement"]("div", { className: this._classNames.root },
            external__react_["createElement"]("div", { className: this._classNames.wrapper },
                onRenderLabel(this.props, this._onRenderLabel),
                external__react_["createElement"]("div", { className: this._classNames.fieldGroup },
                    (addonString !== undefined || this.props.onRenderAddon) && (external__react_["createElement"]("div", { className: this._classNames.prefix }, onRenderAddon(this.props, this._onRenderAddon))),
                    (prefix !== undefined || this.props.onRenderPrefix) && (external__react_["createElement"]("div", { className: this._classNames.prefix }, onRenderPrefix(this.props, this._onRenderPrefix))),
                    multiline ? this._renderTextArea() : this._renderInput(),
                    (iconClass || iconProps) && external__react_["createElement"](Icon, __assign({ className: this._classNames.icon }, iconProps)),
                    (suffix !== undefined || this.props.onRenderSuffix) && (external__react_["createElement"]("div", { className: this._classNames.suffix }, onRenderSuffix(this.props, this._onRenderSuffix))))),
            this._isDescriptionAvailable && (external__react_["createElement"]("span", { id: this._descriptionId },
                onRenderDescription(this.props, this._onRenderDescription),
                errorMessage && (external__react_["createElement"]("div", { role: "alert" },
                    external__react_["createElement"](DelayedRender_DelayedRender, null,
                        external__react_["createElement"]("p", { className: this._classNames.errorMessage },
                            external__react_["createElement"]("span", { "data-automation-id": "error-message" }, errorMessage)))))))));
    };
    /**
     * Sets focus on the text field
     */
    TextFieldBase.prototype.focus = function () {
        if (this._textElement.current) {
            this._textElement.current.focus();
        }
    };
    /**
     * Blurs the text field.
     */
    TextFieldBase.prototype.blur = function () {
        if (this._textElement.current) {
            this._textElement.current.blur();
        }
    };
    /**
     * Selects the text field
     */
    TextFieldBase.prototype.select = function () {
        if (this._textElement.current) {
            this._textElement.current.select();
        }
    };
    /**
     * Sets the selection start of the text field to a specified value
     */
    TextFieldBase.prototype.setSelectionStart = function (value) {
        if (this._textElement.current) {
            this._textElement.current.selectionStart = value;
        }
    };
    /**
     * Sets the selection end of the text field to a specified value
     */
    TextFieldBase.prototype.setSelectionEnd = function (value) {
        if (this._textElement.current) {
            this._textElement.current.selectionEnd = value;
        }
    };
    Object.defineProperty(TextFieldBase.prototype, "selectionStart", {
        /**
         * Gets the selection start of the text field
         */
        get: function () {
            return this._textElement.current ? this._textElement.current.selectionStart : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldBase.prototype, "selectionEnd", {
        /**
         * Gets the selection end of the text field
         */
        get: function () {
            return this._textElement.current ? this._textElement.current.selectionEnd : -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start - Index of the start of the selection.
     * @param end - Index of the end of the selection.
     */
    TextFieldBase.prototype.setSelectionRange = function (start, end) {
        if (this._textElement.current) {
            this._textElement.current.setSelectionRange(start, end);
        }
    };
    TextFieldBase.prototype._setValue = function (value) {
        var _this = this;
        this._latestValue = value;
        this.setState({
            value: value || DEFAULT_STATE_VALUE,
            errorMessage: ''
        }, function () {
            _this._adjustInputHeight();
        });
    };
    // @deprecated
    TextFieldBase.prototype._onRenderAddon = function (props) {
        var addonString = props.addonString;
        return external__react_["createElement"]("span", { style: { paddingBottom: '1px' } }, addonString);
    };
    TextFieldBase.prototype._onRenderPrefix = function (props) {
        var prefix = props.prefix;
        return external__react_["createElement"]("span", { style: { paddingBottom: '1px' } }, prefix);
    };
    TextFieldBase.prototype._onRenderSuffix = function (props) {
        var suffix = props.suffix;
        return external__react_["createElement"]("span", { style: { paddingBottom: '1px' } }, suffix);
    };
    Object.defineProperty(TextFieldBase.prototype, "_errorMessage", {
        get: function () {
            var errorMessage = this.state.errorMessage;
            if (!errorMessage && this.props.errorMessage) {
                errorMessage = this.props.errorMessage;
            }
            return errorMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldBase.prototype, "_isDescriptionAvailable", {
        /**
         * If a custom description render function is supplied then treat description as always available.
         * Otherwise defer to the presence of description or error message text.
         */
        get: function () {
            var props = this.props;
            return !!(props.onRenderDescription || props.description || this._errorMessage);
        },
        enumerable: true,
        configurable: true
    });
    TextFieldBase.prototype._renderTextArea = function () {
        var textAreaProps = getNativeProps(this.props, textAreaProperties, ['defaultValue']);
        return (external__react_["createElement"]("textarea", __assign({ id: this._id }, textAreaProps, { ref: this._textElement, value: this.state.value, onInput: this._onInputChange, onChange: this._onInputChange, className: this._classNames.field, "aria-describedby": this._isDescriptionAvailable ? this._descriptionId : this.props['aria-describedby'], "aria-invalid": !!this.state.errorMessage, "aria-label": this.props.ariaLabel, readOnly: this.props.readOnly, onFocus: this._onFocus, onBlur: this._onBlur })));
    };
    TextFieldBase.prototype._renderInput = function () {
        var inputProps = getNativeProps(this.props, inputProperties, ['defaultValue']);
        return (external__react_["createElement"]("input", __assign({ type: 'text', id: this._id }, inputProps, { ref: this._textElement, value: this.state.value, onInput: this._onInputChange, onChange: this._onInputChange, className: this._classNames.field, "aria-label": this.props.ariaLabel, "aria-describedby": this._isDescriptionAvailable ? this._descriptionId : this.props['aria-describedby'], "aria-invalid": !!this.state.errorMessage, readOnly: this.props.readOnly, onFocus: this._onFocus, onBlur: this._onBlur })));
    };
    TextFieldBase.prototype._validate = function (value) {
        var _this = this;
        var _a = this.props, validateOnFocusIn = _a.validateOnFocusIn, validateOnFocusOut = _a.validateOnFocusOut;
        // In case of _validate called multi-times during executing validate logic with promise return.
        if (this._latestValidateValue === value && !(validateOnFocusIn || validateOnFocusOut)) {
            return;
        }
        this._latestValidateValue = value;
        var onGetErrorMessage = this.props.onGetErrorMessage;
        var result = onGetErrorMessage(value || '');
        if (result !== undefined) {
            if (typeof result === 'string') {
                this.setState({ errorMessage: result });
                this._notifyAfterValidate(value, result);
            }
            else {
                var currentValidation_1 = ++this._lastValidation;
                result.then(function (errorMessage) {
                    if (_this._isMounted && currentValidation_1 === _this._lastValidation) {
                        _this.setState({ errorMessage: errorMessage });
                    }
                    _this._notifyAfterValidate(value, errorMessage);
                });
            }
        }
        else {
            this._notifyAfterValidate(value, '');
        }
    };
    TextFieldBase.prototype._notifyAfterValidate = function (value, errorMessage) {
        if (this._isMounted && value === this.state.value && this.props.onNotifyValidationResult) {
            this.props.onNotifyValidationResult(errorMessage, value);
        }
    };
    TextFieldBase.prototype._adjustInputHeight = function () {
        if (this._textElement.current && this.props.autoAdjustHeight && this.props.multiline) {
            var textField = this._textElement.current;
            textField.style.height = '';
            textField.style.height = textField.scrollHeight + 'px';
        }
    };
    TextFieldBase.defaultProps = {
        multiline: false,
        resizable: true,
        autoAdjustHeight: false,
        underlined: false,
        borderless: false,
        onChange: function () {
            /* noop */
        },
        onBeforeChange: function () {
            /* noop */
        },
        onNotifyValidationResult: function () {
            /* noop */
        },
        onGetErrorMessage: function () { return undefined; },
        deferredValidationTime: 200,
        errorMessage: '',
        validateOnFocusIn: false,
        validateOnFocusOut: false,
        validateOnLoad: true
    };
    return TextFieldBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/TextField/TextField.styles.js

var globalClassNames = {
    root: 'ms-TextField',
    description: 'ms-TextField-description',
    errorMessage: 'ms-TextField-errorMessage',
    field: 'ms-TextField-field',
    fieldGroup: 'ms-TextField-fieldGroup',
    prefix: 'ms-TextField-prefix',
    suffix: 'ms-TextField-suffix',
    wrapper: 'ms-TextField-wrapper',
    multiline: 'ms-TextField--multiline',
    borderless: 'ms-TextField--borderless',
    underlined: 'ms-TextField--underlined',
    unresizable: 'ms-TextField--unresizable',
    required: 'is-required',
    disabled: 'is-disabled',
    active: 'is-active'
};
function getLabelStyles(props) {
    var underlined = props.underlined, disabled = props.disabled, focused = props.focused;
    return function () {
        return ({
            root: [
                underlined &&
                    disabled && {
                    color: props.theme.palette.neutralTertiary
                },
                underlined && {
                    fontSize: FontSizes.medium,
                    marginRight: 8,
                    paddingLeft: 12,
                    paddingRight: 0,
                    lineHeight: '22px',
                    height: 32
                },
                underlined &&
                    focused && {
                    selectors: (_a = {},
                        _a[HighContrastSelector] = {
                            height: 31 // -1px to prevent jumpiness in HC with the increased border-width to 2px
                        },
                        _a)
                }
            ]
        });
        var _a;
    };
}
function TextField_styles_getStyles(props) {
    var theme = props.theme, className = props.className, disabled = props.disabled, focused = props.focused, required = props.required, multiline = props.multiline, hasLabel = props.hasLabel, borderless = props.borderless, underlined = props.underlined, hasIcon = props.hasIcon, resizable = props.resizable, hasErrorMessage = props.hasErrorMessage, iconClass = props.iconClass, inputClassName = props.inputClassName, autoAdjustHeight = props.autoAdjustHeight;
    var semanticColors = theme.semanticColors;
    var classNames = getGlobalClassNames(globalClassNames, theme);
    var fieldPrefixSuffix = {
        background: semanticColors.disabledBackground,
        color: !disabled ? semanticColors.inputPlaceholderText : semanticColors.disabledText,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        lineHeight: 1,
        whiteSpace: 'nowrap'
    };
    return {
        root: [
            classNames.root,
            required && classNames.required,
            disabled && classNames.disabled,
            focused && classNames.active,
            multiline && classNames.multiline,
            borderless && classNames.borderless,
            underlined && classNames.underlined,
            normalize,
            {
                position: 'relative'
            },
            className
        ],
        wrapper: [
            classNames.wrapper,
            underlined && {
                display: 'flex',
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: semanticColors.inputBorder,
                width: '100%'
            },
            hasErrorMessage &&
                underlined &&
                !disabled && {
                borderBottomColor: semanticColors.errorText,
                selectors: {
                    ':hover': {
                        borderBottomColor: semanticColors.errorText,
                        selectors: (_a = {},
                            _a[HighContrastSelector] = {
                                borderBottomColor: 'Highlight'
                            },
                            _a)
                    }
                }
            },
            underlined &&
                disabled && {
                borderBottomColor: semanticColors.disabledBackground
            },
            underlined &&
                !disabled &&
                !focused &&
                !hasErrorMessage && {
                selectors: {
                    ':hover': {
                        borderBottomColor: semanticColors.inputBorderHovered,
                        selectors: (_b = {},
                            _b[HighContrastSelector] = {
                                borderBottomColor: 'Highlight'
                            },
                            _b)
                    }
                }
            },
            underlined &&
                focused && {
                borderBottomColor: !hasErrorMessage ? semanticColors.inputFocusBorderAlt : semanticColors.errorText,
                selectors: (_c = {},
                    _c[HighContrastSelector] = {
                        borderBottomWidth: 2,
                        borderBottomColor: 'Highlight'
                    },
                    _c)
            }
        ],
        fieldGroup: [
            classNames.fieldGroup,
            normalize,
            {
                border: "1px solid " + semanticColors.inputBorder,
                background: semanticColors.inputBackground,
                cursor: 'text',
                height: 32,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                position: 'relative',
                selectors: {
                    ':hover': {
                        selectors: (_d = {},
                            _d[HighContrastSelector] = {
                                borderColor: 'Highlight'
                            },
                            _d)
                    }
                }
            },
            multiline && {
                minHeight: '60px',
                height: 'auto',
                display: 'flex'
            },
            borderless && {
                border: 'none'
            },
            !focused &&
                !disabled && {
                selectors: {
                    ':hover': {
                        borderColor: semanticColors.inputBorderHovered
                    }
                }
            },
            focused && {
                borderColor: semanticColors.inputFocusBorderAlt,
                selectors: (_e = {},
                    _e[HighContrastSelector] = {
                        borderWidth: 2,
                        borderColor: 'Highlight'
                    },
                    _e)
            },
            disabled && {
                backgroundColor: semanticColors.disabledBackground,
                borderColor: semanticColors.disabledBackground,
                cursor: 'default'
            },
            underlined && {
                flex: '1 1 0px',
                border: 'none',
                textAlign: 'left'
            },
            underlined &&
                focused && {
                selectors: (_f = {},
                    _f[HighContrastSelector] = {
                        height: 31 // -1px to prevent jumpiness in HC with the increased border-width to 2px
                    },
                    _f)
            },
            underlined &&
                disabled && {
                backgroundColor: 'transparent'
            },
            hasErrorMessage && {
                borderColor: semanticColors.errorText,
                selectors: {
                    '&:focus, &:hover': {
                        borderColor: semanticColors.errorText
                    }
                }
            },
            hasErrorMessage &&
                focused && {
                borderColor: semanticColors.errorText
            },
            !hasLabel &&
                required && {
                selectors: (_g = {
                        ':after': {
                            content: "'*'",
                            color: semanticColors.errorText,
                            position: 'absolute',
                            top: -5,
                            right: -10
                        }
                    },
                    _g[HighContrastSelector] = {
                        selectors: {
                            ':after': {
                                right: -14 // moving the * 4 pixel to right to alleviate border clipping in HC mode.
                            }
                        }
                    },
                    _g)
            }
        ],
        field: [
            classNames.field,
            normalize,
            {
                fontSize: FontSizes.medium,
                borderRadius: 0,
                border: 'none',
                background: 'none',
                backgroundColor: 'transparent',
                color: semanticColors.inputText,
                padding: '0 12px',
                width: '100%',
                minWidth: 0,
                textOverflow: 'ellipsis',
                outline: 0,
                selectors: {
                    '&:active, &:focus, &:hover': { outline: 0 },
                    '::-ms-clear': {
                        display: 'none'
                    },
                    '::placeholder': {
                        color: semanticColors.inputPlaceholderText,
                        opacity: 1
                    },
                    ':-ms-input-placeholder': {
                        color: semanticColors.inputPlaceholderText,
                        opacity: 1
                    }
                }
            },
            multiline &&
                !resizable && [
                classNames.unresizable,
                {
                    resize: 'none'
                }
            ],
            multiline && {
                minHeight: 'inherit',
                lineHeight: 17,
                flexGrow: 1,
                paddingTop: 6,
                overflow: 'auto',
                width: '100%'
            },
            multiline &&
                autoAdjustHeight && {
                overflow: 'hidden'
            },
            hasIcon && {
                paddingRight: 24
            },
            multiline &&
                hasIcon && {
                paddingRight: 40
            },
            disabled && {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                color: semanticColors.disabledText,
                selectors: {
                    '::placeholder': {
                        color: semanticColors.disabledText
                    },
                    ':-ms-input-placeholder': {
                        color: semanticColors.disabledText
                    }
                }
            },
            underlined && {
                textAlign: 'left'
            },
            focused &&
                !borderless && {
                selectors: (_h = {},
                    _h[HighContrastSelector] = {
                        paddingLeft: 11,
                        paddingRight: 11
                    },
                    _h)
            },
            focused &&
                multiline &&
                !borderless && {
                selectors: (_j = {},
                    _j[HighContrastSelector] = {
                        paddingTop: 4 // take into consideration the 2px increased border-width (not when borderless).
                    },
                    _j)
            },
            inputClassName
        ],
        icon: [
            multiline && {
                paddingRight: 24,
                paddingBottom: 8,
                alignItems: 'flex-end'
            },
            {
                pointerEvents: 'none',
                position: 'absolute',
                bottom: 5,
                right: 8,
                top: 'auto',
                fontSize: 16,
                lineHeight: 18
            },
            disabled && {
                color: semanticColors.disabledText
            },
            iconClass
        ],
        description: [
            classNames.description,
            {
                color: semanticColors.bodySubtext,
                fontSize: FontSizes.xSmall
            }
        ],
        errorMessage: [
            classNames.errorMessage,
            AnimationClassNames.slideDownIn20,
            theme.fonts.small,
            {
                color: semanticColors.errorText,
                margin: 0,
                paddingTop: 5,
                display: 'flex',
                alignItems: 'center'
            }
        ],
        prefix: [classNames.prefix, fieldPrefixSuffix],
        suffix: [classNames.suffix, fieldPrefixSuffix],
        subComponentStyles: {
            label: getLabelStyles(props)
        }
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/TextField/TextField.js



var TextField = styled(TextField_base_TextFieldBase, TextField_styles_getStyles, undefined, {
    scope: 'TextField'
});

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/TextField/MaskedTextField/inputMask.js
var DEFAULT_MASK_FORMAT_CHARS = {
    '9': /[0-9]/,
    a: /[a-zA-Z]/,
    '*': /[a-zA-Z0-9]/
};
/**
 * Takes in the mask string and the formatCharacters and returns an array of MaskValues
 * Example:
 * mask = 'Phone Number: (999) - 9999'
 * return = [
 *    { value: undefined, displayIndex: 16, format: /[0-9]/ },
 *    { value: undefined, displayIndex: 17, format: /[0-9]/ },
 *    { value: undefined, displayIndex: 18, format: /[0-9]/ },
 *    { value: undefined, displayIndex: 22, format: /[0-9]/ },
 * ]
 *
 * @param mask The string use to define the format of the displayed maskedValue.
 * @param formatChars An object defining how certain characters in the mask should accept input.
 */
function parseMask(mask, formatChars) {
    if (formatChars === void 0) { formatChars = DEFAULT_MASK_FORMAT_CHARS; }
    if (!mask) {
        return [];
    }
    var maskCharData = [];
    // Count the escape characters in the mask string.
    var escapedChars = 0;
    for (var i = 0; i + escapedChars < mask.length; i++) {
        var maskChar = mask.charAt(i + escapedChars);
        if (maskChar === '\\') {
            escapedChars++;
        }
        else {
            // Check if the maskChar is a format character.
            var maskFormat = formatChars[maskChar];
            if (maskFormat) {
                maskCharData.push({
                    /**
                     * Do not add escapedChars to the displayIndex.
                     * The index refers to a position in the mask's displayValue.
                     * Since the backslashes don't appear in the displayValue,
                     * we do not add them to the charData displayIndex.
                     */
                    displayIndex: i,
                    format: maskFormat
                });
            }
        }
    }
    return maskCharData;
}
/**
 * Takes in the mask string, an array of MaskValues, and the maskCharacter
 * returns the mask string formatted with the input values and maskCharacter.
 * If the maskChar is undefined, the maskDisplay is truncated to the last filled format character.
 * Example:
 * mask = 'Phone Number: (999) 999 - 9999'
 * maskCharData = '12345'
 * maskChar = '_'
 * return = 'Phone Number: (123) 45_ - ___'
 *
 * Example:
 * mask = 'Phone Number: (999) 999 - 9999'
 * value = '12345'
 * maskChar = undefined
 * return = 'Phone Number: (123) 45'
 *
 * @param mask The string use to define the format of the displayed maskedValue.
 * @param maskCharData The input values to insert into the mask string for displaying.
 * @param maskChar? A character to display in place of unfilled mask format characters.
 */
function getMaskDisplay(mask, maskCharData, maskChar) {
    var maskDisplay = mask;
    if (!maskDisplay) {
        return '';
    }
    // Remove all backslashes
    maskDisplay = maskDisplay.replace(/\\/g, '');
    // lastDisplayIndex is is used to truncate the string if necessary.
    var lastDisplayIndex = 0;
    if (maskCharData.length > 0) {
        lastDisplayIndex = maskCharData[0].displayIndex - 1;
    }
    /**
     * For each input value, replace the character in the maskDisplay with the value.
     * If there is no value set for the format character, use the maskChar.
     */
    for (var _i = 0, maskCharData_1 = maskCharData; _i < maskCharData_1.length; _i++) {
        var charData = maskCharData_1[_i];
        var nextChar = ' ';
        if (charData.value) {
            nextChar = charData.value;
            if (charData.displayIndex > lastDisplayIndex) {
                lastDisplayIndex = charData.displayIndex;
            }
        }
        else {
            if (maskChar) {
                nextChar = maskChar;
            }
        }
        // Insert the character into the maskdisplay at its corresponding index
        maskDisplay = maskDisplay.slice(0, charData.displayIndex) + nextChar + maskDisplay.slice(charData.displayIndex + 1);
    }
    // Cut off all mask characters after the last filled format value
    if (!maskChar) {
        maskDisplay = maskDisplay.slice(0, lastDisplayIndex + 1);
    }
    return maskDisplay;
}
/**
 * Get the next format index right of or at a specified index.
 * If no index exists, returns the rightmost index.
 * @param maskCharData
 * @param index
 */
function getRightFormatIndex(maskCharData, index) {
    for (var i = 0; i < maskCharData.length; i++) {
        if (maskCharData[i].displayIndex >= index) {
            return maskCharData[i].displayIndex;
        }
    }
    return maskCharData[maskCharData.length - 1].displayIndex;
}
/**
 * Get the next format index left of a specified index.
 * If no index exists, returns the leftmost index.
 * @param maskCharData
 * @param index
 */
function getLeftFormatIndex(maskCharData, index) {
    for (var i = maskCharData.length - 1; i >= 0; i--) {
        if (maskCharData[i].displayIndex < index) {
            return maskCharData[i].displayIndex;
        }
    }
    return maskCharData[0].displayIndex;
}
/**
 * Deletes all values in maskCharData with a displayIndex that falls inside the specified range.
 * maskCharData is modified inline and also returned.
 * @param maskCharData
 * @param selectionStart
 * @param selectionCount
 */
function clearRange(maskCharData, selectionStart, selectionCount) {
    for (var i = 0; i < maskCharData.length; i++) {
        if (maskCharData[i].displayIndex >= selectionStart) {
            if (maskCharData[i].displayIndex >= selectionStart + selectionCount) {
                break;
            }
            maskCharData[i].value = undefined;
        }
    }
    return maskCharData;
}
/**
 * Deletes the input character at or after a specified index and returns the new array of charData
 * maskCharData is modified inline and also returned.
 * @param maskCharData
 * @param selectionStart
 */
function clearNext(maskCharData, selectionStart) {
    for (var i = 0; i < maskCharData.length; i++) {
        if (maskCharData[i].displayIndex >= selectionStart) {
            maskCharData[i].value = undefined;
            break;
        }
    }
    return maskCharData;
}
/**
 * Deletes the input character before a specified index and returns the new array of charData
 * maskCharData is modified inline and also returned.
 * @param maskCharData
 * @param selectionStart
 */
function clearPrev(maskCharData, selectionStart) {
    for (var i = maskCharData.length - 1; i >= 0; i--) {
        if (maskCharData[i].displayIndex < selectionStart) {
            maskCharData[i].value = undefined;
            break;
        }
    }
    return maskCharData;
}
/**
 * Deletes all values in maskCharData with a displayIndex that falls inside the specified range.
 * Modifies the maskCharData inplace with the passed string and returns the display index of the
 * next format character after the inserted string.
 * @param maskCharData
 * @param selectionStart
 * @param selectionCount
 * @return The displayIndex of the next format character
 */
function insertString(maskCharData, selectionStart, newString) {
    var stringIndex = 0;
    var nextIndex = 0;
    var isStringInserted = false;
    // Iterate through _maskCharData finding values with a displayIndex after the specified range start
    for (var i = 0; i < maskCharData.length && stringIndex < newString.length; i++) {
        if (maskCharData[i].displayIndex >= selectionStart) {
            isStringInserted = true;
            nextIndex = maskCharData[i].displayIndex;
            // Find the next character in the newString that matches the format
            while (stringIndex < newString.length) {
                // If the character matches the format regexp, set the maskCharData to the new character
                if (maskCharData[i].format.test(newString.charAt(stringIndex))) {
                    maskCharData[i].value = newString.charAt(stringIndex++);
                    // Set the nextIndex to the display index of the next mask format character.
                    if (i + 1 < maskCharData.length) {
                        nextIndex = maskCharData[i + 1].displayIndex;
                    }
                    else {
                        nextIndex++;
                    }
                    break;
                }
                stringIndex++;
            }
        }
    }
    return isStringInserted ? nextIndex : selectionStart;
}

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/TextField/MaskedTextField/MaskedTextField.js





var DEFAULT_MASK_CHAR = '_';
var MaskedTextField_MaskedTextField = /** @class */ (function (_super) {
    __extends(MaskedTextField, _super);
    function MaskedTextField(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        // Translate mask into charData
        _this._maskCharData = parseMask(props.mask, props.maskFormat);
        // If an initial value is provided, use it to populate the format chars
        props.value && _this.setValue(props.value);
        _this._isFocused = false;
        _this._moveCursorOnMouseUp = false;
        _this.state = {
            displayValue: getMaskDisplay(props.mask, _this._maskCharData, props.maskChar)
        };
        return _this;
    }
    MaskedTextField.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.mask !== this.props.mask) {
            this._maskCharData = parseMask(newProps.mask, newProps.maskFormat);
            this.state = {
                displayValue: getMaskDisplay(newProps.mask, this._maskCharData, newProps.maskChar)
            };
        }
    };
    MaskedTextField.prototype.componentDidUpdate = function () {
        // Move the cursor to the start of the mask format on update
        if (this.state.maskCursorPosition !== undefined) {
            this._textField.setSelectionRange(this.state.maskCursorPosition, this.state.maskCursorPosition);
        }
    };
    MaskedTextField.prototype.render = function () {
        return (external__react_["createElement"](TextField, __assign({}, this.props, { onFocus: this._onFocus, onBlur: this._onBlur, onMouseDown: this._onMouseDown, onMouseUp: this._onMouseUp, onChange: this._onInputChange, onBeforeChange: this._onBeforeChange, onKeyDown: this._onKeyDown, onPaste: this._onPaste, value: this.state.displayValue, componentRef: this._resolveRef('_textField') })));
    };
    Object.defineProperty(MaskedTextField.prototype, "value", {
        /**
         * @returns The value of all filled format characters or undefined if not all format characters are filled
         */
        get: function () {
            var value = '';
            for (var i = 0; i < this._maskCharData.length; i++) {
                if (!this._maskCharData[i].value) {
                    return undefined;
                }
                value += this._maskCharData[i].value;
            }
            return value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     */
    MaskedTextField.prototype.setValue = function (newValue) {
        var valueIndex = 0, charDataIndex = 0;
        while (valueIndex < newValue.length && charDataIndex < this._maskCharData.length) {
            // Test if the next character in the new value fits the next format character
            var testVal = newValue[valueIndex];
            if (this._maskCharData[charDataIndex].format.test(testVal)) {
                this._maskCharData[charDataIndex].value = testVal;
                charDataIndex++;
            }
            valueIndex++;
        }
    };
    MaskedTextField.prototype.focus = function () {
        this._textField && this._textField.focus();
    };
    MaskedTextField.prototype.blur = function () {
        this._textField && this._textField.blur();
    };
    MaskedTextField.prototype.select = function () {
        this._textField && this._textField.select();
    };
    MaskedTextField.prototype.setSelectionStart = function (value) {
        this._textField && this._textField.setSelectionStart(value);
    };
    MaskedTextField.prototype.setSelectionEnd = function (value) {
        this._textField && this._textField.setSelectionEnd(value);
    };
    MaskedTextField.prototype.setSelectionRange = function (start, end) {
        this._textField && this._textField.setSelectionRange(start, end);
    };
    Object.defineProperty(MaskedTextField.prototype, "selectionStart", {
        get: function () {
            return this._textField && this._textField.selectionStart !== null ? this._textField.selectionStart : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextField.prototype, "selectionEnd", {
        get: function () {
            return this._textField && this._textField.selectionEnd ? this._textField.selectionEnd : -1;
        },
        enumerable: true,
        configurable: true
    });
    MaskedTextField.prototype._onFocus = function (event) {
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
        this._isFocused = true;
        // Move the cursor position to the leftmost unfilled position
        for (var i = 0; i < this._maskCharData.length; i++) {
            if (!this._maskCharData[i].value) {
                this.setState({
                    maskCursorPosition: this._maskCharData[i].displayIndex
                });
                break;
            }
        }
    };
    MaskedTextField.prototype._onBlur = function (event) {
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
        this._isFocused = false;
        this._moveCursorOnMouseUp = true;
    };
    MaskedTextField.prototype._onMouseDown = function (event) {
        if (this.props.onMouseDown) {
            this.props.onMouseDown(event);
        }
        if (!this._isFocused) {
            this._moveCursorOnMouseUp = true;
        }
    };
    MaskedTextField.prototype._onMouseUp = function (event) {
        if (this.props.onMouseUp) {
            this.props.onMouseUp(event);
        }
        // Move the cursor on mouseUp after focusing the textField
        if (this._moveCursorOnMouseUp) {
            this._moveCursorOnMouseUp = false;
            // Move the cursor position to the rightmost unfilled position
            for (var i = 0; i < this._maskCharData.length; i++) {
                if (!this._maskCharData[i].value) {
                    this.setState({
                        maskCursorPosition: this._maskCharData[i].displayIndex
                    });
                    break;
                }
            }
        }
    };
    MaskedTextField.prototype._onBeforeChange = function (value) {
        if (this.props.onBeforeChange) {
            this.props.onBeforeChange(value);
        }
        if (this._changeSelectionData === null) {
            this._changeSelectionData = {
                changeType: 'default',
                selectionStart: this._textField.selectionStart !== null ? this._textField.selectionStart : -1,
                selectionEnd: this._textField.selectionEnd !== null ? this._textField.selectionEnd : -1
            };
        }
    };
    MaskedTextField.prototype._onInputChange = function (ev, value) {
        if (!this._changeSelectionData) {
            return;
        }
        var displayValue = this.state.displayValue;
        // The initial value of cursorPos does not matter
        var cursorPos = 0;
        var _a = this._changeSelectionData, changeType = _a.changeType, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd;
        if (changeType === 'textPasted') {
            var charsSelected = selectionEnd - selectionStart, charCount = value.length + charsSelected - displayValue.length, startPos = selectionStart, pastedString = value.substr(startPos, charCount);
            // Clear any selected characters
            if (charsSelected) {
                this._maskCharData = clearRange(this._maskCharData, selectionStart, charsSelected);
            }
            cursorPos = insertString(this._maskCharData, startPos, pastedString);
        }
        else if (changeType === 'delete' || changeType === 'backspace') {
            // isDel is true If the characters are removed LTR, otherwise RTL
            var isDel = changeType === 'delete', charCount = selectionEnd - selectionStart;
            if (charCount) {
                // charCount is > 0 if range was deleted
                this._maskCharData = clearRange(this._maskCharData, selectionStart, charCount);
                cursorPos = getRightFormatIndex(this._maskCharData, selectionStart);
            }
            else {
                // If charCount === 0, there was no selection and a single character was deleted
                if (isDel) {
                    this._maskCharData = clearNext(this._maskCharData, selectionStart);
                    cursorPos = getRightFormatIndex(this._maskCharData, selectionStart);
                }
                else {
                    this._maskCharData = clearPrev(this._maskCharData, selectionStart);
                    cursorPos = getLeftFormatIndex(this._maskCharData, selectionStart);
                }
            }
        }
        else if (value.length > displayValue.length) {
            // This case is if the user added characters
            var charCount = value.length - displayValue.length, startPos = selectionEnd - charCount, enteredString = value.substr(startPos, charCount);
            cursorPos = insertString(this._maskCharData, startPos, enteredString);
        }
        else if (value.length <= displayValue.length) {
            /**
             * This case is reached only if the user has selected a block of 1 or more
             * characters and input a character replacing the characters they've selected.
             */
            var charCount = 1, selectCount = displayValue.length + charCount - value.length, startPos = selectionEnd - charCount, enteredString = value.substr(startPos, charCount);
            // Clear the selected range
            this._maskCharData = clearRange(this._maskCharData, startPos, selectCount);
            // Insert the printed character
            cursorPos = insertString(this._maskCharData, startPos, enteredString);
        }
        this._changeSelectionData = null;
        var newValue = getMaskDisplay(this.props.mask, this._maskCharData, this.props.maskChar);
        this.setState({
            displayValue: newValue,
            maskCursorPosition: cursorPos
        });
        // Perform onChange/d after input has been processed. Return value is expected to be the displayed text
        if (this.props.onChange) {
            this.props.onChange(ev, newValue);
        }
        if (this.props.onChanged) {
            this.props.onChanged(newValue);
        }
    };
    MaskedTextField.prototype._onKeyDown = function (event) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(event);
        }
        this._changeSelectionData = null;
        if (this._textField.value) {
            var keyCode = event.keyCode, ctrlKey = event.ctrlKey, metaKey = event.metaKey;
            // Ignore ctrl and meta keydown
            if (ctrlKey || metaKey) {
                return;
            }
            // On backspace or delete, store the selection and the keyCode
            if (keyCode === KeyCodes.backspace || keyCode === KeyCodes.del) {
                var selectionStart = event.target.selectionStart, selectionEnd = event.target.selectionEnd;
                // Check if backspace or delete press is valid.
                if (!(keyCode === KeyCodes.backspace && selectionEnd && selectionEnd > 0) &&
                    !(keyCode === KeyCodes.del && selectionStart !== null && selectionStart < this._textField.value.length)) {
                    return;
                }
                this._changeSelectionData = {
                    changeType: keyCode === KeyCodes.backspace ? 'backspace' : 'delete',
                    selectionStart: selectionStart !== null ? selectionStart : -1,
                    selectionEnd: selectionEnd !== null ? selectionEnd : -1
                };
            }
        }
    };
    MaskedTextField.prototype._onPaste = function (event) {
        if (this.props.onPaste) {
            this.props.onPaste(event);
        }
        var selectionStart = event.target.selectionStart, selectionEnd = event.target.selectionEnd;
        // Store the paste selection range
        this._changeSelectionData = {
            changeType: 'textPasted',
            selectionStart: selectionStart !== null ? selectionStart : -1,
            selectionEnd: selectionEnd !== null ? selectionEnd : -1
        };
    };
    MaskedTextField.defaultProps = {
        maskChar: DEFAULT_MASK_CHAR,
        maskFormat: DEFAULT_MASK_FORMAT_CHARS
    };
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onFocus", null);
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onBlur", null);
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onMouseDown", null);
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onMouseUp", null);
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onBeforeChange", null);
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onInputChange", null);
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onKeyDown", null);
    __decorate([
        autobind
    ], MaskedTextField.prototype, "_onPaste", null);
    return MaskedTextField;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/TextField/index.js




// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/TextField.js


// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(6);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: external "@microsoft/sp-http"
var sp_http_ = __webpack_require__(7);
var sp_http__default = /*#__PURE__*/__webpack_require__.n(sp_http_);

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.styles.js

var inheritFont = { fontFamily: 'inherit' };
var Fabric_styles_GlobalClassNames = {
    root: 'ms-Fabric'
};
var Fabric_styles_getStyles = function (props) {
    var theme = props.theme, className = props.className, isFocusVisible = props.isFocusVisible;
    var classNames = getGlobalClassNames(Fabric_styles_GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            isFocusVisible && 'is-focusVisible',
            theme.fonts.medium,
            {
                color: theme.palette.neutralPrimary,
                selectors: {
                    '& button': inheritFont,
                    '& input': inheritFont,
                    '& textarea': inheritFont,
                    ':global(button)': {
                        overflow: 'visible',
                        margin: 0
                    }
                }
            },
            className
        ]
    };
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.base.js




var Fabric_base_getClassNames = classNamesFunction();
var Fabric_base_FabricBase = /** @class */ (function (_super) {
    __extends(FabricBase, _super);
    function FabricBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = external__react_["createRef"]();
        _this._onMouseDown = function (ev) {
            _this.setState({ isFocusVisible: false });
        };
        _this._onKeyDown = function (ev) {
            if (isDirectionalKeyCode(ev.which)) {
                _this.setState({ isFocusVisible: true });
            }
        };
        _this.state = { isFocusVisible: false };
        return _this;
    }
    FabricBase.prototype.render = function () {
        var classNames = Fabric_base_getClassNames(Fabric_styles_getStyles, __assign({}, this.props, this.state));
        var divProps = getNativeProps(this.props, divProperties);
        return external__react_["createElement"]("div", __assign({}, divProps, { className: classNames.root, ref: this._rootElement }));
    };
    FabricBase.prototype.componentDidMount = function () {
        var win = getWindow(this._rootElement.current);
        if (win) {
            this._events.on(win, 'mousedown', this._onMouseDown, true);
            this._events.on(win, 'keydown', this._onKeyDown, true);
        }
    };
    return FabricBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.js



var Fabric = styled(Fabric_base_FabricBase, Fabric_styles_getStyles, undefined, {
    scope: 'Fabric'
});

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Fabric/index.js



// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/Fabric.js


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/utilities/selection/interfaces.js
var SELECTION_CHANGE = 'change';
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["none"] = 0] = "none";
    SelectionMode[SelectionMode["single"] = 1] = "single";
    SelectionMode[SelectionMode["multiple"] = 2] = "multiple";
})(SelectionMode || (SelectionMode = {}));
var SelectionDirection;
(function (SelectionDirection) {
    SelectionDirection[SelectionDirection["horizontal"] = 0] = "horizontal";
    SelectionDirection[SelectionDirection["vertical"] = 1] = "vertical";
})(SelectionDirection || (SelectionDirection = {}));

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/utilities/selection/Selection.js


var Selection_Selection = /** @class */ (function () {
    function Selection(options) {
        if (options === void 0) { options = {}; }
        var onSelectionChanged = options.onSelectionChanged, getKey = options.getKey, _a = options.canSelectItem, canSelectItem = _a === void 0 ? function (item) { return true; } : _a, _b = options.selectionMode, selectionMode = _b === void 0 ? SelectionMode.multiple : _b;
        this.mode = selectionMode;
        this._getKey = getKey || defaultGetKey;
        this._changeEventSuppressionCount = 0;
        this._exemptedCount = 0;
        this._anchoredIndex = 0;
        this._unselectableCount = 0;
        this._onSelectionChanged = onSelectionChanged;
        this._canSelectItem = canSelectItem;
        this._isModal = false;
        this.setItems([], true);
    }
    Selection.prototype.canSelectItem = function (item, index) {
        if (typeof index === 'number' && index < 0) {
            return false;
        }
        return this._canSelectItem(item, index);
    };
    Selection.prototype.getKey = function (item, index) {
        var key = this._getKey(item, index);
        return typeof key === 'number' || key ? "" + key : '';
    };
    Selection.prototype.setChangeEvents = function (isEnabled, suppressChange) {
        this._changeEventSuppressionCount += isEnabled ? -1 : 1;
        if (this._changeEventSuppressionCount === 0 && this._hasChanged) {
            this._hasChanged = false;
            if (!suppressChange) {
                this._change();
            }
        }
    };
    Selection.prototype.isModal = function () {
        return this._isModal;
    };
    Selection.prototype.setModal = function (isModal) {
        if (this._isModal !== isModal) {
            this.setChangeEvents(false);
            this._isModal = isModal;
            if (!isModal) {
                this.setAllSelected(false);
            }
            this._change();
            this.setChangeEvents(true);
        }
    };
    /**
     * Selection needs the items, call this method to set them. If the set
     * of items is the same, this will re-evaluate selection and index maps.
     * Otherwise, shouldClear should be set to true, so that selection is
     * cleared.
     */
    Selection.prototype.setItems = function (items, shouldClear) {
        if (shouldClear === void 0) { shouldClear = true; }
        var newKeyToIndexMap = {};
        var newUnselectableIndices = {};
        var hasSelectionChanged = false;
        this.setChangeEvents(false);
        // Reset the unselectable count.
        this._unselectableCount = 0;
        // Build lookup table for quick selection evaluation.
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item) {
                var key = this.getKey(item, i);
                if (key) {
                    newKeyToIndexMap[key] = i;
                }
            }
            newUnselectableIndices[i] = item && !this.canSelectItem(item);
            if (newUnselectableIndices[i]) {
                this._unselectableCount++;
            }
        }
        if (shouldClear || items.length === 0) {
            this.setAllSelected(false);
        }
        // Check the exemption list for discrepencies.
        var newExemptedIndicies = {};
        var newExemptedCount = 0;
        for (var indexProperty in this._exemptedIndices) {
            if (this._exemptedIndices.hasOwnProperty(indexProperty)) {
                var index = Number(indexProperty);
                var item = this._items[index];
                var exemptKey = item ? this.getKey(item, Number(index)) : undefined;
                var newIndex = exemptKey ? newKeyToIndexMap[exemptKey] : index;
                if (newIndex === undefined) {
                    // The item has likely been replaced or removed.
                    hasSelectionChanged = true;
                }
                else {
                    // We know the new index of the item. update the existing exemption table.
                    newExemptedIndicies[newIndex] = true;
                    newExemptedCount++;
                    hasSelectionChanged = hasSelectionChanged || newIndex !== index;
                }
            }
        }
        if (this._items && this._exemptedCount === 0 && items.length !== this._items.length && this._isAllSelected) {
            // If everything was selected but the number of items has changed, selection has changed.
            hasSelectionChanged = true;
        }
        this._exemptedIndices = newExemptedIndicies;
        this._exemptedCount = newExemptedCount;
        this._keyToIndexMap = newKeyToIndexMap;
        this._unselectableIndices = newUnselectableIndices;
        this._items = items;
        this._selectedItems = null;
        if (hasSelectionChanged) {
            this._updateCount();
            this._change();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.getItems = function () {
        return this._items;
    };
    Selection.prototype.getSelection = function () {
        if (!this._selectedItems) {
            this._selectedItems = [];
            var items = this._items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (this.isIndexSelected(i)) {
                        this._selectedItems.push(items[i]);
                    }
                }
            }
        }
        return this._selectedItems;
    };
    Selection.prototype.getSelectedCount = function () {
        return this._isAllSelected ? this._items.length - this._exemptedCount - this._unselectableCount : this._exemptedCount;
    };
    Selection.prototype.getSelectedIndices = function () {
        if (!this._selectedIndices) {
            this._selectedIndices = [];
            var items = this._items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (this.isIndexSelected(i)) {
                        this._selectedIndices.push(i);
                    }
                }
            }
        }
        return this._selectedIndices;
    };
    Selection.prototype.isRangeSelected = function (fromIndex, count) {
        if (count === 0) {
            return false;
        }
        var endIndex = fromIndex + count;
        for (var i = fromIndex; i < endIndex; i++) {
            if (!this.isIndexSelected(i)) {
                return false;
            }
        }
        return true;
    };
    Selection.prototype.isAllSelected = function () {
        var selectableCount = this._items.length - this._unselectableCount;
        // In single mode, we can only have a max of 1 item.
        if (this.mode === SelectionMode.single) {
            selectableCount = Math.min(selectableCount, 1);
        }
        return ((this.count > 0 && (this._isAllSelected && this._exemptedCount === 0)) ||
            (!this._isAllSelected && this._exemptedCount === selectableCount && selectableCount > 0));
    };
    Selection.prototype.isKeySelected = function (key) {
        var index = this._keyToIndexMap[key];
        return this.isIndexSelected(index);
    };
    Selection.prototype.isIndexSelected = function (index) {
        return !!((this.count > 0 && (this._isAllSelected && !this._exemptedIndices[index] && !this._unselectableIndices[index])) ||
            (!this._isAllSelected && this._exemptedIndices[index]));
    };
    Selection.prototype.setAllSelected = function (isAllSelected) {
        if (isAllSelected && this.mode !== SelectionMode.multiple) {
            return;
        }
        var selectableCount = this._items ? this._items.length - this._unselectableCount : 0;
        this.setChangeEvents(false);
        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
            this._exemptedIndices = {};
            if (isAllSelected !== this._isAllSelected || this._exemptedCount > 0) {
                this._exemptedCount = 0;
                this._isAllSelected = isAllSelected;
                this._change();
            }
            this._updateCount();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.setKeySelected = function (key, isSelected, shouldAnchor) {
        var index = this._keyToIndexMap[key];
        if (index >= 0) {
            this.setIndexSelected(index, isSelected, shouldAnchor);
        }
    };
    Selection.prototype.setIndexSelected = function (index, isSelected, shouldAnchor) {
        if (this.mode === SelectionMode.none) {
            return;
        }
        // Clamp the index.
        index = Math.min(Math.max(0, index), this._items.length - 1);
        // No-op on out of bounds selections.
        if (index < 0 || index >= this._items.length) {
            return;
        }
        this.setChangeEvents(false);
        var isExempt = this._exemptedIndices[index];
        var canSelect = !this._unselectableIndices[index];
        if (canSelect) {
            if (isSelected && this.mode === SelectionMode.single) {
                // If this is single-select, the previous selection should be removed.
                this.setAllSelected(false);
            }
            // Determine if we need to remove the exemption.
            if (isExempt && ((isSelected && this._isAllSelected) || (!isSelected && !this._isAllSelected))) {
                delete this._exemptedIndices[index];
                this._exemptedCount--;
            }
            // Determine if we need to add the exemption.
            if (!isExempt && ((isSelected && !this._isAllSelected) || (!isSelected && this._isAllSelected))) {
                this._exemptedIndices[index] = true;
                this._exemptedCount++;
            }
            if (shouldAnchor) {
                this._anchoredIndex = index;
            }
        }
        this._updateCount();
        this.setChangeEvents(true);
    };
    Selection.prototype.selectToKey = function (key, clearSelection) {
        this.selectToIndex(this._keyToIndexMap[key], clearSelection);
    };
    Selection.prototype.selectToIndex = function (index, clearSelection) {
        if (this.mode === SelectionMode.none) {
            return;
        }
        if (this.mode === SelectionMode.single) {
            this.setIndexSelected(index, true, true);
            return;
        }
        var anchorIndex = this._anchoredIndex || 0;
        var startIndex = Math.min(index, anchorIndex);
        var endIndex = Math.max(index, anchorIndex);
        this.setChangeEvents(false);
        if (clearSelection) {
            this.setAllSelected(false);
        }
        for (; startIndex <= endIndex; startIndex++) {
            this.setIndexSelected(startIndex, true, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.toggleAllSelected = function () {
        this.setAllSelected(!this.isAllSelected());
    };
    Selection.prototype.toggleKeySelected = function (key) {
        this.setKeySelected(key, !this.isKeySelected(key), true);
    };
    Selection.prototype.toggleIndexSelected = function (index) {
        this.setIndexSelected(index, !this.isIndexSelected(index), true);
    };
    Selection.prototype.toggleRangeSelected = function (fromIndex, count) {
        if (this.mode === SelectionMode.none) {
            return;
        }
        var isRangeSelected = this.isRangeSelected(fromIndex, count);
        var endIndex = fromIndex + count;
        if (this.mode === SelectionMode.single && count > 1) {
            return;
        }
        this.setChangeEvents(false);
        for (var i = fromIndex; i < endIndex; i++) {
            this.setIndexSelected(i, !isRangeSelected, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype._updateCount = function () {
        var count = this.getSelectedCount();
        if (count !== this.count) {
            this.count = count;
            this._change();
        }
        if (!this.count) {
            this.setModal(false);
        }
    };
    Selection.prototype._change = function () {
        if (this._changeEventSuppressionCount === 0) {
            this._selectedItems = null;
            this._selectedIndices = undefined;
            EventGroup_EventGroup.raise(this, SELECTION_CHANGE);
            if (this._onSelectionChanged) {
                this._onSelectionChanged();
            }
        }
        else {
            this._hasChanged = true;
        }
    };
    return Selection;
}());

function defaultGetKey(item, index) {
    return item && item.key ? item.key : "" + index;
}

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/utilities/selection/SelectionZone.js




// Selection definitions:
//
// Anchor index: the point from which a range selection starts.
// Focus index: the point from which layout movement originates from.
//
// These two can differ. Tests:
//
// If you start at index 5
// Shift click to index 10
//    The focus is 10, the anchor is 5.
// If you shift click at index 0
//    The anchor remains at 5, the items between 0 and 5 are selected and everything else is cleared.
// If you click index 8
//    The anchor and focus are set to 8.
var SELECTION_DISABLED_ATTRIBUTE_NAME = 'data-selection-disabled';
var SELECTION_INDEX_ATTRIBUTE_NAME = 'data-selection-index';
var SELECTION_TOGGLE_ATTRIBUTE_NAME = 'data-selection-toggle';
var SELECTION_INVOKE_ATTRIBUTE_NAME = 'data-selection-invoke';
var SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME = 'data-selection-all-toggle';
var SELECTION_SELECT_ATTRIBUTE_NAME = 'data-selection-select';
var SelectionZone_SelectionZone = /** @class */ (function (_super) {
    __extends(SelectionZone, _super);
    function SelectionZone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._root = external__react_["createRef"]();
        /**
         * In some cases, the consuming scenario requires to set focus on a row without having SelectionZone
         * react to the event. Note that focus events in IE \<= 11 will occur asynchronously after .focus() has
         * been called on an element, so we need a flag to store the idea that we will bypass the "next"
         * focus event that occurs. This method does that.
         */
        _this.ignoreNextFocus = function () {
            _this._handleNextFocus(false);
        };
        _this._onMouseDownCapture = function (ev) {
            if (document.activeElement !== ev.target && !elementContains(document.activeElement, ev.target)) {
                _this.ignoreNextFocus();
                return;
            }
            if (!elementContains(ev.target, _this._root.current)) {
                return;
            }
            var target = ev.target;
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                    _this.ignoreNextFocus();
                    break;
                }
                target = getParent(target);
            }
        };
        /**
         * When we focus an item, for single/multi select scenarios, we should try to select it immediately
         * as long as the focus did not originate from a mouse down/touch event. For those cases, we handle them
         * specially.
         */
        _this._onFocus = function (ev) {
            var target = ev.target;
            var selection = _this.props.selection;
            var isToggleModifierPressed = _this._isCtrlPressed || _this._isMetaPressed;
            var selectionMode = _this._getSelectionMode();
            if (_this._shouldHandleFocus && selectionMode !== SelectionMode.none) {
                var isToggle = _this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME);
                var itemRoot = _this._findItemRoot(target);
                if (!isToggle && itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    if (isToggleModifierPressed) {
                        // set anchor only.
                        selection.setIndexSelected(index, selection.isIndexSelected(index), true);
                        if (_this.props.enterModalOnTouch && _this._isTouch && selection.setModal) {
                            selection.setModal(true);
                            _this._setIsTouch(false);
                        }
                    }
                    else {
                        if (_this.props.isSelectedOnFocus) {
                            _this._onItemSurfaceClick(ev, index);
                        }
                    }
                }
            }
            _this._handleNextFocus(false);
        };
        _this._onMouseDown = function (ev) {
            _this._updateModifiers(ev);
            var target = ev.target;
            var itemRoot = _this._findItemRoot(target);
            // No-op if selection is disabled
            if (_this._isSelectionDisabled(target)) {
                return;
            }
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
                    break;
                }
                else if (itemRoot) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if ((target === itemRoot || _this._shouldAutoSelect(target)) &&
                        !_this._isShiftPressed &&
                        !_this._isCtrlPressed &&
                        !_this._isMetaPressed) {
                        _this._onInvokeMouseDown(ev, _this._getItemIndex(itemRoot));
                        break;
                    }
                    else if (_this.props.disableAutoSelectOnInputElements &&
                        (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT')) {
                        return;
                    }
                }
                target = getParent(target);
            }
        };
        _this._onTouchStartCapture = function (ev) {
            _this._setIsTouch(true);
        };
        _this._onClick = function (ev) {
            _this._updateModifiers(ev);
            var target = ev.target;
            var itemRoot = _this._findItemRoot(target);
            // No-op if selection is disabled
            if (_this._isSelectionDisabled(target)) {
                return;
            }
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
                    _this._onToggleAllClick(ev);
                    break;
                }
                else if (itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        if (_this._isShiftPressed) {
                            _this._onItemSurfaceClick(ev, index);
                        }
                        else {
                            _this._onToggleClick(ev, index);
                        }
                        break;
                    }
                    else if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        _this._onInvokeClick(ev, index);
                        break;
                    }
                    else if (target === itemRoot) {
                        _this._onItemSurfaceClick(ev, index);
                        break;
                    }
                    else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT') {
                        return;
                    }
                }
                target = getParent(target);
            }
        };
        _this._onContextMenu = function (ev) {
            var target = ev.target;
            var _a = _this.props, onItemContextMenu = _a.onItemContextMenu, selection = _a.selection;
            if (onItemContextMenu) {
                var itemRoot = _this._findItemRoot(target);
                if (itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    _this._onInvokeMouseDown(ev, index);
                    var skipPreventDefault = onItemContextMenu(selection.getItems()[index], index, ev.nativeEvent);
                    // In order to keep back compat, if the value here is undefined, then we should still
                    // call preventDefault(). Only in the case where true is explicitly returned should
                    // the call be skipped.
                    if (!skipPreventDefault) {
                        ev.preventDefault();
                    }
                }
            }
        };
        /**
         * In multi selection, if you double click within an item's root (but not within the invoke element or input elements),
         * we should execute the invoke handler.
         */
        _this._onDoubleClick = function (ev) {
            var target = ev.target;
            if (_this._isSelectionDisabled(target)) {
                return;
            }
            var onItemInvoked = _this.props.onItemInvoked;
            var itemRoot = _this._findItemRoot(target);
            var selectionMode = _this._getSelectionMode();
            if (itemRoot && onItemInvoked && selectionMode !== SelectionMode.none && !_this._isInputElement(target)) {
                var index = _this._getItemIndex(itemRoot);
                while (target !== _this._root.current) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME) || _this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if (target === itemRoot) {
                        _this._onInvokeClick(ev, index);
                        break;
                    }
                    target = getParent(target);
                }
                target = getParent(target);
            }
        };
        _this._onKeyDownCapture = function (ev) {
            _this._updateModifiers(ev);
            _this._handleNextFocus(true);
        };
        _this._onKeyDown = function (ev) {
            _this._updateModifiers(ev);
            var target = ev.target;
            if (_this._isSelectionDisabled(target)) {
                return;
            }
            var selection = _this.props.selection;
            var isSelectAllKey = ev.which === KeyCodes.a && (_this._isCtrlPressed || _this._isMetaPressed);
            var isClearSelectionKey = ev.which === KeyCodes.escape;
            // Ignore key downs from input elements.
            if (_this._isInputElement(target)) {
                // A key was pressed while an item in this zone was focused.
                return;
            }
            var selectionMode = _this._getSelectionMode();
            // If ctrl-a is pressed, select all (if all are not already selected.)
            if (isSelectAllKey && selectionMode === SelectionMode.multiple && !selection.isAllSelected()) {
                selection.setAllSelected(true);
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            // If escape is pressed, clear selection (if any are selected.)
            if (isClearSelectionKey && selection.getSelectedCount() > 0) {
                selection.setAllSelected(false);
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            var itemRoot = _this._findItemRoot(target);
            // If a key was pressed within an item, we should treat "enters" as invokes and "space" as toggle
            if (itemRoot) {
                var index = _this._getItemIndex(itemRoot);
                while (target !== _this._root.current) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        // For toggle elements, assuming they are rendered as buttons, they will generate a click event,
                        // so we can no-op for any keydowns in this case.
                        break;
                    }
                    else if (_this._shouldAutoSelect(target)) {
                        // If the event went to an element which should trigger auto-select, select it and then let
                        // the default behavior kick in.
                        _this._onInvokeMouseDown(ev, index);
                        break;
                    }
                    else if ((ev.which === KeyCodes.enter || ev.which === KeyCodes.space) &&
                        (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT')) {
                        return false;
                    }
                    else if (target === itemRoot) {
                        if (ev.which === KeyCodes.enter) {
                            _this._onInvokeClick(ev, index);
                            ev.preventDefault();
                            return;
                        }
                        else if (ev.which === KeyCodes.space) {
                            _this._onToggleClick(ev, index);
                            ev.preventDefault();
                            return;
                        }
                        break;
                    }
                    target = getParent(target);
                }
            }
        };
        return _this;
    }
    SelectionZone.prototype.componentDidMount = function () {
        var win = getWindow(this._root.current);
        var scrollElement = findScrollableParent(this._root.current);
        // Track the latest modifier keys globally.
        this._events.on(win, 'keydown, keyup', this._updateModifiers, true);
        this._events.on(scrollElement, 'click', this._tryClearOnEmptyClick);
        this._events.on(document.body, 'touchstart', this._onTouchStartCapture, true);
        this._events.on(document.body, 'touchend', this._onTouchStartCapture, true);
    };
    SelectionZone.prototype.render = function () {
        return (external__react_["createElement"]("div", __assign({ className: "ms-SelectionZone", ref: this._root, onKeyDown: this._onKeyDown, onMouseDown: this._onMouseDown, onKeyDownCapture: this._onKeyDownCapture, onClick: this._onClick, role: "presentation", onDoubleClick: this._onDoubleClick, onContextMenu: this._onContextMenu }, {
            onMouseDownCapture: this._onMouseDownCapture,
            onFocusCapture: this._onFocus
        }), this.props.children));
    };
    SelectionZone.prototype._isSelectionDisabled = function (target) {
        while (target !== this._root.current) {
            if (this._hasAttribute(target, SELECTION_DISABLED_ATTRIBUTE_NAME)) {
                return true;
            }
            target = getParent(target);
        }
        return false;
    };
    SelectionZone.prototype._onToggleAllClick = function (ev) {
        var selection = this.props.selection;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === SelectionMode.multiple) {
            selection.toggleAllSelected();
            ev.stopPropagation();
            ev.preventDefault();
        }
    };
    SelectionZone.prototype._onToggleClick = function (ev, index) {
        var selection = this.props.selection;
        var selectionMode = this._getSelectionMode();
        selection.setChangeEvents(false);
        if (this.props.enterModalOnTouch && this._isTouch && !selection.isIndexSelected(index) && selection.setModal) {
            selection.setModal(true);
            this._setIsTouch(false);
        }
        if (selectionMode === SelectionMode.multiple) {
            selection.toggleIndexSelected(index);
        }
        else if (selectionMode === SelectionMode.single) {
            var isSelected = selection.isIndexSelected(index);
            selection.setAllSelected(false);
            selection.setIndexSelected(index, !isSelected, true);
        }
        else {
            selection.setChangeEvents(true);
            return;
        }
        selection.setChangeEvents(true);
        ev.stopPropagation();
        // NOTE: ev.preventDefault is not called for toggle clicks, because this will kill the browser behavior
        // for checkboxes if you use a checkbox for the toggle.
    };
    SelectionZone.prototype._onInvokeClick = function (ev, index) {
        var _a = this.props, selection = _a.selection, onItemInvoked = _a.onItemInvoked;
        if (onItemInvoked) {
            onItemInvoked(selection.getItems()[index], index, ev.nativeEvent);
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    SelectionZone.prototype._onItemSurfaceClick = function (ev, index) {
        var selection = this.props.selection;
        var isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === SelectionMode.multiple) {
            if (this._isShiftPressed && !this._isTabPressed) {
                selection.selectToIndex(index, !isToggleModifierPressed);
            }
            else if (isToggleModifierPressed) {
                selection.toggleIndexSelected(index);
            }
            else {
                this._clearAndSelectIndex(index);
            }
        }
        else if (selectionMode === SelectionMode.single) {
            this._clearAndSelectIndex(index);
        }
    };
    SelectionZone.prototype._onInvokeMouseDown = function (ev, index) {
        var selection = this.props.selection;
        // Only do work if item is not selected.
        if (selection.isIndexSelected(index)) {
            return;
        }
        this._clearAndSelectIndex(index);
    };
    SelectionZone.prototype._tryClearOnEmptyClick = function (ev) {
        if (!this.props.selectionPreservedOnEmptyClick && this._isNonHandledClick(ev.target)) {
            this.props.selection.setAllSelected(false);
        }
    };
    SelectionZone.prototype._clearAndSelectIndex = function (index) {
        var selection = this.props.selection;
        var isAlreadySingleSelected = selection.getSelectedCount() === 1 && selection.isIndexSelected(index);
        if (!isAlreadySingleSelected) {
            selection.setChangeEvents(false);
            selection.setAllSelected(false);
            selection.setIndexSelected(index, true, true);
            if (this.props.enterModalOnTouch && this._isTouch && selection.setModal) {
                selection.setModal(true);
                this._setIsTouch(false);
            }
            selection.setChangeEvents(true);
        }
    };
    /**
     * We need to track the modifier key states so that when focus events occur, which do not contain
     * modifier states in the Event object, we know how to behave.
     */
    SelectionZone.prototype._updateModifiers = function (ev) {
        this._isShiftPressed = ev.shiftKey;
        this._isCtrlPressed = ev.ctrlKey;
        this._isMetaPressed = ev.metaKey;
        var keyCode = ev.keyCode;
        this._isTabPressed = keyCode ? keyCode === KeyCodes.tab : false;
    };
    SelectionZone.prototype._findItemRoot = function (target) {
        var selection = this.props.selection;
        while (target !== this._root.current) {
            var indexValue = target.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME);
            var index = Number(indexValue);
            if (indexValue !== null && index >= 0 && index < selection.getItems().length) {
                break;
            }
            target = getParent(target);
        }
        if (target === this._root.current) {
            return undefined;
        }
        return target;
    };
    SelectionZone.prototype._getItemIndex = function (itemRoot) {
        return Number(itemRoot.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME));
    };
    SelectionZone.prototype._shouldAutoSelect = function (element) {
        return this._hasAttribute(element, SELECTION_SELECT_ATTRIBUTE_NAME);
    };
    SelectionZone.prototype._hasAttribute = function (element, attributeName) {
        var isToggle = false;
        while (!isToggle && element !== this._root.current) {
            isToggle = element.getAttribute(attributeName) === 'true';
            element = getParent(element);
        }
        return isToggle;
    };
    SelectionZone.prototype._isInputElement = function (element) {
        return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
    };
    SelectionZone.prototype._isNonHandledClick = function (element) {
        var doc = getDocument();
        if (doc && element) {
            while (element && element !== doc.documentElement) {
                if (isElementTabbable(element)) {
                    return false;
                }
                element = getParent(element);
            }
        }
        return true;
    };
    SelectionZone.prototype._handleNextFocus = function (handleFocus) {
        var _this = this;
        if (this._shouldHandleFocusTimeoutId) {
            this._async.clearTimeout(this._shouldHandleFocusTimeoutId);
            this._shouldHandleFocusTimeoutId = undefined;
        }
        this._shouldHandleFocus = handleFocus;
        if (handleFocus) {
            this._async.setTimeout(function () {
                _this._shouldHandleFocus = false;
            }, 100);
        }
    };
    SelectionZone.prototype._setIsTouch = function (isTouch) {
        var _this = this;
        if (this._isTouchTimeoutId) {
            this._async.clearTimeout(this._isTouchTimeoutId);
            this._isTouchTimeoutId = undefined;
        }
        this._isTouch = true;
        if (isTouch) {
            this._async.setTimeout(function () {
                _this._isTouch = false;
            }, 300);
        }
    };
    SelectionZone.prototype._getSelectionMode = function () {
        var selection = this.props.selection;
        var _a = this.props.selectionMode, selectionMode = _a === void 0 ? selection ? selection.mode : SelectionMode.none : _a;
        return selectionMode;
    };
    SelectionZone.defaultProps = {
        isMultiSelectEnabled: true,
        isSelectedOnFocus: true,
        selectionMode: SelectionMode.multiple
    };
    return SelectionZone;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/utilities/selection/index.js




// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.types.js
var CollapseAllVisibility;
(function (CollapseAllVisibility) {
    CollapseAllVisibility[CollapseAllVisibility["hidden"] = 0] = "hidden";
    CollapseAllVisibility[CollapseAllVisibility["visible"] = 1] = "visible";
})(CollapseAllVisibility || (CollapseAllVisibility = {}));

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.types.js
/**
 * Enum to describe how a particular column header behaves.... This enum is used to
 * to specify the property IColumn:columnActionsMode.
 * If IColumn:columnActionsMode is undefined, then it's equivalent to ColumnActionsMode.clickable
 */
var ColumnActionsMode;
(function (ColumnActionsMode) {
    /**
     * Renders the column header as disabled.
     */
    ColumnActionsMode[ColumnActionsMode["disabled"] = 0] = "disabled";
    /**
     * Renders the column header is clickable.
     */
    ColumnActionsMode[ColumnActionsMode["clickable"] = 1] = "clickable";
    /**
     * Renders the column header ias clickable and displays the dropdown cheveron.
     */
    ColumnActionsMode[ColumnActionsMode["hasDropdown"] = 2] = "hasDropdown";
})(ColumnActionsMode || (ColumnActionsMode = {}));
var ConstrainMode;
(function (ConstrainMode) {
    /** If specified, lets the content grow which allows the page to manage scrolling. */
    ConstrainMode[ConstrainMode["unconstrained"] = 0] = "unconstrained";
    /**
     * If specified, constrains the list to the given layout space.
     */
    ConstrainMode[ConstrainMode["horizontalConstrained"] = 1] = "horizontalConstrained";
})(ConstrainMode || (ConstrainMode = {}));
/**
 * Enum to describe where the column has been dropped, after starting the drag
 */
var ColumnDragEndLocation;
(function (ColumnDragEndLocation) {
    /**
     * Drag ended outside of current list
     */
    ColumnDragEndLocation[ColumnDragEndLocation["outside"] = 0] = "outside";
    /**
     * Drag ended on current List
     */
    ColumnDragEndLocation[ColumnDragEndLocation["surface"] = 1] = "surface";
    /**
     * Drag ended on Header
     */
    ColumnDragEndLocation[ColumnDragEndLocation["header"] = 2] = "header";
})(ColumnDragEndLocation || (ColumnDragEndLocation = {}));
var DetailsListLayoutMode;
(function (DetailsListLayoutMode) {
    /**
     * Lets the user resize columns and makes not attempt to fit them.
     */
    DetailsListLayoutMode[DetailsListLayoutMode["fixedColumns"] = 0] = "fixedColumns";
    /**
     * Manages which columns are visible, tries to size them according to their min/max rules and drops
     * off columns that can't fit and have isCollapsible set.
     */
    DetailsListLayoutMode[DetailsListLayoutMode["justified"] = 1] = "justified";
})(DetailsListLayoutMode || (DetailsListLayoutMode = {}));
var CheckboxVisibility;
(function (CheckboxVisibility) {
    /**
     * Visible on hover.
     */
    CheckboxVisibility[CheckboxVisibility["onHover"] = 0] = "onHover";
    /**
     * Visible always.
     */
    CheckboxVisibility[CheckboxVisibility["always"] = 1] = "always";
    /**
     * Hide checkboxes.
     */
    CheckboxVisibility[CheckboxVisibility["hidden"] = 2] = "hidden";
})(CheckboxVisibility || (CheckboxVisibility = {}));

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.types.js
var FocusZoneTabbableElements = {
    /** Tabbing is not allowed */
    none: 0,
    /** All tabbing action is allowed */
    all: 1,
    /** Tabbing is allowed only on input elements */
    inputOnly: 2
};
var FocusZoneDirection;
(function (FocusZoneDirection) {
    /** Only react to up/down arrows. */
    FocusZoneDirection[FocusZoneDirection["vertical"] = 0] = "vertical";
    /** Only react to left/right arrows. */
    FocusZoneDirection[FocusZoneDirection["horizontal"] = 1] = "horizontal";
    /** React to all arrows. */
    FocusZoneDirection[FocusZoneDirection["bidirectional"] = 2] = "bidirectional";
})(FocusZoneDirection || (FocusZoneDirection = {}));

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.js




var FocusZone_IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
var FocusZone_FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var TABINDEX = 'tabindex';
var NO_VERTICAL_WRAP = 'data-no-vertical-wrap';
var NO_HORIZONTAL_WRAP = 'data-no-horizontal-wrap';
var LARGE_DISTANCE_FROM_CENTER = 999999999;
var LARGE_NEGATIVE_DISTANCE_FROM_CENTER = -999999999;
var _allInstances = {};
var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
var ALLOW_VIRTUAL_ELEMENTS = false;
var FocusZone_FocusZone = /** @class */ (function (_super) {
    __extends(FocusZone, _super);
    function FocusZone(props) {
        var _this = _super.call(this, props) || this;
        _this._root = external__react_["createRef"]();
        _this._onFocus = function (ev) {
            var _a = _this.props, onActiveElementChanged = _a.onActiveElementChanged, doNotAllowFocusEventToPropagate = _a.doNotAllowFocusEventToPropagate, onFocusNotification = _a.onFocusNotification;
            var isImmediateDescendant = _this._isImmediateDescendantOfZone(ev.target);
            var newActiveElement;
            if (onFocusNotification) {
                onFocusNotification();
            }
            if (isImmediateDescendant) {
                newActiveElement = ev.target;
            }
            else {
                var parentElement = ev.target;
                while (parentElement && parentElement !== _this._root.current) {
                    if (isElementTabbable(parentElement) && _this._isImmediateDescendantOfZone(parentElement)) {
                        newActiveElement = parentElement;
                        break;
                    }
                    parentElement = getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
                }
            }
            if (newActiveElement && newActiveElement !== _this._activeElement) {
                _this._activeElement = newActiveElement;
                if (isImmediateDescendant) {
                    _this._setFocusAlignment(_this._activeElement);
                }
            }
            if (onActiveElementChanged) {
                onActiveElementChanged(_this._activeElement, ev);
            }
            if (doNotAllowFocusEventToPropagate) {
                ev.stopPropagation();
            }
        };
        _this._onMouseDown = function (ev) {
            var disabled = _this.props.disabled;
            if (disabled) {
                return;
            }
            var target = ev.target;
            var path = [];
            while (target && target !== _this._root.current) {
                path.push(target);
                target = getParent(target, ALLOW_VIRTUAL_ELEMENTS);
            }
            while (path.length) {
                target = path.pop();
                if (target && isElementTabbable(target)) {
                    _this._setActiveElement(target, true);
                }
                if (isElementFocusZone(target)) {
                    // Stop here since the focus zone will take care of its own children.
                    break;
                }
            }
        };
        /**
         * Handle the keystrokes.
         */
        _this._onKeyDown = function (ev) {
            var _a = _this.props, direction = _a.direction, disabled = _a.disabled, isInnerZoneKeystroke = _a.isInnerZoneKeystroke;
            if (disabled) {
                return;
            }
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            // If the default has been prevented, do not process keyboard events.
            if (ev.isDefaultPrevented()) {
                return;
            }
            if (document.activeElement === _this._root.current && _this._isInnerZone) {
                // If this element has focus, it is being controlled by a parent.
                // Ignore the keystroke.
                return;
            }
            if (isInnerZoneKeystroke && isInnerZoneKeystroke(ev) && _this._isImmediateDescendantOfZone(ev.target)) {
                // Try to focus
                var innerZone = _this._getFirstInnerZone();
                if (innerZone) {
                    if (!innerZone.focus(true)) {
                        return;
                    }
                }
                else if (isElementFocusSubZone(ev.target)) {
                    if (!_this.focusElement(getNextElement(ev.target, ev.target.firstChild, true))) {
                        return;
                    }
                }
                else {
                    return;
                }
            }
            else if (ev.altKey) {
                return;
            }
            else {
                switch (ev.which) {
                    case KeyCodes.space:
                        if (_this._tryInvokeClickForFocusable(ev.target)) {
                            break;
                        }
                        return;
                    case KeyCodes.left:
                        if (direction !== FocusZoneDirection.vertical && _this._moveFocusLeft()) {
                            break;
                        }
                        return;
                    case KeyCodes.right:
                        if (direction !== FocusZoneDirection.vertical && _this._moveFocusRight()) {
                            break;
                        }
                        return;
                    case KeyCodes.up:
                        if (direction !== FocusZoneDirection.horizontal && _this._moveFocusUp()) {
                            break;
                        }
                        return;
                    case KeyCodes.down:
                        if (direction !== FocusZoneDirection.horizontal && _this._moveFocusDown()) {
                            break;
                        }
                        return;
                    case KeyCodes.tab:
                        if (_this.props.allowTabKey ||
                            _this.props.handleTabKey === FocusZoneTabbableElements.all ||
                            (_this.props.handleTabKey === FocusZoneTabbableElements.inputOnly && _this._isElementInput(ev.target))) {
                            var focusChanged = false;
                            _this._processingTabKey = true;
                            if (direction === FocusZoneDirection.vertical ||
                                !_this._shouldWrapFocus(_this._activeElement, NO_HORIZONTAL_WRAP)) {
                                focusChanged = ev.shiftKey ? _this._moveFocusUp() : _this._moveFocusDown();
                            }
                            else if (direction === FocusZoneDirection.horizontal || direction === FocusZoneDirection.bidirectional) {
                                var tabWithDirection = rtl_getRTL() ? !ev.shiftKey : ev.shiftKey;
                                focusChanged = tabWithDirection ? _this._moveFocusLeft() : _this._moveFocusRight();
                            }
                            _this._processingTabKey = false;
                            if (focusChanged) {
                                break;
                            }
                        }
                        return;
                    case KeyCodes.home:
                        if (_this._isElementInput(ev.target) && !_this._shouldInputLoseFocus(ev.target, false)) {
                            return false;
                        }
                        var firstChild = _this._root.current && _this._root.current.firstChild;
                        if (_this._root.current && firstChild && _this.focusElement(getNextElement(_this._root.current, firstChild, true))) {
                            break;
                        }
                        return;
                    case KeyCodes.end:
                        if (_this._isElementInput(ev.target) && !_this._shouldInputLoseFocus(ev.target, true)) {
                            return false;
                        }
                        var lastChild = _this._root.current && _this._root.current.lastChild;
                        if (_this._root.current && _this.focusElement(getPreviousElement(_this._root.current, lastChild, true, true, true))) {
                            break;
                        }
                        return;
                    case KeyCodes.enter:
                        if (_this._tryInvokeClickForFocusable(ev.target)) {
                            break;
                        }
                        return;
                    default:
                        return;
                }
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._warnDeprecations({
            rootProps: undefined,
            allowTabKey: 'handleTabKey'
        });
        _this._id = getId('FocusZone');
        _this._focusAlignment = {
            left: 0,
            top: 0
        };
        _this._processingTabKey = false;
        return _this;
    }
    FocusZone.prototype.componentDidMount = function () {
        var root = this._root.current;
        _allInstances[this._id] = this;
        if (root) {
            var windowElement = root.ownerDocument.defaultView;
            var parentElement = getParent(root, ALLOW_VIRTUAL_ELEMENTS);
            while (parentElement && parentElement !== document.body && parentElement.nodeType === 1) {
                if (isElementFocusZone(parentElement)) {
                    this._isInnerZone = true;
                    break;
                }
                parentElement = getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
            }
            if (!this._isInnerZone) {
                this._events.on(windowElement, 'keydown', this._onKeyDownCapture, true);
                this._events.on(root, 'blur', this._onBlur, true);
            }
            // Assign initial tab indexes so that we can set initial focus as appropriate.
            this._updateTabIndexes();
            if (this.props.defaultActiveElement) {
                this._activeElement = getDocument().querySelector(this.props.defaultActiveElement);
                this.focus();
            }
        }
    };
    FocusZone.prototype.componentDidUpdate = function () {
        var root = this._root.current;
        var doc = getDocument(root);
        if (doc && this._lastIndexPath && (doc.activeElement === doc.body || doc.activeElement === root)) {
            // The element has been removed after the render, attempt to restore focus.
            var elementToFocus = getFocusableByIndexPath(root, this._lastIndexPath);
            if (elementToFocus) {
                this._setActiveElement(elementToFocus, true);
                elementToFocus.focus();
                this._setParkedFocus(false);
            }
            else {
                // We had a focus path to restore, but now that path is unresolvable. Park focus
                // on the container until we can try again.
                this._setParkedFocus(true);
            }
        }
    };
    FocusZone.prototype.componentWillUnmount = function () {
        delete _allInstances[this._id];
    };
    FocusZone.prototype.render = function () {
        var _a = this.props, rootProps = _a.rootProps, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className;
        var divProps = getNativeProps(this.props, htmlElementProperties);
        var Tag = this.props.elementType || 'div';
        // Note, right before rendering/reconciling proceeds, we need to record if focus
        // was in the zone before the update. This helper will track this and, if focus
        // was actually in the zone, what the index path to the element is at this time.
        // Then, later in componentDidUpdate, we can evaluate if we need to restore it in
        // the case the element was removed.
        this._evaluateFocusBeforeRender();
        return (external__react_["createElement"](Tag, __assign({ role: "presentation" }, divProps, rootProps, { className: css('ms-FocusZone', className), ref: this._root, "data-focuszone-id": this._id, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown, onFocus: this._onFocus, onMouseDownCapture: this._onMouseDown }), this.props.children));
    };
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
     * if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._root.current) {
            if (!forceIntoFirstElement && this._root.current.getAttribute(FocusZone_IS_FOCUSABLE_ATTRIBUTE) === 'true' && this._isInnerZone) {
                var ownerZoneElement = this._getOwnerZone(this._root.current);
                if (ownerZoneElement !== this._root.current) {
                    var ownerZone = _allInstances[ownerZoneElement.getAttribute(FocusZone_FOCUSZONE_ID_ATTRIBUTE)];
                    return !!ownerZone && ownerZone.focusElement(this._root.current);
                }
                return false;
            }
            else if (!forceIntoFirstElement &&
                this._activeElement &&
                elementContains(this._root.current, this._activeElement) &&
                isElementTabbable(this._activeElement)) {
                this._activeElement.focus();
                return true;
            }
            else {
                var firstChild = this._root.current.firstChild;
                return this.focusElement(getNextElement(this._root.current, firstChild, true));
            }
        }
        return false;
    };
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * onBeforeFocus to created delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param element - The child element within the zone to focus.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focusElement = function (element) {
        var onBeforeFocus = this.props.onBeforeFocus;
        if (onBeforeFocus && !onBeforeFocus(element)) {
            return false;
        }
        if (element) {
            this._setActiveElement(element);
            if (this._activeElement) {
                this._activeElement.focus();
            }
            return true;
        }
        return false;
    };
    FocusZone.prototype._evaluateFocusBeforeRender = function () {
        var root = this._root.current;
        var doc = getDocument(root);
        if (doc) {
            var focusedElement = doc.activeElement;
            // Only update the index path if we are not parked on the root.
            if (focusedElement !== root) {
                var shouldRestoreFocus = elementContains(root, focusedElement);
                this._lastIndexPath = shouldRestoreFocus ? getElementIndexPath(root, doc.activeElement) : undefined;
            }
        }
    };
    /**
     * When focus is in the zone at render time but then all focusable elements are removed,
     * we "park" focus temporarily on the root. Once we update with focusable children, we restore
     * focus to the closest path from previous. If the user tabs away from the parked container,
     * we restore focusability to the pre-parked state.
     */
    FocusZone.prototype._setParkedFocus = function (isParked) {
        var root = this._root.current;
        if (root && this._isParked !== isParked) {
            this._isParked = isParked;
            if (isParked) {
                if (!this.props.allowFocusRoot) {
                    this._parkedTabIndex = root.getAttribute('tabindex');
                    root.setAttribute('tabindex', '-1');
                }
                root.focus();
            }
            else {
                if (!this.props.allowFocusRoot) {
                    if (this._parkedTabIndex) {
                        root.setAttribute('tabindex', this._parkedTabIndex);
                        this._parkedTabIndex = undefined;
                    }
                    else {
                        root.removeAttribute('tabindex');
                    }
                }
            }
        }
    };
    FocusZone.prototype._onBlur = function () {
        this._setParkedFocus(false);
    };
    /**
     * Handle global tab presses so that we can patch tabindexes on the fly.
     */
    FocusZone.prototype._onKeyDownCapture = function (ev) {
        if (ev.which === KeyCodes.tab) {
            this._updateTabIndexes();
        }
    };
    FocusZone.prototype._setActiveElement = function (element, forceAlignemnt) {
        var previousActiveElement = this._activeElement;
        this._activeElement = element;
        if (previousActiveElement) {
            if (isElementFocusZone(previousActiveElement)) {
                this._updateTabIndexes(previousActiveElement);
            }
            previousActiveElement.tabIndex = -1;
        }
        if (this._activeElement) {
            if (!this._focusAlignment || forceAlignemnt) {
                this._setFocusAlignment(element, true, true);
            }
            this._activeElement.tabIndex = 0;
        }
    };
    /**
     * Walk up the dom try to find a focusable element.
     */
    FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
        if (target === this._root.current) {
            return false;
        }
        do {
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                return false;
            }
            if (this._isImmediateDescendantOfZone(target) &&
                target.getAttribute(FocusZone_IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
                EventGroup_EventGroup.raise(target, 'click', null, true);
                return true;
            }
            target = getParent(target, ALLOW_VIRTUAL_ELEMENTS);
        } while (target !== this._root.current);
        return false;
    };
    /**
     * Traverse to find first child zone.
     */
    FocusZone.prototype._getFirstInnerZone = function (rootElement) {
        rootElement = rootElement || this._activeElement || this._root.current;
        if (!rootElement) {
            return null;
        }
        if (isElementFocusZone(rootElement)) {
            return _allInstances[rootElement.getAttribute(FocusZone_FOCUSZONE_ID_ATTRIBUTE)];
        }
        var child = rootElement.firstElementChild;
        while (child) {
            if (isElementFocusZone(child)) {
                return _allInstances[child.getAttribute(FocusZone_FOCUSZONE_ID_ATTRIBUTE)];
            }
            var match = this._getFirstInnerZone(child);
            if (match) {
                return match;
            }
            child = child.nextElementSibling;
        }
        return null;
    };
    FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev, useDefaultWrap) {
        if (useDefaultWrap === void 0) { useDefaultWrap = true; }
        var element = this._activeElement;
        var candidateDistance = -1;
        var candidateElement = undefined;
        var changedFocus = false;
        var isBidirectional = this.props.direction === FocusZoneDirection.bidirectional;
        if (!element || !this._root.current) {
            return false;
        }
        if (this._isElementInput(element)) {
            if (!this._shouldInputLoseFocus(element, isForward)) {
                return false;
            }
        }
        var activeRect = isBidirectional ? element.getBoundingClientRect() : null;
        do {
            element = (isForward ? getNextElement(this._root.current, element) : getPreviousElement(this._root.current, element));
            if (isBidirectional) {
                if (element) {
                    var targetRect = element.getBoundingClientRect();
                    var elementDistance = getDistanceFromCenter(activeRect, targetRect);
                    if (elementDistance === -1 && candidateDistance === -1) {
                        candidateElement = element;
                        break;
                    }
                    if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    if (candidateDistance >= 0 && elementDistance < 0) {
                        break;
                    }
                }
            }
            else {
                candidateElement = element;
                break;
            }
        } while (element);
        // Focus the closest candidate
        if (candidateElement && candidateElement !== this._activeElement) {
            changedFocus = true;
            this.focusElement(candidateElement);
        }
        else if (this.props.isCircularNavigation && useDefaultWrap) {
            if (isForward) {
                return this.focusElement(getNextElement(this._root.current, this._root.current.firstElementChild, true));
            }
            else {
                return this.focusElement(getPreviousElement(this._root.current, this._root.current.lastElementChild, true, true, true));
            }
        }
        return changedFocus;
    };
    FocusZone.prototype._moveFocusDown = function () {
        var _this = this;
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(true, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectBottom = Math.floor(activeRect.bottom);
            if (targetRectTop < activeRectBottom) {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
            if ((targetTop === -1 && targetRectTop >= activeRectBottom) || targetRectTop === targetTop) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    distance = 0;
                }
                else {
                    distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusUp = function () {
        var _this = this;
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(false, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectBottom = Math.floor(targetRect.bottom);
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectTop = Math.floor(activeRect.top);
            if (targetRectBottom > activeRectTop) {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
            if ((targetTop === -1 && targetRectBottom <= activeRectTop) || targetRectTop === targetTop) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    distance = 0;
                }
                else {
                    distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusLeft = function () {
        var _this = this;
        var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);
        if (this._moveFocus(rtl_getRTL(), function (activeRect, targetRect) {
            var distance = -1;
            var topBottomComparison;
            if (rtl_getRTL()) {
                // When in RTL, this comparison should be the same as the one in _moveFocusRight for LTR.
                // Going left at a leftmost rectangle will go down a line instead of up a line like in LTR.
                // This is important, because we want to be comparing the top of the target rect
                // with the bottom of the active rect.
                topBottomComparison = targetRect.top.toFixed(3) < activeRect.bottom.toFixed(3);
            }
            else {
                topBottomComparison = targetRect.bottom.toFixed(3) > activeRect.top.toFixed(3);
            }
            if (topBottomComparison && targetRect.right <= activeRect.right && _this.props.direction !== FocusZoneDirection.vertical) {
                distance = activeRect.right - targetRect.right;
            }
            else {
                if (!shouldWrap) {
                    distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
            }
            return distance;
        }, undefined /*ev*/, shouldWrap)) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusRight = function () {
        var _this = this;
        var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);
        if (this._moveFocus(!rtl_getRTL(), function (activeRect, targetRect) {
            var distance = -1;
            var topBottomComparison;
            if (rtl_getRTL()) {
                // When in RTL, this comparison should be the same as the one in _moveFocusLeft for LTR.
                // Going right at a rightmost rectangle will go up a line instead of down a line like in LTR.
                // This is important, because we want to be comparing the bottom of the target rect
                // with the top of the active rect.
                topBottomComparison = targetRect.bottom.toFixed(3) > activeRect.top.toFixed(3);
            }
            else {
                topBottomComparison = targetRect.top.toFixed(3) < activeRect.bottom.toFixed(3);
            }
            if (topBottomComparison && targetRect.left >= activeRect.left && _this.props.direction !== FocusZoneDirection.vertical) {
                distance = targetRect.left - activeRect.left;
            }
            else if (!shouldWrap) {
                distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }
            return distance;
        }, undefined /*ev*/, shouldWrap)) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
        if (this.props.direction === FocusZoneDirection.bidirectional && (!this._focusAlignment || isHorizontal || isVertical)) {
            var rect = element.getBoundingClientRect();
            var left = rect.left + rect.width / 2;
            var top_1 = rect.top + rect.height / 2;
            if (!this._focusAlignment) {
                this._focusAlignment = { left: left, top: top_1 };
            }
            if (isHorizontal) {
                this._focusAlignment.left = left;
            }
            if (isVertical) {
                this._focusAlignment.top = top_1;
            }
        }
    };
    FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
        return this._getOwnerZone(element) === this._root.current;
    };
    FocusZone.prototype._getOwnerZone = function (element) {
        var parentElement = getParent(element, ALLOW_VIRTUAL_ELEMENTS);
        while (parentElement && parentElement !== this._root.current && parentElement !== document.body) {
            if (isElementFocusZone(parentElement)) {
                return parentElement;
            }
            parentElement = getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
        }
        return this._root.current;
    };
    FocusZone.prototype._updateTabIndexes = function (element) {
        if (!element && this._root.current) {
            this._defaultFocusElement = null;
            element = this._root.current;
            if (this._activeElement && !elementContains(element, this._activeElement)) {
                this._activeElement = null;
            }
        }
        // If active element changes state to disabled, set it to null.
        // Otherwise, we lose keyboard accessibility to other elements in focus zone.
        if (this._activeElement && !isElementTabbable(this._activeElement)) {
            this._activeElement = null;
        }
        var childNodes = element && element.children;
        for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
            var child = childNodes[childIndex];
            if (!isElementFocusZone(child)) {
                // If the item is explicitly set to not be focusable then TABINDEX needs to be set to -1.
                if (child.getAttribute && child.getAttribute(FocusZone_IS_FOCUSABLE_ATTRIBUTE) === 'false') {
                    child.setAttribute(TABINDEX, '-1');
                }
                if (isElementTabbable(child)) {
                    if (this.props.disabled) {
                        child.setAttribute(TABINDEX, '-1');
                    }
                    else if (!this._isInnerZone && ((!this._activeElement && !this._defaultFocusElement) || this._activeElement === child)) {
                        this._defaultFocusElement = child;
                        if (child.getAttribute(TABINDEX) !== '0') {
                            child.setAttribute(TABINDEX, '0');
                        }
                    }
                    else if (child.getAttribute(TABINDEX) !== '-1') {
                        child.setAttribute(TABINDEX, '-1');
                    }
                }
                else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
                    // Disgusting IE hack. Sad face.
                    child.setAttribute('focusable', 'false');
                }
            }
            else if (child.getAttribute(FocusZone_IS_FOCUSABLE_ATTRIBUTE) === 'true') {
                if (!this._isInnerZone && ((!this._activeElement && !this._defaultFocusElement) || this._activeElement === child)) {
                    this._defaultFocusElement = child;
                    if (child.getAttribute(TABINDEX) !== '0') {
                        child.setAttribute(TABINDEX, '0');
                    }
                }
                else if (child.getAttribute(TABINDEX) !== '-1') {
                    child.setAttribute(TABINDEX, '-1');
                }
            }
            this._updateTabIndexes(child);
        }
    };
    FocusZone.prototype._isElementInput = function (element) {
        if (element && element.tagName && (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea')) {
            return true;
        }
        return false;
    };
    FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
        // If a tab was used, we want to focus on the next element.
        if (!this._processingTabKey && element && element.type && ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
            var selectionStart = element.selectionStart;
            var selectionEnd = element.selectionEnd;
            var isRangeSelected = selectionStart !== selectionEnd;
            var inputValue = element.value;
            // We shouldn't lose focus in the following cases:
            // 1. There is range selected.
            // 2. When selection start is larger than 0 and it is backward.
            // 3. when selection start is not the end of length and it is forward.
            // 4. We press any of the arrow keys when our handleTabKey isn't none or undefined (only losing focus if we hit tab)
            // and if shouldInputLoseFocusOnArrowKey is defined, if scenario prefers to not loose the focus which is determined by calling the
            // callback shouldInputLoseFocusOnArrowKey
            if (isRangeSelected ||
                (selectionStart > 0 && !isForward) ||
                (selectionStart !== inputValue.length && isForward) ||
                (!!this.props.handleTabKey && !(this.props.shouldInputLoseFocusOnArrowKey && this.props.shouldInputLoseFocusOnArrowKey(element)))) {
                return false;
            }
        }
        return true;
    };
    FocusZone.prototype._shouldWrapFocus = function (element, noWrapDataAttribute) {
        return !!this.props.checkForNoWrap ? shouldWrapFocus(element, noWrapDataAttribute) : true;
    };
    FocusZone.defaultProps = {
        isCircularNavigation: false,
        direction: FocusZoneDirection.bidirectional
    };
    return FocusZone;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/FocusZone/index.js



// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/FocusZone.js


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.notification.js
var _layersByHostId = {};
var _defaultHostSelector;
/**
 * Register a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
function registerLayer(hostId, layer) {
    if (!_layersByHostId[hostId]) {
        _layersByHostId[hostId] = [];
    }
    _layersByHostId[hostId].push(layer);
}
/**
 * Unregister a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
function unregisterLayer(hostId, layer) {
    if (_layersByHostId[hostId]) {
        var idx = _layersByHostId[hostId].indexOf(layer);
        if (idx >= 0) {
            _layersByHostId[hostId].splice(idx, 1);
            if (_layersByHostId[hostId].length === 0) {
                delete _layersByHostId[hostId];
            }
        }
    }
}
/**
 * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
 * care about the specific host.
 */
function notifyHostChanged(id) {
    if (_layersByHostId[id]) {
        _layersByHostId[id].forEach(function (layer) { return layer.forceUpdate(); });
    }
}
/**
 * Sets the default target selector to use when determining the host in which
 * Layered content will be injected into. If not provided, an element will be
 * created at the end of the document body.
 *
 * Passing in a falsey value will clear the default target and reset back to
 * using a created element at the end of document body.
 */
function setDefaultTarget(selector) {
    _defaultHostSelector = selector;
}
/**
 * Get the default target selector when determining a host
 */
function getDefaultTarget() {
    return _defaultHostSelector;
}

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.base.js






var Layer_base_getClassNames = classNamesFunction();
var Layer_base_LayerBase = /** @class */ (function (_super) {
    __extends(LayerBase, _super);
    function LayerBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = createRef();
        /**
         * rootElement wrapper for setting virtual parent as soon as root element ref is available.
         */
        _this._handleRootElementRef = function (ref) {
            _this._rootElement(ref);
            if (ref) {
                // TODO: Calling _setVirtualParent in this ref wrapper SHOULD allow us to remove
                //    other calls to _setVirtualParent throughout this class. However,
                //    as this is an immediate fix for a P0 issue the existing _setVirtualParent
                //    calls are left for now to minimize potential regression.
                _this._setVirtualParent();
            }
        };
        /**
         * Helper to stop events from bubbling up out of Layer.
         */
        _this._filterEvent = function (ev) {
            // We should just be able to check ev.bubble here and only stop events that are bubbling up. However, even though mouseenter and
            //    mouseleave do NOT bubble up, they are showing up as bubbling. Therefore we stop events based on event name rather than ev.bubble.
            if (ev.eventPhase === Event.BUBBLING_PHASE && ev.type !== 'mouseenter' && ev.type !== 'mouseleave') {
                ev.stopPropagation();
            }
        };
        _this.state = {
            hasMounted: false
        };
        _this._warnDeprecations({
            onLayerMounted: 'onLayerDidMount'
        });
        if (_this.props.hostId) {
            registerLayer(_this.props.hostId, _this);
        }
        return _this;
    }
    LayerBase.prototype.componentWillMount = function () {
        this._layerElement = this._getLayerElement();
    };
    LayerBase.prototype.componentWillUpdate = function () {
        if (!this._layerElement) {
            this._layerElement = this._getLayerElement();
        }
    };
    LayerBase.prototype.componentDidMount = function () {
        // We can safely set state immediately because the ref wrapper will make sure the virtual
        //    parent has been set before componentDidMount is called.
        this.setState({ hasMounted: true });
        this._setVirtualParent();
        var _a = this.props, onLayerDidMount = _a.onLayerDidMount, onLayerMounted = _a.onLayerMounted;
        if (onLayerMounted) {
            onLayerMounted();
        }
        if (onLayerDidMount) {
            onLayerDidMount();
        }
    };
    LayerBase.prototype.componentWillUnmount = function () {
        this._removeLayerElement();
        var _a = this.props, onLayerWillUnmount = _a.onLayerWillUnmount, hostId = _a.hostId;
        if (onLayerWillUnmount) {
            onLayerWillUnmount();
        }
        if (hostId) {
            unregisterLayer(hostId, this);
        }
    };
    LayerBase.prototype.componentDidUpdate = function () {
        this._setVirtualParent();
    };
    LayerBase.prototype.render = function () {
        var classNames = this._getClassNames();
        var eventBubblingEnabled = this.props.eventBubblingEnabled;
        var hasMounted = this.state.hasMounted;
        return (external__react_["createElement"]("span", { className: "ms-layer", ref: this._handleRootElementRef }, this._layerElement &&
            hasMounted &&
            external__react_dom_["createPortal"](eventBubblingEnabled ? (external__react_["createElement"](Fabric, { className: classNames.content }, this.props.children)) : (external__react_["createElement"](Fabric, { className: classNames.content, onClick: this._filterEvent, onContextMenu: this._filterEvent, onDoubleClick: this._filterEvent, onDrag: this._filterEvent, onDragEnd: this._filterEvent, onDragEnter: this._filterEvent, onDragExit: this._filterEvent, onDragLeave: this._filterEvent, onDragOver: this._filterEvent, onDragStart: this._filterEvent, onDrop: this._filterEvent, onMouseDown: this._filterEvent, onMouseEnter: this._filterEvent, onMouseLeave: this._filterEvent, onMouseMove: this._filterEvent, onMouseOver: this._filterEvent, onMouseOut: this._filterEvent, onMouseUp: this._filterEvent, onKeyDown: this._filterEvent, onKeyPress: this._filterEvent, onKeyUp: this._filterEvent, onFocus: this._filterEvent, onBlur: this._filterEvent, onChange: this._filterEvent, onInput: this._filterEvent, onInvalid: this._filterEvent, onSubmit: this._filterEvent }, this.props.children)), this._layerElement)));
    };
    LayerBase.prototype._getClassNames = function () {
        var _a = this.props, className = _a.className, styles = _a.styles, theme = _a.theme;
        var classNames = Layer_base_getClassNames(styles, {
            theme: theme,
            className: className,
            isNotHost: !this.props.hostId
        });
        return classNames;
    };
    LayerBase.prototype._setVirtualParent = function () {
        if (this._rootElement && this._rootElement.current && this._layerElement) {
            setVirtualParent(this._layerElement, this._rootElement.current);
        }
    };
    LayerBase.prototype._getLayerElement = function () {
        var host = this._getHost();
        var classNames = this._getClassNames();
        if (host !== this._host) {
            this._removeLayerElement();
        }
        if (host) {
            this._host = host;
            if (!this._layerElement) {
                var doc = getDocument();
                if (!doc) {
                    return;
                }
                this._layerElement = doc.createElement('div');
                this._layerElement.className = classNames.root;
                setPortalAttribute(this._layerElement);
                host.appendChild(this._layerElement);
            }
        }
        return this._layerElement;
    };
    LayerBase.prototype._removeLayerElement = function () {
        if (this._layerElement) {
            this.props.onLayerWillUnmount();
            var parentNode = this._layerElement.parentNode;
            if (parentNode) {
                parentNode.removeChild(this._layerElement);
            }
            this._layerElement = undefined;
        }
    };
    LayerBase.prototype._getHost = function () {
        var hostId = this.props.hostId;
        var doc = getDocument();
        if (!doc) {
            return undefined;
        }
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            var defaultHostSelector = getDefaultTarget();
            return defaultHostSelector ? doc.querySelector(defaultHostSelector) : doc.body;
        }
    };
    LayerBase.defaultProps = {
        onLayerDidMount: function () { return undefined; },
        onLayerWillUnmount: function () { return undefined; }
    };
    LayerBase = __decorate([
        customizable_customizable('Layer', ['theme', 'hostId'])
    ], LayerBase);
    return LayerBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.styles.js

var Layer_styles_GlobalClassNames = {
    root: 'ms-Layer',
    rootNoHost: 'ms-Layer--fixed',
    content: 'ms-Layer-content'
};
var Layer_styles_getStyles = function (props) {
    var className = props.className, isNotHost = props.isNotHost, theme = props.theme;
    var classNames = getGlobalClassNames(Layer_styles_GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            isNotHost && [
                classNames.rootNoHost,
                {
                    position: 'fixed',
                    zIndex: ZIndexes.Layer,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    visibility: 'hidden'
                }
            ],
            className
        ],
        content: [
            classNames.content,
            {
                visibility: 'visible'
            }
        ]
    };
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.js



var Layer = styled(Layer_base_LayerBase, Layer_styles_getStyles, undefined, {
    scope: 'Layer',
    fields: ['hostId', 'theme', 'styles']
});

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Layer/LayerHost.js




var LayerHost_LayerHost = /** @class */ (function (_super) {
    __extends(LayerHost, _super);
    function LayerHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerHost.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LayerHost.prototype.componentDidMount = function () {
        notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.componentWillUnmount = function () {
        notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.render = function () {
        return external__react_["createElement"]("div", __assign({}, this.props, { className: css('ms-LayerHost', this.props.className) }));
    };
    return LayerHost;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Layer/index.js




// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/Layer.js



// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupSpacer.styles.js

var GroupSpacer_styles_GlobalClassNames = {
    root: 'ms-GroupSpacer'
};
var GroupSpacer_styles_getStyles = function (props) {
    var theme = props.theme, width = props.width;
    var classNames = getGlobalClassNames(GroupSpacer_styles_GlobalClassNames, theme);
    return {
        root: [classNames.root, theme.fonts.medium, { display: 'inline-block', width: width }]
    };
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupSpacer.js



var GroupSpacer_getClassNames = classNamesFunction();
var SPACER_WIDTH = 32;
var GroupSpacer = styled(function (props) {
    var count = props.count, styles = props.styles, theme = props.theme, _a = props.indentWidth, indentWidth = _a === void 0 ? SPACER_WIDTH : _a;
    var classNames = GroupSpacer_getClassNames(styles, {
        theme: theme,
        width: count * indentWidth
    });
    return count > 0 ? external__react_["createElement"]("span", { className: classNames.root }) : null;
}, GroupSpacer_styles_getStyles, undefined, { scope: 'GroupSpacer' });

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.styles.js

var GroupedList_styles_GlobalClassNames = {
    root: 'ms-GroupedList',
    compact: 'ms-GroupedList--Compact',
    group: 'ms-GroupedList-group',
    link: 'ms-Link',
    listCell: 'ms-List-cell'
};
var beziers = {
    easeInOutSine: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
};
var GroupedList_styles_getStyles = function (props) {
    var theme = props.theme, className = props.className, compact = props.compact;
    var palette = theme.palette;
    var classNames = getGlobalClassNames(GroupedList_styles_GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                position: 'relative',
                fontSize: FontSizes.small,
                selectors: (_a = {},
                    _a["." + classNames.listCell] = {
                        minHeight: 38 // be consistent with DetailsList styles
                    },
                    _a)
            },
            compact && [
                classNames.compact,
                {
                    selectors: (_b = {},
                        _b["." + classNames.listCell] = {
                            minHeight: 32 // be consistent with DetailsList styles
                        },
                        _b)
                }
            ],
            className
        ],
        group: [
            classNames.group,
            {
                transition: "background-color " + AnimationVariables.durationValue2 + " " + beziers.easeInOutSine
            }
        ],
        groupIsDropping: [
            {
                backgroundColor: palette.neutralLight
            }
        ]
    };
    var _a, _b;
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRow.styles.js


var DetailsRow_styles_GlobalClassNames = {
    root: 'ms-DetailsRow',
    compact: 'ms-DetailsList--Compact',
    cell: 'ms-DetailsRow-cell',
    cellCheck: 'ms-DetailsRow-cellCheck',
    cellMeasurer: 'ms-DetailsRow-cellMeasurer',
    listCellFirstChild: 'ms-List-cell:first-child',
    isFocusable: "[data-is-focusable='true']",
    isContentUnselectable: 'is-contentUnselectable',
    isSelected: 'is-selected',
    isCheckVisible: 'is-check-visible',
    fields: 'ms-DetailsRow-fields'
};
var DEFAULT_CELL_STYLE_PROPS = {
    cellLeftPadding: 12,
    cellRightPadding: 8,
    cellExtraRightPadding: 24
};
// Source of default row heights to share.
var DEFAULT_ROW_HEIGHTS = {
    rowHeight: 42,
    compactRowHeight: 32
};
// Constant values
var DetailsRow_styles_values = __assign({}, DEFAULT_ROW_HEIGHTS, { rowVerticalPadding: 11, compactRowVerticalPadding: 6, rowShimmerLineHeight: 7, rowShimmerIconPlaceholderHeight: 16, rowShimmerVerticalBorder: 0, compactRowShimmerVerticalBorder: 0 });
// Computed Values
DetailsRow_styles_values = __assign({}, DetailsRow_styles_values, {
    rowShimmerVerticalBorder: (DetailsRow_styles_values.rowHeight - DetailsRow_styles_values.rowShimmerLineHeight) / 2,
    compactRowShimmerVerticalBorder: (DetailsRow_styles_values.compactRowHeight - DetailsRow_styles_values.rowShimmerLineHeight) / 2
});
var DetailsRow_styles_getStyles = function (props) {
    var theme = props.theme, isSelected = props.isSelected, canSelect = props.canSelect, droppingClassName = props.droppingClassName, anySelected = props.anySelected, isCheckVisible = props.isCheckVisible, checkboxCellClassName = props.checkboxCellClassName, compact = props.compact, className = props.className, _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? DEFAULT_CELL_STYLE_PROPS : _a;
    var _b = theme.palette, neutralPrimary = _b.neutralPrimary, white = _b.white, neutralSecondary = _b.neutralSecondary, neutralLighter = _b.neutralLighter, neutralLight = _b.neutralLight, neutralDark = _b.neutralDark, neutralQuaternaryAlt = _b.neutralQuaternaryAlt, black = _b.black;
    var focusBorder = theme.semanticColors.focusBorder;
    var classNames = getGlobalClassNames(DetailsRow_styles_GlobalClassNames, theme);
    var colors = {
        // Default
        defaultHeaderTextColor: neutralPrimary,
        defaultMetaTextColor: neutralSecondary,
        defaultBackgroundColor: white,
        // Hover
        hoverTextColor: neutralPrimary,
        hoverColorBackground: neutralLighter,
        // Selected
        selectedTextColor: neutralDark,
        selectedMetaTextColor: neutralPrimary,
        selectedBackgroundColor: neutralLight,
        // Selected Hover
        selectedHoverTextColor: black,
        selectedHoverMetaTextColor: neutralDark,
        selectedHoverBackgroundColor: neutralQuaternaryAlt,
        // Focus
        focusHeaderTextColor: black,
        focusBackgroundColor: neutralQuaternaryAlt,
        focusMetaTextColor: neutralDark
    };
    var shimmerRightBorderStyle = cellStyleProps.cellRightPadding * 4 + "px solid " + colors.defaultBackgroundColor;
    var shimmerLeftBorderStyle = cellStyleProps.cellLeftPadding + "px solid " + colors.defaultBackgroundColor;
    var selectedStyles = [
        getFocusStyle(theme, -1, undefined, undefined, focusBorder, white),
        classNames.isSelected,
        {
            color: colors.selectedMetaTextColor,
            background: colors.selectedBackgroundColor,
            borderBottom: "1px solid " + white,
            selectors: {
                '&:before': {
                    position: 'absolute',
                    display: 'block',
                    top: -1,
                    height: 1,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    content: '',
                    borderTop: "1px solid " + white
                },
                // Selected State hover
                '&:hover': {
                    background: colors.selectedHoverBackgroundColor,
                    selectors: {
                        // Selected State hover meta cell
                        $cell: {
                            color: colors.selectedHoverMetaTextColor,
                            selectors: (_c = {},
                                _c[HighContrastSelector] = {
                                    color: 'HighlightText',
                                    selectors: {
                                        '> a': {
                                            color: 'HighlightText'
                                        }
                                    }
                                },
                                // Selected State hover Header cell
                                _c['&.$isRowHeader'] = {
                                    color: colors.selectedHoverTextColor,
                                    selectors: (_d = {},
                                        _d[HighContrastSelector] = {
                                            color: 'HighlightText'
                                        },
                                        _d)
                                },
                                _c)
                        }
                    }
                },
                // Focus state
                '&:focus': {
                    background: colors.focusBackgroundColor,
                    selectors: {
                        // Selected State hover meta cell
                        $cell: (_e = {
                                color: colors.focusMetaTextColor
                            },
                            _e[HighContrastSelector] = {
                                color: 'HighlightText',
                                selectors: {
                                    '> a': {
                                        color: 'HighlightText'
                                    }
                                }
                            },
                            // Row header cell
                            _e['&.$isRowHeader'] = {
                                color: colors.focusHeaderTextColor,
                                selectors: (_f = {},
                                    _f[HighContrastSelector] = {
                                        color: 'HighlightText'
                                    },
                                    _f)
                            },
                            _e)
                    }
                }
            }
        }
    ];
    var cannotSelectStyles = [
        classNames.isContentUnselectable,
        {
            userSelect: 'none',
            cursor: 'default'
        }
    ];
    var rootCompactStyles = {
        minHeight: DetailsRow_styles_values.compactRowHeight,
        border: 0
    };
    var cellCompactStyles = {
        minHeight: DetailsRow_styles_values.compactRowHeight,
        paddingTop: DetailsRow_styles_values.compactRowVerticalPadding,
        paddingBottom: DetailsRow_styles_values.compactRowVerticalPadding,
        paddingLeft: cellStyleProps.cellLeftPadding + "px",
        selectors: (_g = {},
            // Masking the running shimmer background with borders
            _g["&$shimmer"] = {
                padding: 0,
                borderLeft: shimmerLeftBorderStyle,
                borderRight: shimmerRightBorderStyle,
                borderTop: DetailsRow_styles_values.compactRowShimmerVerticalBorder + "px solid " + colors.defaultBackgroundColor,
                borderBottom: DetailsRow_styles_values.compactRowShimmerVerticalBorder + "px solid " + colors.defaultBackgroundColor
            },
            // Masking the running shimmer background with borders when it's an Icon placeholder
            _g["&$shimmerIconPlaceholder"] = {
                borderRight: cellStyleProps.cellRightPadding + "px solid " + colors.defaultBackgroundColor,
                borderBottom: (DetailsRow_styles_values.compactRowHeight - DetailsRow_styles_values.rowShimmerIconPlaceholderHeight) / 2 + "px solid " + colors.defaultBackgroundColor,
                borderTop: (DetailsRow_styles_values.compactRowHeight - DetailsRow_styles_values.rowShimmerIconPlaceholderHeight) / 2 + "px solid " + colors.defaultBackgroundColor
            },
            _g)
    };
    var defaultCellStyles = [
        getFocusStyle(theme, -1),
        classNames.cell,
        {
            display: 'inline-block',
            position: 'relative',
            boxSizing: 'border-box',
            minHeight: DetailsRow_styles_values.rowHeight,
            verticalAlign: 'top',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingTop: DetailsRow_styles_values.rowVerticalPadding,
            paddingBottom: DetailsRow_styles_values.rowVerticalPadding,
            paddingLeft: cellStyleProps.cellLeftPadding + "px",
            selectors: (_h = {
                    '& > button': {
                        maxWidth: '100%'
                    }
                },
                _h[classNames.isFocusable] = getFocusStyle(theme, -1, undefined, undefined, neutralSecondary, white),
                _h['&$shimmer'] = {
                    padding: 0,
                    borderLeft: shimmerLeftBorderStyle,
                    borderRight: shimmerRightBorderStyle,
                    borderTop: DetailsRow_styles_values.rowShimmerVerticalBorder + "px solid " + colors.defaultBackgroundColor,
                    borderBottom: DetailsRow_styles_values.rowShimmerVerticalBorder + "px solid " + colors.defaultBackgroundColor
                },
                _h['&$shimmerIconPlaceholder'] = {
                    borderRight: cellStyleProps.cellRightPadding + "px solid " + colors.defaultBackgroundColor,
                    borderBottom: (DetailsRow_styles_values.rowHeight - DetailsRow_styles_values.rowShimmerIconPlaceholderHeight) / 2 + "px solid " + colors.defaultBackgroundColor,
                    borderTop: (DetailsRow_styles_values.rowHeight - DetailsRow_styles_values.rowShimmerIconPlaceholderHeight) / 2 + "px solid " + colors.defaultBackgroundColor
                },
                _h)
        },
        isSelected && {
            selectors: (_j = {
                    '&.$isRowHeader': {
                        color: colors.selectedTextColor,
                        selectors: (_k = {},
                            _k[HighContrastSelector] = {
                                color: 'HighlightText'
                            },
                            _k)
                    }
                },
                _j[HighContrastSelector] = {
                    background: 'Highlight',
                    color: 'HighlightText',
                    '-ms-high-contrast-adjust': 'none',
                    selectors: {
                        a: {
                            color: 'HighlightText'
                        }
                    }
                },
                _j)
        },
        compact && cellCompactStyles
    ];
    return {
        root: [
            classNames.root,
            AnimationClassNames.fadeIn400,
            droppingClassName,
            theme.fonts.small,
            isCheckVisible && classNames.isCheckVisible,
            getFocusStyle(theme, 0, undefined, undefined, focusBorder, white),
            {
                borderBottom: "1px solid " + neutralLighter,
                background: colors.defaultBackgroundColor,
                color: colors.defaultMetaTextColor,
                display: 'inline-flex',
                minWidth: '100%',
                minHeight: DetailsRow_styles_values.rowHeight,
                whiteSpace: 'nowrap',
                padding: 0,
                boxSizing: 'border-box',
                verticalAlign: 'top',
                textAlign: 'left',
                selectors: (_l = {},
                    _l[classNames.listCellFirstChild + " &:before"] = {
                        display: 'none'
                    },
                    _l['&:hover'] = {
                        background: colors.hoverColorBackground
                    },
                    _l['&:hover $check'] = {
                        opacity: 1
                    },
                    _l)
            },
            isSelected && selectedStyles,
            !canSelect && cannotSelectStyles,
            compact && rootCompactStyles,
            className
        ],
        cellUnpadded: [
            {
                paddingRight: cellStyleProps.cellRightPadding + "px"
            }
        ],
        cellPadded: [
            {
                paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding + "px",
                selectors: {
                    '&.$checkCell': {
                        paddingRight: 0
                    }
                }
            }
        ],
        cell: defaultCellStyles,
        cellMeasurer: [
            classNames.cellMeasurer,
            {
                overflow: 'visible',
                whiteSpace: 'nowrap'
            }
        ],
        checkCell: [
            defaultCellStyles,
            classNames.cellCheck,
            checkboxCellClassName,
            {
                padding: 0,
                // Ensure that the check cell covers the top border of the cell.
                // This ensures the click target does not leave a spot which would
                // cause other items to be deselected.
                paddingTop: 1,
                marginTop: -1,
                flexShrink: 0
            }
        ],
        checkCover: [
            {
                position: 'absolute',
                top: -1,
                left: 0,
                bottom: 0,
                right: 0,
                display: 'none'
            },
            anySelected && {
                display: 'block'
            }
        ],
        fields: [
            classNames.fields,
            {
                display: 'flex',
                alignItems: 'stretch'
            }
        ],
        isRowHeader: [
            {
                color: colors.defaultHeaderTextColor,
                fontSize: FontSizes.medium
            }
        ],
        isMultiline: [
            defaultCellStyles,
            {
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                textOverflow: 'clip'
            }
        ],
        shimmer: [],
        shimmerIconPlaceholder: [],
        shimmerLeftBorder: [
            {
                // 40px to take into account the checkbox of items if present.
                borderLeft: "40px solid " + colors.defaultBackgroundColor
            }
        ],
        shimmerBottomBorder: [
            {
                // 1px to take into account the border-bottom when items replace shimmer lines and in default state.
                borderBottom: "1px solid " + colors.defaultBackgroundColor
            }
        ],
        check: []
    };
    var _c, _d, _e, _f, _g, _h, _j, _k, _l;
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupHeader.styles.js


// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.

var GroupHeader_styles_GlobalClassNames = {
    root: 'ms-GroupHeader',
    compact: 'ms-GroupHeader--compact',
    check: 'ms-GroupHeader-check',
    dropIcon: 'ms-GroupHeader-dropIcon',
    expand: 'ms-GroupHeader-expand',
    isCollapsed: 'is-collapsed',
    title: 'ms-GroupHeader-title',
    isSelected: 'is-selected',
    iconTag: 'ms-Icon--Tag',
    group: 'ms-GroupedList-group',
    isDropping: 'is-dropping'
};
var GroupHeader_styles_beziers = {
    easeOutCirc: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
    easeOutSine: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)'
};
var GroupHeader_styles_getStyles = function (props) {
    var theme = props.theme, className = props.className, selected = props.selected, isCollapsed = props.isCollapsed, compact = props.compact;
    var rowHeight = DEFAULT_ROW_HEIGHTS.rowHeight, compactRowHeight = DEFAULT_ROW_HEIGHTS.compactRowHeight;
    var cellLeftPadding = DEFAULT_CELL_STYLE_PROPS.cellLeftPadding; // padding from the source to align GroupHeader title with DetailsRow's first cell.
    var finalRowHeight = compact ? compactRowHeight : rowHeight;
    var semanticColors = theme.semanticColors, palette = theme.palette;
    var classNames = getGlobalClassNames(GroupHeader_styles_GlobalClassNames, theme);
    var checkExpandResetStyles = [
        getFocusStyle(theme),
        {
            cursor: 'default',
            background: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            padding: 0 // cancel default <button> padding
        }
    ];
    return {
        root: [
            classNames.root,
            getFocusStyle(theme),
            theme.fonts.medium,
            {
                borderBottom: "1px solid " + semanticColors.listBackground,
                cursor: 'default',
                userSelect: 'none',
                selectors: (_a = {
                        ':hover': {
                            background: semanticColors.listItemBackgroundHovered
                        },
                        ':hover $check': {
                            opacity: 1
                        },
                        ':focus $check': {
                            opacity: 1
                        }
                    },
                    _a[":global(." + classNames.group + "." + classNames.isDropping + ")"] = {
                        selectors: {
                            '> $root $dropIcon': {
                                transition: "transform " + AnimationVariables.durationValue4 + " " + GroupHeader_styles_beziers.easeOutCirc + " opacity " + AnimationVariables.durationValue1 + " " + GroupHeader_styles_beziers.easeOutSine,
                                transitionDelay: AnimationVariables.durationValue3,
                                opacity: 1,
                                transform: "rotate(0.2deg) scale(1);" // rotation prevents jittery motion in IE
                            },
                            $check: {
                                opacity: 0
                            }
                        }
                    },
                    _a)
            },
            selected && [
                classNames.isSelected,
                {
                    background: semanticColors.listItemBackgroundChecked,
                    selectors: {
                        ':hover': {
                            background: semanticColors.listItemBackgroundCheckedHovered
                        },
                        $check: {
                            opacity: 1
                        }
                    }
                }
            ],
            compact && [classNames.compact, { border: 'none' }],
            className
        ],
        groupHeaderContainer: [
            {
                display: 'flex',
                alignItems: 'center',
                height: finalRowHeight
            }
        ],
        headerCount: [
            {
                padding: '0px 4px'
            }
        ],
        check: [
            classNames.check,
            checkExpandResetStyles,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // paddingTop and marginTop brought from the DetailsRow.styles.ts with explanation below.
                // Ensure that the check cell covers the top border of the cell.
                // This ensures the click target does not leave a spot which would
                // cause other items to be deselected.
                paddingTop: 1,
                marginTop: -1,
                opacity: 0,
                width: '40px',
                height: finalRowHeight,
                selectors: {
                    ':focus': {
                        opacity: 1
                    }
                }
            }
        ],
        expand: [
            classNames.expand,
            checkExpandResetStyles,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: compact ? FontSizes.mediumPlus : 18,
                width: SPACER_WIDTH,
                height: finalRowHeight,
                color: selected ? palette.neutralPrimary : palette.neutralSecondary,
                selectors: {
                    ':hover': {
                        backgroundColor: selected ? palette.neutralQuaternary : palette.neutralLight
                    },
                    ':active': {
                        backgroundColor: selected ? palette.neutralTertiaryAlt : palette.neutralQuaternaryAlt
                    }
                }
            }
        ],
        expandIsCollapsed: [
            isCollapsed
                ? [
                    classNames.isCollapsed,
                    {
                        transform: 'rotate(0deg)',
                        transformOrigin: '50% 50%',
                        transition: 'transform .1s linear'
                    }
                ]
                : {
                    transform: 'rotate(90deg)',
                    transformOrigin: '50% 50%',
                    transition: 'transform .1s linear'
                }
        ],
        title: [
            classNames.title,
            {
                paddingLeft: cellLeftPadding,
                fontSize: compact ? FontSizes.large : FontSizes.xLarge,
                fontWeight: FontWeights.semilight,
                cursor: 'pointer',
                outline: 0,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
            }
        ],
        dropIcon: [
            classNames.dropIcon,
            {
                position: 'absolute',
                left: -26,
                fontSize: IconFontSizes.large,
                color: palette.neutralSecondary,
                transition: "transform " + AnimationVariables.durationValue2 + " " + GroupHeader_styles_beziers.easeInBack + ", opacity " + AnimationVariables.durationValue4 + " " + GroupHeader_styles_beziers.easeOutSine,
                opacity: 0,
                transform: 'rotate(0.2deg) scale(0.65)',
                transformOrigin: '10px 10px',
                selectors: (_b = {},
                    _b[":global(." + classNames.iconTag + ")"] = {
                        position: 'absolute'
                    },
                    _b)
            }
        ]
    };
    var _a, _b;
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Check/Check.base.js





var Check_base_getClassNames = classNamesFunction();
var Check_base_CheckBase = /** @class */ (function (_super) {
    __extends(CheckBase, _super);
    function CheckBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckBase.prototype.shouldComponentUpdate = function (newProps) {
        return this.props.checked !== newProps.checked || this.props.theme !== newProps.theme || this.props.className !== newProps.className;
    };
    CheckBase.prototype.render = function () {
        var _a = this.props, checked = _a.checked, className = _a.className, theme = _a.theme, styles = _a.styles;
        var classNames = Check_base_getClassNames(styles, { theme: theme, className: className, checked: checked });
        return (external__react_["createElement"]("div", { className: classNames.root },
            external__react_["createElement"](Icon, { iconName: "CircleRing", className: classNames.circle }),
            external__react_["createElement"](Icon, { iconName: "StatusCircleCheckmark", className: classNames.check })));
    };
    CheckBase.defaultProps = {
        checked: false
    };
    return CheckBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Check/Check.styles.js


var Check_styles_GlobalClassNames = {
    root: 'ms-Check',
    circle: 'ms-Check-circle',
    check: 'ms-Check-check'
};
var Check_styles_getStyles = function (props) {
    var _a = props.checkBoxHeight, checkBoxHeight = _a === void 0 ? '18px' : _a, checked = props.checked, className = props.className, theme = props.theme;
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var isRTL = rtl_getRTL();
    var classNames = getGlobalClassNames(Check_styles_GlobalClassNames, theme);
    var sharedCircleCheck = {
        fontSize: checkBoxHeight,
        position: 'absolute',
        left: 0,
        top: 0,
        width: checkBoxHeight,
        height: checkBoxHeight,
        textAlign: 'center',
        verticalAlign: 'middle'
    };
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                // lineHeight currently needs to be a string to output without 'px'
                lineHeight: '1',
                width: checkBoxHeight,
                height: checkBoxHeight,
                verticalAlign: 'top',
                position: 'relative',
                userSelect: 'none',
                selectors: {
                    ':before': {
                        content: '""',
                        position: 'absolute',
                        top: '1px',
                        right: '1px',
                        bottom: '1px',
                        left: '1px',
                        borderRadius: '50%',
                        opacity: 1,
                        background: semanticColors.bodyBackground
                    },
                    /**
                     * TODO: Come back to this once .checkHost has been
                     * converted to mergeStyles
                     */
                    '$checkHost:hover &, $checkHost:focus &, &:hover, &:focus': {
                        opacity: 1
                    }
                }
            },
            checked && [
                'is-checked',
                {
                    selectors: {
                        ':before': {
                            background: palette.themePrimary,
                            opacity: 1,
                            selectors: (_b = {},
                                _b[HighContrastSelector] = {
                                    background: 'Window'
                                },
                                _b)
                        }
                    }
                }
            ],
            className
        ],
        circle: [
            classNames.circle,
            sharedCircleCheck,
            {
                color: palette.neutralTertiaryAlt,
                selectors: (_c = {},
                    _c[HighContrastSelector] = {
                        color: 'WindowText'
                    },
                    _c)
            },
            checked && {
                color: palette.white
            }
        ],
        check: [
            classNames.check,
            sharedCircleCheck,
            {
                opacity: 0,
                color: palette.neutralTertiaryAlt,
                fontSize: '16px',
                left: isRTL ? '-0.5px' : '.5px',
                selectors: (_d = {
                        ':hover': {
                            opacity: 1
                        }
                    },
                    _d[HighContrastSelector] = {
                        MsHighContrastAdjust: 'none'
                    },
                    _d)
            },
            checked && {
                opacity: 1,
                color: palette.white,
                fontWeight: 900,
                selectors: (_e = {},
                    _e[HighContrastSelector] = {
                        border: 'none',
                        color: 'WindowText'
                    },
                    _e)
            }
        ],
        checkHost: [{}]
    };
    var _b, _c, _d, _e;
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Check/Check.js



var Check = styled(Check_base_CheckBase, Check_styles_getStyles, undefined, {
    scope: 'Check'
});

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Check/index.js



// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/Check.js


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Spinner/Spinner.types.js
/**
 * Possible variations of the spinner circle size.
 */
var SpinnerSize;
(function (SpinnerSize) {
    /**
     * 12px Spinner diameter
     */
    SpinnerSize[SpinnerSize["xSmall"] = 0] = "xSmall";
    /**
     * 16px Spinner diameter
     */
    SpinnerSize[SpinnerSize["small"] = 1] = "small";
    /**
     * 20px Spinner diameter
     */
    SpinnerSize[SpinnerSize["medium"] = 2] = "medium";
    /**
     * 28px Spinner diameter
     */
    SpinnerSize[SpinnerSize["large"] = 3] = "large";
})(SpinnerSize || (SpinnerSize = {}));
/**
 * Deprecated at v2.0.0, use `SpinnerSize` instead.
 * @deprecated Use `SpinnerSize` instead.
 */
var SpinnerType;
(function (SpinnerType) {
    /**
     * Deprecated and will be removed at \>= 2.0.0. Use `SpinnerSize.medium` instead.
     * @deprecated Use `SpinnerSize.medium` instead.
     */
    SpinnerType[SpinnerType["normal"] = 0] = "normal";
    /**
     * Deprecated and will be removed at \>= 2.0.0. Use `SpinnerSize.large` instead.
     * @deprecated Use `SpinnerSize.large` instead.
     */
    SpinnerType[SpinnerType["large"] = 1] = "large";
})(SpinnerType || (SpinnerType = {}));

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Spinner/Spinner.base.js




var Spinner_base_getClassNames = classNamesFunction();
var Spinner_base_SpinnerBase = /** @class */ (function (_super) {
    __extends(SpinnerBase, _super);
    function SpinnerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinnerBase.prototype.render = function () {
        var _a = this.props, type = _a.type, size = _a.size, ariaLabel = _a.ariaLabel, ariaLive = _a.ariaLive, styles = _a.styles, label = _a.label, theme = _a.theme, className = _a.className, labelPosition = _a.labelPosition;
        var statusMessage = ariaLabel || label;
        var nativeProps = getNativeProps(this.props, divProperties, ['size']);
        // SpinnerType is deprecated. If someone is still using this property, rather than putting the SpinnerType into the ISpinnerStyleProps,
        // we'll map SpinnerType to its equivalent SpinnerSize and pass that in. Once SpinnerType finally goes away we should delete this.
        var styleSize = size;
        if (styleSize === undefined && type !== undefined) {
            styleSize = type === SpinnerType.large ? SpinnerSize.large : SpinnerSize.medium;
        }
        var classNames = Spinner_base_getClassNames(styles, {
            theme: theme,
            size: styleSize,
            className: className,
            labelPosition: labelPosition
        });
        return (external__react_["createElement"]("div", __assign({}, nativeProps, { className: classNames.root }),
            external__react_["createElement"]("div", { className: classNames.circle }),
            label && external__react_["createElement"]("div", { className: classNames.label }, label),
            statusMessage && (external__react_["createElement"]("div", { role: "status", "aria-live": ariaLive },
                external__react_["createElement"](DelayedRender_DelayedRender, null,
                    external__react_["createElement"]("div", { className: classNames.screenReaderText }, statusMessage))))));
    };
    SpinnerBase.defaultProps = {
        size: SpinnerSize.medium,
        ariaLive: 'polite',
        labelPosition: 'bottom'
    };
    return SpinnerBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Spinner/Spinner.styles.js


var Spinner_styles_GlobalClassNames = {
    root: 'ms-Spinner',
    circle: 'ms-Spinner-circle',
    label: 'ms-Spinner-label'
};
var spinAnimation = keyframes({
    '0%': {
        transform: 'rotate(0deg)'
    },
    '100%': {
        transform: 'rotate(360deg)'
    }
});
var Spinner_styles_getStyles = function (props) {
    var theme = props.theme, size = props.size, className = props.className, labelPosition = props.labelPosition;
    var palette = theme.palette;
    var classNames = getGlobalClassNames(Spinner_styles_GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            },
            labelPosition === 'top' && {
                flexDirection: 'column-reverse'
            },
            labelPosition === 'right' && {
                flexDirection: 'row'
            },
            labelPosition === 'left' && {
                flexDirection: 'row-reverse'
            },
            className
        ],
        circle: [
            classNames.circle,
            {
                boxSizing: 'border-box',
                borderRadius: '50%',
                border: '1.5px solid ' + palette.themeLight,
                borderTopColor: palette.themePrimary,
                animationName: spinAnimation,
                animationDuration: '1.3s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'cubic-bezier(.53,.21,.29,.67)',
                selectors: (_a = {},
                    _a[HighContrastSelector] = {
                        borderTopColor: 'Highlight'
                    },
                    _a)
            },
            size === SpinnerSize.xSmall && [
                'ms-Spinner--xSmall',
                {
                    width: 12,
                    height: 12
                }
            ],
            size === SpinnerSize.small && [
                'ms-Spinner--small',
                {
                    width: 16,
                    height: 16
                }
            ],
            size === SpinnerSize.medium && [
                'ms-Spinner--medium',
                {
                    width: 20,
                    height: 20
                }
            ],
            size === SpinnerSize.large && [
                'ms-Spinner--large',
                {
                    width: 28,
                    height: 28
                }
            ]
        ],
        label: [
            classNames.label,
            {
                color: palette.themePrimary,
                margin: '10px 0 0',
                textAlign: 'center'
            },
            labelPosition === 'top' && {
                margin: '0 0 10px'
            },
            labelPosition === 'right' && {
                margin: '0 0 0 10px'
            },
            labelPosition === 'left' && {
                margin: '0 10px 0 0'
            }
        ],
        screenReaderText: hiddenContentStyle
    };
    var _a;
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Spinner/Spinner.js



var Spinner = styled(Spinner_base_SpinnerBase, Spinner_styles_getStyles, undefined, { scope: 'Spinner' });

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Spinner/index.js




// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/Spinner.js


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupHeader.base.js









var GroupHeader_base_getClassNames = classNamesFunction();
var GroupHeader_base_GroupHeaderBase = /** @class */ (function (_super) {
    __extends(GroupHeaderBase, _super);
    function GroupHeaderBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onToggleCollapse = function (ev) {
            var _a = _this.props, group = _a.group, onToggleCollapse = _a.onToggleCollapse, isGroupLoading = _a.isGroupLoading;
            var isCollapsed = _this.state.isCollapsed;
            var newCollapsed = !isCollapsed;
            var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(group);
            _this.setState({
                isCollapsed: newCollapsed,
                isLoadingVisible: newLoadingVisible
            });
            if (onToggleCollapse) {
                onToggleCollapse(group);
            }
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onToggleSelectGroupClick = function (ev) {
            var _a = _this.props, onToggleSelectGroup = _a.onToggleSelectGroup, group = _a.group;
            if (onToggleSelectGroup) {
                onToggleSelectGroup(group);
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._onHeaderClick = function () {
            var _a = _this.props, group = _a.group, onGroupHeaderClick = _a.onGroupHeaderClick, onToggleSelectGroup = _a.onToggleSelectGroup;
            if (onGroupHeaderClick) {
                onGroupHeaderClick(group);
            }
            else if (onToggleSelectGroup) {
                onToggleSelectGroup(group);
            }
        };
        _this._onRenderTitle = function (props) {
            var group = props.group;
            if (!group) {
                return null;
            }
            return (external__react_["createElement"]("div", { className: _this._classNames.title },
                external__react_["createElement"]("span", null, group.name),
                external__react_["createElement"]("span", { className: _this._classNames.headerCount },
                    "(",
                    group.count,
                    group.hasMoreData && '+',
                    ")")));
        };
        _this.state = {
            isCollapsed: (_this.props.group && _this.props.group.isCollapsed),
            isLoadingVisible: false
        };
        return _this;
    }
    GroupHeaderBase.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.group) {
            var newCollapsed = newProps.group.isCollapsed;
            var isGroupLoading = newProps.headerProps && newProps.headerProps.isGroupLoading;
            var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(newProps.group);
            this.setState({
                isCollapsed: newCollapsed,
                isLoadingVisible: newLoadingVisible
            });
        }
    };
    GroupHeaderBase.prototype.render = function () {
        var _a = this.props, group = _a.group, groupLevel = _a.groupLevel, viewport = _a.viewport, selectionMode = _a.selectionMode, loadingText = _a.loadingText, isSelected = _a.isSelected, selected = _a.selected, indentWidth = _a.indentWidth, _b = _a.onRenderTitle, onRenderTitle = _b === void 0 ? this._onRenderTitle : _b, _c = _a.isCollapsedGroupSelectVisible, isCollapsedGroupSelectVisible = _c === void 0 ? true : _c, expandButtonProps = _a.expandButtonProps, selectAllButtonProps = _a.selectAllButtonProps, theme = _a.theme, styles = _a.styles, className = _a.className, groupedListId = _a.groupedListId, compact = _a.compact;
        var _d = this.state, isCollapsed = _d.isCollapsed, isLoadingVisible = _d.isLoadingVisible;
        var canSelectGroup = selectionMode === SelectionMode.multiple;
        var isSelectionCheckVisible = canSelectGroup && (isCollapsedGroupSelectVisible || !(group && group.isCollapsed));
        var currentlySelected = isSelected || selected;
        var isRTL = rtl_getRTL();
        this._classNames = GroupHeader_base_getClassNames(styles, {
            theme: theme,
            className: className,
            selected: currentlySelected,
            isCollapsed: isCollapsed,
            compact: compact
        });
        if (!group) {
            return null;
        }
        return (external__react_["createElement"]("div", { className: this._classNames.root, style: viewport ? { minWidth: viewport.width } : {}, onClick: this._onHeaderClick, "aria-label": group.ariaLabel || group.name, "data-is-focusable": true },
            external__react_["createElement"](FocusZone_FocusZone, { className: this._classNames.groupHeaderContainer, direction: FocusZoneDirection.horizontal },
                isSelectionCheckVisible ? (external__react_["createElement"]("button", __assign({ type: "button", className: this._classNames.check, role: "checkbox", "aria-checked": !!currentlySelected, "data-selection-toggle": true, onClick: this._onToggleSelectGroupClick }, selectAllButtonProps),
                    external__react_["createElement"](Check, { checked: currentlySelected }))) : (selectionMode !== SelectionMode.none && external__react_["createElement"](GroupSpacer, { indentWidth: indentWidth, count: 1 })),
                external__react_["createElement"](GroupSpacer, { indentWidth: indentWidth, count: groupLevel }),
                external__react_["createElement"]("div", { className: this._classNames.dropIcon },
                    external__react_["createElement"](Icon, { iconName: "Tag" })),
                external__react_["createElement"]("button", __assign({ type: "button", className: this._classNames.expand, onClick: this._onToggleCollapse, "aria-expanded": group ? !group.isCollapsed : undefined, "aria-controls": group && !group.isCollapsed ? groupedListId : undefined }, expandButtonProps),
                    external__react_["createElement"](Icon, { className: this._classNames.expandIsCollapsed, iconName: isRTL ? 'ChevronLeftMed' : 'ChevronRightMed' })),
                onRenderTitle(this.props, this._onRenderTitle),
                isLoadingVisible && external__react_["createElement"](Spinner, { label: loadingText }))));
    };
    GroupHeaderBase.defaultProps = {
        expandButtonProps: { 'aria-label': 'expand collapse group' }
    };
    return GroupHeaderBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupHeader.js



var GroupHeader = styled(GroupHeader_base_GroupHeaderBase, GroupHeader_styles_getStyles, undefined, {
    scope: 'GroupHeader'
});

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupShowAll.styles.js

var GroupShowAll_styles_GlobalClassNames = {
    root: 'ms-GroupShowAll',
    link: 'ms-Link'
};
var GroupShowAll_styles_getStyles = function (props) {
    var theme = props.theme;
    var classNames = getGlobalClassNames(GroupShowAll_styles_GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                position: 'relative',
                padding: '10px 84px',
                cursor: 'pointer',
                selectors: (_a = {},
                    _a["." + classNames.link] = {
                        fontSize: FontSizes.small
                    },
                    _a)
            }
        ]
    };
    var _a;
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConstants.js
var KTP_PREFIX = 'ktp';
var KTP_SEPARATOR = '-';
var KTP_FULL_PREFIX = KTP_PREFIX + KTP_SEPARATOR;
var DATAKTP_TARGET = 'data-ktp-target';
var DATAKTP_EXECUTE_TARGET = 'data-ktp-execute-target';
var KTP_LAYER_ID = 'ktp-layer-id';
var KTP_ARIA_SEPARATOR = ', ';
// Events
var KeytipEvents;
(function (KeytipEvents) {
    KeytipEvents.KEYTIP_ADDED = 'keytipAdded';
    KeytipEvents.KEYTIP_REMOVED = 'keytipRemoved';
    KeytipEvents.KEYTIP_UPDATED = 'keytipUpdated';
    KeytipEvents.PERSISTED_KEYTIP_ADDED = 'persistedKeytipAdded';
    KeytipEvents.PERSISTED_KEYTIP_REMOVED = 'persistedKeytipRemoved';
    KeytipEvents.PERSISTED_KEYTIP_EXECUTE = 'persistedKeytipExecute';
    KeytipEvents.ENTER_KEYTIP_MODE = 'enterKeytipMode';
    KeytipEvents.EXIT_KEYTIP_MODE = 'exitKeytipMode';
})(KeytipEvents || (KeytipEvents = {}));

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipManager.js



/**
 * This class is responsible for handling registering, updating, and unregistering of keytips
 */
var KeytipManager_KeytipManager = /** @class */ (function () {
    function KeytipManager() {
        this.keytips = [];
        this.persistedKeytips = [];
        // This is (and should be) updated and kept in sync
        // with the inKeytipMode in KeytipLayer.
        this.inKeytipMode = false;
        // Boolean that gets checked before entering keytip mode by the KeytipLayer
        // Used for an override in special cases (e.g. Disable entering keytip mode when a modal is shown)
        this.shouldEnterKeytipMode = true;
    }
    /**
     * Static function to get singleton KeytipManager instance
     *
     * @returns {KeytipManager} Singleton KeytipManager instance
     */
    KeytipManager.getInstance = function () {
        return this._instance;
    };
    /**
     * Registers a keytip
     *
     * @param keytipProps - Keytip to register
     * @param persisted - T/F if this keytip should be persisted, default is false
     * @returns {string} Unique ID for this keytip
     */
    KeytipManager.prototype.register = function (keytipProps, persisted) {
        if (persisted === void 0) { persisted = false; }
        var props = keytipProps;
        if (!persisted) {
            // Add the overflowSetSequence if necessary
            props = this.addParentOverflow(keytipProps);
        }
        // Create a unique keytip
        var uniqueKeytip = this._getUniqueKtp(props);
        // Add to array
        persisted ? this.persistedKeytips.push(uniqueKeytip) : this.keytips.push(uniqueKeytip);
        var event = persisted ? KeytipEvents.PERSISTED_KEYTIP_ADDED : KeytipEvents.KEYTIP_ADDED;
        EventGroup_EventGroup.raise(this, event, {
            keytip: props,
            uniqueID: uniqueKeytip.uniqueID
        });
        return uniqueKeytip.uniqueID;
    };
    /**
     * Update a keytip
     *
     * @param keytipProps - Keytip to update
     * @param uniqueID - Unique ID of this keytip
     */
    KeytipManager.prototype.update = function (keytipProps, uniqueID) {
        var newKeytipProps = this.addParentOverflow(keytipProps);
        var uniqueKeytip = this._getUniqueKtp(newKeytipProps, uniqueID);
        var keytipIndex = findIndex(this.keytips, function (ktp) {
            return ktp.uniqueID === uniqueID;
        });
        if (keytipIndex >= 0) {
            // Update everything except 'visible'
            uniqueKeytip.keytip.visible = this.keytips[keytipIndex].keytip.visible;
            // Update keytip in this.keytips
            this.keytips = replaceElement(this.keytips, uniqueKeytip, keytipIndex);
            // Raise event
            EventGroup_EventGroup.raise(this, KeytipEvents.KEYTIP_UPDATED, {
                keytip: uniqueKeytip.keytip,
                uniqueID: uniqueKeytip.uniqueID
            });
        }
    };
    /**
     * Unregisters a keytip
     *
     * @param keytipToRemove - IKeytipProps of the keytip to remove
     * @param uniqueID - Unique ID of this keytip
     * @param persisted - T/F if this keytip should be persisted, default is false
     */
    KeytipManager.prototype.unregister = function (keytipToRemove, uniqueID, persisted) {
        if (persisted === void 0) { persisted = false; }
        if (persisted) {
            // Remove keytip from this.persistedKeytips
            this.persistedKeytips = this.persistedKeytips.filter(function (uniqueKtp) {
                return uniqueKtp.uniqueID !== uniqueID;
            });
        }
        else {
            // Remove keytip from this.keytips
            this.keytips = this.keytips.filter(function (uniqueKtp) {
                return uniqueKtp.uniqueID !== uniqueID;
            });
        }
        var event = persisted ? KeytipEvents.PERSISTED_KEYTIP_REMOVED : KeytipEvents.KEYTIP_REMOVED;
        EventGroup_EventGroup.raise(this, event, {
            keytip: keytipToRemove,
            uniqueID: uniqueID
        });
    };
    /**
     * Manual call to enter keytip mode
     */
    KeytipManager.prototype.enterKeytipMode = function () {
        EventGroup_EventGroup.raise(this, KeytipEvents.ENTER_KEYTIP_MODE);
    };
    /**
     * Manual call to exit keytip mode
     */
    KeytipManager.prototype.exitKeytipMode = function () {
        EventGroup_EventGroup.raise(this, KeytipEvents.EXIT_KEYTIP_MODE);
    };
    /**
     * Gets all IKeytipProps from this.keytips
     *
     * @returns {IKeytipProps[]} All keytips stored in the manager
     */
    KeytipManager.prototype.getKeytips = function () {
        return this.keytips.map(function (uniqueKeytip) {
            return uniqueKeytip.keytip;
        });
    };
    /**
     * Adds the overflowSetSequence to the keytipProps if its parent keytip also has it
     *
     * @param keytipProps - Keytip props to add overflowSetSequence to if necessary
     * @returns {IKeytipProps} - Modified keytip props, if needed to be modified
     */
    KeytipManager.prototype.addParentOverflow = function (keytipProps) {
        var fullSequence = keytipProps.keySequences.slice();
        fullSequence.pop();
        if (fullSequence.length !== 0) {
            var parentKeytip = find(this.getKeytips(), function (keytip) {
                return arraysEqual(fullSequence, keytip.keySequences);
            });
            if (parentKeytip && parentKeytip.overflowSetSequence) {
                return __assign({}, keytipProps, { overflowSetSequence: parentKeytip.overflowSetSequence });
            }
        }
        return keytipProps;
    };
    /**
     * Public function to bind for overflow items that have a submenu
     *
     * @param overflowButtonSequences
     * @param keytipSequences
     */
    KeytipManager.prototype.menuExecute = function (overflowButtonSequences, keytipSequences) {
        EventGroup_EventGroup.raise(this, KeytipEvents.PERSISTED_KEYTIP_EXECUTE, {
            overflowButtonSequences: overflowButtonSequences,
            keytipSequences: keytipSequences
        });
    };
    /**
     * Creates an IUniqueKeytip object
     *
     * @param keytipProps - IKeytipProps
     * @param uniqueID - Unique ID, will default to the next unique ID if not passed
     * @returns {IUniqueKeytip} IUniqueKeytip object
     */
    KeytipManager.prototype._getUniqueKtp = function (keytipProps, uniqueID) {
        if (uniqueID === void 0) { uniqueID = getId(); }
        return { keytip: __assign({}, keytipProps), uniqueID: uniqueID };
    };
    KeytipManager._instance = new KeytipManager();
    return KeytipManager;
}());


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipUtils.js


/**
 * Converts a whole set of KeySequences into one keytip ID, which will be the ID for the last keytip sequence specified
 * keySequences should not include the initial keytip 'start' sequence.
 *
 * @param keySequences - Full path of IKeySequences for one keytip.
 * @returns {string} String to use for the keytip ID.
 */
function sequencesToID(keySequences) {
    return keySequences.reduce(function (prevValue, keySequence) {
        return prevValue + KTP_SEPARATOR + keySequence.split('').join(KTP_SEPARATOR);
    }, KTP_PREFIX);
}
/**
 * Merges an overflow sequence with a key sequence.
 *
 * @param keySequences - Full sequence for one keytip.
 * @param overflowKeySequences - Full overflow keytip sequence.
 * @returns {string[]} Sequence that will be used by the keytip when in the overflow.
 */
function mergeOverflows(keySequences, overflowKeySequences) {
    var overflowSequenceLen = overflowKeySequences.length;
    var overflowSequence = overflowKeySequences.slice().pop();
    var newKeySequences = keySequences.slice();
    return addElementAtIndex(newKeySequences, overflowSequenceLen - 1, overflowSequence);
}
/**
 * Constructs the data-ktp-target attribute selector from a full key sequence.
 *
 * @param keySequences - Full string[] for a Keytip.
 * @returns {string} String selector to use to query for the keytip target.
 */
function ktpTargetFromSequences(keySequences) {
    return '[' + DATAKTP_TARGET + '="' + sequencesToID(keySequences) + '"]';
}
/**
 * Constructs the data-ktp-execute-target attribute selector from a keytip ID.
 *
 * @param keytipId - ID of the Keytip.
 * @returns {string} String selector to use to query for the keytip execute target.
 */
function ktpTargetFromId(keytipId) {
    return '[' + DATAKTP_EXECUTE_TARGET + '="' + keytipId + '"]';
}
/**
 * Gets the aria-describedby value to put on the component with this keytip.
 *
 * @param keySequences - KeySequences of the keytip.
 * @returns {string} The aria-describedby value to set on the component with this keytip.
 */
function getAriaDescribedBy(keySequences) {
    var describedby = ' ' + KTP_LAYER_ID;
    if (!keySequences.length) {
        // Return just the layer ID
        return describedby;
    }
    return describedby + ' ' + sequencesToID(keySequences);
}

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/KeytipData/KeytipData.js




/**
 * A small element to help the target component correctly read out its aria-describedby for its Keytip
 */
var KeytipData_KeytipData = /** @class */ (function (_super) {
    __extends(KeytipData, _super);
    function KeytipData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._keytipManager = KeytipManager_KeytipManager.getInstance();
        return _this;
    }
    KeytipData.prototype.componentDidMount = function () {
        // Register Keytip in KeytipManager
        if (this.props.keytipProps) {
            this._uniqueId = this._keytipManager.register(this._getKtpProps());
        }
    };
    KeytipData.prototype.componentWillUnmount = function () {
        // Unregister Keytip in KeytipManager
        this.props.keytipProps && this._keytipManager.unregister(this._getKtpProps(), this._uniqueId);
    };
    KeytipData.prototype.componentDidUpdate = function () {
        // Update Keytip in KeytipManager
        this.props.keytipProps && this._keytipManager.update(this._getKtpProps(), this._uniqueId);
    };
    KeytipData.prototype.render = function () {
        var _a = this.props, children = _a.children, keytipProps = _a.keytipProps, ariaDescribedBy = _a.ariaDescribedBy;
        var nativeKeytipProps = {};
        if (keytipProps) {
            nativeKeytipProps = this._getKtpAttrs(keytipProps, ariaDescribedBy);
        }
        return children(nativeKeytipProps);
    };
    KeytipData.prototype._getKtpProps = function () {
        return __assign({ disabled: this.props.disabled }, this.props.keytipProps);
    };
    /**
     * Gets the aria- and data- attributes to attach to the component
     * @param keytipProps
     * @param describedByPrepend
     */
    KeytipData.prototype._getKtpAttrs = function (keytipProps, describedByPrepend) {
        if (keytipProps) {
            // Add the parent overflow sequence if necessary
            var newKeytipProps = this._keytipManager.addParentOverflow(keytipProps);
            // Construct aria-describedby and data-ktp-id attributes and return
            var ariaDescribedBy = getAriaDescribedBy(newKeytipProps.keySequences);
            var keySequences = newKeytipProps.keySequences.slice();
            if (newKeytipProps.overflowSetSequence) {
                keySequences = mergeOverflows(keySequences, newKeytipProps.overflowSetSequence);
            }
            var ktpId = sequencesToID(keySequences);
            return {
                'aria-describedby': mergeAriaAttributeValues(describedByPrepend, ariaDescribedBy),
                'data-ktp-target': ktpId,
                'data-ktp-execute-target': ktpId
            };
        }
        return undefined;
    };
    return KeytipData;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/KeytipData/index.js


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/KeytipData.js


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Link/Link.base.js




var Link_base_getClassNames = classNamesFunction();
var Link_base_LinkBase = /** @class */ (function (_super) {
    __extends(LinkBase, _super);
    function LinkBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._link = external__react_["createRef"]();
        _this._onClick = function (ev) {
            var _a = _this.props, onClick = _a.onClick, disabled = _a.disabled;
            if (disabled) {
                ev.preventDefault();
            }
            else if (onClick) {
                onClick(ev);
            }
        };
        return _this;
    }
    LinkBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, children = _a.children, className = _a.className, href = _a.href, theme = _a.theme, styles = _a.styles, keytipProps = _a.keytipProps;
        var classNames = Link_base_getClassNames(styles, {
            className: className,
            isButton: !href,
            isDisabled: disabled,
            theme: theme
        });
        var RootType = this._getRootType(this.props);
        return (external__react_["createElement"](KeytipData_KeytipData, { keytipProps: keytipProps, ariaDescribedBy: this.props['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return (external__react_["createElement"](RootType, __assign({}, keytipAttributes, _this._adjustPropsForRootType(RootType, _this.props), { className: classNames.root, onClick: _this._onClick, ref: _this._link, "aria-disabled": disabled }), children)); }));
    };
    LinkBase.prototype.focus = function () {
        var current = this._link.current;
        if (current && current.focus) {
            current.focus();
        }
    };
    LinkBase.prototype._adjustPropsForRootType = function (RootType, props) {
        // Deconstruct the props so we remove props like `as`, `theme` and `styles`
        // as those will always be removed. We also take some props that are optional
        // based on the RootType.
        var children = props.children, as = props.as, disabled = props.disabled, target = props.target, href = props.href, theme = props.theme, getStyles = props.getStyles, styles = props.styles, componentRef = props.componentRef, restProps = __rest(props, ["children", "as", "disabled", "target", "href", "theme", "getStyles", "styles", "componentRef"]);
        // RootType will be a string if we're dealing with an html component
        if (typeof RootType === 'string') {
            // Remove the disabled prop for anchor elements
            if (RootType === 'a') {
                return __assign({ target: target, href: disabled ? undefined : href }, restProps);
            }
            // Add the type='button' prop for button elements
            if (RootType === 'button') {
                return __assign({ type: 'button', disabled: disabled }, restProps);
            }
            // Remove the target and href props for all other non anchor elements
            return __assign({}, restProps, { disabled: disabled });
        }
        // Retain all props except 'as' for ReactComponents
        return __assign({ target: target, href: href, disabled: disabled }, restProps);
    };
    LinkBase.prototype._getRootType = function (props) {
        if (props.as) {
            return props.as;
        }
        if (props.href) {
            return 'a';
        }
        return 'button';
    };
    return LinkBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Link/Link.styles.js

var Link_styles_GlobalClassNames = {
    root: 'ms-Link'
};
var Link_styles_getStyles = function (props) {
    var className = props.className, isButton = props.isButton, isDisabled = props.isDisabled, theme = props.theme;
    var semanticColors = theme.semanticColors;
    var classNames = getGlobalClassNames(Link_styles_GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                color: semanticColors.link,
                outline: 'none',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                selectors: {
                    '.ms-Fabric--isFocusVisible &:focus': {
                        // Can't use getFocusStyle because it doesn't support wrapping links
                        // https://github.com/OfficeDev/office-ui-fabric-react/issues/4883#issuecomment-406743543
                        // A box-shadow allows the focus rect to wrap links that span multiple lines
                        // and helps the focus rect avoid getting clipped.
                        boxShadow: "0 0 0 1px " + theme.palette.neutralSecondary + " inset",
                        selectors: {
                            '@media screen and (-ms-high-contrast: active)': {
                                outline: '1px solid WindowText'
                            }
                        }
                    },
                    '@media screen and (-ms-high-contrast: active)': {
                        // For IE high contrast mode
                        borderBottom: 'none'
                    }
                }
            },
            isButton && {
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'inline',
                margin: 0,
                overflow: 'inherit',
                padding: 0,
                textAlign: 'left',
                textOverflow: 'inherit',
                userSelect: 'text',
                borderBottom: '1px solid transparent',
                selectors: (_a = {},
                    _a[HighContrastSelectorBlack] = {
                        color: '#FFFF00'
                    },
                    _a[HighContrastSelectorWhite] = {
                        color: '#00009F'
                    },
                    _a)
            },
            !isButton && {
                textDecoration: 'none'
            },
            isDisabled && [
                'is-disabled',
                {
                    color: semanticColors.disabledText,
                    cursor: 'default'
                },
                {
                    selectors: {
                        '&:link, &:visited': {
                            pointerEvents: 'none'
                        }
                    }
                }
            ],
            !isDisabled && {
                selectors: {
                    '&:active, &:hover, &:active:hover': {
                        color: semanticColors.linkHovered,
                        selectors: (_b = {},
                            _b[HighContrastSelector] = {
                                textDecoration: 'underline'
                            },
                            _b)
                    },
                    '&:focus': {
                        color: semanticColors.link
                    }
                }
            },
            classNames.root,
            className
        ]
    };
    var _a, _b;
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Link/Link.js



var Link = styled(Link_base_LinkBase, Link_styles_getStyles, undefined, {
    scope: 'Link'
});

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/Link/index.js



// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/Link.js


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupShowAll.base.js





var GroupShowAll_base_getClassNames = classNamesFunction();
var GroupShowAll_base_GroupShowAllBase = /** @class */ (function (_super) {
    __extends(GroupShowAllBase, _super);
    function GroupShowAllBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onSummarizeClick = function (ev) {
            _this.props.onToggleSummarize(_this.props.group);
            ev.stopPropagation();
            ev.preventDefault();
        };
        return _this;
    }
    GroupShowAllBase.prototype.render = function () {
        var _a = this.props, group = _a.group, groupLevel = _a.groupLevel, showAllLinkText = _a.showAllLinkText, styles = _a.styles, theme = _a.theme;
        var classNames = GroupShowAll_base_getClassNames(styles, { theme: theme });
        if (group) {
            return (external__react_["createElement"]("div", { className: classNames.root },
                external__react_["createElement"](GroupSpacer, { count: groupLevel }),
                external__react_["createElement"](Link, { onClick: this._onSummarizeClick }, showAllLinkText)));
        }
        return null;
    };
    GroupShowAllBase.defaultProps = {
        showAllLinkText: 'Show All'
    };
    return GroupShowAllBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupShowAll.js



var GroupShowAll = styled(GroupShowAll_base_GroupShowAllBase, GroupShowAll_styles_getStyles, undefined, { scope: 'GroupShowAll' });

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupFooter.styles.js

var GroupFooter_styles_GlobalClassNames = {
    root: 'ms-groupFooter'
};
var GroupFooter_styles_getStyles = function (props) {
    var theme = props.theme, className = props.className;
    var classNames = getGlobalClassNames(GroupFooter_styles_GlobalClassNames, theme);
    return {
        root: [
            theme.fonts.medium,
            classNames.root,
            {
                position: 'relative',
                padding: '5px 38px'
            },
            className
        ]
    };
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupFooter.base.js




var GroupFooter_base_getClassNames = classNamesFunction();
var GroupFooter_base_GroupFooterBase = /** @class */ (function (_super) {
    __extends(GroupFooterBase, _super);
    function GroupFooterBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupFooterBase.prototype.render = function () {
        var _a = this.props, group = _a.group, groupLevel = _a.groupLevel, footerText = _a.footerText, indentWidth = _a.indentWidth, styles = _a.styles, theme = _a.theme;
        var classNames = GroupFooter_base_getClassNames(styles, { theme: theme });
        if (group && footerText) {
            return (external__react_["createElement"]("div", { className: classNames.root },
                external__react_["createElement"](GroupSpacer, { indentWidth: indentWidth, count: groupLevel }),
                footerText));
        }
        return null;
    };
    return GroupFooterBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupFooter.js



var GroupFooter = styled(GroupFooter_base_GroupFooterBase, GroupFooter_styles_getStyles, undefined, {
    scope: 'GroupFooter'
});

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/List/List.types.js
var ScrollToMode = {
    /**
     * Does not make any consideration to where in the viewport the item should align to.
     */
    auto: 0,
    /**
     * Attempts to scroll the list so the top of the desired item is aligned with the top of the viewport.
     */
    top: 1,
    /**
     * Attempts to scroll the list so the bottom of the desired item is aligned with the bottom of the viewport.
     */
    bottom: 2,
    /**
     * Attempts to scroll the list so the desired item is in the exact center of the viewport.
     */
    center: 3
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/List/List.js




var RESIZE_DELAY = 16;
var MIN_SCROLL_UPDATE_DELAY = 100;
var MAX_SCROLL_UPDATE_DELAY = 500;
var IDLE_DEBOUNCE_DELAY = 200;
// The amount of time to wait before declaring that the list isn't scrolling
var DONE_SCROLLING_WAIT = 500;
var DEFAULT_ITEMS_PER_PAGE = 10;
var DEFAULT_PAGE_HEIGHT = 30;
var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
var PAGE_KEY_PREFIX = 'page-';
var SPACER_KEY_PREFIX = 'spacer-';
var EMPTY_RECT = {
    top: -1,
    bottom: -1,
    left: -1,
    right: -1,
    width: 0,
    height: 0
};
// Naming expensive measures so that they're named in profiles.
var _measurePageRect = function (element) { return element.getBoundingClientRect(); };
var _measureSurfaceRect = _measurePageRect;
var _measureScrollRect = _measurePageRect;
/**
 * The List renders virtualized pages of items. Each page's item count is determined by the getItemCountForPage callback if
 * provided by the caller, or 10 as default. Each page's height is determined by the getPageHeight callback if provided by
 * the caller, or by cached measurements if available, or by a running average, or a default fallback.
 *
 * The algorithm for rendering pages works like this:
 *
 * 1. Predict visible pages based on "current measure data" (page heights, surface position, visible window)
 * 2. If changes are necessary, apply changes (add/remove pages)
 * 3. For pages that are added, measure the page heights if we need to using getBoundingClientRect
 * 4. If measurements don't match predictions, update measure data and goto step 1 asynchronously
 *
 * Measuring too frequently can pull performance down significantly. To compensate, we cache measured values so that
 * we can avoid re-measuring during operations that should not alter heights, like scrolling.
 *
 * To optimize glass rendering performance, onShouldVirtualize can be set. When onShouldVirtualize return false,
 * List will run in fast mode (not virtualized) to render all items without any measurements to improve page load time. And we
 * start doing measurements and rendering in virtualized mode when items grows larger than this threshold.
 *
 * However, certain operations can make measure data stale. For example, resizing the list, or passing in new props,
 * or forcing an update change cause pages to shrink/grow. When these operations occur, we increment a measureVersion
 * number, which we associate with cached measurements and use to determine if a remeasure should occur.
 */
var List_List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(props) {
        var _this = _super.call(this, props) || this;
        _this._root = external__react_["createRef"]();
        _this._surface = external__react_["createRef"]();
        _this._onRenderPage = function (pageProps, defaultRender) {
            var _a = _this.props, onRenderCell = _a.onRenderCell, role = _a.role;
            var _b = pageProps.page, items = _b.items, startIndex = _b.startIndex, divProps = __rest(pageProps, ["page"]);
            // only assign list item role if no role is assigned
            var cellRole = role === undefined ? 'listitem' : 'presentation';
            var cells = (items || []).map(function (item, offset) {
                var index = startIndex + offset;
                var itemKey = _this.props.getKey ? _this.props.getKey(item, index) : item && item.key;
                if (itemKey === null || itemKey === undefined) {
                    itemKey = index;
                }
                return (external__react_["createElement"]("div", { role: cellRole, className: css('ms-List-cell'), key: itemKey, "data-list-index": index, "data-automationid": "ListCell" }, onRenderCell && onRenderCell(item, index, _this.state.isScrolling)));
            });
            return external__react_["createElement"]("div", __assign({}, divProps), cells);
        };
        _this.state = {
            pages: [],
            isScrolling: false
        };
        _this._estimatedPageHeight = 0;
        _this._totalEstimates = 0;
        _this._requiredWindowsAhead = 0;
        _this._requiredWindowsBehind = 0;
        // Track the measure version for everything.
        _this._measureVersion = 0;
        // Ensure that scrolls are lazy updated.
        _this._onAsyncScroll = _this._async.debounce(_this._onAsyncScroll, MIN_SCROLL_UPDATE_DELAY, {
            leading: false,
            maxWait: MAX_SCROLL_UPDATE_DELAY
        });
        _this._onAsyncIdle = _this._async.debounce(_this._onAsyncIdle, IDLE_DEBOUNCE_DELAY, {
            leading: false
        });
        _this._onAsyncResize = _this._async.debounce(_this._onAsyncResize, RESIZE_DELAY, {
            leading: false
        });
        _this._onScrollingDone = _this._async.debounce(_this._onScrollingDone, DONE_SCROLLING_WAIT, {
            leading: false
        });
        _this._pageRefs = {};
        _this._cachedPageHeights = {};
        _this._estimatedPageHeight = 0;
        _this._focusedIndex = -1;
        _this._pageCache = {};
        return _this;
    }
    /**
     * Scroll to the given index. By default will bring the page the specified item is on into the view. If a callback
     * to measure the height of an individual item is specified, will only scroll to bring the specific item into view.
     *
     * Note: with items of variable height and no passed in `getPageHeight` method, the list might jump after scrolling
     * when windows before/ahead are being rendered, and the estimated height is replaced using actual elements.
     *
     * @param index - Index of item to scroll to
     * @param measureItem - Optional callback to measure the height of an individual item
     * @param scrollToMode - Optional defines where in the window the item should be positioned to when scrolling
     */
    List.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
        if (scrollToMode === void 0) { scrollToMode = ScrollToMode.auto; }
        var startIndex = this.props.startIndex;
        var renderCount = this._getRenderCount();
        var endIndex = startIndex + renderCount;
        var allowedRect = this._allowedRect;
        var scrollTop = 0;
        var itemsPerPage = 1;
        for (var itemIndex = startIndex; itemIndex < endIndex; itemIndex += itemsPerPage) {
            var pageSpecification = this._getPageSpecification(itemIndex, allowedRect);
            var pageHeight = pageSpecification.height;
            itemsPerPage = pageSpecification.itemCount;
            var requestedIndexIsInPage = itemIndex <= index && itemIndex + itemsPerPage > index;
            if (requestedIndexIsInPage) {
                // We have found the page. If the user provided a way to measure an individual item, we will try to scroll in just
                // the given item, otherwise we'll only bring the page into view
                if (measureItem) {
                    var scrollRect = _measureScrollRect(this._scrollElement);
                    var scrollWindow = {
                        top: this._scrollElement.scrollTop,
                        bottom: this._scrollElement.scrollTop + scrollRect.height
                    };
                    // Adjust for actual item position within page
                    var itemPositionWithinPage = index - itemIndex;
                    for (var itemIndexInPage = 0; itemIndexInPage < itemPositionWithinPage; ++itemIndexInPage) {
                        scrollTop += measureItem(itemIndex + itemIndexInPage);
                    }
                    var scrollBottom = scrollTop + measureItem(index);
                    // If scrollToMode is set to something other than auto, we always want to
                    // scroll the item into a specific position on the page.
                    switch (scrollToMode) {
                        case ScrollToMode.top:
                            this._scrollElement.scrollTop = scrollTop;
                            return;
                        case ScrollToMode.bottom:
                            this._scrollElement.scrollTop = scrollBottom - scrollRect.height;
                            return;
                        case ScrollToMode.center:
                            this._scrollElement.scrollTop = (scrollTop + scrollBottom - scrollRect.height) / 2;
                            return;
                        case ScrollToMode.auto:
                        default:
                            break;
                    }
                    var itemIsFullyVisible = scrollTop >= scrollWindow.top && scrollBottom <= scrollWindow.bottom;
                    if (itemIsFullyVisible) {
                        // Item is already visible, do nothing.
                        return;
                    }
                    var itemIsPartiallyAbove = scrollTop < scrollWindow.top;
                    var itemIsPartiallyBelow = scrollBottom > scrollWindow.bottom;
                    if (itemIsPartiallyAbove) {
                        //  We will just scroll to 'scrollTop'
                        //  .------.   - scrollTop
                        //  |Item  |
                        //  | .----|-. - scrollWindow.top
                        //  '------' |
                        //    |      |
                        //    '------'
                    }
                    else if (itemIsPartiallyBelow) {
                        //  Adjust scrollTop position to just bring in the element
                        // .------.  - scrollTop
                        // |      |
                        // | .------.
                        // '-|----' | - scrollWindow.bottom
                        //   | Item |
                        //   '------' - scrollBottom
                        scrollTop = scrollBottom - scrollRect.height;
                    }
                }
                this._scrollElement.scrollTop = scrollTop;
                return;
            }
            scrollTop += pageHeight;
        }
    };
    List.prototype.getStartItemIndexInView = function (measureItem) {
        var pages = this.state.pages || [];
        for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
            var page = pages_1[_i];
            var isPageVisible = !page.isSpacer && (this._scrollTop || 0) >= page.top && (this._scrollTop || 0) <= page.top + page.height;
            if (isPageVisible) {
                if (!measureItem) {
                    var rowHeight = Math.floor(page.height / page.itemCount);
                    return page.startIndex + Math.floor((this._scrollTop - page.top) / rowHeight);
                }
                else {
                    var totalRowHeight = 0;
                    for (var itemIndex = page.startIndex; itemIndex < page.startIndex + page.itemCount; itemIndex++) {
                        var rowHeight = measureItem(itemIndex);
                        if (page.top + totalRowHeight <= this._scrollTop && this._scrollTop < page.top + totalRowHeight + rowHeight) {
                            return itemIndex;
                        }
                        else {
                            totalRowHeight += rowHeight;
                        }
                    }
                }
            }
        }
        return 0;
    };
    List.prototype.componentDidMount = function () {
        this._updatePages();
        this._measureVersion++;
        this._scrollElement = findScrollableParent(this._root.current);
        this._events.on(window, 'resize', this._onAsyncResize);
        if (this._root.current) {
            this._events.on(this._root.current, 'focus', this._onFocus, true);
        }
        if (this._scrollElement) {
            this._events.on(this._scrollElement, 'scroll', this._onScroll);
            this._events.on(this._scrollElement, 'scroll', this._onAsyncScroll);
        }
    };
    List.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.items !== this.props.items ||
            newProps.renderCount !== this.props.renderCount ||
            newProps.startIndex !== this.props.startIndex) {
            // We have received new items so we want to make sure that initially we only render a single window to
            // fill the currently visible rect, and then later render additional windows.
            this._resetRequiredWindows();
            this._requiredRect = null;
            this._measureVersion++;
            this._invalidatePageCache();
            this._updatePages(newProps);
        }
    };
    List.prototype.shouldComponentUpdate = function (newProps, newState) {
        var oldPages = this.state.pages;
        var newPages = newState.pages;
        var shouldComponentUpdate = false;
        // Update if the page stops scrolling
        if (!newState.isScrolling && this.state.isScrolling) {
            return true;
        }
        if (newProps.items === this.props.items && oldPages.length === newPages.length) {
            for (var i = 0; i < oldPages.length; i++) {
                var oldPage = oldPages[i];
                var newPage = newPages[i];
                if (oldPage.key !== newPage.key || oldPage.itemCount !== newPage.itemCount) {
                    shouldComponentUpdate = true;
                    break;
                }
            }
        }
        else {
            shouldComponentUpdate = true;
        }
        return shouldComponentUpdate;
    };
    List.prototype.forceUpdate = function () {
        this._invalidatePageCache();
        // Ensure that when the list is force updated we update the pages first before render.
        this._updateRenderRects(this.props, true);
        this._updatePages();
        this._measureVersion++;
        _super.prototype.forceUpdate.call(this);
    };
    List.prototype.render = function () {
        var _a = this.props, className = _a.className, role = _a.role;
        var _b = this.state.pages, pages = _b === void 0 ? [] : _b;
        var pageElements = [];
        var divProps = getNativeProps(this.props, divProperties);
        for (var _i = 0, pages_2 = pages; _i < pages_2.length; _i++) {
            var page = pages_2[_i];
            pageElements.push(this._renderPage(page));
        }
        return (external__react_["createElement"]("div", __assign({ ref: this._root }, divProps, { role: role === undefined ? 'list' : role, className: css('ms-List', className) }),
            external__react_["createElement"]("div", { ref: this._surface, className: css('ms-List-surface'), role: "presentation" }, pageElements)));
    };
    List.prototype._shouldVirtualize = function (props) {
        if (props === void 0) { props = this.props; }
        var onShouldVirtualize = props.onShouldVirtualize;
        return !onShouldVirtualize || onShouldVirtualize(props);
    };
    /**
     * when props.items change or forceUpdate called, throw away cached pages
     */
    List.prototype._invalidatePageCache = function () {
        this._pageCache = {};
    };
    List.prototype._renderPage = function (page) {
        var usePageCache = this.props.usePageCache;
        var cachedPage;
        // if usePageCache is set and cached page element can be found, just return cached page
        if (usePageCache) {
            cachedPage = this._pageCache[page.key];
            if (cachedPage && cachedPage.pageElement) {
                return cachedPage.pageElement;
            }
        }
        var pageStyle = this._getPageStyle(page);
        var _a = this.props.onRenderPage, onRenderPage = _a === void 0 ? this._onRenderPage : _a;
        this._pageRefs[page.key] = this._pageRefs[page.key] || external__react_["createRef"]();
        var pageElement = onRenderPage({
            page: page,
            className: css('ms-List-page'),
            key: page.key,
            ref: this._pageRefs[page.key],
            style: pageStyle,
            role: 'presentation'
        }, this._onRenderPage);
        // cache the first page for now since it is re-rendered a lot times unnecessarily.
        // todo: a more aggresive caching mechanism is to cache pages constaining the items not changed.
        // now we re-render pages too frequently, for example, props.items increased from 30 to 60, although the
        // first 30 items did not change, we still re-rendered all of them in this props.items change.
        if (usePageCache && page.startIndex === 0) {
            this._pageCache[page.key] = {
                page: page,
                pageElement: pageElement
            };
        }
        return pageElement;
    };
    /** Generate the style object for the page. */
    List.prototype._getPageStyle = function (page) {
        var getPageStyle = this.props.getPageStyle;
        return __assign({}, (getPageStyle ? getPageStyle(page) : {}), (!page.items
            ? {
                height: page.height
            }
            : {}));
    };
    /** Track the last item index focused so that we ensure we keep it rendered. */
    List.prototype._onFocus = function (ev) {
        var target = ev.target;
        while (target !== this._surface.current) {
            var indexString = target.getAttribute('data-list-index');
            if (indexString) {
                this._focusedIndex = Number(indexString);
                break;
            }
            target = getParent(target);
        }
    };
    /**
     * Called synchronously to reset the required render range to 0 on scrolling. After async scroll has executed,
     * we will call onAsyncIdle which will reset it back to it's correct value.
     */
    List.prototype._onScroll = function () {
        if (!this.state.isScrolling) {
            this.setState({ isScrolling: true });
        }
        this._resetRequiredWindows();
        this._onScrollingDone();
    };
    List.prototype._resetRequiredWindows = function () {
        this._requiredWindowsAhead = 0;
        this._requiredWindowsBehind = 0;
    };
    /**
     * Debounced method to asynchronously update the visible region on a scroll event.
     */
    List.prototype._onAsyncScroll = function () {
        this._updateRenderRects();
        // Only update pages when the visible rect falls outside of the materialized rect.
        if (!this._materializedRect || !_isContainedWithin(this._requiredRect, this._materializedRect)) {
            this._updatePages();
        }
        else {
            // console.log('requiredRect contained in materialized', this._requiredRect, this._materializedRect);
        }
    };
    /**
     * This is an async debounced method that will try and increment the windows we render. If we can increment
     * either, we increase the amount we render and re-evaluate.
     */
    List.prototype._onAsyncIdle = function () {
        var _a = this.props, renderedWindowsAhead = _a.renderedWindowsAhead, renderedWindowsBehind = _a.renderedWindowsBehind;
        var _b = this, requiredWindowsAhead = _b._requiredWindowsAhead, requiredWindowsBehind = _b._requiredWindowsBehind;
        var windowsAhead = Math.min(renderedWindowsAhead, requiredWindowsAhead + 1);
        var windowsBehind = Math.min(renderedWindowsBehind, requiredWindowsBehind + 1);
        if (windowsAhead !== requiredWindowsAhead || windowsBehind !== requiredWindowsBehind) {
            // console.log('idling', windowsBehind, windowsAhead);
            this._requiredWindowsAhead = windowsAhead;
            this._requiredWindowsBehind = windowsBehind;
            this._updateRenderRects();
            this._updatePages();
        }
        if (renderedWindowsAhead > windowsAhead || renderedWindowsBehind > windowsBehind) {
            // Async increment on next tick.
            this._onAsyncIdle();
        }
    };
    /**
     * Function to call when the list is done scrolling.
     * This function is debounced.
     */
    List.prototype._onScrollingDone = function () {
        this.setState({ isScrolling: false });
    };
    List.prototype._onAsyncResize = function () {
        this.forceUpdate();
    };
    List.prototype._updatePages = function (props) {
        // console.log('updating pages');
        var _this = this;
        if (props === void 0) { props = this.props; }
        if (!this._requiredRect) {
            this._updateRenderRects(props);
        }
        var newListState = this._buildPages(props);
        var oldListPages = this.state.pages;
        this._notifyPageChanges(oldListPages, newListState.pages);
        this.setState(newListState, function () {
            // If we weren't provided with the page height, measure the pages
            if (!props.getPageHeight) {
                // If measured version is invalid since we've updated the DOM
                var heightsChanged = _this._updatePageMeasurements(newListState.pages);
                // On first render, we should re-measure so that we don't get a visual glitch.
                if (heightsChanged) {
                    _this._materializedRect = null;
                    if (!_this._hasCompletedFirstRender) {
                        _this._hasCompletedFirstRender = true;
                        _this._updatePages(props);
                    }
                    else {
                        _this._onAsyncScroll();
                    }
                }
                else {
                    // Enqueue an idle bump.
                    _this._onAsyncIdle();
                }
            }
            else {
                // Enqueue an idle bump
                _this._onAsyncIdle();
            }
            // Notify the caller that rendering the new pages has completed
            if (props.onPagesUpdated) {
                props.onPagesUpdated(_this.state.pages);
            }
        });
    };
    /**
     * Notify consumers that the rendered pages have changed
     * @param oldPages - The old pages
     * @param newPages - The new pages
     * @param props - The props to use
     */
    List.prototype._notifyPageChanges = function (oldPages, newPages, props) {
        if (props === void 0) { props = this.props; }
        var onPageAdded = props.onPageAdded, onPageRemoved = props.onPageRemoved;
        if (onPageAdded || onPageRemoved) {
            var renderedIndexes = {};
            for (var _i = 0, oldPages_1 = oldPages; _i < oldPages_1.length; _i++) {
                var page = oldPages_1[_i];
                if (page.items) {
                    renderedIndexes[page.startIndex] = page;
                }
            }
            for (var _a = 0, newPages_1 = newPages; _a < newPages_1.length; _a++) {
                var page = newPages_1[_a];
                if (page.items) {
                    if (!renderedIndexes[page.startIndex]) {
                        this._onPageAdded(page);
                    }
                    else {
                        delete renderedIndexes[page.startIndex];
                    }
                }
            }
            for (var index in renderedIndexes) {
                if (renderedIndexes.hasOwnProperty(index)) {
                    this._onPageRemoved(renderedIndexes[index]);
                }
            }
        }
    };
    List.prototype._updatePageMeasurements = function (pages) {
        var heightChanged = false;
        // when not in virtualize mode, we render all the items without page measurement
        if (!this._shouldVirtualize()) {
            return heightChanged;
        }
        for (var i = 0; i < pages.length; i++) {
            var page = pages[i];
            if (page.items) {
                heightChanged = this._measurePage(page) || heightChanged;
            }
        }
        return heightChanged;
    };
    /**
     * Given a page, measure its dimensions, update cache.
     * @returns True if the height has changed.
     */
    List.prototype._measurePage = function (page) {
        var hasChangedHeight = false;
        var pageElement = this._pageRefs[page.key].current;
        var cachedHeight = this._cachedPageHeights[page.startIndex];
        // console.log('   * measure attempt', page.startIndex, cachedHeight);
        if (pageElement && this._shouldVirtualize() && (!cachedHeight || cachedHeight.measureVersion !== this._measureVersion)) {
            var newClientRect = {
                width: pageElement.clientWidth,
                height: pageElement.clientHeight
            };
            if (newClientRect.height || newClientRect.width) {
                hasChangedHeight = page.height !== newClientRect.height;
                // console.warn(' *** expensive page measure', page.startIndex, page.height, newClientRect.height);
                page.height = newClientRect.height;
                this._cachedPageHeights[page.startIndex] = {
                    height: newClientRect.height,
                    measureVersion: this._measureVersion
                };
                this._estimatedPageHeight = Math.round((this._estimatedPageHeight * this._totalEstimates + newClientRect.height) / (this._totalEstimates + 1));
                this._totalEstimates++;
            }
        }
        return hasChangedHeight;
    };
    /** Called when a page has been added to the DOM. */
    List.prototype._onPageAdded = function (page) {
        var onPageAdded = this.props.onPageAdded;
        // console.log('page added', page.startIndex, this.state.pages.map(page => page.key).join(', '));
        if (onPageAdded) {
            onPageAdded(page);
        }
    };
    /** Called when a page has been removed from the DOM. */
    List.prototype._onPageRemoved = function (page) {
        var onPageRemoved = this.props.onPageRemoved;
        // console.log('  --- page removed', page.startIndex, this.state.pages.map(page => page.key).join(', '));
        if (onPageRemoved) {
            onPageRemoved(page);
        }
    };
    /** Build up the pages that should be rendered. */
    List.prototype._buildPages = function (props) {
        var renderCount = props.renderCount;
        var items = props.items, startIndex = props.startIndex, getPageHeight = props.getPageHeight;
        renderCount = this._getRenderCount(props);
        var materializedRect = __assign({}, EMPTY_RECT);
        var pages = [];
        var itemsPerPage = 1;
        var pageTop = 0;
        var currentSpacer = null;
        var focusedIndex = this._focusedIndex;
        var endIndex = startIndex + renderCount;
        var shouldVirtualize = this._shouldVirtualize(props);
        // First render is very important to track; when we render cells, we have no idea of estimated page height.
        // So we should default to rendering only the first page so that we can get information.
        // However if the user provides a measure function, let's just assume they know the right heights.
        var isFirstRender = this._estimatedPageHeight === 0 && !getPageHeight;
        var allowedRect = this._allowedRect;
        var _loop_1 = function (itemIndex) {
            var pageSpecification = this_1._getPageSpecification(itemIndex, allowedRect);
            var pageHeight = pageSpecification.height;
            var pageData = pageSpecification.data;
            var key = pageSpecification.key;
            itemsPerPage = pageSpecification.itemCount;
            var pageBottom = pageTop + pageHeight - 1;
            var isPageRendered = findIndex(this_1.state.pages, function (page) { return !!page.items && page.startIndex === itemIndex; }) > -1;
            var isPageInAllowedRange = !allowedRect || (pageBottom >= allowedRect.top && pageTop <= allowedRect.bottom);
            var isPageInRequiredRange = !this_1._requiredRect || (pageBottom >= this_1._requiredRect.top && pageTop <= this_1._requiredRect.bottom);
            var isPageVisible = (!isFirstRender && (isPageInRequiredRange || (isPageInAllowedRange && isPageRendered))) || !shouldVirtualize;
            var isPageFocused = focusedIndex >= itemIndex && focusedIndex < itemIndex + itemsPerPage;
            var isFirstPage = itemIndex === startIndex;
            // console.log('building page', itemIndex, 'pageTop: ' + pageTop, 'inAllowed: ' +
            // isPageInAllowedRange, 'inRequired: ' + isPageInRequiredRange);
            // Only render whats visible, focused, or first page,
            // or when running in fast rendering mode (not in virtualized mode), we render all current items in pages
            if (isPageVisible || isPageFocused || isFirstPage) {
                if (currentSpacer) {
                    pages.push(currentSpacer);
                    currentSpacer = null;
                }
                var itemsInPage = Math.min(itemsPerPage, endIndex - itemIndex);
                var newPage = this_1._createPage(key, items.slice(itemIndex, itemIndex + itemsInPage), itemIndex, undefined, undefined, pageData);
                newPage.top = pageTop;
                newPage.height = pageHeight;
                pages.push(newPage);
                if (isPageInRequiredRange && this_1._allowedRect) {
                    _mergeRect(materializedRect, {
                        top: pageTop,
                        bottom: pageBottom,
                        height: pageHeight,
                        left: allowedRect.left,
                        right: allowedRect.right,
                        width: allowedRect.width
                    });
                }
            }
            else {
                if (!currentSpacer) {
                    currentSpacer = this_1._createPage(SPACER_KEY_PREFIX + itemIndex, undefined, itemIndex, 0, undefined, pageData, true /*isSpacer*/);
                }
                currentSpacer.height = (currentSpacer.height || 0) + (pageBottom - pageTop) + 1;
                currentSpacer.itemCount += itemsPerPage;
            }
            pageTop += pageBottom - pageTop + 1;
            // in virtualized mode, we render need to render first page then break and measure,
            // otherwise, we render all items without measurement to make rendering fast
            if (isFirstRender && shouldVirtualize) {
                return "break";
            }
        };
        var this_1 = this;
        for (var itemIndex = startIndex; itemIndex < endIndex; itemIndex += itemsPerPage) {
            var state_1 = _loop_1(itemIndex);
            if (state_1 === "break")
                break;
        }
        if (currentSpacer) {
            currentSpacer.key = SPACER_KEY_PREFIX + 'end';
            pages.push(currentSpacer);
        }
        this._materializedRect = materializedRect;
        // console.log('materialized: ', materializedRect);
        return {
            pages: pages,
            measureVersion: this._measureVersion
        };
    };
    List.prototype._getPageSpecification = function (itemIndex, visibleRect) {
        var getPageSpecification = this.props.getPageSpecification;
        if (getPageSpecification) {
            var pageData = getPageSpecification(itemIndex, visibleRect);
            var _a = pageData.itemCount, itemCount = _a === void 0 ? this._getItemCountForPage(itemIndex, visibleRect) : _a;
            var _b = pageData.height, height = _b === void 0 ? this._getPageHeight(itemIndex, itemCount, visibleRect) : _b;
            return {
                itemCount: itemCount,
                height: height,
                data: pageData.data,
                key: pageData.key
            };
        }
        else {
            var itemCount = this._getItemCountForPage(itemIndex, visibleRect);
            return {
                itemCount: itemCount,
                height: this._getPageHeight(itemIndex, itemCount, visibleRect)
            };
        }
    };
    /**
     * Get the pixel height of a give page. Will use the props getPageHeight first, and if not provided, fallback to
     * cached height, or estimated page height, or default page height.
     */
    List.prototype._getPageHeight = function (itemIndex, itemsPerPage, visibleRect) {
        if (this.props.getPageHeight) {
            return this.props.getPageHeight(itemIndex, visibleRect);
        }
        else {
            var cachedHeight = this._cachedPageHeights[itemIndex];
            return cachedHeight ? cachedHeight.height : this._estimatedPageHeight || DEFAULT_PAGE_HEIGHT;
        }
    };
    List.prototype._getItemCountForPage = function (itemIndex, visibileRect) {
        var itemsPerPage = this.props.getItemCountForPage ? this.props.getItemCountForPage(itemIndex, visibileRect) : DEFAULT_ITEMS_PER_PAGE;
        return itemsPerPage ? itemsPerPage : DEFAULT_ITEMS_PER_PAGE;
    };
    List.prototype._createPage = function (pageKey, items, startIndex, count, style, data, isSpacer) {
        if (startIndex === void 0) { startIndex = -1; }
        if (count === void 0) { count = items ? items.length : 0; }
        if (style === void 0) { style = {}; }
        if (data === void 0) { data = undefined; }
        pageKey = pageKey || PAGE_KEY_PREFIX + startIndex;
        var cachedPage = this._pageCache[pageKey];
        if (cachedPage && cachedPage.page) {
            return cachedPage.page;
        }
        // Fill undefined cells because array.map will ignore undefined cells.
        if (items) {
            for (var i = 0; i < items.length; i++) {
                items[i] = items[i] || undefined;
            }
        }
        return {
            key: pageKey,
            startIndex: startIndex,
            itemCount: count,
            items: items,
            style: style || {},
            top: 0,
            height: 0,
            data: data,
            isSpacer: isSpacer || false
        };
    };
    List.prototype._getRenderCount = function (props) {
        var _a = props || this.props, items = _a.items, startIndex = _a.startIndex, renderCount = _a.renderCount;
        return renderCount === undefined ? (items ? items.length - startIndex : 0) : renderCount;
    };
    /** Calculate the visible rect within the list where top: 0 and left: 0 is the top/left of the list. */
    List.prototype._updateRenderRects = function (props, forceUpdate) {
        props = props || this.props;
        var renderedWindowsAhead = props.renderedWindowsAhead, renderedWindowsBehind = props.renderedWindowsBehind;
        var pages = this.state.pages;
        // when not in virtualize mode, we render all items without measurement to optimize page rendering perf
        if (!this._shouldVirtualize(props)) {
            return;
        }
        var surfaceRect = this._surfaceRect;
        var scrollHeight = this._scrollElement && this._scrollElement.scrollHeight;
        var scrollTop = this._scrollElement ? this._scrollElement.scrollTop : 0;
        // WARNING: EXPENSIVE CALL! We need to know the surface top relative to the window.
        // This needs to be called to recalculate when new pages should be loaded.
        // We check to see how far we've scrolled and if it's further than a third of a page we run it again.
        if (this._surface.current &&
            (forceUpdate ||
                !pages ||
                !this._surfaceRect ||
                !scrollHeight ||
                scrollHeight !== this._scrollHeight ||
                Math.abs(this._scrollTop - scrollTop) > this._estimatedPageHeight / 3)) {
            surfaceRect = this._surfaceRect = _measureSurfaceRect(this._surface.current);
            this._scrollTop = scrollTop;
        }
        // If the scroll height has changed, something in the container likely resized and
        // we should redo the page heights incase their content resized.
        if (forceUpdate || !scrollHeight || scrollHeight !== this._scrollHeight) {
            this._measureVersion++;
        }
        this._scrollHeight = scrollHeight;
        // If the surface is above the container top or below the container bottom, or if this is not the first
        // render return empty rect.
        // The first time the list gets rendered we need to calculate the rectangle. The width of the list is
        // used to calculate the width of the list items.
        var visibleTop = Math.max(0, -surfaceRect.top);
        var visibleRect = {
            top: visibleTop,
            left: surfaceRect.left,
            bottom: visibleTop + window.innerHeight,
            right: surfaceRect.right,
            width: surfaceRect.width,
            height: window.innerHeight
        };
        // The required/allowed rects are adjusted versions of the visible rect.
        this._requiredRect = _expandRect(visibleRect, this._requiredWindowsBehind, this._requiredWindowsAhead);
        this._allowedRect = _expandRect(visibleRect, renderedWindowsBehind, renderedWindowsAhead);
    };
    List.defaultProps = {
        startIndex: 0,
        onRenderCell: function (item, index, containsFocus) { return external__react_["createElement"]("div", null, (item && item.name) || ''); },
        renderedWindowsAhead: DEFAULT_RENDERED_WINDOWS_AHEAD,
        renderedWindowsBehind: DEFAULT_RENDERED_WINDOWS_BEHIND
    };
    return List;
}(BaseComponent_BaseComponent));

function _expandRect(rect, pagesBefore, pagesAfter) {
    var top = rect.top - pagesBefore * rect.height;
    var height = rect.height + (pagesBefore + pagesAfter) * rect.height;
    return {
        top: top,
        bottom: top + height,
        height: height,
        left: rect.left,
        right: rect.right,
        width: rect.width
    };
}
function _isContainedWithin(innerRect, outerRect) {
    return (innerRect.top >= outerRect.top &&
        innerRect.left >= outerRect.left &&
        innerRect.bottom <= outerRect.bottom &&
        innerRect.right <= outerRect.right);
}
function _mergeRect(targetRect, newRect) {
    targetRect.top = newRect.top < targetRect.top || targetRect.top === -1 ? newRect.top : targetRect.top;
    targetRect.left = newRect.left < targetRect.left || targetRect.left === -1 ? newRect.left : targetRect.left;
    targetRect.bottom = newRect.bottom > targetRect.bottom || targetRect.bottom === -1 ? newRect.bottom : targetRect.bottom;
    targetRect.right = newRect.right > targetRect.right || targetRect.right === -1 ? newRect.right : targetRect.right;
    targetRect.width = targetRect.right - targetRect.left + 1;
    targetRect.height = targetRect.bottom - targetRect.top + 1;
    return targetRect;
}

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/List/index.js



// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/List.js


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedListSection.js









var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
var GroupedListSection_GroupedListSection = /** @class */ (function (_super) {
    __extends(GroupedListSection, _super);
    function GroupedListSection(props) {
        var _this = _super.call(this, props) || this;
        _this._root = external__react_["createRef"]();
        _this._list = external__react_["createRef"]();
        _this._onRenderGroupHeader = function (props) {
            return external__react_["createElement"](GroupHeader, __assign({}, props));
        };
        _this._onRenderGroupShowAll = function (props) {
            return external__react_["createElement"](GroupShowAll, __assign({}, props));
        };
        _this._onRenderGroupFooter = function (props) {
            return external__react_["createElement"](GroupFooter, __assign({}, props));
        };
        _this._renderSubGroup = function (subGroup, subGroupIndex) {
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, getGroupItemLimit = _a.getGroupItemLimit, groupNestingDepth = _a.groupNestingDepth, groupProps = _a.groupProps, items = _a.items, headerProps = _a.headerProps, showAllProps = _a.showAllProps, footerProps = _a.footerProps, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selection = _a.selection, selectionMode = _a.selectionMode, viewport = _a.viewport, onRenderGroupHeader = _a.onRenderGroupHeader, onRenderGroupShowAll = _a.onRenderGroupShowAll, onRenderGroupFooter = _a.onRenderGroupFooter, onShouldVirtualize = _a.onShouldVirtualize, group = _a.group, compact = _a.compact;
            return !subGroup || subGroup.count > 0 || (groupProps && groupProps.showEmptyGroups) ? (external__react_["createElement"](GroupedListSection, { ref: 'subGroup_' + subGroupIndex, key: _this._getGroupKey(subGroup, subGroupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: getGroupItemLimit, group: subGroup, groupIndex: subGroupIndex, groupNestingDepth: groupNestingDepth, groupProps: groupProps, headerProps: headerProps, items: items, listProps: listProps, onRenderCell: onRenderCell, selection: selection, selectionMode: selectionMode, showAllProps: showAllProps, viewport: viewport, onRenderGroupHeader: onRenderGroupHeader, onRenderGroupShowAll: onRenderGroupShowAll, onRenderGroupFooter: onRenderGroupFooter, onShouldVirtualize: onShouldVirtualize, groups: group.children, compact: compact })) : null;
        };
        /**
         * collect all the data we need to enable drag/drop for a group
         */
        _this._getGroupDragDropOptions = function () {
            var _a = _this.props, group = _a.group, groupIndex = _a.groupIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
            var options = {
                eventMap: eventsToRegister,
                selectionIndex: -1,
                context: { data: group, index: groupIndex, isGroup: true },
                canDrag: function () { return false; },
                canDrop: dragDropEvents.canDrop,
                updateDropState: _this._updateDroppingState
            };
            return options;
        };
        /**
         * update groupIsDropping state based on the input value, which is used to change style during drag and drop
         *
         * @private
         * @param {boolean} newValue (new isDropping state value)
         * @param {DragEvent} event (the event trigger dropping state change which can be dragenter, dragleave etc)
         */
        _this._updateDroppingState = function (newIsDropping, event) {
            var isDropping = _this.state.isDropping;
            var dragDropEvents = _this.props.dragDropEvents;
            if (!isDropping) {
                if (dragDropEvents && dragDropEvents.onDragLeave) {
                    dragDropEvents.onDragLeave(event, undefined);
                }
            }
            else {
                if (dragDropEvents && dragDropEvents.onDragEnter) {
                    dragDropEvents.onDragEnter(event, undefined);
                }
            }
            if (isDropping !== newIsDropping) {
                _this.setState({ isDropping: newIsDropping });
            }
        };
        var selection = props.selection, group = props.group;
        _this._id = getId('GroupedListSection');
        _this.state = {
            isDropping: false,
            isSelected: selection && group ? selection.isRangeSelected(group.startIndex, group.count) : false
        };
        return _this;
    }
    GroupedListSection.prototype.componentDidMount = function () {
        var _a = this.props, dragDropHelper = _a.dragDropHelper, selection = _a.selection;
        if (dragDropHelper && this._root.current) {
            this._dragDropSubscription = dragDropHelper.subscribe(this._root.current, this._events, this._getGroupDragDropOptions());
        }
        if (selection) {
            this._events.on(selection, SELECTION_CHANGE, this._onSelectionChange);
        }
    };
    GroupedListSection.prototype.componentWillUnmount = function () {
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
        }
    };
    GroupedListSection.prototype.componentDidUpdate = function (previousProps) {
        if (this.props.group !== previousProps.group ||
            this.props.groupIndex !== previousProps.groupIndex ||
            this.props.dragDropHelper !== previousProps.dragDropHelper) {
            if (this._dragDropSubscription) {
                this._dragDropSubscription.dispose();
                delete this._dragDropSubscription;
            }
            if (this.props.dragDropHelper && this._root.current) {
                this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getGroupDragDropOptions());
            }
        }
    };
    GroupedListSection.prototype.render = function () {
        var _a = this.props, getGroupItemLimit = _a.getGroupItemLimit, group = _a.group, groupIndex = _a.groupIndex, headerProps = _a.headerProps, showAllProps = _a.showAllProps, footerProps = _a.footerProps, viewport = _a.viewport, selectionMode = _a.selectionMode, _b = _a.onRenderGroupHeader, onRenderGroupHeader = _b === void 0 ? this._onRenderGroupHeader : _b, _c = _a.onRenderGroupShowAll, onRenderGroupShowAll = _c === void 0 ? this._onRenderGroupShowAll : _c, _d = _a.onRenderGroupFooter, onRenderGroupFooter = _d === void 0 ? this._onRenderGroupFooter : _d, onShouldVirtualize = _a.onShouldVirtualize, groupedListClassNames = _a.groupedListClassNames, groups = _a.groups, compact = _a.compact;
        var isSelected = this.state.isSelected;
        var renderCount = group && getGroupItemLimit ? getGroupItemLimit(group) : Infinity;
        var isShowAllVisible = group && !group.children && !group.isCollapsed && !group.isShowingAll && (group.count > renderCount || group.hasMoreData);
        var hasNestedGroups = group && group.children && group.children.length > 0;
        var dividerProps = {
            group: group,
            groupIndex: groupIndex,
            groupLevel: group ? group.level : 0,
            isSelected: isSelected,
            viewport: viewport,
            selectionMode: selectionMode,
            groups: groups,
            compact: compact
        };
        var ariaControlsProps = {
            groupedListId: this._id
        };
        var groupHeaderProps = object_assign({}, headerProps, dividerProps, ariaControlsProps);
        var groupShowAllProps = object_assign({}, showAllProps, dividerProps);
        var groupFooterProps = object_assign({}, footerProps, dividerProps);
        return (external__react_["createElement"]("div", { ref: this._root, className: css(groupedListClassNames && groupedListClassNames.group, this._getDroppingClassName()), role: "presentation" },
            onRenderGroupHeader(groupHeaderProps, this._onRenderGroupHeader),
            group && group.isCollapsed ? null : hasNestedGroups ? (external__react_["createElement"](List_List, { role: "presentation", ref: this._list, items: group.children, onRenderCell: this._renderSubGroup, getItemCountForPage: this._returnOne, onShouldVirtualize: onShouldVirtualize, id: this._id })) : (this._onRenderGroup(renderCount)),
            group && group.isCollapsed ? null : isShowAllVisible && onRenderGroupShowAll(groupShowAllProps, this._onRenderGroupShowAll),
            onRenderGroupFooter(groupFooterProps, this._onRenderGroupFooter)));
    };
    GroupedListSection.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this.forceListUpdate();
    };
    GroupedListSection.prototype.forceListUpdate = function () {
        var group = this.props.group;
        if (this._list.current) {
            this._list.current.forceUpdate();
            if (group && group.children && group.children.length > 0) {
                var subGroupCount = group.children.length;
                for (var i = 0; i < subGroupCount; i++) {
                    var subGroup = this._list.current.refs['subGroup_' + String(i)];
                    if (subGroup) {
                        subGroup.forceListUpdate();
                    }
                }
            }
        }
        else {
            var subGroup = this.refs['subGroup_' + String(0)];
            if (subGroup) {
                subGroup.forceListUpdate();
            }
        }
    };
    GroupedListSection.prototype._onSelectionChange = function () {
        var _a = this.props, group = _a.group, selection = _a.selection;
        var isSelected = selection.isRangeSelected(group.startIndex, group.count);
        if (isSelected !== this.state.isSelected) {
            this.setState({ isSelected: isSelected });
        }
    };
    GroupedListSection.prototype._onRenderGroupCell = function (onRenderCell, groupNestingDepth) {
        return function (item, itemIndex) {
            return onRenderCell(groupNestingDepth, item, itemIndex);
        };
    };
    GroupedListSection.prototype._onRenderGroup = function (renderCount) {
        var _a = this.props, group = _a.group, items = _a.items, onRenderCell = _a.onRenderCell, listProps = _a.listProps, groupNestingDepth = _a.groupNestingDepth, onShouldVirtualize = _a.onShouldVirtualize;
        var count = group ? group.count : items.length;
        var startIndex = group ? group.startIndex : 0;
        return (external__react_["createElement"](List_List, __assign({ role: "grid", items: items, onRenderCell: this._onRenderGroupCell(onRenderCell, groupNestingDepth), ref: this._list, renderCount: Math.min(count, renderCount), startIndex: startIndex, onShouldVirtualize: onShouldVirtualize, id: this._id }, listProps)));
    };
    GroupedListSection.prototype._returnOne = function () {
        return 1;
    };
    GroupedListSection.prototype._getGroupKey = function (group, index) {
        return 'group-' + (group && group.key ? group.key : String(group.level) + String(index));
    };
    /**
     * get the correct css class to reflect the dropping state for a given group
     *
     * If the group is the current drop target, return the default dropping class name
     * Otherwise, return '';
     *
     */
    GroupedListSection.prototype._getDroppingClassName = function () {
        var isDropping = this.state.isDropping;
        var _a = this.props, group = _a.group, groupedListClassNames = _a.groupedListClassNames;
        isDropping = !!(group && isDropping);
        return css(isDropping && DEFAULT_DROPPING_CSS_CLASS, isDropping && groupedListClassNames && groupedListClassNames.groupIsDropping);
    };
    return GroupedListSection;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.base.js






var GroupedList_base_getClassNames = classNamesFunction();
var GroupedList_base_GroupedListBase = /** @class */ (function (_super) {
    __extends(GroupedListBase, _super);
    function GroupedListBase(props) {
        var _this = _super.call(this, props) || this;
        _this._list = external__react_["createRef"]();
        _this._renderGroup = function (group, groupIndex) {
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, groupProps = _a.groupProps, items = _a.items, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selectionMode = _a.selectionMode, selection = _a.selection, viewport = _a.viewport, onShouldVirtualize = _a.onShouldVirtualize, groups = _a.groups, compact = _a.compact;
            // override group header/footer props as needed
            var dividerProps = {
                onToggleSelectGroup: _this._onToggleSelectGroup,
                onToggleCollapse: _this._onToggleCollapse,
                onToggleSummarize: _this._onToggleSummarize
            };
            var headerProps = object_assign({}, groupProps.headerProps, dividerProps);
            var showAllProps = object_assign({}, groupProps.showAllProps, dividerProps);
            var footerProps = object_assign({}, groupProps.footerProps, dividerProps);
            var groupNestingDepth = _this._getGroupNestingDepth();
            if (!groupProps.showEmptyGroups && group && group.count === 0) {
                return null;
            }
            return (external__react_["createElement"](GroupedListSection_GroupedListSection, { ref: 'group_' + groupIndex, key: _this._getGroupKey(group, groupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: groupProps && groupProps.getGroupItemLimit, group: group, groupIndex: groupIndex, groupNestingDepth: groupNestingDepth, groupProps: groupProps, headerProps: headerProps, listProps: listProps, items: items, onRenderCell: onRenderCell, onRenderGroupHeader: groupProps.onRenderHeader, onRenderGroupShowAll: groupProps.onRenderShowAll, onRenderGroupFooter: groupProps.onRenderFooter, selectionMode: selectionMode, selection: selection, showAllProps: showAllProps, viewport: viewport, onShouldVirtualize: onShouldVirtualize, groupedListClassNames: _this._classNames, groups: groups, compact: compact }));
        };
        _this._getPageHeight = function (getGroupHeight) { return function (itemIndex) {
            var groups = _this.state.groups;
            var pageGroup = groups && groups[itemIndex];
            return getGroupHeight(pageGroup, itemIndex);
        }; };
        _this._onToggleCollapse = function (group) {
            var groupProps = _this.props.groupProps;
            var onToggleCollapse = groupProps && groupProps.headerProps && groupProps.headerProps.onToggleCollapse;
            if (group) {
                if (onToggleCollapse) {
                    onToggleCollapse(group);
                }
                group.isCollapsed = !group.isCollapsed;
                _this._updateIsSomeGroupExpanded();
                _this.forceUpdate();
            }
        };
        _this._onToggleSelectGroup = function (group) {
            if (group) {
                _this.props.selection.toggleRangeSelected(group.startIndex, group.count);
            }
        };
        _this._onToggleSummarize = function (group) {
            var groupProps = _this.props.groupProps;
            var onToggleSummarize = groupProps && groupProps.showAllProps && groupProps.showAllProps.onToggleSummarize;
            if (onToggleSummarize) {
                onToggleSummarize(group);
            }
            else {
                if (group) {
                    group.isShowingAll = !group.isShowingAll;
                }
                _this.forceUpdate();
            }
        };
        _this._getPageSpecification = function (itemIndex, visibleRect) {
            var groups = _this.state.groups;
            var pageGroup = groups && groups[itemIndex];
            return {
                key: pageGroup && pageGroup.key
            };
        };
        _this._isSomeGroupExpanded = _this._computeIsSomeGroupExpanded(props.groups);
        _this.state = {
            lastWidth: 0,
            groups: props.groups
        };
        return _this;
    }
    GroupedListBase.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
        if (this._list.current) {
            this._list.current.scrollToIndex(index, measureItem, scrollToMode);
        }
    };
    GroupedListBase.prototype.getStartItemIndexInView = function () {
        return this._list.current.getStartItemIndexInView() || 0;
    };
    GroupedListBase.prototype.componentWillReceiveProps = function (newProps) {
        var _a = this.props, groups = _a.groups, selectionMode = _a.selectionMode, compact = _a.compact;
        var shouldForceUpdates = false;
        if (newProps.groups !== groups) {
            this.setState({ groups: newProps.groups });
            shouldForceUpdates = true;
        }
        if (newProps.selectionMode !== selectionMode || newProps.compact !== compact) {
            shouldForceUpdates = true;
        }
        if (shouldForceUpdates) {
            this._forceListUpdates();
        }
    };
    GroupedListBase.prototype.render = function () {
        var _a = this.props, className = _a.className, usePageCache = _a.usePageCache, onShouldVirtualize = _a.onShouldVirtualize, getGroupHeight = _a.getGroupHeight, theme = _a.theme, styles = _a.styles, compact = _a.compact;
        var groups = this.state.groups;
        this._classNames = GroupedList_base_getClassNames(styles, {
            theme: theme,
            className: className,
            compact: compact
        });
        return (external__react_["createElement"]("div", { className: this._classNames.root, "data-automationid": "GroupedList", "data-is-scrollable": "false", role: "presentation" }, !groups ? (this._renderGroup(undefined, 0)) : (external__react_["createElement"](List_List, { ref: this._list, role: "presentation", items: groups, onRenderCell: this._renderGroup, getItemCountForPage: this._returnOne, getPageHeight: getGroupHeight && this._getPageHeight(getGroupHeight), getPageSpecification: this._getPageSpecification, usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize }))));
    };
    GroupedListBase.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this._forceListUpdates();
    };
    GroupedListBase.prototype.toggleCollapseAll = function (allCollapsed) {
        var groups = this.state.groups;
        var groupProps = this.props.groupProps;
        var onToggleCollapseAll = groupProps && groupProps.onToggleCollapseAll;
        if (groups) {
            if (onToggleCollapseAll) {
                onToggleCollapseAll(allCollapsed);
            }
            for (var groupIndex = 0; groupIndex < groups.length; groupIndex++) {
                groups[groupIndex].isCollapsed = allCollapsed;
            }
            this._updateIsSomeGroupExpanded();
            this.forceUpdate();
        }
    };
    GroupedListBase.prototype._returnOne = function () {
        return 1;
    };
    GroupedListBase.prototype._getGroupKey = function (group, index) {
        return 'group-' + (group && group.key ? group.key : String(index));
    };
    GroupedListBase.prototype._getGroupNestingDepth = function () {
        var groups = this.state.groups;
        var level = 0;
        var groupsInLevel = groups;
        while (groupsInLevel && groupsInLevel.length > 0) {
            level++;
            groupsInLevel = groupsInLevel[0].children;
        }
        return level;
    };
    GroupedListBase.prototype._forceListUpdates = function (groups) {
        groups = groups || this.state.groups;
        var groupCount = groups ? groups.length : 1;
        if (this._list.current) {
            this._list.current.forceUpdate();
            for (var i = 0; i < groupCount; i++) {
                var group = this._list.current.refs['group_' + String(i)];
                if (group) {
                    group.forceListUpdate();
                }
            }
        }
        else {
            var group = this.refs['group_' + String(0)];
            if (group) {
                group.forceListUpdate();
            }
        }
    };
    GroupedListBase.prototype._computeIsSomeGroupExpanded = function (groups) {
        var _this = this;
        return !!(groups && groups.some(function (group) { return (group.children ? _this._computeIsSomeGroupExpanded(group.children) : !group.isCollapsed); }));
    };
    GroupedListBase.prototype._updateIsSomeGroupExpanded = function () {
        var groups = this.state.groups;
        var onGroupExpandStateChanged = this.props.onGroupExpandStateChanged;
        var newIsSomeGroupExpanded = this._computeIsSomeGroupExpanded(groups);
        if (this._isSomeGroupExpanded !== newIsSomeGroupExpanded) {
            if (onGroupExpandStateChanged) {
                onGroupExpandStateChanged(newIsSomeGroupExpanded);
            }
            this._isSomeGroupExpanded = newIsSomeGroupExpanded;
        }
    };
    GroupedListBase.defaultProps = {
        selectionMode: SelectionMode.multiple,
        isHeaderVisible: true,
        groupProps: {},
        compact: false
    };
    return GroupedListBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.js



var GroupedList = styled(GroupedList_base_GroupedListBase, GroupedList_styles_getStyles, undefined, {
    scope: 'GroupedList'
});

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/GroupedList/index.js








// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/GroupedList.js


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.styles.js



// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.

var DetailsHeader_styles_GlobalClassNames = {
    tooltipHost: 'ms-TooltipHost',
    root: 'ms-DetailsHeader',
    cell: 'ms-DetailsHeader-cell',
    cellIsCheck: 'ms-DetailsHeader-cellIsCheck',
    collapseButton: 'ms-DetailsHeader-collapseButton',
    isCollapsed: 'is-collapsed',
    isAllSelected: 'is-allSelected',
    isSelectAllHidden: 'is-selectAllHidden',
    isResizingColumn: 'is-resizingColumn',
    cellSizer: 'ms-DetailsHeader-cellSizer',
    isResizing: 'is-resizing',
    dropHintCircleStyle: 'ms-DetailsHeader-dropHintCircleStyle',
    dropHintCaretStyle: 'ms-DetailsHeader-dropHintCaretStyle',
    dropHintLineStyle: 'ms-DetailsHeader-dropHintLineStyle',
    cellTitle: 'ms-DetailsHeader-cellTitle',
    cellName: 'ms-DetailsHeader-cellName',
    filterChevron: 'ms-DetailsHeader-filterChevron',
    gripperBarVertical: 'ms-DetailsColumn-gripperBarVertical'
};
var HEADER_HEIGHT = 32;
var getCellStyles = function (props) {
    var theme = props.theme, _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? DEFAULT_CELL_STYLE_PROPS : _a;
    var semanticColors = theme.semanticColors;
    var classNames = getGlobalClassNames(DetailsHeader_styles_GlobalClassNames, theme);
    return [
        classNames.cell,
        getFocusStyle(theme),
        {
            color: semanticColors.bodyText,
            position: 'relative',
            display: 'inline-block',
            boxSizing: 'border-box',
            padding: "0 " + cellStyleProps.cellRightPadding + "px 0 " + cellStyleProps.cellLeftPadding + "px",
            lineHeight: 'inherit',
            margin: '0',
            height: HEADER_HEIGHT,
            verticalAlign: 'top',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            textAlign: 'left'
        }
    ];
};
var DetailsHeader_styles_getStyles = function (props) {
    var theme = props.theme, className = props.className, isSelectAllHidden = props.isSelectAllHidden, isAllSelected = props.isAllSelected, isResizingColumn = props.isResizingColumn, isSizing = props.isSizing, isAllCollapsed = props.isAllCollapsed, _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? DEFAULT_CELL_STYLE_PROPS : _a;
    var semanticColors = theme.semanticColors, palette = theme.palette;
    var classNames = getGlobalClassNames(DetailsHeader_styles_GlobalClassNames, theme);
    var colors = {
        iconForegroundColor: semanticColors.bodySubtext,
        headerForegroundColor: semanticColors.bodyText,
        headerBackgroundColor: semanticColors.bodyBackground,
        dropdownChevronForegroundColor: palette.neutralTertiary,
        resizerColor: palette.neutralTertiaryAlt
    };
    var cellSizerFadeInStyles = {
        opacity: 1,
        transition: 'opacity 0.3s linear'
    };
    var cellStyles = getCellStyles(props);
    return {
        root: [
            classNames.root,
            theme.fonts.small,
            {
                display: 'inline-block',
                background: colors.headerBackgroundColor,
                position: 'relative',
                minWidth: '100%',
                verticalAlign: 'top',
                height: HEADER_HEIGHT,
                lineHeight: HEADER_HEIGHT,
                whiteSpace: 'nowrap',
                boxSizing: 'content-box',
                paddingBottom: '1px',
                paddingTop: '1px',
                borderBottom: "1px solid " + semanticColors.bodyDivider,
                cursor: 'default',
                userSelect: 'none',
                selectors: (_b = {
                        '&:hover $check': {
                            opacity: 1
                        }
                    },
                    _b[classNames.tooltipHost + " $checkTooltip"] = {
                        display: 'block'
                    },
                    _b)
            },
            isAllSelected && classNames.isAllSelected,
            isSelectAllHidden && {
                selectors: {
                    $cell$cellIsCheck: {
                        visibility: 'hidden'
                    }
                }
            },
            isResizingColumn && classNames.isResizingColumn,
            className
        ],
        check: [
            {
                height: HEADER_HEIGHT
            },
            {
                selectors: (_c = {},
                    _c["." + IsFocusVisibleClassName + " &:focus"] = {
                        opacity: 1
                    },
                    _c)
            }
        ],
        cellWrapperPadded: [
            {
                paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding
            }
        ],
        cellIsCheck: [
            cellStyles,
            classNames.cellIsCheck,
            {
                position: 'relative',
                padding: 0,
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                border: 'none'
            },
            isAllSelected && {
                opacity: 1
            }
        ],
        cellIsGroupExpander: [
            cellStyles,
            {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: FontSizes.small,
                padding: 0,
                border: 'none',
                width: SPACER_WIDTH,
                color: palette.neutralSecondary,
                selectors: {
                    ':hover': {
                        backgroundColor: palette.neutralLighter
                    },
                    ':active': {
                        backgroundColor: palette.neutralLight
                    }
                }
            }
        ],
        cellIsActionable: [
            {
                selectors: {
                    ':hover': {
                        color: semanticColors.bodyText,
                        background: semanticColors.listHeaderBackgroundHovered
                    },
                    ':active': {
                        background: semanticColors.listHeaderBackgroundPressed
                    }
                }
            }
        ],
        cellIsEmpty: [
            {
                textOverflow: 'clip'
            }
        ],
        cellSizer: [
            classNames.cellSizer,
            focusClear(),
            {
                display: 'inline-block',
                position: 'relative',
                cursor: 'ew-resize',
                bottom: 0,
                top: 0,
                overflow: 'hidden',
                height: 'inherit',
                background: 'transparent',
                zIndex: 1,
                width: 16,
                selectors: {
                    ':after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        width: 1,
                        background: colors.resizerColor,
                        opacity: 0,
                        left: '50%'
                    },
                    ':focus:after': cellSizerFadeInStyles,
                    ':hover:after': cellSizerFadeInStyles,
                    '&$cellIsResizing:after': [
                        cellSizerFadeInStyles,
                        {
                            boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.4)'
                        }
                    ]
                }
            }
        ],
        cellIsResizing: [classNames.isResizing],
        cellSizerStart: [
            {
                margin: '0 -8px'
            }
        ],
        cellSizerEnd: [
            {
                margin: 0,
                marginLeft: -16
            }
        ],
        collapseButton: [
            classNames.collapseButton,
            isAllCollapsed
                ? [
                    classNames.isCollapsed,
                    {
                        transform: 'rotate(0deg)',
                        transformOrigin: '50% 50%',
                        transition: 'transform .1s linear'
                    }
                ]
                : {
                    transform: 'rotate(90deg)',
                    transformOrigin: '50% 50%',
                    transition: 'transform .1s linear'
                }
        ],
        checkTooltip: [],
        sizingOverlay: [
            isSizing && {
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                cursor: 'ew-resize',
                background: 'rgba(255, 255, 255, 0)',
                selectors: (_d = {},
                    _d[HighContrastSelector] = {
                        background: 'transparent',
                        '-ms-high-contrast-adjust': 'none'
                    },
                    _d)
            }
        ],
        accessibleLabel: [hiddenContentStyle],
        dropHintCircleStyle: [
            classNames.dropHintCircleStyle,
            {
                display: 'inline-block',
                visibility: 'hidden',
                position: 'absolute',
                bottom: 0,
                height: 9,
                width: 9,
                borderRadius: '50%',
                marginLeft: -5,
                top: 34,
                overflow: 'visible',
                zIndex: 10,
                border: "1px solid " + palette.themePrimary,
                background: palette.white
            }
        ],
        dropHintCaretStyle: [
            classNames.dropHintCaretStyle,
            {
                display: 'none',
                position: 'absolute',
                top: 22,
                left: -7.5,
                fontSize: 16,
                color: palette.themePrimary,
                overflow: 'visible',
                zIndex: 10
            }
        ],
        dropHintLineStyle: [
            classNames.dropHintLineStyle,
            {
                display: 'none',
                position: 'absolute',
                bottom: 0,
                top: -3,
                overflow: 'hidden',
                height: 37,
                width: 1,
                background: palette.themePrimary,
                zIndex: 10
            }
        ],
        dropHintStyle: [
            {
                display: 'inline-block',
                position: 'absolute'
            }
        ]
    };
    var _b, _c, _d;
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRowCheck.styles.js



var DetailsRowCheck_styles_GlobalClassNames = {
    root: 'ms-DetailsRow-check',
    isDisabled: 'ms-DetailsRow-check--isDisabled',
    isHeader: 'ms-DetailsRow-check--isHeader'
};
var DetailsRowCheck_styles_getStyles = function (props) {
    var theme = props.theme, className = props.className, isHeader = props.isHeader, selected = props.selected, anySelected = props.anySelected, canSelect = props.canSelect, compact = props.compact, isVisible = props.isVisible;
    var classNames = getGlobalClassNames(DetailsRowCheck_styles_GlobalClassNames, theme);
    var rowHeight = DEFAULT_ROW_HEIGHTS.rowHeight, compactRowHeight = DEFAULT_ROW_HEIGHTS.compactRowHeight;
    var height = isHeader ? HEADER_HEIGHT : compact ? compactRowHeight : rowHeight;
    var isCheckVisible = isVisible || selected || anySelected;
    return {
        root: [classNames.root, className],
        check: [
            !canSelect && classNames.isDisabled,
            isHeader && classNames.isHeader,
            getFocusStyle(theme),
            theme.fonts.small,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default',
                boxSizing: 'border-box',
                verticalAlign: 'top',
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                opacity: 0,
                height: height,
                width: 40,
                padding: 0,
                margin: 0,
                selectors: {
                    '&:hover': {
                        opacity: 1
                    }
                }
            },
            isCheckVisible && {
                opacity: 1
            }
        ],
        isDisabled: []
    };
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRowCheck.js







var getCheckClassNames = classNamesFunction();
var DetailsRowCheck_getClassNames = classNamesFunction();
var DetailsRowCheckBase = function (props) {
    var _a = props.isVisible, isVisible = _a === void 0 ? false : _a, _b = props.canSelect, canSelect = _b === void 0 ? false : _b, _c = props.isSelected, isSelected = _c === void 0 ? false : _c, _d = props.anySelected, anySelected = _d === void 0 ? false : _d, _e = props.selected, selected = _e === void 0 ? false : _e, _f = props.isHeader, isHeader = _f === void 0 ? false : _f, className = props.className, checkClassName = props.checkClassName, styles = props.styles, theme = props.theme, compact = props.compact, buttonProps = __rest(props, ["isVisible", "canSelect", "isSelected", "anySelected", "selected", "isHeader", "className", "checkClassName", "styles", "theme", "compact"]);
    var isPressed = props.isSelected || props.selected;
    var checkStyles = Check_styles_getStyles({ theme: theme });
    var checkClassNames = getCheckClassNames(checkStyles, {
        theme: theme
    });
    var classNames = DetailsRowCheck_getClassNames(styles, {
        theme: theme,
        canSelect: canSelect,
        selected: isPressed,
        anySelected: anySelected,
        className: className,
        isHeader: isHeader,
        isVisible: isVisible,
        compact: compact
    });
    return canSelect ? (external__react_["createElement"]("div", __assign({}, buttonProps, { role: "checkbox", className: css(classNames.root, classNames.check, checkClassNames.checkHost), "aria-checked": isPressed, "data-selection-toggle": true, "data-automationid": "DetailsRowCheck" }),
        external__react_["createElement"](Check, { checked: isPressed }))) : (external__react_["createElement"]("div", __assign({}, buttonProps, { className: css(classNames.root, classNames.check) })));
};
var DetailsRowCheck = styled(DetailsRowCheckBase, DetailsRowCheck_styles_getStyles, undefined, { scope: 'DetailsRowCheck' });

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/utilities/dragdrop/DragDropHelper.js


var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
var DragDropHelper_DragDropHelper = /** @class */ (function () {
    function DragDropHelper(params) {
        this._selection = params.selection;
        this._dragEnterCounts = {};
        this._activeTargets = {};
        this._lastId = 0;
        this._events = new EventGroup_EventGroup(this);
        // clear drag data when mouse up, use capture event to ensure it will be run
        this._events.on(document.body, 'mouseup', this._onMouseUp.bind(this), true);
        this._events.on(document, 'mouseup', this._onDocumentMouseUp.bind(this), true);
    }
    DragDropHelper.prototype.dispose = function () {
        this._events.dispose();
    };
    DragDropHelper.prototype.subscribe = function (root, events, dragDropOptions) {
        var _this = this;
        var _a = dragDropOptions.key, key = _a === void 0 ? "" + ++this._lastId : _a;
        var handlers = [];
        var onDragStart;
        var onDragLeave;
        var onDragEnter;
        var onDragEnd;
        var onDrop;
        var onDragOver;
        var onMouseDown;
        var isDraggable;
        var isDroppable;
        var activeTarget;
        if (dragDropOptions && root) {
            var eventMap = dragDropOptions.eventMap, context = dragDropOptions.context, updateDropState_1 = dragDropOptions.updateDropState;
            var dragDropTarget = {
                root: root,
                options: dragDropOptions,
                key: key
            };
            isDraggable = this._isDraggable(dragDropTarget);
            isDroppable = this._isDroppable(dragDropTarget);
            if (isDraggable || isDroppable) {
                if (eventMap) {
                    for (var _i = 0, eventMap_1 = eventMap; _i < eventMap_1.length; _i++) {
                        var event_1 = eventMap_1[_i];
                        var handler = {
                            callback: event_1.callback.bind(null, context),
                            eventName: event_1.eventName
                        };
                        handlers.push(handler);
                        this._events.on(root, handler.eventName, handler.callback);
                    }
                }
            }
            if (isDroppable) {
                // If the target is droppable, wire up global event listeners to track drop-related events.
                onDragLeave = function (event) {
                    if (!event.isHandled) {
                        event.isHandled = true;
                        _this._dragEnterCounts[key]--;
                        if (_this._dragEnterCounts[key] === 0) {
                            updateDropState_1(false /* isDropping */, event);
                        }
                    }
                };
                onDragEnter = function (event) {
                    event.preventDefault(); // needed for IE
                    if (!event.isHandled) {
                        event.isHandled = true;
                        _this._dragEnterCounts[key]++;
                        if (_this._dragEnterCounts[key] === 1) {
                            updateDropState_1(true /* isDropping */, event);
                        }
                    }
                };
                onDragEnd = function (event) {
                    _this._dragEnterCounts[key] = 0;
                    updateDropState_1(false /* isDropping */, event);
                };
                onDrop = function (event) {
                    _this._dragEnterCounts[key] = 0;
                    updateDropState_1(false /* isDropping */, event);
                    if (dragDropOptions.onDrop) {
                        dragDropOptions.onDrop(dragDropOptions.context.data, event);
                    }
                };
                onDragOver = function (event) {
                    event.preventDefault();
                    if (dragDropOptions.onDragOver) {
                        dragDropOptions.onDragOver(dragDropOptions.context.data, event);
                    }
                };
                this._dragEnterCounts[key] = 0;
                // dragenter and dragleave will be fired when hover to the child element
                // but we only want to change state when enter or leave the current element
                // use the count to ensure it.
                events.on(root, 'dragenter', onDragEnter);
                events.on(root, 'dragleave', onDragLeave);
                events.on(root, 'dragend', onDragEnd);
                events.on(root, 'drop', onDrop);
                events.on(root, 'dragover', onDragOver);
            }
            if (isDraggable) {
                // If the target is draggable, wire up local event listeners for mouse events.
                onMouseDown = this._onMouseDown.bind(this, dragDropTarget);
                onDragEnd = this._onDragEnd.bind(this, dragDropTarget);
                // We need to add in data so that on Firefox we show the ghost element when dragging
                onDragStart = function (event) {
                    var options = _this._dragData.dragTarget.options;
                    if (options && options.onDragStart) {
                        options.onDragStart(options.context.data, options.context.index, _this._selection.getSelection(), event);
                    }
                    _this._isDragging = true;
                    event.dataTransfer.setData('id', root.id);
                };
                events.on(root, 'dragstart', onDragStart);
                events.on(root, 'mousedown', onMouseDown);
                events.on(root, 'dragend', onDragEnd);
            }
            activeTarget = {
                target: dragDropTarget,
                dispose: function () {
                    if (_this._activeTargets[key] === activeTarget) {
                        delete _this._activeTargets[key];
                    }
                    if (root) {
                        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
                            var handler = handlers_1[_i];
                            _this._events.off(root, handler.eventName, handler.callback);
                        }
                        if (isDroppable) {
                            events.off(root, 'dragenter', onDragEnter);
                            events.off(root, 'dragleave', onDragLeave);
                            events.off(root, 'dragend', onDragEnd);
                            events.off(root, 'dragover', onDragOver);
                            events.off(root, 'drop', onDrop);
                        }
                        if (isDraggable) {
                            events.off(root, 'dragstart', onDragStart);
                            events.off(root, 'mousedown', onMouseDown);
                            events.off(root, 'dragend', onDragEnd);
                        }
                    }
                }
            };
            this._activeTargets[key] = activeTarget;
        }
        return {
            key: key,
            dispose: function () {
                if (activeTarget) {
                    activeTarget.dispose();
                }
            }
        };
    };
    DragDropHelper.prototype.unsubscribe = function (root, key) {
        var activeTarget = this._activeTargets[key];
        if (activeTarget) {
            activeTarget.dispose();
        }
    };
    DragDropHelper.prototype._onDragEnd = function (target, event) {
        var options = target.options;
        if (options.onDragEnd) {
            options.onDragEnd(options.context.data, event);
        }
    };
    /**
     * clear drag data when mouse up on body
     */
    DragDropHelper.prototype._onMouseUp = function (event) {
        this._isDragging = false;
        if (this._dragData) {
            for (var _i = 0, _a = Object.keys(this._activeTargets); _i < _a.length; _i++) {
                var key = _a[_i];
                var activeTarget = this._activeTargets[key];
                if (activeTarget.target.root) {
                    this._events.off(activeTarget.target.root, 'mousemove');
                    this._events.off(activeTarget.target.root, 'mouseleave');
                }
            }
            if (this._dragData.dropTarget) {
                // raise dragleave event to let dropTarget know it need to remove dropping style
                EventGroup_EventGroup.raise(this._dragData.dropTarget.root, 'dragleave');
                EventGroup_EventGroup.raise(this._dragData.dropTarget.root, 'drop');
            }
        }
        this._dragData = null;
    };
    /**
     * clear drag data when mouse up outside of the document
     */
    DragDropHelper.prototype._onDocumentMouseUp = function (event) {
        if (event.target === document.documentElement) {
            this._onMouseUp(event);
        }
    };
    /**
     * when mouse move over a new drop target while dragging some items,
     * fire dragleave on the old target and fire dragenter to the new target
     * The target will handle style change on dragenter and dragleave events.
     */
    DragDropHelper.prototype._onMouseMove = function (target, event) {
        var 
        // use buttons property here since ev.button in some edge case is not updating well during the move.
        // but firefox doesn't support it, so we set the default value when it is not defined.
        _a = event.buttons, 
        // use buttons property here since ev.button in some edge case is not updating well during the move.
        // but firefox doesn't support it, so we set the default value when it is not defined.
        buttons = _a === void 0 ? MOUSEMOVE_PRIMARY_BUTTON : _a;
        if (this._dragData && buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
            // cancel mouse down event and return early when the primary button is not pressed
            this._onMouseUp(event);
            return;
        }
        var root = target.root, key = target.key;
        if (this._isDragging) {
            if (this._isDroppable(target)) {
                // we can have nested drop targets in the DOM, like a folder inside a group. In that case, when we drag into
                // the inner target (folder), we first set dropTarget to the inner element. But the same event is bubbled to the
                // outer target too, and we need to prevent the outer one from taking over.
                // So, check if the last dropTarget is not a child of the current.
                if (this._dragData) {
                    if (this._dragData.dropTarget && this._dragData.dropTarget.key !== key && !this._isChild(root, this._dragData.dropTarget.root)) {
                        if (this._dragEnterCounts[this._dragData.dropTarget.key] > 0) {
                            EventGroup_EventGroup.raise(this._dragData.dropTarget.root, 'dragleave');
                            EventGroup_EventGroup.raise(root, 'dragenter');
                            this._dragData.dropTarget = target;
                        }
                    }
                }
            }
        }
    };
    /**
     * when mouse leave a target while dragging some items, fire dragleave to the target
     */
    DragDropHelper.prototype._onMouseLeave = function (target, event) {
        if (this._isDragging) {
            if (this._dragData && this._dragData.dropTarget && this._dragData.dropTarget.key === target.key) {
                EventGroup_EventGroup.raise(target.root, 'dragleave');
                this._dragData.dropTarget = undefined;
            }
        }
    };
    /**
     * when mouse down on a draggable item, we start to track dragdata.
     */
    DragDropHelper.prototype._onMouseDown = function (target, event) {
        if (event.button !== MOUSEDOWN_PRIMARY_BUTTON) {
            // Ignore anything except the primary button.
            return;
        }
        if (this._isDraggable(target)) {
            this._dragData = {
                clientX: event.clientX,
                clientY: event.clientY,
                eventTarget: event.target,
                dragTarget: target
            };
            for (var _i = 0, _a = Object.keys(this._activeTargets); _i < _a.length; _i++) {
                var key = _a[_i];
                var activeTarget = this._activeTargets[key];
                if (activeTarget.target.root) {
                    this._events.on(activeTarget.target.root, 'mousemove', this._onMouseMove.bind(this, activeTarget.target));
                    this._events.on(activeTarget.target.root, 'mouseleave', this._onMouseLeave.bind(this, activeTarget.target));
                }
            }
        }
        else {
            this._dragData = null;
        }
    };
    /**
     * determine whether the child target is a descendant of the parent
     */
    DragDropHelper.prototype._isChild = function (parent, child) {
        var parentElement = external__react_dom_["findDOMNode"](parent);
        var childElement = external__react_dom_["findDOMNode"](child);
        while (childElement && childElement.parentElement) {
            if (childElement.parentElement === parentElement) {
                return true;
            }
            childElement = childElement.parentElement;
        }
        return false;
    };
    DragDropHelper.prototype._isDraggable = function (target) {
        var options = target.options;
        return !!(options.canDrag && options.canDrag(options.context.data));
    };
    DragDropHelper.prototype._isDroppable = function (target) {
        // TODO: take the drag item into consideration to prevent dragging an item into the same group
        var options = target.options;
        var dragContext = this._dragData && this._dragData.dragTarget ? this._dragData.dragTarget.options.context : undefined;
        return !!(options.canDrop && options.canDrop(options.context, dragContext));
    };
    return DragDropHelper;
}());


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/utilities/dragdrop/index.js


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsColumn.base.js






var DetailsColumn_base_MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var DetailsColumn_base_getClassNames = classNamesFunction();
var TRANSITION_DURATION_DRAG = 200; // ms
var TRANSITION_DURATION_DROP = 1500; // ms
var CLASSNAME_ADD_INTERVAL = 20; // ms
var DetailsColumn_base_DetailsColumnBase = /** @class */ (function (_super) {
    __extends(DetailsColumnBase, _super);
    function DetailsColumnBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onRenderColumnHeaderTooltip = function (tooltipHostProps, defaultRender) {
            return external__react_["createElement"]("span", { className: tooltipHostProps.hostClassName }, tooltipHostProps.children);
        };
        _this._onRootMouseDown = function (ev) {
            var isDraggable = _this.props.isDraggable;
            // Ignore anything except the primary button.
            if (isDraggable && ev.button === DetailsColumn_base_MOUSEDOWN_PRIMARY_BUTTON) {
                ev.stopPropagation();
            }
        };
        _this._root = external__react_["createRef"]();
        _this._onDragStart = _this._onDragStart.bind(_this);
        _this._onDragEnd = _this._onDragEnd.bind(_this);
        _this._onRootMouseDown = _this._onRootMouseDown.bind(_this);
        _this._updateHeaderDragInfo = _this._updateHeaderDragInfo.bind(_this);
        return _this;
    }
    DetailsColumnBase.prototype.render = function () {
        var _a = this.props, column = _a.column, columnIndex = _a.columnIndex, parentId = _a.parentId, isDraggable = _a.isDraggable, styles = _a.styles, theme = _a.theme, _b = _a.cellStyleProps, cellStyleProps = _b === void 0 ? DEFAULT_CELL_STYLE_PROPS : _b;
        var _c = this.props.onRenderColumnHeaderTooltip, onRenderColumnHeaderTooltip = _c === void 0 ? this._onRenderColumnHeaderTooltip : _c;
        this._classNames = DetailsColumn_base_getClassNames(styles, {
            theme: theme,
            headerClassName: column.headerClassName,
            iconClassName: column.iconClassName,
            isActionable: column.columnActionsMode !== ColumnActionsMode.disabled,
            isEmpty: !column.name,
            isIconVisible: column.isSorted || column.isGrouped || column.isFiltered,
            isPadded: column.isPadded,
            isIconOnly: column.isIconOnly,
            cellStyleProps: cellStyleProps,
            transitionDurationDrag: TRANSITION_DURATION_DRAG,
            transitionDurationDrop: TRANSITION_DURATION_DROP
        });
        var classNames = this._classNames;
        return (external__react_["createElement"](external__react_["Fragment"], null,
            external__react_["createElement"]("div", { key: column.key, ref: this._root, role: 'columnheader', "aria-sort": column.isSorted ? (column.isSortedDescending ? 'descending' : 'ascending') : 'none', "aria-colindex": columnIndex, className: classNames.root, "data-is-draggable": isDraggable, draggable: isDraggable, style: {
                    width: column.calculatedWidth +
                        cellStyleProps.cellLeftPadding +
                        cellStyleProps.cellRightPadding +
                        (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0)
                }, "data-automationid": 'ColumnsHeaderColumn', "data-item-key": column.key },
                isDraggable && external__react_["createElement"](Icon, { iconName: "GripperBarVertical", className: classNames.gripperBarVerticalStyle }),
                onRenderColumnHeaderTooltip({
                    hostClassName: classNames.cellTooltip,
                    id: parentId + "-" + column.key + "-tooltip",
                    setAriaDescribedBy: false,
                    content: column.columnActionsMode !== ColumnActionsMode.disabled ? column.ariaLabel : '',
                    children: (external__react_["createElement"]("span", { id: parentId + "-" + column.key, "aria-label": column.isIconOnly ? column.name : undefined, "aria-labelledby": column.isIconOnly ? undefined : parentId + "-" + column.key + "-name ", className: classNames.cellTitle, "data-is-focusable": column.columnActionsMode !== ColumnActionsMode.disabled, role: column.columnActionsMode !== ColumnActionsMode.disabled &&
                            (column.onColumnClick !== undefined || this.props.onColumnClick !== undefined)
                            ? 'button'
                            : undefined, "aria-describedby": !this.props.onRenderColumnHeaderTooltip && this._hasAccessibleLabel() ? parentId + "-" + column.key + "-tooltip" : undefined, onContextMenu: this._onColumnContextMenu.bind(this, column), onClick: this._onColumnClick.bind(this, column), "aria-haspopup": column.columnActionsMode === ColumnActionsMode.hasDropdown, "aria-expanded": column.columnActionsMode === ColumnActionsMode.hasDropdown ? (column.isMenuOpen ? true : false) : undefined },
                        external__react_["createElement"]("span", { id: parentId + "-" + column.key + "-name", className: classNames.cellName },
                            (column.iconName || column.iconClassName) && external__react_["createElement"](Icon, { className: classNames.iconClassName, iconName: column.iconName }),
                            column.isIconOnly ? external__react_["createElement"]("span", { className: classNames.accessibleLabel }, column.name) : column.name),
                        column.isFiltered && external__react_["createElement"](Icon, { className: classNames.nearIcon, iconName: 'Filter' }),
                        column.isSorted && external__react_["createElement"](Icon, { className: classNames.sortIcon, iconName: column.isSortedDescending ? 'SortDown' : 'SortUp' }),
                        column.isGrouped && external__react_["createElement"](Icon, { className: classNames.nearIcon, iconName: 'GroupedDescending' }),
                        column.columnActionsMode === ColumnActionsMode.hasDropdown && !column.isIconOnly && (external__react_["createElement"](Icon, { "aria-hidden": true, className: classNames.filterChevron, iconName: 'ChevronDown' }))))
                }, this._onRenderColumnHeaderTooltip)),
            !this.props.onRenderColumnHeaderTooltip ? this._renderAccessibleLabel() : null));
    };
    DetailsColumnBase.prototype.componentDidMount = function () {
        var _this = this;
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
            delete this._dragDropSubscription;
        }
        if (this.props.dragDropHelper && this.props.isDraggable) {
            this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getColumnDragDropOptions());
            // We need to use native on this to avoid MarqueeSelection from handling the event before us.
            this._events.on(this._root.current, 'mousedown', this._onRootMouseDown);
        }
        var classNames = this._classNames;
        if (this.props.isDropped) {
            if (this._root.current) {
                this._root.current.classList.add(classNames.borderAfterDropping);
                this._async.setTimeout(function () {
                    if (_this._root.current) {
                        _this._root.current.classList.add(classNames.noBorderAfterDropping);
                    }
                }, CLASSNAME_ADD_INTERVAL);
            }
            this._async.setTimeout(function () {
                if (_this._root.current) {
                    _this._root.current.classList.remove(classNames.borderAfterDropping);
                    _this._root.current.classList.remove(classNames.noBorderAfterDropping);
                }
            }, TRANSITION_DURATION_DROP + CLASSNAME_ADD_INTERVAL);
        }
    };
    DetailsColumnBase.prototype.componentWillUnmount = function () {
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
            delete this._dragDropSubscription;
        }
    };
    DetailsColumnBase.prototype.componentDidUpdate = function () {
        if (!this._dragDropSubscription && this.props.dragDropHelper && this.props.isDraggable) {
            this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getColumnDragDropOptions());
            // We need to use native on this to avoid MarqueeSelection from handling the event before us.
            this._events.on(this._root.current, 'mousedown', this._onRootMouseDown);
        }
        if (this._dragDropSubscription && !this.props.isDraggable) {
            this._dragDropSubscription.dispose();
            this._events.off(this._root.current, 'mousedown');
            delete this._dragDropSubscription;
        }
    };
    DetailsColumnBase.prototype._onColumnClick = function (column, ev) {
        if (column.columnActionsMode === ColumnActionsMode.disabled) {
            return;
        }
        var onColumnClick = this.props.onColumnClick;
        if (column.onColumnClick) {
            column.onColumnClick(ev, column);
        }
        if (onColumnClick) {
            onColumnClick(ev, column);
        }
    };
    DetailsColumnBase.prototype._getColumnDragDropOptions = function () {
        var _this = this;
        var columnIndex = this.props.columnIndex;
        var options = {
            selectionIndex: columnIndex,
            context: { data: columnIndex, index: columnIndex },
            canDrag: function () { return _this.props.isDraggable; },
            canDrop: function () { return false; },
            onDragStart: this._onDragStart,
            updateDropState: function () { return undefined; },
            onDrop: function () { return undefined; },
            onDragEnd: this._onDragEnd
        };
        return options;
    };
    DetailsColumnBase.prototype._hasAccessibleLabel = function () {
        var column = this.props.column;
        return !!(column.ariaLabel ||
            column.filterAriaLabel ||
            column.sortAscendingAriaLabel ||
            column.sortDescendingAriaLabel ||
            column.groupAriaLabel);
    };
    DetailsColumnBase.prototype._renderAccessibleLabel = function () {
        var _a = this.props, column = _a.column, parentId = _a.parentId;
        var classNames = this._classNames;
        return this._hasAccessibleLabel() && !this.props.onRenderColumnHeaderTooltip ? (external__react_["createElement"]("label", { key: column.key + "_label", id: parentId + "-" + column.key + "-tooltip", className: classNames.accessibleLabel },
            column.ariaLabel,
            (column.isFiltered && column.filterAriaLabel) || null,
            (column.isSorted && (column.isSortedDescending ? column.sortDescendingAriaLabel : column.sortAscendingAriaLabel)) || null,
            (column.isGrouped && column.groupAriaLabel) || null)) : null;
    };
    DetailsColumnBase.prototype._onDragStart = function (item, itemIndex, selectedItems, event) {
        var _this = this;
        var classNames = this._classNames;
        if (itemIndex) {
            this._updateHeaderDragInfo(itemIndex);
            this._root.current.classList.add(classNames.borderWhileDragging);
            this._async.setTimeout(function () {
                if (_this._root.current) {
                    _this._root.current.classList.add(classNames.noBorderWhileDragging);
                }
            }, CLASSNAME_ADD_INTERVAL);
        }
    };
    DetailsColumnBase.prototype._onDragEnd = function (item, event) {
        var classNames = this._classNames;
        if (event) {
            this._updateHeaderDragInfo(-1, event);
        }
        this._root.current.classList.remove(classNames.borderWhileDragging);
        this._root.current.classList.remove(classNames.noBorderWhileDragging);
    };
    DetailsColumnBase.prototype._updateHeaderDragInfo = function (itemIndex, event) {
        if (this.props.setDraggedItemIndex) {
            this.props.setDraggedItemIndex(itemIndex);
        }
        if (this.props.updateDragInfo) {
            this.props.updateDragInfo({ itemIndex: itemIndex }, event);
        }
    };
    DetailsColumnBase.prototype._onColumnContextMenu = function (column, ev) {
        var onColumnContextMenu = this.props.onColumnContextMenu;
        if (column.onColumnContextMenu) {
            column.onColumnContextMenu(column, ev);
            ev.preventDefault();
        }
        if (onColumnContextMenu) {
            onColumnContextMenu(column, ev);
            ev.preventDefault();
        }
    };
    return DetailsColumnBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsColumn.styles.js




var DetailsColumn_styles_GlobalClassNames = {
    isActionable: 'is-actionable',
    cellIsCheck: 'ms-DetailsHeader-cellIsCheck',
    collapseButton: 'ms-DetailsHeader-collapseButton',
    isCollapsed: 'is-collapsed',
    isAllSelected: 'is-allSelected',
    isSelectAllHidden: 'is-selectAllHidden',
    isResizingColumn: 'is-resizingColumn',
    isEmpty: 'is-empty',
    isIconVisible: 'is-icon-visible',
    cellSizer: 'ms-DetailsHeader-cellSizer',
    isResizing: 'is-resizing',
    dropHintCircleStyle: 'ms-DetailsHeader-dropHintCircleStyle',
    dropHintLineStyle: 'ms-DetailsHeader-dropHintLineStyle',
    cellTitle: 'ms-DetailsHeader-cellTitle',
    cellName: 'ms-DetailsHeader-cellName',
    filterChevron: 'ms-DetailsHeader-filterChevron',
    gripperBarVerticalStyle: 'ms-DetailsColumn-gripperBar'
};
var DetailsColumn_styles_getStyles = function (props) {
    var theme = props.theme, headerClassName = props.headerClassName, iconClassName = props.iconClassName, isActionable = props.isActionable, isEmpty = props.isEmpty, isIconVisible = props.isIconVisible, isPadded = props.isPadded, isIconOnly = props.isIconOnly, _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? DEFAULT_CELL_STYLE_PROPS : _a, transitionDurationDrag = props.transitionDurationDrag, transitionDurationDrop = props.transitionDurationDrop;
    var semanticColors = theme.semanticColors, palette = theme.palette;
    var classNames = getGlobalClassNames(DetailsColumn_styles_GlobalClassNames, theme);
    var colors = {
        iconForegroundColor: semanticColors.bodySubtext,
        headerForegroundColor: semanticColors.bodyText,
        headerBackgroundColor: semanticColors.bodyBackground,
        dropdownChevronForegroundColor: palette.neutralTertiary,
        resizerColor: palette.neutralTertiaryAlt
    };
    var nearIconStyle = {
        color: colors.iconForegroundColor,
        opacity: 1,
        paddingLeft: 8
    };
    var borderWhileDragging = [
        {
            outline: "1px solid " + palette.themePrimary
        }
    ];
    var borderAfterDragOrDrop = [
        {
            outlineColor: 'transparent'
        }
    ];
    return {
        root: [
            getCellStyles(props),
            theme.fonts.small,
            isActionable && [
                classNames.isActionable,
                {
                    selectors: {
                        ':hover': {
                            color: semanticColors.bodyText,
                            background: semanticColors.listHeaderBackgroundHovered
                        },
                        ':active': {
                            background: semanticColors.listHeaderBackgroundPressed
                        }
                    }
                }
            ],
            isEmpty && [
                classNames.isEmpty,
                {
                    textOverflow: 'clip'
                }
            ],
            isIconVisible && classNames.isIconVisible,
            isPadded && {
                paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding
            },
            {
                selectors: {
                    ':hover i[data-icon-name="GripperBarVertical"]': {
                        display: 'block'
                    }
                }
            },
            headerClassName
        ],
        gripperBarVerticalStyle: [
            {
                display: 'none',
                position: 'absolute',
                textAlign: 'left',
                color: palette.neutralTertiary,
                left: 1
            }
        ],
        nearIcon: nearIconStyle,
        sortIcon: [
            nearIconStyle,
            {
                paddingLeft: 4,
                position: 'relative',
                top: 1
            }
        ],
        iconClassName: [
            {
                color: colors.iconForegroundColor,
                opacity: 1
            },
            iconClassName
        ],
        filterChevron: [
            classNames.filterChevron,
            {
                color: colors.dropdownChevronForegroundColor,
                paddingLeft: 4,
                verticalAlign: 'middle'
            }
        ],
        cellTitle: [
            classNames.cellTitle,
            getFocusStyle(theme),
            __assign({ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'stretch', boxSizing: 'border-box', overflow: 'hidden', padding: "0 " + cellStyleProps.cellRightPadding + "px 0 " + cellStyleProps.cellLeftPadding + "px" }, (isIconOnly
                ? {
                    alignContent: 'flex-end',
                    maxHeight: '100%',
                    flexWrap: 'wrap-reverse'
                }
                : {}))
        ],
        cellName: [
            classNames.cellName,
            {
                flex: '0 1 auto',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            },
            isIconOnly && {
                selectors: {
                    $nearIcon: {
                        paddingLeft: 0
                    }
                }
            }
        ],
        cellTooltip: [
            {
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }
        ],
        accessibleLabel: [hiddenContentStyle],
        borderWhileDragging: borderWhileDragging,
        noBorderWhileDragging: [borderAfterDragOrDrop, { transition: "outline " + transitionDurationDrag + "ms ease" }],
        borderAfterDropping: [borderWhileDragging],
        noBorderAfterDropping: [borderAfterDragOrDrop, { transition: "outline  " + transitionDurationDrop + "ms ease" }]
    };
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsColumn.js



var DetailsColumn = styled(DetailsColumn_base_DetailsColumnBase, DetailsColumn_styles_getStyles, undefined, { scope: 'DetailsColumn' });

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.types.js
var SelectAllVisibility;
(function (SelectAllVisibility) {
    SelectAllVisibility[SelectAllVisibility["none"] = 0] = "none";
    SelectAllVisibility[SelectAllVisibility["hidden"] = 1] = "hidden";
    SelectAllVisibility[SelectAllVisibility["visible"] = 2] = "visible";
})(SelectAllVisibility || (SelectAllVisibility = {}));

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.base.js
















var DetailsHeader_base_getClassNames = classNamesFunction();
var DetailsHeader_base_MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var DetailsHeader_base_MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
var NO_COLUMNS = [];
var DetailsHeader_base_DetailsHeaderBase = /** @class */ (function (_super) {
    __extends(DetailsHeaderBase, _super);
    function DetailsHeaderBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootComponent = external__react_["createRef"]();
        _this._draggedColumnIndex = -1;
        _this._dropHintDetails = {};
        _this._getDropHintPositions = function () {
            var _a = _this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
            var columnReorderProps = _this.state.columnReorderProps;
            var prevX = 0;
            var prevMid = 0;
            var prevRef;
            var frozenColumnCountFromStart = columnReorderProps && columnReorderProps.frozenColumnCountFromStart ? columnReorderProps.frozenColumnCountFromStart : 0;
            var frozenColumnCountFromEnd = columnReorderProps && columnReorderProps.frozenColumnCountFromEnd ? columnReorderProps.frozenColumnCountFromEnd : 0;
            for (var i = frozenColumnCountFromStart; i < columns.length - frozenColumnCountFromEnd + 1; i++) {
                if (_this._rootElement) {
                    var dropHintElement = _this._rootElement.querySelectorAll('#columnDropHint_' + i)[0];
                    if (dropHintElement) {
                        if (i === frozenColumnCountFromStart) {
                            prevX = dropHintElement.offsetLeft;
                            prevMid = dropHintElement.offsetLeft;
                            prevRef = dropHintElement;
                        }
                        else {
                            var newMid = (dropHintElement.offsetLeft + prevX) / 2;
                            _this._dropHintDetails[i - 1] = {
                                originX: prevX,
                                startX: prevMid,
                                endX: newMid,
                                dropHintElementRef: prevRef
                            };
                            prevMid = newMid;
                            prevRef = dropHintElement;
                            prevX = dropHintElement.offsetLeft;
                            if (i === columns.length - frozenColumnCountFromEnd) {
                                _this._dropHintDetails[i] = {
                                    originX: prevX,
                                    startX: prevMid,
                                    endX: dropHintElement.offsetLeft,
                                    dropHintElementRef: prevRef
                                };
                            }
                        }
                    }
                }
            }
        };
        /**
         * Based on the given cursor position, finds the nearest drop hint and updates the state to make it visible
         *
         */
        _this._computeDropHintToBeShown = function (clientX) {
            if (_this._rootElement) {
                var clientRect = _this._rootElement.getBoundingClientRect();
                var headerOriginX = clientRect.left;
                var eventXRelativePosition = clientX - headerOriginX;
                var currentDropHintIndex = _this._currentDropHintIndex;
                if (_this._isValidCurrentDropHintIndex()) {
                    if (_this._liesBetween(eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex].startX, _this._dropHintDetails[currentDropHintIndex].endX)) {
                        return;
                    }
                }
                var _a = _this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
                var columnReorderProps = _this.state.columnReorderProps;
                var frozenColumnCountFromStart = columnReorderProps && columnReorderProps.frozenColumnCountFromStart ? columnReorderProps.frozenColumnCountFromStart : 0;
                var frozenColumnCountFromEnd = columnReorderProps && columnReorderProps.frozenColumnCountFromEnd ? columnReorderProps.frozenColumnCountFromEnd : 0;
                var currentIndex = frozenColumnCountFromStart;
                var lastValidColumn = columns.length - frozenColumnCountFromEnd;
                var indexToUpdate = -1;
                if (_this._isBefore(eventXRelativePosition, _this._dropHintDetails[currentIndex].endX)) {
                    indexToUpdate = currentIndex;
                }
                else if (_this._isAfter(eventXRelativePosition, _this._dropHintDetails[lastValidColumn].startX)) {
                    indexToUpdate = lastValidColumn;
                }
                else if (_this._isValidCurrentDropHintIndex()) {
                    if (_this._dropHintDetails[currentDropHintIndex + 1] &&
                        _this._liesBetween(eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex + 1].startX, _this._dropHintDetails[currentDropHintIndex + 1].endX)) {
                        indexToUpdate = currentDropHintIndex + 1;
                    }
                    else if (_this._dropHintDetails[currentDropHintIndex - 1] &&
                        _this._liesBetween(eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex - 1].startX, _this._dropHintDetails[currentDropHintIndex - 1].endX)) {
                        indexToUpdate = currentDropHintIndex - 1;
                    }
                }
                if (indexToUpdate === -1) {
                    var startIndex = frozenColumnCountFromStart;
                    var endIndex = lastValidColumn;
                    while (startIndex < endIndex) {
                        var middleIndex = Math.ceil((endIndex + startIndex) / 2);
                        if (_this._liesBetween(eventXRelativePosition, _this._dropHintDetails[middleIndex].startX, _this._dropHintDetails[middleIndex].endX)) {
                            indexToUpdate = middleIndex;
                            break;
                        }
                        else if (_this._isBefore(eventXRelativePosition, _this._dropHintDetails[middleIndex].originX)) {
                            endIndex = middleIndex;
                        }
                        else if (_this._isAfter(eventXRelativePosition, _this._dropHintDetails[middleIndex].originX)) {
                            startIndex = middleIndex;
                        }
                    }
                }
                if (indexToUpdate === _this._draggedColumnIndex || indexToUpdate === _this._draggedColumnIndex + 1) {
                    if (_this._isValidCurrentDropHintIndex()) {
                        _this._resetDropHints();
                    }
                }
                else if (currentDropHintIndex !== indexToUpdate && indexToUpdate >= 0) {
                    _this._resetDropHints();
                    _this._updateDropHintElement(_this._dropHintDetails[indexToUpdate].dropHintElementRef, 'inline-block');
                    _this._currentDropHintIndex = indexToUpdate;
                }
            }
        };
        _this._renderColumnSizer = function (_a) {
            var columnIndex = _a.columnIndex;
            var _b = _this.props.columns, columns = _b === void 0 ? NO_COLUMNS : _b;
            var column = columns[columnIndex];
            var columnResizeDetails = _this.state.columnResizeDetails;
            var classNames = _this._classNames;
            return column.isResizable ? (external__react_["createElement"]("div", { key: column.key + "_sizer", "aria-hidden": true, role: "button", "data-is-focusable": false, onClick: stopPropagation, "data-sizer-index": columnIndex, onBlur: _this._onSizerBlur, className: css(classNames.cellSizer, columnIndex < columns.length - 1 ? classNames.cellSizerStart : classNames.cellSizerEnd, (_c = {},
                    _c[classNames.cellIsResizing] = columnResizeDetails && columnResizeDetails.columnIndex === columnIndex,
                    _c)), onDoubleClick: _this._onSizerDoubleClick.bind(_this, columnIndex) })) : null;
            var _c;
        };
        _this._onRenderColumnHeaderTooltip = function (tooltipHostProps, defaultRender) {
            return external__react_["createElement"]("span", { className: tooltipHostProps.hostClassName }, tooltipHostProps.children);
        };
        /**
         * Called when the select all toggle is clicked.
         */
        _this._onSelectAllClicked = function () {
            var selection = _this.props.selection;
            if (selection) {
                selection.toggleAllSelected();
            }
        };
        _this._onRootMouseDown = function (ev) {
            var columnIndexAttr = ev.target.getAttribute('data-sizer-index');
            var columnIndex = Number(columnIndexAttr);
            var _a = _this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
            if (columnIndexAttr === null || ev.button !== DetailsHeader_base_MOUSEDOWN_PRIMARY_BUTTON) {
                // Ignore anything except the primary button.
                return;
            }
            _this.setState({
                columnResizeDetails: {
                    columnIndex: columnIndex,
                    columnMinWidth: columns[columnIndex].calculatedWidth,
                    originX: ev.clientX
                }
            });
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._onRootMouseMove = function (ev) {
            var _a = _this.state, columnResizeDetails = _a.columnResizeDetails, isSizing = _a.isSizing;
            if (columnResizeDetails && !isSizing && ev.clientX !== columnResizeDetails.originX) {
                _this.setState({ isSizing: true });
            }
        };
        _this._onRootRef = function (focusZone) {
            if (focusZone) {
                // Need to resolve the actual DOM node, not the component. The element itself will be used for drag/drop and focusing.
                _this._rootElement = Object(external__react_dom_["findDOMNode"])(focusZone);
            }
            else {
                _this._rootElement = undefined;
            }
        };
        _this._onRootKeyDown = function (ev) {
            var _a = _this.state, columnResizeDetails = _a.columnResizeDetails, isSizing = _a.isSizing;
            var _b = _this.props, _c = _b.columns, columns = _c === void 0 ? NO_COLUMNS : _c, onColumnResized = _b.onColumnResized;
            var columnIndexAttr = ev.target.getAttribute('data-sizer-index');
            if (!columnIndexAttr || isSizing) {
                return;
            }
            var columnIndex = Number(columnIndexAttr);
            if (!columnResizeDetails) {
                if (ev.which === KeyCodes.enter) {
                    _this.setState({
                        columnResizeDetails: {
                            columnIndex: columnIndex,
                            columnMinWidth: columns[columnIndex].calculatedWidth
                        }
                    });
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
            else {
                var increment = void 0;
                if (ev.which === KeyCodes.enter) {
                    _this.setState({
                        columnResizeDetails: undefined
                    });
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                else if (ev.which === KeyCodes.left) {
                    increment = rtl_getRTL() ? 1 : -1;
                }
                else if (ev.which === KeyCodes.right) {
                    increment = rtl_getRTL() ? -1 : 1;
                }
                if (increment) {
                    if (!ev.shiftKey) {
                        increment *= 10;
                    }
                    _this.setState({
                        columnResizeDetails: __assign({}, columnResizeDetails, { columnMinWidth: columnResizeDetails.columnMinWidth + increment })
                    });
                    if (onColumnResized) {
                        onColumnResized(columns[columnIndex], columnResizeDetails.columnMinWidth + increment, columnIndex);
                    }
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        /**
         * mouse move event handler in the header
         * it will set isSizing state to true when user clicked on the sizer and move the mouse.
         *
         * @private
         * @param {React.MouseEvent} ev (mouse move event)
         */
        _this._onSizerMouseMove = function (ev) {
            var 
            // use buttons property here since ev.button in some edge case is not upding well during the move.
            // but firefox doesn't support it, so we set the default value when it is not defined.
            buttons = ev.buttons;
            var _a = _this.props, onColumnIsSizingChanged = _a.onColumnIsSizingChanged, onColumnResized = _a.onColumnResized, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b;
            var columnResizeDetails = _this.state.columnResizeDetails;
            if (buttons !== undefined && buttons !== DetailsHeader_base_MOUSEMOVE_PRIMARY_BUTTON) {
                // cancel mouse down event and return early when the primary button is not pressed
                _this._onSizerMouseUp(ev);
                return;
            }
            if (ev.clientX !== columnResizeDetails.originX) {
                if (onColumnIsSizingChanged) {
                    onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], true);
                }
            }
            if (onColumnResized) {
                var movement = ev.clientX - columnResizeDetails.originX;
                if (rtl_getRTL()) {
                    movement = -movement;
                }
                onColumnResized(columns[columnResizeDetails.columnIndex], columnResizeDetails.columnMinWidth + movement, columnResizeDetails.columnIndex);
            }
        };
        _this._onSizerBlur = function (ev) {
            var columnResizeDetails = _this.state.columnResizeDetails;
            if (columnResizeDetails) {
                _this.setState({
                    columnResizeDetails: undefined,
                    isSizing: false
                });
            }
        };
        /**
         * mouse up event handler in the header
         * clear the resize related state.
         * This is to ensure we can catch double click event
         *
         * @private
         * @param {React.MouseEvent} ev (mouse up event)
         */
        _this._onSizerMouseUp = function (ev) {
            var _a = _this.props, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b, onColumnIsSizingChanged = _a.onColumnIsSizingChanged;
            var columnResizeDetails = _this.state.columnResizeDetails;
            _this.setState({
                columnResizeDetails: undefined,
                isSizing: false
            });
            if (onColumnIsSizingChanged) {
                onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], false);
            }
        };
        var columnReorderProps = props.columnReorderProps || (props.columnReorderOptions && getLegacyColumnReorderProps(props.columnReorderOptions));
        _this.state = {
            columnReorderProps: columnReorderProps,
            columnResizeDetails: undefined,
            groupNestingDepth: _this.props.groupNestingDepth,
            isAllCollapsed: _this.props.isAllCollapsed,
            isAllSelected: !!_this.props.selection && _this.props.selection.isAllSelected()
        };
        _this._onToggleCollapseAll = _this._onToggleCollapseAll.bind(_this);
        _this._onSelectAllClicked = _this._onSelectAllClicked.bind(_this);
        _this._updateDragInfo = _this._updateDragInfo.bind(_this);
        _this._onDragOver = _this._onDragOver.bind(_this);
        _this._onDrop = _this._onDrop.bind(_this);
        _this._getHeaderDragDropOptions = _this._getHeaderDragDropOptions.bind(_this);
        _this._updateDroppingState = _this._updateDroppingState.bind(_this);
        _this._getDropHintPositions = _this._getDropHintPositions.bind(_this);
        _this._computeDropHintToBeShown = _this._computeDropHintToBeShown.bind(_this);
        _this._resetDropHints = _this._resetDropHints.bind(_this);
        _this._isValidCurrentDropHintIndex = _this._isValidCurrentDropHintIndex.bind(_this);
        _this._onRootRef = _this._onRootRef.bind(_this);
        _this._isEventOnHeader = _this._isEventOnHeader.bind(_this);
        _this._onDropIndexInfo = {
            sourceIndex: Number.MIN_SAFE_INTEGER,
            targetIndex: Number.MIN_SAFE_INTEGER
        };
        _this._id = getId('header');
        _this._currentDropHintIndex = Number.MIN_SAFE_INTEGER;
        return _this;
    }
    DetailsHeaderBase.getDerivedStateFromProps = function (newProps, prevState) {
        var columnReorderProps = newProps.columnReorderProps || (newProps.columnReorderOptions && getLegacyColumnReorderProps(newProps.columnReorderOptions));
        var groupNestingDepth = newProps.groupNestingDepth;
        var newState = { columnReorderProps: columnReorderProps, groupNestingDepth: groupNestingDepth };
        if (newProps.isAllCollapsed !== undefined) {
            newState.isAllCollapsed = newProps.isAllCollapsed;
        }
        return newState;
    };
    DetailsHeaderBase.prototype.componentDidMount = function () {
        var selection = this.props.selection;
        var columnReorderProps = this.state.columnReorderProps;
        this._events.on(selection, SELECTION_CHANGE, this._onSelectionChanged);
        // We need to use native on this to avoid MarqueeSelection from handling the event before us.
        this._events.on(this._rootElement, 'mousedown', this._onRootMouseDown);
        this._events.on(this._rootElement, 'keydown', this._onRootKeyDown);
        if (columnReorderProps && this._dragDropHelper) {
            this._subscriptionObject = this._dragDropHelper.subscribe(this._rootElement, this._events, this._getHeaderDragDropOptions());
        }
    };
    DetailsHeaderBase.prototype.componentDidUpdate = function (prevProps) {
        var columnReorderProps = this.state.columnReorderProps;
        if (!columnReorderProps) {
            if (this._subscriptionObject) {
                this._subscriptionObject.dispose();
                delete this._subscriptionObject;
            }
        }
        else if (!this._subscriptionObject && this._dragDropHelper) {
            this._subscriptionObject = this._dragDropHelper.subscribe(this._rootElement, this._events, this._getHeaderDragDropOptions());
        }
        if (this.props !== prevProps && this._onDropIndexInfo.sourceIndex >= 0 && this._onDropIndexInfo.targetIndex >= 0) {
            var _a = prevProps.columns, previousColumns = _a === void 0 ? NO_COLUMNS : _a;
            var _b = this.props.columns, columns = _b === void 0 ? NO_COLUMNS : _b;
            if (previousColumns[this._onDropIndexInfo.sourceIndex].key === columns[this._onDropIndexInfo.targetIndex].key) {
                this._onDropIndexInfo = {
                    sourceIndex: Number.MIN_SAFE_INTEGER,
                    targetIndex: Number.MIN_SAFE_INTEGER
                };
            }
        }
    };
    DetailsHeaderBase.prototype.componentWillUnmount = function () {
        if (this._subscriptionObject) {
            this._subscriptionObject.dispose();
            delete this._subscriptionObject;
        }
        if (this._dragDropHelper) {
            this._dragDropHelper.dispose();
        }
    };
    DetailsHeaderBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b, ariaLabel = _a.ariaLabel, ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox, selectAllVisibility = _a.selectAllVisibility, ariaLabelForSelectionColumn = _a.ariaLabelForSelectionColumn, indentWidth = _a.indentWidth, viewport = _a.viewport, onColumnClick = _a.onColumnClick, onColumnContextMenu = _a.onColumnContextMenu, _c = _a.onRenderColumnHeaderTooltip, onRenderColumnHeaderTooltip = _c === void 0 ? this._onRenderColumnHeaderTooltip : _c, styles = _a.styles, theme = _a.theme;
        var _d = this.state, isAllSelected = _d.isAllSelected, columnResizeDetails = _d.columnResizeDetails, isSizing = _d.isSizing, groupNestingDepth = _d.groupNestingDepth, isAllCollapsed = _d.isAllCollapsed, columnReorderProps = _d.columnReorderProps;
        var showCheckbox = selectAllVisibility !== SelectAllVisibility.none;
        var isCheckboxHidden = selectAllVisibility === SelectAllVisibility.hidden;
        if (!this._dragDropHelper && columnReorderProps) {
            // TODO Do not assign local fields during render.
            // This behavior needs to be moved to the appropriate React lifecycle methods.
            this._dragDropHelper = new DragDropHelper_DragDropHelper({
                selection: {
                    getSelection: function () {
                        return;
                    }
                },
                minimumPixelsForDrag: this.props.minimumPixelsForDrag
            });
        }
        var frozenColumnCountFromStart = columnReorderProps && columnReorderProps.frozenColumnCountFromStart ? columnReorderProps.frozenColumnCountFromStart : 0;
        var frozenColumnCountFromEnd = columnReorderProps && columnReorderProps.frozenColumnCountFromEnd ? columnReorderProps.frozenColumnCountFromEnd : 0;
        this._classNames = DetailsHeader_base_getClassNames(styles, {
            theme: theme,
            isAllSelected: isAllSelected,
            isSelectAllHidden: selectAllVisibility === SelectAllVisibility.hidden,
            isResizingColumn: !!columnResizeDetails && isSizing,
            isSizing: isSizing,
            isAllCollapsed: isAllCollapsed,
            isCheckboxHidden: isCheckboxHidden
        });
        var classNames = this._classNames;
        var isRTL = rtl_getRTL();
        return (external__react_["createElement"](FocusZone_FocusZone, { role: "row", "aria-label": ariaLabel, className: classNames.root, componentRef: this._rootComponent, ref: this._onRootRef, onMouseMove: this._onRootMouseMove, "data-automationid": "DetailsHeader", style: { minWidth: viewport ? viewport.width : 0 }, direction: FocusZoneDirection.horizontal },
            showCheckbox
                ? [
                    external__react_["createElement"]("div", { key: "__checkbox", className: classNames.cellIsCheck, "aria-labelledby": this._id + "-check", onClick: !isCheckboxHidden ? this._onSelectAllClicked : undefined, "aria-colindex": 1, role: 'columnheader' }, onRenderColumnHeaderTooltip({
                        hostClassName: css(classNames.checkTooltip),
                        id: this._id + "-checkTooltip",
                        setAriaDescribedBy: false,
                        content: ariaLabelForSelectAllCheckbox,
                        children: (external__react_["createElement"](DetailsRowCheck, { id: this._id + "-check", "aria-label": ariaLabelForSelectionColumn, "aria-describedby": !isCheckboxHidden
                                ? ariaLabelForSelectAllCheckbox && !this.props.onRenderColumnHeaderTooltip
                                    ? this._id + "-checkTooltip"
                                    : undefined
                                : ariaLabelForSelectionColumn && !this.props.onRenderColumnHeaderTooltip
                                    ? this._id + "-checkTooltip"
                                    : undefined, "data-is-focusable": !isCheckboxHidden || undefined, isHeader: true, selected: isAllSelected, anySelected: false, canSelect: !isCheckboxHidden, className: classNames.check }))
                    }, this._onRenderColumnHeaderTooltip)),
                    !this.props.onRenderColumnHeaderTooltip ? (ariaLabelForSelectAllCheckbox && !isCheckboxHidden ? (external__react_["createElement"]("label", { key: "__checkboxLabel", id: this._id + "-checkTooltip", className: classNames.accessibleLabel }, ariaLabelForSelectAllCheckbox)) : ariaLabelForSelectionColumn && isCheckboxHidden ? (external__react_["createElement"]("label", { key: "__checkboxLabel", id: this._id + "-checkTooltip", className: classNames.accessibleLabel }, ariaLabelForSelectionColumn)) : null) : null
                ]
                : null,
            groupNestingDepth > 0 && this.props.collapseAllVisibility === CollapseAllVisibility.visible ? (external__react_["createElement"]("div", { className: classNames.cellIsGroupExpander, onClick: this._onToggleCollapseAll, "data-is-focusable": true },
                external__react_["createElement"](Icon, { className: classNames.collapseButton, iconName: isRTL ? 'ChevronLeftMed' : 'ChevronRightMed' }))) : null,
            external__react_["createElement"](GroupSpacer, { indentWidth: indentWidth, count: groupNestingDepth - 1 }),
            columns.map(function (column, columnIndex) {
                var _isDraggable = columnReorderProps
                    ? columnIndex >= frozenColumnCountFromStart && columnIndex < columns.length - frozenColumnCountFromEnd
                    : false;
                return [
                    columnReorderProps &&
                        (_isDraggable || columnIndex === columns.length - frozenColumnCountFromEnd) &&
                        _this._renderDropHint(columnIndex),
                    external__react_["createElement"](DetailsColumn, { column: column, key: column.key, columnIndex: (showCheckbox ? 2 : 1) + columnIndex, parentId: _this._id, isDraggable: _isDraggable, updateDragInfo: _this._updateDragInfo, dragDropHelper: _this._dragDropHelper, onColumnClick: onColumnClick, onColumnContextMenu: onColumnContextMenu, 
                        // Do not render tooltips by default, but allow for override via props.
                        onRenderColumnHeaderTooltip: _this.props.onRenderColumnHeaderTooltip, isDropped: _this._onDropIndexInfo.targetIndex === columnIndex, cellStyleProps: _this.props.cellStyleProps }),
                    _this._renderColumnDivider(columnIndex)
                ];
            }),
            columnReorderProps && frozenColumnCountFromEnd === 0 && this._renderDropHint(columns.length),
            isSizing && (external__react_["createElement"](Layer, null,
                external__react_["createElement"]("div", { className: classNames.sizingOverlay, onMouseMove: this._onSizerMouseMove, onMouseUp: this._onSizerMouseUp })))));
    };
    /** Set focus to the active thing in the focus area. */
    DetailsHeaderBase.prototype.focus = function () {
        return Boolean(this._rootComponent.current && this._rootComponent.current.focus());
    };
    DetailsHeaderBase.prototype._getHeaderDragDropOptions = function () {
        var options = {
            selectionIndex: 1,
            context: { data: this, index: 0 },
            canDrag: function () { return false; },
            canDrop: function () { return true; },
            onDragStart: function () { return undefined; },
            updateDropState: this._updateDroppingState,
            onDrop: this._onDrop,
            onDragEnd: function () { return undefined; },
            onDragOver: this._onDragOver
        };
        return options;
    };
    DetailsHeaderBase.prototype._updateDroppingState = function (newValue, event) {
        if (this._draggedColumnIndex >= 0 && event.type !== 'drop') {
            if (!newValue) {
                this._resetDropHints();
            }
        }
    };
    DetailsHeaderBase.prototype._isValidCurrentDropHintIndex = function () {
        return this._currentDropHintIndex >= 0;
    };
    DetailsHeaderBase.prototype._onDragOver = function (item, event) {
        if (this._draggedColumnIndex >= 0) {
            event.stopPropagation();
            this._computeDropHintToBeShown(event.clientX);
        }
    };
    DetailsHeaderBase.prototype._onDrop = function (item, event) {
        var columnReorderProps = this.state.columnReorderProps;
        // Target index will not get changed if draggeditem is after target item.
        if (this._draggedColumnIndex >= 0 && event) {
            var targetIndex = this._draggedColumnIndex > this._currentDropHintIndex ? this._currentDropHintIndex : this._currentDropHintIndex - 1;
            var isValidDrop = false;
            event.stopPropagation();
            if (this._isValidCurrentDropHintIndex()) {
                isValidDrop = true;
                this._onDropIndexInfo.sourceIndex = this._draggedColumnIndex;
                this._onDropIndexInfo.targetIndex = targetIndex;
            }
            if (isValidDrop) {
                if (columnReorderProps && columnReorderProps.onColumnDrop) {
                    var dragDropDetails = {
                        draggedIndex: this._draggedColumnIndex,
                        targetIndex: targetIndex
                    };
                    columnReorderProps.onColumnDrop(dragDropDetails);
                }
                else if (columnReorderProps && columnReorderProps.handleColumnReorder) {
                    columnReorderProps.handleColumnReorder(this._draggedColumnIndex, targetIndex);
                }
            }
        }
        this._resetDropHints();
        this._dropHintDetails = {};
        this._draggedColumnIndex = -1;
    };
    /**
     * @returns whether or not the "Select All" checkbox column is hidden.
     */
    DetailsHeaderBase.prototype._isCheckboxColumnHidden = function () {
        var _a = this.props, selectionMode = _a.selectionMode, checkboxVisibility = _a.checkboxVisibility;
        return selectionMode === SelectionMode.none || checkboxVisibility === CheckboxVisibility.hidden;
    };
    DetailsHeaderBase.prototype._updateDragInfo = function (props, event) {
        var columnReorderProps = this.state.columnReorderProps;
        var itemIndex = props.itemIndex;
        if (itemIndex >= 0) {
            // Column index is set based on the checkbox
            this._draggedColumnIndex = this._isCheckboxColumnHidden() ? itemIndex - 1 : itemIndex - 2;
            this._getDropHintPositions();
            if (columnReorderProps && columnReorderProps.onColumnDragStart) {
                columnReorderProps.onColumnDragStart(true);
            }
        }
        else if (event && this._draggedColumnIndex >= 0) {
            this._resetDropHints();
            this._draggedColumnIndex = -1;
            this._dropHintDetails = {};
            if (columnReorderProps && columnReorderProps.onColumnDragEnd) {
                var columnDragEndLocation = this._isEventOnHeader(event);
                columnReorderProps.onColumnDragEnd({ dropLocation: columnDragEndLocation }, event);
            }
        }
    };
    DetailsHeaderBase.prototype._resetDropHints = function () {
        if (this._currentDropHintIndex >= 0) {
            this._updateDropHintElement(this._dropHintDetails[this._currentDropHintIndex].dropHintElementRef, 'none');
            this._currentDropHintIndex = Number.MIN_SAFE_INTEGER;
        }
    };
    DetailsHeaderBase.prototype._updateDropHintElement = function (element, displayProperty) {
        element.childNodes[1].style.display = displayProperty;
        element.childNodes[0].style.display = displayProperty;
    };
    DetailsHeaderBase.prototype._liesBetween = function (target, left, right) {
        return rtl_getRTL() ? target <= left && target >= right : target >= left && target <= right;
    };
    DetailsHeaderBase.prototype._isBefore = function (a, b) {
        return rtl_getRTL() ? a >= b : a <= b;
    };
    DetailsHeaderBase.prototype._isAfter = function (a, b) {
        return rtl_getRTL() ? a <= b : a >= b;
    };
    DetailsHeaderBase.prototype._isEventOnHeader = function (event) {
        if (this._rootElement) {
            var clientRect = this._rootElement.getBoundingClientRect();
            if (event.clientX > clientRect.left &&
                event.clientX < clientRect.right &&
                event.clientY > clientRect.top &&
                event.clientY < clientRect.bottom) {
                return ColumnDragEndLocation.header;
            }
        }
    };
    DetailsHeaderBase.prototype._renderColumnDivider = function (columnIndex) {
        var _a = this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
        var column = columns[columnIndex];
        var onRenderDivider = column.onRenderDivider;
        return onRenderDivider
            ? onRenderDivider({ column: column, columnIndex: columnIndex }, this._renderColumnSizer)
            : this._renderColumnSizer({ column: column, columnIndex: columnIndex });
    };
    DetailsHeaderBase.prototype._renderDropHint = function (dropHintIndex) {
        var classNames = this._classNames;
        return (external__react_["createElement"]("div", { key: 'dropHintKey', className: classNames.dropHintStyle, id: "columnDropHint_" + dropHintIndex },
            external__react_["createElement"](Icon, { key: "dropHintCaretKey", "aria-hidden": true, "data-is-focusable": false, "data-sizer-index": dropHintIndex, className: classNames.dropHintCaretStyle, iconName: 'CaretUpSolid8' }),
            external__react_["createElement"]("div", { key: "dropHintLineKey", "aria-hidden": true, "data-is-focusable": false, "data-sizer-index": dropHintIndex, className: classNames.dropHintLineStyle })));
    };
    /**
     * double click on the column sizer will auto ajust column width
     * to fit the longest content among current rendered rows.
     *
     * @private
     * @param {number} columnIndex (index of the column user double clicked)
     * @param {React.MouseEvent} ev (mouse double click event)
     */
    DetailsHeaderBase.prototype._onSizerDoubleClick = function (columnIndex, ev) {
        var _a = this.props, onColumnAutoResized = _a.onColumnAutoResized, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b;
        if (onColumnAutoResized) {
            onColumnAutoResized(columns[columnIndex], columnIndex);
        }
    };
    DetailsHeaderBase.prototype._onSelectionChanged = function () {
        var isAllSelected = !!this.props.selection && this.props.selection.isAllSelected();
        if (this.state.isAllSelected !== isAllSelected) {
            this.setState({
                isAllSelected: isAllSelected
            });
        }
    };
    DetailsHeaderBase.prototype._onToggleCollapseAll = function () {
        var onToggleCollapseAll = this.props.onToggleCollapseAll;
        var newCollapsed = !this.state.isAllCollapsed;
        this.setState({
            isAllCollapsed: newCollapsed
        });
        if (onToggleCollapseAll) {
            onToggleCollapseAll(newCollapsed);
        }
    };
    DetailsHeaderBase.defaultProps = {
        selectAllVisibility: SelectAllVisibility.visible,
        collapseAllVisibility: CollapseAllVisibility.visible
    };
    return DetailsHeaderBase;
}(BaseComponent_BaseComponent));

function getLegacyColumnReorderProps(columnReorderOptions) {
    return __assign({}, columnReorderOptions, { onColumnDragEnd: undefined });
}
function stopPropagation(ev) {
    ev.stopPropagation();
}

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.js



var DetailsHeader = styled(DetailsHeader_base_DetailsHeaderBase, DetailsHeader_styles_getStyles, undefined, { scope: 'DetailsHeader' });

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRowFields.js




var getCellText = function (item, column) {
    var value = item && column && column.fieldName ? item[column.fieldName] : '';
    if (value === null || value === undefined) {
        value = '';
    }
    return value;
};
var DetailsRowFields_DetailsRowFields = /** @class */ (function (_super) {
    __extends(DetailsRowFields, _super);
    function DetailsRowFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetailsRowFields.prototype.render = function () {
        var _a = this.props, columns = _a.columns, columnStartIndex = _a.columnStartIndex, shimmer = _a.shimmer, rowClassNames = _a.rowClassNames, _b = _a.cellStyleProps, cellStyleProps = _b === void 0 ? DEFAULT_CELL_STYLE_PROPS : _b, item = _a.item, itemIndex = _a.itemIndex, onRenderItemColumn = _a.onRenderItemColumn;
        return (external__react_["createElement"]("div", { className: rowClassNames.fields, "data-automationid": "DetailsRowFields", role: "presentation" }, columns.map(function (column, columnIndex) {
            var width = typeof column.calculatedWidth === 'undefined'
                ? 'auto'
                : column.calculatedWidth +
                    cellStyleProps.cellLeftPadding +
                    cellStyleProps.cellRightPadding +
                    (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0);
            var _a = column.onRender, onRender = _a === void 0 ? onRenderItemColumn : _a;
            var cellContentsRender = onRender && !shimmer ? onRender(item, itemIndex, column) : getCellText(item, column);
            return (external__react_["createElement"]("div", { key: columnIndex, role: column.isRowHeader ? 'rowheader' : 'gridcell', "aria-colindex": columnIndex + columnStartIndex + 1, className: css(column.className, column.isMultiline && rowClassNames.isMultiline, column.isRowHeader && rowClassNames.isRowHeader, column.isIconOnly && shimmer && rowClassNames.shimmerIconPlaceholder, shimmer && rowClassNames.shimmer, rowClassNames.cell, column.isPadded ? rowClassNames.cellPadded : rowClassNames.cellUnpadded), style: { width: width }, "data-automationid": "DetailsRowCell", "data-automation-key": column.key }, cellContentsRender));
        })));
    };
    return DetailsRowFields;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRow.base.js












var DetailsRow_base_getClassNames = classNamesFunction();
var DetailsRow_base_DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
var DetailsRow_base_NO_COLUMNS = [];
var DetailsRow_base_DetailsRowBase = /** @class */ (function (_super) {
    __extends(DetailsRowBase, _super);
    function DetailsRowBase(props) {
        var _this = _super.call(this, props) || this;
        _this._cellMeasurer = external__react_["createRef"]();
        _this._focusZone = external__react_["createRef"]();
        _this._onRootRef = function (focusZone) {
            if (focusZone) {
                // Need to resolve the actual DOM node, not the component. The element itself will be used for drag/drop and focusing.
                _this._root = external__react_dom_["findDOMNode"](focusZone);
            }
            else {
                _this._root = undefined;
            }
        };
        _this.state = {
            selectionState: _this._getSelectionState(props),
            columnMeasureInfo: undefined,
            isDropping: false,
            groupNestingDepth: props.groupNestingDepth
        };
        _this._droppingClassNames = '';
        _this._updateDroppingState = _this._updateDroppingState.bind(_this);
        _this._onToggleSelection = _this._onToggleSelection.bind(_this);
        return _this;
    }
    DetailsRowBase.prototype.componentDidMount = function () {
        var dragDropHelper = this.props.dragDropHelper;
        if (dragDropHelper) {
            this._dragDropSubscription = dragDropHelper.subscribe(this._root, this._events, this._getRowDragDropOptions());
        }
        this._events.on(this.props.selection, SELECTION_CHANGE, this._onSelectionChanged);
        if (this.props.onDidMount && this.props.item) {
            // If the item appears later, we should wait for it before calling this method.
            this._hasMounted = true;
            this.props.onDidMount(this);
        }
    };
    DetailsRowBase.prototype.componentDidUpdate = function (previousProps) {
        var state = this.state;
        var _a = this.props, item = _a.item, onDidMount = _a.onDidMount;
        var columnMeasureInfo = state.columnMeasureInfo;
        if (this.props.itemIndex !== previousProps.itemIndex ||
            this.props.item !== previousProps.item ||
            this.props.dragDropHelper !== previousProps.dragDropHelper) {
            if (this._dragDropSubscription) {
                this._dragDropSubscription.dispose();
                delete this._dragDropSubscription;
            }
            if (this.props.dragDropHelper) {
                this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root, this._events, this._getRowDragDropOptions());
            }
        }
        if (columnMeasureInfo && columnMeasureInfo.index >= 0 && this._cellMeasurer.current) {
            var newWidth = this._cellMeasurer.current.getBoundingClientRect().width;
            columnMeasureInfo.onMeasureDone(newWidth);
            this.setState({
                columnMeasureInfo: undefined
            });
        }
        if (item && onDidMount && !this._hasMounted) {
            this._hasMounted = true;
            onDidMount(this);
        }
    };
    DetailsRowBase.prototype.componentWillUnmount = function () {
        var _a = this.props, item = _a.item, onWillUnmount = _a.onWillUnmount;
        // Only call the onWillUnmount callback if we have an item.
        if (onWillUnmount && item) {
            onWillUnmount(this);
        }
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
            delete this._dragDropSubscription;
        }
    };
    DetailsRowBase.prototype.componentWillReceiveProps = function (newProps) {
        this.setState({
            selectionState: this._getSelectionState(newProps),
            groupNestingDepth: newProps.groupNestingDepth
        });
    };
    DetailsRowBase.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this.props.useReducedRowRenderer) {
            if (this.state.selectionState) {
                var newSelectionState = this._getSelectionState(nextProps);
                if (this.state.selectionState.isSelected !== newSelectionState.isSelected) {
                    return true;
                }
            }
            return shallowCompare(this.props, nextProps);
        }
        else {
            return true;
        }
    };
    DetailsRowBase.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.columns, columns = _b === void 0 ? DetailsRow_base_NO_COLUMNS : _b, dragDropEvents = _a.dragDropEvents, item = _a.item, itemIndex = _a.itemIndex, _c = _a.onRenderCheck, onRenderCheck = _c === void 0 ? this._onRenderCheck : _c, onRenderItemColumn = _a.onRenderItemColumn, selectionMode = _a.selectionMode, viewport = _a.viewport, checkboxVisibility = _a.checkboxVisibility, getRowAriaLabel = _a.getRowAriaLabel, getRowAriaDescribedBy = _a.getRowAriaDescribedBy, checkButtonAriaLabel = _a.checkButtonAriaLabel, checkboxCellClassName = _a.checkboxCellClassName, 
        /** Alias rowFieldsAs as RowFields and default to DetailsRowFields if rowFieldsAs does not exist */
        _d = _a.rowFieldsAs, 
        /** Alias rowFieldsAs as RowFields and default to DetailsRowFields if rowFieldsAs does not exist */
        RowFields = _d === void 0 ? DetailsRowFields_DetailsRowFields : _d, selection = _a.selection, indentWidth = _a.indentWidth, shimmer = _a.shimmer, compact = _a.compact, theme = _a.theme, styles = _a.styles;
        var _e = this.state, columnMeasureInfo = _e.columnMeasureInfo, isDropping = _e.isDropping, groupNestingDepth = _e.groupNestingDepth;
        var _f = this.state.selectionState, _g = _f.isSelected, isSelected = _g === void 0 ? false : _g, _h = _f.isSelectionModal, isSelectionModal = _h === void 0 ? false : _h;
        var isDraggable = Boolean(dragDropEvents && dragDropEvents.canDrag && dragDropEvents.canDrag(item));
        var droppingClassName = isDropping ? (this._droppingClassNames ? this._droppingClassNames : DetailsRow_base_DEFAULT_DROPPING_CSS_CLASS) : '';
        var ariaLabel = getRowAriaLabel ? getRowAriaLabel(item) : undefined;
        var ariaDescribedBy = getRowAriaDescribedBy ? getRowAriaDescribedBy(item) : undefined;
        var canSelect = !!selection && selection.canSelectItem(item, itemIndex);
        var isContentUnselectable = selectionMode === SelectionMode.multiple;
        var showCheckbox = selectionMode !== SelectionMode.none && checkboxVisibility !== CheckboxVisibility.hidden;
        var ariaSelected = selectionMode === SelectionMode.none ? undefined : isSelected;
        var classNames = DetailsRow_base_getClassNames(styles, {
            theme: theme,
            isSelected: isSelected,
            canSelect: !isContentUnselectable,
            anySelected: isSelectionModal,
            checkboxCellClassName: checkboxCellClassName,
            droppingClassName: droppingClassName,
            className: className,
            compact: compact
        });
        var rowFields = (external__react_["createElement"](RowFields, { rowClassNames: classNames, columns: columns, item: item, itemIndex: itemIndex, columnStartIndex: showCheckbox ? 1 : 0, onRenderItemColumn: onRenderItemColumn, shimmer: shimmer }));
        // Rendering Shimmer Animation outside the focus zone
        if (shimmer) {
            return (external__react_["createElement"]("div", { className: css(showCheckbox && classNames.shimmerLeftBorder, !compact && classNames.shimmerBottomBorder) }, rowFields));
        }
        return (external__react_["createElement"](FocusZone_FocusZone, __assign({}, getNativeProps(this.props, divProperties), { direction: FocusZoneDirection.horizontal, ref: this._onRootRef, componentRef: this._focusZone, role: "row", "aria-label": ariaLabel, ariaDescribedBy: ariaDescribedBy, className: css(classNames.root), "data-is-focusable": true, "data-selection-index": itemIndex, "data-item-index": itemIndex, "aria-rowindex": itemIndex + 1, "data-is-draggable": isDraggable, draggable: isDraggable, "data-automationid": "DetailsRow", style: { minWidth: viewport ? viewport.width : 0 }, "aria-selected": ariaSelected, allowFocusRoot: true }),
            showCheckbox && (external__react_["createElement"]("div", { role: "gridcell", "aria-colindex": 1, "data-selection-toggle": true, className: classNames.checkCell }, onRenderCheck({
                selected: isSelected,
                anySelected: isSelectionModal,
                title: checkButtonAriaLabel,
                canSelect: canSelect,
                compact: compact,
                className: classNames.check,
                theme: theme,
                isVisible: checkboxVisibility === CheckboxVisibility.always
            }))),
            external__react_["createElement"](GroupSpacer, { indentWidth: indentWidth, count: groupNestingDepth - (this.props.collapseAllVisibility === CollapseAllVisibility.hidden ? 1 : 0) }),
            item && rowFields,
            columnMeasureInfo && (external__react_["createElement"]("span", { role: "presentation", className: css(classNames.cellMeasurer, classNames.cell), ref: this._cellMeasurer },
                external__react_["createElement"](RowFields, { rowClassNames: classNames, columns: [columnMeasureInfo.column], item: item, itemIndex: itemIndex, columnStartIndex: (showCheckbox ? 1 : 0) + columns.length, onRenderItemColumn: onRenderItemColumn }))),
            external__react_["createElement"]("span", { role: "checkbox", className: css(classNames.checkCover), "aria-checked": isSelected, "data-selection-toggle": true })));
    };
    /**
     * measure cell at index. and call the call back with the measured cell width when finish measure
     *
     * @param index - The cell index
     * @param onMeasureDone - The call back function when finish measure
     */
    DetailsRowBase.prototype.measureCell = function (index, onMeasureDone) {
        var _a = this.props.columns, columns = _a === void 0 ? DetailsRow_base_NO_COLUMNS : _a;
        var column = object_assign({}, columns[index]);
        column.minWidth = 0;
        column.maxWidth = 999999;
        delete column.calculatedWidth;
        this.setState({
            columnMeasureInfo: {
                index: index,
                column: column,
                onMeasureDone: onMeasureDone
            }
        });
    };
    DetailsRowBase.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        return !!this._focusZone.current && this._focusZone.current.focus(forceIntoFirstElement);
    };
    DetailsRowBase.prototype._onRenderCheck = function (props) {
        return external__react_["createElement"](DetailsRowCheck, __assign({}, props));
    };
    DetailsRowBase.prototype._getSelectionState = function (props) {
        var itemIndex = props.itemIndex, selection = props.selection;
        return {
            isSelected: !!selection && selection.isIndexSelected(itemIndex),
            isSelectionModal: !!selection && !!selection.isModal && selection.isModal()
        };
    };
    DetailsRowBase.prototype._onSelectionChanged = function () {
        var selectionState = this._getSelectionState(this.props);
        if (!shallowCompare(selectionState, this.state.selectionState)) {
            this.setState({
                selectionState: selectionState
            });
        }
    };
    DetailsRowBase.prototype._onToggleSelection = function () {
        var selection = this.props.selection;
        if (selection && this.props.itemIndex > -1) {
            selection.toggleIndexSelected(this.props.itemIndex);
        }
    };
    DetailsRowBase.prototype._getRowDragDropOptions = function () {
        var _a = this.props, item = _a.item, itemIndex = _a.itemIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
        var options = {
            eventMap: eventsToRegister,
            selectionIndex: itemIndex,
            context: { data: item, index: itemIndex },
            canDrag: dragDropEvents.canDrag,
            canDrop: dragDropEvents.canDrop,
            onDragStart: dragDropEvents.onDragStart,
            updateDropState: this._updateDroppingState,
            onDrop: dragDropEvents.onDrop,
            onDragEnd: dragDropEvents.onDragEnd
        };
        return options;
    };
    /**
     * update isDropping state based on the input value, which is used to change style during drag and drop
     *
     * when change to true, that means drag enter. we will add default dropping class name
     * or the custom dropping class name (return result from onDragEnter) to the root elemet.
     *
     * when change to false, that means drag leave. we will remove the dropping class name from root element.
     *
     * @private
     * @param newValue - New isDropping state value
     * @param event - The event trigger dropping state change which can be dragenter, dragleave etc
     */
    DetailsRowBase.prototype._updateDroppingState = function (newValue, event) {
        var _a = this.state, selectionState = _a.selectionState, isDropping = _a.isDropping;
        var _b = this.props, dragDropEvents = _b.dragDropEvents, item = _b.item;
        if (!newValue) {
            if (dragDropEvents.onDragLeave) {
                dragDropEvents.onDragLeave(item, event);
            }
        }
        else {
            if (dragDropEvents.onDragEnter) {
                this._droppingClassNames = dragDropEvents.onDragEnter(item, event);
            }
        }
        if (isDropping !== newValue) {
            this.setState({ selectionState: selectionState, isDropping: newValue });
        }
    };
    return DetailsRowBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRow.js



var DetailsRow = styled(DetailsRow_base_DetailsRowBase, DetailsRow_styles_getStyles, undefined, {
    scope: 'DetailsRow'
});

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/utilities/decorators/BaseDecorator.js


var BaseDecorator_BaseDecorator = /** @class */ (function (_super) {
    __extends(BaseDecorator, _super);
    function BaseDecorator(props) {
        var _this = _super.call(this, props) || this;
        // tslint:disable-next-line:typedef
        _this._skipComponentRefResolution = true;
        _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
        return _this;
    }
    /**
     * Updates the ref to the component composed by the decorator, which will also take care of hoisting
     * (and unhoisting as appropriate) methods from said component.
     *
     * Pass this method as the argument to the 'ref' property of the composed component.
     */
    BaseDecorator.prototype._updateComposedComponentRef = function (composedComponentInstance) {
        this._composedComponentInstance = composedComponentInstance;
        if (composedComponentInstance) {
            this._hoisted = hoistMethods(this, composedComponentInstance);
        }
        else if (this._hoisted) {
            unhoistMethods(this, this._hoisted);
        }
    };
    return BaseDecorator;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/utilities/decorators/withViewport.js




var withViewport_RESIZE_DELAY = 500;
var MAX_RESIZE_ATTEMPTS = 3;
function withViewport(ComposedComponent) {
    return /** @class */ (function (_super) {
        __extends(WithViewportComponent, _super);
        function WithViewportComponent(props) {
            var _this = _super.call(this, props) || this;
            _this._root = external__react_["createRef"]();
            /* Note: using lambda here because decorators don't seem to work in decorators. */
            _this._updateViewport = function (withForceUpdate) {
                var viewport = _this.state.viewport;
                var viewportElement = _this._root.current;
                var scrollElement = findScrollableParent(viewportElement);
                var scrollRect = getRect(scrollElement);
                var clientRect = getRect(viewportElement);
                var updateComponent = function () {
                    if (withForceUpdate && _this._composedComponentInstance) {
                        _this._composedComponentInstance.forceUpdate();
                    }
                };
                var isSizeChanged = (clientRect && clientRect.width) !== viewport.width || (scrollRect && scrollRect.height) !== viewport.height;
                if (isSizeChanged && _this._resizeAttempts < MAX_RESIZE_ATTEMPTS && clientRect && scrollRect) {
                    _this._resizeAttempts++;
                    _this.setState({
                        viewport: {
                            width: clientRect.width,
                            height: scrollRect.height
                        }
                    }, function () {
                        _this._updateViewport(withForceUpdate);
                    });
                }
                else {
                    _this._resizeAttempts = 0;
                    updateComponent();
                }
            };
            _this._resizeAttempts = 0;
            _this.state = {
                viewport: {
                    width: 0,
                    height: 0
                }
            };
            return _this;
        }
        WithViewportComponent.prototype.componentDidMount = function () {
            var skipViewportMeasures = this.props.skipViewportMeasures;
            this._onAsyncResize = this._async.debounce(this._onAsyncResize, withViewport_RESIZE_DELAY, {
                leading: false
            });
            var window = getWindow();
            var viewportElement = this._root.current;
            // ResizeObserver seems always fire even window is not resized. This is
            // particularly bad when skipViewportMeasures is set when optimizing fixed layout lists.
            // It will measure and update and re-render the entire list after list is fully rendered.
            // So fallback to listen to resize event when skipViewportMeasures is set.
            if (!skipViewportMeasures && window && window.ResizeObserver) {
                this._viewportResizeObserver = new window.ResizeObserver(this._onAsyncResize);
                this._viewportResizeObserver.observe(viewportElement);
            }
            else {
                this._events.on(window, 'resize', this._onAsyncResize);
            }
            if (!skipViewportMeasures) {
                this._updateViewport();
            }
        };
        WithViewportComponent.prototype.componentWillUnmount = function () {
            this._events.dispose();
            if (this._viewportResizeObserver) {
                this._viewportResizeObserver.disconnect();
            }
        };
        WithViewportComponent.prototype.render = function () {
            var viewport = this.state.viewport;
            var skipViewportMeasures = this.props.skipViewportMeasures;
            var isViewportVisible = skipViewportMeasures || (viewport.width > 0 && viewport.height > 0);
            return (external__react_["createElement"]("div", { className: "ms-Viewport", ref: this._root, style: { minWidth: 1, minHeight: 1 } }, isViewportVisible && external__react_["createElement"](ComposedComponent, __assign({ ref: this._updateComposedComponentRef, viewport: viewport }, this.props))));
        };
        WithViewportComponent.prototype.forceUpdate = function () {
            this._updateViewport(true);
        };
        WithViewportComponent.prototype._onAsyncResize = function () {
            this._updateViewport();
        };
        return WithViewportComponent;
    }(BaseDecorator_BaseDecorator));
}

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/utilities/groupedList/GroupedListUtility.js
/**
 * Takes an array of groups and returns a count of the groups and all descendant groups.
 * @param groups - The array of groups to count.
 */
var GetGroupCount = function (groups) {
    var total = 0;
    if (groups) {
        var remainingGroups = groups.slice();
        var currentGroup = void 0;
        while (remainingGroups && remainingGroups.length > 0) {
            ++total;
            currentGroup = remainingGroups.pop();
            if (currentGroup && currentGroup.children) {
                remainingGroups.push.apply(remainingGroups, currentGroup.children);
            }
        }
    }
    return total;
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.base.js















// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.

var DetailsList_base_getClassNames = classNamesFunction();
var MIN_COLUMN_WIDTH = 100; // this is the global min width
var CHECKBOX_WIDTH = 40;
var DetailsList_base_DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
var DetailsList_base_DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
var SHIMMER_INITIAL_ITEMS = 10;
var SHIMMER_ITEMS = new Array(SHIMMER_INITIAL_ITEMS);
var DetailsList_base_DetailsListBase = /** @class */ (function (_super) {
    __extends(DetailsListBase, _super);
    function DetailsListBase(props) {
        var _this = _super.call(this, props) || this;
        // References
        _this._root = external__react_["createRef"]();
        _this._header = external__react_["createRef"]();
        _this._groupedList = external__react_["createRef"]();
        _this._list = external__react_["createRef"]();
        _this._focusZone = external__react_["createRef"]();
        _this._selectionZone = external__react_["createRef"]();
        _this._onRenderRow = function (props, defaultRender) {
            return external__react_["createElement"](DetailsRow, __assign({}, props));
        };
        _this._onRenderDetailsHeader = function (detailsHeaderProps, defaultRender) {
            return external__react_["createElement"](DetailsHeader, __assign({}, detailsHeaderProps));
        };
        _this._onRenderDetailsFooter = function (detailsFooterProps, defaultRender) {
            return null;
        };
        _this._onRenderListCell = function (nestingDepth) {
            return function (item, itemIndex) {
                return _this._onRenderCell(nestingDepth, item, itemIndex);
            };
        };
        _this._activeRows = {};
        _this._columnOverrides = {};
        _this._onColumnIsSizingChanged = _this._onColumnIsSizingChanged.bind(_this);
        _this._onColumnResized = _this._onColumnResized.bind(_this);
        _this._onColumnAutoResized = _this._onColumnAutoResized.bind(_this);
        _this._onRowDidMount = _this._onRowDidMount.bind(_this);
        _this._onRowWillUnmount = _this._onRowWillUnmount.bind(_this);
        _this._onToggleCollapse = _this._onToggleCollapse.bind(_this);
        _this._onActiveRowChanged = _this._onActiveRowChanged.bind(_this);
        _this._onBlur = _this._onBlur.bind(_this);
        _this._onHeaderKeyDown = _this._onHeaderKeyDown.bind(_this);
        _this._onContentKeyDown = _this._onContentKeyDown.bind(_this);
        _this._onRenderCell = _this._onRenderCell.bind(_this);
        _this._onGroupExpandStateChanged = _this._onGroupExpandStateChanged.bind(_this);
        _this._onColumnDragEnd = _this._onColumnDragEnd.bind(_this);
        _this.state = {
            focusedItemIndex: -1,
            lastWidth: 0,
            adjustedColumns: _this._getAdjustedColumns(props),
            isSizing: false,
            isDropping: false,
            isCollapsed: props.groupProps && props.groupProps.isAllGroupsCollapsed,
            isSomeGroupExpanded: props.groupProps && !props.groupProps.isAllGroupsCollapsed
        };
        _this._selection = props.selection || new Selection_Selection({ onSelectionChanged: undefined, getKey: props.getKey });
        if (!_this.props.disableSelectionZone) {
            _this._selection.setItems(props.items, false);
        }
        _this._dragDropHelper = props.dragDropEvents
            ? new DragDropHelper_DragDropHelper({
                selection: _this._selection,
                minimumPixelsForDrag: props.minimumPixelsForDrag
            })
            : undefined;
        _this._initialFocusedIndex = props.initialFocusedIndex;
        return _this;
    }
    DetailsListBase.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
        this._list.current && this._list.current.scrollToIndex(index, measureItem, scrollToMode);
        this._groupedList.current && this._groupedList.current.scrollToIndex(index, measureItem, scrollToMode);
    };
    DetailsListBase.prototype.focusIndex = function (index, forceIntoFirstElement, measureItem, scrollToMode) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        var item = this.props.items[index];
        if (item) {
            this.scrollToIndex(index, measureItem, scrollToMode);
            var itemKey = this._getItemKey(item, index);
            var row = this._activeRows[itemKey];
            if (row) {
                this._setFocusToRow(row, forceIntoFirstElement);
            }
        }
    };
    DetailsListBase.prototype.getStartItemIndexInView = function () {
        if (this._list && this._list.current) {
            return this._list.current.getStartItemIndexInView();
        }
        else if (this._groupedList && this._groupedList.current) {
            return this._groupedList.current.getStartItemIndexInView();
        }
        return 0;
    };
    DetailsListBase.prototype.componentWillUnmount = function () {
        if (this._dragDropHelper) {
            // TODO If the DragDropHelper was passed via props, this will dispose it, which is incorrect behavior.
            this._dragDropHelper.dispose();
        }
    };
    DetailsListBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this._initialFocusedIndex !== undefined) {
            var item = this.props.items[this._initialFocusedIndex];
            if (item) {
                var itemKey = this._getItemKey(item, this._initialFocusedIndex);
                var row = this._activeRows[itemKey];
                if (row) {
                    this._setFocusToRowIfPending(row);
                }
            }
        }
        if (this.props.items !== prevProps.items &&
            this.props.items.length > 0 &&
            this.state.focusedItemIndex !== -1 &&
            !elementContains(this._root.current, document.activeElement, false)) {
            // Item set has changed and previously-focused item is gone.
            // Set focus to item at index of previously-focused item if it is in range,
            // else set focus to the last item.
            var index = this.state.focusedItemIndex < this.props.items.length ? this.state.focusedItemIndex : this.props.items.length - 1;
            var item = this.props.items[index];
            var itemKey = this._getItemKey(item, this.state.focusedItemIndex);
            var row = this._activeRows[itemKey];
            if (row) {
                this._setFocusToRow(row);
            }
            else {
                this._initialFocusedIndex = index;
            }
        }
        if (this.props.onDidUpdate) {
            this.props.onDidUpdate(this);
        }
    };
    DetailsListBase.prototype.componentWillReceiveProps = function (newProps) {
        var _a = this.props, checkboxVisibility = _a.checkboxVisibility, items = _a.items, setKey = _a.setKey, _b = _a.selectionMode, selectionMode = _b === void 0 ? this._selection.mode : _b, columns = _a.columns, viewport = _a.viewport, compact = _a.compact;
        var _c = (this.props.groupProps || {}).isAllGroupsCollapsed, isAllGroupsCollapsed = _c === void 0 ? undefined : _c;
        var shouldResetSelection = newProps.setKey !== setKey || newProps.setKey === undefined;
        var shouldForceUpdates = false;
        if (newProps.layoutMode !== this.props.layoutMode) {
            shouldForceUpdates = true;
        }
        if (shouldResetSelection) {
            this._initialFocusedIndex = newProps.initialFocusedIndex;
            // reset focusedItemIndex when setKey changes
            this.setState({
                focusedItemIndex: this._initialFocusedIndex !== undefined ? this._initialFocusedIndex : -1
            });
        }
        if (!this.props.disableSelectionZone && newProps.items !== items) {
            this._selection.setItems(newProps.items, shouldResetSelection);
        }
        if (newProps.checkboxVisibility !== checkboxVisibility ||
            newProps.columns !== columns ||
            newProps.viewport.width !== viewport.width ||
            newProps.compact !== compact) {
            shouldForceUpdates = true;
        }
        this._adjustColumns(newProps, true);
        if (newProps.selectionMode !== selectionMode) {
            shouldForceUpdates = true;
        }
        if (isAllGroupsCollapsed === undefined && (newProps.groupProps && newProps.groupProps.isAllGroupsCollapsed !== undefined)) {
            this.setState({
                isCollapsed: newProps.groupProps.isAllGroupsCollapsed,
                isSomeGroupExpanded: !newProps.groupProps.isAllGroupsCollapsed
            });
        }
        if (shouldForceUpdates) {
            this._pendingForceUpdate = true;
        }
    };
    DetailsListBase.prototype.componentWillUpdate = function () {
        if (this._pendingForceUpdate) {
            this._forceListUpdates();
        }
    };
    DetailsListBase.prototype.render = function () {
        var _a = this.props, ariaLabelForListHeader = _a.ariaLabelForListHeader, ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox, ariaLabelForSelectionColumn = _a.ariaLabelForSelectionColumn, className = _a.className, checkboxVisibility = _a.checkboxVisibility, compact = _a.compact, constrainMode = _a.constrainMode, dragDropEvents = _a.dragDropEvents, groups = _a.groups, groupProps = _a.groupProps, indentWidth = _a.indentWidth, items = _a.items, isHeaderVisible = _a.isHeaderVisible, layoutMode = _a.layoutMode, onItemInvoked = _a.onItemInvoked, onItemContextMenu = _a.onItemContextMenu, onColumnHeaderClick = _a.onColumnHeaderClick, onColumnHeaderContextMenu = _a.onColumnHeaderContextMenu, _b = _a.selectionMode, selectionMode = _b === void 0 ? this._selection.mode : _b, selectionPreservedOnEmptyClick = _a.selectionPreservedOnEmptyClick, selectionZoneProps = _a.selectionZoneProps, ariaLabel = _a.ariaLabel, ariaLabelForGrid = _a.ariaLabelForGrid, rowElementEventMap = _a.rowElementEventMap, _c = _a.shouldApplyApplicationRole, shouldApplyApplicationRole = _c === void 0 ? false : _c, getKey = _a.getKey, listProps = _a.listProps, usePageCache = _a.usePageCache, onShouldVirtualize = _a.onShouldVirtualize, enableShimmer = _a.enableShimmer, viewport = _a.viewport, minimumPixelsForDrag = _a.minimumPixelsForDrag, getGroupHeight = _a.getGroupHeight, styles = _a.styles, theme = _a.theme, _d = _a.cellStyleProps, cellStyleProps = _d === void 0 ? DEFAULT_CELL_STYLE_PROPS : _d;
        var _e = this.state, adjustedColumns = _e.adjustedColumns, isCollapsed = _e.isCollapsed, isSizing = _e.isSizing, isSomeGroupExpanded = _e.isSomeGroupExpanded;
        var _f = this, selection = _f._selection, dragDropHelper = _f._dragDropHelper;
        var groupNestingDepth = this._getGroupNestingDepth();
        var additionalListProps = __assign({ renderedWindowsAhead: isSizing ? 0 : DetailsList_base_DEFAULT_RENDERED_WINDOWS_AHEAD, renderedWindowsBehind: isSizing ? 0 : DetailsList_base_DEFAULT_RENDERED_WINDOWS_BEHIND, getKey: getKey }, listProps);
        var selectAllVisibility = SelectAllVisibility.none; // for SelectionMode.none
        if (selectionMode === SelectionMode.single) {
            selectAllVisibility = SelectAllVisibility.hidden;
        }
        if (selectionMode === SelectionMode.multiple) {
            // if isCollapsedGroupSelectVisible is false, disable select all when the list has all collapsed groups
            var isCollapsedGroupSelectVisible = groupProps && groupProps.headerProps && groupProps.headerProps.isCollapsedGroupSelectVisible;
            if (isCollapsedGroupSelectVisible === undefined) {
                isCollapsedGroupSelectVisible = true;
            }
            var isSelectAllVisible = isCollapsedGroupSelectVisible || !groups || isSomeGroupExpanded;
            selectAllVisibility = isSelectAllVisible ? SelectAllVisibility.visible : SelectAllVisibility.hidden;
        }
        if (checkboxVisibility === CheckboxVisibility.hidden) {
            selectAllVisibility = SelectAllVisibility.none;
        }
        var _g = this.props, _h = _g.onRenderDetailsHeader, onRenderDetailsHeader = _h === void 0 ? this._onRenderDetailsHeader : _h, _j = _g.onRenderDetailsFooter, onRenderDetailsFooter = _j === void 0 ? this._onRenderDetailsFooter : _j;
        var detailsFooterProps = this._getDetailsFooterProps();
        var columnReorderProps = this._getColumnReorderProps();
        var rowCount = (isHeaderVisible ? 1 : 0) + GetGroupCount(groups) + (items ? items.length : 0);
        var classNames = DetailsList_base_getClassNames(styles, {
            theme: theme,
            compact: compact,
            isFixed: layoutMode === DetailsListLayoutMode.fixedColumns,
            isHorizontalConstrained: constrainMode === ConstrainMode.horizontalConstrained,
            className: className
        });
        var list = groups ? (external__react_["createElement"](GroupedList, { componentRef: this._groupedList, groups: groups, groupProps: groupProps ? this._getGroupProps(groupProps) : undefined, items: items, onRenderCell: this._onRenderCell, selection: selection, selectionMode: checkboxVisibility !== CheckboxVisibility.hidden ? selectionMode : SelectionMode.none, dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: rowElementEventMap, listProps: additionalListProps, onGroupExpandStateChanged: this._onGroupExpandStateChanged, usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize, getGroupHeight: getGroupHeight, compact: compact })) : (external__react_["createElement"](List_List, __assign({ ref: this._list, role: "presentation", items: enableShimmer && !items.length ? SHIMMER_ITEMS : items, onRenderCell: this._onRenderListCell(0), usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize }, additionalListProps)));
        return (
        // If shouldApplyApplicationRole is true, role application will be applied to make arrow keys work
        // with JAWS.
        external__react_["createElement"]("div", __assign({ ref: this._root, className: classNames.root, "data-automationid": "DetailsList", "data-is-scrollable": "false", "aria-label": ariaLabel }, (shouldApplyApplicationRole ? { role: 'application' } : {})),
            external__react_["createElement"]("div", { role: "grid", "aria-label": ariaLabelForGrid, "aria-rowcount": rowCount, "aria-colcount": (selectAllVisibility !== SelectAllVisibility.none ? 1 : 0) + (adjustedColumns ? adjustedColumns.length : 0), "aria-readonly": "true" },
                external__react_["createElement"]("div", { onKeyDown: this._onHeaderKeyDown, role: "presentation", className: classNames.headerWrapper }, isHeaderVisible &&
                    onRenderDetailsHeader({
                        componentRef: this._header,
                        selectionMode: selectionMode,
                        layoutMode: layoutMode,
                        selection: selection,
                        columns: adjustedColumns,
                        onColumnClick: onColumnHeaderClick,
                        onColumnContextMenu: onColumnHeaderContextMenu,
                        onColumnResized: this._onColumnResized,
                        onColumnIsSizingChanged: this._onColumnIsSizingChanged,
                        onColumnAutoResized: this._onColumnAutoResized,
                        groupNestingDepth: groupNestingDepth,
                        isAllCollapsed: isCollapsed,
                        onToggleCollapseAll: this._onToggleCollapse,
                        ariaLabel: ariaLabelForListHeader,
                        ariaLabelForSelectAllCheckbox: ariaLabelForSelectAllCheckbox,
                        ariaLabelForSelectionColumn: ariaLabelForSelectionColumn,
                        selectAllVisibility: selectAllVisibility,
                        collapseAllVisibility: groupProps && groupProps.collapseAllVisibility,
                        viewport: viewport,
                        columnReorderProps: columnReorderProps,
                        minimumPixelsForDrag: minimumPixelsForDrag,
                        cellStyleProps: cellStyleProps,
                        checkboxVisibility: checkboxVisibility,
                        indentWidth: indentWidth
                    }, this._onRenderDetailsHeader)),
                external__react_["createElement"]("div", { onKeyDown: this._onContentKeyDown, role: "presentation", className: classNames.contentWrapper },
                    external__react_["createElement"](FocusZone_FocusZone, { componentRef: this._focusZone, className: classNames.focusZone, direction: FocusZoneDirection.vertical, isInnerZoneKeystroke: isRightArrow, onActiveElementChanged: this._onActiveRowChanged, onBlur: this._onBlur }, !this.props.disableSelectionZone ? (external__react_["createElement"](SelectionZone_SelectionZone, __assign({ ref: this._selectionZone, selection: selection, selectionPreservedOnEmptyClick: selectionPreservedOnEmptyClick, selectionMode: selectionMode, onItemInvoked: onItemInvoked, onItemContextMenu: onItemContextMenu, enterModalOnTouch: this.props.enterModalSelectionOnTouch }, selectionZoneProps || {}), list)) : (list))),
                onRenderDetailsFooter(__assign({}, detailsFooterProps), this._onRenderDetailsFooter))));
    };
    DetailsListBase.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this._forceListUpdates();
    };
    DetailsListBase.prototype._onRenderCell = function (nestingDepth, item, index) {
        var _a = this.props, compact = _a.compact, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.rowElementEventMap, onRenderMissingItem = _a.onRenderMissingItem, onRenderItemColumn = _a.onRenderItemColumn, _b = _a.onRenderRow, onRenderRow = _b === void 0 ? this._onRenderRow : _b, _c = _a.selectionMode, selectionMode = _c === void 0 ? this._selection.mode : _c, viewport = _a.viewport, checkboxVisibility = _a.checkboxVisibility, getRowAriaLabel = _a.getRowAriaLabel, getRowAriaDescribedBy = _a.getRowAriaDescribedBy, checkButtonAriaLabel = _a.checkButtonAriaLabel, checkboxCellClassName = _a.checkboxCellClassName, groupProps = _a.groupProps, useReducedRowRenderer = _a.useReducedRowRenderer, indentWidth = _a.indentWidth, _d = _a.cellStyleProps, cellStyleProps = _d === void 0 ? DEFAULT_CELL_STYLE_PROPS : _d;
        var collapseAllVisibility = groupProps && groupProps.collapseAllVisibility;
        var selection = this._selection;
        var dragDropHelper = this._dragDropHelper;
        var columns = this.state.adjustedColumns;
        var rowProps = {
            item: item,
            itemIndex: index,
            compact: compact,
            columns: columns,
            groupNestingDepth: nestingDepth,
            selectionMode: selectionMode,
            selection: selection,
            onDidMount: this._onRowDidMount,
            onWillUnmount: this._onRowWillUnmount,
            onRenderItemColumn: onRenderItemColumn,
            eventsToRegister: eventsToRegister,
            dragDropEvents: dragDropEvents,
            dragDropHelper: dragDropHelper,
            viewport: viewport,
            checkboxVisibility: checkboxVisibility,
            collapseAllVisibility: collapseAllVisibility,
            getRowAriaLabel: getRowAriaLabel,
            getRowAriaDescribedBy: getRowAriaDescribedBy,
            checkButtonAriaLabel: checkButtonAriaLabel,
            checkboxCellClassName: checkboxCellClassName,
            useReducedRowRenderer: useReducedRowRenderer,
            indentWidth: indentWidth,
            cellStyleProps: cellStyleProps
        };
        if (!item) {
            if (onRenderMissingItem) {
                return onRenderMissingItem(index, rowProps);
            }
            return null;
        }
        return onRenderRow(rowProps, this._onRenderRow);
    };
    DetailsListBase.prototype._onGroupExpandStateChanged = function (isSomeGroupExpanded) {
        this.setState({ isSomeGroupExpanded: isSomeGroupExpanded });
    };
    DetailsListBase.prototype._onColumnIsSizingChanged = function (column, isSizing) {
        this.setState({ isSizing: isSizing });
    };
    DetailsListBase.prototype._onHeaderKeyDown = function (ev) {
        if (ev.which === KeyCodes.down) {
            if (this._focusZone.current && this._focusZone.current.focus()) {
                // select the first item in list after down arrow key event
                this._selection.setIndexSelected(0, true, false);
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    };
    DetailsListBase.prototype._onContentKeyDown = function (ev) {
        if (ev.which === KeyCodes.up && !ev.altKey) {
            if (this._header.current && this._header.current.focus()) {
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    };
    DetailsListBase.prototype._getGroupNestingDepth = function () {
        var groups = this.props.groups;
        var level = 0;
        var groupsInLevel = groups;
        while (groupsInLevel && groupsInLevel.length > 0) {
            level++;
            groupsInLevel = groupsInLevel[0].children;
        }
        return level;
    };
    DetailsListBase.prototype._onRowDidMount = function (row) {
        var _a = row.props, item = _a.item, itemIndex = _a.itemIndex;
        var itemKey = this._getItemKey(item, itemIndex);
        this._activeRows[itemKey] = row; // this is used for column auto resize
        this._setFocusToRowIfPending(row);
        var onRowDidMount = this.props.onRowDidMount;
        if (onRowDidMount) {
            onRowDidMount(item, itemIndex);
        }
    };
    DetailsListBase.prototype._setFocusToRowIfPending = function (row) {
        var itemIndex = row.props.itemIndex;
        if (this._initialFocusedIndex !== undefined && itemIndex === this._initialFocusedIndex) {
            this._setFocusToRow(row);
            delete this._initialFocusedIndex;
        }
    };
    DetailsListBase.prototype._setFocusToRow = function (row, forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._selectionZone.current) {
            this._selectionZone.current.ignoreNextFocus();
        }
        this._async.setTimeout(function () {
            row.focus(forceIntoFirstElement);
        }, 0);
    };
    DetailsListBase.prototype._onRowWillUnmount = function (row) {
        var onRowWillUnmount = this.props.onRowWillUnmount;
        var _a = row.props, item = _a.item, itemIndex = _a.itemIndex;
        var itemKey = this._getItemKey(item, itemIndex);
        delete this._activeRows[itemKey];
        if (onRowWillUnmount) {
            onRowWillUnmount(item, itemIndex);
        }
    };
    DetailsListBase.prototype._onToggleCollapse = function (collapsed) {
        this.setState({
            isCollapsed: collapsed
        });
        if (this._groupedList.current) {
            this._groupedList.current.toggleCollapseAll(collapsed);
        }
    };
    DetailsListBase.prototype._onColumnDragEnd = function (props, event) {
        var columnReorderOptions = this.props.columnReorderOptions;
        var finalDropLocation = ColumnDragEndLocation.outside;
        if (columnReorderOptions && columnReorderOptions.onDragEnd) {
            if (props.dropLocation && props.dropLocation !== ColumnDragEndLocation.header) {
                finalDropLocation = props.dropLocation;
            }
            else if (this._root.current) {
                var clientRect = this._root.current.getBoundingClientRect();
                if (event.clientX > clientRect.left &&
                    event.clientX < clientRect.right &&
                    event.clientY > clientRect.top &&
                    event.clientY < clientRect.bottom) {
                    finalDropLocation = ColumnDragEndLocation.surface;
                }
            }
            columnReorderOptions.onDragEnd(finalDropLocation);
        }
    };
    DetailsListBase.prototype._forceListUpdates = function () {
        this._pendingForceUpdate = false;
        if (this._groupedList.current) {
            this._groupedList.current.forceUpdate();
        }
        if (this._list.current) {
            this._list.current.forceUpdate();
        }
    };
    DetailsListBase.prototype._notifyColumnsResized = function () {
        this.state.adjustedColumns.forEach(function (column) {
            if (column.onColumnResize) {
                column.onColumnResize(column.currentWidth);
            }
        });
    };
    DetailsListBase.prototype._adjustColumns = function (newProps, forceUpdate, resizingColumnIndex) {
        var adjustedColumns = this._getAdjustedColumns(newProps, forceUpdate, resizingColumnIndex);
        var viewportWidth = this.props.viewport.width;
        if (adjustedColumns) {
            this.setState({
                adjustedColumns: adjustedColumns,
                lastWidth: viewportWidth
            }, this._notifyColumnsResized);
        }
    };
    /** Returns adjusted columns, given the viewport size and layout mode. */
    DetailsListBase.prototype._getAdjustedColumns = function (newProps, forceUpdate, resizingColumnIndex) {
        var _this = this;
        var newItems = newProps.items, layoutMode = newProps.layoutMode, selectionMode = newProps.selectionMode;
        var newColumns = newProps.columns;
        var viewportWidth = newProps.viewport.width;
        var columns = this.props ? this.props.columns : [];
        var lastWidth = this.state ? this.state.lastWidth : -1;
        var lastSelectionMode = this.state ? this.state.lastSelectionMode : undefined;
        if (viewportWidth !== undefined) {
            if (!forceUpdate && lastWidth === viewportWidth && lastSelectionMode === selectionMode && (!columns || newColumns === columns)) {
                return [];
            }
        }
        else {
            viewportWidth = this.props.viewport.width;
        }
        newColumns = newColumns || buildColumns(newItems, true);
        var adjustedColumns;
        if (layoutMode === DetailsListLayoutMode.fixedColumns) {
            adjustedColumns = this._getFixedColumns(newColumns);
            // Preserve adjusted column calculated widths.
            adjustedColumns.forEach(function (column) {
                _this._rememberCalculatedWidth(column, column.calculatedWidth);
            });
        }
        else {
            if (resizingColumnIndex !== undefined) {
                adjustedColumns = this._getJustifiedColumnsAfterResize(newColumns, viewportWidth, newProps, resizingColumnIndex);
            }
            else {
                adjustedColumns = this._getJustifiedColumns(newColumns, viewportWidth, newProps, 0);
            }
            adjustedColumns.forEach(function (column) {
                _this._getColumnOverride(column.key).currentWidth = column.calculatedWidth;
            });
        }
        return adjustedColumns;
    };
    /** Builds a set of columns based on the given columns mixed with the current overrides. */
    DetailsListBase.prototype._getFixedColumns = function (newColumns) {
        var _this = this;
        return newColumns.map(function (column) {
            var newColumn = object_assign({}, column, _this._columnOverrides[column.key]);
            if (!newColumn.calculatedWidth) {
                newColumn.calculatedWidth = newColumn.maxWidth || newColumn.minWidth || MIN_COLUMN_WIDTH;
            }
            return newColumn;
        });
    };
    DetailsListBase.prototype._getJustifiedColumnsAfterResize = function (newColumns, viewportWidth, props, resizingColumnIndex) {
        var _this = this;
        var fixedColumns = newColumns.slice(0, resizingColumnIndex);
        fixedColumns.forEach(function (column) { return (column.calculatedWidth = _this._getColumnOverride(column.key).currentWidth); });
        var fixedWidth = fixedColumns.reduce(function (total, column, i) { return total + getPaddedWidth(column, i === 0, props); }, 0);
        var remainingColumns = newColumns.slice(resizingColumnIndex);
        var remainingWidth = viewportWidth - fixedWidth;
        return fixedColumns.concat(this._getJustifiedColumns(remainingColumns, remainingWidth, props, resizingColumnIndex));
    };
    /** Builds a set of columns to fix within the viewport width. */
    DetailsListBase.prototype._getJustifiedColumns = function (newColumns, viewportWidth, props, firstIndex) {
        var _this = this;
        var _a = props.selectionMode, selectionMode = _a === void 0 ? this._selection.mode : _a, checkboxVisibility = props.checkboxVisibility;
        var rowCheckWidth = selectionMode !== SelectionMode.none && checkboxVisibility !== CheckboxVisibility.hidden ? CHECKBOX_WIDTH : 0;
        var groupExpandWidth = this._getGroupNestingDepth() * SPACER_WIDTH;
        var totalWidth = 0; // offset because we have one less inner padding.
        var availableWidth = viewportWidth - (rowCheckWidth + groupExpandWidth);
        var adjustedColumns = newColumns.map(function (column, i) {
            var newColumn = __assign({}, column, { calculatedWidth: column.minWidth || MIN_COLUMN_WIDTH }, _this._columnOverrides[column.key]);
            var isFirst = i + firstIndex === 0;
            totalWidth += getPaddedWidth(newColumn, isFirst, props);
            return newColumn;
        });
        var lastIndex = adjustedColumns.length - 1;
        // Shrink or remove collapsable columns.
        while (lastIndex > 0 && totalWidth > availableWidth) {
            var column = adjustedColumns[lastIndex];
            var minWidth = column.minWidth || MIN_COLUMN_WIDTH;
            var overflowWidth = totalWidth - availableWidth;
            if (column.calculatedWidth - minWidth >= overflowWidth || !(column.isCollapsable || column.isCollapsible)) {
                column.calculatedWidth = Math.max(column.calculatedWidth - overflowWidth, minWidth);
                totalWidth = availableWidth;
            }
            else {
                totalWidth -= getPaddedWidth(column, false, props);
                adjustedColumns.splice(lastIndex, 1);
            }
            lastIndex--;
        }
        // Then expand columns starting at the beginning, until we've filled the width.
        for (var i = 0; i < adjustedColumns.length && totalWidth < availableWidth; i++) {
            var column = adjustedColumns[i];
            var isLast = i === adjustedColumns.length - 1;
            var overrides = this._columnOverrides[column.key];
            if (overrides && overrides.calculatedWidth && !isLast) {
                continue;
            }
            var spaceLeft = availableWidth - totalWidth;
            var increment = void 0;
            if (isLast) {
                increment = spaceLeft;
            }
            else {
                var maxWidth = column.maxWidth;
                var minWidth = column.minWidth || maxWidth || MIN_COLUMN_WIDTH;
                increment = maxWidth ? Math.min(spaceLeft, maxWidth - minWidth) : spaceLeft;
            }
            column.calculatedWidth = column.calculatedWidth + increment;
            totalWidth += increment;
        }
        return adjustedColumns;
    };
    DetailsListBase.prototype._onColumnResized = function (resizingColumn, newWidth, resizingColumnIndex) {
        var newCalculatedWidth = Math.max(resizingColumn.minWidth || MIN_COLUMN_WIDTH, newWidth);
        if (this.props.onColumnResize) {
            this.props.onColumnResize(resizingColumn, newCalculatedWidth, resizingColumnIndex);
        }
        this._rememberCalculatedWidth(resizingColumn, newCalculatedWidth);
        this._adjustColumns(this.props, true, resizingColumnIndex);
        this._forceListUpdates();
    };
    DetailsListBase.prototype._rememberCalculatedWidth = function (column, newCalculatedWidth) {
        var overrides = this._getColumnOverride(column.key);
        overrides.calculatedWidth = newCalculatedWidth;
        overrides.currentWidth = newCalculatedWidth;
    };
    DetailsListBase.prototype._getColumnOverride = function (key) {
        return (this._columnOverrides[key] = this._columnOverrides[key] || {});
    };
    /**
     * Callback function when double clicked on the details header column resizer
     * which will measure the column cells of all the active rows and resize the
     * column to the max cell width.
     *
     * @private
     * @param {IColumn} column (double clicked column definition)
     * @param {number} columnIndex (double clicked column index)
     * @todo min width 100 should be changed to const value and should be consistent with the
     * value used on _onSizerMove method in DetailsHeader
     */
    DetailsListBase.prototype._onColumnAutoResized = function (column, columnIndex) {
        var _this = this;
        var max = 0;
        var count = 0;
        var totalCount = Object.keys(this._activeRows).length;
        for (var key in this._activeRows) {
            if (this._activeRows.hasOwnProperty(key)) {
                var currentRow = this._activeRows[key];
                currentRow.measureCell(columnIndex, function (width) {
                    max = Math.max(max, width);
                    count++;
                    if (count === totalCount) {
                        _this._onColumnResized(column, max, columnIndex);
                    }
                });
            }
        }
    };
    /**
     * Call back function when an element in FocusZone becomes active. It will translate it into item
     * and call onActiveItemChanged callback if specified.
     *
     * @private
     * @param {el} row element that became active in Focus Zone
     * @param {ev} focus event from Focus Zone
     */
    DetailsListBase.prototype._onActiveRowChanged = function (el, ev) {
        var _a = this.props, items = _a.items, onActiveItemChanged = _a.onActiveItemChanged;
        if (!el) {
            return;
        }
        // Check and assign index only if the event was raised from any DetailsRow element
        if (el.getAttribute('data-item-index')) {
            var index = Number(el.getAttribute('data-item-index'));
            if (index >= 0) {
                if (onActiveItemChanged) {
                    onActiveItemChanged(items[index], index, ev);
                }
                this.setState({
                    focusedItemIndex: index
                });
            }
        }
    };
    DetailsListBase.prototype._onBlur = function (event) {
        this.setState({
            focusedItemIndex: -1
        });
    };
    DetailsListBase.prototype._getItemKey = function (item, itemIndex) {
        var getKey = this.props.getKey;
        var itemKey = undefined;
        if (item) {
            itemKey = item.key;
        }
        if (getKey) {
            itemKey = getKey(item, itemIndex);
        }
        if (!itemKey) {
            itemKey = itemIndex;
        }
        return itemKey;
    };
    DetailsListBase.prototype._getDetailsFooterProps = function () {
        var columns = this.state.adjustedColumns;
        var _a = this.props, viewport = _a.viewport, checkboxVisibility = _a.checkboxVisibility, indentWidth = _a.indentWidth, _b = _a.cellStyleProps, cellStyleProps = _b === void 0 ? DEFAULT_CELL_STYLE_PROPS : _b, _c = _a.selectionMode, selectionMode = _c === void 0 ? this._selection.mode : _c;
        return {
            columns: columns,
            groupNestingDepth: this._getGroupNestingDepth(),
            selection: this._selection,
            selectionMode: selectionMode,
            viewport: viewport,
            checkboxVisibility: checkboxVisibility,
            indentWidth: indentWidth,
            cellStyleProps: cellStyleProps
        };
    };
    DetailsListBase.prototype._getColumnReorderProps = function () {
        var columnReorderOptions = this.props.columnReorderOptions;
        if (columnReorderOptions) {
            return __assign({}, columnReorderOptions, { onColumnDragEnd: this._onColumnDragEnd });
        }
    };
    DetailsListBase.prototype._getGroupProps = function (detailsGroupProps) {
        var _this = this;
        var onRenderDetailsGroupFooter = detailsGroupProps.onRenderFooter, onRenderDetailsGroupHeader = detailsGroupProps.onRenderHeader;
        var columns = this.state.adjustedColumns;
        var _a = this.props, _b = _a.selectionMode, selectionMode = _b === void 0 ? this._selection.mode : _b, viewport = _a.viewport, _c = _a.cellStyleProps, cellStyleProps = _c === void 0 ? DEFAULT_CELL_STYLE_PROPS : _c, checkboxVisibility = _a.checkboxVisibility, indentWidth = _a.indentWidth;
        var groupNestingDepth = this._getGroupNestingDepth();
        var onRenderFooter = onRenderDetailsGroupFooter
            ? function (props, defaultRender) {
                return onRenderDetailsGroupFooter(__assign({}, props, { columns: columns, groupNestingDepth: groupNestingDepth, indentWidth: indentWidth, selection: _this._selection, selectionMode: selectionMode, viewport: viewport, checkboxVisibility: checkboxVisibility,
                    cellStyleProps: cellStyleProps }), defaultRender);
            }
            : undefined;
        var onRenderHeader = onRenderDetailsGroupHeader
            ? function (props, defaultRender) {
                return onRenderDetailsGroupHeader(__assign({}, props, { columns: columns, groupNestingDepth: groupNestingDepth, indentWidth: indentWidth, selection: _this._selection, selectionMode: selectionMode, viewport: viewport, checkboxVisibility: checkboxVisibility,
                    cellStyleProps: cellStyleProps }), defaultRender);
            }
            : undefined;
        var groupProps = detailsGroupProps;
        return __assign({}, groupProps, { onRenderFooter: onRenderFooter,
            onRenderHeader: onRenderHeader });
    };
    DetailsListBase.defaultProps = {
        layoutMode: DetailsListLayoutMode.justified,
        selectionMode: SelectionMode.multiple,
        constrainMode: ConstrainMode.horizontalConstrained,
        checkboxVisibility: CheckboxVisibility.onHover,
        isHeaderVisible: true,
        enableShimmer: false,
        compact: false
    };
    DetailsListBase = __decorate([
        withViewport
    ], DetailsListBase);
    return DetailsListBase;
}(BaseComponent_BaseComponent));

function buildColumns(items, canResizeColumns, onColumnClick, sortedColumnKey, isSortedDescending, groupedColumnKey, isMultiline) {
    var columns = [];
    if (items && items.length) {
        var firstItem = items[0];
        for (var propName in firstItem) {
            if (firstItem.hasOwnProperty(propName)) {
                columns.push({
                    key: propName,
                    name: propName,
                    fieldName: propName,
                    minWidth: MIN_COLUMN_WIDTH,
                    maxWidth: 300,
                    isCollapsable: !!columns.length,
                    isCollapsible: !!columns.length,
                    isMultiline: isMultiline === undefined ? false : isMultiline,
                    isSorted: sortedColumnKey === propName,
                    isSortedDescending: !!isSortedDescending,
                    isRowHeader: false,
                    columnActionsMode: ColumnActionsMode.clickable,
                    isResizable: canResizeColumns,
                    onColumnClick: onColumnClick,
                    isGrouped: groupedColumnKey === propName
                });
            }
        }
    }
    return columns;
}
function isRightArrow(event) {
    return event.which === getRTLSafeKeyCode(KeyCodes.right);
}
function getPaddedWidth(column, isFirst, props) {
    var _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? DEFAULT_CELL_STYLE_PROPS : _a;
    return (column.calculatedWidth +
        cellStyleProps.cellLeftPadding +
        cellStyleProps.cellRightPadding +
        (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0));
}

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.styles.js

var DetailsList_styles_GlobalClassNames = {
    root: 'ms-DetailsList',
    compact: 'ms-DetailsList--Compact',
    contentWrapper: 'ms-DetailsList-contentWrapper',
    headerWrapper: 'ms-DetailsList-headerWrapper',
    isFixed: 'is-fixed',
    isHorizontalConstrained: 'is-horizontalConstrained',
    listCell: 'ms-List-cell'
};
var DetailsList_styles_getStyles = function (props) {
    var theme = props.theme, className = props.className, isHorizontalConstrained = props.isHorizontalConstrained, compact = props.compact, isFixed = props.isFixed;
    var semanticColors = theme.semanticColors;
    var classNames = getGlobalClassNames(DetailsList_styles_GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.small,
            {
                position: 'relative',
                fontSize: FontSizes.small,
                background: semanticColors.listBackground,
                color: semanticColors.listText,
                selectors: (_a = {},
                    _a["& ." + classNames.listCell] = {
                        minHeight: 38,
                        wordBreak: 'break-word'
                    },
                    _a)
            },
            isFixed && [classNames.isFixed],
            compact && [
                classNames.compact,
                {
                    selectors: (_b = {},
                        _b["." + classNames.listCell] = {
                            minHeight: 32
                        },
                        _b)
                }
            ],
            isHorizontalConstrained && [
                classNames.isHorizontalConstrained,
                {
                    overflowX: 'auto',
                    overflowY: 'visible',
                    WebkitOverflowScrolling: 'touch'
                }
            ],
            className
        ],
        focusZone: [
            {
                display: 'inline-block',
                minWidth: '100%',
                minHeight: 1
            }
        ],
        headerWrapper: [classNames.headerWrapper],
        contentWrapper: [classNames.contentWrapper]
    };
    var _a, _b;
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.js



var DetailsList = styled(DetailsList_base_DetailsListBase, DetailsList_styles_getStyles, undefined, {
    scope: 'DetailsList'
});

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/DetailsList/index.js









// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/DetailsList.js


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/MarqueeSelection/MarqueeSelection.base.js



var MarqueeSelection_base_getClassNames = classNamesFunction();
// We want to make the marquee selection start when the user drags a minimum distance. Otherwise we'd start
// the drag even if they just click an item without moving.
var MIN_DRAG_DISTANCE = 5;
/**
 * MarqueeSelection component abstracts managing a draggable rectangle which sets items selected/not selected.
 * Elements which have data-selectable-index attributes are queried and measured once to determine if they
 * fall within the bounds of the rectangle. The measure is memoized during the drag as a performance optimization
 * so if the items change sizes while dragging, that could cause incorrect results.
 */
var MarqueeSelection_base_MarqueeSelectionBase = /** @class */ (function (_super) {
    __extends(MarqueeSelectionBase, _super);
    function MarqueeSelectionBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = external__react_["createRef"]();
        _this._onMouseDown = function (ev) {
            var _a = _this.props, isEnabled = _a.isEnabled, onShouldStartSelection = _a.onShouldStartSelection;
            // Ensure the mousedown is within the boundaries of the target. If not, it may have been a click on a scrollbar.
            if (_this._isMouseEventOnScrollbar(ev)) {
                return;
            }
            if (_this._isInSelectionToggle(ev)) {
                return;
            }
            if (!_this._isTouch && isEnabled && !_this._isDragStartInSelection(ev) && (!onShouldStartSelection || onShouldStartSelection(ev))) {
                if (_this._scrollableSurface && ev.button === 0 && _this._root.current) {
                    _this._selectedIndicies = {};
                    _this._preservedIndicies = undefined;
                    _this._events.on(window, 'mousemove', _this._onAsyncMouseMove);
                    _this._events.on(_this._scrollableParent, 'scroll', _this._onAsyncMouseMove);
                    _this._events.on(window, 'click', _this._onMouseUp, true);
                    _this._autoScroll = new AutoScroll_AutoScroll(_this._root.current);
                    _this._scrollTop = _this._scrollableSurface.scrollTop;
                    _this._rootRect = _this._root.current.getBoundingClientRect();
                    _this._onMouseMove(ev);
                }
            }
        };
        _this._onTouchStart = function (ev) {
            _this._isTouch = true;
            _this._async.setTimeout(function () {
                _this._isTouch = false;
            }, 0);
        };
        _this._onPointerDown = function (ev) {
            if (ev.pointerType === 'touch') {
                _this._isTouch = true;
                _this._async.setTimeout(function () {
                    _this._isTouch = false;
                }, 0);
            }
        };
        _this.state = {
            dragRect: undefined
        };
        return _this;
    }
    MarqueeSelectionBase.prototype.componentDidMount = function () {
        this._scrollableParent = findScrollableParent(this._root.current);
        this._scrollableSurface = this._scrollableParent === window ? document.body : this._scrollableParent;
        // When scroll events come from window, we need to read scrollTop values from the body.
        var hitTarget = this.props.isDraggingConstrainedToRoot ? this._root.current : this._scrollableSurface;
        this._events.on(hitTarget, 'mousedown', this._onMouseDown);
        this._events.on(hitTarget, 'touchstart', this._onTouchStart, true);
        this._events.on(hitTarget, 'pointerdown', this._onPointerDown, true);
    };
    MarqueeSelectionBase.prototype.componentWillUnmount = function () {
        if (this._autoScroll) {
            this._autoScroll.dispose();
        }
    };
    MarqueeSelectionBase.prototype.render = function () {
        var _a = this.props, rootProps = _a.rootProps, children = _a.children, theme = _a.theme, className = _a.className, styles = _a.styles;
        var dragRect = this.state.dragRect;
        var classNames = MarqueeSelection_base_getClassNames(styles, {
            theme: theme,
            className: className
        });
        return (external__react_["createElement"]("div", __assign({}, rootProps, { className: classNames.root, ref: this._root }),
            children,
            dragRect && external__react_["createElement"]("div", { className: classNames.dragMask }),
            dragRect && (external__react_["createElement"]("div", { className: classNames.box, style: dragRect },
                external__react_["createElement"]("div", { className: classNames.boxFill })))));
    };
    /** Determine if the mouse event occured on a scrollbar of the target element. */
    MarqueeSelectionBase.prototype._isMouseEventOnScrollbar = function (ev) {
        var targetElement = ev.target;
        var targetScrollbarWidth = targetElement.offsetWidth - targetElement.clientWidth;
        if (targetScrollbarWidth) {
            var targetRect = targetElement.getBoundingClientRect();
            // Check vertical scroll
            if (rtl_getRTL()) {
                if (ev.clientX < targetRect.left + targetScrollbarWidth) {
                    return true;
                }
            }
            else {
                if (ev.clientX > targetRect.left + targetElement.clientWidth) {
                    return true;
                }
            }
            // Check horizontal scroll
            if (ev.clientY > targetRect.top + targetElement.clientHeight) {
                return true;
            }
        }
        return false;
    };
    MarqueeSelectionBase.prototype._getRootRect = function () {
        return {
            left: this._rootRect.left,
            top: this._rootRect.top + (this._scrollTop - this._scrollableSurface.scrollTop),
            width: this._rootRect.width,
            height: this._rootRect.height
        };
    };
    MarqueeSelectionBase.prototype._onAsyncMouseMove = function (ev) {
        var _this = this;
        this._async.requestAnimationFrame(function () {
            _this._onMouseMove(ev);
        });
        ev.stopPropagation();
        ev.preventDefault();
    };
    MarqueeSelectionBase.prototype._onMouseMove = function (ev) {
        if (!this._autoScroll) {
            return;
        }
        if (ev.clientX !== undefined) {
            this._lastMouseEvent = ev;
        }
        var rootRect = this._getRootRect();
        var currentPoint = { x: ev.clientX - rootRect.left, y: ev.clientY - rootRect.top };
        if (!this._dragOrigin) {
            this._dragOrigin = currentPoint;
        }
        if (ev.buttons !== undefined && ev.buttons === 0) {
            this._onMouseUp(ev);
        }
        else {
            if (this.state.dragRect || getDistanceBetweenPoints(this._dragOrigin, currentPoint) > MIN_DRAG_DISTANCE) {
                if (!this.state.dragRect) {
                    var selection = this.props.selection;
                    this._preservedIndicies = selection && selection.getSelectedIndices && selection.getSelectedIndices();
                }
                // We need to constrain the current point to the rootRect boundaries.
                var constrainedPoint = this.props.isDraggingConstrainedToRoot
                    ? {
                        x: Math.max(0, Math.min(rootRect.width, this._lastMouseEvent.clientX - rootRect.left)),
                        y: Math.max(0, Math.min(rootRect.height, this._lastMouseEvent.clientY - rootRect.top))
                    }
                    : {
                        x: this._lastMouseEvent.clientX - rootRect.left,
                        y: this._lastMouseEvent.clientY - rootRect.top
                    };
                var dragRect = {
                    left: Math.min(this._dragOrigin.x, constrainedPoint.x),
                    top: Math.min(this._dragOrigin.y, constrainedPoint.y),
                    width: Math.abs(constrainedPoint.x - this._dragOrigin.x),
                    height: Math.abs(constrainedPoint.y - this._dragOrigin.y)
                };
                this._evaluateSelection(dragRect, rootRect);
                this.setState({ dragRect: dragRect });
            }
        }
        return false;
    };
    MarqueeSelectionBase.prototype._onMouseUp = function (ev) {
        this._events.off(window);
        this._events.off(this._scrollableParent, 'scroll');
        if (this._autoScroll) {
            this._autoScroll.dispose();
        }
        this._autoScroll = this._dragOrigin = this._lastMouseEvent = this._selectedIndicies = this._itemRectCache = undefined;
        if (this.state.dragRect) {
            this.setState({
                dragRect: undefined
            });
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    MarqueeSelectionBase.prototype._isPointInRectangle = function (rectangle, point) {
        return rectangle.top < point.y && rectangle.bottom > point.y && rectangle.left < point.x && rectangle.right > point.x;
    };
    /**
     * We do not want to start the marquee if we're trying to marquee
     * from within an existing marquee selection.
     */
    MarqueeSelectionBase.prototype._isDragStartInSelection = function (ev) {
        var selection = this.props.selection;
        if (!this._root.current || (selection && selection.getSelectedCount() === 0)) {
            return false;
        }
        var allElements = this._root.current.querySelectorAll('[data-selection-index]');
        for (var i = 0; i < allElements.length; i++) {
            var element = allElements[i];
            var index = Number(element.getAttribute('data-selection-index'));
            if (selection.isIndexSelected(index)) {
                var itemRect = element.getBoundingClientRect();
                if (this._isPointInRectangle(itemRect, { x: ev.clientX, y: ev.clientY })) {
                    return true;
                }
            }
        }
        return false;
    };
    MarqueeSelectionBase.prototype._isInSelectionToggle = function (ev) {
        var element = ev.target;
        while (element && element !== this._root.current) {
            if (element.getAttribute('data-selection-toggle') === 'true') {
                return true;
            }
            element = element.parentElement;
        }
        return false;
    };
    MarqueeSelectionBase.prototype._evaluateSelection = function (dragRect, rootRect) {
        // Break early if we don't need to evaluate.
        if (!dragRect || !this._root.current) {
            return;
        }
        var selection = this.props.selection;
        var allElements = this._root.current.querySelectorAll('[data-selection-index]');
        if (!this._itemRectCache) {
            this._itemRectCache = {};
        }
        // Stop change events, clear selection to re-populate.
        selection.setChangeEvents(false);
        selection.setAllSelected(false);
        for (var i = 0; i < allElements.length; i++) {
            var element = allElements[i];
            var index = element.getAttribute('data-selection-index');
            // Pull the memoized rectangle for the item, or the get the rect and memoize.
            var itemRect = this._itemRectCache[index];
            if (!itemRect) {
                itemRect = element.getBoundingClientRect();
                // Normalize the item rect to the dragRect coordinates.
                itemRect = {
                    left: itemRect.left - rootRect.left,
                    top: itemRect.top - rootRect.top,
                    width: itemRect.width,
                    height: itemRect.height,
                    right: itemRect.left - rootRect.left + itemRect.width,
                    bottom: itemRect.top - rootRect.top + itemRect.height
                };
                if (itemRect.width > 0 && itemRect.height > 0) {
                    this._itemRectCache[index] = itemRect;
                }
            }
            if (itemRect.top < dragRect.top + dragRect.height &&
                itemRect.bottom > dragRect.top &&
                itemRect.left < dragRect.left + dragRect.width &&
                itemRect.right > dragRect.left) {
                this._selectedIndicies[index] = true;
            }
            else {
                delete this._selectedIndicies[index];
            }
        }
        for (var index in this._selectedIndicies) {
            if (this._selectedIndicies.hasOwnProperty(index)) {
                selection.setIndexSelected(Number(index), true, false);
            }
        }
        if (this._preservedIndicies) {
            for (var _i = 0, _a = this._preservedIndicies; _i < _a.length; _i++) {
                var index = _a[_i];
                selection.setIndexSelected(index, true, false);
            }
        }
        selection.setChangeEvents(true);
    };
    MarqueeSelectionBase.defaultProps = {
        rootTagName: 'div',
        rootProps: {},
        isEnabled: true
    };
    return MarqueeSelectionBase;
}(BaseComponent_BaseComponent));


// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/MarqueeSelection/MarqueeSelection.styles.js

var MarqueeSelection_styles_getStyles = function (props) {
    var theme = props.theme, className = props.className;
    var palette = theme.palette;
    return {
        root: [
            className,
            {
                position: 'relative',
                cursor: 'default'
            }
        ],
        dragMask: [
            {
                position: 'absolute',
                background: 'rgba(255, 0, 0, 0)',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                selectors: (_a = {},
                    _a[HighContrastSelector] = {
                        background: 'none',
                        backgroundColor: 'transparent'
                    },
                    _a)
            }
        ],
        box: [
            {
                position: 'absolute',
                boxSizing: 'border-box',
                border: "1px solid " + palette.themePrimary,
                pointerEvents: 'none',
                zIndex: 10,
                selectors: (_b = {},
                    _b[HighContrastSelector] = {
                        borderColor: 'Highlight'
                    },
                    _b)
            }
        ],
        boxFill: [
            {
                position: 'absolute',
                boxSizing: 'border-box',
                backgroundColor: palette.themePrimary,
                opacity: 0.1,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                selectors: (_c = {},
                    _c[HighContrastSelector] = {
                        background: 'none',
                        backgroundColor: 'transparent'
                    },
                    _c)
            }
        ]
    };
    var _a, _b, _c;
};

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/components/MarqueeSelection/MarqueeSelection.js



var MarqueeSelection = styled(MarqueeSelection_base_MarqueeSelectionBase, MarqueeSelection_styles_getStyles, undefined, {
    scope: 'MarqueeSelection'
});

// CONCATENATED MODULE: ./node_modules/office-ui-fabric-react/lib/MarqueeSelection.js



// CONCATENATED MODULE: ./lib/webparts/fabricDetailsList/components/FabricDetailsList.js
var FabricDetailsList___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var FabricDetailsList_classNames = mergeStyleSets({
    fileIconHeaderIcon: {
        padding: 0,
        fontSize: "16px"
    },
    fileIconCell: {
        textAlign: "center",
        selectors: {
            "&:before": {
                content: ".",
                display: "inline-block",
                verticalAlign: "middle",
                height: "100%",
                width: "0px",
                visibility: "hidden"
            }
        }
    },
    fileIconImg: {
        verticalAlign: "middle",
        maxHeight: "16px",
        maxWidth: "16px"
    },
    controlWrapper: {
        display: "flex",
        flexWrap: "wrap"
    },
    exampleToggle: {
        display: "inline-block",
        marginBottom: "10px",
        marginRight: "30px"
    },
    selectionDetails: {
        marginBottom: "20px"
    }
});
var controlStyles = {
    root: {
        margin: "0 30px 20px 0",
        maxWidth: "300px"
    }
};
var FabricDetailsList_FabricDetailsList = /** @class */ (function (_super) {
    FabricDetailsList___extends(FabricDetailsList, _super);
    function FabricDetailsList(props, state) {
        var _this = _super.call(this, props) || this;
        _this._onChangeText = function (ev, text) {
            _this.setState({
                items: text
                    ? _this._allItems.filter(function (i) { return i.name.toLowerCase().indexOf(text) > -1; })
                    : _this._allItems
            });
        };
        _this._onColumnClick = function (ev, column) {
            var _a = _this.state, columns = _a.columns, items = _a.items;
            var newColumns = columns.slice();
            var currColumn = newColumns.filter(function (currCol) { return column.key === currCol.key; })[0];
            newColumns.forEach(function (newCol) {
                if (newCol === currColumn) {
                    currColumn.isSortedDescending = !currColumn.isSortedDescending;
                    currColumn.isSorted = true;
                }
                else {
                    newCol.isSorted = false;
                    newCol.isSortedDescending = true;
                }
            });
            var newItems = _copyAndSort(items, currColumn.fieldName, currColumn.isSortedDescending);
            _this.setState({
                columns: newColumns,
                items: newItems
            });
        };
        _this._allItems = _generateDocuments(_this.props);
        var columns = [
            {
                key: "column1",
                name: "File Type",
                className: FabricDetailsList_classNames.fileIconCell,
                iconClassName: FabricDetailsList_classNames.fileIconHeaderIcon,
                ariaLabel: "Column operations for File type, Press to sort on File type",
                iconName: "Page",
                isIconOnly: true,
                fieldName: "name",
                minWidth: 16,
                maxWidth: 16,
                onColumnClick: _this._onColumnClick,
                onRender: function (item) {
                    return (external__react_["createElement"]("img", { src: item.iconName, className: FabricDetailsList_classNames.fileIconImg, alt: item.fileType + " file icon" }));
                }
            },
            {
                key: "column2",
                name: "Name",
                fieldName: "name",
                minWidth: 210,
                maxWidth: 350,
                isRowHeader: true,
                isResizable: true,
                isSorted: true,
                isSortedDescending: false,
                sortAscendingAriaLabel: "Sorted A to Z",
                sortDescendingAriaLabel: "Sorted Z to A",
                onColumnClick: _this._onColumnClick,
                data: "string",
                isPadded: true
            },
            {
                key: "column3",
                name: "Date Modified",
                fieldName: "dateModifiedValue",
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                onColumnClick: _this._onColumnClick,
                data: "number",
                onRender: function (item) {
                    return external__react_["createElement"]("span", null, item.dateModified);
                },
                isPadded: true
            },
            {
                key: "column4",
                name: "Modified By",
                fieldName: "modifiedBy",
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                isCollapsible: true,
                data: "string",
                onColumnClick: _this._onColumnClick,
                onRender: function (item) {
                    return external__react_["createElement"]("span", null, item.modifiedBy);
                },
                isPadded: true
            },
            {
                key: "column5",
                name: "File Size",
                fieldName: "fileSizeRaw",
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                isCollapsible: true,
                data: "number",
                onColumnClick: _this._onColumnClick,
                onRender: function (item) {
                    return external__react_["createElement"]("span", null, item.fileSize);
                }
            }
        ];
        _this._selection = new Selection_Selection({
            onSelectionChanged: function () {
                _this.setState({
                    selectionDetails: _this._getSelectionDetails()
                });
            }
        });
        _this.state = {
            items: _this._allItems,
            columns: columns,
            selectionDetails: _this._getSelectionDetails()
        };
        return _this;
        // if (Environment.type === EnvironmentType.SharePoint) {
        //   this.props.spcontect.spHttpClient
        //     .get(
        //       this.props.spcontect.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('Documents')/items/?$expand=file",
        //       SPHttpClient.configurations.v1
        //     )
        //     .then((Response: SPHttpClientResponse) => {
        //       // this.etag = Response.headers.get('ETag');
        //       Response.json().then((listItems: any) => {
        //         console.log(listItems);
        //         // this.setState({ birthday: new Date(listItem.Birthday) });
        //       });
        //     });
        // }
    }
    FabricDetailsList.prototype.render = function () {
        var _a = this.state, columns = _a.columns, items = _a.items, selectionDetails = _a.selectionDetails;
        return (external__react_["createElement"](Fabric, null,
            external__react_["createElement"]("div", { className: FabricDetailsList_classNames.controlWrapper },
                external__react_["createElement"](TextField, { label: "Filter by name:", onChange: this._onChangeText, styles: controlStyles })),
            external__react_["createElement"]("div", { className: FabricDetailsList_classNames.selectionDetails }, selectionDetails),
            external__react_["createElement"](MarqueeSelection, { selection: this._selection },
                external__react_["createElement"](DetailsList, { items: items, columns: columns, setKey: "set", layoutMode: DetailsListLayoutMode.justified, isHeaderVisible: true, selection: this._selection, selectionPreservedOnEmptyClick: true, onItemInvoked: this._onItemInvoked, enterModalSelectionOnTouch: true, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items" }))));
    };
    FabricDetailsList.prototype._onItemInvoked = function (item) {
        alert('Item invoked:' + item.name);
    };
    FabricDetailsList.prototype._getSelectionDetails = function () {
        var selectionCount = this._selection.getSelectedCount();
        switch (selectionCount) {
            case 0:
                return "No items selected";
            case 1:
                return ("1 item selected: " +
                    this._selection.getSelection()[0].name);
            default:
                return selectionCount + " items selected";
        }
    };
    return FabricDetailsList;
}(external__react_["Component"]));
/* harmony default export */ var components_FabricDetailsList = (FabricDetailsList_FabricDetailsList);
function _copyAndSort(items, columnKey, isSortedDescending) {
    var key = columnKey;
    return items
        .slice(0)
        .sort(function (a, b) {
        return (isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1;
    });
}
function _generateDocuments(props) {
    var items = [];
    if (sp_core_library_["Environment"].type === sp_core_library_["EnvironmentType"].SharePoint || sp_core_library_["Environment"].type === sp_core_library_["EnvironmentType"].ClassicSharePoint) {
        props.spcontect.spHttpClient
            .get(props.spcontect.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('Documents')/items/?$select=Modified,File,Editor/Title&$expand=File,Editor", sp_http_["SPHttpClient"].configurations.v1)
            .then(function (Response) {
            // this.etag = Response.headers.get('ETag');
            Response.json().then(function (listItems) {
                console.log(listItems);
                listItems.value.forEach(function (element) {
                    var iconurl;
                    if (element.File.Name.split('.').pop().toLowerCase() === 'pdf') {
                        iconurl = 'https://spoprod-a.akamaihd.net/files/fabric/assets/item-types/48/pdf.svg';
                    }
                    else {
                        iconurl = "https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/" + element.File.Name.split('.').pop() + "_16x1.svg";
                    }
                    items.push({
                        name: element.File.Name,
                        value: element.File.Name,
                        iconName: iconurl,
                        fileType: element.File.Name.split('.')[1],
                        modifiedBy: element.Editor.Title,
                        dateModified: new Date(element.Modified).toLocaleDateString(),
                        dateModifiedValue: new Date(element.Modified).valueOf(),
                        fileSize: readableFileSize(element.File.Length),
                        fileSizeRaw: element.File.Length
                    });
                });
            });
        });
    }
    else if (sp_core_library_["Environment"].type === sp_core_library_["EnvironmentType"].Local) {
        for (var i = 0; i < 500; i++) {
            var randomDate = _randomDate(new Date(2012, 0, 1), new Date());
            var randomFileSize = _randomFileSize();
            var randomFileType = _randomFileIcon();
            var fileName = _lorem(2);
            fileName =
                fileName.charAt(0).toUpperCase() +
                    fileName.slice(1).concat("." + randomFileType.docType);
            var userName = _lorem(2);
            userName = userName
                .split(" ")
                .map(function (name) { return name.charAt(0).toUpperCase() + name.slice(1); })
                .join(" ");
            items.push({
                name: fileName,
                value: fileName,
                iconName: randomFileType.url,
                fileType: randomFileType.docType,
                modifiedBy: userName,
                dateModified: randomDate.dateFormatted,
                dateModifiedValue: randomDate.value,
                fileSize: randomFileSize.value,
                fileSizeRaw: randomFileSize.rawSize
            });
        }
    }
    return items;
}
function readableFileSize(size) {
    var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = 0;
    while (size >= 1024) {
        size /= 1024;
        ++i;
    }
    return size.toFixed(1) + ' ' + units[i];
}
function _randomDate(start, end) {
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return {
        value: date.valueOf(),
        dateFormatted: date.toLocaleDateString()
    };
}
var FILE_ICONS = [
    { name: "accdb" },
    { name: "csv" },
    { name: "docx" },
    { name: "dotx" },
    { name: "mpt" },
    { name: "odt" },
    { name: "one" },
    { name: "onepkg" },
    { name: "onetoc" },
    { name: "pptx" },
    { name: "pub" },
    { name: "vsdx" },
    { name: "xls" },
    { name: "xlsx" },
    { name: "xsn" }
];
function _randomFileIcon() {
    var docType = FILE_ICONS[Math.floor(Math.random() * FILE_ICONS.length)].name;
    return {
        docType: docType,
        url: "https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/" + docType + "_16x1.svg"
    };
}
function _randomFileSize() {
    var fileSize = Math.floor(Math.random() * 100) + 30;
    return {
        value: fileSize + " KB",
        rawSize: fileSize
    };
}
var LOREM_IPSUM = ("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut " +
    "labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut " +
    "aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore " +
    "eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt ").split(" ");
var loremIndex = 0;
function _lorem(wordCount) {
    var startIndex = loremIndex + wordCount > LOREM_IPSUM.length ? 0 : loremIndex;
    loremIndex = startIndex + wordCount;
    return LOREM_IPSUM.slice(startIndex, loremIndex).join(" ");
}

// CONCATENATED MODULE: ./lib/webparts/fabricDetailsList/FabricDetailsListWebPart.js
var FabricDetailsListWebPart___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FabricDetailsListWebPart_FabricDetailsListWebPart = /** @class */ (function (_super) {
    FabricDetailsListWebPart___extends(FabricDetailsListWebPart, _super);
    function FabricDetailsListWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FabricDetailsListWebPart.prototype.render = function () {
        var element = external__react_["createElement"](components_FabricDetailsList, {
            spcontect: this.context
        });
        external__react_dom_["render"](element, this.domElement);
    };
    FabricDetailsListWebPart.prototype.onDispose = function () {
        external__react_dom_["unmountComponentAtNode"](this.domElement);
    };
    return FabricDetailsListWebPart;
}(sp_webpart_base_["BaseClientSideWebPart"]));
/* harmony default export */ var fabricDetailsList_FabricDetailsListWebPart = __webpack_exports__["default"] = (FabricDetailsListWebPart_FabricDetailsListWebPart);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })
/******/ ])});;
//# sourceMappingURL=fabric-details-list-web-part.js.map