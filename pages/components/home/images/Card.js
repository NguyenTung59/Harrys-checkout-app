import { Row } from 'antd';
import React, { useState } from 'react';
import Image from './Image';

const CardImage = () => {
	const [images] = useState([{url: '', name:'', id: 1}]);
	return (
		<>
			{images ? (
				<Row className="list-product">
					{images.map(record => (
						<Image
							key={record.id}
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
