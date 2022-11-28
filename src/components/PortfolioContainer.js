// The conditional nav function will go in here, to determine which page we render. So include a renderPage() function
// import all other components/pages
import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    // check value of currentPage, and render the corresponding
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        } else if (currentPage === 'Portfolio') {
            return <Portfolio />
        } else if (currentPage === 'Contact') {
            return <Contact />
        } return <Resume />
    }

    // function ot handle page change; whatever page is plugged in to this function will become the new current page
    const handlePageChange = (page) => setCurrentPage(page);

    // return navigation tabs with the appropriate props to change the page
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        {/* <Footer /> */}
        </div>
    )
}