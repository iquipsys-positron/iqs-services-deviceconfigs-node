"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const DeviceConfigsServiceFactory_1 = require("../build/DeviceConfigsServiceFactory");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class DeviceConfigsProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("device_configs", "Device configs microservice");
        this._factories.add(new DeviceConfigsServiceFactory_1.DeviceConfigsServiceFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
    }
}
exports.DeviceConfigsProcess = DeviceConfigsProcess;
//# sourceMappingURL=DeviceConfigsProcess.js.map