"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const DeviceConfigsMongoDbPersistence_1 = require("../persistence/DeviceConfigsMongoDbPersistence");
const DeviceConfigsFilePersistence_1 = require("../persistence/DeviceConfigsFilePersistence");
const DeviceConfigsMemoryPersistence_1 = require("../persistence/DeviceConfigsMemoryPersistence");
const DeviceConfigsController_1 = require("../logic/DeviceConfigsController");
const DeviceConfigsHttpServiceV1_1 = require("../services/version1/DeviceConfigsHttpServiceV1");
class DeviceConfigsServiceFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(DeviceConfigsServiceFactory.MemoryPersistenceDescriptor, DeviceConfigsMemoryPersistence_1.DeviceConfigsMemoryPersistence);
        this.registerAsType(DeviceConfigsServiceFactory.FilePersistenceDescriptor, DeviceConfigsFilePersistence_1.DeviceConfigsFilePersistence);
        this.registerAsType(DeviceConfigsServiceFactory.MongoDbPersistenceDescriptor, DeviceConfigsMongoDbPersistence_1.DeviceConfigsMongoDbPersistence);
        this.registerAsType(DeviceConfigsServiceFactory.ControllerDescriptor, DeviceConfigsController_1.DeviceConfigsController);
        this.registerAsType(DeviceConfigsServiceFactory.HttpServiceDescriptor, DeviceConfigsHttpServiceV1_1.DeviceConfigsHttpServiceV1);
    }
}
exports.DeviceConfigsServiceFactory = DeviceConfigsServiceFactory;
DeviceConfigsServiceFactory.Descriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-deviceconfigs", "factory", "default", "default", "1.0");
DeviceConfigsServiceFactory.MemoryPersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-deviceconfigs", "persistence", "memory", "*", "1.0");
DeviceConfigsServiceFactory.FilePersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-deviceconfigs", "persistence", "file", "*", "1.0");
DeviceConfigsServiceFactory.MongoDbPersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-deviceconfigs", "persistence", "mongodb", "*", "1.0");
DeviceConfigsServiceFactory.ControllerDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-deviceconfigs", "controller", "default", "*", "1.0");
DeviceConfigsServiceFactory.HttpServiceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-deviceconfigs", "service", "http", "*", "1.0");
//# sourceMappingURL=DeviceConfigsServiceFactory.js.map