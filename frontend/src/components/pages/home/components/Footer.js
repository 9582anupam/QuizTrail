import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              QuizMaster
            </h3>
          </div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              <li>
                <Link to="/" className="hover:text-purple-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quizzes" className="hover:text-purple-400 transition-colors duration-300">
                  Quizzes
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-400 transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-purple-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-purple-400 transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">© 2023 QuizMaster. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer

