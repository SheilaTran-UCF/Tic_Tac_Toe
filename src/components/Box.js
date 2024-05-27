import React from 'react';

import './Box.css';

export const Box = ({ value, onClick }) => {
	// bring value to line 12
	const style = value === 'X' ? 'box x' : 'box o';

	return (
		//<button className="box">X<button></button>
		//
		<button className={style} onClick={onClick}>
			{value}
		</button>
	);
};
