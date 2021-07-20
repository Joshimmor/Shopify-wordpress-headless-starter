
import Navbar from "./Navbar";
import { useState, useEffect } from 'react';
import Footer from "./Footer";

const layoutWrapper = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
  };

const Layout = ({children}) => {
    return(
        <div style={layoutWrapper}>
            <Navbar size={useWindowSize()}/>
            {children}
            <Footer/>
        </div>
    )
}

//Window Resizing Hook
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
export default Layout;