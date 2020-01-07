import { IStringIdentifiable } from 'pip-services3-commons-node';
import { ConfigParameterValueV1 } from './ConfigParameterValueV1';
export declare class DeviceConfigV1 implements IStringIdentifiable {
    id: string;
    org_id: string;
    sent_time?: Date;
    received_time?: Date;
    params?: ConfigParameterValueV1[];
}
