"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink, ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";
import { FiGithub } from "react-icons/fi";
import { useIsMobile } from "../hooks/use-mobile";

const projects = [
    {
        title: "SaaS Electronic Billing Platform",
        problem: "Enterprise clients needed a scalable, compliant electronic billing system that could handle multiple tenants and high transaction volumes.",
        features: ["Multi-tenant architecture", "Automated client onboarding (50% faster)", "ERP module integration", "Transactional email workflows"],
        stack: ["React", "TypeScript", ".NET", "SQL Server", "Azure"],
        highlights: ["Role-based access control", "Optimized stored procedures", "Automated testing pipeline"],
        github: "https://github.com/SebastianEM98",
        liveUrl: "https://up-task-frontend-amber-three.vercel.app/",
        images: ["/uptatsk-1.png", "/uptask-2.png", "/uptatsk-1.png"],
    },
    {
        title: "AI-Powered Chat Solutions",
        problem: "Marketing clients needed intelligent, conversational interfaces to increase user engagement and generate leads on their websites.",
        features: ["LLM integration via OpenRouter", "Real-time chat interface", "7 production deployments", "Lighthouse 85+ scores"],
        stack: ["React", "Node.js", "Express", "OpenRouter", "Tailwind CSS"],
        highlights: ["REST API design", "JWT authentication", "Reusable component library"],
        github: "https://github.com/SebastianEM98",
        liveUrl: undefined as string | undefined,
        images: ["/uptatsk-1.png"],
    },
    {
        title: "Treasury Management System",
        problem: "A marketplace needed to migrate manual Excel-based financial operations into a centralized, real-time web application.",
        features: ["Real-time notifications (Socket.io)", "Role-based authentication", "Email notification workflows", "Treasury operations dashboard"],
        stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
        highlights: ["JWT middleware security", "Real-time event system", "Full-stack delivery"],
        github: "https://github.com/SebastianEM98",
        liveUrl: undefined as string | undefined,
        images: [] as string[],
    },
    {
        title: "Reusable Component Architecture",
        problem: "Agency projects suffered from duplicated code and inconsistent UI, slowing delivery across multiple client sites.",
        features: ["Shared component library", "20% faster project delivery", "Consistent design system", "Cross-project reuse"],
        stack: ["React", "TypeScript", "Tailwind CSS", "Jest", "Vercel"],
        highlights: ["Design system tokens", "Unit & integration tests", "Figma-to-code precision"],
        github: "https://github.com/SebastianEM98",
        liveUrl: undefined as string | undefined,
        images: [] as string[],
    },
];

