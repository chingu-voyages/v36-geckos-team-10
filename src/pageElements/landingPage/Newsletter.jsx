import React from 'react';
import banner1 from '../../assets/Other 12.svg';
function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 mt-20 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden">
              
            {/* Background illustration */}
            <div className="absolute right-12 bottom-12 pointer-events-none hidden lg:block" >
             <img src={banner1} alt="" className='w-72 h-auto' />
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center w-full lg:text-left">
                <h3 className="h2 text-white mb-2 text-xl text-indigo-200">Powering your business</h3>
                <p className="text-gray-300 text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center w-full mx-auto lg:mx-0">
                    <input type="email" className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email…" />
                    <button
                      type="button"
                      className="max-w-lg flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Subscribe
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3">7 days free trial. No credit card required.</p>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
