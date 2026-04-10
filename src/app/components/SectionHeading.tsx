import { AnimatedSection } from "./AnimatedSection";

interface Props {
    label: string;
    title: string;
    description?: string;
}

export const SectionHeading = ({ label, title, description }: Props) => (
    <AnimatedSection className="mb-12 md:mb-16">
        <span className="font-mono text-sm text-primary mb-2 block">{label}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
        {description && (
            <p className="text-muted-foreground max-w-2xl text-lg">{description}</p>
        )}
    </AnimatedSection>
);
