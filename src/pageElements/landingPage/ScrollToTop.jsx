import { useEffect, useState, Fragment } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <Fragment>
      {showButton && (
        <button onClick={() => scrollToTop()} className="z-50
        fixed 
        p-3 
        text-white 
        transition 
        duration-600 
        ease-in-out 
        bg-indigo-600
        rounded-md 
        bottom-4
        right-4
        focus:outline-none">
        <FaAngleUp/>
        </button>
        
      )}
    </Fragment>
  );
};

export default ScrollToTop;