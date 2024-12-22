"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerLevel = void 0;
var LoggerLevel;
(function (LoggerLevel) {
    /**
     * Disable all logs
     */
    LoggerLevel["Off"] = "Off";
    /**
     * Only main server infomation
     */
    LoggerLevel["Main"] = "Main";
    /**
     * All logs with requests debug
     */
    LoggerLevel["Debug"] = "Debug";
})(LoggerLevel || (exports.LoggerLevel = LoggerLevel = {}));
