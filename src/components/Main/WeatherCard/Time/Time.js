import React from 'react';
import './Time.css';

const Time = props => {
	const { time } = props;

	return (
		<div className="time">
			<time className="time__value">{time}</time>
		</div>
	);
};

export { Time };
