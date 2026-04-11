import { HeroAnimations } from "./HeroAnimations";
import { ArrowDown, Send } from "lucide-react";

export const Hero = () => (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-32">

        {/* Glow effect */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">

            <HeroAnimations>

                {/* Badge */}
                <span className="inline-flex items-center gap-2 font-mono text-sm text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-7">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Available for opportunities
                </span>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
                    Sebastian Echeverri Mejia
                    <span className="block text-gradient mt-2 pb-2">
                        Full Stack Engineer
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                    I build scalable, production-ready web applications that solve real problems.
                    From performant frontends to robust APIs — I ship software that works at scale.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 h-12 px-8 text-base font-medium rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
                    >
                        View Projects <ArrowDown className="ml-1 h-4 w-4" />
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 h-12 px-8 text-base font-medium rounded-xl border border-border bg-transparent hover:bg-muted hover:text-foreground  transition-all duration-200"
                    >
                        Get in Touch <Send className="ml-1 h-4 w-4" />
                    </a>
                </div>

            </HeroAnimations>
        </div>
    </section>
);