import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_wXjYUlrNhGydzVgZJ5dHe");




export default function ContactUs({ showForm, newForm, setNewForm}) {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_yn6eunj', 'template_ncqf034', e.target, 'user_wXjYUlrNhGydzVgZJ5dHe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  	  alert("Mensaje enviado");
  }
 return (
	<Form className={showForm} onSubmit={sendEmail}>
		<Button className="custom-btn" onClick={() => setNewForm(!newForm)}><i className="fas fa-window-close"></i></Button>
		
		<Form.Label>
			<FormattedMessage id="user.name" defaultMessage="Name" />
		</Form.Label>
		<input type="text" name="user_name" />
		<Form.Label><FormattedMessage id="user.email" defaultMessage="Email" /></Form.Label>
		<input type="email" name="user_email" placeholder="abcde@example.com"/>
		<Form.Label><FormattedMessage id="user.number" defaultMessage="Phone Number" /></Form.Label>
		<input type="number" name="contact_number" placeholder="+58 12345678"/>
		<Form.Label><FormattedMessage id="user.message" defaultMessage="Message" /></Form.Label>
		<textarea name="message" />
		<Button type="submit" value="Send" className="custom-btn">
			{" "}
			<FormattedMessage id="user.send" defaultMessage="Send" />
		</Button>

	</Form>

);
}