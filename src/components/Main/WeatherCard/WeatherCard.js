import React from 'react';
import { MeteoItem } from './MeteoItem/MeteoItem';
import { Time } from './Time/Time';
import { Station } from './Station/Station';
import './WeatherCard.css';

const WeatherCard = props => {
	const { weather } = props;

	return (
		<section className="weather-card">
			<Time time={weather.time}/>
			<MeteoItem type={weather.lat.type} label={weather.lat.label} value={weather.lat.value} unit={weather.lat.unit}/>
			<MeteoItem type={weather.lon.type} label={weather.lon.label} value={weather.lon.value} unit={weather.lon.unit}/>
			<MeteoItem type={weather.temperature.type} label={weather.temperature.label} value={weather.temperature.value} unit={weather.temperature.unit}/>
			<MeteoItem type={weather.pressure.type} label={weather.pressure.label} value={weather.pressure.value} unit={weather.pressure.unit}/>
			<MeteoItem type={weather.wind.type} label={weather.wind.label} value={weather.wind.value} unit={weather.wind.unit}/>
			<MeteoItem type={weather.humidity.type} label={weather.humidity.label} value={weather.humidity.value} unit={weather.humidity.unit}/>
			<Station name={weather.base}/>
		</section>
	);
};

export { WeatherCard };
