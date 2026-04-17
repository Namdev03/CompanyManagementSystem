import React from "react";
import { useNavigate } from "react-router";
import Register from "./Auth/Register";
import pagePath from "../Router/pagePath";

const HomePage = () => {
    const navigate =useNavigate()
  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">

      {/* Header */}
      <header className="bg-blue-900 text-white px-4 sm:px-6 md:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center sm:text-left">
          TechCorp IT Solutions
        </h1>

        <nav className="flex gap-3">
          <button
            onClick={() => (navigate(pagePath.LOGIN))}
            className="bg-green-500 px-4 py-2 rounded font-semibold hover:bg-green-600 text-sm sm:text-base"
          >
            Login
          </button>

          <button
            onClick={() => (navigate(pagePath.REGISTER))}
            className="bg-yellow-500 px-4 py-2 rounded font-semibold hover:bg-yellow-600 text-sm sm:text-base"
          >
            Sign Up
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Employee Management 
        </h2>

        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Manage Employees, Projects, and Company Operations efficiently in
          your IT company.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-10 md:px-16 py-12">

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Admin Panel
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Admins can manage employees, projects and company records.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Employee Dashboard
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Employees can check tasks, update progress and collaborate.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Project Management
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Track ongoing IT projects and manage deadlines.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white text-center py-4 mt-auto text-sm sm:text-base">
        <p>© 2026 TechCorp IT Company | All Rights Reserved</p>
      </footer>

    </div>
  );
};

export default HomePage;