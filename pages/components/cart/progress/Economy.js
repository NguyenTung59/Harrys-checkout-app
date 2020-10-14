import React from 'react';
// import '../index.css';
import {useSelector, useDispatch} from 'react-redux'
import {addShipping} from '../../../../redux/actions/checkouts'

const Economy = () => {
	const dispatch = useDispatch()
	const item = useSelector(state => state.carts.currentProduct)
	const count = useSelector(state => state.carts.count)

	const openShip = () => {
		dispatch(addShipping('economy'))
	}
	return (
		<div>
			{/* progress  */}

			{item.price * count >= 15 ? (
				<div className="economy unlock">
					<div className="circle unlock-circle"></div>
					<div>
						<p>Economy</p>
						{openShip()}
					</div>
				</div>
			) : (
				<div className="economy lock">
					<div className="circle lock-circle"></div>
					<div>
						<p>Economy</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Economy;
