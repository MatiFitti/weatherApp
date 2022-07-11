import React from 'react'
import { formatToLocalTime } from '../services/WheaterServices'

function TimeAndLocation({weather: {dt, timezone, name, country}}) {
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <p className='text-white text-md md:text-xl lg:text-xl 2xl:text-xl font-extralight'>
                    { formatToLocalTime(dt, timezone) }
                </p>
            </div>
            <div className='flex items-center justify-center my-3'>
                <p className='text-white text-sm md:text-3xl font-medium'>
                    {`${name}, ${country}`}
                </p>
            </div>
        </div>
    )
}

export default TimeAndLocation