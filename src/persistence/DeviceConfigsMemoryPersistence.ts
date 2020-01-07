let _ = require('lodash');

import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IdentifiableMemoryPersistence } from 'pip-services3-data-node';

import { DeviceConfigV1 } from '../data/version1/DeviceConfigV1';
import { IDeviceConfigsPersistence } from './IDeviceConfigsPersistence';

export class DeviceConfigsMemoryPersistence 
    extends IdentifiableMemoryPersistence<DeviceConfigV1, string> 
    implements IDeviceConfigsPersistence {

    constructor() {
        super();
        this._maxPageSize = 1000;
    }

}
