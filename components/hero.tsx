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
            {/* Black rounded container with image */}
            <div className="absolute inset-0 bg-black rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden">
              {/* Profile Image */}
              <img
                  src="/pp.jpg"
                  alt="WASHINGTON Temfing Brenda - UI/UX Designer"
                  className="absolute inset-0 w-full h-full object-cover"
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
