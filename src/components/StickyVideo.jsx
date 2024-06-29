import React, { useEffect, useRef, useState } from 'react';
import '../hero.css'; // Import your CSS file

const StickyVideo = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoElement = videoRef.current;
      const rect = videoElement.getBoundingClientRect();

      if (rect.top <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`video-wrapper ${isSticky ? 'sticky' : ''}`} ref={videoRef}>
      <div className="video-container">
        <video
          src={videoSrc}
          loop
          className="video"
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          controls
        />
      </div>
    </div>
  );
};

export default StickyVideo;
