let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';

import { DeviceConfigV1 } from '../../src/data/version1/DeviceConfigV1';
import { DeviceConfigsMemoryPersistence } from '../../src/persistence/DeviceConfigsMemoryPersistence';
import { DeviceConfigsController } from '../../src/logic/DeviceConfigsController';

let CONFIG1: DeviceConfigV1 = {
    id: '1',
    org_id: '1',
    params: [
        { id: 1, val: 111 },
        { id: 2, val: 222 },
        { id: 3, val: 333 }
    ]
};

suite('DeviceConfigsController', ()=> {    
    let persistence: DeviceConfigsMemoryPersistence;
    let controller: DeviceConfigsController;

    suiteSetup(() => {
        persistence = new DeviceConfigsMemoryPersistence();
        controller = new DeviceConfigsController();

        let references: References = References.fromTuples(
            new Descriptor('iqs-services-deviceconfigs', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-deviceconfigs', 'controller', 'default', 'default', '1.0'), controller
        );
        controller.setReferences(references);
    });
    
    setup((done) => {
        persistence.clear(null, done);
    });
    
    test('CRUD Operations', (done) => {
        let config1: DeviceConfigV1;

        async.series([
        // Set item
            (callback) => {
                controller.setConfig(
                    null, CONFIG1, (err, config) => {
                        assert.isNull(err);

                        assert.isObject(config);
                        assert.equal(config.id, CONFIG1.id);
                        assert.equal(config.org_id, CONFIG1.org_id);
                        assert.lengthOf(config.params, 3);

                        config1 = config;

                        callback(err);
                    }
                );
            },
        // Get config by id
            (callback) => {
                controller.getConfigById(
                    null,
                    config1.id,
                    (err, config) => {
                        assert.isNull(err);

                        assert.isObject(config);
                        assert.equal(config.id, config1.id);
                        assert.equal(config.org_id, config1.org_id);
                        assert.lengthOf(config.params, config1.params.length);

                        config1 = config;

                        callback();
                    }
                );
            },
        // Update the config
            (callback) => {
                config1.params = [ { id: 5, val: 555 } ];

                controller.setConfig(
                    null,
                    config1,
                    (err, config) => {
                        assert.isNull(err);

                        assert.isObject(config);
                        assert.equal(config.id, config1.id);
                        assert.equal(config.org_id, config1.org_id);
                        assert.lengthOf(config.params, config1.params.length);

                        callback();
                    }
                );
            },
        // Delete config
            (callback) => {
                controller.deleteConfigById(
                    null,
                    config1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete config
            (callback) => {
                controller.getConfigById(
                    null,
                    config1.id,
                    (err, config) => {
                        assert.isNull(err);

                        assert.isNull(config || null);

                        callback();
                    }
                );
            }
        ], done);
    });

    test('Send and Receive Configs', (done) => {
        let config1: DeviceConfigV1;

        async.series([
        // Send config
            (callback) => {
                controller.sendConfig(
                    null, CONFIG1, (err, config) => {
                        assert.isNull(err);

                        assert.isObject(config);
                        assert.equal(config.id, CONFIG1.id);
                        assert.equal(config.org_id, CONFIG1.org_id);
                        assert.lengthOf(config.params, 3);
                        assert.isNotNull(config.sent_time);
                        assert.isNull(config.received_time || null);

                        config1 = config;

                        callback(err);
                    }
                );
            },
        // Request config by id
            (callback) => {
                controller.requestConfigById(
                    null,
                    config1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Receive the config
            (callback) => {
                config1.params = [ { id: 5, val: 555 } ];

                controller.receiveConfig(
                    null,
                    config1,
                    (err, config) => {
                        assert.isNull(err);

                        assert.isObject(config);
                        assert.equal(config.id, config1.id);
                        assert.equal(config.org_id, config1.org_id);
                        assert.lengthOf(config.params, config1.params.length);

                        callback();
                    }
                );
            }
        ], done);
    });


});