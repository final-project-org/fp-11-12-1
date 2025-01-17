const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const {OAuth2} = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'

require("dotenv").config();

const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS
} = process.env

const oauth2Client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    OAUTH_PLAYGROUND
)

// send mail
const sendEmail = (type, to, content, title, from = SENDER_EMAIL_ADDRESS) => {
    oauth2Client.setCredentials({
        refresh_token: MAILING_SERVICE_REFRESH_TOKEN
    })

    const accessToken = oauth2Client.getAccessToken()
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: SENDER_EMAIL_ADDRESS,
            clientId: MAILING_SERVICE_CLIENT_ID,
            clientSecret: MAILING_SERVICE_CLIENT_SECRET,
            refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
            accessToken
        }
    })

    let mailOptions; 
    if(type === "verify"){
        mailOptions = {
            from: from,
            to: to,
            subject: "HELPY_APP",
            html: `
                <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
                <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to our Helpy.</h2>
                <p>Congratulations! You're almost set to start using Helpy.
                    Just click the button below to validate your email address.
                </p>
                
                <a href=${content} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${title}</a>
            
                <p>If the button doesn't work for any reason, you can also click on the link below:</p>
            
                <div>${content}</div>
                </div>
            `
        }         
    }
    if(type === "contact"){
        mailOptions = {
            from: from,
            to: to,
            subject: "HELPY_APP",
            html: `
                <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
                <h2 style="text-align: center; text-transform: uppercase;color: teal;">our Helpy.</h2>
                <p> Title: 
            
                ${title}
                </p>
                
                <div>
                <p> You can contact with me at: 
            
                ${from}
                </p>
                </div>
            
                <div>${content}</div>
                </div>
            `
        }         
    }
    if(type === "contactToAdmin"){
        mailOptions = {
            from: from,
            to: to,
            subject: "HELPY_APP",
            html: `
                <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
                <h2 style="text-align: center; text-transform: uppercase;color: teal;">our Helpy.</h2>
                <p> Sender Name: 
            
                ${title}
                </p>
                
                <div>
                <p> Sender Email Address: </p>
                <p> 
                ${from}
                </p>
                </div>
                <p> 
                Message From Sender :
                </p>
                <div>${content}</div>
                </div>
            `
        }         
    }
    
    // console.log(mailOptions)
    smtpTransport.sendMail(mailOptions, (err, infor) => {
        // console.log("err", err)
        if(err) return err;
        return infor
    })
}

module.exports = sendEmail