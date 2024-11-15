import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { OrbitControls, Stars, ScrollControls } from '@react-three/drei';
import { MetallicText } from './MetallicText';
import Model from './Model';
import CameraAnimation from './CameraAnimation';
import Loader from './Loader';
import ScrollManager from './ScrollManager';
import ContactMe from './ContactMe';
import vasu from '../assets/untitled.glb';
import '../App.css';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [animationDone, setAnimationDone] = useState(false);
  const [showText, setShowText] = useState(true);
  const [fadeText, setFadeText] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showDrag, setShowDrag] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showAboutDescription, setShowAboutDescription] = useState(false);
  const [showContactMe, setShowContactMe] = useState(false);
  const scrollRef = useRef();
  const [loading, setLoading] = useState(true);

  const handleMuteToggle = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  const handleAnimationComplete = () => {
    setAnimationDone(true);
  };

  const handleExplore = () => {
    if (scrollRef.current) {
      // scrollRef.current.scroll(0.0002);
    }
    setFadeText(true);
    setTimeout(() => setShowText(false), 2000);
    setShowAbout(true);
    setTimeout(() => setShowDrag(true), 6000);
    setTimeout(() => setShowAbout(false), 6000);
    setTimeout(() => setShowFooter(true), 6000);
    setTimeout(() => setShowAboutDescription(true), 7000);
  };

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setLoading(false);
    };

    loadData();
  }, []);

  const handleScrollComplete = () => {
    setTimeout(() => {
      setShowContactMe(true);
    },0); // Delay rendering ContactMe by 1.5 seconds
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div>
          <div className="bg" />
          <Link to="/">
            <div className="pt-6 pl-6">
              <p>Vasu</p>
              <p className="px-9 -mt-1.5 -ml-2">Pal</p>
            </div>
          </Link>
          <Canvas dpr={[1.5, 2]} linear shadows gl={{ physicallyCorrectLights: true }}>
            <fog attach="fog" args={['#272730', 16, 30]} />
            <ambientLight intensity={6} />
            <directionalLight castShadow position={[10, 10, 5]} intensity={2} />
            <ScrollControls ref={scrollRef} pages={4} damping={4} onScroll={handleScrollComplete}>
              <Suspense fallback={null}>
                {showText && <MetallicText className={fadeText ? 'fade-out' : ''} />}
                <Model url={vasu} isMuted={isMuted} />
                <CameraAnimation onComplete={handleAnimationComplete} />
                <ScrollManager showAboutDescription={showAboutDescription} />
              </Suspense>
            </ScrollControls>
            <OrbitControls autoRotate={false} enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <Stars radius={500} depth={50} count={2500} factor={16} />
          </Canvas>

          <div className="layer" />

          <button onClick={handleMuteToggle} className="mute-button">
            <Icon icon={isMuted ? 'clarity:volume-mute-line' : 'mdi:volume-high'} width="32" className="text-white p-1 rounded-full" />
          </button>

          {showText && (
            <div className={`desc text-gray-300 ${animationDone ? 'fade-in' : 'hidden'}`}>
              <Icon icon="la:angle-up" width="32" className="text-gray-300 dash rotate-[-45deg] " />
              <p className="w-72 font-extralight text-sm pt-4 leading-relaxed">
                An interactive 3D portfolio website that renders a profile summary of a self-taught programmer's experiences in the tech world.
              </p>
              <span className="w-full flex justify-end items-center gap-x-2">
                <div onClick={handleExplore} className="w-32 cursor-pointer flex justify-end pb-3 px-3.5 pt-4 transition ease-in-out delay-75 border-b hover:scale-105 hover:border-indigo-400 duration-700">
                  <p className="font-medium text-sm">Explore</p>
                </div>
              </span>
            </div>
          )}

          {showAbout && (
            <div className={`about flex justify-center items-center z-20 ${animationDone ? 'fade-in' : 'hidden'}`}>
              <p className="about-text text-5xl md:text-9xl font-extrabold subpixel-antialiased font-sfpro text.white">About</p>
            </div>
          )}

          {showDrag && (
            <div className={`click flex justify-center items-center z-20 ${animationDone ? 'fade-in' : 'hidden'}`}>
              <p className="text-base tracking-wide font-semibold uppercase subpixel-antialiased font-sfpro text-gray-500">Drag to explore</p>
            </div>
          )}

          {showFooter && (
            <div className={`footer flex justify-center items-center z-20 ${animationDone ? 'fade-in' : 'hidden'}`}>
              <p className="text-6xl md:text-7xl font-bold subpixel-antialiased overflow-hidden font-sfpro text-white">About</p>
            </div>
          )}

          <a href="https://github.com/Vasu1712" className="bottom-left">
            <Icon icon="mdi:github" width="32" className="my-auto text-white" />
          </a>

          <a href="https://twitter.com/VasuPal17" className="bottom-right">
            <Icon icon="pajamas:twitter" width="24" className="my-auto text-white" />
          </a>

          {/* {showContactMe && <ContactMe />} */}
          {showContactMe && (
            <div className={`desc text-gray-300 ${animationDone ? 'fade-in' : 'hidden'}`}>
              <Icon icon="la:angle-up" width="32" className="text-gray-300 dash rotate-[-45deg]" />
              <p className="w-72 font-extralight text-sm pt-4 leading-relaxed">
                Hop in the details if you want to have any sort of discussion with the rookie.
              </p>
              <span className="w-full flex justify-end items-center gap-x-2">
                <div onClick={handleExplore} className="w-32 cursor-pointer flex justify-end pb-3 px-3.5 pt-4 transition ease-in-out delay-75 border-b hover:scale-105 hover:border-indigo-400 duration-700">
                  <p className="font-medium text-sm">Explore</p>
                </div>
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
