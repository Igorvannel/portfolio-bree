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
      <section id="apropos" className="relative z-10 py-20 sm:py-32 lg:py-40">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-7xl">
          {/* Title */}
          <div className="mb-12 lg:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              WASHINGTON Temfing Brenda
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#d2c5ea]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Designer UI/UX & <span className="text-purple-400">Artist</span>
            </p>
          </div>

          {/* Description Section */}
          <div className="mb-16 lg:mb-24 max-w-5xl mx-auto space-y-6 lg:space-y-8 px-4 sm:px-8 lg:px-0">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-6 lg:mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Description :
            </h3>

            <p className="text-sm sm:text-base lg:text-lg text-[#d2c5ea] leading-relaxed text-justify" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              UI/UX Designer avec une expérience croissante dans la conception d'interfaces digitales, j'ai eu l'opportunité de travailler sur des projets variés, allant de la création de maquettes fonctionnelles à l'optimisation de parcours utilisateurs. Mon approche repose sur une compréhension fine des besoins des utilisateurs, une maîtrise des outils de design collaboratif et une capacité à transformer les idées en expériences intuitives, accessibles et cohérentes.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-[#d2c5ea] leading-relaxed text-justify" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Parallèlement à mon activité de designer, je suis également illustratrice, ce qui enrichit ma pratique par une sensibilité artistique affirmée. Cette double compétence me permet d'apporter une dimension visuelle forte à mes projets, en alliant fonctionnalité, esthétique et narration. Pour moi, un bon design est un équilibre subtil entre utilité, émotion et impact visuel.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-16 lg:mt-24">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center justify-center">
                    {/* Circular Progress with Image */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-4">
                      <svg className="transform -rotate-90 w-full h-full">
                        {/* Background circle */}
                        <circle
                            cx="50%"
                            cy="50%"
                            r="42%"
                            stroke="#FFFFFF20"
                            strokeWidth="6"
                            fill="none"
                        />
                        {/* Progress circle */}
                        <circle
                            cx="50%"
                            cy="50%"
                            r="42%"
                            stroke="#d2c5ea"
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 42} ${2 * Math.PI * 42}`}
                            strokeDashoffset={`${2 * Math.PI * 42 * (1 - skill.percentage / 100)}`}
                            strokeLinecap="round"
                        />
                      </svg>
                      {/* Icon image in center */}
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <img
                            src={`/icons/${skill.icon.toLowerCase()}.svg`}
                            alt={skill.name}
                            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                        />
                      </div>
                    </div>

                    {/* Percentage */}
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {skill.percentage}%
                    </p>

                    {/* Skill name */}
                    <p className="text-xs sm:text-sm lg:text-base text-[#d2c5ea] text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {skill.name}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative curved line */}
        <div className="absolute right-0 bottom-10 w-48 h-48 lg:w-64 lg:h-64 opacity-20 pointer-events-none hidden lg:block">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
                d="M 0 100 Q 100 0 200 100 T 400 100"
                stroke="#d2c5ea"
                strokeWidth="2"
                fill="none"
            />
          </svg>
        </div>
      </section>
  );
};

export default About;