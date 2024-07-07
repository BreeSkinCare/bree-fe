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

  const missionStyle = {
    fontSize: isWindows ? '25px' : '25px',
  };

  const boldStyle = {
    fontWeight: 'bold',
    marginTop: '20px',
    fontSize: isWindows ? '43px' : '22px',
  };

  const headStyle = {
    fontSize: isWindows ? '26px' : '22px',
    marginTop: '20px',
    marginBottom: '150px',
    color: '#75756F',
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    }, { threshold: 0.5 });

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
        <h1 className={`${styles.sectionHeadTextTittle} text-start font-light text-[25px] sm:text-[35px]`} style={missionStyle}>
          Our Mission <br />
        </h1>
        <h1 className={`${styles.sectionHeadTextTittle} text-start font-light text-[25px] sm:text-[35px]`} style={{ marginTop: 30 }}>
          <strong style={boldStyle}>Build New Pathways To Apprehend Skin Health</strong>
        </h1>
      </motion.div>
      <div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)} style={headStyle}
        >
          The technological innovations of this new era will result in radical behavioural shifts: we predict <br></br>that
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
    </>
  );
};

export default SectionWrapper(HomeBody, "homebody");
