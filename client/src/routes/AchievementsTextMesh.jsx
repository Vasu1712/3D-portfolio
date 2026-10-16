import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Image, Plane } from '@react-three/drei';
import * as THREE from 'three';
import achievementsData from './AchievementsData';

const AchievementTextMesh = ({ scrollProgress, index, visible }) => {
  const meshRef = useRef();
  const achievement = achievementsData[index % achievementsData.length];

  useFrame(() => {
    const initialPosition = [0, -0.6, 0]; // Updated initial position
    const angle = (scrollProgress + index / 6) * Math.PI * 2;
    const radius = 3;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = initialPosition[1] + scrollProgress * 1.5;

    const rotationY = scrollProgress < 0.5 ? 0.1 : -0.1;

    if (meshRef.current) {
      meshRef.current.position.set(x, y, z);
      meshRef.current.rotation.set(0, rotationY, 0);
      meshRef.current.visible = visible;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Background rectangle */}
      <Plane args={[2.6, 1.4]}>
        <meshBasicMaterial color="black" side={THREE.DoubleSide} />
      </Plane>
      {/* Image on the right half */}
      <Image
        url={achievement.image}
        position={[0.6, 0, 0.02]} // Adjust position to the right half
        scale={[1.3, 1.3, 1]} // Adjust scale if needed
      />
      {/* Title Text on the left half */}
      <Text
        fontSize={0.14}
        fontWeight={800}
        color="white"
        anchorX="right"
        anchorY="center"
        position={[-0.2, 0.5, 0.05]} // Adjust position to the left half
        maxWidth={1.2} // Adjust to fit the width
        lineHeight={1}
        textAlign="left"
      >
        {achievement.title}
      </Text>
      {/* Description Text on the left half */}
      <Text
        fontSize={0.05}
        fontWeight={400}
        color="white"
        anchorX="right"
        anchorY="center"
        position={[-0.1, -0.1, 0.02]} // Adjust position to the left half
        maxWidth={1.1} // Adjust to fit the width
        lineHeight={1.5}
        textAlign="justify"
      >
        {achievement.description}
      </Text>
    </group>
  );
};

export default AchievementTextMesh;
