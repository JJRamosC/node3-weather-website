const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b24b3b7abad505e6f61fb7d6d87bb856&query='+ latitude + ',' + longitude

    request({url: url, json:true}, (error, response) => {
        if (error){
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + '% chance of rain. The humidity is ' + response.body.current.humidity + "%")
        }
    })
}

module.exports = forecast