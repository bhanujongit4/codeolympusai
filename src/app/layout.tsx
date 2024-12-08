import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import './globals.css';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}
export const metadata = {
  title: "CodeOlympusAi",
  description: "Professional web development services with AI-powered solutions and SEO expertise. Elevate your online presence with custom websites tailored to your needs. Contact us to bring your vision to life!",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="images/logo-no-background.png" type="image/png" />
      </head>
       <body className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="container mx-auto ">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
