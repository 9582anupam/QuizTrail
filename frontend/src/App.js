import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/pages/home/components/Navbar"
// import Hero from "./components/pages/home/components/Hero"
// import VideoSection from "./components/pages/home/components/VideoSection"
// import TestimonialSection from "./components/pages/home/components/TestimonialSection"
// import FAQSection from "./components/pages/home/components/FAQSection"
// import ContactSection from "./components/pages/home/components/ContactSection"
import Footer from "./components/pages/home/components/Footer"
// import CTASection from "./components/pages/home/components/CTASection"
import Home from "./components/pages/home/Home";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={ <Home /> 
            }
          />
          {/* Add more routes here for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

