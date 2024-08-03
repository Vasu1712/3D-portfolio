import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const AboutTextMesh = ({ scrollProgress, animationDone }) => {
  const meshRef = useRef();
;
  return (
    <group position={[0, 1, 2]}>
      {/* Description */}
      <Text
        fontSize={0.1}
        color="white"
        anchorX="center"
        anchorY="center"
        position={[0, 0.3, 0]} // Adjust the vertical position
        maxWidth={4} // Adjust to fit the width
        lineHeight={1.5} // Adjust line height
        textAlign="justify"
        // Wrap text to fit in the width
        overflowWrap="break-word"
      >
        Enthusiastic learner with hands-on expertise in building innovative web and AR/VR applications. Proficient in technologies like Three.js, WebXR, ReactJS, NodeJS, and cloud infrastructure. Proven track record in leading teams to success in international hackathons and competitions, including Winner at Walmart Sparkathon, runner-up at DP World's Big Tech Project and Google ONDC Hackathon, and finalist at Isuzu International Hackathon. My project 'Wagon Wheel in AR' was featured on the official ICC App during the Cricket World Cup. Selected for the prestigious XROS Fellowship by Meta, being one of 100 selected from over 20,000 applicants. Passionate about open-source contributions and cutting-edge tech. Seeking to leverage my skills and experience to drive impactful projects in a collaborative environment.
      </Text>
    </group>
  );
};

export default AboutTextMesh;
