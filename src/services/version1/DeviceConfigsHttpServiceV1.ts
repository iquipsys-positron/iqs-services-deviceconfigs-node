import { Descriptor } from 'pip-services3-commons-node';
import { CommandableHttpService } from 'pip-services3-rpc-node';

export class DeviceConfigsHttpServiceV1 extends CommandableHttpService {
    public constructor() {
        super('v1/device_configs');
        this._dependencyResolver.put('controller', new Descriptor('iqs-services-deviceconfigs', 'controller', 'default', '*', '1.0'));
    }
}