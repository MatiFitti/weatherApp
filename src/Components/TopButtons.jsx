import React from 'react';
// import img from './../assets/Fondo.png'

function TopButtons({setQuery}) {

    const cities =[
        {
            id:1,
            title: "London"
        },
        {
            id:2,
            title: "Sydney"
        },
        {
            id:3,
            title: "Tokio"
        },
        {
            id:4,
            title: "Toronto"
        },
        {
            id:5,
            title: "Paris"
        }
    ]

  return (
    <div className=''>
        {/* <img src={img} alt="logo" className='w-12 my-1' /> */}
        {
            cities.map((city) => (
                <button key={city.id} className='text-white text-lg font-medium ml-8 ' onClick={() => setQuery({q: city.title})}>{city.title}</button>
            ))
        }
    </div>
  )
}

export default TopButtons