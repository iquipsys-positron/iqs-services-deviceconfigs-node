import { ObjectSchema } from 'pip-services3-commons-node';
import { ArraySchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';

import { ConfigParameterValueV1Schema } from './ConfigParameterValueV1Schema';

export class DeviceConfigV1Schema extends ObjectSchema {
    public constructor() {
        super();
        this.withOptionalProperty('id', TypeCode.String);
        this.withRequiredProperty('org_id', TypeCode.String);
        this.withOptionalProperty('sent_time', TypeCode.DateTime);
        this.withOptionalProperty('received_time', TypeCode.DateTime);
        this.withOptionalProperty('params', new ArraySchema(new ConfigParameterValueV1Schema()));
    }
}
