import React from 'react';
import { useSelector} from "react-redux";

const HeaderBox = () => { 
	// count productr selected
	const count = useSelector(state => state.carts.count)

	return (
		<div>
			<h1>
				Your Cart <span>({count > 0 ? count : 0})</span>
			</h1>
		</div>
	);
};

export default HeaderBox;
