import React from 'react'

const Categories = () => {
  return (
    <div className='bg-zinc-700 p-6 grid grid-cols-3 place-items-center gap-6 rounded-xl text-2xl'>
      {['Hola 1', 'Hola 2', 'Hola 3', 'Hola 4', 'Hola 5', 'Hola 6'].map((item, index) => (
        <p
          key={index}
          onClick={() => alert(item)}
          className='bg-zinc-700 hover:bg-zinc-800 transform hover:-translate-y-1 transition-all duration-300 p-4 rounded-xl cursor-pointer w-full text-center'
        >
          {item}
        </p>
      ))}
    </div>
  )
}

export default Categories
