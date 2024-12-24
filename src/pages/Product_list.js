import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import products from '../products'
const Product_list = () => {

    return (
      <div>
        <Header/>
        <div className='list'>
          {products.length > 0 ?
          (products.map((product, index) => (
            <div key={index} className='product1'>
              <img></img>
              <p>{product.name_product}</p>
              <p>{product.price}</p>
            </div>
          ))
        ):(
          <p>No products</p>
          )}
        </div>
        <Footer/>
      </div>
    )
  }

export default Product_list