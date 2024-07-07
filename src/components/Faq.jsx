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
        <h1 className={`${styles.sectionHeadTextAbout} text-center font-bold text-[30px] sm:text-[45px]`}>
          FAQ <br />
        </h1>
      </motion.div>
      <div className="flex flex-col justify-center items-center min-h-[20vh] text-center font-light px-4 sm:px-0" >
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-[#868686] text-[16px] sm:text-[25px] mt-4 sm:mt-10"
        >
          Should you have any inquiries about Bree, kindly see the list below for our most frequently asked questions.
          Should your question not be listed here, please contact us.
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Faq, "faq");
