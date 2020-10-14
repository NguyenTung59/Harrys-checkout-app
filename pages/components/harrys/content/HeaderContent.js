import React from 'react';
import { Row } from 'antd';
// import '../index.css';
import { useSelector, useDispatch} from "react-redux";

const HeaderContent = () => {

	const currentProduct = useSelector(state => state.app.currentProduct)
	return (
		<div>
			<Row style={rowStyles} className="name-product">
				<h1 style={{ fontSize: '1em', fontWeight: '600' }}>
					{currentProduct ? currentProduct.name : "No Product"} <span>|</span> <span>$</span>
					{currentProduct ? currentProduct.price : 0}
				</h1>
			</Row>
			<h2 className="description" style={{ fontWeight: '500' }}>
				{currentProduct ? currentProduct.shortDescription : "No Short Description"}
			</h2>
		</div>
	);
};

const rowStyles = {
	display: 'flex',
	flexDirection: 'row'
};

export default HeaderContent;
