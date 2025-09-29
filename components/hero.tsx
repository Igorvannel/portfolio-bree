const Hero = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-16 py-10 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center min-h-[70vh] lg:min-h-[80vh]">
        {/* Left Content */}
        <div className="w-full max-w-[1277px] flex flex-col gap-6 sm:gap-8 lg:gap-[40px]">
          {/* Title Section */}
          <div className="space-y-1 sm:space-y-2">
            <h1
              className="font-bold leading-[1] tracking-[-0.05em] m-0 p-0"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[96px] text-[#d2c5ea] mb-0">DESIGNER</div>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[96px] mt-0">
                <span className="text-[#d2c5ea]">UI/UX & </span>
                <span
                  style={{
                    background: "linear-gradient(98.88deg, #B798C5 20.15%, #B923FF 75.28%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ARTIST
                </span>
              </div>
            </h1>
          </div>

          {/* Description Paragraphs */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[40px] mt-6 sm:mt-8 lg:mt-[40px]">
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-[1.2] tracking-[-0.04em] font-normal text-[#d2c5ea] m-0"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Je suis UI/UX Designer basé à Douala, Cameroun, passionné par la création d'expériences digitales
              intuitives et centrées sur l'utilisateur.
            </p>

            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-[1.2] tracking-[-0.04em] font-normal text-[#d2c5ea] m-0"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              J'accompagne les entreprises et les startups dans la conception d'interfaces web et mobile qui allient
              esthétique, fonctionnalité et accessibilité.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-[40px]">
            <button
              className="bg-[#e9deff] text-[#1e0044] hover:bg-[#d2c5ea] font-semibold px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg lg:text-xl transition-all shadow-lg w-full sm:w-auto"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Portfolio
            </button>
            <button
              className="border-2 border-[#e9deff] text-[#e9deff] hover:text-white hover:bg-[#e9deff]/10 font-semibold px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg lg:text-xl transition-all w-full sm:w-auto"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Me Contacter
            </button>
          </div>
        </div>

        {/* Right Visual Element */}
        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative w-full max-w-[400px] h-[450px] sm:max-w-[450px] sm:h-[500px] lg:w-[550px] lg:h-[600px]">
            {/* Black rounded container */}
            <div className="absolute inset-0 bg-black rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden">
              {/* Glowing curved lines */}
              <div className="absolute inset-0">
                {/* Top curved line */}
                <div className="absolute top-8 sm:top-10 lg:top-12 right-0 w-full h-28 sm:h-32 lg:h-40">
                  <div className="absolute top-0 right-0 w-3/4 h-full rounded-l-full bg-gradient-to-l from-purple-400 via-pink-400 to-orange-400 opacity-80 blur-sm"></div>
                  <div className="absolute top-0 right-0 w-3/4 h-full rounded-l-full bg-gradient-to-l from-purple-300 via-pink-300 to-orange-300"></div>
                </div>

                {/* Middle curved section */}
                <div className="absolute top-1/3 right-0 w-full h-36 sm:h-40 lg:h-48">
                  <div className="absolute top-0 right-0 w-4/5 h-full rounded-l-full bg-gradient-to-l from-purple-500 via-purple-400 to-pink-400 opacity-60 blur-md"></div>
                  <div className="absolute top-0 right-0 w-4/5 h-full rounded-l-full bg-gradient-to-l from-purple-400 via-purple-300 to-pink-300 opacity-80"></div>
                </div>

                {/* Bottom curved line */}
                <div className="absolute bottom-8 sm:bottom-10 lg:bottom-12 left-0 w-full h-24 sm:h-28 lg:h-32">
                  <div className="absolute bottom-0 left-0 w-2/3 h-full rounded-r-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 opacity-70 blur-sm"></div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-full rounded-r-full bg-gradient-to-r from-purple-300 via-pink-300 to-purple-200"></div>
                </div>

                {/* Additional glow effects */}
                <div className="absolute top-1/4 right-1/4 w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 bg-purple-400 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-pink-400 rounded-full opacity-25 blur-lg"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-44 lg:w-48 h-40 sm:h-44 lg:h-48 bg-purple-500 rounded-full opacity-15 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
