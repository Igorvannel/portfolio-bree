
'use client'

import { useLanguage } from "@/lib/language-context"

const Hero = () => {
  const { t } = useLanguage()

  return (
    <div id="accueil" className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-16 py-8 sm:py-14 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[62vh] lg:min-h-[70vh]">
        {/* Left Content */}
        <div className="w-full max-w-[1100px] flex flex-col gap-5 sm:gap-7">
          {/* Title Section */}
          <div className="space-y-1">
            <h1
              className="font-bold leading-[1] tracking-[-0.05em] m-0 p-0"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[78px] text-[#d2c5ea] mb-0">
                {t.hero.title1}
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[78px] mt-0">
                <span className="text-[#d2c5ea]">{t.hero.title2a}</span>
                <span
                  style={{
                    background: "linear-gradient(98.88deg, #B798C5 20.15%, #B923FF 75.28%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {t.hero.title2b}
                </span>
              </div>
            </h1>
          </div>

          {/* Description Paragraphs */}
          <div className="flex flex-col gap-5 sm:gap-6 mt-4 sm:mt-6">
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[26px] leading-[1.25] tracking-[-0.03em] font-normal text-[#d2c5ea] m-0"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {t.hero.p1}
            </p>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-[26px] leading-[1.25] tracking-[-0.03em] font-normal text-[#d2c5ea] m-0"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {t.hero.p2}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
            <a
              href="/Portfolio%20FR.pdf"
              download
              className="bg-[#e9deff] text-[#1e0044] hover:bg-[#d2c5ea] font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg transition-all shadow-lg w-full sm:w-auto text-center"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {t.hero.btnPortfolio}
            </a>
            <a
              href="/CV_Washington_Brenda_UIUX_Designer.pdf"
              download
              className="bg-transparent border-2 border-[#B923FF] text-[#e9deff] hover:bg-[#B923FF]/10 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg transition-all w-full sm:w-auto text-center"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {t.hero.btnCv}
            </a>
            <a
              href="#contact"
              className="border-2 border-[#e9deff] text-[#e9deff] hover:text-white hover:bg-[#e9deff]/10 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg transition-all w-full sm:w-auto text-center"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {t.hero.btnContact}
            </a>
          </div>
        </div>

        {/* Right Visual Element */}
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-full max-w-[340px] h-[380px] sm:max-w-[380px] sm:h-[420px] lg:w-[460px] lg:h-[500px]">
            {/* Black rounded container with image */}
            <div className="absolute inset-0 bg-black rounded-2xl sm:rounded-3xl lg:rounded-[28px] overflow-hidden">
              {/* Profile Image */}
              <img
                  src="/profile-purple.jpg"
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
