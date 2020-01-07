import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-node';
import { DeviceConfigV1 } from '../data/version1/DeviceConfigV1';
import { IDeviceConfigsPersistence } from './IDeviceConfigsPersistence';
export declare class DeviceConfigsMongoDbPersistence extends IdentifiableMongoDbPersistence<DeviceConfigV1, string> implements IDeviceConfigsPersistence {
    constructor();
}
