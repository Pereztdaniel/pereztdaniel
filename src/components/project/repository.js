import React, {Fragment} from 'react';

export default function Repository({ title, img, link}){

	return (
	<>
		<div>
			<img src={img} />
			<h3>{title}</h3>
			<a href={link} target="_blank">
				Learn More <span className="fas fa-angle-double-right"></span>
			</a>
		</div>
	</>
);
}