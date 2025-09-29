import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1e0044] relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e0044] via-[#2d1b69] to-[#1e0044]" />

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
