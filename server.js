const express = require('express')
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/registration.html')
})
// app.post('/', (req,res) =>{
//     console.log(req.body);

    const transporter = nodemailer.createTransport({
        // service: "gmail",
        // auth: {
        //     user: "arnvgode2611@gmail.com",
        // pass: "Vnam@181"
        // }
        host: "smtp.mailtrap.io",
        port: "587",
        secure: false,
        auth: {
            user: "fb5441e3557a4c",
            pass: "0eea6bba130375"
        }
        
    })

    const mailOptions = {
        from: "fb5441e3557a4c",
        to: 'arnavgode2611@gmail.com',
        subject: "This is a Trial Mail",//`Message from ${req.body.email}: ${req.body.subject}`,
        text: "Hello, From Me !!"
    }
    // sendMail({
    //     from: "arnavi@server.com",
    //     to: "masai@sender.com",
    //     subject: "Message something",
    //     text: "Plaintext version of the message",
    //     html: "<h1>updated</h1>",
    //     path: path.join(__dirname, "../files/name.txt")
    //   })
   
    transporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            console.log(error);
            // res.send('error');
        }
        else{
            console.log('Email sent');
            // res.send('sucessful')
        }
    })
// })
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})