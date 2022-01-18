import React from 'react'
import Hero from '../components/Hero'
import FeaturesSection from '../components/FeaturesSection'
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import WhyUs from '../components/WhyUs';

function LandingPage() {
    return (
        <div className=''>
            <Hero/>
            <FeaturesSection/>
            <WhyUs/>
            <Newsletter/>
            <Footer/>            
        </div>
    )
}

export default LandingPage
