import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { Experience } from "./components/Experience";
import "./page.css";
import { Contact } from "./components/Contact";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
}
