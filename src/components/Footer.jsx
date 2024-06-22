import React from 'react';
import { Link } from 'react-router-dom';
import { logoBree } from "../assets";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start px-4 sm:px-0">
        <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
          <img src={logoBree} alt='logo' className="w-[100px] mb-2" />
          <p className="m-0 text-black font-bold">My Skin. My Singularity.</p>
          <p className="m-0 text-gray-600">France | USA</p>
        </div>
        <div className="mb-4 sm:mb-0">
          <h3 className="m-0 text-black font-bold">About</h3>
          <ul className="list-none p-0 mt-2 text-center sm:text-left">
            <li className="mb-1"><Link to="/" className="text-gray-600 no-underline">Mission</Link></li>
            <li className="mb-1"><Link to="/story" className="text-gray-600 no-underline">Story</Link></li>
            <li className="mb-1"><Link to="/privacy-policy" className="text-gray-600 no-underline" target="_blank">Privacy</Link></li>
            <li className="mb-1"><Link to="/bree" className="text-gray-600 no-underline">Bree</Link></li>
          </ul>
        </div>
        <div className="mb-4 sm:mb-0">
          <h3 className="m-0 text-black font-bold">Find Us</h3>
          <ul className="list-none p-0 mt-2 text-center sm:text-left">
            <li className="mb-1"><a href="https://whatsapp.com" target="_blank" className="text-gray-600 no-underline">Whatsapp</a></li>
            <li className="mb-1"><a href="https://reddit.com" target="_blank" className="text-gray-600 no-underline">Reddit</a></li>
            <li className="mb-1"><a href="https://tiktok.com" target="_blank" className="text-gray-600 no-underline">TikTok</a></li>
            <li className="mb-1"><a href="https://instagram.com" target="_blank" className="text-gray-600 no-underline">Instagram</a></li>
            <li className="mb-1"><a href="https://facebook.com" target="_blank" className="text-gray-600 no-underline">Facebook</a></li>
          </ul>
        </div>
        <div>
          <h3 className="m-0 text-black font-bold">Chat With Bree</h3>
          <ul className="list-none p-0 mt-2 text-center sm:text-left">
            <li className="mb-1"><a href="https://bree.health" target="_blank" className="text-gray-600 no-underline">Bree</a></li>
            <li className="mb-1"><a href="https://whatsapp.com" target="_blank" className="text-gray-600 no-underline">Whatsapp</a></li>
            <li className="mb-1"><a href="https://instagram.com" target="_blank" className="text-gray-600 no-underline">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "Footer");
