const matrix = require('./numbers').grid
const number = require('./numbers').number
const imu = require("node-sense-hat").Imu
const sense = require("sense-hat-led").sync

const IMU = new imu.IMU()
let  = grid
let temp

function translateToMatrix(temp) {
    const decimal = Math.round(temp / 10)
    const unit = temp % 10
    let pixel_offset = 0
    let index = 0

    for (i = 0;  i < 8; i++) {
        for (j = 0; j < 4; j++) {
            matrix[index] = number[decimal*32+pixel_offset]
            matrix[index+4] = number[unit*32+pixel_offset]
            pixel_offset = pixel_offset + 1
            index = index + 1        
        }
        index = index + 8
    }

    sense.setPixels(matrix)
}

function getTemperature() {
    IMU.getValue((err, data) => {
        if (err !== null) {
            console.error("Could not read sensor data: ", err)
            return
        } else {
            temp = data.temperature.toFixed(0)
            translateToMatrix(temp)
        }        
    })
}

setInterval(getTemperature, 5000)
