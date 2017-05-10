import React from 'react';
import { Nav } from './Nav/Nav';
import { Logo } from './Logo/Logo';
import { Settings } from './Settings/Settings';
import { Location } from './Location/Location';
import './Header.css';

const Header = () => {
	const locate = {type: 'city', data: 'Mariupol'};

	return (
		<header className="p-header">
			<Nav/>
			<Logo/>
			<h1 className="p-header__title">Прогноз погоды от GralexMeteo</h1>
			<Settings/>
			<Location locate={locate}/>
		</header>
	);
};

export { Header };
