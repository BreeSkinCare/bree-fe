import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import '../index.css';

const Story = () => {
  return (
    <div style={{ backgroundColor: '#FFFEF2', width: '100%', padding: '40px 20px', boxSizing: 'border-box' }}>
      <motion.div variants={textVariant()}>
        <h1 className={styles.sectionHeadTextAbout} style={{ fontSize: 25, textAlign: 'left', fontFamily: 'Tomato Grotesk Regular' }}>
          Our story <br />
        </h1>
        <h1 className={styles.sectionHeadTextAbout} style={{ fontSize: 35, textAlign: 'left', fontFamily: 'Tomato Grotesk Bold' }}>
          <strong>We think outside the Mainstream</strong>
        </h1>
      </motion.div>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', textAlign: 'start', fontFamily: 'Raleway light', maxWidth: '800px' }}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          style={{ color: '#868686', fontSize: 20, fontFamily: 'Tomato Grotesk Regular', marginTop: 20 }}
        >
          We strive to transform the paradigm by setting unparalleled standards and technology that connects 
          each individual to their highest, most trusted self. By harnessing the power of singular data, we aim 
          to forge a new era of trust, connection, and self-discovery.
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(Story, "story");
