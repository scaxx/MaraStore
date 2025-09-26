import React from 'react'
import "../../src/index.css"

import SearchBar from './SearchBar'
import Categories from './Categories'

const Shop = () => {
  return (
    <div className='shop-container flex flex-col gap-10 place-items-center m-10'>
        <div className='flex flex-row gap-10 place-items-center'>
            <SearchBar />
            <Categories />
        </div>

    </div>
  )
}

export default Shop