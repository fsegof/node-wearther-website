const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
      qs: {
        lon: longitude,
        lat: latitude
      },
      headers: {
        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
        'x-rapidapi-key': 'e32494eb35msh04bbea10ae9dcf2p1a0de8jsnb3ac414b1fe0',
        useQueryString: true
      },
      json:true
    };

    request(options, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
          console.log(body.data[0].weather);
            callback(undefined, body.data[0].city_name + ' It is currently ' + body.data[0].temp + ' degress out and ' + body.data[0].weather.description + ' . There is a ' + body.data[0].snow + '% chance of snow.')
        }
    })
}

module.exports = forecast
