import request from 'request';
import http from 'http';

export default class Duolingo {
  static getUser(req, res) {
    const url = `http://www.duolingo.com/users/DenisWells`;

    const options = {
      host: 'proxy',
      port: '8080',
      path: url,
      headers: {
        Host: 'www.duolingo.com'
      }
    }

    http.get(options, function(resp) {
      res.send(resp);
    })
  }
}
