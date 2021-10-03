import React, {Fragment} from 'react';
import Repository from './repository';
import './project.css';
import {FormattedMessage} from 'react-intl';

export default function Project(){

	const repositoryList= [
	{
		key: 1,
		img: 'img/travelblog.jpg',
		title: 'Travel Blog',
		link: '#/'
	},
	{
		key: 2,
		img: 'img/Frontend-mentor.png',
		title: 'Ecommerce LandingPage',
		link: '#/'
	},
	{
		key: 3,
		img: 'img/indexeddb.jpg',
		title: 'CRUD with IndexedDB',
		link: '#/'
	},
	{
		key: 4,
		img: 'img/desarrollador-de-videojuegos.jpg',
		title: 'Desarrollador de Videojuegos',
		link: '#/'
	}]

	return (
	<>
		<div id="courses">
			<h2 className="moveUp">
				<FormattedMessage
						id="title.project" 
						defaultMessage="PROJECTS" 
				/>
			</h2>
			<div className="news-cards moveUp">
				{repositoryList.map(({ img, title, key, link }) => (
					<Repository
						img={img}
						key={key}
						title={title}
						link={link}
					/>
				))}
			</div>
		</div>
	</>
);
}