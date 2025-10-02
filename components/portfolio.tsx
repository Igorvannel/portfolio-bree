"use client"

import { useState, useRef } from "react"
import Image from "next/image"

interface Project {
    id: string
    title: string
    image: string
    description: string
    tools: string[]
    width: number
}

const projects: Project[] = [
    {
        id: "1",
        title: "KIMI NAILS",
        image: "/Free_Key_Chain_Mockup_2FULL 1.png",
        description: "Ce logo a été conçu pour refléter l'élégance et la créativité de l'univers de la prothésie ongulaire. Le violet, couleur de la féminité et de la sophistication, est au cœur de l'identité visuelle. Les papillons apportent une touche de légèreté et symbolisent la transformation, en écho à l'art de sublimer les mains. L'ensemble vise à transmettre douceur, raffinement et professionnalisme.",
        tools: ["Adobe Illustrator", "Banque d'image", "Du papier pour les sketchs","Une tablette graphique"],
        width: 400
    },
    {
        id: "2",
        title: "INTERFACE GESAFRIC",
        image: "/file cover - 3.png",
        description: "Cette interface ERP dédiée à la gestion comptable mise sur une palette de verts inspirés de la nature pour instaurer une atmosphère calme et propice à la concentration. Les différentes nuances de vert, associées à un design épuré, facilitent la hiérarchisation des informations et renforcent la lisibilité des données complexes. Ce choix chromatique symbolise également la stabilité, la croissance et la transparence — des valeurs étroitement liées à l'univers de la comptabilité. L'objectif : offrir une expérience utilisateur fluide, intuitive et visuellement apaisante.",
        tools: ["Figma", "Du papier pour les Wireframe", "Banque d'image"],
        width: 700
    },
    {
        id: "3",
        title: "ILLUSTRATION EVANGY",
        image: "/3.png",
        description: "Ce personnage arbore une palette de roses doux qui reflète une apparence tendre et délicate. Son style visuel joue sur les contrastes, entre innocence apparente et profondeur intérieure. Derrière son sourire calme se cache une personnalité complexe, affirmée et parfois tranchante. L'illustration cherche à capturer cette dualité entre façade et vraie nature.",
        tools: ["Clip studio paint", "Du papier pour les sketchs", "Une tablette graphique"],
        width: 400
    },
    {
        id: "4",
        title: "COUVERTURE",
        image: "/cover vericale.png",
        description: "Cette couverture met en lumière un personnage à la fois déterminé et noble. Les jeux d'ombre accentuent la force de son regard, tandis que les teintes choisies révèlent subtilement l'éclat de ses cheveux, symbole de sa singularité et de sa puissance intérieure.",
        tools: ["Clip studio paint", "Du papier pour les sketchs", "Une tablette graphique"],
        width: 400
    },
]

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const closeModal = () => {
        setSelectedProject(null)
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
    }

    return (
        <section className="relative min-h-screen">
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

            <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-16">
                {/* Header Section */}
                <div className="max-w-4xl mb-12 sm:mb-20">
                    <h3 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                        PORTFOLIO
                    </h3>
                    <span
                        className="text-2xl sm:text-3xl lg:text-4xl font-light block mb-4 sm:mb-8"
                        style={{
                            background: "linear-gradient(98.88deg, #B798C5 20.15%, #B923FF 75.28%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Designer UI/UX & Artist
                    </span>
                    <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                        Ce portfolio présente une sélection de projets en UX/UI, développement web/mobile et
                        illustration. La majorité de mes réalisations étant confidentielles (projets d'entreprise),
                        seuls des travaux personnels ou diffusables sont partagés ici.
                    </p>
                </div>

                {/* Portfolio Cards with Navigation */}
                <div className="relative">
                    {/* Navigation Arrows for Portfolio Carousel - Desktop only */}
                    <button
                        onClick={() => scrollToProject('left')}
                        className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white items-center justify-center text-2xl text-gray-800 transition-all shadow-lg"
                        aria-label="Projet précédent"
                    >
                        ‹
                    </button>

                    <button
                        onClick={() => scrollToProject('right')}
                        className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white items-center justify-center text-2xl text-gray-800 transition-all shadow-lg"
                        aria-label="Projet suivant"
                    >
                        ›
                    </button>

                    {/* Desktop: Horizontal Scroll */}
                    <div
                        ref={scrollContainerRef}
                        className="hidden lg:flex gap-8 overflow-x-auto pb-8 scrollbar-hide scroll-smooth"
                    >
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="relative flex-shrink-0 h-[500px] rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105"
                                style={{ width: `${project.width}px` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
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
                                onClick={() => setSelectedProject(project)}
                                className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden group cursor-pointer transition-transform active:scale-95"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
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
                        <div className="flex-1 flex flex-col justify-center space-y-8 lg:space-y-12 bg-[#1a0a3e] lg:bg-transparent p-6 lg:p-0 rounded-xl lg:rounded-none">
                            {/* Description Section */}
                            <div>
                                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 lg:mb-6 tracking-wide">
                                    DESCRIPTION
                                </h2>
                                <div className="border-l-4 border-[#8B7AB8] pl-4 lg:pl-6">
                                    <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light">
                                        {selectedProject.description}
                                    </p>
                                </div>
                            </div>

                            {/* Tools Section */}
                            <div>
                                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 lg:mb-6 tracking-wide">
                                    OUTILS
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

                        {/* Right side - Image */}
                        <div className="flex-1 relative">
                            <div className="relative w-full h-[400px] lg:h-full rounded-xl overflow-hidden bg-black/20">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Navigation arrows */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateProject('prev');
                                }}
                                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-xl sm:text-2xl text-gray-800 transition-all shadow-lg"
                                aria-label="Projet précédent"
                            >
                                ‹
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateProject('next');
                                }}
                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-xl sm:text-2xl text-gray-800 transition-all shadow-lg"
                                aria-label="Projet suivant"
                            >
                                ›
                            </button>

                            {/* Close button */}
                            <button
                                onClick={closeModal}
                                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-lg sm:text-xl text-gray-800 transition-all shadow-lg"
                                aria-label="Fermer"
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