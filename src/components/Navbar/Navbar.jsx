import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full px-3 py-4 flex justify-between items-center shadow-md'> 
      <div className='bg-slate-700 shadow-sm p-2'>
        <h3 className='text-white text-xl uppercase tracking-wider '>ShareIt</h3>
      </div>
      <nav>
        <ul className='flex gap-4'>
          <li><a className='text-xl font-light text-slate-700 hover:text-slate-800 hover:font-bold transition-transform ease-in-out duration-200' href="#">Home</a></li>
          <li><a className='text-xl font-light text-slate-700 hover:text-slate-800 hover:font-bold transition-transform ease-in-out duration-200' href="#">About</a></li>
          <li><a  className='text-xl font-light text-slate-700 hover:text-slate-800 hover:font-bold transition-transform ease-in-out duration-200'href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar