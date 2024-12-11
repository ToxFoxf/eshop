import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
const Product = () => {

    return (
      <div>
        <Header/>
        <div className='product_card'></div>
          <div className='img_product'>
            
          </div>
          <div className='text_product'>

          </div>
        <Footer/>
      </div>
    )
  }


export default Product
