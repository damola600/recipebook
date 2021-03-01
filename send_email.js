const sMail = require('@sendgrid/mail');
sMail.setApiKey(process.env.SENDGRID_API_KEY);
const text = {
  to: 'adedamolajimoh411@gmail.com',
  from: 'jimohadedamola925@gmail.com',
  subject: 'Welcome',
  text: 'to recipe book',
  html: '<strong>we hope you are able to explore new recipes</strong>',
};
sMail.send(text);