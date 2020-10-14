import Head from 'next/head';
import NavbarCheckout from './NavbarCheckout'

const LayoutCheckout = ({children}) => {
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta charSet="utf-8" />
      </Head>
      <h1>Harrys App</h1>
      <NavbarCheckout/>
      {children}
    </>
  )
}

export default LayoutCheckout
