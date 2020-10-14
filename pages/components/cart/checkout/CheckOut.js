import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

const CheckOut = () => {
	const item = useSelector(state => state.app.currentProduct)

	return (
		<div className="checkout-btn">
			<a href={`/${item._id}/checkout/contact_information`} className="checkout">
				<span>CHECKOUT</span>
			</a>
		</div>
	);
};

export default CheckOut;
