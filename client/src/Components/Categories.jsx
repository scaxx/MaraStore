import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Categories = () => {
  return (
    <div className='bg-zinc-700 cursor-pointer px-8 py-3 m-3 flex flex-row place-items-center gap-3 rounded-xl text-2xl' onClick={() => alert("Categorías")}>
      Categorías 
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  )
}

export default Categories