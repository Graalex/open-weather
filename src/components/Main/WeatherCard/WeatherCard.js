import React from 'react';

const WeatherCard = props => {
	const weather = props.weather;

	return (
		<section className="weather-card">
			<time className="weather-card__time">{weather.time}</time>
			<div className="weather-card__lat">Широта: {weather.lat}</div>
			<div className="weather-card__lon">Долгота: {weather.lon}</div>
			<div className="weather-card__temp">Температура: {weather.temp} С</div>
			<div className="weather-card__press">Давление: {weather.pressure} мм.рт.ст.</div>
			<div className="weather-card__humidity">Влажность: {weather.humidity} %</div>
			<div className="weather-card__wind">Ветер: {weather.wind}</div>
			<div className="weather-card__clouds">Облачность: {weather.clouds} %</div>
			<div className="weather-card__rain">Дождь: {weather.rain} мм</div>
			<div className="weather-card__snow">Снег: {weather.snow} мм</div>
			<div className="weather-card__temp-max">Макс. температура: {weather.temp_max} С</div>
			<div className="weather-card__temp-min">Мин. температура: {weather.temp_min} С</div>
		</section>
	);
};

export { WeatherCard };
