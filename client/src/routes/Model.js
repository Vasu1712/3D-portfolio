import React, { useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF, useScroll } from '@react-three/drei';
import soundFile from '../assets/sounds/sound.mp3';

function Model({ url, position, isMuted }) {
  const { scene, animations } = useGLTF(url);
  const ref = useRef();
  const listener = useRef(new THREE.AudioListener());
  const sound = useRef(new THREE.Audio(listener.current));
  const audioLoader = useRef(new THREE.AudioLoader());
  const mixer = useRef();
  const scroll = useScroll();
  const [animationProgress, setAnimationProgress] = useState(0);
  const animationDuration = 4;

  useEffect(() => {
    const loadAudio = () => {
      audioLoader.current.load(
        soundFile,
        (buffer) => {
          sound.current.setBuffer(buffer);
          sound.current.setLoop(true);
          sound.current.setVolume(isMuted ? 0 : 0.5);
          if (!isMuted) {
            sound.current.play();
          }
        },
        undefined,
        (error) => {
          console.error('An error occurred while loading the audio file:', error);
        }
      );
    };

    loadAudio();
    scene.add(listener.current);

    return () => {
      if (sound.current.isPlaying) {
        sound.current.stop();
      }
      scene.remove(listener.current);
    };
  }, [scene, isMuted]);

  useEffect(() => {
    if (sound.current) {
      if (isMuted) {
        sound.current.setVolume(0);
      } else {
        sound.current.setVolume(0.5);
        if (!sound.current.isPlaying) {
          sound.current.play();
        }
      }
    }
  }, [isMuted]);

  useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
  }, [scene, animations]);

  useFrame((state, delta) => {
    const scrollOffset = scroll.offset;

    if (ref.current) {
      // Update animation progress
      setAnimationProgress((prev) => Math.min(prev + delta / animationDuration, 1));

      // Calculate scale and rotation based on animation progress
      const scale = THREE.MathUtils.lerp(0.1, 2.5, animationProgress); // Lerp from 0.01 to 2.5
      ref.current.scale.set(scale, scale, scale);
      ref.current.position.set(0, THREE.MathUtils.lerp(-20, -4.2, animationProgress) + scrollOffset * 0.4, 0);
      ref.current.rotation.set(0, THREE.MathUtils.lerp(0, 0.025, animationProgress) - scrollOffset * Math.PI * 0.4, 0);
    }
  });

  return <primitive ref={ref} object={scene} position={position} />;
}

export default Model;
