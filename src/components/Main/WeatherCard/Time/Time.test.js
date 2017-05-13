import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { Time } from './Time';

describe('Time component', () => {
	const time = 'Среда, 10 мая 2017 16:00';
	const wrapper = shallow(<Time time={time}/>);

	it('render date and time in Time component', () => {
		expect(wrapper.find('time.time__value')).toHaveText('Среда, 10 мая 2017 16:00');
	});
});
