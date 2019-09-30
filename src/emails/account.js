const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_APY_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "raushannn187@gmail.com",
    subject: "Thanks for joining our Team!!",
    text: `Welcome to our company,${name}. Let works with us.`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "raushannn187@gmail.com",
    subject: "sorry to see you go!!",
    text: `Goodbye,${name}. I hope to see you back sometime soon.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
