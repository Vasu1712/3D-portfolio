import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';
import font from '../assets/fonts/optimer_regular.typeface.json';

export function MetallicText({ className }) {
  const textRef = useRef();

  useFrame(({ clock }) => {
    const scale = 1 + Math.sin(clock.getElapsedTime()) * 0.008; 
    textRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Text3D
      ref={textRef}
      position={[-4, 1.5, -1]}
      font={font}
      size={1.2}
      height={0.1}
      bevelEnabled
      bevelThickness={0.1}
      bevelSize={0.05}
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
