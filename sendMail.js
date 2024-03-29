require('dotenv').config()
const express = require("express");
const app = express();
const path = require('path');
const cors = require('cors')
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser");
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'mm449577@gmail.com', // gmail
      pass: process.env.EMAIL_PASS, // pass
     },
});
const sendEmail = async (req,res) =>{
    const {email, name, message} = req.body;
    const html = `<h1>Client Details</h1> <br> <h2>Client Email: ${email}</h2> <br> <h2>Client Name: ${name}</h2> <br> <h3> Message: ${message}`
    let info = await transporter.sendMail({
        from: "mm449577@gmail.com",
        to: "mm449577@gmail.com",
        subject: "Client Details",
        html: html,
    }, (error) =>{
        if(error)
            res.send(error);
        else
            res.redirect('/')
    })

    // console.log(info);
}

app.use(express.static(path.resolve(__dirname,'dist')));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


app.post('/email/send', sendEmail);

app.get('*', (req, res) =>
    res.sendFile(path.resolve('dist','index.html'))
);
app.listen(process.env.PORT,() =>{
    console.log('app is running on '+ process.env.PORT)
})