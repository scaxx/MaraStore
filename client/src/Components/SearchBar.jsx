import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <>
      <input type="text" className='bg-zinc-700 rounded-xl' placeholder='Busca un producto...'/>
      <Button onClick={alert("Buscar")} variante='icon'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </>
  )
}

export default SearchBar