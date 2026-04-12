"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "../hooks/useActiveSection";
import { navbarLinks } from "../data/navbar.data";
import clsx from "clsx";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const active = useActiveSection([
        "home",
        "about",
        "stack",
        "projects",
        "experience",
        "contact",
    ]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (href: string) => {
        const id = href.replace("#", "");
        const element = document.getElementById(id);

        setMobileOpen(false);

        // wait for menu to close (animation)
        setTimeout(() => {
            if (!element) return;

            const y = element.getBoundingClientRect().top + window.scrollY - 70;

            window.scrollTo({
                top: y,
                behavior: "smooth",
            });
        }, 200);
    };

    const linkClass = (href: string) => {
        const id = href.replace("#", "");

        return clsx(
            "px-3 py-2 text-sm rounded-lg transition-colors",
            active === id
                ? "text-primary bg-muted"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
        );
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#"
                    className="font-mono font-semibold text-lg text-foreground tracking-tight"
                >
                    <span className="text-primary">{"<"}</span>
                    SE
                    <span className="text-primary">{"/>"}</span>
                </a>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-1">
                    {navbarLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={linkClass(link.href)}
                        >
                            {link.label}
                        </a>
                    ))}

                    <div className="ml-2">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile toggle */}
                <div className="flex md:hidden items-center gap-2">
                    <ThemeToggle />

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-2 text-foreground"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-border"
                    >
                        <div className="px-4 py-4 flex flex-col gap-1">
                            {navbarLinks.map((link) => {
                                const id = link.href.replace("#", "");

                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        }}
                                        className={clsx(
                                            "px-3 py-2.5 text-sm rounded-lg transition-colors",
                                            active === id
                                                ? "text-primary bg-muted"
                                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                        )}
                                    >
                                        {link.label}
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};