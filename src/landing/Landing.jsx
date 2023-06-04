import React from 'react'
import Slider from '../component/Slidebar/Slider'
import TopCategory from '../component/Header/TopCategory'
import ProductList from '../component/Header/ProductList'
import Footer from "../component/Footer/Footer"

function Landing() {
  return (
    <div>
      <Slider/>
      <TopCategory/>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default Landing
