import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, MeetBree, HomeBody, Faq, AboutFooter, PrivacyPolicy, Footer, Story } from "./components";

const App = () => {
  const location = useLocation();

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
        <Route path='/contact' element={<Contact />} />
     
      </Routes>
      {location.pathname === '/meet-bree' && (  /* Fixing the syntax here */
        <div style={{ backgroundColor: '#F5EADC', minHeight: '60vh' }}>
          <MeetBree />
        </div>
      )}
      {/* {!excludedPaths.includes(location.pathname) && (
        // <div style={{ backgroundColor: '#F9F6F1' }}>
        //   <About />
        //   <div style={{ backgroundColor: '#FFFEF2' }}>
        //     <HomeBody />
        //   </div>
        //   <Faq />
        //   <AboutFooter />
        //   <Footer />
        // </div>
      )} */}
      {/* {location.pathname === '/story' && (
        <div style={{ backgroundColor: '#FFFEF2', minHeight: '100vh' }}>
          <Navbar />
          <Story />
          <Experience />
          <Contact />
        </div>
      )} */}

    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
