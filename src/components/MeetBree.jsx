import React, { useState, useEffect } from "react";
import Sidebar from "../components/chat/ChatSidebar";
import Chat from "../components/chat/Chat";
import '../MeetBree.css';
import Input from "../components/chat/ChatInput";
import { fetchData, getMemoryData } from '../services/api';
import LoginRegister from "./LoginRegister/LoginRegister";
import { Modal, Button } from '@mui/material';
import { logoBree } from "../assets";

const MeetBree = (props) => {
  const [memory, setMemory] = useState();
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true); // New state for sign-in/sign-up toggle
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // New state for mobile view
  const [showForm, setShowForm] = useState(null); // State to show login/register form

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
  };

  const showSignUpForm = () => {
    setShowForm('signup');
    setIsOpen(false);
  };

  const closeForm = () => {
    setShowForm(null);
  };

  return (
    <div className={`meet-bree-container ${isOpen ? "sidebar-open" : ""}`}>
      {currentStep === 1 ? (
        <div className="landing-screen">
          <div className="landing-content">
            <img src={logoBree} alt="Bree Logo" style={{ width: '700px' }} />
            <p style={{ color: 'black', fontFamily: 'Tomato Grotesk', marginBottom: 50 }}>Your Personal Skin Assistant</p>
            <Button variant="contained" onClick={handleNext} style={{ width: 200, height: 50, borderRadius: 50, background: '#F5EADC', color: 'black', fontFamily: 'Tomato Grotesk' }}>
              Next
            </Button>
          </div>
        </div>
      ) : (
        <div className="meet-bree-container">
          <Button className="menu-button" onClick={toggleSidebar} style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 1001 }}>
            {isOpen ? "Close" : "Menu"}
          </Button>
          <div className={`sidebar--container ${isOpen ? "open" : ""}`}>
            <div className="sidebar">
              <img className="usi-img" src="/images/usi.png" alt="usi-img" />
              <img className="usi" src="/images/usi-text.png" alt="usi-img" />
              <p style={{ fontFamily: 'Tomato Grotesk', fontSize: '15px', textAlign: 'start', marginTop: '20px', color: 'black', justifyContent: 'left' }}>
                Enhance Your Bree Experience By<br /> Creating An Account.
                Enjoy Seamless<br /> Integration Across All Our Channels,<br /> With Your Chat History Saved And<br /> Accessible Anytime, Anywhere.
                <br /><br /><strong>Plus, It's All Completely Free!</strong>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
                {isMobile ? (
                  <>
                    <Button variant="contained" style={{ fontFamily: 'Tomato Grotesk', marginBottom: '10px', width: 200, backgroundColor: '#EDE6E3', color: 'black', fontWeight: 'bold', borderRadius: 20 }} onClick={showSignUpForm}>
                      Sign Up
                    </Button>
                    <Button variant="contained" color="primary" style={{ fontFamily: 'Tomato Grotesk', fontWeight: 'bold', marginBottom: '10px', width: 200, backgroundColor: '#ffff', color: 'black', borderRadius: 20 }} onClick={showLoginForm}>
                      Log In
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="contained" style={{ fontFamily: 'Tomato Grotesk', marginBottom: '10px', width: 200, backgroundColor: '#EDE6E3', color: 'black', fontWeight: 'bold', borderRadius: 20 }} onClick={() => { handleOpen(); toggleSignIn(false); }}>
                      Sign Up
                    </Button>
                    <Button variant="contained" color="primary" style={{ fontFamily: 'Tomato Grotesk', fontWeight: 'bold', marginBottom: '10px', width: 200, backgroundColor: '#ffff', color: 'black', borderRadius: 20 }} onClick={() => { handleOpen(); toggleSignIn(true); }}>
                      Log In
                    </Button>
                  </>
                )}
                <Button variant="contained" style={{ fontFamily: 'Tomato Grotesk', width: 200, backgroundColor: '#ffff', color: '#FFDCBF', borderRadius: 20 }}>
                  Not Now
                </Button>
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
        <div className="mobile-form">
          <LoginRegister mobileMode={true} showSignIn={showForm === 'login'} closeForm={closeForm} />
        </div>
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