export const Projects = () => {
    const [activeTab, setActiveTab] = useState<Record<number, "details" | "preview">>({});
    const [slideIndex, setSlideIndex] = useState<Record<number, number>>({});
    const [slideDir, setSlideDir] = useState<Record<number, 1 | -1>>({});
    const [lightbox, setLightbox] = useState<string | null>(null);
    const isMobile = useIsMobile();

    const getTab = (i: number) => activeTab[i] || "details";
    const getSlide = (i: number) => slideIndex[i] || 0;
    const getDir = (i: number) => slideDir[i] || 1;
    const perView = isMobile ? 1 : 2;

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightbox(null);
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    return (
        <section id="projects" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    label="// projects"
                    title="What I've Built"
                    description="Real systems solving real problems — each designed for scale and reliability."
                />

                <div className="grid gap-6">
                    {projects.map((project, i) => (
                        <AnimatedSection key={project.title} delay={i * 0.08}>
                            <div className="glass rounded-2xl p-6 md:p-8 group hover:border-primary/20 transition-all duration-300 glow-border">

                                {/* Tabs */}
                                <div className="flex gap-1 mb-5 bg-muted/50 rounded-lg p-1 w-fit">
                                    <button
                                        onClick={() => setActiveTab((s) => ({ ...s, [i]: "details" }))}
                                        className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${getTab(i) === "details"
                                            ? "bg-background text-foreground shadow-sm"
                                            : "text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        Details
                                    </button>
                                    <button
                                        onClick={() => setActiveTab((s) => ({ ...s, [i]: "preview" }))}
                                        className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${getTab(i) === "preview"
                                            ? "bg-background text-foreground shadow-sm"
                                            : "text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        Preview
                                    </button>
                                </div>

                                {/* Details Tab */}
                                {getTab(i) === "details" && (
                                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-4 mb-3">
                                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <a
                                                    href={project.github ? project.github : project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    <ArrowUpRight className="h-5 w-5" />
                                                </a>
                                            </div>

                                            <p className="text-muted-foreground mb-4 leading-relaxed">{project.problem}</p>

                                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                                <div>
                                                    <h4 className="font-mono text-xs text-primary mb-2 uppercase tracking-wider">Key Features</h4>
                                                    <ul className="space-y-3">
                                                        {project.features.map((feature) => (
                                                            <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                                                                <span className="text-primary shrink-0">▸</span> {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-mono text-xs text-primary mb-2 uppercase tracking-wider">Architecture</h4>
                                                    <ul className="space-y-3">
                                                        {project.highlights.map((highlight) => (
                                                            <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                                                                <span className="text-primary shrink-0">▸</span> {highlight}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {project.stack.map((stack) => (
                                                    <span key={stack} className="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md">
                                                        {stack}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Preview Tab */}
                                {getTab(i) === "preview" && (
                                    <div className="min-h-[200px] rounded-xl border border-border/50 bg-muted/30">
                                        {project.images.length > 0 ? (() => {
                                            const totalSlides = Math.ceil(project.images.length / perView);
                                            const current = getSlide(i);
                                            const visibleImages = project.images.slice(current * perView, current * perView + perView);

                                            return (
                                                <div className="relative p-4 overflow-hidden">
                                                    <motion.div
                                                        key={current}
                                                        initial={{ opacity: 0, x: getDir(i) * 60 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: getDir(i) * -60 }}
                                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                                    >
                                                        {visibleImages.map((img, idx) => (
                                                            <div
                                                                key={current * perView + idx}
                                                                className="relative w-full aspect-[16/8]"
                                                            >
                                                                <Image
                                                                    src={img}
                                                                    alt={`${project.title} preview ${current * perView + idx + 1}`}
                                                                    fill
                                                                    className="rounded-lg object-cover border border-border/30 cursor-pointer hover:opacity-80 transition-opacity"
                                                                    onClick={() => setLightbox(img)}
                                                                    sizes="(max-width: 640px) 100vw, 50vw"
                                                                    quality={75}
                                                                />
                                                            </div>
                                                        ))}
                                                    </motion.div>

                                                    {totalSlides > 1 && (
                                                        <div className="flex items-center justify-center gap-3 mt-4">
                                                            <button
                                                                onClick={() => { setSlideDir(d => ({ ...d, [i]: -1 })); setSlideIndex((s) => ({ ...s, [i]: Math.max(0, current - 1) })); }}
                                                                disabled={current === 0}
                                                                className="p-1.5 rounded-full bg-background border border-border/50 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all"
                                                            >
                                                                <ChevronLeft className="h-4 w-4" />
                                                            </button>
                                                            <div className="flex gap-1.5">
                                                                {Array.from({ length: totalSlides }).map((_, di) => (
                                                                    <button
                                                                        key={di}
                                                                        onClick={() => { setSlideDir(d => ({ ...d, [i]: di > current ? 1 : -1 })); setSlideIndex((s) => ({ ...s, [i]: di })); }}
                                                                        className={`h-2 rounded-full transition-all ${di === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                                                                            }`}
                                                                    />
                                                                ))}
                                                            </div>
                                                            <button
                                                                onClick={() => { setSlideDir(d => ({ ...d, [i]: 1 })); setSlideIndex((s) => ({ ...s, [i]: Math.min(totalSlides - 1, current + 1) })); }}
                                                                disabled={current === totalSlides - 1}
                                                                className="p-1.5 rounded-full bg-background border border-border/50 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all"
                                                            >
                                                                <ChevronRight className="h-4 w-4" />
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })() : (
                                            <div className="flex flex-col items-center gap-3 text-muted-foreground py-8">
                                                <ImageIcon className="h-10 w-10 opacity-40" />
                                                <p className="text-sm">Preview coming soon</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="flex gap-3 mt-6 pt-5 border-t border-border/50">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank" rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 h-9 px-3 text-sm font-medium rounded-lg hover:bg-muted hover:text-foreground transition-all duration-200 [&_svg]:size-4 [&_svg]:shrink-0"
                                        >
                                            <FiGithub className="h-4 w-4 mr-1" /> Source Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 h-9 px-3 text-sm font-medium rounded-lg border border-border bg-transparent hover:bg-muted hover:text-foreground transition-all duration-200 [&_svg]:size-4 [&_svg]:shrink-0"
                                        >
                                            <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {lightbox && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                            onClick={() => setLightbox(null)}
                        >
                            <button
                                onClick={() => setLightbox(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-background/20 text-white hover:bg-background/40 transition-colors z-10"
                            >
                                <X className="h-6 w-6" />
                            </button>
                            <motion.img
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                src={lightbox}
                                alt="Project preview"
                                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}