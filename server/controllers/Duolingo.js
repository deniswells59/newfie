import request from 'request';
import http from 'http';

const url = `http://www.duolingo.com/users/`;

export default class Duolingo {

  static getUser(req, res) {
    request(`${url}${req.body.duoUser}`, (err, response, body) => {
      if(err) return res.status(400).send({error: 'Duolingo not responding.'})
      body = JSON.parse(body);
      res.send({
        username: body.username,
        fullname: body.fullname,
        avatar: body.avatar
      });
    });
  }

  static validateLangs(req, res) {
    let knownLangs = {};
    request(`${url}${req.body.duoUser}`, (err, response, body) => {
      if(err) return res.status(400).send({error: 'Duolingo not responding.'})
      const languages = JSON.parse(body).languages;
      languages.forEach(lang => {
        if (lang.learning) {
          knownLangs[lang.language_string] = lang.level;
        }
      });
      res.send(knownLangs);
    })
  }
}
