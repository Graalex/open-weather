import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from './Logo';

it('render Logo component without crashed', () => {
	shallow(<Logo/>);
});
