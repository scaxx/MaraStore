import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <main className='flex flex-row gap-5 place-items-center'>
      <input type="nav" className='bg-zinc-700 rounded-full w-150 h-15 text-2xl text-center' placeholder='Busca un producto...'/>
      <Button onClick={() => alert("Hola")} variante='icon'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </main>
  )
}

export default SearchBar