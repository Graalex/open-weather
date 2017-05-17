import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { Station } from './Station';

describe('Station component', () => {
	const name = 'cmc stations';

	it('render Station component without crashed', () => {
		const station = shallow(<Station name={name}/>);

		expect(station.find('span.station__label')).toHaveText('Источник:');
		expect(station.find('span.station__name')).toHaveText('cmc stations');
	});
});
