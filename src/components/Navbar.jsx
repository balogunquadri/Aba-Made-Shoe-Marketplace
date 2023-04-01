import React from 'react'
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png';



const Navbar = () => {
    return (
        <>
            <header className={`absolute top-7 left-0 right-0 opacity-100 z-50`}>
                <nav className='flex items-center justify-between nike-container '>
                    <div className='flex items-center'>
                        <img
                            src={logo}
                            alt="logo/img"
                            className="w-16 h-auto"
                        />

                    </div>
                    <ul className='flex items-center justify-center gap-2'>
                        <li className='grid items-center'>
                            <MagnifyingGlassIcon className='icon-style' />
                        </li>
                        <li className='grid items-center'>
                            <HeartIcon className='icon-style' />
                        </li>

                        <li className='grid items-center'>
                            <button type='button'>
                                <ShoppingBagIcon className='icon-style' />
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar
