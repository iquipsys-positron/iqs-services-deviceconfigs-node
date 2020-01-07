import { Descriptor } from 'pip-services3-commons-node';
import { CommandableLambdaFunction } from 'pip-services3-aws-node';
import { DeviceConfigsServiceFactory } from '../build/DeviceConfigsServiceFactory';

export class DeviceConfigsLambdaFunction extends CommandableLambdaFunction {
    public constructor() {
        super("device_configs", "Device configs function");
        this._dependencyResolver.put('controller', new Descriptor('iqs-services-deviceconfigs', 'controller', 'default', '*', '*'));
        this._factories.add(new DeviceConfigsServiceFactory());
    }
}

export const handler = new DeviceConfigsLambdaFunction().getHandler();