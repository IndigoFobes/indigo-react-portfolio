import React, { useState } from 'react';
import Navigation from './Navigation';

// export this to be used in App.js
export default function Header ({currentPage, handlePageChange}) {

    return (
        <header>
            <h1 className='indigo'>Indigo Fobes</h1>
            < Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}

