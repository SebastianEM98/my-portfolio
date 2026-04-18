import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page Not Found | Sebastian Echeverri Mejia",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-muted">
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold">Page Not Found</h1>
                <p className="mb-4 text-xl text-muted-foreground">Oops! This page doesn&apos;t exist</p>
                <Link href="/" className="text-primary underline hover:text-primary/90">
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
