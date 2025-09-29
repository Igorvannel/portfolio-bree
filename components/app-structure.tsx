import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"

function App() {
  return (
    <div className="min-h-screen bg-[#1e0044] relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e0044] via-[#2d1b69] to-[#1e0044]" />

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
  )
}

export default App
