import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import {Https} from '../../../utils/port'

const cart = ({productId}) => {
  return (
    <div>
      <h1>Cart ...</h1>
      <Link href={`/${productId}/view`}><a>Back Home</a></Link>
    </div>
  )
}

cart.getInitialProps = async ({query: {id}}) => {
  const res = await fetch(`${Https}/api/products/${id}`);
  const { data } = await res.json();
  return { productId: id};
}

export default cart
