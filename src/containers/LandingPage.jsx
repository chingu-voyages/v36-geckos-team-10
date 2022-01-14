import React from 'react'
import Hero from '../components/Hero'
import FeaturesSection from '../components/FeaturesSection'
import PicGridSection from '../components/PicGridSection';
import Footer from '../components/Footer';

function LandingPage() {
    return (
        <div className='landing-page'>
            <Hero/>
            <FeaturesSection/>
            <PicGridSection/>
            <Footer/>            
        </div>
    )
}

export default LandingPage
