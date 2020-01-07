let DeviceConfigsLambdaFunction = require('../obj/src/container/DeviceConfigsLambdaFunction').DeviceConfigsLambdaFunction;

module.exports = new DeviceConfigsLambdaFunction().getHandler();