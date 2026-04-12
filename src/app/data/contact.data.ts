import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { ContactLink } from "../types";

export const contactLinks: ContactLink[] = [
    {
        icon: Mail,
        label: "Email",
        href: "mailto:sebastianecheverri.dev@gmail.com",
        value: "sebastianecheverri.dev@gmail.com",
    },
    {
        icon: FiLinkedin,
        label: "LinkedIn",
        href: "https://linkedin.com/in/sebastianem98",
        value: "linkedin.com/in/sebastianem98",
    },
    {
        icon: FiGithub,
        label: "GitHub",
        href: "https://github.com/SebastianEM98",
        value: "github.com/SebastianEM98",
    },
];