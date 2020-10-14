import React from 'react';
// import '../index.css';
import IconShip from '../icon/IconShip';

const FooterContent = () => {
	return (
		<div className="footer-text mt-1">
			<span className="icon-ship">
				<IconShip />
			</span>
			<span>Free shipping for orders over $15</span>
		</div>
	);
};

export default FooterContent;
