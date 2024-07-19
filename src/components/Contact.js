import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='max-w-[80%] mt-10 rounded-lg mx-auto bg-slate-300 p-10 min-h-[500px]'>
                <h2 className='text-2xl font-medium'>Get In touch</h2>
                <p className='pb-10 text-sm font-normal text-slate-600'>We are here for you! How can we help?</p>
                <form className='flex flex-col gap-6 items-start'>
                    <input type="text" placeholder='Enter your name' className='lg:min-w-[600px] p-2 rounded min-w-[300px] mb-5' />
                    <input type="email" placeholder='Enter your email' className='lg:min-w-[600px] p-2 rounded min-w-[300px] mb-5' />
                    <textarea className='min-w-[300px] lg:min-w-[600px] min-h-44' name="" id=""></textarea>
                    <button className='px-6 py-2 mt-5 bg-slate-600 rounded-lg text-white'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact