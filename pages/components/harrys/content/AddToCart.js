import React, {useState} from 'react';
// import 'antd/dist/antd.css';
// import '../index.css';
import { Button, Row } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import {
  openCart, decrementCount, addToCart
} from "../../../redux/actions/app";

const AddToCart = () => {
	const currentProduct = useSelector(state => state.app.currentProduct)
	const currentCount = useSelector(state => state.carts.count)
	const [count, setCount] = useState(1)
	const dispatch = useDispatch()

	// handle Add
	const handleAddToCart = () => {
		dispatch(openCart(true))
		dispatch(decrementCount(currentCount + count))
		dispatch(addToCart(currentProduct));
	};

	// decrement count
	const handleDecrementCount = () => {
		setCount(prevCount => prevCount <= 0 ? prevCount - 1 : 1)
	}

	// increment count
	const handleIncrementCount = () => {
		setCount(prevCount => prevCount + 1)
	}
	return (
		<Row className="addtocart">
			<div className="form-count">
				<Button className="btn-count" onClick={handleDecrementCount}>
					-
				</Button>
				<div className="count"> {count} </div>
				<Button className="btn-count" onClick={handleIncrementCount}>
					+
				</Button>
			</div>
			<button className="btn-addtocart" onClick={handleAddToCart}>
				Add to cart
			</button>
		</Row>
	);
};

// AddToCart.getInitialProps = async () => {
//   const res = await fetch(`${Https}/api/products`);
//   const { data } = await res.json();
//   return { Data: data };
// };

export default AddToCart;
