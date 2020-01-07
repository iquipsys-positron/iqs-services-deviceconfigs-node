import { CommandSet } from 'pip-services3-commons-node';
import { ICommand } from 'pip-services3-commons-node';
import { Command } from 'pip-services3-commons-node';
import { Schema } from 'pip-services3-commons-node';
import { Parameters } from 'pip-services3-commons-node';
import { ObjectSchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';

import { DeviceConfigV1 } from '../data/version1/DeviceConfigV1';
import { DeviceConfigV1Schema } from '../data/version1/DeviceConfigV1Schema';
import { IDeviceConfigsController } from './IDeviceConfigsController';

export class DeviceConfigsCommandSet extends CommandSet {
    private _logic: IDeviceConfigsController;

    constructor(logic: IDeviceConfigsController) {
        super();

        this._logic = logic;

        // Register commands to the database
		this.addCommand(this.makeGetDeviceConfigByIdCommand());
		this.addCommand(this.makeSetDeviceConfigCommand());
		this.addCommand(this.makeDeleteDeviceConfigByIdCommand());
		this.addCommand(this.makeRequestDeviceConfigByIdCommand());
		this.addCommand(this.makeSendDeviceConfigCommand());
		this.addCommand(this.makeReceiveDeviceConfigCommand());
    }

	private makeGetDeviceConfigByIdCommand(): ICommand {
		return new Command(
			"get_config_by_id",
			new ObjectSchema(true)
				.withRequiredProperty('device_id', TypeCode.String),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let device_id = args.getAsString("device_id");
                this._logic.getConfigById(correlationId, device_id, callback);
            }
		);
	}

	private makeSetDeviceConfigCommand(): ICommand {
		return new Command(
			"set_config",
			new ObjectSchema(true)
				.withRequiredProperty('config', new DeviceConfigV1Schema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let config = args.get("config");
                this._logic.setConfig(correlationId, config, callback);
            }
		);
	}
    
	private makeDeleteDeviceConfigByIdCommand(): ICommand {
		return new Command(
			"delete_config_by_id",
			new ObjectSchema(true)
				.withRequiredProperty('device_id', TypeCode.String),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let device_id = args.getAsNullableString("device_id");
                this._logic.deleteConfigById(correlationId, device_id, callback);
			}
		);
	}

    private makeRequestDeviceConfigByIdCommand(): ICommand {
		return new Command(
			"request_config_by_id",
			new ObjectSchema(true)
				.withRequiredProperty('device_id', TypeCode.String),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let device_id = args.getAsString("device_id");
                this._logic.requestConfigById(correlationId, device_id, (err) => {
                    callback(err, null);
                });
            }
		);
	}

    private makeSendDeviceConfigCommand(): ICommand {
		return new Command(
			"send_config",
			new ObjectSchema(true)
				.withRequiredProperty('config', new DeviceConfigV1Schema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let config = args.get("config");
                this._logic.sendConfig(correlationId, config, callback);
            }
		);
	}

	private makeReceiveDeviceConfigCommand(): ICommand {
		return new Command(
			"receive_config",
			new ObjectSchema(true)
				.withRequiredProperty('config', new DeviceConfigV1Schema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let config = args.get("config");
                this._logic.receiveConfig(correlationId, config, callback);
            }
		);
	}

}