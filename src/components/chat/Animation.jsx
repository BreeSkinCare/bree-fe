import React, { useEffect, useRef, useState } from "react";
import video from "../../assets/waveAnimation.webm";
import Lottie from "lottie-react";
import animationData from "../../assets/fingerprint-lottie.json";

const Animation = () => {
  const [showLottie, setShowLottie] = useState(false);
  const lottieRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLottie(true);

      let currentFrame = 0;
      const totalFrames = animationData.op;

      const interval = setInterval(() => {
        if (lottieRef.current) {
          if (currentFrame < totalFrames) {
            lottieRef.current.goToAndStop(currentFrame, true);
            currentFrame++;
          } else {
            clearInterval(interval);
          }
        }
      }, 100); // Slow animation speed

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.animationWrapper}>
        <video style={styles.video} autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showLottie && (
          <div style={styles.lottieContainer}>
            <Lottie
              lottieRef={lottieRef}
              animationData={animationData}
              loop={false}
              autoPlay={false}
              style={styles.lottie}
            />
          </div>
        )}
      </div>
      <p style={styles.headerText}>
        How's your skin feeling today, <span style={styles.highlight}>Amy</span>?
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 0",
  },
  animationWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    maxWidth: "90%",
    maxHeight: "50vh",
  },
  lottieContainer: {
    position: "absolute",
    zIndex: 1,
  },
  lottie: {
    width: "20vw",
    maxWidth: "150px",
  },
  headerText: {
    marginTop: "1.5rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: "2rem",
    fontFamily: '"Tomato Grotesk", sans-serif',
  },
  highlight: {
    color: "#78C86F", // Green color for the highlighted part
  },
};

export default Animation;
