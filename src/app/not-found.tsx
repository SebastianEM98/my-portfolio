import { Undo2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page Not Found | Sebastian Echeverri Mejia",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold">Page Not Found</h1>
                <p className="mb-4 text-xl text-muted-foreground">Oops! This page doesn&apos;t exist</p>
                <Link href="/" className="inline-flex items-center gap-2 h-12 px-8 text-base font-medium rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200">
                    Return to Home <Undo2 className="ml-1 h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
