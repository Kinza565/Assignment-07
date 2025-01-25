"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-800 p-6 flex flex-col justify-between">
      <h1 className="text-4xl font-bold text-white pt-6">Contact Us</h1>
      <p className="text-gray-300 mt-4">
        We would love to hear from you! If you have any questions or feedback,
        feel free to reach out to us.
      </p>

      <form className="mt-8 space-y-6 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 w-full text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 w-full text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Your Message"
          className="px-4 py-2 w-full text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          required
        ></textarea>
        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md transition-all">
          Send Message
        </button>
      </form>

      <div className="mt-12 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-white">Contact Information</h2>
        <p className="text-gray-300 mt-2">Email: info@example.com</p>
        <p className="text-gray-300">Phone: +1234567890</p>
        <p className="text-gray-300">Follow us on:</p>
        <ul className="flex space-x-4 mt-2">
          <li>
            <a
              href="https://facebook.com"
              className="text-blue-500 hover:text-blue-400 transition-all"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              className="text-blue-500 hover:text-blue-400 transition-all"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              className="text-blue-500 hover:text-blue-400 transition-all"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
