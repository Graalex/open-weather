import React from 'react';

const Station = props => {
	const { name } = props;

	return (
		<div className="station">
			<span className="station__label">Источник:</span>
			<span className="station__name">{name}</span>
		</div>
	);
};

export { Station };
