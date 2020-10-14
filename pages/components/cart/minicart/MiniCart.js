import React from 'react';
import MiniImage from './MiniImage';
import MiniInfo from './MiniInfo';
import ButtonRemove from './ButtonRemove';
import { useSelector} from "react-redux";

const MiniCart = () => {
	const count = useSelector(state => state.carts.count)
	return (
		<>
			{count ? (
				<div className="mini-cart">
					<MiniImage/>
					<MiniInfo/>
					<ButtonRemove />
				</div>
			) : (
				<div className="mini-cart">You have no items in your cart.</div>
			)}
		</>
	);
};

export default MiniCart;
