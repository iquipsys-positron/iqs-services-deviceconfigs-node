import { CommandSet } from 'pip-services3-commons-node';
import { IDeviceConfigsController } from './IDeviceConfigsController';
export declare class DeviceConfigsCommandSet extends CommandSet {
    private _logic;
    constructor(logic: IDeviceConfigsController);
    private makeGetDeviceConfigByIdCommand;
    private makeSetDeviceConfigCommand;
    private makeDeleteDeviceConfigByIdCommand;
    private makeRequestDeviceConfigByIdCommand;
    private makeSendDeviceConfigCommand;
    private makeReceiveDeviceConfigCommand;
}
