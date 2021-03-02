import React from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';


export default function Contact() {

  function send(e) {
    e.preventDefault();

    emailjs.sendForm('service_tcs6qwr', 'template_rbkivds', e.target, 'user_lhOmjgMvd3OISDqJkYGUG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={send}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" className="form-control"/>
      <label>Email</label>
      <input type="email" name="user_email" className="form-control"/>
      <label>Message</label>
      <textarea name="message" className="form-control"/><br/>
      <input type="submit" value="Send" className="btn btn-primary btn-lg"/>
      <Link to="/home" className="navbar-brand"><button type="submit" className="btn btn-primary btn-lg" id="btn_signup"> Back </button></Link>
    </form>
  );
}