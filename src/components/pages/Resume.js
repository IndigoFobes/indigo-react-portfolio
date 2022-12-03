import React from 'react';
import { BsDownload } from "react-icons/bs"

export default function AboutMe () {
    return (
        <div className='container-lg gx-5 h-100'>
            <div className='px-10 py-7'>
                <h1 className='text-4xl text-indigo-900'>Resume</h1>
                <p className='leading-7'>
                    Download my resume here.
                </p>
                <a href = "https://drive.google.com/file/d/1UXZKBWeZP-fAxmry_vgFrpwYnB3ChNZU/view?usp=sharing" target="blank">
                    <BsDownload className='text-2xl text-indigo-500'/>      
                </a>
            </div>
            <div className='px-10 pt-4 pb-7'>
                <h2 className='text-2xl text-indigo-900'>Technical Skills</h2>
                <ul className='my-2 leading-8'>
                    <li>React</li>
                    <li>MySQL</li>
                    <li>Express</li>
                    <li>MongoDb</li>
                    <li>CSS</li>
                    <li>Handlebars</li>
                    <li>NoSQL</li>
                </ul>
            </div>
        </div>
    )
}