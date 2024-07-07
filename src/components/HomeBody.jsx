import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import videoAnimation from '../animations/etalo-video.mp4';
import '../hero.css';

const HomeBody = () => {
  const videoRef = useRef(null);
  const [isWindows, setIsWindows] = useState(navigator.userAgent.indexOf('Windows') > -1);
  const [videoInView, setVideoInView] = useState(false);

  const missionStyle = {
    fontSize: isWindows ? '30px' : '25px',
  };
  
  const boldStyle = {
    fontWeight: 'bold',
    fontSize: isWindows ? '40px' : '22px',
  };

  const headStyle = {
    fontSize: isWindows ? '26px' : '22px',
    marginTop: '20px',
    marginBottom: '150px',
    color: '#75756F',
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVideoInView(true);
          videoRef.current.play();
        } else {
          setVideoInView(false);
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadTextTittle} text-start font-light text-[25px] sm:text-[35px]`} style={missionStyle}> 
          Our Mission <br />
          <strong style={boldStyle}>Build New Pathways To Apprehend Skin Health</strong>
        </h1>
      </motion.div>
      <div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)} style={headStyle}
        >
          The technological innovations of this new era will result in radical behavioural shifts: We predict that
          the individual-level knowledge of the skin, the body’s largest organ, will lead the game.
        </motion.p>
      </div>
      <Box
        sx={{
          width: '100%',
          height: 600,
          borderRadius: 20,
          bgcolor: '#FAF5EA',
          marginBottom: 30,
          mt: 4,
        }}
      />
      <motion.div variants={textVariant()}>
        <h1 style={{ display: 'flex', flex: 'start' }} className={`${styles.sectionHeadTextAbout} text-center font-medium text-[25px] sm:text-[30px] mt-20`}>
          What sets us apart? <br />
        </h1>
      </motion.div>
      <div className="flex flex-col sm:flex-row justify-start items-start min-h-[20vh] text-start font-medium px-4 sm:px-0">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-black text-[30px] sm:text-[46px] mt-4 sm:mt-0"
        >
          <strong style={{ fontWeight: 'bold' }}>A Personal Skin Assistant for Everyone, and Completely Free.</strong> <span className="text-[#756E6E]">Bree is redefining new <br></br> Pathways to understand and care about the skin, empowering self-knowledge through actionable insights, based on singular data that reflects skin identity.</span>
        </motion.p>
      </div>

      <div className="video-wrapper" style={{ marginTop: 50 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: videoInView ? 1 : 0, scale: videoInView ? 1 : 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <video
            ref={videoRef}
            src={videoAnimation}
            loop
            className="video"
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
          />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(HomeBody, "homebody");
