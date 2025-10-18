
import React from 'react';
import Marquee from 'react-fast-marquee';

// const skills = ["HTML", "CSS", "Java", "JavaScript", "React", "Tailwind", "Node.js"];
const advertisment = ' Free shipping on orders over $50 • 24/7 customer support • Satisfaction guaranteed. '

const MyCustomer = () => {
  return (
    <div className="relative overflow-hidden py-6 my-4">
      {/* Gradient animated background */}
      <div className="absolute inset-0 animate-gradient-x bg-gradient-to-r 
      from-indigo-300 via-purple-100 to-pink-900 bg-[length:200%_200%]"></div>
      {/* Overlay to darken it slightly */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Optional fade edges */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Marquee Content */}
      <div className="relative z-20">
        <Marquee speed={50} pauseOnHover gradient={false}>
          <div className="flex gap-8 text-white text-xl font-bold tracking-wider">
            {/* {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))} */}
            <h1>{advertisment}</h1>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MyCustomer;
