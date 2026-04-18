import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects.data";

export const Projects = () => {
    return (
        <section id="projects" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    label="// projects"
                    title="What I've Built"
                    description="From full-stack SaaS platforms to AI-powered interfaces — built for scalability and performance."
                    descriptionClassName="max-w-4xl"
                />

                <div className="grid gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}