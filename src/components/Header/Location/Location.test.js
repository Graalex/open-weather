import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { Location } from './Location';

it('render Location component without crashed', () => {
	const loc = {type: 'city', data: 'Mariupol'};
	shallow(<Location locate={loc}/>);
});

it('render Location component if change locate attribute', () => {
	let loc = {type: 'city', data: 'Mariupol'};
	const location = shallow(<Location locate={loc}/>);
	expect(location.find('.p-location__display')).toHaveText('Mariupol');

	loc = {type: 'pos', data: {lat: 47.358, lon: 38.369}};
	location.setProps({locate: loc});
	expect(location.find('.p-location__display')).toHaveText('Lat: 47.358 Long: 38.369');
});


