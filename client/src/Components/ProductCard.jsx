import React from 'react'
import Button from './Button'

const ProductCard = () => {
  return (
    <main className='bg-zinc-700 rounded-xl p-4 flex flex-col place-items-center gap-4'>
      <h1 className='font-bold'>Nombre</h1>
      <article className='flex place-items-center gap-4'>
        <img src="/" alt="img" />
        <section className='flex flex-col gap-4'>
          <p>Descripción</p>
          <p className='font-bold'>Precio</p>
        </section>
      </article>
      <Button variante='agregar' onClick = {() => alert("Agregar")}>Agregar</Button> 
    </main>
  )
}

export default ProductCard