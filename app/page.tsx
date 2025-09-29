import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"

export default function Home() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <img
                    src="/bg.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#1e0044]/80"></div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e0044]/60 via-[#2d1b69]/40 to-[#1e0044]/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Navigation */}
                <div className="pt-6 pb-4">
                    <Navbar />
                </div>

                {/* Hero Section */}
                <Hero />

                {/* Separator */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d2c5ea]/30 to-transparent my-16 lg:my-24"></div>

                {/* About Section */}
                <About />
            </div>
        </div>
    )
}