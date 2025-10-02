import React, { useEffect, useRef, useState } from 'react'
import "../../src/index.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import SearchBar from './SearchBar'
import Button from './Button'
import Categories from './Categories'

const Shop = () => {
  const [open, setOpen] = useState(false)
  const categoriesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoriesRef.current && !categoriesRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  return (
    <div className='shop-container flex flex-col gap-10 place-items-center m-10'>
      <div className='flex flex-row gap-10 place-items-center'>
        <SearchBar />

        <div className="relative" ref={categoriesRef}>
          <Button variante='menu' onClick={() => setOpen(!open)}>
            Categorías
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`transform transition-transform duration-500 ${open ? 'rotate-180' : 'rotate-0'}`}
            />
          </Button>

          <div
            className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-6 transition-all duration-500 ${
              open
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-5 pointer-events-none'
            }`}
          >
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
