import React from 'react'
import Hero from '../components/Hero'
import FeaturesSection from '../components/FeaturesSection'
import PicGridSection from '../components/PicGridSection';
import Footer from '../components/Footer';
import Transistion from '../components/Transistion';

function LandingPage() {
    return (
        <div className=''>
            <Hero/>
            <FeaturesSection/>
            <PicGridSection/>
            <Transistion/>
            <Footer/>            
        </div>
    )
}

export default LandingPage
