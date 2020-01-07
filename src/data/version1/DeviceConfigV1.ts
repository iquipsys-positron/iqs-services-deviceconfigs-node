import { IStringIdentifiable } from 'pip-services3-commons-node';

import { ConfigParameterValueV1 } from './ConfigParameterValueV1';

export class DeviceConfigV1 implements IStringIdentifiable {
    public id: string;
    public org_id: string;
    public sent_time?: Date;
    public received_time?: Date;
    public params?: ConfigParameterValueV1[];
}