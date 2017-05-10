import React from 'react';
import { shallow } from 'enzyme';
import { Main } from './Main';

it('render Main component without crashed', () => {
	shallow(<Main/>);
});
