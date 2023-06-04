import React from 'react'
import "./App.css"
import "./index.css"
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Slider from './components/Slider/Slider'
import  Virtual  from './components/Virtual/virtual'
import Products from './components/Products/Products'
import Clints from './components/clints/Clints'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Clints/>
      <Footer/>
    </div>
  )
}

export default App