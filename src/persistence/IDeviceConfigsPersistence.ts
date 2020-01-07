import { IGetter } from 'pip-services3-data-node';
import { ISetter } from 'pip-services3-data-node';

import { DeviceConfigV1 } from '../data/version1/DeviceConfigV1';

export interface IDeviceConfigsPersistence extends IGetter<DeviceConfigV1, string>, ISetter<DeviceConfigV1> {
    getOneById(correlationId: string, id: string, 
        callback: (err: any, item: DeviceConfigV1) => void): void;

    set(correlationId: string, item: DeviceConfigV1, 
        callback: (err: any, item: DeviceConfigV1) => void): void;

    deleteById(correlationId: string, id: string,
        callback: (err: any, item: DeviceConfigV1) => void): void;
}
