import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {changeImage, addToCart, decrementCount} from '../../redux/actions/app'

const InfoProduct = () => {
  const dispatch = useDispatch()
  // JSON.parse change json => object
  const [currentImage, setCurrentImage] = useState(''); // app
  const [currentProduct, setCurrentProduct] = useState({}); // carts
  const [count, setCount] = useState(0) // carts
  const [priceShip, setPriceShip] = useState(0);

  const shippingState = useSelector(state => state.checkout.shipping)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("state"));
    setCurrentImage(data.app.currentImage);
    setCurrentProduct(data.carts.currentProduct);
    setCount(data.carts.count);
    dispatch(changeImage(data.app.currentImage))
    dispatch(addToCart(data.carts.currentProduct))
    dispatch(decrementCount(data.carts.count))
  }, [])
  
  return (
    <div style={productStyles} className="info-product">
      <div style={layoutStyles}>
        <div style={borderBottomStyle}>
          <div style={rowStyles}>
            <div style={miniCartStyles}>
              {/* image product  */}
              <div style={imageStyles}>
                <img
                  src={currentImage}
                  alt="#"
                  style={{ height: "60px", width: "80px" }}
                />
                {count > 0 ? <div className='count-order'><span>{count}</span></div> : null}
              </div>
              {/* info product  */}
              <div style={infoStyles}>
                <div className="item-title info">
                  <span>{currentProduct ? currentProduct.name : null}</span>
                </div>
                <div className="info">
                  <span>
                    
                    <span> $</span>
                    {currentProduct ? currentProduct.price : null}
                  </span>
                </div>
              </div>
            </div>

            {/* total */}
            <div style={priceStyles}>${currentProduct ? currentProduct.price * count : 0}</div>
          </div>
        </div>

        <div style={borderBottomStyle}>
          {/* subtotal  */}
          <div style={textStyles}>
            <div>Subtotal</div>
            <div className="subprice">${ currentProduct ? count * currentProduct.price : 0}</div>
          </div>

          {/* shipping  */}
          <div style={textStyles}>
            <div>Shipping</div>
            <div>Calculated at next step</div>
          </div>

          {/* address  */}
          <div style={textStyles}>
            <div>{shippingState.address ? shippingState.address : <span>------</span>}</div>
            <div>${priceShip}</div>
          </div>
        </div>

        <div className="price">
          <h3>Total</h3>
          <div style={totalPriceStyles}>${ currentProduct ? count * currentProduct.price + priceShip : 0 + priceShip}</div>
        </div>

      </div>
    </div>
  );
};

const miniCartStyles = {
  display: "flex",
  fontSize: "14px",
};
const rowStyles = {
  display: "flex",
  justifyContent: "space-between",
};
const textStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: '10px'
}

const infoStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const borderBottomStyle = {
  borderBottom: "1px solid rgba(175,175,175,0.34)",
  padding: "20px 0",
};

const productStyles = {
  height: "100%",
  width: "100%",
  background: "#f7f7f7",
};

const imageStyles = {
  height: "80px",
  width: "82px",
  marginRight: "10px",
  padding: "10px 0",
  border: "1px solid #c7c7c7",
  borderRadius: "10px",
  position: 'relative'
};

const layoutStyles = {
  width: "68%",
};

const priceStyles = {
  display: "flex",
  alignItems: "center",
  fontWeight: 500,
  fontSize: "20px",
};

const totalPriceStyles = {
  fontSize:  '25px',
  fontWeight: '700'
}

// InfoProduct.getInitialProps = () => {
//   const data = JSON.parse(localStorage.getItem("state"));
//   // console.log(data)
//   return { data }
// }

export default InfoProduct;
