import { jobsExperience } from "../data/experience.data";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap } from "lucide-react";

export const Experience = () => (
    <section id="experience" className="section-padding bg-surface/50">
        <div className="max-w-6xl mx-auto">
            <SectionHeading label="// experience" title="Where I've Shipped" />

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

                <div className="space-y-8">
                    {jobsExperience.map((job, i) => (
                        <AnimatedSection key={job.company} delay={i * 0.1}>
                            <div className="flex gap-4 md:gap-8">
                                <div className="hidden md:flex shrink-0 w-12 justify-center relative z-10">
                                    <div className="w-3 h-3 rounded-full bg-primary mt-2 ring-4 ring-background" />
                                </div>
                                <div className="glass rounded-xl p-6 flex-1 hover:border-primary/20 transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground">{job.role}</h3>
                                            <p className="text-primary font-medium text-sm">
                                                {job.company} · {job.location}
                                            </p>
                                        </div>
                                        <span className="font-mono text-xs text-muted-foreground shrink-0">
                                            {job.period}
                                        </span>
                                    </div>
                                    <ul className="space-y-3 max-w-3xl">
                                        {job.achievements.map((achievement) => (
                                            <li key={achievement} className="text-sm text-muted-foreground flex items-start gap-2">
                                                <span className="text-primary shrink-0">▸</span> {achievement}
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
                                <div className="flex items-center gap-3 mb-1">
                                    <GraduationCap className="h-5 w-5 text-primary" />
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
