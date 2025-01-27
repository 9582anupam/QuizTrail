import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-indigo-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Challenge Yourself?</h2>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Join thousands of quiz enthusiasts and start your journey of knowledge and fun today!
        </p>
        <Link
          to="/signup"
          className="inline-flex items-center bg-white text-purple-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Sign Up Now
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </section>
  )
}

export default CTASection

