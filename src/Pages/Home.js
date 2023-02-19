import React from 'react'
import Products from '../Components/Products'

const Home = () => {
  return (
    <div style={{marginTop:'100px'}}>
      <h1 style={{textAlign:'center', marginBottom:'10px'}}>Our Products</h1>
      <Products />
    </div>
  )
}

export default Home