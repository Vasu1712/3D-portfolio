import React, { useRef } from 'react';
import { Text, Plane, Image } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  { name: 'Three.js', icon: '/src/assets/icons/threejs.png' },
  { name: 'A-frame', icon: '/src/assets/icons/aframe.png' },
  { name: 'WebXR', icon: '/src/assets/icons/webxr.png' },
  { name: 'C++', icon: '/src/assets/icons/cpp.png' },
  { name: 'OpenAI', icon: '/src/assets/icons/openai.png' },
  { name: 'JavaScript', icon: '/src/assets/icons/javascript.png' },
  { name: 'ReactJS', icon: '/src/assets/icons/reactjs.png' },
  { name: 'NextJS', icon: '/src/assets/icons/nextjs.png' },
  { name: 'Python', icon: '/src/assets/icons/python.png' },
  { name: 'CI/CD', icon: '/src/assets/icons/cicd.png' },
  { name: 'MongoDB', icon: '/src/assets/icons/mongodb.png' },
  { name: 'Express', icon: '/src/assets/icons/express.png' },
  { name: 'Linux', icon: '/src/assets/icons/linux.png' },
  { name: 'Firebase', icon: '/src/assets/icons/firebase.png' },
  { name: 'NodeJS', icon: '/src/assets/icons/nodejs.png' },
  { name: 'Matlab', icon: '/src/assets/icons/matlab.png' },
  { name: 'Git', icon: '/src/assets/icons/git.png' },
  { name: 'Photoshop', icon: '/src/assets/icons/photoshop.png' },
  { name: 'Illustrator', icon: '/src/assets/icons/illustrator.png' },
  { name: 'Figma', icon: '/src/assets/icons/figma.png' },
];

const SkillsTextMesh = ({ scrollProgress, visible }) => {
  const meshRef = useRef();

  const rows = 6; // Number of rows
  const columns = 6; // Number of columns
  const spacingX = 0.8; // Horizontal spacing
  const spacingY = 0.4; // Vertical spacing

  return (
    <group ref={meshRef} position={[0, 0.2, 2]}>
      {/* <Plane args={[4, 2]}>
        <meshBasicMaterial color="black" side={THREE.DoubleSide} />
      </Plane> */}
      {skills.map((skill, index) => {
        const row = Math.floor(index / columns);
        const col = index % columns;
        const x = col * spacingX - (columns / 2) * spacingX + spacingX / 2;
        const y = (rows / 2) * spacingY - row * spacingY - spacingY / 2;
        return (
          <group key={index} position={[x, y, 0.01]}>
            {/* <Image
              url={skill.icon}
              scale={[0.5, 0.5, 0.5]}
              position={[-0.3, 0, 0]}
            /> */}
            <Text
              fontSize={0.1}
              color="white"
              anchorX="left"
              anchorY="center"
              position={[0.2, 0, 0]}
              maxWidth={1}
              lineHeight={1.2}
              textAlign="left"
            >
              {skill.name}
            </Text>
          </group>
        );
      })}
    </group>
  );
};

export default SkillsTextMesh;
