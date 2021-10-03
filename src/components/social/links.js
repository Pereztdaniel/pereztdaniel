import React, {Fragment} from 'react';

export default function Links({ icon, link}){
	return (
	<>
		<a href={link} target="_blank">
			<span className={icon}></span>
		</a>
	</>
);
}