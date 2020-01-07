let _ = require('lodash');

import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-node';

import { DeviceConfigV1 } from '../data/version1/DeviceConfigV1';
import { IDeviceConfigsPersistence } from './IDeviceConfigsPersistence';

export class DeviceConfigsMongoDbPersistence extends IdentifiableMongoDbPersistence<DeviceConfigV1, string> implements IDeviceConfigsPersistence {

    constructor() {
        super('device_configs');
        super.ensureIndex({ org_id: 1 });
        this._maxPageSize = 1000;
    }
    
}
