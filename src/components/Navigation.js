import React from 'react';

// pull in the props from PortfolioContainer function to use in navigation tabs
function Navigation({currentPage, handlePageChange}) {
    return (
        <nav>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <a
                    href="#aboutMe"
                    onClick={() => handlePageChange('AboutMe')}
                    className={currentPage === "AboutMe" ? 'nav-link active' : 'nav-link'}
                    > About Me</a>
                </li>
                <li className='nav-item'>
                    <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === "Portfolio" ? 'nav-link active' : 'nav-link'}
                    > Portfolio</a>
                </li>
                <li className='nav-item'>
                    <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}
                    > Contact</a>
                </li>
                <li className='nav-item'>
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