import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { MeteoItem } from './MeteoItem';

describe('MeteoItem component test', () => {
	const [type, value, unit] = ['press', 766, 'мм.рт.ст'];
	const wrapper = shallow(<MeteoItem type={type} value={value} unit={unit}/>);

	it('render value element to MeteoItem component', () => {
		expect(wrapper.find('span.meteo-item__value')).toHaveText('766');
	});

	it('render unit element to MeteoItem component', () => {
		expect(wrapper.find('span.meteo-item__unit')).toHaveText('мм.рт.ст');
	});
});
