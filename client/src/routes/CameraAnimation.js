import React, { useState, useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function CameraAnimation({ onComplete }) {
  const { camera } = useThree();
  const [animationProgress, setAnimationProgress] = useState(0);
  const animationDuration = 5; // Animation duration in seconds
  const initialPosition = { x: 0, y: 40, z: 80 };
  const finalPosition = { x:0, y: 0, z: 0 };

  useEffect(() => {
    const timer = setTimeout(onComplete, 4000); // Trigger onComplete after 5 seconds
    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, [onComplete]);

  useFrame((state, delta) => {
    
      setAnimationProgress((prev) => Math.min(prev + delta / animationDuration, 1));
      const progress = THREE.MathUtils.smoothstep(animationProgress, 0, 1);
      
      const angle = progress * Math.PI * 2;
      const radius = THREE.MathUtils.lerp(50, 10, progress);

      camera.position.x = Math.cos(angle) * radius -10;
      camera.position.z = Math.sin(angle) * radius +5;
      camera.position.y = THREE.MathUtils.lerp(initialPosition.y, finalPosition.y, progress)+1;

      camera.lookAt(0,0,0);
      
    
  });

  return null;
}

export default CameraAnimation;
