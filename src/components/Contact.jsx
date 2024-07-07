import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import Footer from "./Footer";

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
    <div className="flex flex-col items-center gap-10 overflow-hidden px-5" >
      <motion.div
        variants={slideIn("left", "tween", 0.1, 1)}
        className='p-8 rounded-2xl w-full max-w-3xl'
        style={{ backgroundColor: '#FFFEF2', border: '2px solid #F5EADC',marginTop: '150px' }}
      >
        <p className={styles.sectionSubText} style={{ color: '#868686', textAlign: 'center' }}>Get in touch</p>
        <h3 className={styles.sectionHeadText} style={{ color: 'black', textAlign: 'center' }}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='font-medium mb-2' style={{ color: 'black' }}>Your Name</span>
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
            <span className='font-medium mb-2' style={{ color: 'black' }}>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              style={{ backgroundColor: '#FFFEF2', color: 'black', border: '1px solid #F5EADC', padding: '10px', borderRadius: '8px' }}
              className='outline-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-2' style={{ color: 'black' }}>Your Message</span>
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
            className='py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md mx-auto'
            style={{ backgroundColor: '#F5EADC', color: 'black' }}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

   
    </div>

  );
};

export default Contact;
