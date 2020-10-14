import React, { useState } from 'react';
// import './index.css';
import HeaderBox from './HeaderBox';
import Progress from './progress/Progress';
import MiniCart from './minicart/MiniCart';
import Price from './price/Price';
import CheckOut from './checkout/CheckOut';

const BoxCart = () => {
	
	return (
		<div className="box-cart">
			<HeaderBox/>
			<Progress/>
			<MiniCart/>
			<Price />
			<CheckOut/>
		</div>
	);
};

export default BoxCart;
