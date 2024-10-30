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
  const [currentStep, setCurrentStep] = useState(1); // New state to track the current step

  const addMessageToConversation = (message) => {
    if (memory != null) {
      setMemory((prevMemory) => [...prevMemory, message]);
    } else {
      setMemory(message);
    }
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
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleNext = () => setCurrentStep(2); // Move to the next step

  return (
    <div>
      {/* {currentStep === 1 ? (
        // Initial landing screen
        <div className="landing-screen">
          <div className="landing-content" style={{ textAlign: 'center',marginTop:100 }}>
            <img src={logoBree} alt="Bree Logo" style={{ width: '700px'}} /> 
            <p style={{color:'black',fontFamily:'Tomato Grotesk',marginBottom:50}}>Your Personal Skin Assistant</p>
            <Button variant="contained" onClick={handleNext} style={{width:200,height:50,borderRadius:50,background:'#F5EADC',color:'black',fontFamily:'Tomato Grotesk'}}>
              Next
            </Button>
          </div>
        </div>
      ) : ( */}
        // Chat interface with sidebar
        <div className="meet-bree-container">
          <div className="sidebar--container">
            <div className="sidebar" style={{alignContent:'center',alignItems:'center',flexDirection:'column',justifyContent:'center',display:'flex'}}>
              {/* <img src={logoBree} alt="Bree Logo" className="usi-img" /> */}
              <p style={{ fontFamily: 'Tomato Grotesk', fontSize: '15px', textAlign: 'start', marginTop: '20px',color:'black',justifyContent:'left' }}>
                Enhance Your Bree Experience By<br></br> Creating An Account.
                Enjoy Seamless<br></br> Integration Across All Our Channels,<br></br> With Your Chat History Saved And<br></br> Accessible Anytime, Anywhere.
                <br></br><br></br><strong>Plus, It's All Completely Free!</strong>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' ,}}>
                <Button variant="contained" onClick={handleOpen} style={{fontFamily:'Tomato Grotesk', marginBottom: '10px',width:200,backgroundColor:'#EDE6E3',color:'black',fontWeight:'bold',borderRadius:20 }}>
                  Sign Up
                </Button>
                <Button variant="contained" color="primary" onClick={handleOpen} style={{fontFamily:'Tomato Grotesk',fontWeight:'bold', marginBottom: '10px',width:200,backgroundColor:'#ffff',color:'black',borderRadius:20 }}>
                  Log In
                </Button>
                <Button variant="contained" onClick={handleNext} style={{fontFamily:'Tomato Grotesk',width:200, backgroundColor:'#ffff',color:'#FFDCBF',borderRadius:20}} >
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
      {/* )} */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LoginRegister />
      </Modal>
    </div>
  );
};

export default MeetBree;
