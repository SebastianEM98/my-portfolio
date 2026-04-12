import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";
import { techStackCategories } from "../data/tech-stack.data";

export const TechStack = () => (
    <section id="stack" className="section-padding bg-surface/50">
        <div className="max-w-6xl mx-auto">
            <SectionHeading label="// stack" title="Technologies I Work With" description="Battle-tested tools I use to build production systems." />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {techStackCategories.map((category, i) => (
                    <AnimatedSection key={category.title} delay={i * 0.1}>
                        <div className="glass rounded-xl p-6 h-full">
                            <h3 className="font-mono text-sm text-primary mb-4 font-semibold">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.techs.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground rounded-lg  hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
);
