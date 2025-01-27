import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in-down pb-2">
          Test Your Knowledge with
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Fun and Engaging Quizzes!
          </span>
        </h1>
        <p className="text-xl mb-8 animate-fade-in-up max-w-2xl mx-auto">
          Challenge yourself, learn something new, and compete with friends in our diverse range of quizzes.
        </p>
        <Link
          to="/quizzes"
          className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up"
        >
          Start Quiz Now
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </section>
  )
}

export default Hero

