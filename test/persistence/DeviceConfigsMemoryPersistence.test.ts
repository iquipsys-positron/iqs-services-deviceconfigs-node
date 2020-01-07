import { ConfigParams } from 'pip-services3-commons-node';

import { DeviceConfigsMemoryPersistence } from '../../src/persistence/DeviceConfigsMemoryPersistence';
import { DeviceConfigsPersistenceFixture } from './DeviceConfigsPersistenceFixture';

suite('DeviceConfigsMemoryPersistence', ()=> {
    let persistence: DeviceConfigsMemoryPersistence;
    let fixture: DeviceConfigsPersistenceFixture;
    
    setup((done) => {
        persistence = new DeviceConfigsMemoryPersistence();
        persistence.configure(new ConfigParams());
        
        fixture = new DeviceConfigsPersistenceFixture(persistence);
        
        persistence.open(null, done);
    });
    
    teardown((done) => {
        persistence.close(null, done);
    });
        
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});