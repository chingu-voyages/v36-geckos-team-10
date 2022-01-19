import React from 'react'
import Hero from '../PageElements/Hero'
import FeaturesSection from '../PageElements/FeaturesSection'
import Newsletter from '../PageElements/Newsletter';
import Footer from '../PageElements/Footer';
import Showcase from '../PageElements/Showcase';
import ScrollToTop from '../PageElements/Scroll';

function LandingPage() {
    return (
        <div className=''>
            <Hero/>
            <FeaturesSection/>
            <Showcase/>
            <Newsletter/>
            <Footer/>   
            <ScrollToTop/>         
        </div>
    )
}

export default LandingPage
