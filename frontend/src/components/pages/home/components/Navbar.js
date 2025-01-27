import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          QuizMaster
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-purple-400 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/quizzes" className="text-white hover:text-purple-400 transition-colors duration-300">
                Quizzes
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-purple-400 transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-purple-400 transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 mt-4 px-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/quizzes"
                className="text-white hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Quizzes
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar

