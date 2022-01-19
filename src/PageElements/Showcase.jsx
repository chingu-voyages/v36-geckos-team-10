import React from 'react'
import { FaAddressCard, FaBitcoin,FaChessKing} from 'react-icons/fa';
import { ShowcaseEl } from '../components/ShowcaseEl';
import { showcaseElements as items } from "../features/landingPageFeatures";

const Showcase = () => {
    return (
  <div className="mt-12 max-w-7xl mx-auto ">    
    <section className="pb-20 py-10 relative">    
    <div className="justify-center text-center flex flex-wrap py-8">
        <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Why Use Easy Web?</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
                Learn all the reasons why you should be using Easy Web
            </p>
        </div>
    </div>
    {items.map((el, index) => <ShowcaseEl key={index} heading={el.title} content={el.contents} image={el.banner} icon={el.faIcon} num={index} />)}
    </section>
  </div>
  )
}

export default Showcase;
