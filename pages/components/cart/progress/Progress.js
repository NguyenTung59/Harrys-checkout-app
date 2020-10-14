import React from 'react';
import FreeShip from './FreeShip';
import ProgressBar from './ProgressBar';
import Economy from './Economy';
import FreeDay from './FreeDay';

const Progress = _ => {
	return (
		<div className="progress">
			<FreeShip />
			<ProgressBar />
			<div className="progress-circle">
				<Economy />
				<FreeDay />
			</div>
		</div>
	);
};

export default Progress;
