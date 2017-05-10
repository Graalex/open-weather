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
		expect(weatherCard.find('time.weater-card__time')).toHaveText('Среда, 10 мая 2017 16:00');
	});

	test('render Latitude weather', () => {
		expect(weatherCard.find('div.weater-card__lat')).toHaveText('16.92N');
	});

	test('render Longitude weather', () => {
		expect(weatherCard.find('div.weater-card__lon')).toHaveText('145.77E');
	});

	test('render Temperature weather', () => {
		expect(weatherCard.find('div.weater-card__temp')).toHaveText('13.25 С');
	});

	test('render Pressure weather', () => {
		expect(weatherCard.find('div.weater-card__press')).toHaveText('762 мм.рт.ст.');
	});

	test('render Humidity weather', () => {
		expect(weatherCard.find('div.weater-card__humidity')).toHaveText('83 %');
	});

	test('render Wind weather', () => {
		expect(weatherCard.find('div.weater-card__wind')).toHaveText('5.1 м/с СЗ');
	});

	test('render Clouds weather', () => {
		expect(weatherCard.find('div.weater-card__cloud')).toHaveText('75 %');
	});

	test('render Rain weather', () => {
		expect(weatherCard.find('div.weater-card__rain')).toHaveText('3 мм');
	});

	test('render Snow weather', () => {
		expect(weatherCard.find('div.weater-card__snow')).toHaveText('3 мм');
	});

	test('render Min. Temperature weather', () => {
		expect(weatherCard.find('div.weater-card__temp-min')).toHaveText('9.82 C');
	});

	test('render Max. Temperature weather', () => {
		expect(weatherCard.find('div.weater-card__temp-max')).toHaveText('15.37 C');
	});
});
