import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const jobs = [
    {
        role: "Full-Stack Developer",
        company: "Fuel Web Marketing",
        location: "St. Petersburg, FL",
        period: "Nov 2024 \u2013 Present",
        achievements: [
            "Shipped 7 React production sites with Lighthouse scores of 85+ across all metrics",
            "Designed reusable architecture cutting delivery time by ~20%",
            "Integrated AI-powered chat (LLMs via OpenRouter) driving new client acquisition",
            "Built secure REST APIs with Node.js, Express, and JWT",
        ],
    },
    {
        role: "Full-Stack Developer",
        company: "Binapps S.A.S",
        location: "Manizales, Colombia",
        period: "Jan 2023 \u2013 Nov 2024",
        achievements: [
            "Built scalable features for a multi-tenant SaaS electronic billing platform",
            "Automated client onboarding — reduced activation time by 50%",
            "Contributed to ERP modules with React and .NET",
            "Optimized SQL Server procedures for significant performance gains",
        ],
    },
    {
        role: "Full-Stack Developer",
        company: "Centro Galerías Plaza de Mercado",
        location: "Manizales, Colombia",
        period: `Jan 2022 \u2013 Dec 2022`,
        achievements: [
            "Migrated treasury operations from Excel to a centralized web application",
            "Built real-time notification system with Socket.io",
            "Implemented JWT-based role-based authentication",
        ],
    },
];

export const Experience = () => (
    <section id="experience" className="section-padding bg-surface/50">
        <div className="max-w-6xl mx-auto">
            <SectionHeading label="// experience" title="Where I've Shipped" />

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

                <div className="space-y-8">
                    {jobs.map((job, i) => (
                        <AnimatedSection key={job.company} delay={i * 0.1}>
                            <div className="flex gap-4 md:gap-8">
                                <div className="hidden md:flex shrink-0 w-12 justify-center relative z-10">
                                    <div className="w-3 h-3 rounded-full bg-primary mt-2 ring-4 ring-background" />
                                </div>
                                <div className="glass rounded-xl p-6 flex-1 hover:border-primary/20 transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground">{job.role}</h3>
                                            <p className="text-primary font-medium text-sm">{job.company} · {job.location}</p>
                                        </div>
                                        <span className="font-mono text-xs text-muted-foreground shrink-0">{job.period}</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {job.achievements.map((a) => (
                                            <li key={a} className="text-sm text-muted-foreground flex items-start gap-2">
                                                <span className="text-primary mt-0.5 shrink-0">▸</span> {a}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}

                    {/* Education */}
                    <AnimatedSection delay={0.4}>
                        <div className="flex gap-4 md:gap-8">
                            <div className="hidden md:flex shrink-0 w-12 justify-center relative z-10">
                                <div className="w-3 h-3 rounded-full bg-muted-foreground/40 mt-2 ring-4 ring-background" />
                            </div>
                            <div className="glass rounded-xl p-6 flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <GraduationCap className="h-4 w-4 text-primary" />
                                    <h3 className="text-lg font-bold text-foreground">B.S. Software Engineering</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">Universidad Autónoma de Manizales · 2019 &ndash; 2025</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    </section>
);
