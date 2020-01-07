import { ConfigParams } from 'pip-services3-commons-node';

import { DeviceConfigsFilePersistence } from '../../src/persistence/DeviceConfigsFilePersistence';
import { DeviceConfigsPersistenceFixture } from './DeviceConfigsPersistenceFixture';

suite('DeviceConfigsFilePersistence', ()=> {
    let persistence: DeviceConfigsFilePersistence;
    let fixture: DeviceConfigsPersistenceFixture;
    
    setup((done) => {
        persistence = new DeviceConfigsFilePersistence('./data/configs.test.json');

        fixture = new DeviceConfigsPersistenceFixture(persistence);

        persistence.open(null, (err) => {
            persistence.clear(null, done);
        });
    });
    
    teardown((done) => {
        persistence.close(null, done);
    });
        
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});