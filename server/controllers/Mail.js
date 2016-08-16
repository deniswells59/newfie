import nodemailer from 'nodemailer';

export default class Mail {

  static sendMail (req, res) {
    const smtpConfig = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'deniswells59@gmail.com',
        pass: process.env.GMAIL_PASSWORD
      }
    };

    const transporter = nodemailer.createTransport(smtpConfig);

    const mailOptions = {
      from: `"Newfie Feedback" <${req.body.email}>`, // sender address
      to: 'deniswells59@gmail.com', // list of receivers
      subject: `${req.body.name}`, // Subject line
      text: `${req.body.message} --- ${req.body.email}`, // plaintext body
    };

    transporter.sendMail(mailOptions, function(error, info){
      if(error) return res.status(400).send(error);

      res.status(200).send(info);
    });
  }
}
