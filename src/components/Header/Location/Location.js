import React from 'react';
import './Location.css';

const Location = props => {
	const type = props.locate.type;
	const data  = props.locate.data;
	let text = null;

	if (type === 'city') {
		text = `${data}`;
	}
	else if (type === 'pos') {
		text = `Lat: ${data.lat} Long: ${data.lon}`;
	}

	return (
		<section className="p-location">
			<div className="p-location__display">{text}</div>
		</section>
	);
};

export { Location };
