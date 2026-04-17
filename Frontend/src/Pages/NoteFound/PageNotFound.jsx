import React from "react";
import { Link } from "react-router";
import pagePath from "../../Router/pagePath";


const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        
        <h1 className="text-8xl font-bold text-gray-800">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to={pagePath.HOME}
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
};

export default PageNotFound;