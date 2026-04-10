"use client";

import { motion } from "framer-motion";

export const HeroAnimations = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.1,
                    },
                },
            }}
        >
            {/* Each child is automatically animated */}
            {Array.isArray(children)
                ? children.map((child, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        {child}
                    </motion.div>
                ))
                : children}
        </motion.div>
    );
};