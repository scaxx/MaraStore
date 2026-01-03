import React from 'react'
import Button from './Button'

const ProductCard = () => {
  return (
    <main className='bg-zinc-700 rounded-xl p-4 flex flex-col place-items-center gap-4'>
      <h1>Nombre</h1>
      <article className='flex place-items-center gap-6'>
        <img src="./src/assets/parlante.png" alt="img" width={80}/>
        <section className='flex flex-col gap-4'>
          <p>Esto es una breve descripción</p>
          <h3 className='font-bold'>Precio</h3>
        </section>
      </article>
      <Button variante='agregar' onClick = {() => alert("Agregar")}>Agregar</Button> 
    </main>
  )
}

export default ProductCard