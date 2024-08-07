import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import './globals.css';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}
export const metadata = {
  title: "Aarohi Portfolio",
  description: "This My Portfolio",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="images/logo-no-background.png" type="image/png" />
      </head>
      <body className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
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
