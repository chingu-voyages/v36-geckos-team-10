import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import Saly from '../assets/Other 12.svg'

export default function Example() {
    return (
        <>
      <div className="bg-gray-50 h-screen">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">Start your free trial today.</span>
            <p className="my-6 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.
              </p>
            <div className="inline-flex rounded-md shadow">
            <Link to="/Workspace">
              <a
                href="/"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </a>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
          
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
  