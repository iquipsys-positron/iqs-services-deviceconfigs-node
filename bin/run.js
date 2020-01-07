let DeviceConfigsProcess = require('../obj/src/container/DeviceConfigsProcess').DeviceConfigsProcess;

try {
    new DeviceConfigsProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}
