import React from 'react'
import { ShowcaseComponent } from '../../components/ShowcaseComponent';
import { landingPageObject as content } from "../../features/landingPageObject";

const Showcase = () => {
    return (
      <div className="mt-12 max-w-7xl mx-auto " id='showcase'>    
        <section className="pb-20 py-10 relative">
          <div className="justify-center text-center flex flex-wrap py-8">
            <div className="w-full md:w-6/12 px-12 md:px-4">
                <h2 className="font-semibold text-4xl">Why Use Easy Web?</h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
                    Learn all the reasons why you should be using Easy Web
                </p>
            </div>
          </div>
        {content.showcase.map((item, index) => <ShowcaseComponent key={index} heading={item.title} content={item.content} image={item.banner} icon={item.icon} num={index}/>)}
        </section>
      </div>
    );
}

export default Showcase;
