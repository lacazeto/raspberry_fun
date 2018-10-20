const imu = require("node-sense-hat").Imu
var sense = require("sense-hat-led").sync;


const IMU = new imu.IMU()
let temp

function getTemperature() {
    IMU.getValue((err, data) => {
        if (err !== null) {
            console.error("Could not read sensor data: ", err)
            return
        } else {
            temp = data.temperature.toFixed(0)
            sense.showMessage(temp, 0.2, [255, 0, 0])
        }        
    })
}

IMU.getValue((err, data) => {
    sense.showLetter(floor(data.temperature))
})

setInterval(getTemperature, 5000)
