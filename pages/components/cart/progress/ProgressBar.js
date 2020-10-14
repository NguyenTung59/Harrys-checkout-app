import React from 'react';
import {useSelector} from 'react-redux'

const ProgressBar = () => {
	const item = useSelector(state => state.carts.currentProduct)
	const count = useSelector(state => state.carts.count)

	const progress = () => {
		// total price < $15
		if (item.price * count < 15) {
			return (
				<div
					style={{
						width: `${25 * ((item.price * count) / 15)}%`,
						background: 'rgb(0, 130, 91)'
					}}
				></div>
			);
		}
		// 50$ > total price >= $15
		else if (
			item.price * count >= 15 &&
			item.price * count < 50
		) {
			return (
				<div
					style={{
						width: `${25 * ((item.price * count) / 15)}%`,
						background: 'rgb(0, 130, 91)'
					}}
				></div>
			);
		}
		// total price > $50
		else {
			return (
				<div
					style={{
						width: `${100}%`,
						background: 'rgb(0, 130, 91)'
					}}
				></div>
			);
		}
	};

	return (
		<>
			<div className="progressbar">{progress()}</div>
		</>
	);
};

export default ProgressBar;
