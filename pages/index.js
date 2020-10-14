import Head from "next/head";
import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import HomePage from "./components/home/HomePage";
import HarrysBody from "./components/harrys/index";
import { useSelector, useDispatch } from "react-redux";
import {
  getData, changeImage
} from "./redux/actions/app";

// const Https = "https://harrys-app-clone.vercel.app";
const Https = "http://localhost:3000";

const Home = ({ Data }) => {
  // console.log(Data)
  const dispatch = useDispatch();
  // state data
  const state = useSelector(state => state.app)

  useEffect(() => {
    dispatch(getData(currentProduct))
    dispatch(changeImage(currentProduct.imgUrl[0].url))
    return () => {
      console.log('state products', state)
    }
  }, [])

  // list products get api
  const [products, setProducts] = useState(Data);

  // current product
  const [currentProduct, setCurrentProduct] = useState(
    products.length > 0 ? products[products.length - 1] : products[0]
  );
  // console.log(currentProduct)
  //index of product in list products
  const [activeIndex, setActiveIndex] = useState(
    currentProduct.imgUrl.length > 0 ? currentProduct.imgUrl.length - 1 : 0
  );

  // close box cart
  const handleCloseBox = () => {
    // dispatch(closeCart(false));
  };
  return (
    <div>
      <Head>
        <title> Harrys App </title> <link rel="icon" href="/favicon.ico " />
      </Head>
      <main className="page-harrys">
        <div>
          {/* harrys page  */} {/* <AppHarrys /> */}
          <HomePage/>
          <div onClick={handleCloseBox}>
            <HarrysBody/>
          </div>
        </div>
      </main>
    </div>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(`${Https}/api/products`);
  const { data } = await res.json();
  return { Data: data };
};

export default Home;

