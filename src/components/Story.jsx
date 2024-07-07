import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import '../index.css';


const Story = () => {
  return (
    <div className="w-full overflow-hidden" style={{ backgroundColor: '#FFFEF2', padding: '40px 20px', boxSizing: 'border-box' }}>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadTextAboutWithoutBold} text-[25px] sm:text-[35px] text-left font-tomato-grotesk-regular mt-40`}>
          Our Story <br />
        </h1>
        <h1 className={`${styles.sectionHeadTextAbout} text-[34px] sm:text-[45px] text-left font-tomato-grotesk-bold mt-10 `}>
          <strong>We Think Outside The Mainstream</strong>
        </h1>
      </motion.div>
      <div className="text-left max-w-[800px] sm:max-w-[950px]">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-[#868686] text-[20px] font-tomato-grotesk-regular mt-8" style={{marginBottom:100}}
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
