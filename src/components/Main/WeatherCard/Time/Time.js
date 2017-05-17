import React from 'react';

const Time = props => {
	const { time } = props;

	return (
		<div className="time">
			<time className="time__value">{time}</time>
		</div>
	);
};

export { Time };
