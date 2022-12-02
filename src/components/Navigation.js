import React from 'react';

// pull in the props from PortfolioContainer function to use in navigation tabs
function Navigation({currentPage, handlePageChange}) {
    return (
        <nav className='text-md leading-6'>
            <ul className='nav-list font-semibold text-stone-700'>
                <li className='nav-item  hover:border-b-indigo-200 hover:border-b-4'>
                    <a
                    href="#aboutMe"
                    onClick={() => handlePageChange('AboutMe')}
                    className={currentPage === "AboutMe" ? 'nav-link active' : 'nav-link'}
                    > About Me</a>
                </li>
                <li className='nav-item  hover:border-b-indigo-400 hover:border-b-4'>
                    <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === "Portfolio" ? 'nav-link active' : 'nav-link'}
                    > Portfolio</a>
                </li>
                <li className='nav-item  hover:border-b-indigo-600 hover:border-b-4'>
                    <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}
                    > Contact</a>
                </li>
                <li className='nav-item  hover:border-b-indigo-800 hover:border-b-4'>
                    <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === "Resume" ? 'nav-link active' : 'nav-link'}
                    > Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;