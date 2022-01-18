import React from 'react'
import banner1 from '../assets/Other 03.svg';
import { FaAddressCard, FaBitcoin,FaChessKing} from 'react-icons/fa';

const WhyUs = () => {
    return (
  <main className="mt-12 max-w-7xl mx-auto ">
    
    <section className="pb-20 py-10 relative">
    
    <div className="justify-center text-center flex flex-wrap py-8">
        <div className="w-full md:w-6/12 px-12 md:px-4"><h2 className="font-semibold text-4xl">Why Use Easy Web?</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
                Learn all the reasons why you should be using Easy Web
            </p>
        </div>
    </div>

    <div className="container mx-auto px-4 py-8">
        <div className="items-center flex flex-col md:flex-row">
            <div className="w-full md:w-4/12 mr-auto px-4 md:pt-0 my-0">
              <img src={banner1} alt="" />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-4">
                    <div
                            className="text-red-600 text-3xl p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
                    >
                        <FaAddressCard/>
                    </div>
                    <h3 className="text-3xl font-semibold">Clean Code</h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique pariatur eaque eos! Odio aut, quo ea minus sit deleniti placeat consectetur, sed quis, provident rerum vero qui perspiciatis laudantium dolorum.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="container mx-auto px-4 py-8">
        <div className="items-center flex flex-col md:flex-row-reverse">
            <div className="w-full md:w-4/12 mr-auto px-4 md:pt-0 my-0">
            <img src={banner1} alt="" />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-4">
                    <div
                            className="text-red-600 p-3 text-3xl text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
                    >
                        <FaBitcoin/>
                    </div>
                    <h3 className="text-3xl font-semibold">Export Feature</h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quisquam, in beatae saepe temporibus praesentium sed animi tempore rem, sit voluptates accusamus quam libero sapiente! Libero repudiandae quia fuga cum.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="container mx-auto px-4 py-8">
        <div className="items-center flex flex-col md:flex-row">
            <div className="w-full md:w-4/12 mr-auto px-4 md:pt-0 my-0">
            <img src={banner1} alt="" />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-4">
                    <div
                            className="text-red-600 p-3 text-center text-3xl inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
                    >
                        <FaChessKing/>
                    </div>
                    <h3 className="text-3xl font-semibold">Font Setup</h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae. A, facilis. Accusamus nesciunt labore ratione quisquam nostrum non. Sit doloremque, voluptates eum fuga asperiores ducimus impedit alias quaerat. Possimus.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
  </main>
    )
}

export default WhyUs;
