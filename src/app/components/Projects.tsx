import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const projects = [
    {
        title: "SaaS Electronic Billing Platform",
        problem: "Enterprise clients needed a scalable, compliant electronic billing system that could handle multiple tenants and high transaction volumes.",
        features: ["Multi-tenant architecture", "Automated client onboarding (50% faster)", "ERP module integration", "Transactional email workflows"],
        stack: ["React", "TypeScript", ".NET", "SQL Server", "Azure"],
        highlights: ["Role-based access control", "Optimized stored procedures", "Automated testing pipeline"],
        github: "https://github.com/SebastianEM98",
    },
    {
        title: "AI-Powered Chat Solutions",
        problem: "Marketing clients needed intelligent, conversational interfaces to increase user engagement and generate leads on their websites.",
        features: ["LLM integration via OpenRouter", "Real-time chat interface", "7 production deployments", "Lighthouse 85+ scores"],
        stack: ["React", "Node.js", "Express", "OpenRouter", "Tailwind CSS"],
        highlights: ["REST API design", "JWT authentication", "Reusable component library"],
        github: "https://github.com/SebastianEM98",
    },
    {
        title: "Treasury Management System",
        problem: "A marketplace needed to migrate manual Excel-based financial operations into a centralized, real-time web application.",
        features: ["Real-time notifications (Socket.io)", "Role-based authentication", "Email notification workflows", "Treasury operations dashboard"],
        stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
        highlights: ["JWT middleware security", "Real-time event system", "Full-stack delivery"],
        github: "https://github.com/SebastianEM98",
    },
    {
        title: "Reusable Component Architecture",
        problem: "Agency projects suffered from duplicated code and inconsistent UI, slowing delivery across multiple client sites.",
        features: ["Shared component library", "20% faster project delivery", "Consistent design system", "Cross-project reuse"],
        stack: ["React", "TypeScript", "Tailwind CSS", "Jest", "Vercel"],
        highlights: ["Design system tokens", "Unit & integration tests", "Figma-to-code precision"],
        github: "https://github.com/SebastianEM98",
    },
];

export const Projects = () => (
    <section id="projects" className="section-padding">
        <div className="max-w-6xl mx-auto">
            <SectionHeading
                label="// projects"
                title="What I've Built"
                description="Real systems solving real problems — each designed for scale and reliability."
            />

            <div className="grid gap-6">
                {projects.map((p, i) => (
                    <AnimatedSection key={p.title} delay={i * 0.08}>
                        <div className="glass rounded-2xl p-6 md:p-8 group hover:border-primary/20 transition-all duration-300 glow-border">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {p.title}
                                        </h3>
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <ArrowUpRight className="h-5 w-5" />
                                        </a>
                                    </div>

                                    <p className="text-muted-foreground mb-4 leading-relaxed">{p.problem}</p>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <h4 className="font-mono text-xs text-primary mb-2 uppercase tracking-wider">Key Features</h4>
                                            <ul className="space-y-1">
                                                {p.features.map((f) => (
                                                    <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                                                        <span className="text-primary mt-1.5 shrink-0">▸</span> {f}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-mono text-xs text-primary mb-2 uppercase tracking-wider">Architecture</h4>
                                            <ul className="space-y-1">
                                                {p.highlights.map((h) => (
                                                    <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                                                        <span className="text-primary mt-1.5 shrink-0">▸</span> {h}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {p.stack.map((s) => (
                                            <span key={s} className="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6 pt-5 border-t border-border/50">
                                <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-9 px-3 rounded-md text-sm font-medium transition-all duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                    <FiGithub  className="h-4 w-4 mr-1" /> Source Code
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
);
