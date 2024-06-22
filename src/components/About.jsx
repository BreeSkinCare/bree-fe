import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] '
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-customCardBg rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={styles.sectionHeadTextAbout} style={{textAlign:'center',fontFamily:'Raleway light'}}>Bonjour, I am Bree <br></br>
        Your Personal Skin Assistant</h1>
      </motion.div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh', textAlign: 'start', fontFamily:'Raleway light' }}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          style={{ color: 'black', fontSize: 25 }}
        >
          I’m your <strong>dedicated</strong> guide on your journey to skin health,<br />
          offering you advice grounded in <strong>scientific knowledge</strong><br />
          whenever you need me.<br /><br />

          Some see me as a trendsetter, while others appreciate <br />
          my intelligence and caring nature.<br /><br />

          Whether you’re looking for an assistant, a companion or<br />
          source of feedback, I’m here to support you.<br /><br />

          Together, we can strive for the healthiest skin possible!<br />
          And remember, I’m always here to <strong>serve you at no cost</strong>.<br /><br /><br />
          Yours,<br /><br />
          <strong>Bree</strong>
        </motion.p>
      </div>

      {/* <div style={{marginTop:100}}>
        <motion.div variants={textVariant()}>
        <h1 className={styles.sectionHeadTextAbout}>Our Mission<br></br>
        Build new pathways to apprehend Skin Health</h1>
        
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)} style={{color:'black',marginTop:50}}
      >
        The technological innovations of this new era will result in radical behavioural shifts: <br></br>
        we predict that the individual-level knowledge of the skin, the body’s largest organ, will lead the game. <br></br> 
      </motion.p>
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
