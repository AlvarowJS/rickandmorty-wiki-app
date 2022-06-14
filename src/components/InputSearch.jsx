import React, { useState } from 'react'

const InputSearch = ({setSearchLocation}) => {

    const searchLocation = e => {
        e.preventDefault()
        setSearchLocation(e.target.children[0].value)
    }

  return (
    <form onSubmit={searchLocation} className='app__search'>
        <input type="text" placeholder='Type a location id'/>
        <button><i class='bx bx-search-alt-2'></i></button>
    </form>
  )
}

export default InputSearch