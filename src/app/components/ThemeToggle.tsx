'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false); // Prevents SSR hydration mismatch
    const [dark, setDark] = useState(true); // Default to dark

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setDark(true);
            document.documentElement.classList.add('dark');
        } else if (storedTheme === 'light') {
            setDark(false);
            document.documentElement.classList.remove('dark');
        } else {
            // Default theme: dark
            setDark(true);
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !dark;
        setDark(newTheme);
        document.documentElement.classList.toggle('dark', newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    // While it is not mounted, we do not render the button
    if (!mounted) return null;

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
    );
};