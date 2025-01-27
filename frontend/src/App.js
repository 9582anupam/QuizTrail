import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/pages/home/components/Navbar";
import Footer from "./components/pages/home/components/Footer";
import Home from "./components/pages/home/home";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-900 text-white">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App

