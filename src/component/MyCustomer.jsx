import React from "react";
import Marquee from "react-fast-marquee";

// const skills = ["HTML", "CSS", "Java", "JavaScript", "React", "Tailwind", "Node.js"];
const advertisment =
  " Free shipping on orders over $50 • 24/7 customer support • Satisfaction guaranteed. ";

const MyCustomer = () => {
  return (
    <div className="relative overflow-hidden py-6 my-4 bg-slate-700">
      {/* Marquee Content */}
      <div className="relative z-20">
        <Marquee speed={50} pauseOnHover gradient={false}>
          <div className="flex gap-8 text-pink-600 text-xl font-bold tracking-wider">
            <h1>{advertisment}</h1>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MyCustomer;
