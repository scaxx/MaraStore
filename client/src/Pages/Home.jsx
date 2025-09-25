import React from 'react'
import Carousel from '../Components/Carousel'
import Button from '../Components/Button'

function Home() {

  return (
    <div className='flex flex-col gap-20 place-items-center'>
      <div className='flex flex-row gap-50 place-items-center'>
        <Carousel />
        <div className='flex flex-col place-items-center'>
          <h3 className='text-7xl'>Bienvenido a</h3>
          <h1 className='text-9xl font-bold cursor-pointer text-cyan-500'>MaraStore</h1>
        </div>
      </div>
      <Button variante='mas' onClick={() => alert("Más!")}>Más</Button>
    </div>
  )
}

export default Home