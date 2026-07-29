"use client"

import { useLanguage } from "@/lib/language-context"

const Journey = () => {
    const { t } = useLanguage()

    return (
        <section id="parcours" className="relative z-10 py-16 sm:py-24 lg:py-28">
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-[1100px]">
                {/* Header */}
                <div className="max-w-3xl mb-10 sm:mb-16">
                    <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {t.journey.title}
                    </h3>
                    <span
                        className="text-xl sm:text-2xl lg:text-3xl font-light block mb-3 sm:mb-6"
                        style={{
                            background: "linear-gradient(98.88deg, #B798C5 20.15%, #B923FF 75.28%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
            {t.journey.subtitle}
          </span>
                    <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
                        {t.journey.intro}
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative pl-8 sm:pl-10">
                    {/* Vertical line */}
                    <div className="absolute left-2 sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[#B923FF] via-[#8B7AB8] to-transparent" />

                    <div className="flex flex-col gap-8 sm:gap-10">
                        {t.journey.items.map((item, idx) => (
                            <div key={idx} className="relative">
                                {/* Dot */}
                                <span
                                    className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full border-2"
                                    style={{
                                        borderColor: item.type === "experience" ? "#B923FF" : "#d2c5ea",
                                        background: item.current ? "#B923FF" : "#1e0044",
                                    }}
                                />

                                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span
                      className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full"
                      style={{
                          color: item.type === "experience" ? "#1e0044" : "#e9deff",
                          background: item.type === "experience" ? "#e9deff" : "#B923FF33",
                          border: item.type === "education" ? "1px solid #B923FF66" : "none",
                      }}
                  >
                    {item.type === "experience" ? t.journey.experienceLabel : t.journey.educationLabel}
                  </span>
                                    {item.current && (
                                        <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white/80">
                      {t.journey.current}
                    </span>
                                    )}
                                </div>

                                <h4 className="text-white text-base sm:text-lg lg:text-xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                    {item.title}
                                </h4>
                                <p className="text-[#d2c5ea] text-sm sm:text-base font-medium mb-2">
                                    {item.org} <span className="text-white/50 font-normal">• {item.period}</span>
                                </p>

                                {item.bullets.length > 0 && (
                                    <ul className="space-y-1">
                                        {item.bullets.map((b, i) => (
                                            <li key={i} className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                                                • {b}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey