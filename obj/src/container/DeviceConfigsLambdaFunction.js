"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const DeviceConfigsServiceFactory_1 = require("../build/DeviceConfigsServiceFactory");
class DeviceConfigsLambdaFunction extends pip_services3_aws_node_1.CommandableLambdaFunction {
    constructor() {
        super("device_configs", "Device configs function");
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor('iqs-services-deviceconfigs', 'controller', 'default', '*', '*'));
        this._factories.add(new DeviceConfigsServiceFactory_1.DeviceConfigsServiceFactory());
    }
}
exports.DeviceConfigsLambdaFunction = DeviceConfigsLambdaFunction;
exports.handler = new DeviceConfigsLambdaFunction().getHandler();
//# sourceMappingURL=DeviceConfigsLambdaFunction.js.map