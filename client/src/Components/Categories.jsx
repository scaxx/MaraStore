import React from 'react'

const Categories = () => {
  const categories = [
    'Laptops',
    'Smartphones',
    'Accesorios',
    'Tablets',
    'Consolas',
    'TVs',
    'Cámaras',
    'Audio',
    'Monitores',
    'Smartwatch',
    'Drones',
    'Periféricos'
  ]

  return (
    <div className='bg-zinc-700 p-6 grid grid-cols-3 place-items-center gap-6 rounded-xl text-xl animate-slideFadeDown w-[800px]'>
      {categories.map((item, index) => (
        <p
          key={index}
          onClick={() => alert(item)}
          className='bg-zinc-800 hover:bg-zinc-900 transform hover:-translate-y-1 transition-all duration-300 p-3 rounded-xl cursor-pointer w-full text-center shadow-md'
        >
          {item}
        </p>
      ))}
    </div>
  )
}

export default Categories
