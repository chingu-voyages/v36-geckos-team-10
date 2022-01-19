import React from 'react'
import Hero from '../PageElements/landingPage/Hero'
import Features from '../PageElements/landingPage/Features'
import Newsletter from '../PageElements/landingPage/Newsletter';
import Footer from '../PageElements/Footer';
import Showcase from '../PageElements/landingPage/Showcase';
import ScrollToTop from '../PageElements/landingPage/ScrollToTop';

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
