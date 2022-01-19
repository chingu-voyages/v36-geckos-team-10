import { NavLink } from "react-router-dom";
import Footer from '../PageElements/Footer';
import Saly from '../assets/Other 12.svg'

export default function Theme() {
    return (
        <>
      <div className="bg-gray-50 h-screen">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">Start your free trial today.</span>
            <p className="my-6 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam error neque iste reprehenderit, eius fuga porro voluptas incidunt quia sit magni dicta nemo autem nam cum ratione deserunt at?
              </p>
            <div className="inline-flex rounded-md shadow">
            <NavLink to="/Workspace" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Launch
            </NavLink>
            </div>           
          </h2>       
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <img src={Saly} alt="" className="h-96 w-auto"/>
          </div>          
        </div>
      </div>
      <Footer/>
</>
    )
  }
  