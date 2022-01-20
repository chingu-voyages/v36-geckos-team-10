import React from "react";
import GroupPic from '../assets/Group-736.png'
import GroupPic2 from '../assets/Group-740.png'

const About2 = () => {
    return (
        <div className="max-w-7xl 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="lg:w-10/12 w-full">
                <h2 className=" text-3xl font-bold lg:text-4xl leading-7 text-indigo-600 hover:text-indigo-800 cursor-pointer">About</h2>
                <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">We are here to make great design accessible and delightfull for everyone</h2>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi nesciunt iusto beatae maxime architecto corporis sit, magnam possimus sequi hic recusandae veritatis veniam praesentium repellat maiores neque mollitia similique! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati mollitia eius tenetur ad, modi at consectetur labore exercitationem nobis quaerat sapiente unde suscipit, vero explicabo illo aspernatur cumque laudantium reprehenderit?</p>
            </div>

            <div className="lg:mt-14 sm:mt-10 mt-12">
                <img className="lg:block  w-full" src={GroupPic} alt="Group of people Chilling" />
               
            </div>

            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi nesciunt iusto beatae maxime architecto corporis sit, magnam possimus sequi hic recusandae veritatis veniam praesentium repellat maiores neque mollitia similique! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati mollitia eius tenetur ad, modi at consectetur labore exercitationem nobis quaerat sapiente unde suscipit, vero explicabo illo aspernatur cumque laudantium reprehenderit?</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque tenetur iure nemo dolores nisi, ratione commodi rem. Natus nihil impedit fuga adipisci quis deserunt, vel et est excepturi animi.</p>
                </div>
                <div className="lg:flex items-center w-full lg:w-1/2 ">
                    <img className="lg:block  w-full" src={GroupPic2} alt="people discussing on board" />
                    {/* <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" /> */}
                </div>
            </div>
        </div>
    );
};

export default About2;
