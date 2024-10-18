"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./types/zotero-api-client.d.ts" />
const zotero_api_client_1 = __importDefault(require("zotero-api-client"));
function api(key, opts) {
    return (0, zotero_api_client_1.default)(key, opts);
}
exports.default = api;
