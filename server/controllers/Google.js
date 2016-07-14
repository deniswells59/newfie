import request from 'request';

const url = `https://maps.googleapis.com/maps/api/geocode/json?`;

export default class Google {

  static getCity(req, res) {
    const lat = req.body.lat;
    const lng = req.body.lng;
    let city = '';
    request(`${url}latlng=${lat},${lng}&key=${process.env.GOOGLE_GEOCODE}`,
      (err, response, body) => {
        if(err) return res.send(err);
        body = JSON.parse(body);
        if(!body.results.length) return res.send('Cant find a city there...');
        body = body.results[0].address_components;
        body.forEach(address => {
          switch(address.types[0]) {
            case 'sublocality':
            case 'locality':
            case 'administrative_area_level_1':
            case 'country':
              if (city) {
                city += `, ${address.long_name}`;
              } else {
                city += address.long_name;
              }
          }
        })
        res.send(city);
      });
  }
}
