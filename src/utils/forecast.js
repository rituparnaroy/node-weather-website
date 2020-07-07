const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ac6aaff8f8bdf4f51feeca57b8b07f3d&query=' + lat + ',' + long

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } 
        else if(body.error) {
            callback("Unableto find location", undefined)
        } else {
            const currentData = body.current
            callback(undefined, 'It is currently ' + currentData.temperature + ' degrees out. It feels like ' + currentData.feelslike + ' degrees out. The humidity is ' + currentData.humidity + '% .There is currently ' + currentData.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast