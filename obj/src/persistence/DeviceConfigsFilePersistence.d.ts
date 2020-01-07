import { ConfigParams } from 'pip-services3-commons-node';
import { JsonFilePersister } from 'pip-services3-data-node';
import { DeviceConfigsMemoryPersistence } from './DeviceConfigsMemoryPersistence';
import { DeviceConfigV1 } from '../data/version1/DeviceConfigV1';
export declare class DeviceConfigsFilePersistence extends DeviceConfigsMemoryPersistence {
    protected _persister: JsonFilePersister<DeviceConfigV1>;
    constructor(path?: string);
    configure(config: ConfigParams): void;
}
