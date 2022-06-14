import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import CardCharacter from './components/CardCharacter'
import useLocationApi from './hooks/useLocationApi'
import InputSearch from './components/InputSearch'
import Pagination from './components/Pagination'

function App() {
  const [searchLocation, setSearchLocation] = useState()
  const [currentPage, setCurrentPage] = useState(0)

  console.log(searchLocation)
  const location = useLocationApi(searchLocation)
  
  return (
    <div className="app">
   
      <header className="app__header">
        
      </header>

      <InputSearch setSearchLocation={setSearchLocation}/>
      <LocationInfo location={location}/>

      <div className='characters'>
        {location?.residents.map(resident => (
          <CardCharacter 
            resident={resident}
            key={resident}
          />
        ))}
      </div>
      <Pagination setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default App
