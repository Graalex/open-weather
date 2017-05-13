import React from 'react';
import { WeatherCard } from './WeatherCard/WeatherCard'
import { WeatherList } from './WeatherList/WeatherList';
import weather from './WeatherCard/WeatherCard.mock';

const Main = () => {
	return (
		<main className="p-content">
			<WeatherCard weather={weather}/>
			<section>
				<WeatherList/>
			</section>
		</main>
	);
};

export { Main };
