import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="flex flex-col items-center text-center max-w-lg">
        {/* Animated Icon */}
        <div className="mb-8 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Error Code and Message */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-red-600 tracking-wider mb-4">
          404
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Call to Action */}
        <a
          href="/"
          className="inline-block px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
        >
          Go Back to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;