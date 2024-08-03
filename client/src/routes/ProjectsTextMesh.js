import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Image, Plane } from '@react-three/drei';
import * as THREE from 'three';
import projectsData from './ProjectsData';
import xros from '../assets/project_images/xros.png';
import hireXS from '../assets/project_images/hireXS.png';

const ProjectTextMesh = ({ scrollProgress, index, visible }) => {
  const meshRef = useRef();
  const project = projectsData[index % projectsData.length];

  useFrame(() => {
    const initialPosition = [0, 0, 0];
    const angle = (scrollProgress + index / 10) * Math.PI * 2;
    const radius = 3;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = initialPosition[1] + scrollProgress * 1.5;

    const rotationY = scrollProgress < 0.5 ? 0.1 : 0.1;

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
      {/* White border */}
      {/* <lineSegments position={[0, 0, 0.01]}>
        <edgesGeometry attach="geometry" args={[new THREE.PlaneGeometry(2.6, 1.4)]} />
        <lineBasicMaterial attach="material" color="white" />
      </lineSegments> */}
      {/* Image on the left half */}
      <Image
        url={project.image}
        position={[-0.70, 0, 0.02]} // Adjust position to the left half
        scale={[1.3, 1.3, 1]} // Adjust scale if needed
      />
      {/* Text on the right half */}
      <Text
        fontSize={0.14}
        fontWeight={800}
        color="white"
        anchorX="left"
        anchorY="center"
        position={[0.7, -0.4, 0.05]} // Adjust position to the right half
        maxWidth={2} // Adjust to fit the width
        lineHeight={2}
        textAlign="left"
      >
        {project.title}
      </Text>
      <Text
        fontSize={0.05}
        fontWeight={400}
        color="white"
        anchorX="left"
        anchorY="center"
        position={[0.075, 0.4, 0.02]} // Adjust position to the right half
        maxWidth={1.1} // Adjust to fit the width
        lineHeight={1.5}
        textAlign="justify"
      >
        {project.description}
      </Text>
    </group>
  );
};

export default ProjectTextMesh;
