'use client'

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">
          {question}
        </span>
        {isOpen ? (
          <FaChevronUp className="text-yellow-500 dark:text-yellow-400" />
        ) : (
          <FaChevronDown className="text-yellow-500 dark:text-yellow-400" />
        )}
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-base text-gray-700 dark:text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQComponent = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I offer web development, mobile app development using technologies like React, Node.js and Various other technologies."
    },
    {
      question: "Why Should We Hire You ?",
      answer: "When You are looking to scale your bussiness, Hiring a web devloper is often not enough. You need a dedicated person to contribute in your bussiness. Also to be better than the cheap no code solutions, Astronomically more affordable than big tech companies, You need to put your serach on a halt and start working with me."
    },
    {
      question: "Do you take on freelance projects?",
      answer: "Yes, I'm open to freelance opportunities. Please contact me with details about your project for further discussion."
    },
    {
      question: "What is your typical process for working with clients?",
      answer: "My process typically involves an initial consultation, project scoping, regular check-ins during development, and thorough testing before delivery. All on the platform of your choice."
    }
  ];

  return (
    <div className="bg-white dark:bg-black py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;