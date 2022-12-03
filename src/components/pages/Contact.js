import React from 'react';

export default function AboutMe () {
    return (
        <div className='flex flex-col'>
            <div className='text-center py-7'>
                <h1 className='text-4xl text-indigo-900'>Contact</h1>
                <p className='pb-2 text-lg font-semibold text-indigo-500'>
                    Get in touch with me!
                </p>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='text-center'>
                    <h2 className="mb-1">Name:</h2>
                    <input type="text" name="name" placeholder="John Smith"className='py-1 px-2 border-indigo-900 hover:border-indigo-600 border-2 rounded-sm'>
                    </input>
                </div>
                <div className='text-center'>
                    <h2 className="mb-1">Email:</h2>
                    <input type="text" name="name" placeholder="jsmith@gmail.com"className='py-1 px-2 border-indigo-900 hover:border-indigo-600 border-2 rounded-sm'>
                    </input>
                </div>
                <div className='text-center'>
                    <h2 className="mb-1">Message:</h2>
                    <textarea
                        className="
                            px-3
                            py-1.5
                            font-normal
                            bg-white
                            border-indigo-900 hover:border-indigo-600 border-2
                            rounded
                            transition
                            ease-in-out
                        "
                        rows="5"
                        placeholder="Your message"
                    ></textarea>
                </div>
                <button className='bg-indigo-600 text-center mx-auto text-white py-1 px-2.5 rounded-sm font-semibold mb-20'>
                    Send message!
                </button>
            </div>
        </div>
    )
}