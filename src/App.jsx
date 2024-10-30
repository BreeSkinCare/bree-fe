import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
  document.documentElement.style.scrollBehavior = 'auto';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  setTimeout(() => {
    document.documentElement.style.scrollBehavior = '';
  }, 0);
};

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /meet-bree if the initial path is "/"
    if (location.pathname === '/') {
      navigate('/meet-bree', { replace: true });
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <>
      {location.pathname !== '/meet-bree' && (
        <div style={{ backgroundColor: '#000000' }}>
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Redirected route for meet-bree */}
        <Route path="/meet-bree" element={
          <div style={{ backgroundColor: '#F5EADC', minHeight: '60vh' }}>
            <MeetBree />
          </div>
        }/>
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
