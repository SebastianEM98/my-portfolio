import { AnimatedSection } from "./AnimatedSection";
import { cn } from "../lib/utils";

interface SectionHeadingProps {
    label: string;
    title: string;
    description?: string;
    className?: string;
    descriptionClassName?: string;
}

export const SectionHeading = ({
    label,
    title,
    description,
    className,
    descriptionClassName,
}: SectionHeadingProps) => (
    <AnimatedSection className={cn("mb-12 md:mb-16", className)}>
        <span className="font-mono text-sm text-primary mb-2 block">{label}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
        {description && (
            <p className={cn("text-muted-foreground max-w-2xl text-lg", descriptionClassName)}>
                {description}
            </p>
        )}
    </AnimatedSection>
);
