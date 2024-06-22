import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import videoAnimation from '../animations/etalo-video.mp4';

const HomeBody = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
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
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={styles.sectionHeadTextAbout} style={{ fontSize: 25, textAlign: 'center', fontFamily: 'Tomato Grotesk Regular ', textAlign: 'left', alignItems: 'left' }}>Our Mission <br></br></h1>
        <h1 className={styles.sectionHeadTextAbout} style={{ fontSize: 35, textAlign: 'center', fontFamily: 'Tomato Grotesk Bold', textAlign: 'left', alignItems: 'left' }}><strong>Build New Pathways To Apprehend Skin Health</strong></h1>
      </motion.div>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', height: '20vh', textAlign: 'start', fontFamily: 'Raleway light' }}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          style={{ color: '#868686', fontSize: 20, fontFamily: 'Tomato Grotesk Regular', marginTop: 20 }}
        >
          The technological innovations of this new era will result in radical behavioural shifts: We predict that<br></br>
          the individual-level knowledge of the skin, the body’s largest organ, will lead the game.
        </motion.p>
      </div>
      <Box
        sx={{
          width: 1000,
          height: 500,
          borderRadius: 20,
          bgcolor: '#FAF5EA'
        }}
      />
      <motion.div variants={textVariant()}>
        <h1 className={styles.sectionHeadTextAbout} style={{ fontSize: 30, textAlign: 'center', fontFamily: 'Tomato Grotesk', textAlign: 'left', alignItems: 'left', position: "relative", marginTop: 120 }}>What sets us apart? <br></br></h1>
      </motion.div>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', height: '40vh', textAlign: 'start', fontFamily: 'Tomato Grotesk' }}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          style={{ color: 'black', fontSize: 35, fontFamily: 'Tomato Grotesk medium', marginTop: 20 }}
        >
          <strong>A Personal Skin Assistant for Everyone, and <br></br>
            Completely Free.</strong> <span style={{ color: '#756E6E' }}>Bree is redefining new <br></br>
            Pathways to understand and care about the skin,<br></br>
            empowering self-knowledge through actionable <br></br>
            insights, based on singular data that reflects skin<br></br>
            identity.</span>
        </motion.p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', height: '60vh', fontFamily: 'Tomato Grotesk', marginRight: 200 }}>
        <video
          ref={videoRef}
          src={videoAnimation}
          loop
          className='mx-auto w-[1000px] h-auto'
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </>
  );
};

export default SectionWrapper(HomeBody, "homebody");
