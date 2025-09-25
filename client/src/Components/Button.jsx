import React from 'react'

const Button = ({ children, onClick, variante = "mas", className = "" }) => {

  //Estilo base
  const estiloBase = "cursor-pointer bg-zinc-800 px-10 py-3 rounded-lg font-semibold text-2xl"

  //Variantes de estilo
  const variantes = {
    mas: "font-bold",
    agregar: "font-bold uppercase",
    icon: "rounded-full px-10 py-10",
  };

  return (
    <button onClick={onClick} className={`${estiloBase} ${variantes[variante]} ${className}`}>{children}</button>
  )
}

export default Button