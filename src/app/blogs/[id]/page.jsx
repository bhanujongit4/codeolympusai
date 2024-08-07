'use client'

import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Typography } from '@mui/material';
import Footer from "../../components/Footer"
import Image from 'next/image';

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

const BlogPost = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;

      try {
        const blogRef = doc(db, 'blogs', id);
        const blogSnap = await getDoc(blogRef);

        if (blogSnap.exists()) {
          setBlog({ id: blogSnap.id, ...blogSnap.data() });
        } else {
          console.log("No such blog!");
        }
      } catch (error) {
        console.error("Error fetching blog: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-white dark:bg-black min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full">
          <div className="h-12 w-3/4 bg-gray-300 dark:bg-gray-700 shimmer mb-4 rounded"></div>
          <div className="h-96 w-full bg-gray-300 dark:bg-gray-700 shimmer rounded"></div>
          <div className="mt-6">
            <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 shimmer mb-4 rounded"></div>
            <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-700 shimmer rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="bg-white dark:bg-black min-h-screen flex items-center justify-center text-gray-800 dark:text-white">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <section className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-black dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {blog.title}
          </h1>
        </div>

        <div className="flex justify-center mt-10">
          <Image
            className="object-contain w-full h-96 rounded-xl lg:w-4/5"
            src={blog.imageUrl}
            alt={blog.title}
            width={800}
            height={500}
          />
        </div>

        <div className="mt-12 max-w-4xl mx-auto text-lg text-gray-800 dark:text-gray-300">
          <Typography variant="body1" component="div" sx={{ whiteSpace: 'pre-wrap' }}>
            {blog.content}
          </Typography>
        </div>
      </section>
      <Footer></Footer>
    </div>
    
  );
};

export default BlogPost;
