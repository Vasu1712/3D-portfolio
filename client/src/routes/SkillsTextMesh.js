import React, { useRef } from 'react';
import { Text, Plane, Image } from '@react-three/drei';
import * as THREE from 'three';
import react from '../assets/skills_images/react.svg';

const skills = [
  { name: 'ReactJS', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926087/react_uus18m.svg' },
  { name: 'Three.js', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926090/three.js_teegsy.svg' },
  { name: 'NestJS', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926083/nestjs_qcokad.svg' },
  { name: 'WebXR', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926092/webXR_fhnjem.svg' },
  { name: 'C++', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926078/cpp_dsl4hn.svg' },
  { name: 'OpenAI', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926085/openAI_myy6ae.svg' },
  { name: 'JavaScript', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926081/javascript_kkltfl.svg' },
  { name: 'NextJS', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926084/nextjs_jbirkx.svg' },
  { name: 'Python', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926087/python_izltkf.svg' },
  { name: 'ElectronJS', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926078/electronjs_gkuiru.svg' },
  { name: 'Google Cloud', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926080/google_cloud_llzmc0.svg' },
  { name: 'MongoDB', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926083/mongo_ypdggx.svg' },
  { name: 'Redis', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926088/redis_llcbed.svg' },
  { name: 'Linux', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926082/linux_aoov2i.svg' },
  { name: 'Android', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926076/android_jok8d3.svg' },
  { name: 'NodeJS', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926084/nodejs_nw5cz4.svg' },
  { name: 'Azure', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926076/azure_opd2ya.svg' },
  { name: 'Git', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926079/git_mtbrkd.svg' },
  { name: 'Typescript', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926090/typescript_aueged.svg' },
  { name: 'Tailwind', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926090/tailwind_vhwgob.svg' },
  { name: 'Flutter', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926078/flutter_ap5rx2.svg' },
  { name: 'LensStudio', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926081/lens_studio_ogz1vg.svg' },
  { name: 'SQL', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926089/sql_hstohm.svg' },
  { name: 'Blockchain', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926077/blockchain_vujonj.svg' },
  { name: 'Bitcoin', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926077/bitcoin_zeylw5.svg' },
  { name: 'Photoshop', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926086/ps_yytsag.svg' },
  { name: 'Illustrator', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926075/ai_zmnaxf.svg' },
  { name: 'Figma', icon: 'https://res.cloudinary.com/dvfzcoyuk/image/upload/v1722926078/figma_stokpk.svg' },
];

const SkillsTextMesh = ({ scrollProgress, visible }) => {
  const meshRef = useRef();

  const rows = 6; // Number of rows
  const columns = 7; // Number of columns
  const spacingX = 0.8; // Horizontal spacing
  const spacingY = 0.5; // Vertical spacing

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
            <Image
              url={skill.icon}
              scale={[0.3, 0.3, 0.3]}
              position={[-0, 0, 0]}
            />
            {/* <Text
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
            </Text> */}
          </group>
        );
      })}
    </group>
  );
};

export default SkillsTextMesh;
