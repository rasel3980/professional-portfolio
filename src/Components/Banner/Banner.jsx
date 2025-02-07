import React from 'react';
import { Link } from 'react-router-dom';  // For navigation with React Router (optional)
import profileImg from '../../assets/profile/Rasel profile .jpeg';  // Update the path to your image
import Social from '../SocialLink/Social';

const Banner = () => {
  return (
    <>
    <div className="hero bg-base-200 min-h-screen">
      <div className="w-11/12 mx-auto hero-content flex-col lg:flex-row-reverse">
        <div className='flex flex-col justify-center'>
        <img
          src={profileImg}
          alt="Rasel"
          className="max-w-sm mx-auto rounded-lg shadow-2xl"
        />
        <Social></Social>
        </div>
        <div>
          <h1 className="text-5xl font-bold">Hello! I’m Rasel</h1>
          <p className="py-6 text-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-gradient-text">
            A passionate and driven <strong>Full Stack Developer</strong> based in Bangladesh. My journey in the world of development began with a fascination for how websites and applications come to life.Since then, I’ve honed my skills in <strong>[HTML5,CSS3,Tailwind CSS,Daisy UI,React,JavaScript,Next.js,Node.js,Express.js,MongoDB,]</strong>,and I’m constantly learning new tools and technologies to stay ahead of the curve.
          </p>
          <a href="" download>
            <button className="btn btn-primary mr-4">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
        
        </>
  );
};

export default Banner;
