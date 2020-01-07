"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const ConfigParameterValueV1Schema_1 = require("./ConfigParameterValueV1Schema");
class DeviceConfigV1Schema extends pip_services3_commons_node_1.ObjectSchema {
    constructor() {
        super();
        this.withOptionalProperty('id', pip_services3_commons_node_3.TypeCode.String);
        this.withRequiredProperty('org_id', pip_services3_commons_node_3.TypeCode.String);
        this.withOptionalProperty('sent_time', pip_services3_commons_node_3.TypeCode.DateTime);
        this.withOptionalProperty('received_time', pip_services3_commons_node_3.TypeCode.DateTime);
        this.withOptionalProperty('params', new pip_services3_commons_node_2.ArraySchema(new ConfigParameterValueV1Schema_1.ConfigParameterValueV1Schema()));
    }
}
exports.DeviceConfigV1Schema = DeviceConfigV1Schema;
//# sourceMappingURL=DeviceConfigV1Schema.js.map