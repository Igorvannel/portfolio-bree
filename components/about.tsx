import React from 'react';

const About = () => {
  const skills = [
    { name: 'Figma', percentage: 81, icon: 'Fg' },
    { name: 'Adobe XD', percentage: 65, icon: 'Xd' },
    { name: 'Adobe Photoshop', percentage: 58, icon: 'Ps' },
    { name: 'Adobe Illustrator', percentage: 75, icon: 'Ai' },
    { name: 'Adobe Premiere', percentage: 60, icon: 'Pr' }
  ];

  return (
      <section id="apropos" className="relative z-10 py-20 sm:py-32 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-20 items-start">
            {/* Left Content - Text and Skills */}
            <div className="w-full space-y-6 lg:space-y-8">
              {/* Title */}
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  WASHINGTON Temfing Brenda
                </h2>
                <p className="text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <span className="text-[#d2c5ea]">Designer UI/UX & </span>
                  <span
                      style={{
                        background: "linear-gradient(98.88deg, #B798C5 20.15%, #B923FF 75.28%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                  >
                  Artist
                </span>
                </p>
              </div>

              {/* Description Section */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Description :
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-[#d2c5ea] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  UI/UX Designer avec une expérience croissante dans la conception d'interfaces digitales, j'ai eu l'opportunité de travailler sur des projets variés, allant de la création de maquettes fonctionnelles à l'optimisation de parcours utilisateurs. Mon approche repose sur une compréhension fine des besoins des utilisateurs, une maîtrise des outils de design collaboratif et une capacité à transformer les idées en expériences intuitives, accessibles et cohérentes.
                </p>

                <p className="text-sm sm:text-base lg:text-lg text-[#d2c5ea] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Parallèlement à mon activité de designer, je suis également illustratrice, ce qui enrichit ma pratique par une sensibilité artistique affirmée. Cette double compétence me permet d'apporter une dimension visuelle forte à mes projets, en alliant fonctionnalité, esthétique et narration. Pour moi, un bon design est un équilibre subtil entre utilité, émotion et impact visuel.
                </p>
              </div>

              {/* Skills Section - All 5 skills on one row */}
              <div className="pt-6 lg:pt-8">
                <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-start">
                  {skills.map((skill, index) => (
                      <div key={index} className="flex flex-col items-center justify-center">
                        {/* Circular Progress with Icon */}
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-2">
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
                                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                            />
                          </div>
                        </div>

                        {/* Percentage */}
                        <p className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {skill.percentage}%
                        </p>

                        {/* Skill name */}
                        <p className="text-[10px] sm:text-xs text-[#d2c5ea] text-center leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {skill.name}
                        </p>
                      </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual Element - Image with gradient effect */}
            <div className="hidden lg:flex justify-end items-start lg:-mt-4 xl:-mt-8">
              <div className="relative w-full max-w-[380px] h-[450px] xl:max-w-[420px] xl:h-[500px]">
                {/* Black rounded container with image */}
                <div className="absolute inset-0 bg-black rounded-3xl overflow-hidden">
                  {/* Gradient Image */}
                  <img
                      src="/gradient-abstract.jpg"
                      alt="Abstract gradient background"
                      className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Gradient overlay effect */}
                  <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(185, 35, 255, 0.4) 0%, rgba(255, 107, 0, 0.4) 50%, rgba(185, 35, 255, 0.4) 100%)",
                        mixBlendMode: "screen"
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