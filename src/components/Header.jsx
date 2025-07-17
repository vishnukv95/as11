import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  
  return (
    <header className='flex  justify-between items-center w-full sticky top-0 left-0 text bg-orange-500 text-white '>
        <h1 className='p-3 text-3xl font-bold mx-3'>Omega Solutions</h1>
        <nav className='flex p-3 mx-3'>
            <ul className='flex gap-5'>
                <li className='cursor-pointer'>
                  <NavLink to="/" className={({ isActive }) =>
                isActive ? 'underline text-white' : ''
              }>Home</NavLink></li>
                <li className='cursor-pointer'>
                  <NavLink to="/About"  className={({ isActive }) =>
                isActive ? 'underline text-white' : ''
              }>
                    About
                  </NavLink>
                </li>
                <li className='cursor-pointer'>
                  <NavLink to="/UserPage" className={({ isActive }) =>
                isActive ? 'underline text-white' : ''
              }>User</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header