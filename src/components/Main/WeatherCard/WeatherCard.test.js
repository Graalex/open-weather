import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { WeatherCard } from './WeatherCard';
import weather from './WeatherCard.mock';

it('render WeaterCard component without crash', () => {
	shallow(<WeatherCard wheater={weather}/>);
});
