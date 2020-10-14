import React from 'react';
// import '../index.css';
import {useSelector} from 'react-redux'

const FreeDay = () => {
	const item = useSelector(state => state.carts.currentProduct)
	const count = useSelector(state => state.carts.count)
	return (
		<div>
			{/* free 2-4 day */}
			{item.price * count >= 50 ? (
				<div className="economy unlock">
					<div className="circle unlock-circle"></div>
					<div>
						<p>1-2 Day</p>
					</div>
				</div>
			) : (
				<div className="economy lock">
					<div className="circle lock-circle"></div>
					<div>
						<p>1-2 Day</p>
					</div>
				</div>
			 )} 
		</div>
	);
};

export default FreeDay;
