import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./product.scss"

export default function Product() {
  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        List of products Goes Here....
      </div>
    </div>
  )
}
