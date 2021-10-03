import React, {Fragment} from 'react'
import './showcase.css';
import './animation.css';
import Pdf from '../../pdf/curriculum vitae daniel perez.pdf';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

export default function Showcase() {

	return (
	<>
		<header className="showcase">
			<div className="title">
				<div className="animated-title">
					<div className="text-top">
						<div>
							<span>
								<FormattedMessage
								id="app.welcome" 
								defaultMessage="Hola, Soy Daniel Pérez" 
								/>
							</span>
							<span>
								<FormattedMessage
								id="app.development" 
								defaultMessage="Desarrollador Front-End" 
								/>
							</span>
						</div>
					</div>
					<div className="text-bottom">
						<div>
							<FormattedMessage
								id="app.grade" 
								defaultMessage="Ingeniero Mecatronico" 
							/>
							<Router>
							<Link
								to={Pdf}
								className="custom-btn btn"
								target="_blank"
							>
								{" "}
								<FormattedMessage
								id="app.download" 
								defaultMessage="DESCARGAR CV" 
								/>
								
							</Link>
							</Router>
						</div>
					</div>
				</div>
			</div>
		</header>
	</>
);
}