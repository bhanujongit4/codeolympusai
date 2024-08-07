'use client'

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDownload } from 'react-icons/fa';
import Footer from "../components/Footer"

const ContactPage = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <main className="relative">
        <div className="relative max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Profile Section */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                Aarohi Bhanuj Chowdhary
              </h2>
              <img 
                src="images/profile.jpg" 
                alt="John Doe" 
                className="w-48 h-48 rounded-full mb-4"
              />
              <p className="text-lg text-black dark:text-gray-200 mb-4">
                I'm a passionate developer with expertise in React, Node.js, and cloud technologies. 
                With years of experience, I love creating efficient and scalable web applications 
                that solve real-world problems.
              </p>
              <p className="text-lg text-black dark:text-gray-200">
                When I'm not coding, you can find me hiking in the mountains or experimenting with new recipes in the kitchen. Why are you reading this AI generated text though?
              </p>
            </div>

            {/* Get in Touch Section */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-extrabold text-black dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl mb-5">
                Get in Touch
              </h1>
              <p className="max-w-xl text-xl text-black dark:text-gray-200 mb-8">
                I'd love to connect with you! Feel free to reach out through any of the platforms below.
              </p>
              <div className="flex justify-start space-x-6 mb-8">
                <a href="https://github.com/bhanujongit4" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400">
                  <FaGithub size={32} />
                </a>
                <a href="https://www.linkedin.com/in/aarohi-bhanuj-chowdhary-43636420a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400">
                  <FaLinkedin size={32} />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400">
                  <FaTwitter size={32} />
                </a>
                <a href="https://www.instagram.com/bhanujchowdhary?igsh=Ynh6anEzMWpycm0=" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400">
                  <FaInstagram size={32} />
                </a>
              </div>
              <div>
                <a href="/Resume-Aarohi.pdf" download className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-400 dark:text-white dark:bg-yellow-550 dark:hover:bg-yellow-400">
                  <FaDownload className="mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ContactPage;