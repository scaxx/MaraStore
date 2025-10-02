import React from 'react'
import Button from './Button'

const ProductCard = () => {
  return (
    <div className='bg-zinc-700 rounded-xl p-4 flex flex-col place-items-center gap-4'>
      <h1>Nombre</h1>
      <div className='flex place-items-center gap-4'>
        <img src="/" alt="img" />
        <div className='flex flex-col gap-4'>
          <p>Descripción</p>
          <p>Precio</p>
        </div>
      </div>
      <Button variante='agregar' onClick = {() => alert("Agregar")}>Agregar</Button> 
    </div>
  )
}

export default ProductCard