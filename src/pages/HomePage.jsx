import React from 'react'
import CarouselPrimary from '../components/CarouselPrimary'
import InitialCategories from '../components/InitialCategories'
import InitialProducts from '../components/InitialProducts'

const HomePage = () => {
  return (
    <div className='home home-page'>
      <CarouselPrimary />
      <InitialCategories />
      <InitialProducts />
    </div>
  )
}

export default HomePage