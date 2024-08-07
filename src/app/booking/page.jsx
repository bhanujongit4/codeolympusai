'use client'

import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Footer from '../components/Footer';
import FAQComponent from '../components/Faq';

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ContactForm = () => {
  const plans = [
    {
      title: "Basic Website",
      price: "$499",
      features: ["5 Pages", "Basic Design", "Responsive Layout", "SEO Setup", "1 Month Support"],
    },
    {
      title: "Business Website",
      price: "$999",
      features: ["10 Pages", "Custom Design", "Responsive Layout", "SEO Setup", "3 Months Support"],
    },
    {
      title: "E-Commerce Website",
      price: "$1499",
      features: ["Unlimited Products", "Custom Design", "Payment Gateway Integration", "SEO Setup", "6 Months Support"],
    },
    {
      title: "Portfolio Website",
      price: "$699",
      features: ["6 Pages", "Custom Design", "Responsive Layout", "SEO Setup", "2 Months Support"],
    },
    {
      title: "Custom Website",
      price: "Starts at $1999",
      features: ["Custom Design", "Advanced Functionality", "SEO Setup", "1 Year Support", "Ongoing Maintenance"],
    },
  ];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const testimonials = [
    { name: "John Doe", text: "Amazing service! My website looks fantastic." },
    { name: "Jane Smith", text: "Professional and responsive team. Highly recommended!" },
    { name: "Mike Johnson", text: "The e-commerce solution boosted my sales significantly." },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'contactInquiries'), formData);
      console.log("Document written with ID: ", docRef.id);
      setSubmitted(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="bg-white dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-black dark:text-white text-center mb-12">Book Your Call</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            {submitted ? (
              <p className="text-center text-green-500 mt-6">Thank you for your message! We will get back to you shortly.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-zinc-bg-zinc-800 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 rounded-md border-gray-600 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 bg-zinc-200 dark:bg-zinc-800 dark:border-zinc-bg-zinc-800 dark:text-white sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-zinc-bg-zinc-800 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 bg-zinc-200 dark:bg-zinc-800 dark:border-zinc-bg-zinc-800 dark:text-white sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-zinc-bg-zinc-800 dark:text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 bg-zinc-200 dark:bg-zinc-800 dark:border-zinc-bg-zinc-800 dark:text-white sm:text-sm"
                    rows="4"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-400 dark:text-white dark:bg-yellow-550 dark:hover:bg-yellow-400"
                >
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* Testimonials */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl text-black dark:text-white mb-6">What Our Clients Say</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg">
                  <p className="text-blue-600 dark:text-blue-600 italic">"{testimonial.text}"</p>
                  <p className="text-black dark:text-white font-semibold mt-2">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

       <FAQComponent></FAQComponent>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
