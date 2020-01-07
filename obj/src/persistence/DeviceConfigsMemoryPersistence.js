"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_data_node_1 = require("pip-services3-data-node");
class DeviceConfigsMemoryPersistence extends pip_services3_data_node_1.IdentifiableMemoryPersistence {
    constructor() {
        super();
        this._maxPageSize = 1000;
    }
}
exports.DeviceConfigsMemoryPersistence = DeviceConfigsMemoryPersistence;
//# sourceMappingURL=DeviceConfigsMemoryPersistence.js.map