import React from 'react'

function Navbar({onSearch}) {
  return (
    <nav className='flex justify-between bg-gray-900 p-3'>
      <div>
        <h1 className='font-bold text-2xl'>Notes</h1>
      </div>
      <div>
        <input type="text" onChange={onSearch} placeholder='Searching..' className='p-2 bg-black border-gray-800 border-2'/>
      </div>
    </nav>
  )
}

export default Navbar