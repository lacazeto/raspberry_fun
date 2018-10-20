const imu = require("node-sense-hat").Imu
var sense = require("sense-hat-led").sync;


const IMU = new imu.IMU()

IMU.getValue((err, data) => {
  if (err !== null) {
    console.error("Could not read sensor data: ", err)
    return
  }

  sense.showLetter(data.temperature.toFixed(0))
})