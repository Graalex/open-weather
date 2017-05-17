import React from 'react';
import './MeteoItem.css';

const MeteoItem = props => {
	const { type, label, value, unit } = props;

	return (
		<div className="meteo-item" data-type={type}>
			<span className="meteo-item__label">{label}</span>
			<span className="meteo-item__value">{value}</span>
			<span className="meteo-item__unit">{unit}</span>
		</div>
	);
};

export { MeteoItem };
