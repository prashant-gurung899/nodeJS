const log=console.log;

const { info } = require('console');
let nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'nodejsdummy96',
        pass:'sample@98066'
    }
})
let mailOptions={
    from:'nodejsdummy96@gmail.com',
   // to:'nodejsdummy96@gmail.com,prasantgrg777@gmail.com',//multiple recievers
    to:'nodejsdummy96@gmail.com',
    subject:'Registration Successful',
    //text:'Congratulations,successfully registered with us,All the best'//passing some text

    //passing html
    html:`<h3>
          <span style="color:pink">Congratulations</span>
          <span style="color:blue">successfully registered with us!All the best</span>
          </h3>`
}
transporter.sendMail(mailOptions,(err,info)=>{
    if(err){log(err)
    log('Email cannot be sent')}
    else
    {
        log('Email sent successfully')
    }
})



//log(nodemailer)

