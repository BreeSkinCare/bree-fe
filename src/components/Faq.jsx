import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Box } from "@mui/material";


const Faq = () => {
    return (
      <>
        <motion.div variants={textVariant()}>
          <h1 className={styles.sectionHeadTextAbout} style={{fontSize:45,textAlign:'center',fontFamily:'Tomato Grotesk',textAlign:'center', alignItems:'center'}}>FAQ <br></br></h1>
        </motion.div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', textAlign: 'center', fontFamily:'Raleway light' }}>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            style={{ color: '#868686', fontSize: 20 ,fontFamily:'Tomato Grotesk Regular', marginTop:20}}
          >
            Should you have any inquiries about Bree, kindly see the list below for our most frequently asked questions.<br></br>
            Should your question not be listed here, please contact us.
          </motion.p>

        </div>
      </>
    );
  };
  
  export default SectionWrapper(Faq, "faq");
  