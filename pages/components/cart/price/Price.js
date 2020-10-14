import React from 'react';
// import '../index.css';
import {useSelector} from 'react-redux'

const Price = () => {
	const item = useSelector(state => state.carts.currentProduct)
	const count = useSelector(state => state.carts.count)
	return (
		<div className="price">
			<h4 className="subprice">Subtotal</h4>
			<h4 className="subprice">${count * item.price}</h4>
		</div>
	);
};

export default Price;
