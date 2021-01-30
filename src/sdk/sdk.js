"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.getSdk = exports.DeleteModuleDocument = exports.UpdateModuleDocument = exports.CreateModuleDocument = exports.FindModuleByIdDocument = exports.AllModulesDocument = void 0;
var graphql_request_1 = require("graphql-request");
var graphql_1 = require("graphql");
var graphql_tag_1 = require("graphql-tag");
exports.AllModulesDocument = graphql_tag_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query allModules {\n  allModules {\n    data {\n      _id\n      _ts\n      name\n      type\n      description\n      integrationID\n      options {\n        name\n        key\n        type\n        description\n        values\n      }\n    }\n  }\n}\n    "], ["\n    query allModules {\n  allModules {\n    data {\n      _id\n      _ts\n      name\n      type\n      description\n      integrationID\n      options {\n        name\n        key\n        type\n        description\n        values\n      }\n    }\n  }\n}\n    "])));
exports.FindModuleByIdDocument = graphql_tag_1["default"](templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query findModuleByID($id: ID!) {\n  findModuleByID(id: $id) {\n    _id\n    _ts\n    name\n    type\n    description\n    integrationID\n    options {\n      name\n      key\n      type\n      description\n      values\n    }\n  }\n}\n    "], ["\n    query findModuleByID($id: ID!) {\n  findModuleByID(id: $id) {\n    _id\n    _ts\n    name\n    type\n    description\n    integrationID\n    options {\n      name\n      key\n      type\n      description\n      values\n    }\n  }\n}\n    "])));
exports.CreateModuleDocument = graphql_tag_1["default"](templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    mutation createModule($data: ModuleInput!) {\n  createModule(data: $data) {\n    _id\n    _ts\n    name\n    type\n    description\n    integrationID\n    options {\n      name\n      key\n      type\n      description\n      values\n    }\n  }\n}\n    "], ["\n    mutation createModule($data: ModuleInput!) {\n  createModule(data: $data) {\n    _id\n    _ts\n    name\n    type\n    description\n    integrationID\n    options {\n      name\n      key\n      type\n      description\n      values\n    }\n  }\n}\n    "])));
exports.UpdateModuleDocument = graphql_tag_1["default"](templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    mutation updateModule($id: ID!, $data: ModuleInput!) {\n  updateModule(id: $id, data: $data) {\n    _id\n    _ts\n    name\n    type\n    description\n    integrationID\n    options {\n      name\n      key\n      type\n      description\n      values\n    }\n  }\n}\n    "], ["\n    mutation updateModule($id: ID!, $data: ModuleInput!) {\n  updateModule(id: $id, data: $data) {\n    _id\n    _ts\n    name\n    type\n    description\n    integrationID\n    options {\n      name\n      key\n      type\n      description\n      values\n    }\n  }\n}\n    "])));
exports.DeleteModuleDocument = graphql_tag_1["default"](templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    mutation deleteModule($id: ID!) {\n  deleteModule(id: $id) {\n    _id\n  }\n}\n    "], ["\n    mutation deleteModule($id: ID!) {\n  deleteModule(id: $id) {\n    _id\n  }\n}\n    "])));
var defaultWrapper = function (sdkFunction) { return sdkFunction(); };
function getSdk(client, withWrapper) {
    if (withWrapper === void 0) { withWrapper = defaultWrapper; }
    return {
        allModules: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.AllModulesDocument), variables, requestHeaders); });
        },
        findModuleByID: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.FindModuleByIdDocument), variables, requestHeaders); });
        },
        createModule: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.CreateModuleDocument), variables, requestHeaders); });
        },
        updateModule: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.UpdateModuleDocument), variables, requestHeaders); });
        },
        deleteModule: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.DeleteModuleDocument), variables, requestHeaders); });
        }
    };
}
exports.getSdk = getSdk;
function faugra(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.secret, secret = _c === void 0 ? process.env.FAUGRA_SECRET : _c, _d = _b.domain, domain = _d === void 0 ? process.env.FAUGRA_DOMAIN : _d;
    if (!secret) {
        throw new Error('SDK requires a secret to be defined.');
    }
    return getSdk(new graphql_request_1.GraphQLClient(domain || 'https://graphql.fauna.com/graphql', {
        headers: {
            authorization: secret && "Bearer " + secret
        }
    }));
}
exports["default"] = faugra;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
