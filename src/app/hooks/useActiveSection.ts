"use client";

import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]) => {
    const [active, setActive] = useState<string>("");

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(id);
                    }
                },
                {
                    rootMargin: "-50% 0px -50% 0px", // activates when it is in the center
                    threshold: 0,
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [sectionIds]);

    return active;
};