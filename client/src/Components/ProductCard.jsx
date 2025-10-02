import React from 'react'

const ProductCard = () => {
  return (
    <div>
      <h1>Nombre</h1>
      <div>
        <img src="/" alt="img" />
        <div>
          <p>Descripción</p>
          <p>Precio</p>
        </div>
      </div>
      <Button variante='agregar' onClick = {() => alert("Agregar")}/>
    </div>
  )
}

export default ProductCard