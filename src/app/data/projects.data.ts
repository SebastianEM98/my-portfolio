import { Project } from "../types";

export const projects: Project[] = [
    {
        title: "UpTask — Project & Task Management Platform",
        type: "Full-stack MERN application",
        problem: "Teams needed a powerful way to manage projects and tasks with real-time collaboration, role-based access, and a scalable backend.",
        features: [
            "Project & task management (Trello-style workflow)",
            "Role-based access (owners & collaborators)",
            "Drag & drop task organization (DnD Kit)",
            "Authentication with JWT & protected routes"
        ],
        highlights: [
            "REST API with Express & MongoDB (Mongoose)",
            "Server state management with React Query",
            "Schema validation with Valibot (type-safe API)",
            "Modular backend (controllers, services, middleware)"
        ],
        stack: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS"
        ],
        github: "https://github.com/SebastianEM98/UpTask-frontend",
        liveUrl: "https://uptask-web.vercel.app/",
        images: [
            "/projects/uptask/login.png",
            "/projects/uptask/dashboard.png",
            "/projects/uptask/board-tasks.png",
            "/projects/uptask/task-modal.png",
            "/projects/uptask/board-members.png"
        ]
    },
    {
        title: "Drink Finder — AI Recipe Generator",
        type: "AI-powered frontend application",
        problem: "Users needed a fast way to discover drinks and generate custom recipes without manually browsing multiple sources.",
        features: [
            "Search drinks via TheCocktailDB API",
            "AI-powered recipe generation (OpenRouter)",
            "Favorites persistence with localStorage",
            "Recipe modal with Headless UI"
        ],
        highlights: [
            "Global state management with Zustand (slice pattern)",
            "Schema validation with Zod for type-safe APIs",
            "Client-side routing with React Router",
            "Reusable and modular component structure",
            "AI integration via OpenRouter with dynamic prompt handling"
        ],
        stack: [
            "React",
            "TypeScript",
            "Zustand",
            "Zod",
            "Tailwind CSS",
            "OpenRouter"
        ],
        github: "https://github.com/SebastianEM98/Drink-Finder-React",
        liveUrl: "https://drink-finder-ai.vercel.app/",
        images: [
            "/projects/drink-finder/home.png",
            "/projects/drink-finder/recipes.png",
            "/projects/drink-finder/recipe-modal.png",
            "/projects/drink-finder/favorites.png",
            "/projects/drink-finder/ai-chat.png"
        ],
    },
    {
        title: "Expense Tracker — Budget Management App",
        type: "State-driven frontend application",
        problem: "Users needed a simple way to track expenses, manage budgets, and visualize spending without relying on complex tools.",
        features: [
            "Budget tracking with visual progress (donut chart)",
            "Add, edit, and delete expenses",
            "Category-based expense organization",
            "Gesture-based actions (swipe to edit/delete)"
        ],
        highlights: [
            "State management with Context API and useReducer",
            "Persistent storage with localStorage",
            "Component-driven architecture with reusable logic",
            "Interactive UI patterns (modals, gestures, charts)",
            "Reducer-based state transitions for predictable updates"
        ],
        stack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Context API",
            "useReducer"
        ],
        github: "https://github.com/SebastianEM98/Expense-Tracker-React",
        liveUrl: "https://expense-tracker-react-six-gold.vercel.app/",
        images: [
            "/projects/expense-tracker/dashboard.png",
            "/projects/expense-tracker/expense-modal.png",
            "/projects/expense-tracker/expense-delete.png",
            "/projects/expense-tracker/expense-update.png"
        ],
    },
];