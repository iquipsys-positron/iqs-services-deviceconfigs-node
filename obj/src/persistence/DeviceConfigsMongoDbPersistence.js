"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_mongodb_node_1 = require("pip-services3-mongodb-node");
class DeviceConfigsMongoDbPersistence extends pip_services3_mongodb_node_1.IdentifiableMongoDbPersistence {
    constructor() {
        super('device_configs');
        super.ensureIndex({ org_id: 1 });
        this._maxPageSize = 1000;
    }
}
exports.DeviceConfigsMongoDbPersistence = DeviceConfigsMongoDbPersistence;
//# sourceMappingURL=DeviceConfigsMongoDbPersistence.js.map