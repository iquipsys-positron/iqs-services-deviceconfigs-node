let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services3-commons-node';
import { IConfigurable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { DependencyResolver } from 'pip-services3-commons-node';
import { ICommandable } from 'pip-services3-commons-node';
import { CommandSet } from 'pip-services3-commons-node';

import { DeviceConfigV1 } from '../data/version1/DeviceConfigV1';
import { IDeviceConfigsPersistence } from '../persistence/IDeviceConfigsPersistence';
import { IDeviceConfigsController } from './IDeviceConfigsController';
import { DeviceConfigsCommandSet } from './DeviceConfigsCommandSet';

export class DeviceConfigsController implements  IConfigurable, IReferenceable, ICommandable, IDeviceConfigsController {
    private static _defaultConfig: ConfigParams = ConfigParams.fromTuples(
        'dependencies.persistence', 'iqs-services-deviceconfigs:persistence:*:*:1.0'
    );

    private _dependencyResolver: DependencyResolver = new DependencyResolver(DeviceConfigsController._defaultConfig);
    private _persistence: IDeviceConfigsPersistence;
    private _commandSet: DeviceConfigsCommandSet;

    public configure(config: ConfigParams): void {
        this._dependencyResolver.configure(config);
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired<IDeviceConfigsPersistence>('persistence');
    }

    public getCommandSet(): CommandSet {
        if (this._commandSet == null)
            this._commandSet = new DeviceConfigsCommandSet(this);
        return this._commandSet;
    }

    public getConfigById(correlationId: string, id: string, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        this._persistence.getOneById(correlationId, id, callback);
    }

    public setConfig(correlationId: string, config: DeviceConfigV1, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        this._persistence.set(correlationId, config, callback);
    }

    public deleteConfigById(correlationId: string, id: string,
        callback: (err: any, config: DeviceConfigV1) => void): void {  
        this._persistence.deleteById(correlationId, id, callback);
    }

    public requestConfigById(correlationId: string, id: string, 
        callback: (err: any) => void): void {
        // Todo: Request config from device
        callback(null);
    }

    public sendConfig(correlationId: string, config: DeviceConfigV1, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        
        config.sent_time = new Date();

        async.series([
            // Set config
            (callback) => {
                this._persistence.set(correlationId, config, callback);
            },
            // Send config to device
            (callback) => {
                // Todo: Complete implementation
                callback();
            }
        ], (err) => {
            callback(err, err == null ? config : null);
        });
    }

    public receiveConfig(correlationId: string, config: DeviceConfigV1, 
        callback: (err: any, config: DeviceConfigV1) => void): void {
        
        config.received_time = new Date();

        this._persistence.set(correlationId, config, callback);
    }

}
