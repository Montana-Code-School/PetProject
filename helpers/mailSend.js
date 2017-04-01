
//Mailgun Api
let api_key = 'key-de9859c2619f388eae8368264273ddc6';
let domain = 'sandbox18cb3aad561f4ec7a9b13d0813af6e6f.mailgun.org';
let mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

//Email Details
let data = {
  from: 'Bozeman Pet Project <postmaster@sandbox18cb3aad561f4ec7a9b13d0813af6e6f.mailgun.org>',
  to: 'timwalsh237@gmail.com',
  subject: 'Hello',
  text: 'New Pets Have Been Added! Please visit https://bozeman-pet-project.herokuapp.com/ to view the new additions!'
};

export default function mailSend() {
  //Email Send
  mailgun.messages().send(data, function (error, body) {
    if (error) {
      console.log("I have error!", error);
    }else{
      console.log("Successful Send!", body);
    }
  });
}
