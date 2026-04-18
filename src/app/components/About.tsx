import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";
import { aboutHighlights } from "../data/about.data";

export const About = () => (
    <section id="about" className="section-padding md:!pt-12 !pt-3 scroll-m-20">
        <div className="max-w-6xl mx-auto">
            <SectionHeading label="// about" title="Engineering That Delivers" />

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <AnimatedSection delay={0.1}>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        I'm a Full Stack Engineer with experience building scalable SaaS platforms and enterprise systems.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        I specialize in designing clean architectures, optimizing performance, and translating complex business requirements into reliable, user-focused applications. Throughout my career, I've improved product quality, reduced delivery times, and built systems that support real-world operations at scale.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Outside of engineering, I'm passionate about sports — especially tennis — which has shaped my mindset around discipline, consistency, and continuous improvement. I bring that same energy into my work: always learning, always iterating, and always looking for better ways to build and collaborate.
                    </p>
                </AnimatedSection>

                <div className="grid gap-4">
                    {aboutHighlights.map((highlight, i) => (
                        <AnimatedSection key={highlight.title} delay={0.15 + i * 0.1}>
                            <div className="glass rounded-xl p-5 flex gap-4 items-start glow-border hover:border-primary/30 transition-colors">
                                <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0">
                                    <highlight.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">{highlight.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{highlight.desc}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
