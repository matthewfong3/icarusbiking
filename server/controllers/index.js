const nodemailer = require('nodemailer');

const mainPage = (req, res) => {
  res.render('index');
};

const surveyPage = (req, res) => {
  res.render('survey');
};

const completePage = (req, res) => {
  res.render('complete');
};

const sendComments = (req, res) => {
  /*
  Configure our SMTP(Simple Mail Transfer Protocol) Server details
  SMTP is mail server which is responsible for sending / receiving email
  */
  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'icarusbiking@gmail.com',
      pass: 'Moneyteam2020'
    }
  });
  
  let mailOptions = {
    to: "support@icarusbiking.com",
    subject: 'Icarbus Biking Comments',
    html: "User's Email: " + req.body.userEmail + "<br/> User's Comments: " + req.body.comments 
  }
  
  smtpTransport.sendMail(mailOptions, (err, res) => {
    if(err){
      console.log(err);
      return res.end('error');
    } 
      
    console.log('Message sent');
  });
  
  return res.json({ redirect:'/' });
};

const sendReview = (req, res) => {
  /*
  Configure our SMTP(Simple Mail Transfer Protocol) Server details
  SMTP is mail server which is responsible for sending / receiving email
  */
  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'icarusbiking@gmail.com',
      pass: 'Moneyteam2020'
    }
  });
  
  // send email 
  let mailOptions = {
    to: "support@icarusbiking.com",
    subject: 'Icarbus Biking Product Review',
    html: 'Product Review <br/> Product: ' + req.body.product + '<br/> Date of Purchase: ' + req.body.date + '<br/> Satisfied/Unsatisfied: ' + req.body.satisfied + '<br/> Have they tested the product for at least 7 days: ' + req.body.tested7days +  '<br/> Contact Info: <br/> First Name: ' + req.body.firstName + '<br/> Last Name: ' + req.body.lastName + '<br/> Email: ' + req.body.email + '<br/> Amazon Order Number: ' + req.body.orderNum + '<br/> Address: ' + req.body.address1 + '<br/> Address Cont.: ' + req.body.address2 + '<br/> City: ' + req.body.city + '<br/> State/Province: ' + req.body.sp + '<br/> Postal/Zip code: ' + req.body.postal + '<br/> Product Feedback: ' + req.body.feedback + '<br/> Prize Selection: ' + req.body.prize
  };
  
  smtpTransport.sendMail(mailOptions, (err, res) => {
    if(err){
      console.log(err);
      return res.end('error');
    } 
      
    console.log('Message sent');
  });
  
  return res.json({ redirect:'/complete' });
};

module.exports.mainPage = mainPage;
module.exports.surveyPage = surveyPage;
module.exports.sendReview = sendReview;
module.exports.completePage = completePage;
module.exports.sendComments = sendComments;