"use client"
import React, { useState } from 'react'

function HomePage() {
  const [Value, setValue] = useState(0)
  
  function addHandler(){
    if( Value < 10)
      setValue ( Value + 1 );
    else 
      setValue(10);
  }

  function subtractHandler(){
    if( Value > 0)
      setValue ( Value - 1 );
    else
      setValue(0);
  }

  return (
    <div className='bg-blue-300 min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold text-black'>Counter Program</h1>
      <h1 className='text-black font-semibold text-4xl'>{Value}</h1>
      <div className='space-x-7'>
        <button onClick={ addHandler } className='bg-green-400 px-5 rounded-full '>ADD</button>
        <button onClick={ subtractHandler } className='bg-red-400 px-5 rounded-full'>SUBTRACT</button>
      </div>
    </div>
  )
}

export default HomePage