const nodemailer = require('nodemailer')
const nodemailerConfig = require('./nodemailerConfig')

const sendEmail = async ({to, subject, html}) =>{

    let transporter = nodemailer.createTransport(nodemailerConfig)

    // since the outer function is async, it will anyways retur a promise, so, we don't need to wait for transporter.sendMail using await, we can directly return it
    // basically we will be awaiting sendEmail, function

    return  transporter.sendMail({
    from: '"Raju" <raju@gmail.com>', // sender address
    to,
    subject,
    html
  });

} 


module.exports = sendEmail