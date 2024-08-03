import React, { useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import AboutTextMesh from './AboutTextMesh';
import SpringMeshes from './SpringMeshes';
import SkillsTextMesh from './SkillsTextMesh';

const ScrollManager = ({ showAboutDescription }) => {
  const scroll = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentType, setCurrentType] = useState('about'); // 'about', 'projects', 'achievements'

  useFrame(() => {
    setScrollProgress(scroll.offset);

    if (scroll.offset < 1 / 10) {
      setCurrentType('about');
    } else if (scroll.offset >= 1 / 10 && scroll.offset < 7 / 10) {
      setCurrentType('projects');
    } else if (scroll.offset >= 7 / 10 && scroll.offset<= 9/10) {
      setCurrentType('achievements');
    }
    else {
        setCurrentType('skills');
      }
  });

  useEffect(() => {
    const updateFooter = () => {
      const footerElement = document.querySelector('.footer p');
      if (footerElement) {
        if (currentType === 'about') {
          footerElement.textContent = 'About';
        } else if (currentType === 'projects') {
          footerElement.textContent = 'Projects';
        } else if (currentType === 'achievements'){
          footerElement.textContent = 'Achievements';
        } else {
            footerElement.textContent = 'Skills';
        }
      }
    };
    updateFooter();
  }, [currentType]);

  return (
    <>
      {showAboutDescription && currentType === 'about' && <AboutTextMesh />}
      {showAboutDescription && currentType !== 'about' && (
        <SpringMeshes scrollProgress={scrollProgress} type={currentType} count={currentType === 'projects' ? 10 : 6} />
      )}
      {showAboutDescription && currentType === 'skills' && <SkillsTextMesh />}
    </>
  );
};

export default ScrollManager;
