import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from '../services/WheaterServices';

function Template() {
  return (
    <div className='scale-0'>
        <div className="items-center justify-center animate-pulse">
          {/* <div className="lds-ring"><div></div><div></div><div></div><div></div></div> */}
          <div>
            <div className='flex items-center justify-center my-6 bg-gray-700 rounded-xl'>
                  <p className='text-white text-md md:text-xl lg:text-xl 2xl:text-xl font-extralight opacity-0'>
                      { formatToLocalTime(1657570404, "Australia/Sydney") }
                  </p>
              </div>
              <div className='flex items-center justify-center my-3 bg-gray-700 rounded-xl'>
                  <p className='text-white text-sm md:text-3xl font-medium opacity-0'>
                    {`Sydney`}
                  </p>
              </div>
            </div>


          <div className='space-y-5 '>
            <div className='flex items-center justify-center py-6 text-xl text-cyan-300 bg-gray-700 rounded-xl'>
              <p className='opacity-0'>{ "Sunny" }</p>
            </div>

            <div className='flex flex-row items-center justify-evenly text-white py-3 bg-gray-700 rounded-xl'>
                <img src={ iconUrlFromCode("04d") } alt="" className='w-20 opacity-0'/>
                <p className='text-5xl opacity-0'>{`30°`}</p>
                <div className='flex flex-col space-y-5 opacity-0'>

                    <div className='flex font-light text-sm items-center justify-center bg-gray-700 rounded-xl'>
                        <UilTemperature size={18} className='mr-1'/>
                        Real feel:
                        <span className='font-medium ml-1'>{`30.toFixed()}°`}</span>
                    </div>

                    <div className='flex font-light text-sm items-center justify-center bg-gray-700 rounded-xl'>
                        <UilTear size={18} className='mr-1'/>
                        Humidity:
                        <span className='font-medium ml-1'>{`30%`}</span>
                    </div>

                    <div className='flex font-light text-sm items-center justify-center bg-gray-700 rounded-xl'>
                        <UilWind size={18} className='mr-1'/>
                        Wind:
                        <span className='font-medium ml-1'>{`30 Km/h`}</span>
                    </div>

                </div>
            </div>

            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3 opacity-0'>
                <UilSun/>
                <p className='font-light'>Rise: <span className='font-medium ml-1'>{formatToLocalTime(1657537482, "Australia/Sydney", "hh:mm a")}</span> </p>
                <p className='font-light hidden'>|</p>

                <UilSunset/>
                <p className='font-light'>Set: <span className='font-medium ml-1'>{formatToLocalTime(1657572380, "Australia/Sydney", "hh:mm a")}</span> </p>
                <p className='font-light '>|</p>

                <UilArrowUp/>
                <p className='font-light'>High: <span className='font-medium ml-1'>{`30°`}</span> </p>
                <p className='font-light hidden sm:flex'>|</p>

                <UilArrowDown/>
                <p className='font-light'>Low: <span className='font-medium ml-1'>{`30°`}</span> </p>
            </div>
        </div>
          <div className='space-y-5 '>
            <div className='flex items-center justify-center py-6 text-xl text-cyan-300 bg-gray-700 rounded-xl'>
              <p className='opacity-0'>{ "Sunny" }</p>
            </div>

            <div className='flex flex-row items-center justify-evenly text-white py-3 bg-gray-700 rounded-xl'>
                <img src={ iconUrlFromCode("04d") } alt="" className='w-20 opacity-0'/>
                <p className='text-5xl opacity-0'>{`30°`}</p>
                <div className='flex flex-col space-y-5 opacity-0'>

                    <div className='flex font-light text-sm items-center justify-center bg-gray-700 rounded-xl'>
                        <UilTemperature size={18} className='mr-1'/>
                        Real feel:
                        <span className='font-medium ml-1'>{`30.toFixed()}°`}</span>
                    </div>

                    <div className='flex font-light text-sm items-center justify-center bg-gray-700 rounded-xl'>
                        <UilTear size={18} className='mr-1'/>
                        Humidity:
                        <span className='font-medium ml-1'>{`30%`}</span>
                    </div>

                    <div className='flex font-light text-sm items-center justify-center bg-gray-700 rounded-xl'>
                        <UilWind size={18} className='mr-1'/>
                        Wind:
                        <span className='font-medium ml-1'>{`30 Km/h`}</span>
                    </div>

                </div>
            </div>

            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3 opacity-0'>
                <UilSun/>
                <p className='font-light'>Rise: <span className='font-medium ml-1'>{formatToLocalTime(1657537482, "Australia/Sydney", "hh:mm a")}</span> </p>
                <p className='font-light hidden'>|</p>

                <UilSunset/>
                <p className='font-light'>Set: <span className='font-medium ml-1'>{formatToLocalTime(1657572380, "Australia/Sydney", "hh:mm a")}</span> </p>
                <p className='font-light '>|</p>

                <UilArrowUp/>
                <p className='font-light'>High: <span className='font-medium ml-1'>{`30°`}</span> </p>
                <p className='font-light hidden sm:flex'>|</p>

                <UilArrowDown/>
                <p className='font-light'>Low: <span className='font-medium ml-1'>{`30°`}</span> </p>
            </div>
        </div>
        </div></div>
  )
}

export default Template