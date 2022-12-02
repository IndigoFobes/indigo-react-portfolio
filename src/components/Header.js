import React, { useState } from 'react';
import Navigation from './Navigation';

// export this to be used in App.js
export default function Header ({currentPage, handlePageChange}) {

    return (
        <header className='flex justify-between m-10'>
            <h1 className='indigo text-7xl self-center font-betterYesterday text-indigo-900'>Indigo Fobes</h1>
            < Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}

