import React, { useState } from 'react'
import useLocationApi from '../hooks/useLocationApi'

const Pagination = ({setCurrentPage}) => {
    
    
    const filtredCharacter = (location) => {    
        
        return location?.residents.slice(currentPage,currentPage+5)
      }
    
    const nextPage =() =>{
        setCurrentPage(currentPage + 5)
    }
    const prevPage =() =>{
        if(currentPage > 0){
            setCurrentPage(currentPage - 5)
        }
    }
  return (
    <div className='pagination'>
        <button onClick={prevPage}><i class='bx bx-skip-previous'></i></button>
        <button onClick={nextPage}><i class='bx bx-skip-next'></i></button>
    </div>
  )
}

export default Pagination