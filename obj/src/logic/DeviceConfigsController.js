"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const DeviceConfigsCommandSet_1 = require("./DeviceConfigsCommandSet");
class DeviceConfigsController {
    constructor() {
        this._dependencyResolver = new pip_services3_commons_node_2.DependencyResolver(DeviceConfigsController._defaultConfig);
    }
    configure(config) {
        this._dependencyResolver.configure(config);
    }
    setReferences(references) {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired('persistence');
    }
    getCommandSet() {
        if (this._commandSet == null)
            this._commandSet = new DeviceConfigsCommandSet_1.DeviceConfigsCommandSet(this);
        return this._commandSet;
    }
    getConfigById(correlationId, id, callback) {
        this._persistence.getOneById(correlationId, id, callback);
    }
    setConfig(correlationId, config, callback) {
        this._persistence.set(correlationId, config, callback);
    }
    deleteConfigById(correlationId, id, callback) {
        this._persistence.deleteById(correlationId, id, callback);
    }
    requestConfigById(correlationId, id, callback) {
        // Todo: Request config from device
        callback(null);
    }
    sendConfig(correlationId, config, callback) {
        config.sent_time = new Date();
        async.series([
            // Set config
            (callback) => {
                this._persistence.set(correlationId, config, callback);
            },
            // Send config to device
            (callback) => {
                // Todo: Complete implementation
                callback();
            }
        ], (err) => {
            callback(err, err == null ? config : null);
        });
    }
    receiveConfig(correlationId, config, callback) {
        config.received_time = new Date();
        this._persistence.set(correlationId, config, callback);
    }
}
exports.DeviceConfigsController = DeviceConfigsController;
DeviceConfigsController._defaultConfig = pip_services3_commons_node_1.ConfigParams.fromTuples('dependencies.persistence', 'iqs-services-deviceconfigs:persistence:*:*:1.0');
//# sourceMappingURL=DeviceConfigsController.js.map