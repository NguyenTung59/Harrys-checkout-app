import React, {useState, useEffect} from 'react'
import Link from "next/link";
import {
  RightOutlined
} from "@ant-design/icons";
import fetch from 'isomorphic-unfetch'

const NavbarCheckout = () => {
  const [currentProduct, setCurrentProduct] = useState({}); // carts

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("state"));
    setCurrentProduct(data.carts.currentProduct);
  }, [])

  return (
    <nav className="navbar-checkout">
    <Link href={`/${currentProduct._id}/checkout/cart/`}>
      <a className="navbar-brand">
        Cart
      </a>
    </Link>
    <RightOutlined className="arrow-right"/>
    <Link href={`/${currentProduct._id}/checkout/contact_information/`}>
      <a className="navbar-brand">
        Information
      </a>
    </Link>
    <RightOutlined className="arrow-right"/>
    <Link href={`/${currentProduct._id}/checkout/shipping_method/`}>
      <a className="navbar-brand">
        Shipping
      </a>
    </Link>
    <RightOutlined className="arrow-right" />
    <Link href={`/${currentProduct._id}/checkout/payment_method/`}>
      <a className="navbar-brand">
        Payment
      </a>
    </Link>
    
  </nav>
  )
}

export default NavbarCheckout
