import React from 'react';
import { Icon } from '@iconify/react';

const ContactMe = () => {
  return (
    <div className={`desc text-gray-300 `}>
    <Icon icon="la:angle-up" width="32" className="text-gray-300 dash rotate-[-45deg]" />
    <p className="w-72 font-extralight text-sm pt-4 leading-relaxed">
      An interactive 3D portfolio website that renders a profile summary of a self-taught programmer's experiences in the tech world.
    </p>
    <span className="w-full flex justify-end items-center gap-x-2">
      <div  className="w-32 cursor-pointer flex justify-end pb-3 px-3.5 pt-4 transition ease-in-out delay-75 border-b hover:scale-105 hover:border-indigo-400 duration-700">
        <p className="font-medium text-sm">Explore</p>
      </div>
    </span>
  </div>
  );
};

export default ContactMe;
