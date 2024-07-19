import React from 'react'
import { ABOUTIMG } from '../constant/utils'

const About = () => {
    return (
        <div className='mt-32'>
            <h2 className='text-3xl font-semibold pb-10'>About zamam.Travels</h2>
            <div className='lg:flex lg:justify-around'>
                <div className='lg:max-w-[40%]'>
                    <p className='pb-5'>
                        Since 1975, Phnes. Travels has been focused on bringing our customers the best in esteem and quality travel game plans. We are enthusiastic about movement and sharing the world’s marvels on the relaxation travel side, and giving corporate explorers hello there contact administrations to encourage their business travel needs.
                    </p>
                    <p className='pb-5'>
                        We’re a worker-claimed travel organization secured by our qualities, trustworthiness, and commitment to client benefit.
                        Our honor-winning organization reliably positions as a standout amongst other offices in the nation (Travel Weekly, Business Travel Weekly), and is the best individual from the renowned Signature Travel Network, an overall association enabling us to give our clients unmatched advantages.
                    </p>
                    <p className='pb-5'>
                        Since 2009, our solid organizational culture and enthusiasm for our calling have brought about our being named every year as one of the “Best Places To Work” in Accra Ghana. Our administration is dynamic on different tourism warning sheets and panels for movement associations. Fulfilled workers lead to fulfilled clients. We know the development and accomplishment of our organization relies on satisfying our customer’s needs each day. That is additionally our guarantee.
                    </p>
                </div>
                <div>
                    <img src={ABOUTIMG} alt="" />
                </div>
            </div>

        </div>
    )
}

export default About