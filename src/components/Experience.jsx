import React, { useState, useEffect, useRef } from "react";
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
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h3 style={{ fontFamily: 'Montserrat Black', fontSize: 24 }}>{experience.title}</h3>
          <p style={{ fontFamily: 'Montserrat', fontSize: 24 }}>
            {experience.company_name}
          </p>
        </div>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, idx) => (
            <li
              key={`experience-point-${idx}`}
              style={{ fontFamily: 'Montserrat', fontSize: 20 }}
            >
              {point}
            </li>
          ))}
        </ul>
        <div className="dottedLine" style={{ marginTop: '20px' }}>
          <svg className="mission--svg--dotted" xmlns="http://www.w3.org/2000/svg" width="398" height="1" viewBox="0 0 398 1" fill="none">
            <path d="M1 1.5H397" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 5" />
          </svg>
        </div>
        <div className="animation--div" style={{ marginTop: '20px' }}>
          <Lottie
            lottieRef={animationRef}
            animationData={animations[index]}
            loop={false}
            style={{ width: 354, marginLeft: 20 }}
          />
        </div>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 style={{ fontFamily: 'Tomato Grotesk', color: 'black', fontSize: 30 }}>
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

      <motion.div style={{ marginTop: 200 }} variants={textVariant()}>
        <h1 className={styles.sectionHeadTextAbout} style={{ fontSize: 25, textAlign: 'left', fontFamily: 'Tomato Grotesk Regular' }}>
          Watch <br />
        </h1>
      </motion.div>

      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', textAlign: 'start', fontFamily: 'Tomato Grotesk Regular' }}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          style={{ color: 'black', fontSize: 20, fontFamily: 'Tomato Grotesk Regular', marginTop: 20 }}
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
          bgcolor: '#FAF5EA',
          marginTop: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <motion.div style={{ marginTop: 50 }} variants={textVariant()}>
        <h1 className={styles.sectionHeadTextAbout} style={{ fontSize: 20, textAlign: 'left', fontFamily: 'Tomato Grotesk Regular' }}>
          Donika Vata <br />
        </h1>
      </motion.div>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', textAlign: 'start', fontFamily: 'Tomato Grotesk Regular' }}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          style={{ display: 'flex', color: 'black', fontSize: 20, fontFamily: 'Tomato Grotesk Regular', marginTop: 20, flexDirection: 'column' }}
        >
          Co-Founder
          <span style={{ fontFamily: 'Tomato Grotesk Thin' }}>
            MD, Chief medical officer
          </span>
          <span style={{ fontFamily: 'Tomato Grotesk Thin', color: 'grey', fontSize: 15 }}>
            Talk to donika
          </span>
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
