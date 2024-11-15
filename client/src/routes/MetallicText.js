import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';
import font from '../assets/fonts/optimer_regular.typeface.json';

export function MetallicText({ className }) {
  const textRef = useRef();
  const [textSize, setTextSize] = useState(1.2); 
  const [textProps, setTextProps] = useState({
    position: [-2.15, 2.5, -3],
    bevelSize: 0.035,
    bevelThickness: 0.05
  });

  const handleResize = () => {
    const isMobile = window.innerWidth <= 768; 
    setTextSize(isMobile ? 0.6 : 1.2); 
    setTextProps({
      position: isMobile ? [-2.15, 2.5, -3] : [-4, 1.5, -1], 
      bevelSize: isMobile ? 0.02 : 0.035, 
      bevelThickness: isMobile ? 0.03 : 0.05
    });
  };

  // Setup event listener on mount
  useEffect(() => {
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame(({ clock }) => {
    const scale = 1 + Math.sin(clock.getElapsedTime()) * 0.008; 
    textRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Text3D
      ref={textRef}
      position={textProps.position} // Use responsive position
      font={font}
      size={textSize} // Use responsive text size
      height={0.1}
      bevelEnabled
      bevelThickness={textProps.bevelThickness} // Use responsive bevelThickness
      bevelSize={textProps.bevelSize} // Use responsive bevelSize
      bevelOffset={0}
      bevelSegments={10}
      curveSegments={12}
      className={className}
    >
      Hi I'm Vasu!
      <meshStandardMaterial
        attach="material"
        metalness={0.8}
        roughness={0.2}
        color="#cfdeff"
      />
    </Text3D>
  );
}
