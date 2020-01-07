let _ = require('lodash');
let async = require('async');
let restify = require('restify');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';

import { DeviceConfigV1 } from '../../../src/data/version1/DeviceConfigV1';
import { DeviceConfigsMemoryPersistence } from '../../../src/persistence/DeviceConfigsMemoryPersistence';
import { DeviceConfigsController } from '../../../src/logic/DeviceConfigsController';
import { DeviceConfigsHttpServiceV1 } from '../../../src/services/version1/DeviceConfigsHttpServiceV1';

let httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

let CONFIG1: DeviceConfigV1 = {
    id: '1',
    org_id: '1',
    params: [
        { id: 1, val: 111 },
        { id: 2, val: 222 },
        { id: 3, val: 333 }
    ]
};

suite('DeviceConfigsHttpServiceV1', ()=> {    
    let service: DeviceConfigsHttpServiceV1;
    let rest: any;

    suiteSetup((done) => {
        let persistence = new DeviceConfigsMemoryPersistence();
        let controller = new DeviceConfigsController();

        service = new DeviceConfigsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('iqs-services-deviceconfigs', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-deviceconfigs', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-deviceconfigs', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        service.open(null, done);
    });
    
    suiteTeardown((done) => {
        service.close(null, done);
    });

    setup(() => {
        let url = 'http://localhost:3000';
        rest = restify.createJsonClient({ url: url, version: '*' });
    });
        
    test('CRUD Operations', (done) => {
        let config1: DeviceConfigV1;

        async.series([
        // Set item
            (callback) => {
                rest.post('/v1/device_configs/set_config',
                    {
                        config: CONFIG1
                    },
                    (err, req, res, config) => {
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
                rest.post('/v1/device_configs/get_config_by_id',
                    {
                        device_id: config1.id
                    },
                    (err, req, res, config) => {
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

                rest.post('/v1/device_configs/set_config',
                    {
                        config: config1
                    },
                    (err, req, res, config) => {
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
                rest.post('/v1/device_configs/delete_config_by_id',
                    {
                        device_id: config1.id
                    },
                    (err, req, res, config) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete config
            (callback) => {
                rest.post('/v1/device_configs/get_config_by_id',
                    {
                        device_id: config1.id
                    },
                    (err, req, res, config) => {
                        assert.isNull(err);

                        //assert.isNull(config || null);

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
                rest.post('/v1/device_configs/send_config',
                    {
                        config: CONFIG1
                    },
                    (err, req, res, config) => {
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
                rest.post('/v1/device_configs/request_config_by_id',
                    {
                        device_id: config1.id
                    },
                    (err, req, res) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Receive the config
            (callback) => {
                config1.params = [ { id: 5, val: 555 } ];

                rest.post('/v1/device_configs/receive_config',
                    {
                        config: config1
                    },
                    (err, req, res, config) => {
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