import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Photo } from "@/types/gallery.type";
import React from "react";

interface ModalProps {
    activePhoto: Photo | null;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ activePhoto, onClose }) => (
    <AnimatePresence>
        {activePhoto && (
            <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <div
                    className="relative max-w-6xl max-h-[90vh] w-full h-[90vh] overflow-hidden rounded-lg shadow-lg"
                    onClick={e => e.stopPropagation()}
                >
                    <Image
                        src={activePhoto.src}
                        alt={activePhoto.title}
                        fill
                        className="object-contain"
                    />
                    <button
                        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-primary-pink transition-colors duration-200"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
); 