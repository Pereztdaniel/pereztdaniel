import React, { Fragment} from 'react';
import Links from './links.js';
import Contact from './modal.js'
import './social.css';
import {FormattedMessage} from 'react-intl';


export default function Social(){
	const linkList = [
	{
		key: 1,
		icon: "fab fa-facebook-f",
		link: "https://www.facebook.com/pereztdaniel"
	},
	{
		key: 2,
		icon: "fab fa-instagram",
		link: "https://www.instagram.com/pereztdaniel/"
	},
	{
		key: 3,
		icon: "fab fa-linkedin",
		link: "https://www.linkedin.com/in/pereztdaniel"
	},
	{
		key: 4,
		icon: "fab fa-github",
		link: "https://github.com/Pereztdaniel"
	}]


	return (
	<>
		<section id="contact" className="social">
			<h2>
				<FormattedMessage
					id="follow"
					defaultMessage="Follow Daniel Perez"
				/>
			</h2>
			<div className="link">
				{linkList.map(({ key, icon, link }) => (
					<Links key={key} icon={icon} link={link} />
				))}
			</div>

		<Contact/>
		</section>
	</>
);
}