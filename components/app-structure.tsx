import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <img
                    src="/bg.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-[#1e0044]/80"></div>
                {/* Optional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e0044]/60 via-[#2d1b69]/40 to-[#1e0044]/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Navbar with equal margins */}
                <div className="px-4 sm:px-8 lg:px-16 pt-4">
                    <Navbar />
                </div>

                {/* Hero Section */}
                <Hero />

                {/* Separator */}
                <div className="h-20 sm:h-32 lg:h-40"></div>

                {/* About Section */}
                <About />
            </div>
        </div>
    );
}

export default App;