import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/pages/home/components/Navbar";
import Footer from "./components/pages/home/components/Footer";
import First from "./components/pages/home/First";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-900 text-white">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<First />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App

