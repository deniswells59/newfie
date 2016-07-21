import request from 'request';
var airbnb = require('airapi');

export default class Airbnb {

  static getResults(req, res) {
    airbnb.search({
     location: req.body.location,
     page: req.body.page
   }).then(results => {
      let listings = results.results_json.search_results;
      listings = listings.map(listing => {
        let list = listing.listing;
        return {
          bnbId: list.id,
          bedrooms: list.bedrooms,
          name: list.name,
          pictureUrl: list.picture_url,
          address: list.public_address,
          owner: list.primary_host.first_name
        }
      });

      if(req.body.name) {
        listings = listings.filter(list => {
          return list.owner === req.body.name;
        });
      }

      res.send(listings);
    })
    .catch(err => {
      res.status(400).send(err);
    })
  }
}
