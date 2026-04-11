import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";
import { Mail, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const links = [
    { icon: Mail, label: "Email", href: "mailto:sebastianecheverri.dev@gmail.com", value: "sebastianecheverri.dev@gmail.com" },
    { icon: FiLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/sebastianem98", value: "linkedin.com/in/sebastianem98" },
    { icon: FiGithub, label: "GitHub", href: "https://github.com/SebastianEM98", value: "github.com/SebastianEM98" },
];

export const Contact = () => (
    <section id="contact" className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
            <SectionHeading label="// contact" title="Let's Build Something" description="I'm open to full-time roles, contract work, and interesting collaborations." />

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {links.map((l, i) => (
                    <AnimatedSection key={l.label} delay={i * 0.1}>
                        <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass rounded-xl p-5 flex flex-col items-center gap-3 group hover:border-primary/30 transition-all glow-border"
                        >
                            <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <l.icon className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="font-medium text-foreground text-sm">{l.label}</p>
                                <p className="text-xs text-muted-foreground mt-0.5 break-all">{l.value}</p>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                    </AnimatedSection>
                ))}
            </div>

            <AnimatedSection delay={0.3}>
                <a href="mailto:sebastianecheverri.dev@gmail.com" className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-12 px-8 text-base font-medium rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200">
                    <Mail className="mr-2 h-4 w-4" /> Send me an email
                </a>
            </AnimatedSection>
        </div>
    </section>
);
