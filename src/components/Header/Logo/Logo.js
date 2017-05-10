import React from 'react';
import logo from './logo.svg';
import './Logo.css';

const Logo = () => {
	return (
		<div className="p-logo__container p-logo__container--hidden">
			<img className="p-logo__img" src={logo} alt="Погода от GralexMeteo"/>
		</div>
	);
};

export { Logo };
