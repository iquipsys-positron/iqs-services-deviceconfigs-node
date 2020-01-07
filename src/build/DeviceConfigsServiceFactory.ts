import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';

import { DeviceConfigsMongoDbPersistence } from '../persistence/DeviceConfigsMongoDbPersistence';
import { DeviceConfigsFilePersistence } from '../persistence/DeviceConfigsFilePersistence';
import { DeviceConfigsMemoryPersistence } from '../persistence/DeviceConfigsMemoryPersistence';
import { DeviceConfigsController } from '../logic/DeviceConfigsController';
import { DeviceConfigsHttpServiceV1 } from '../services/version1/DeviceConfigsHttpServiceV1';

export class DeviceConfigsServiceFactory extends Factory {
	public static Descriptor = new Descriptor("iqs-services-deviceconfigs", "factory", "default", "default", "1.0");
	public static MemoryPersistenceDescriptor = new Descriptor("iqs-services-deviceconfigs", "persistence", "memory", "*", "1.0");
	public static FilePersistenceDescriptor = new Descriptor("iqs-services-deviceconfigs", "persistence", "file", "*", "1.0");
	public static MongoDbPersistenceDescriptor = new Descriptor("iqs-services-deviceconfigs", "persistence", "mongodb", "*", "1.0");
	public static ControllerDescriptor = new Descriptor("iqs-services-deviceconfigs", "controller", "default", "*", "1.0");
	public static HttpServiceDescriptor = new Descriptor("iqs-services-deviceconfigs", "service", "http", "*", "1.0");
	
	constructor() {
		super();
		this.registerAsType(DeviceConfigsServiceFactory.MemoryPersistenceDescriptor, DeviceConfigsMemoryPersistence);
		this.registerAsType(DeviceConfigsServiceFactory.FilePersistenceDescriptor, DeviceConfigsFilePersistence);
		this.registerAsType(DeviceConfigsServiceFactory.MongoDbPersistenceDescriptor, DeviceConfigsMongoDbPersistence);
		this.registerAsType(DeviceConfigsServiceFactory.ControllerDescriptor, DeviceConfigsController);
		this.registerAsType(DeviceConfigsServiceFactory.HttpServiceDescriptor, DeviceConfigsHttpServiceV1);
	}
	
}
