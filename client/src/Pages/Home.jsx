import React from 'react'
import Carousel from '../Components/Carousel'

function Home() {

  return (
    <div className='flex flex-col gap-20 place-items-center'>
      <div className='flex flex-row gap-50 place-items-center'>
        <Carousel />
        <div className='flex flex-col place-items-center'>
          <h3 className='text-7xl'>Bienvenido a</h3>
          <h1 className='text-9xl font-bold cursor-pointer text-lime-600'>MaraStore</h1>
        </div>
      </div>
      <button>Button</button>
    </div>
  )
}

export default Home