const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoicml0dXBhcm5hbm9kZSIsImEiOiJja2JyczAwc2oxZGdsMnhwbnQ4eDF4c2F1In0.PFvQNdQjFMVbLIZmgP4Zjg'

    request({url, json: true}, (error, {body}) => {
            if(error) {
                callback('Unable to connect to location service', undefined)
            } 
            else if(body.features.length === 0) {
                callback('Unable to find location', undefined)
            } else {
                var lat = body.features[0].center[1]
                var long = body.features[0].center[0]
                var location = body.query[0]
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                })
            }
        })
}

module.exports = geocode