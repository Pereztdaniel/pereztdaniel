import React, {Fragment} from 'react'
import './footer.css';
import {FormattedMessage} from 'react-intl';

export default function Footer(){
	return (
	<>
		<footer>
		<h3>
			<FormattedMessage
			id="title.footer" 
			defaultMessage="Developed and Design by Daniel Pérez, &copy Copyright" 
			/>
		</h3>
		</footer>
	</>
);
		
	
}