import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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