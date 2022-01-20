import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaTimes, FaLock, FaGoogle, FaTwitter, FaGithub, FaEye} from 'react-icons/fa';
import { Link } from "react-router-dom";
// import logo from '../assets/logo.jpg';

export default function SignUp() {
  const [open, setOpen] = useState(false)
  const [showpass, setShowPass] = useState(false)

  return (
      <div className=" z-50">
                  <button
                      type="button"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      onClick={() => setOpen(true)}
                    >
                      Get started
                    </button>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <FaTimes className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  
            <div className="">
              {/* BODY */}
              <div className="">
                <div className="p-2 2xl:mx-auto 2xl:container md:flex items-center justify-center">
                    <div className=" md:hidden sm:mb-8 mb-6">
                       {/* logo */}
                    </div>
                    <div className="bg-white w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                        <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
                            Login to your account
                        </p>
                        <p tabIndex={0} className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
                            Dont have account?{" "}
                            <a href="/" className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer">
                                {" "}
                                Sign up here
                            </a>
                        </p>
                        <button aria-label="Continue with google" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 flex items-center w-full mt-10 hover:bg-gray-100">
                        <FaGoogle className='text-green-600' />
                            <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                        </button>
                        <button aria-label="Continue with github" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 flex items-center w-full mt-4 hover:bg-gray-100">
                           
                            <FaGithub />
                            <p className="text-base font-medium ml-4 text-gray-700">Continue with Github</p>
                        </button>
                        <button aria-label="Continue with twitter" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 flex items-center w-full mt-4 hover:bg-gray-100">
                            
                            <FaTwitter className='text-blue-600' />
                            <p className="text-base font-medium ml-4 text-gray-700">Continue with Twitter</p>
                        </button>
                        <div className="w-full flex items-center justify-between py-5">
                            <hr className="w-full bg-gray-400" />
                            <p className="text-base font-medium leading-4 px-2.5 text-gray-500">OR</p>
                            <hr className="w-full bg-gray-400" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Email{" "}
                            </label>
                            <input id="email" aria-labelledby="email" type="email" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="e.g: john@gmail.com " />
                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="myInput" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Password{" "}
                            </label>
                            <div className="relative flex items-center justify-center">
                                <input id="myInput" type={showpass ? "text" : "password"} className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                <div onClick={()=>setShowPass(!showpass)} className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    <div id="show">
                                    <FaEye className="icon icon-tabler " />
                                    </div>
                                    <div id="hide" className="hidden">
                                        <FaEye className="icon icon-tabler " />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                        <Link className="" to='/Theme'>
                            <button className="group relative focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <FaLock className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                Create my account
                            </button>
                          </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
                       {/* <Link className="" to='/Theme'>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <FaLock className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                    Sign in
                                </button>
                        </Link> */}
                           
                    {/* sign in form end */}
                    </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
  )
}
