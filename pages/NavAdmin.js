import React from 'react'
import Link from 'next/link'

const NavAdmin = () => {
  return (
    <div style={rowStyles}>
      <Link href="/admin/products"><div style={linkStyles} ><a>Products</a></div></Link>
      <Link href="/admin/orders"><div style={linkStyles} ><a>Orders</a></div></Link>
    </div>
  )
}

const rowStyles = {
  display: 'flex',
  alignItems: 'center'
}

const linkStyles = {
  fontSize: '20px',
  fontWeight: '500',
  margin: '10px 20px'
}

export default NavAdmin
