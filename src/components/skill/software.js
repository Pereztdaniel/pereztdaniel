import React, {Fragment} from 'react';

export default function Software( {title, icon} ){
	return (
	<>
		<div className="box moveUp">
			<img src={icon} alt="" />
			<h3>{title}</h3>
		</div>
	</>
);
}