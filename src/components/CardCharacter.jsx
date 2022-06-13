import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useCharacterApi from '../hooks/useCharacterApi'

const CardCharacter = ({ resident }) => {

  const character = useCharacterApi(resident)
  return (
    <article className='app__character'>
      
        <div className='app__character--img'>
        <img src={character?.image} alt={character?.name} />
        </div>
        <div className='app__character--dates'>
          <h2>{character?.name}</h2>
          <p>Status: {character?.status}</p>
          <p>Origin: {character?.origin.name}</p>
          <p>Episodes where appear: {character?.episode.length}</p>
        </div>
    </article>
  )
}

export default CardCharacter