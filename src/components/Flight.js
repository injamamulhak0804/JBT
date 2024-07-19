import React from 'react'
import { citydata } from '../constant/utils'

const Flight = () => {
    return (
        <div className="mt-28">
            <div>
                <h2 className='text-xl text-center lg:text-3xl'>Create Your travel wish lis and leave the rest for us</h2>
                <h3 className='text-sm lg:text-xl text-center text-slate-500'>Special offers to suit your plan.</h3>
            </div>
            <div className='p-7 shadow-xl lg:max-w-[50%] mx-auto mb-10'>
                <input type="text" className='border-r-2 border-slate-400 m-2 p-2' placeholder='From' />
                <input type="text" className='border-r-2 border-slate-400 m-2 p-2' placeholder='Date Of Stay' />
                <input type="text" className='border-r-2 border-slate-400 m-2 p-2' placeholder='Traveller - Class' />
                <button className='text-white px-6 py-2 rounded-lg bg-green-950'>Find Trip</button>
            </div>
            <div>
                <div className='my-20'>
                    <h2 className='text-sm md:text-md'>Destinstion</h2>
                    <h2 className='text-xl font-bold md:text-2xl'>Explore Your Own city</h2>
                </div>

                <div className='flex flex-wrap justify-between gap-7 max-w-[60%] mx-auto'>
                    {citydata.map((item, index) => {
                        return (
                            <div key={index} className='relative w-[310px]'>
                                <img className='w-[310px]  h-[420px] object-cover rounded-lg' src={item.img} alt="" />
                                <div className='absolute w-[90%] bottom-5 right-4 '>
                                    <div className='flex text-white justify-between'>
                                        <div>
                                            <p className='text-2xl font-bold '>{item.name}</p>
                                            <p>{item.desc}</p>
                                        </div>
                                        <p className='font-bold text-md'>${item.price}</p>
                                    </div>
                                    <button className='px-6 py-2 font-med bg-white text-slate-800 rounded-lg w-[100%] mt-6'>Book flight</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Flight