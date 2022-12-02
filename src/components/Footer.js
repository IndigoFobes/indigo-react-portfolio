import React from 'react';
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"


export default function Footer () {
    return (
        <footer className='footer--pin text-center fixed bottom-0 left-0 right-0 bg-indigo-200 py-2 flex flex-row justify-between px-7'>
            <h6 className='text-sm'>Made by IndigoFobes</h6>
            <ul className='flex flex-row gap-2'>
                <li>
                    <BsGithub />
                </li>
                <li>
                    <BsLinkedin /> 
                </li>
            </ul>
        </footer>
    )
}