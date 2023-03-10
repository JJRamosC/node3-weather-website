const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?types=address&access_token=pk.eyJ1IjoiampyYW0iLCJhIjoiY2xjYjE4ZXZ0MjBseDNwbW91MXJnOGt3diJ9.RtNWfENbkGvRxsxNqqPOkg'

    request({url: url, json:true}, (error, response) => {
        if (error){
            callback('Unable to connet to location services', undefined)
        } else if (response.body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
