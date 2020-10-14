import React from 'react';
// import '../index.css';
import {useSelector, useDispatch} from 'react-redux';
import {incrementCount} from '../../../redux/actions/app'

const ButtonRemove = () => {
	const dispatch = useDispatch();
	const currentCount = useSelector(state => state.carts.count)

	const removeProduct = () => {
		dispatch(incrementCount(currentCount - 1));
		console.log(currentCount)
	}

	return (
		<div className="buttonRemove">
			<button className="btnRemove" onClick={removeProduct} />
		</div>
	);
};

export default ButtonRemove;
