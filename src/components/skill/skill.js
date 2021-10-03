import React, {Fragment} from 'react';
import Software from './software';
import './skill.css';
import {FormattedMessage} from 'react-intl';

export default function Skill(){

	const softwareList = [
	{
		key: 1,
		icon: 'img/html.png',
		title: 'HTML'

	},
	{
		key: 2,
		icon: 'img/css.png',
		title: 'CSS'

	},
	{
		key: 3,
		icon: 'img/js.png',
		title: 'JAVASCRIPT'

	},
	{
		key: 4,
		icon: 'img/wordpress.png',
		title: 'WORDPRESS'

	},
	{
		key: 5,
		icon: 'img/react.png',
		title: 'REACT'

	},
	{
		key: 6,
		icon: 'img/bootstrap.jpg',
		title: 'BOOTSTRAP'

	}]

	return (
	<>
		<div id="skill">
			<div>
				<h2 className="moveUp">
					<FormattedMessage
					id="title.skill" 
					defaultMessage="SKILLS" 
					/>
				</h2>
			</div>
			<div className="container-fluid">
			{
				softwareList.map(({ icon, title, key }) => (
					< Software
					icon={icon}
					key={key}
					title={title}
					 />
					 ))
			}
			</div>
			
			
		</div>
	</>
);
}