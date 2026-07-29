"use client"

import React from 'react';
import { useLanguage } from "@/lib/language-context"

const About = () => {
  const { t } = useLanguage()

  const skills = [
    { name: 'Figma', percentage: 81, icon: 'Fg' },
    { name: 'Adobe XD', percentage: 65, icon: 'Xd' },
    { name: 'Adobe Photoshop', percentage: 58, icon: 'Ps' },
    { name: 'Adobe Illustrator', percentage: 75, icon: 'Ai' },
    { name: 'Adobe Premiere', percentage: 60, icon: 'Pr' }
  ];

  return (
      <section id="apropos" className="relative z-10 py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1300px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-start">
            {/* Left Content - Text and Skills */}
            <div className="w-full space-y-5 lg:space-y-7">
              {/* Title */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t.about.name}
                </h2>
                <p className="text-xl sm:text-2xl lg:text-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <span className="text-[#d2c5ea]">{t.about.role1}</span>
                  <span
                      style={{
                        background: "linear-gradient(98.88deg, #B798C5 20.15%, #B923FF 75.28%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                  >
                  {t.about.role2}
                </span>
                </p>
              </div>

              {/* Description Section */}
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t.about.descriptionLabel}
                </h3>

                <p className="text-sm sm:text-base lg:text-base text-[#d2c5ea] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t.about.p1}
                </p>

                <p className="text-sm sm:text-base lg:text-base text-[#d2c5ea] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t.about.p2}
                </p>
              </div>

              {/* Skills Section - All 5 skills on one row */}
              <div className="pt-4 lg:pt-6">
                <div className="flex flex-wrap gap-3 sm:gap-5 lg:gap-6 justify-start">
                  {skills.map((skill, index) => (
                      <div key={index} className="flex flex-col items-center justify-center">
                        {/* Circular Progress with Icon */}
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-2">
                          <svg className="transform -rotate-90 w-full h-full">
                            {/* Background circle */}
                            <circle
                                cx="50%"
                                cy="50%"
                                r="42%"
                                stroke="#FFFFFF20"
                                strokeWidth="5"
                                fill="none"
                            />
                            {/* Progress circle */}
                            <circle
                                cx="50%"
                                cy="50%"
                                r="42%"
                                stroke="#d2c5ea"
                                strokeWidth="5"
                                fill="none"
                                strokeDasharray={`${2 * Math.PI * 42} ${2 * Math.PI * 42}`}
                                strokeDashoffset={`${2 * Math.PI * 42 * (1 - skill.percentage / 100)}`}
                                strokeLinecap="round"
                            />
                          </svg>
                          {/* Icon image in center */}
                          <div className="absolute inset-0 flex items-center justify-center p-3">
                            <img
                                src={`/icons/${skill.icon.toLowerCase()}.svg`}
                                alt={skill.name}
                                className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain"
                            />
                          </div>
                        </div>

                        {/* Percentage */}
                        <p className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {skill.percentage}%
                        </p>

                        {/* Skill name */}
                        <p className="text-[9px] sm:text-[11px] text-[#d2c5ea] text-center leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {skill.name}
                        </p>
                      </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual Element - Image with gradient effect */}
            <div className="hidden lg:flex justify-end items-start lg:-mt-2 xl:-mt-4">
              <div className="relative w-full max-w-[340px] h-[400px] xl:max-w-[380px] xl:h-[450px]">
                {/* Black rounded container with image */}
                <div className="absolute inset-0 bg-black rounded-3xl overflow-hidden">
                  {/* Office Portrait Image */}
                  <img
                      src="/profile-office.jpg"
                      alt="WASHINGTON Temfing Brenda - Designer UI/UX au bureau"
                      className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Subtle gradient overlay for brand consistency */}
                  <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(185, 35, 255, 0.12) 0%, rgba(30, 0, 68, 0.05) 50%, rgba(185, 35, 255, 0.12) 100%)",
                        mixBlendMode: "overlay"
                      }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative curved lines - Positioned like in the image */}
        <svg
            className="absolute top-10 left-1/4 w-48 h-48 opacity-20 pointer-events-none hidden lg:block"
            viewBox="0 0 200 200"
            fill="none"
        >
          <path
              d="M 0 100 Q 50 50 100 100 T 200 100"
              stroke="#d2c5ea"
              strokeWidth="2"
          />
        </svg>

        <svg
            className="absolute bottom-20 right-1/4 w-64 h-64 opacity-20 pointer-events-none hidden lg:block"
            viewBox="0 0 200 200"
            fill="none"
        >
          <path
              d="M 0 100 Q 100 0 200 100 T 400 100"
              stroke="#d2c5ea"
              strokeWidth="2"
          />
        </svg>
      </section>
  );
};

export default About;
