import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { SectionWrapper } from "../hoc";
import '../Accordation.css';

const AccordionItem = ({ title, content, onClick, link, target }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    if (onClick) {
      onClick();
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`} >
      {link ? (
        <Link to={link} target={target} className="accordion-header" onClick={toggleAccordion}>
          <h3>{title}</h3>
          <span style={{ color: 'black' }}>{isOpen ? '▴' : '▾'}</span>
        </Link>
      ) : (
        <div className="accordion-header" onClick={toggleAccordion}>
          <h3>{title}</h3>
          <span style={{ color: 'black' }}>{isOpen ? '▴' : '▾'}</span>
        </div>
      )}
      <div className="accordion-content">
        {content}
      </div>
    </div>
  );
};

const NestedAccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`nested-accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="nested-accordion-header" onClick={toggleAccordion}>
        <h4>{title}</h4>
        <span style={{ color: 'black' }}>{isOpen ? '▴' : '▾'}</span>
      </div>
      <div className="nested-accordion-content">
        {content}
      </div>
    </div>
  );
};

const Aboutfooter = () => {
  return (
    <>
      <div className="accordion">
        <AccordionItem 
          title="About Bree" 
          content={
            <div>
              <NestedAccordionItem 
                title="Who is Bree?" 
                content={(
                  <>
                    Bree is the name of an Artificial Intelligence (AI), trained by BreezyBeauty Inc. designed to engage with users about skin as a human organ.<br />
                    Bree’s goal is to be a helpful, friendly, and knowledgeable conversationalist. Users interact with Bree to ask questions, seek advice,<br />
                    or simply chat about skin health and wellness.
                  </>
                )}
            />
              <NestedAccordionItem 
                title="What's your approach to AI safety?" 
                content={(
                  <>
                    Bree is completely free to use for everyone. You can chat with Bree as often as you like and ask as many questions as you'd like, without any cost.<br />
                    This is part of Bree's commitment to being accessible and helpful to all users when it comes to skin health.
                  </>
                )}
              />
              <NestedAccordionItem 
                title="How is Bree different from other AI companies?" 
                content={(
                  <>
                    Bree is an excellent resource if you're seeking scientific knowledge about your skin.
                    Bree's primary mission is to provide individualized <br /> scientific insights based on your unique data, considering your life stage, needs, lifestyle, and values.
                    By leveraging Bree's expertise,<br /> you can develop a deeper understanding of your skin, enabling you to make informed decisions.<br />
                    As we continually train Bree and expand its capabilities, you can expect increasingly secure and accurate guidance in your journey towards<br /> optimal skin health.
                  </>
                )}
              />
            </div>
          } 
        />
        <AccordionItem 
          title="Data, Privacy and Policies"
          link="/privacy-policy"
          target="_blank"
        />
      </div>
    </>
  );
};

export default SectionWrapper(Aboutfooter, "Aboutfooter");
