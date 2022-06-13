import React from 'react'

const LocationInfo = ({ location }) => {

    return (
        <article className='app__location'>
            {/* siempre usaremos ? porque el objeto llega a ser undefined */}
            <h2 className='app__location--title'>Name {location?.name}</h2>
            <ul className='app__location--date'>
                <li><span>Type: </span> {location?.type}</li>
                <li><span>Dimension: </span> {location?.dimension} </li>
                <li><span>Population: </span> {location?.residents.length} </li>
            </ul>
        </article>
    )
}

export default LocationInfo