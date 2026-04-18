import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";
import { Mail, ArrowUpRight } from "lucide-react";
import { contactLinks } from "../data/contact.data";

export const Contact = () => (
    <section id="contact" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
            <SectionHeading label="// contact" title="Let's Build Something" description="I'm open to full-time roles, freelance work, and interesting collaborations. If you're building something meaningful or need help scaling your product — let's talk." descriptionClassName="max-w-full" />

            <div className="grid sm:grid-cols-3 gap-5 mb-10">
                {contactLinks.map((link, i) => (
                    <AnimatedSection key={link.label} delay={i * 0.1}>
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass rounded-xl p-5 flex flex-col items-center gap-3 group hover:border-primary/30 transition-all glow-border"
                        >
                            <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <link.icon className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="font-medium text-foreground text-sm">{link.label}</p>
                                <p className="text-xs text-muted-foreground mt-0.5 break-all">{link.value}</p>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                    </AnimatedSection>
                ))}
            </div>

            <AnimatedSection delay={0.3}>
                <a href="mailto:sebastianecheverri.dev@gmail.com" className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-12 px-8 text-base font-medium rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200">
                    <Mail className="mr-2 h-4 w-4" /> Let's work together
                </a>
            </AnimatedSection>
        </div>
    </section>
);
