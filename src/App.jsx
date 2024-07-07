import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, MeetBree, HomeBody, Faq, AboutFooter, PrivacyPolicy, Footer, Story } from "./components";
import useScrollToTop from "./hooks/useScrollToTop";
const App = () => {
  const location = useLocation();
  useScrollToTop();

  // List of paths that should only show the main component and not the rest
  const excludedPaths = ['/privacy-policy', '/contact', '/meet-bree', '/story'];

  return (
    <>
      {!excludedPaths.includes(location.pathname) && (
        <div style={{ backgroundColor: '#000000' }}> {/* Set the desired background color */}
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />

     
      </Routes>
      {!excludedPaths.includes(location.pathname) && (
        <div style={{ backgroundColor: '#F8EFCD' }}>
          <About />
          <div style={{ backgroundColor: '#FFFEF2' }}>
            <HomeBody />
          </div>
          <Faq />
          <AboutFooter />
          <div style={{ backgroundColor: '#FFFEF2' }}>
            <Footer />
          </div>
          {/* <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div> */}
        </div>
      )}
      {location.pathname === '/story' && (
        <div style={{ backgroundColor: '#FFFEF2', minHeight: '100vh' }}>
          <Navbar />
          <Story />
          <div style={{ backgroundColor: '#FAF5EA'}}>
          <Experience />

          </div>
          <Footer />
        </div>
      )}
   {location.pathname === '/meet-bree' && (  
        <div>
          <Navbar />
          <MeetBree />
        </div>
      )}
       {location.pathname === '/contact' && (  
        <div style={{ backgroundColor: '#FFFEF2'}}>
          <Navbar />
          <Contact />
        </div>
      )}
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
