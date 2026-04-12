import { Tooltip } from "./ui/Tooltip";

type LogoProps = {
    size?: "sm" | "md";
    withTooltip?: boolean;
    href?: string;
    className?: string;
};

export const Logo = ({ size = "md", withTooltip = false, href, className = "" }: LogoProps) => {

    const content = (
        <span
            className={`
                font-mono
                ${size === "md" ? "text-lg" : "text-xs"}
                ${className}
            `}
        >
            <span className="text-primary">{"<"}</span>
            SE
            <span className="text-primary">{"/>"}</span>
        </span>
    );

    const logoElement = href ? <a href={href}>{content}</a> : content;

    if (!withTooltip) return logoElement;

    return (
        <Tooltip content="Sebastian Echeverri Mejia">
            {logoElement}
        </Tooltip>
    );
};