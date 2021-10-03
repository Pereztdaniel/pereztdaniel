import React, {Fragment, useContext} from 'react';
import Navmenu from './navmenu.js' 
import './header.css';
import es from './../../img/spain.png';
import en from './../../img/united-kingdom.png';
import {langContext} from './../../context/langContext';

export default function Header(){

	const useState = React.useState;
	
	const [navMenu, setNavMenu] = useState(true);
	const showBar = navMenu ? "nav-menu" : "nav-menu show-bar";
	const [navLang, setNavLang] = useState(true);
	const showActive = navLang ? " " : "active";

	const navList = [
 	{
		key: 1,
		nav: "nav.skill",
		link: "skill"
	},
	{
		key: 2,
		nav: "nav.project",
		link: "courses"
	},
	{
		key: 3,
		nav: "nav.contact",
		link: "contact"
	}]

	const idioma = useContext(langContext);

	let navbarUbication = window.pageYOffset;
	console.log(navbarUbication);
	const menu = () =>{
		let navbarMove = window.pageYOffset;
		if(navbarUbication >= navbarMove){
			document.getElementById("navbar").style.top = '0';
		} else{
			document.getElementById("navbar").style.top = '-100px';
		}
		navbarUbication = navbarMove;
	}
	
	window.addEventListener('scroll', menu)

	
	return (
	<>

		<nav id="navbar" className="nav-main">

		<button className="menu-btn" onClick={() => setNavMenu(!navMenu)}>
			<span className="fas fa-bars"></span>
		</button>

		<div className="nav-brand">
			<h2>Portfolio</h2>
		</div>

		<ul className={showBar}>

		{
			navList.map(({ key, nav, link}) => (
				<Navmenu 
				key={key}
				nav={nav}
				link={link}/>
				))
		}
		</ul>
		<div className="nav-menu-right">
			<div className="language">
				<button className={showActive} 
					onClick={() => idioma.establecerLenguaje('es-MX')}>
					<img src={es} />
				</button>
				<button className={showActive} 
					onClick={() => idioma.establecerLenguaje('en-US')}>
					<img src={en} />
				</button>
			</div>
		</div>
			
		</nav>
	</>
);
}