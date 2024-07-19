import React from 'react'
import { FLIGHT, HOTEL } from '../constant/utils'

const Place = () => {
    return (
        <>
            <div className='pt-[80px]'>
                <div className='text-3xl lg:text-7xl pb-7'>
                    <h2>Nice</h2>
                    <h2><span className='text-red-700'>For You</span> To Come</h2>
                </div>
                <div className='flex flex-col lg:flex-row lg:justify-center lg:pt-28 items-center gap-10'>
                    <div className='relative'>
                        <img className='lg:w-96 w-72' src={FLIGHT} alt="" />
                        <button className='absolute bottom-5 px-6 py-2 rounded-lg font-[600] left-[40%] bg-white'>Flight</button>
                    </div>
                    <div className='relative'>
                        <img className='lg:w-96 w-72' src={HOTEL} alt="" />
                        <button className='absolute bottom-5 px-6 py-2 rounded-lg font-[600] left-[40%] bg-white'>Hotel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Place