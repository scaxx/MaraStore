import React from 'react'

const Button = ({ children, onClick, variante = "mas", className = "" }) => {

  //Estilo base
  const estiloBase = "cursor-pointer bg-zinc-800 font-semibold text-2xl"

  //Variantes de estilo
  const variantes = {
    mas: "font-bold rounded-xl px-10 py-3",
    agregar: "font-bold rounded-xl px-10 py-3 uppercase",
    icon: "rounded-full px-5 py-5",
  };

  return (
    <button onClick={onClick} className={`${estiloBase} ${variantes[variante]} ${className}`}>{children}</button>
  )
}

export default Button