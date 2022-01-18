import banner1 from '../assets/Other 03.svg';
// import BtnStyled from "./BtnStyled";
import SignUp from '../containers/SignUp';


export default function Hero() {

  
  return (
    <div className="relative overflow-hidden z-0">
      <div className="max-w-7xl mx-auto ">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
    

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Make your website </span>{' '}
              
                <span className="block text-indigo-600 xl:inline"> wonderful</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                
                <SignUp className=""/>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className=" lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-52 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
           src={banner1} alt=""
        />
      </div>
      
    </div>
  )
}
