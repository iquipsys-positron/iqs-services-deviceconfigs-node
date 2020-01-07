"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class DeviceConfigsHttpServiceV1 extends pip_services3_rpc_node_1.CommandableHttpService {
    constructor() {
        super('v1/device_configs');
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor('iqs-services-deviceconfigs', 'controller', 'default', '*', '1.0'));
    }
}
exports.DeviceConfigsHttpServiceV1 = DeviceConfigsHttpServiceV1;
//# sourceMappingURL=DeviceConfigsHttpServiceV1.js.map