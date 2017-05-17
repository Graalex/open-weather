import React from 'react';
import { MeteoItem } from './MeteoItem/MeteoItem';
import { Time } from './Time/Time';
import { Station } from './Station/Station';

const WeatherCard = props => {
	const { weather } = props;

	return (
		<section className="weather-card">
			<Time time={weather.time}/>
			<MeteoItem label={weather.lat.label} value={weather.lat.value} unit={weather.lat.unit}/>
			<MeteoItem label={weather.lon.label} value={weather.lon.value} unit={weather.lon.unit}/>
			<MeteoItem icon={weather.temperature.icon} label={weather.temperature.label} value={weather.temperature.value} unit={weather.temperature.unit}/>
			<MeteoItem icon={weather.pressure.icon} label={weather.pressure.label} value={weather.pressure.value} unit={weather.pressure.unit}/>
			<MeteoItem icon={weather.wind.icon} label={weather.wind.label} value={weather.wind.value} unit={weather.wind.unit}/>
			<MeteoItem icon={weather.humidity.icon} label={weather.humidity.label} value={weather.humidity.value} unit={weather.humidity.unit}/>
			<Station name={weather.base}/>
		</section>
	);
};

export { WeatherCard };
