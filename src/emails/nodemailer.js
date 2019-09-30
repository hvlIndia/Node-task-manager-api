const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'my.smtp.host',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'testhvl3@gmail.com', // generated ethereal user
    pass: "Abcd@123" // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false
  }
});

// send mail with defined transport object
const welcomeMail = (email, name) => {
  transporter.sendMail({
    from: '"hvl 👻" <testhvl3@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: `Welcome to our company,${name}. Let works with us.`, // plain text body
    html: "<b>Hello world?</b>" // html body
  });
};

transporter.sendMail(welcomeMail, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

module.exports = {
  welcomeMail
};
