import React from 'react';
import indigo from "../../assets/indigo_recent.JPG"


export default function AboutMe () {
    return (
        <div className='about-me container text-center py-7 px-10'>
            <h1 className='text-4xl text-indigo-900'>About Me</h1>
            <p className='pb-2 text-lg font-semibold text-indigo-500'>Joyful, Creative, Curious</p>
            <p className='leading-7'>
                Freelance web developer based in Alpharetta, Georgia. <br/> Full-stack trained with a love for UI-UX design and databases. Reach out for inquiries!
            </p>
            <div className='bg-white px-4 mx-auto flex justify-center my-10 overflow-hidden'>
                <img className="h-60 w-60 rounded-full align-middle shadow object-cover object-top" src={indigo}></img>
            </div>
        </div>
    );
}