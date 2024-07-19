import React from 'react'
import { HERO1, HERO2, HERO3 } from '../constant/utils'
import Whyus from './Whyus'
import Place from './Place'

const Hero = () => {
    return (
        <>
            <div className='md:pt-48 pt-32 flex flex-wrap justify-between'>
                <div className='lg:max-w-[35%] text-left'>
                    <h1 className='text-4xl  lg:text-8xl font-bold pb-5'>
                        <span className='underline decoration-yellow-300'>Let’s </span>Create Memorable Journey
                    </h1>
                    <p className='font-medium text-sm text-slate-500 lg:max-w-[80%]'>
                        Embark on unforgettable journeys and explore breathtaking destinations around the world.
                    </p>
                </div>
                <div className='xl:flex relative hidden'>
                    <img className="w-60 -left-[400px] absolute -top-[150px]" src={HERO1} alt="" />
                    <img className="w-60 -left-[400px] absolute top-[200px]" src={HERO2} alt="" />
                    <img className="" src={HERO3} alt="" />
                </div>
            </div>
            <Whyus />
            <Place />
        </>
    )
}

export default Hero