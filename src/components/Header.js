import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='font-poppis flex  justify-between items-center w-[90%] mx-auto mt-7'>
            <div>
                <h2 className='font-semibold font-mont text-2xl'><Link to="/">Zamam.Travels</Link></h2>
            </div>
            <div className='lg:flex text-sm  hidden gap-10'>
                <Link to="/">Home</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/flight">FLIGHT</Link>
                {/* <Link to="/hotels">HOTELS</Link> */}
                <Link to="/contact">CONTACT</Link>
            </div>
            <div className='flex gap-5 items-center'>
                <p>Login</p>
                <p className='bg-slate-200 px-6 py-3 rounded-lg'>Sign up</p>
            </div>
        </div>
    )
}
export default Header