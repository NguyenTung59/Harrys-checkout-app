import React from 'react';
import {useSelector} from 'react-redux'

const MiniInfo = () => {

	const item = useSelector(state => state.carts.currentProduct)
	const count = useSelector(state => state.carts.count)
	return (
		<div className="mini-info">
			<div className="item-title info">
				<span>{item.name}</span>
			</div>
			<div className="info">
				<span>
					{count > 0 ? <span>{count} x</span> : null}
					<span> $</span>
					{item.price}
				</span>
			</div>
			<div className="info">
				<span>{item.shortDescription}</span>
			</div>
		</div>
	);
};

export default MiniInfo;
