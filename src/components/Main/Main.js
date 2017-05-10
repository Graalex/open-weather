import React from 'react';
import { WeatherCard } from './WeatherCard/WeatherCard'
import { WeatherList } from './WeatherList/WeatherList';

const Main = () => {
	const weather = {
		time: "Среда, 10 мая 2017 16:00",
		lon: '145.77E',
		lat: '16.92N',
		base: 'cmc stations',
		temp: 13.25,
		pressure: 762,
		humidity: 83,
		temp_min: 9.82,
		temp_max: 15.37,
		wind: '5.1 м/с СЗ',
		clouds: 75,
		rain: 3,
		snow: 3
	};

	return (
		<main className="p-content">
			<section className="p-weather">
				<WeatherCard weather={weather}/>
			</section>
			<section>
				<WeatherList/>
			</section>
		</main>
	);
};

export { Main };
