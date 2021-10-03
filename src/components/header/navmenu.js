import React, {Fragment} from 'react';
import {FormattedMessage} from 'react-intl';
import { Link } from 'react-scroll';

export default function Navmenu( {nav, link}){
	return (
	<>
		<li>
		<Link
			activeClass="active" 
			to={link} 
			spy={true}
			smooth={true} 
			offset={-70}
			duration={500}
		>
			<FormattedMessage id={nav} defaultMessage={nav} />
		</Link>
		</li>
	</>
);
}