import React from 'react';
import { shallow } from 'enzyme';
import { WeatherList } from './WeatherList';

it('renders WeatherList component without crashing', () => {
	shallow(<WeatherList/>);
});
