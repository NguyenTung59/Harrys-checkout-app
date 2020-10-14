import { Row } from 'antd';
// import 'antd/dist/antd.css';
// import '../home.css';
import React, { useState } from 'react';
// import ListImage from '../../../data';
import Image from './Image';

const CardImage = () => {
	const [images] = useState('');
	return (
		<>
			{images ? (
				<Row className="list-product">
					{images.map(record => (
						<Image
							key={record}
							record={record}
							className="product-image"
						></Image>
					))}
				</Row>
			) : null}
			<a href="/">
				<div className="shop-all"> Shop All</div>
			</a>
		</>
	);
};
export default CardImage;
