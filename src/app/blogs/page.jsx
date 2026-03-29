'use client'

import { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import Image from 'next/image';
import Footer from "../components/Footer";

// Initialize Firebase (use environment variables in production)
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

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRef = collection(db, 'blogs');
        const querySnapshot = await getDocs(blogsRef);
        const fetchedBlogs = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div >
      <section className="bg-white dark:bg-black min-h-screen">
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-black dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Blogs 📝
            </h1>
            <p className="max-w-2xl mx-auto mt-5 text-xl text-gray-700 dark:text-gray-300">
            My thoughts, musings, and life adventures. Join me on this journey.
            </p>
          </div>

          {loading ? (
            <p className="text-center mt-12 text-xl text-gray-700 dark:text-gray-300">Loading blogs...</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-gray-100 dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden">
                  <div className="relative">
                    <Image 
                      className="object-cover object-center w-full h-64 lg:h-80"
                      src={blog.imageUrl} 
                      alt={blog.title} 
                      width={500} 
                      height={300}
                    />
                  </div>
                  <div className="p-6">
                    <h1 className="text-xl font-semibold text-black dark:text-white">
                      {blog.title}
                    </h1>
                    <hr className="w-24 my-4 border-yellow-500 dark:border-yellow-400" />
                    <Link href={`/blogs/${blog.id}`} className="text-lg font-medium text-yellow-600 hover:text-yellow-500 dark:text-yellow-400 dark:hover:text-yellow-300">
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <Footer></Footer>
      </section>
      
    </div>
  );
}

export default Blogs;
