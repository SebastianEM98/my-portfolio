export const Footer = () => (
    <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground sm:text-left text-center">
                &copy; {new Date().getFullYear()} Sebastian Echeverri Mejia. <br className="sm:hidden block" /> All rights reserved.
            </p>
            <p className="font-mono text-xs text-muted-foreground">
                <span className="text-primary">{"<"}</span>SE<span className="text-primary">{"/>"}</span>
            </p>
        </div>
    </footer>
);
