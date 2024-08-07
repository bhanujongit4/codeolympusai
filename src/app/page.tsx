export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Welcome to My Theme-Switched App
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        This is an example of a Next.js app with Tailwind CSS and a dark/light theme switch.
      </p>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Feature Highlight
        </h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Responsive design</li>
          <li>Dark/Light theme switch</li>
          <li>Smooth theme transition</li>
          <li>Persistent theme preference</li>
        </ul>
      </div>
    </div>
  );
}