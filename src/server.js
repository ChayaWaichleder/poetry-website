const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
app.set('tls' , {minVersion: 'TLSv1.2'});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

app.post('/send-email', async (req, res) => {
  const { to, email, text } = req.body;
  

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'c8485088@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${to}\nEmail: ${email}\nMessage: ${text}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email Sent Successfully');
    }
  });
});

const PORT =  3456;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
