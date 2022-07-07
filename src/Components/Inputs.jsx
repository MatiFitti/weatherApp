import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { useState } from 'react'

function Inputs({ setQuery, units, setUnits}) {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if(city) {
      setQuery({ q: city })
      setCity('')
    }
  }

  const handleLocationClick = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({
          lat,
          lon
        });
      });
    };
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.target.name

    if(units !== selectedUnit){
      setUnits(selectedUnit);
    };
  };

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
            placeholder='Search for city...'
            />
            <UilSearch
            size={25}
            className='text-white cursor-pointer transition ease-out hover:scale-125'
            onClick = {handleSearchClick}
            />
            <UilLocationPoint
            onClick = {handleLocationClick}
            size={25}
            className='text-white cursor-pointer transition ease-out hover:scale-125'
            />
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='text-xl text-white font-light transition ease-out hover:scale-125' onClick={handleUnitsChange}>
              °C
            </button>

            <p className='text-xl text-white mx-1'>|</p>

            <button name='imperial' className='text-xl text-white font-light transition ease-out hover:scale-125' onClick={handleUnitsChange}>
              °F
            </button>
        </div>
    </div>
  )
}

export default Inputs