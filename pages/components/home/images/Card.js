import { Row } from 'antd';
import React, { useState } from 'react';
import Image from './Image';

const CardImage = () => {
	return (
		<>
				<Row className="list-product">
						<Image
							className="product-image"
						></Image>
				</Row>
			<a href="/">
				<div className="shop-all"> Shop All</div>
			</a>
		</>
	);
};
export default CardImage;
