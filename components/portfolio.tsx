"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import type { Project } from "@/lib/translations"

// Card width per project (kept distinct so the carousel has visual rhythm)
const widths: Record<string, number> = {
    "1": 380,
    "2": 680,
    "3": 380,
    "4": 380,
    "5": 380,
    "6": 680,
    "7": 680,
}

// Small collage thumbnail for projects that have several joined screenshots
function CoverThumb({ project }: { project: Project }) {
    if (project.images.length === 1) {
        return (
            <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
            />
        )
    }
    return (
        <div className="absolute inset-0 grid grid-cols-3 gap-[2px] bg-black">
            {project.images.slice(0, 3).map((img, i) => (
                <div key={i} className="relative h-full w-full">
                    <Image src={img} alt={`${project.title} ${i + 1}`} fill className="object-cover" />
                </div>
            ))}
        </div>
    )
}

export default function Portfolio() {
    const { t } = useLanguage()
    const projects = t.projects
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [imageIndex, setImageIndex] = useState(0)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const openProject = (project: Project) => {
        setSelectedProject(project)
        setImageIndex(0)
    }

    const closeModal = () => {
        setSelectedProject(null)
    }

    const nextImage = () => {
        if (!selectedProject) return
        setImageIndex((i) => (i + 1) % selectedProject.images.length)
    }

    const prevImage = () => {
        if (!selectedProject) return
        setImageIndex((i) => (i === 0 ? selectedProject.images.length - 1 : i - 1))
    }

    const scrollToProject = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 500
            const newScrollPosition = scrollContainerRef.current.scrollLeft +
                (direction === 'right' ? scrollAmount : -scrollAmount)

            scrollContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            })
        }
    }

    const navigateProject = (direction: 'prev' | 'next') => {
        if (!selectedProject) return

        const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
        const newIndex = direction === 'prev'
            ? (currentIndex === 0 ? projects.length - 1 : currentIndex - 1)
            : (currentIndex === projects.length - 1 ? 0 : currentIndex + 1)

        setSelectedProject(projects[newIndex])
        setImageIndex(0)
    }

    return (
        <section id="portfolio" className="relative min-h-screen">
            {/* Decorative curved lines */}
            <svg
                className="absolute top-0 right-0 w-64 lg:w-96 h-full opacity-20 pointer-events-none"
                viewBox="0 0 400 1000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M350 0C350 100 250 150 200 250C150 350 100 400 150 500C200 600 300 650 300 750C300 850 200 900 150 1000"
                    stroke="#8B7AB8"
                    strokeWidth="2"
                />
            </svg>

            <svg
                className="absolute bottom-0 left-0 w-64 lg:w-96 h-full opacity-20 pointer-events-none"
                viewBox="0 0 400 1000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M50 1000C50 900 150 850 200 750C250 650 300 600 250 500C200 400 100 350 100 250C100 150 200 100 250 0"
                    stroke="#8B7AB8"
                    strokeWidth="2"
                />
            </svg>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-14">
                {/* Header Section */}
                <div className="max-w-4xl mb-10 sm:mb-16">
                    <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3 tracking-tight">
                        {t.portfolio.title}
                    </h3>
                    <span
                        className="text-xl sm:text-2xl lg:text-3xl font-light block mb-3 sm:mb-6"
                        style={{
                            background: "linear-gradient(98.88deg, #B798C5 20.15%, #B923FF 75.28%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        {t.portfolio.subtitle}
                    </span>
                    <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                        {t.portfolio.intro}
                    </p>
                </div>

                {/* Portfolio Cards with Navigation */}
                <div className="relative">
                    {/* Navigation Arrows for Portfolio Carousel - Desktop only */}
                    <button
                        onClick={() => scrollToProject('left')}
                        className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white items-center justify-center text-2xl text-gray-800 transition-all shadow-lg"
                        aria-label={t.portfolio.prev}
                    >
                        ‹
                    </button>

                    <button
                        onClick={() => scrollToProject('right')}
                        className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white items-center justify-center text-2xl text-gray-800 transition-all shadow-lg"
                        aria-label={t.portfolio.next}
                    >
                        ›
                    </button>

                    {/* Desktop: Horizontal scroll carousel */}
                    <div
                        ref={scrollContainerRef}
                        className="hidden lg:flex gap-6 overflow-x-auto pb-8 scrollbar-hide scroll-smooth"
                    >
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => openProject(project)}
                                className="relative flex-shrink-0 h-[600px] rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105"
                                style={{ width: `${widths[project.id] ?? 400}px` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                                <CoverThumb project={project} />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <h3 className="text-white text-2xl font-bold">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile/Tablet: Vertical Stack */}
                    <div className="lg:hidden flex flex-col gap-6 sm:gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => openProject(project)}
                                className="relative w-full h-[480px] sm:h-[580px] rounded-2xl overflow-hidden group cursor-pointer transition-transform active:scale-95"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                                <CoverThumb project={project} />
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
                                    <h3 className="text-white text-xl sm:text-2xl font-bold">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-[#1a0a3e]/95 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-7xl h-auto lg:h-[85vh] flex flex-col lg:flex-row gap-6 lg:gap-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Left side - Text content */}
                        <div className="flex-1 flex flex-col justify-center space-y-6 lg:space-y-10 bg-[#1a0a3e] lg:bg-transparent p-6 lg:p-0 rounded-xl lg:rounded-none overflow-y-auto">
                            <div>
                                <h3 className="text-white text-xl sm:text-2xl font-bold mb-1">{selectedProject.title}</h3>
                            </div>
                            {/* Description Section */}
                            <div>
                                <h2 className="text-white text-xl sm:text-2xl font-bold mb-3 lg:mb-4 tracking-wide">
                                    {t.portfolio.description}
                                </h2>
                                <div className="border-l-4 border-[#8B7AB8] pl-4 lg:pl-6">
                                    <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light">
                                        {selectedProject.description}
                                    </p>
                                </div>
                            </div>

                            {/* Tools Section */}
                            <div>
                                <h2 className="text-white text-xl sm:text-2xl font-bold mb-3 lg:mb-4 tracking-wide">
                                    {t.portfolio.tools}
                                </h2>
                                <div className="border-l-4 border-[#8B7AB8] pl-4 lg:pl-6">
                                    <ul className="space-y-2">
                                        {selectedProject.tools.map((tool, index) => (
                                            <li key={index} className="text-white/90 text-sm sm:text-base font-light">
                                                • {tool}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Image block (swipeable gallery for multi-screenshot projects) */}
                        <div className="flex-1 relative">
                            {selectedProject.images.length > 1 ? (
                                <div className="relative w-full h-[420px] lg:h-full rounded-xl overflow-hidden bg-black/20">
                                    <p className="sr-only">{t.portfolio.gallery}</p>
                                    <Image
                                        key={imageIndex}
                                        src={selectedProject.images[imageIndex]}
                                        alt={`${selectedProject.title} ${imageIndex + 1}`}
                                        fill
                                        className="object-contain"
                                    />

                                    {/* Image-level navigation (switches screenshots within this project) */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            prevImage();
                                        }}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-lg text-gray-800 transition-all shadow-md"
                                        aria-label={t.portfolio.prevImage}
                                    >
                                        ‹
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            nextImage();
                                        }}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-lg text-gray-800 transition-all shadow-md"
                                        aria-label={t.portfolio.nextImage}
                                    >
                                        ›
                                    </button>

                                    {/* Counter + dots */}
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 rounded-full px-3 py-1.5">
                                        {selectedProject.images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setImageIndex(idx);
                                                }}
                                                className={`w-2 h-2 rounded-full transition-all ${idx === imageIndex ? "bg-white w-5" : "bg-white/50"}`}
                                                aria-label={`${idx + 1}/${selectedProject.images.length}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="relative w-full h-[400px] lg:h-full rounded-xl overflow-hidden bg-black/20">
                                    <Image
                                        src={selectedProject.images[0]}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )}

                            {/* Project navigation arrows (switches to the previous/next project) */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateProject('prev');
                                }}
                                className="hidden lg:flex absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-white items-center justify-center text-xl sm:text-2xl text-gray-800 transition-all shadow-lg"
                                aria-label={t.portfolio.prev}
                            >
                                ‹
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateProject('next');
                                }}
                                className="hidden lg:flex absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-white items-center justify-center text-xl sm:text-2xl text-gray-800 transition-all shadow-lg"
                                aria-label={t.portfolio.next}
                            >
                                ›
                            </button>

                            {/* Close button */}
                            <button
                                onClick={closeModal}
                                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-lg sm:text-xl text-gray-800 transition-all shadow-lg"
                                aria-label={t.portfolio.close}
                            >
                                ×
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    )
}