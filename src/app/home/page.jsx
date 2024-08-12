'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Code, Cpu, Layout, Shield, Star } from 'lucide-react';
import Stack from "../components/stack"
import FAQComponent from "../components/Faq"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen relative">
      <main className="relative">
         {/* Desktop background */}
         <div className="absolute inset-0 w-full h-full hidden sm:block">
          <Image
            src="/images/bg-7.png"
            alt="Desktop background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="w-full h-full"
          />
        </div>
        {/* Mobile background */}
        <div className="absolute inset-0 w-full h-full sm:hidden">
    <div
        className="bg-cover bg-top h-screen"
        style={{
            backgroundImage: "url('images/bg-12.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
        }}
    >
    </div>
</div>

        <div className="relative max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl lg:text-5xl">
              Web Developer & Designer
            </h1>
            <p className="mt-3 max-w-xl mx-auto text-lg text-black dark:text-blue-400">
              I am Aarohi, I create stunning websites that drive results.
              <br></br>
              <br></br>
            </p>
            <div className="mt-5 flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-x-3 sm:space-y-0">
              <Link href="/contact" className="rounded-md shadow w-full sm:w-auto">
                <span className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-400 dark:text-white dark:bg-yellow-550 dark:hover:bg-yellow-400">
                  Get in touch
                </span>
              </Link>
              <Link href="/projects" className="rounded-md shadow w-full sm:w-auto">
                <span className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-500 bg-white hover:bg-gray-50 dark:text-yellow-400 dark:bg-black dark:hover:bg-black">
                  View my work
                </span>
              </Link>
            </div>
          </div>

          {/* Your Services Section */}
          <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Layout className="w-6 h-6" />, title: 'Web Design', description: 'Creating beautiful, responsive websites' },
                { icon: <Code className="w-6 h-6" />, title: 'Web Development', description: 'Building robust web applications' },
                { icon: <Cpu className="w-6 h-6" />, title: 'API Integration', description: 'Connecting your site to powerful services' },
                { icon: <Shield className="w-6 h-6" />, title: 'Security', description: 'Keeping your website safe and secure' },
                { icon: <Star className="w-6 h-6" />, title: 'SEO', description: 'Optimizing your site for search engines' },
                { icon: <ChevronRight className="w-6 h-6" />, title: 'Maintenance', description: 'Keeping your site up-to-date' },
              ].map((service, index) => (
                <div key={index} className="bg-white dark:bg-zinc-950 overflow-hidden shadow rounded-lg">
                  <div className="p-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-yellow-600 dark:text-yellow-400">
                        {service.icon}
                      </div>
                      <div className="ml-4 flex-1">
                        <dt className="text-lg font-medium text-gray-900 dark:text-white truncate">
                          {service.title}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                          {service.description}
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <FAQComponent />
      <Stack />
      <Footer />
    </div>
  );
};

export default HomePage;
