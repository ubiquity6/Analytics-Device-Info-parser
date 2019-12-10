const androidDevices = require('./data/android-data.json');

const results = {
  brand: {},
  name: {},
  hardwareModel: {},
  os: {},
  osVersion: {},
  language: {},
}

const incrementOrCreateKey = (key, value) => {
  if (results[key][value]) {
    results[key][value]++
  } else {
    results[key][value] = 1;
  }
}

const sortByValue = (object) => Object.entries(object)
  .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
  .reduce((acc,[k,v]) => {
    acc[k]=v;
    return acc
  }, {});

androidDevices.forEach(device => {
  incrementOrCreateKey('brand', device.device.mobile_brand_name);
  incrementOrCreateKey('name', device.device.mobile_model_name);
  incrementOrCreateKey('hardwareModel', device.device.mobile_os_hardware_model);
  incrementOrCreateKey('os', device.device.operating_system);
  incrementOrCreateKey('osVersion', device.device.operating_system_version);
  incrementOrCreateKey('language', device.device.language);
});

// TODO: Map android device name to the phone model
const orderedResults = {};
orderedResults.brand = sortByValue(results.brand);
orderedResults.name = sortByValue(results.name);
orderedResults.hardwareModel = sortByValue(results.hardwareModel);
orderedResults.os = sortByValue(results.os);
orderedResults.osVersion = sortByValue(results.osVersion);
orderedResults.language = sortByValue(results.language);

console.log(JSON.stringify(orderedResults));
