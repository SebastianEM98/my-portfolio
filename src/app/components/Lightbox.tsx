"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type LightboxProps = {
    image: string | null;
    onClose: () => void;
}

export const Lightbox = ({ image, onClose }: LightboxProps) => {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (image) {
            window.addEventListener("keydown", handleKey);
            document.body.style.overflow = "hidden";
        }

        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [image, onClose]);

    return (
        <AnimatePresence>
            {image && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={onClose}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-background/20 text-white hover:bg-background/40 transition-colors z-10"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        src={image}
                        alt="Project preview"
                        className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};