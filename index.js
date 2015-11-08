var sensorLib = require('node-dht-sensor');
var Service, Characteristic;

module.exports = function(homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;

  homebridge.registerAccessory("homebridge-dht", "DHT", DHTAccessory);
}

function DHTAccessory(log, config) {
  this.log = log;
  this.name = config["name"];
  this.type = config["type"];
  this.pin = config["pin"];
  this.sensor = sensorLib.initialize(type, pin);

  this.service = new Service.TemperatureSensor(this.name);

  this.service
    .getCharacteristic(Characteristic.CurrentTemperature)
    .on('get', this.getState.bind(this));
}

DHTAccessory.prototype.getState = function(callback) {
  var readout = this.sensor.read();
  callback(null, readout.temperature.toFixed(2));
}

DHTAccessory.prototype.getServices = function() {
  return [this.service];
}
