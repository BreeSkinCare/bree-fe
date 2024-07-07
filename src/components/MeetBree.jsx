import React, { useState, useEffect } from "react";
import Sidebar from "../components/chat/ChatSidebar";
import Chat from "../components/chat/Chat";
import '../MeetBree.css';
import Input from "../components/chat/ChatInput";
import { fetchData, getMemoryData } from '../services/api';
import LoginRegister from "./LoginRegister/LoginRegister";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { logoBree } from "../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Box, IconButton, Paper } from "@mui/material";
import Fingerprint from '@mui/icons-material/Fingerprint';
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const MeetBree = (props) => {
  const [memory, setMemory] = useState();
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true); // New state for sign-in/sign-up toggle
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // New state for mobile view
  const [showForm, setShowForm] = useState(null); // State to show login/register form
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);
  const [isLogInClicked, setIsLogInClicked] = useState(false);
    const [showMobileModal, setShowMobileModal] = useState(false);

  const addMessageToConversation = (message) => {
    if (memory != null) {
      setMemory((prevMemory) => [...prevMemory, message]);
    } else {
      setMemory(message);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.querySelector('.meet-bree-container').classList.toggle('sidebar-open', !isOpen);
  };

  const launch = async () => {
    try {
      let memoryData = await getMemoryData();
      if (memoryData !== null) {
        setMemory(memoryData);
      } else {
        const postRes = await fetchData("hii");
        memoryData = await getMemoryData();
        setMemory(memoryData);
      }
    } catch (error) {
      console.error("Error fetching or setting data:", error);
    }
  };

  useEffect(() => {
    launch();
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleNext = () => setCurrentStep(2);

  const toggleSignIn = (signInState) => {
    setShowSignIn(signInState);
  };

  const showLoginForm = () => {
    setShowForm('login');
    setIsOpen(false);
    if (isMobile) setShowMobileModal(true); 
  };

  const showSignUpForm = () => {
    setShowForm('signup');
    setIsOpen(false);
    if (isMobile) setShowMobileModal(true); 
  };

  const closeForm = () => {
    setShowForm(null);
    setShowMobileModal(false); 
  };


  const handleSignUpClick = () => {
    setIsSignUpClicked(true);
    setIsLogInClicked(false);
    handleOpen();
    toggleSignIn(false);
  };

  const handleLogInClick = () => {
    setIsLogInClicked(true);
    setIsSignUpClicked(false);
    handleOpen();
    toggleSignIn(true);
  };

  return (

    <div className={`meet-bree-container ${isOpen ? "sidebar-open" : ""}`}>
      {currentStep === 1 ? (
      
        <div className="landing-screen">
          <motion.div variants={textVariant()}>
          <div className="landing-content">
          
            <img src={logoBree} alt="Bree Logo" />
            <p style={{ color: 'black', fontFamily: 'Tomato Grotesk', marginBottom: 100 }}>Your Personal Skin Assistant</p>
            <Button variant="contained" onClick={handleNext} style={{ width: 200, height: 50, borderRadius: 50, background: '#F5EADC', color: 'black', fontFamily: 'Tomato Grotesk Thin',fontSize:15 }} >
              Next
            </Button>
           
          </div>
          </motion.div>
        </div>

      ) : (
        <div className="meet-bree-container">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="menu-button"
            onClick={toggleSidebar}
            style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 1001, cursor: 'pointer' }}
          />
          <div className={`sidebar--container ${isOpen ? "open" : ""}`}>
            <div className="sidebar">
            {/* <Paper
              sx={{
                width: '80%',
                height: 'auto',
                backgroundColor: '#E3D6C6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                borderRadius: '10px',
                padding: '10px'
              }}
              className="usi"
            >
              <Avatar
                sx={{ width: 56, height: 56, marginRight: '10px' }}
                src="/images/usi-text.png"
                alt="usi-img"
              />pn
              <div>
                <p style={{ margin: 0, fontFamily: 'Tomato Grotesk', fontSize: '12px' }}>Email</p>
                <p style={{ margin: 0, fontFamily: 'Tomato Grotesk', fontSize: '16px' }}>First Name</p>
              </div>
            </Paper> */}
              <p  style={{ fontFamily: 'Tomato Grotesk', fontSize: '15px', textAlign: 'start', marginTop: '200px', color: 'black', justifyContent: 'left' }}>
                Enhance Your Bree Experience By<br /> Creating An Account.
                Enjoy Seamless<br /> Integration Across All Our Channels,<br /> With Your Chat History Saved And<br /> Accessible Anytime, Anywhere.
                <br /><br /><strong>Plus, It's All Completely Free!</strong>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start',justifyContent:'left', marginTop: '100px' }}>
                {isMobile ? (
                  <>
                  <IconButton sx={{fontFamily:'Tomato Grotesk',fontSize:20}} aria-label="fingerprint" color="white" onClick={showSignUpForm}>
                    <Fingerprint sx={{fontFamily:'Tomato Grotesk'}}/>
                    {/* <Button variant="contained" style={{ fontFamily: 'Tomato Grotesk', marginBottom: '10px', width: 250, backgroundColor: '#EDE6E3', color: 'black', borderRadius: 10 }} onClick={() => { handleOpen(); toggleSignIn(false); }}> */}
                      Sign Up
                    {/* </Button> */}
                  </IconButton>
                  <IconButton sx={{fontFamily:'Tomato Grotesk',fontSize:20}} aria-label="fingerprint" color="white"  onClick={showLoginForm}>
                    <Fingerprint sx={{fontFamily:'Tomato Grotesk'}}/>
                    {/* <Button variant="contained" style={{ fontFamily: 'Tomato Grotesk', marginBottom: '10px', width: 250, backgroundColor: '#EDE6E3', color: 'black', borderRadius: 10 }} onClick={() => { handleOpen(); toggleSignIn(false); }}> */}
                      Log In
                    {/* </Button> */}
                  </IconButton>

{/* 
                    <Button variant="contained" style={{ fontFamily: 'Tomato Grotesk', marginBottom: '10px', width: 200, backgroundColor: '#EDE6E3', color: 'black', fontWeight: 'bold', borderRadius: 20 }} onClick={showSignUpForm}>
                      Sign Up
                    </Button>
                    <Button variant="contained" color="primary" style={{ fontFamily: 'Tomato Grotesk', fontWeight: 'bold', marginBottom: '10px', width: 200, backgroundColor: '#ffff', color: 'black', borderRadius: 20 }} onClick={showLoginForm}>
                      Log In
                    </Button> */}
                  </>
                ) : (
                  <>
                <IconButton
                        sx={{
                          fontFamily: 'Tomato Grotesk',
                          fontSize: 20,
                          color: isSignUpClicked ? '#black' : 'grey'
                        }}
                        aria-label="sign up"
                        onClick={handleSignUpClick}
                      >
                        <Fingerprint
                          sx={{ fontFamily: 'Tomato Grotesk', color: isSignUpClicked ? '#black' : 'grey' }}
                        />
                        Sign Up
                      </IconButton>

                      <IconButton
                        sx={{
                          fontFamily: 'Tomato Grotesk',
                          fontSize: 20,
                          color: isLogInClicked ? '#black' : 'grey'
                        }}
                        aria-label="log in"
                        onClick={handleLogInClick}
                      >
                        <Fingerprint
                          sx={{ fontFamily: 'Tomato Grotesk', color: isLogInClicked ? '#black' : 'grey', fontWeight: isLogInClicked ? 'bold' : '10px' }}
                        />
                        Log In
                      </IconButton>

                    {/* <Button variant="contained" color="primary" style={{ fontFamily: 'Tomato Grotesk', marginBottom: '10px', width: 250, backgroundColor: '#ffff', color: 'black', borderRadius: 10 }} onClick={() => { handleOpen(); toggleSignIn(true); }}>
                      Log In
                    </Button> */}
                  </>
                )}
                                  {/* <IconButton sx={{fontFamily:'Tomato Grotesk',fontSize:20}} aria-label="fingerprint" color="white" >
                    <Fingerprint sx={{fontFamily:'Tomato Grotesk'}}/> */}
                    {/* <Button variant="contained" style={{ fontFamily: 'Tomato Grotesk', marginBottom: '10px', width: 250, backgroundColor: '#EDE6E3', color: 'black', borderRadius: 10 }} onClick={() => { handleOpen(); toggleSignIn(false); }}> */}
                      {/* Not Now */}
                    {/* </Button> */}
                  {/* </IconButton> */}
                {/* <Button variant="outlined" style={{ fontFamily: 'Tomato Grotesk', width: 250, backgroundColor: '#ffff', color: 'black', borderRadius: 10 }}>
                  Not Now
                </Button> */}
              </div>
            </div>
          </div>
          <div className="main-div">
            <Chat messages={memory} />
            <Input addMessageToConversation={addMessageToConversation} />
          </div>
        </div>
      )}

      {isMobile && showForm && (
          <Modal
          open={showMobileModal}
          onClose={closeForm}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
    
        <div className="mobile-form">
          <LoginRegister mobileMode={true} showSignIn={showForm === 'login'} closeForm={closeForm} />
        </div>
        </Modal>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LoginRegister toggleSignIn={toggleSignIn} showForm={showForm} />
      </Modal>
    </div>
  );
};

export default MeetBree;
