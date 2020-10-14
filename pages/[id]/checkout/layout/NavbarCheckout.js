import Link from "next/link";
import {
  RightOutlined
} from "@ant-design/icons";
import fetch from 'isomorphic-unfetch'

const NavbarCheckout = ({product, productId}) => {
  return (
    <nav className="navbar-checkout">
    <Link href={`/${productId}/checkout/cart/`}>
      <a className="navbar-brand">
        Cart
      </a>
    </Link>
    <RightOutlined />
    <Link href={`/${productId}/checkout/information/`}>
      <a className="navbar-brand">
        Information
      </a>
    </Link>
    <RightOutlined />
    <Link href={`/${productId}/checkout/shipping/`}>
      <a className="navbar-brand">
        Shipping
      </a>
    </Link>
    <RightOutlined />
    <Link href={`/${productId}/checkout/payment/`}>
      <a className="navbar-brand">
        Payment
      </a>
    </Link>
    
  </nav>
  )
}

NavbarCheckout.getInitialProps = async ({query: {id}}) => {
  const res = await fetch(`${Https}/api/products/${id}`);
  const { data } = await res.json();
  console.log(id)
  return { product: data , productId: id};
}

export default NavbarCheckout
