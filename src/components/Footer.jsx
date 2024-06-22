// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { logoBree } from "../assets";
import { SectionWrapper } from "../hoc";
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#white', padding: '20px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={logoBree} alt='logo' style={{ width: '100px', marginBottom: '10px' }} />
          <p style={{ margin: 0, color: 'black', fontWeight: 'bold' }}>My Skin. My Singularity.</p>
          <p style={{ margin: 0, color: 'gray' }}>France | USA</p>
        </div>
        <div>
          <h3 style={{ margin: 0, color: 'black', fontWeight: 'bold' }}>About</h3>
          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
            <li style={{ marginBottom: '5px' }}><Link to="/" style={{ color: 'gray', textDecoration: 'none' }}>Mission</Link></li>
            <li style={{ marginBottom: '5px' }}><Link to="/story" style={{ color: 'gray', textDecoration: 'none' }}>Story</Link></li>
            <li style={{ marginBottom: '5px' }}><Link to="/privacy-policy" style={{ color: 'gray', textDecoration: 'none' }} 
            link="/privacy-policy"
            target="_blank">Privacy</Link>
            </li>
            <li style={{ marginBottom: '5px' }}><Link to="/bree" style={{ color: 'gray', textDecoration: 'none' }}>Bree</Link></li>
          </ul>
        </div>
        <div>
          <h3 style={{ margin: 0, color: 'black', fontWeight: 'bold' }}>Find Us</h3>
          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
            <li style={{ marginBottom: '5px' }}><a href="https://whatsapp.com" target="_blank" style={{ color: 'gray', textDecoration: 'none' }}>Whatsapp</a></li>
            <li style={{ marginBottom: '5px' }}><a href="https://reddit.com" target="_blank" style={{ color: 'gray', textDecoration: 'none' }}>Reddit</a></li>
            <li style={{ marginBottom: '5px' }}><a href="https://tiktok.com" target="_blank" style={{ color: 'gray', textDecoration: 'none' }}>TikTok</a></li>
            <li style={{ marginBottom: '5px' }}><a href="https://instagram.com" target="_blank" style={{ color: 'gray', textDecoration: 'none' }}>Instagram</a></li>
            <li style={{ marginBottom: '5px' }}><a href="https://facebook.com" target="_blank" style={{ color: 'gray', textDecoration: 'none' }}>Facebook</a></li>
          </ul>
        </div>
        <div>
          <h3 style={{ margin: 0, color: 'black', fontWeight: 'bold' }}>Chat With Bree</h3>
          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
            <li style={{ marginBottom: '5px' }}><a href="https://bree.health" target="_blank" style={{ color: 'gray', textDecoration: 'none' }}>Bree</a></li>
            <li style={{ marginBottom: '5px' }}><a href="https://whatsapp.com" target="_blank" style={{ color: 'gray', textDecoration: 'none' }}>Whatsapp</a></li>
            <li style={{ marginBottom: '5px' }}><a href="https://instagram.com" target="_blank" style={{ color: 'gray', textDecoration: 'none' }}>Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default SectionWrapper(Footer, "Footer");