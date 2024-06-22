import { motion } from "framer-motion";
import { styles } from "../styles";
import videoAnimation from '../animations/Bree Logo Animation_1.mp4'; // Make sure to use the correct path to your video file

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex items-center justify-center`} style={{ backgroundColor: '#F9F6F1' }}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
      </div>

      <div className='flex flex-col justify-center items-center h-full px-4 sm:px-0'>
        <div className='flex flex-col justify-center items-center mt-5'>
        </div>
        <video 
          src={videoAnimation} 
          autoPlay 
          loop 
          muted 
          className='mx-auto w-full sm:w-[800px] h-auto' 
          style={{ maxWidth: '100%', maxHeight: '100%' }} 
          controlsList="nodownload" 
          onContextMenu={(e) => e.preventDefault()} 
        />
      </div>

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[25px] h-[44px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
