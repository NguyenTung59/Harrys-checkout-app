import React, {useState} from 'react';
// import '../home.css';
import BoxCart from '../../cart/BoxCart';
import { useSelector, useDispatch } from "react-redux";
import {
  openCart, closeCart
} from "../../../redux/actions/app";

const MenuCart = ({
	currentProduct,
	count,
	removeProduct
	,currentImage
}) => {

	const dispatch = useDispatch()
	const isOpen = useSelector(state => state.carts.isOpen)

	//handle open cart
	const [isClick, setIsClick] = useState(isOpen)
	const handleOpenCart = () => {
		setIsClick(!isClick)
		dispatch(openCart(isClick))
	}

	return (
		<div className="cart">
			<div  style={cartStyles} onClick={handleOpenCart}>
				Cart
				{count > 0 ? (
					<div className="cart-icon">
						<span className="cart-count">{count}</span>
					</div>
				) : null}
			</div>
			{isOpen ? (
				<BoxCart
					currentImage={currentImage}
					currentProduct={currentProduct}
					count={count}
					removeProduct={removeProduct}
				/>
			) : null}
		</div>
	);
};

const cartStyles = {
	fontWeight: '700',
	height: '100%',
	fontSize: '14px',
	letterSpacing: '1.2px',
	color: '#666666',
	textTransform: 'uppercase'
};

export default MenuCart;
