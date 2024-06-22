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
        <h1 className={`${styles.sectionHeadTextAbout} text-center font-light text-[25px] sm:text-[35px]`}>
          Our Mission <br />
          <strong>Build New Pathways To Apprehend Skin Health</strong>
        </h1>
      </motion.div>
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center min-h-[20vh] text-start font-light px-4 sm:px-0">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-[#868686] text-[16px] sm:text-[20px] mt-4 sm:mt-0"
        >
          The technological innovations of this new era will result in radical behavioural shifts: We predict that
          the individual-level knowledge of the skin, the body’s largest organ, will lead the game.
        </motion.p>
      </div>
      <Box
        sx={{
          width: '100%',
          height: 300,
          borderRadius: 20,
          bgcolor: '#FAF5EA',
          mt: 4,
        }}
      />
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadTextAbout} text-center font-medium text-[25px] sm:text-[30px] mt-10`}>
          What sets us apart? <br />
        </h1>
      </motion.div>
      <div className="flex flex-col sm:flex-row justify-start items-start min-h-[40vh] text-start font-medium px-4 sm:px-0">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-black text-[16px] sm:text-[25px] mt-4 sm:mt-0"
        >
          <strong>A Personal Skin Assistant for Everyone, and Completely Free.</strong> <span className="text-[#756E6E]">Bree is redefining new Pathways to understand and care about the skin, empowering self-knowledge through actionable insights, based on singular data that reflects skin identity.</span>
        </motion.p>
      </div>
      <div className="flex justify-center items-center mt-8 sm:mt-12">
        <video
          ref={videoRef}
          src={videoAnimation}
          loop
          className="w-full sm:w-[800px] h-auto"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </>
  );
};

export default SectionWrapper(HomeBody, "homebody");
