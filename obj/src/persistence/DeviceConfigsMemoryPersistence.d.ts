import { IdentifiableMemoryPersistence } from 'pip-services3-data-node';
import { DeviceConfigV1 } from '../data/version1/DeviceConfigV1';
import { IDeviceConfigsPersistence } from './IDeviceConfigsPersistence';
export declare class DeviceConfigsMemoryPersistence extends IdentifiableMemoryPersistence<DeviceConfigV1, string> implements IDeviceConfigsPersistence {
    constructor();
}
