var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abhishek.raut1707@gmail.com',
    pass:'supernova177'
  }
});

var mailOptions = {
  from: 'abhishek.raut1707@gmail.com',
  to: 'er.pal.sandeep@gmail.com',
  subject: 'Sending Email via Node.js Application',
  text: 'Hi, Hope everthing is fine'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});