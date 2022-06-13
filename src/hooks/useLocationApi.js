import axios from "axios"
import { useEffect, useState } from "react"

const useLocationApi = (searchLocation) => {
    const [location, setLocation] = useState()

    //useEffect recibe un callback un arreglo de dependencias
    useEffect(() => {
        let locationNumber
        if (searchLocation) {
            locationNumber = searchLocation
        } else {
            locationNumber = Math.ceil(Math.random() * 126)    
        }
        
        // se usa mayusculas por convencion 
        const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`
        axios.get(URL)
            .then(res => setLocation(res.data))
            .catch(err => console.log(err))

    }, [searchLocation])
    return location
}

export default useLocationApi