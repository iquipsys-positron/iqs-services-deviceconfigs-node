"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const pip_services3_commons_node_4 = require("pip-services3-commons-node");
const DeviceConfigV1Schema_1 = require("../data/version1/DeviceConfigV1Schema");
class DeviceConfigsCommandSet extends pip_services3_commons_node_1.CommandSet {
    constructor(logic) {
        super();
        this._logic = logic;
        // Register commands to the database
        this.addCommand(this.makeGetDeviceConfigByIdCommand());
        this.addCommand(this.makeSetDeviceConfigCommand());
        this.addCommand(this.makeDeleteDeviceConfigByIdCommand());
        this.addCommand(this.makeRequestDeviceConfigByIdCommand());
        this.addCommand(this.makeSendDeviceConfigCommand());
        this.addCommand(this.makeReceiveDeviceConfigCommand());
    }
    makeGetDeviceConfigByIdCommand() {
        return new pip_services3_commons_node_2.Command("get_config_by_id", new pip_services3_commons_node_3.ObjectSchema(true)
            .withRequiredProperty('device_id', pip_services3_commons_node_4.TypeCode.String), (correlationId, args, callback) => {
            let device_id = args.getAsString("device_id");
            this._logic.getConfigById(correlationId, device_id, callback);
        });
    }
    makeSetDeviceConfigCommand() {
        return new pip_services3_commons_node_2.Command("set_config", new pip_services3_commons_node_3.ObjectSchema(true)
            .withRequiredProperty('config', new DeviceConfigV1Schema_1.DeviceConfigV1Schema()), (correlationId, args, callback) => {
            let config = args.get("config");
            this._logic.setConfig(correlationId, config, callback);
        });
    }
    makeDeleteDeviceConfigByIdCommand() {
        return new pip_services3_commons_node_2.Command("delete_config_by_id", new pip_services3_commons_node_3.ObjectSchema(true)
            .withRequiredProperty('device_id', pip_services3_commons_node_4.TypeCode.String), (correlationId, args, callback) => {
            let device_id = args.getAsNullableString("device_id");
            this._logic.deleteConfigById(correlationId, device_id, callback);
        });
    }
    makeRequestDeviceConfigByIdCommand() {
        return new pip_services3_commons_node_2.Command("request_config_by_id", new pip_services3_commons_node_3.ObjectSchema(true)
            .withRequiredProperty('device_id', pip_services3_commons_node_4.TypeCode.String), (correlationId, args, callback) => {
            let device_id = args.getAsString("device_id");
            this._logic.requestConfigById(correlationId, device_id, (err) => {
                callback(err, null);
            });
        });
    }
    makeSendDeviceConfigCommand() {
        return new pip_services3_commons_node_2.Command("send_config", new pip_services3_commons_node_3.ObjectSchema(true)
            .withRequiredProperty('config', new DeviceConfigV1Schema_1.DeviceConfigV1Schema()), (correlationId, args, callback) => {
            let config = args.get("config");
            this._logic.sendConfig(correlationId, config, callback);
        });
    }
    makeReceiveDeviceConfigCommand() {
        return new pip_services3_commons_node_2.Command("receive_config", new pip_services3_commons_node_3.ObjectSchema(true)
            .withRequiredProperty('config', new DeviceConfigV1Schema_1.DeviceConfigV1Schema()), (correlationId, args, callback) => {
            let config = args.get("config");
            this._logic.receiveConfig(correlationId, config, callback);
        });
    }
}
exports.DeviceConfigsCommandSet = DeviceConfigsCommandSet;
//# sourceMappingURL=DeviceConfigsCommandSet.js.map