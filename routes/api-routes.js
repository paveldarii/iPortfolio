const db = require("../models");
const mailgun = require("mailgun-js");
module.exports = function (app) {
  app.post("/api/send_email", (req, res) => {
    //save data in the db
    db.Form.create({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      text: req.body.text,
    }).then((data) => {
      res.json(data);
    });

    //     //sending email
    //     emailContent = `Name: ${req.body.name}
    // Email: ${req.body.email}
    // Text: ${req.body.text}`;
    //     const data = {
    //       from: process.env.mailgun_from_address,
    //       to: "paveldarii@yahoo.com",
    //       subject: req.body.subject,
    //       text: emailContent,
    //     };
    //     console.log(data);
    //     const DOMAIN = process.env.mailgun_domain;
    //     console.log(DOMAIN);
    //     const mg = mailgun({
    //       apiKey: process.env.mailgun_api_key,
    //       domain: DOMAIN,
    //     });

    //     mg.messages().send(data, function (error, body) {
    //       res.json(body);
    //     });
  });
};
