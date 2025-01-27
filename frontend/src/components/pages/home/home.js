import React from "react"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection"
import TestimonialSection from "./components/TestimonialSection"
import FAQSection from "./components/FAQSection"
import ContactSection from "./components/ContactSection"
import CTASection from "./components/CTASection"

const Home = () => {

    return (
        <div>
            <div className="flex flex-col min-h-screen bg-gray-900 text-white">
                <Hero />
                <VideoSection />
                <TestimonialSection />
                <FAQSection />
                <CTASection />
                <ContactSection />
            </div>
        </div>
    );
};

export default Home;