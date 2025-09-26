import React from 'react'
import "../../src/index.css"

import SearchBar from './SearchBar'

const Shop = () => {
  return (
    <div className='shop-container flex flex-col gap-10 place-items-center m-10'>
        <SearchBar />
    </div>
  )
}

export default Shop