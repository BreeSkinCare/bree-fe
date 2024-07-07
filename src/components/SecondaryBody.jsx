import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import videoAnimation from '../animations/etalo-video.mp4';

import '../hero.css';

const SecondaryBody = () => {
  const videoRef = useRef(null);
  const [videoInView, setVideoInView] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVideoInView(true);
          if (videoRef.current) videoRef.current.play();
        } else {
          setVideoInView(false);
          if (videoRef.current) videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 style={{ display: 'flex', flex: 'start', marginBottom: 40, fontSize: 25 }} className={`${styles.sectionHeadTextAbout} text-center font-medium text-[25px] sm:text-[30px] mt-20`}>
          What Sets Us Apart? <br />
        </h1>
      </motion.div>
      <div className="flex flex-col sm:flex-row justify-start items-start min-h-[20vh] text-start font-medium px-4 sm:px-0">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-black text-[25-px] sm:text-[40px] mt-4 sm:mt-0"
        >
          <strong style={{ fontWeight: 'bolder' }}>A Personal Skin Assistant for Everyone, And Completely Free.</strong> <span className="text-[#756E6E]">Bree is redefining new pathways to understand and care about the skin, empowering self-knowledge through actionable insights, based on singular data that reflects skin identity.</span>
        </motion.p>
      </div>

      <div className="video-wrapper" style={{ marginTop: 50 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: videoInView ? 1 : 0, scale: videoInView ? 1 : 0.9 }}
          transition={{ duration: 0.5 }}
          className="video-card" 
          style={{marginBottom:60}}
        >
          <div className="video-container">
            <video
              ref={videoRef}
              src={videoAnimation}
              loop
              className="video"
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
        
            />
          </div>
        </motion.div>

      </div>
      
    </>
  );
};

export default SectionWrapper(SecondaryBody, "secondaryBody");
