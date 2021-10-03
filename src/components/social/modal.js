import React, {useState, Fragment} from 'react';
import ContactUs from './contact.js';
import { Button } from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';

export default function Contact(){
	
 	const [newForm, setNewForm] = useState(true);
	const showForm = newForm ? "new-form" : "new-form show-form";

	return (
	<>
		<Button onClick={() => setNewForm(!newForm)}>
			<FormattedMessage id="contact.me" defaultMessage="Contact me" />{" "}
			<span className="fa fa-angle-double-right"></span>
		</Button>

		<ContactUs showForm={showForm} newForm={newForm} setNewForm={setNewForm}/>
	</>
);
}