import { DAY_LIGHT, CLOUDINESS_CLOUDY, RAIN_NORMAL, SNOW_SKY } from './WeatherConst.mock';

export default {
	time: 'Среда, 10 мая 2017 16:00',
	lon: {
		type: 'cord',
		label: 'Широта:',
		value: 145.77,
		unit: 'E'
	},
	lat: {
		type: 'cord',
		label: 'Долгота:',
		value: 16.92,
		unit: 'N'
	},
	temperature: {
		type: 'temp',
		label: 'Температура:',
		value: 16,
		unit: '°C'
	},
	pressure: {
		type: 'press',
		label: 'Давление:',
		value: 762,
		unit: 'мм.рт.ст.'
	},
	humidity: {
		type: 'humidity',
		label: 'Влажность:',
		value: 83,
		unit: '%'
	},
	wind: {
		type: 'wind',
		label: 'Ветер:',
		value: 5.1,
		unit: 'м/с СЗ'
	},
	clouds: CLOUDINESS_CLOUDY,
	rain: RAIN_NORMAL,
	snow: SNOW_SKY,
	day: DAY_LIGHT,
	base: 'cmc stations'
};
