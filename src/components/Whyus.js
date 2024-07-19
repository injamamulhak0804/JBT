import React from 'react'
import { CAL, MAP, SHIP, TICK } from '../constant/utils'

const Whyus = () => {
    return (
        <div className='font-poppis pt-28 lg:pt-96 lg:flex justify-around'>
            <div>
                <img className='w-64 lg:w-96' src={SHIP} alt="" />
            </div>
            <div>
                <h2 className='text-yellow-600 pt-6 lg:text-2xl'>Way Choose Us?</h2>
                <h2 className='text-3xl lg:text-7xl'>Plan Your Trip With Us</h2>
                <div className='pt-10 flex items-center gap-5'>
                    <img src={TICK} alt="" />
                    <div>
                        <h2 className='text-xl lg:text-3xl'>Best Price Guarantee</h2>
                        <p className='text-sm lg:text-md font-normal text-slate-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='pt-10 flex items-center gap-5'>
                    <img src={MAP} alt="" />
                    <div>
                        <h2 className='text-xl lg:text-3xl'>Best Price Guarantee</h2>
                        <p className='text-sm lg:text-md font-normal text-slate-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='pt-10 flex items-center gap-5'>
                    <img src={CAL} alt="" />
                    <div>
                        <h2 className='text-xl lg:text-3xl'>Best Price Guarantee</h2>
                        <p className='text-sm lg:text-md font-normal text-slate-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyus