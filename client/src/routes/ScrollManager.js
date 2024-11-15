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

    if (scroll.offset < 1 / 20) {
      setCurrentType('about');
    } else if (scroll.offset >= 1 / 20 && scroll.offset < 11 / 20) {
      setCurrentType('projects');
    } else if (scroll.offset >= 11 / 20 && scroll.offset<= 17/20) {
      setCurrentType('achievements');
    } else if (scroll.offset >= 17 / 20 && scroll.offset<= 19/20) {
        setCurrentType('skills');
    }
    else {
        setCurrentType('contact me');
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
        } else if (currentType === 'skills'){
            footerElement.textContent = 'Skills';
        } else {
            footerElement.textContent = 'Contact Me';
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
      {showAboutDescription && currentType === 'contact me' }
    </>
  );
};

export default ScrollManager;
