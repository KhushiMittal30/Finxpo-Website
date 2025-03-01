"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import errorPage from "../../assets/error.png"

export default function ErrorScreen() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setShowError(window.innerWidth < 900);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowError(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

return (
    <>
        <AnimatePresence>
            {showError && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background p-6 text-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative mb-8 w-64 h-64"
                    >
                        <div className="relative w-full h-full">
                            <motion.div
                                animate={{ rotate: [0, 5, 0, -5, 0], y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={errorPage}
                                    alt="Device too small"
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight mb-2"
                    >
                        Screen Too Small
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-muted-foreground mb-6 max-w-md"
                    >
                        This screen is so small. Please access this website on your laptop for the best experience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                     
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="mt-8 text-sm text-muted-foreground"
                    >
                        Current width: <span className="font-mono">{windowWidth}px</span>
                        <span className="mx-2">|</span>
                        Required: <span className="font-mono">800px</span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

        {!showError && <div className="sr-only">Error screen is hidden at current viewport size</div>}
    </>
);
}
