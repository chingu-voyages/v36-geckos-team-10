import React from 'react'
import Hero from '../pageElements/landingPage/Hero'
import Features from '../pageElements/landingPage/Features'
import Newsletter from '../pageElements/landingPage/Newsletter';
import Footer from '../pageElements/Footer';
import Showcase from '../pageElements/landingPage/Showcase';
import ScrollToTop from '../pageElements/landingPage/ScrollToTop';

function LandingPage() {
    return (
        <div className=''>
            <Hero/>
            <Features/>
            <Showcase/>
            <Newsletter/>
            <Footer/>   
            <ScrollToTop/>         
        </div>
    )
}

export default LandingPage
