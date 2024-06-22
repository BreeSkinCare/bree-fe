import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import photoPhone from '../../public/images/phones.png';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex flex-col gap-10 overflow-hidden px-5`}>
      <motion.div
        variants={slideIn("left", "tween", 0.1, 1)}
        className='flex-[1.75] p-8 rounded-2xl'
        style={{ backgroundColor: '#FFFEF2', border: '2px solid #F5EADC' }}
      >
        <p className={styles.sectionSubText} style={{ color: '#868686' }}>Get in touch</p>
        <h3 className={styles.sectionHeadText} style={{ color: 'black' }}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-9'
        >
          <label className='flex flex-col'>
            <span className='font-medium mb-5' style={{ color: 'black' }}>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              style={{ backgroundColor: '#FFFEF2', color: 'black', border: '1px solid #F5EADC', padding: '10px', borderRadius: '8px' }}
              className='outline-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-4' style={{ color: 'black' }}>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              style={{ backgroundColor: '#FFFEF2', color: 'black', border: '1px solid #F5EADC', padding: '10px', borderRadius: '8px' }}
              className='outline-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-4' style={{ color: 'black' }}>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              style={{ backgroundColor: '#FFFEF2', color: 'black', border: '1px solid #F5EADC', padding: '10px', borderRadius: '8px' }}
              className='outline-none'
            />
          </label>

          <button
            type='submit'
            className='py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md'
            style={{ backgroundColor: '#F5EADC', color: 'black' }}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <div
        className="w-full bg-[#FCEFCD] p-10 mt-10 rounded-2xl text-center"
      >
        <h2 className="font-tomato-grotesk text-[25px] sm:text-[35px] text-black mt-5">
          Chat With Me In Real Time On
        </h2>
        <div className="flex justify-center gap-5 mt-5">
          <img src={photoPhone} alt='Instagram' className="w-full h-auto max-w-[600px] sm:max-w-[1200px]" />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
