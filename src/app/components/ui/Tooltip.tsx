type TooltipProps = {
    children: React.ReactNode;
    content: React.ReactNode;
};

export const Tooltip = ({ children, content }: TooltipProps) => {
    return (
        <div className="relative inline-block group w-fit">
            {children}

            <span className="tooltip">
                {content}
            </span>
        </div>
    );
};