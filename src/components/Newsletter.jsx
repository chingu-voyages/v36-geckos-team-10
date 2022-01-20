import React from "react";
import newsletter from '../assets/newsletter-1.png'

export default function Home() {
    return (
        <>
            <div className="p-6 max-w-7xl mb-24 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
                <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                    <img src={newsletter} alt="" className="h-full xl:w-full lg:w-1/2 w-full " />
                </div>
                <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe</h1>
                    <p className="text-base leading-normal text-gray-600 text-center xl:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus, suscipit quod similique dicta magni id, iusto quibusdam.</p>
                    <div className="flex items-stretch mt-12">
                        <input className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                        <button className="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
                    </div>
                </div>
            </div>
        </>
    );
}
