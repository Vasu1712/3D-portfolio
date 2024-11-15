import React, { useRef, useEffect, useState } from 'react';
import { Text } from '@react-three/drei';

const AboutTextMesh = ({ scrollProgress, animationDone }) => {
  const meshRef = useRef();
  const [textProps, setTextProps] = useState({
    fontSize: 0.1,
    maxWidth: 4
  });

  // Function to handle window resize
  const handleResize = () => {
    const isMobile = window.innerWidth <= 768; // Example breakpoint for mobile
    setTextProps({
      fontSize: isMobile ? 0.075 : 0.1, // Set font size for mobile
      maxWidth: isMobile ? 1.9 : 4 // Set maxWidth for mobile
    });
  };

  // Setup event listener on mount
  useEffect(() => {
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <group position={[0, 1, 2]}>
      {/* Description */}
      <Text
        fontSize={textProps.fontSize} // Use responsive fontSize
        color="white"
        anchorX="center"
        anchorY="center"
        position={[0, 0.3, 0]} // Adjust the vertical position
        maxWidth={textProps.maxWidth} // Use responsive maxWidth
        lineHeight={1.5} // Adjust line height
        textAlign="justify"
        overflowWrap="break-word"
      >
        Enthusiastic learner with hands-on expertise in building innovative web and AR/VR applications. Proficient in technologies like Three.js, WebXR, ReactJS, NodeJS, and cloud infrastructure. Proven track record in leading teams to success in international hackathons and competitions, including Winner at Walmart Sparkathon, runner-up at DP World's Big Tech Project and Google ONDC Hackathon, and finalist at Isuzu International Hackathon. My project 'Wagon Wheel in AR' was featured on the official ICC App during the Cricket World Cup. Selected for the prestigious XROS Fellowship by Meta, being one of 100 selected from over 20,000 applicants. Passionate about open-source contributions and cutting-edge tech. Seeking to leverage my skills and experience to drive impactful projects in a collaborative environment.
      </Text>
    </group>
  );
};

export default AboutTextMesh;
