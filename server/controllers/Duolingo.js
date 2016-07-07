import request from 'request';
import http from 'http';

export default class Duolingo {
  static getUser(req, res) {
    const url = `http://www.duolingo.com/users/DenisWells`;

    // request(url, (err, res, body) => {
    //     console.log('res', JSON.parse(body));
    //   })
  }
}
