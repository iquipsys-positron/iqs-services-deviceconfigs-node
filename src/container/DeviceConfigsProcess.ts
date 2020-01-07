import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';

import { DeviceConfigsServiceFactory } from '../build/DeviceConfigsServiceFactory';
import { DefaultRpcFactory} from 'pip-services3-rpc-node';

export class DeviceConfigsProcess extends ProcessContainer {

    public constructor() {
        super("device_configs", "Device configs microservice");
        this._factories.add(new DeviceConfigsServiceFactory);
        this._factories.add(new DefaultRpcFactory);
    }

}
