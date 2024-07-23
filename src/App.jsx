import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  HomeBody,
  Faq,
  AboutFooter,
  PrivacyPolicy,
  Footer,
  Story,
  MeetBree,
  SecondaryBody,
} from "./components";

const scrollToTop = () => {
  document.documentElement.style.scrollBehavior = 'auto'; // Disable smooth scrolling
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  setTimeout(() => {
    document.documentElement.style.scrollBehavior = ''; // Re-enable smooth scrolling
  }, 0);
};

const App = () => {
  const location = useLocation();

  const excludedPaths = ['/privacy-policy', '/contact', '/meet-bree', '/story'];

  // Ensure the page starts at the top
  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <>
      {!excludedPaths.includes(location.pathname) && (
        <div style={{ backgroundColor: '#000000' }}>
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Add other routes as needed */}
      </Routes>
      {!excludedPaths.includes(location.pathname) && (
        <div style={{ backgroundColor: '#FFFEF2' }}>
          <About />
          <HomeBody />
          <SecondaryBody />
          <div style={{ backgroundColor: '#FFFEF2' }}>
          <Faq />
          <AboutFooter />
          </div>
          <div style={{ backgroundColor: '#FAF5EA' }}>
            <Footer />
          </div>
        </div>
      )}
      {location.pathname === '/story' && (
        <div style={{ backgroundColor: '#FFFEF2', minHeight: '100vh' }}>
          <Navbar />
          <Story />
          <Experience />
          <div style={{ backgroundColor: '#FAF5EA' }}>
            <Footer />
          </div>
        </div>
      )}
      {location.pathname === '/meet-bree' && (
        <div>
          <Navbar />
          <MeetBree />
        </div>
      )}
      {location.pathname === '/contact' && (
        <div style={{ backgroundColor: '#FFFEF2' }}>
          <Navbar />
          <Contact />
          <Footer />
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
