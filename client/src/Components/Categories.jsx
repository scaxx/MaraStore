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
    <main className='bg-zinc-700 p-3 grid grid-cols-3 place-items-center gap-3 rounded-xl text-xl w-[30rem]'>
      {categories.map((cat, index) => (
        <p
          key={index}
          onClick={() => alert(cat)}
          className='bg-zinc-800 hover:bg-zinc-900 transform hover:-translate-y-1 transition-all duration-300 p-3 rounded-xl cursor-pointer w-full text-center shadow-md'
        >
          {cat}
        </p>
      ))}
    </main>
  )
}

export default Categories
