import React, { useEffect, useState, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import Lottie from 'lottie-react';
import "react-vertical-timeline-component/style.min.css";
import animationData1 from '../animations/big_data_aii.json';
import animationData2 from '../animations/animation_2.json';
import animationData3 from '../animations/animation_3.json';
import animationData4 from '../animations/Animation - 1.json';
import animationData5 from '../animations/Animation - 2.json';
import animationData6 from '../animations/Animation - 3.json';
import { useInView } from 'react-intersection-observer';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const animations = [
  animationData1,
  animationData2,
  animationData3,
  animationData4,
  animationData5,
  animationData6,
];

const ExperienceCard = ({ experience, index }) => {
  const animationRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && animationRef.current) {
      animationRef.current.play();
    } else if (animationRef.current) {
      animationRef.current.stop();
    }
  }, [inView]);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#F5EADC",
        color: "#000",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: 'white', borderColor:'#232631' }}
      
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h3 className="font-montserrat-black text-[35px]" style={{fontWeight:'bold',marginLeft:20}}>{experience.title}</h3>
          <p className="font-montserrat text-[24px]">
            {experience.company_name}
          </p>
        </div>
        <ul className='mt-5 list-disc space-y-2'>
          {experience.points.map((point, idx) => (
            <h1
              key={`experience-point-${idx}` }
              className="font-montserrat text-[22px]"  style={{fontWeight:'semi-bold',marginLeft:20}} 
            >
              {point}
            </h1>
          ))}
        </ul>
        <div className="dottedLine mt-5">
          <svg className="mission--svg--dotted" xmlns="http://www.w3.org/2000/svg" width="398" height="1" viewBox="0 0 398 1" fill="none">
            <path d="M1 1.5H397" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 5" />
          </svg>
        </div>
        <div className="animation--div mt-5">
          <Lottie
            lottieRef={animationRef}
            animationData={animations[index]}
            loop={false}
            className="max-w-full"
          />
        </div>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="w-full overflow-hidden">
      <motion.div variants={textVariant()}>
        <h2 className="font-tomato-grotesk text-[30px] text-black">
          How Bree Works?
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#F5EADC">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div className="mt-20" variants={textVariant()}>
        <h1 style={{color:'#827F7A',fontWeight:'semiBold'}}className="font-tomato-grotesk-regular text-[25px] sm:text-[45px] text-left">
          Watch <br />
        </h1>
      </motion.div>

      <div className="text-left font-tomato-grotesk-regular">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-black text-[20px] sm:text-[35px] mt-5"
        >
          Donika highlights how singular data, combined with the power <br />
          of digital twin technology, will transform consumer behaviors.
        </motion.p>
      </div>

      <Box
        sx={{
          width: '100%',
          height: 500,
          borderRadius: 20,
          bgcolor: '#F5EADC',
          mt: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <motion.div className="mt-10" variants={textVariant()}>
        <h1 className="font-tomato-grotesk-regular text-[20px]  sm:text-[25px] text-left" style={{color:'black'}}>
          Donika Vata <br />
        </h1>
      </motion.div>
      <div className="text-left font-tomato-grotesk-regular">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-black text-[20px] sm:text-[25px] mt-5 flex flex-col"
        >
          Co-Founder
          <span className="font-tomato-grotesk-thin" style={{fontStyle:'thin',fontFamily:'Tomato Grotesk Thin'}}>
            MD, Chief medical officer
          </span>
          <span className="font-tomato-grotesk text-gray-500 text-[15px]" style={{marginTop:20,fontStyle:'bolder'}}>
            Talk to donika
          </span>
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
