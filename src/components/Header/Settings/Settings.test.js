import React from 'react';
import { shallow } from 'enzyme';
import { Settings } from './Settings';

it('render Settings component without crashed', () => {
	shallow(<Settings/>);
});
