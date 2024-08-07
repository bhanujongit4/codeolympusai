import React from 'react'
import Image from 'next/image';

const Stack = () => {
  return (
    <div>
          <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-black dark:text-white text-center">Tech Stack</h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <Image src="/images/next.jpg" alt="Next.js Logo" width={40} height={40} />, title: 'Next.js', description: 'A react based framework for web devlopment' },
            { icon: <Image src="/images/firebaselogo.png" alt="Next.js Logo" width={40} height={40} />, title: 'Firebase', description: 'Cloud-hosted NoSQL database' },
            { icon: <Image src="/images/reactlogo.png" alt="Next.js Logo" width={40} height={40} />, title: 'React', description: 'Javascript library for web devlopment' },
            { icon: <Image src="/images/tailwindlogo.png" alt="Next.js Logo" width={40} height={40} />, title: 'Tailwind', description: 'CSS library' },
            { icon: <Image src="/images/docker.png" alt="Next.js Logo" width={40} height={40} />, title: 'Docker', description: 'Operating system for containers' },
            { icon: <Image src="/images/gemini.png" alt="Next.js Logo" width={40} height={40} />, title: 'Gemini', description: 'Large Language Model' },
            { icon: <Image src="/images/postgres.png" alt="Next.js Logo" width={40} height={40} />, title: 'Postgres', description: 'SQl Database' },
            { icon: <Image src="/images/mongodblogo.png" alt="Next.js Logo" width={40} height={40} />, title: 'MongoDB', description: 'No-SQL database' },
            { icon: <Image src="/images/pytorch.png" alt="Next.js Logo" width={40} height={40} />, title: 'Pytorch', description: 'Library for Deep Learning' },
          ].map((service, index) => (
            <div key={index} className="bg-gray-50 dark:bg-zinc-950 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-yellow-600 dark:text-yellow-400">
                    {service.icon}
                  </div>
                  <div className="ml-5 w-0 flex-1">
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
  )
}

export default Stack