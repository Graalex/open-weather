import React from 'react';
import './WeatherIcon.css';

const WeatherIcon = ({day, clouds, rain, snow}) => {
	let classes = ['weather-icon'];
	day === 0 ? classes.push('light') : classes.push('night');

	switch (clouds) {
		case 1:
			classes.push('cloudy');
			break;

		case 2:
			classes.push('mainly');
			break;

		default:
			break;
	}

	switch (rain) {
		case 0:
			classes.push('small');
			break;

		case 1:
			classes.push('normal');
			break;

		case 2:
			classes.push('fail');
			break;

		default:
			break;
	}

	switch (snow) {
		case 0:
			classes.push('sky');
			break;

		case 1:
			classes.push('snow');
			break;

		case 2:
			classes.push('storm');
			break;

		default:
			break;
	}

	return <div className={classes.join(' ')}/>;
};

export { WeatherIcon };
