import React, { useState } from 'react'
import "../../src/index.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import SearchBar from './SearchBar'
import Button from './Button'
import Categories from './Categories'

const Shop = () => {
  const [open, setOpen] = useState(false);

    return (
    <div className='shop-container flex flex-col gap-10 place-items-center m-10'>
        <div className='flex flex-row gap-10 place-items-center'>
            <SearchBar />
            <Button variante='menu' onClick={() => setOpen(!open)}>
              Categorías
              <FontAwesomeIcon icon={faChevronDown} className={`transform transition-transform duration-500 ${open ? 'rotate-180' : 'rotate-0'}`}/> 
            </Button>
        </div>
        {open && <Categories />}
    </div>
  )
}

export default Shop