import { ThemeProvider } from './components/ThemeContext';
import './globals.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';

interface RootLayoutProps {
  children: ReactNode;
}
export const metadata: Metadata = {
  title: 'Aarohi Bhanuj Chowdhary | Portfolio',
  description:
    'Portfolio of Aarohi Bhanuj Chowdhary - Software Engineer focused on Full Stack and AI projects, internships, and freelance work.',
  icons: {
    icon: '/images/aigen.png',
    shortcut: '/images/aigen.png',
    apple: '/images/aigen.png',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <ThemeProvider>
          <main className="container mx-auto ">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
