"use client";

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-800 px-6 py-10 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold text-white mb-6">About Us</h1>
      <p className="text-lg text-gray-300 text-center leading-relaxed max-w-2xl">
        Welcome to <span className="font-semibold">[Our Brand]</span>, where our passion lies in delivering
        exceptional smartwatches tailored to meet your needs. We are committed
        to providing quality, reliability, and innovation, all at
        competitive prices.
      </p>
    </div>
  );
};

export default About;
