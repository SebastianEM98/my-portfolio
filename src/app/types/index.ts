import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconType } from "react-icons";


// NAVBAR LINKS
export type NavbarLinks = {
    label: string;
    href: string;
}


// ABOUT HIGHLIGHTS
export type AboutHighlight = {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    title: string;
    desc: string;
}


// TECH STACK
export type TechStackCategories = {
    title: string;
    techs: string[];
}


// PROJECTS
export type Project = {
    title: string;
    problem: string;
    features: string[];
    stack: string[];
    highlights: string[];
    github?: string;
    liveUrl?: string;
    images: string[];
}


// EXPERIENCE
export type jobExperience = {
    role: string;
    company: string;
    location: string;
    period: string;
    achievements: string[];
}


// CONTACT LINKS
export type ContactLink = {
    icon: IconType | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    label: string;
    href: string;
    value: string;
}