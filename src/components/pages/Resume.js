import React from 'react';
import { BsDownload } from "react-icons/bs"

export default function AboutMe () {
    return (
        <div className='container-lg gx-5 h-100'>
            <div className='px-10 py-7'>
                <h1 className='text-4xl text-indigo-900'>Resume</h1>
                <p className='pb-2 text-lg font-semibold text-indigo-500'>
                    Download my resume here.
                </p>
                <a href = "https://drive.google.com/file/d/1UXZKBWeZP-fAxmry_vgFrpwYnB3ChNZU/view?usp=sharing" target="blank">
                    <BsDownload className='text-2xl text-indigo-500'/>      
                </a>
            </div>
            <div>

            </div>
        </div>
    )
}