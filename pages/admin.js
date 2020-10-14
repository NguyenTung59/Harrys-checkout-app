import React from 'react'
import Link from 'next/link'
import Products from './admin/products'
import Orders from './admin/orders'

const admin = () => {
  return (
    <div>
      <Link href="/admin/products"><a>Products</a></Link>
    </div>
  )
}

export default admin
