import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';

it('render Nav component without crashed', () => {
	shallow(<Nav/>);
});
