import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { WeatherCard } from './WeatherCard';

describe('render WeaterCard component', () => {
	const weather = {
		time: 'Среда, 10 мая 2017 16:00',
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
	const weatherCard = shallow(<WeatherCard weather={weather}/>);

	test('render time weather', () => {
		expect(weatherCard.find('time.weather-card__time')).toHaveText('Среда, 10 мая 2017 16:00');
	});

	test('render Latitude weather', () => {
		expect(weatherCard.find('div.weather-card__lat')).toHaveText('Широта: 16.92N');
	});

	test('render Longitude weather', () => {
		expect(weatherCard.find('div.weather-card__lon')).toHaveText('Долгота: 145.77E');
	});

	test('render Temperature weather', () => {
		expect(weatherCard.find('div.weather-card__temp')).toHaveText('Температура: 13.25 С');
	});

	test('render Pressure weather', () => {
		expect(weatherCard.find('div.weather-card__press')).toHaveText('Давление: 762 мм.рт.ст.');
	});

	test('render Humidity weather', () => {
		expect(weatherCard.find('div.weather-card__humidity')).toHaveText('Влажность: 83 %');
	});

	test('render Wind weather', () => {
		expect(weatherCard.find('div.weather-card__wind')).toHaveText('Ветер: 5.1 м/с СЗ');
	});

	test('render Clouds weather', () => {
		expect(weatherCard.find('div.weather-card__clouds')).toHaveText('Облачность: 75 %');
	});

	test('render Rain weather', () => {
		expect(weatherCard.find('div.weather-card__rain')).toHaveText('Дождь: 3 мм');
	});

	test('render Snow weather', () => {
		expect(weatherCard.find('div.weather-card__snow')).toHaveText('Снег: 3 мм');
	});

	test('render Min. Temperature weather', () => {
		expect(weatherCard.find('div.weather-card__temp-min')).toHaveText('Мин. температура: 9.82 С');
	});

	test('render Max. Temperature weather', () => {
		expect(weatherCard.find('div.weather-card__temp-max')).toHaveText('Макс. температура: 15.37 С');
	});
});
