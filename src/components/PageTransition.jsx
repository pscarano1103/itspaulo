import { motion } from "motion/react";

export default function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{
        duration: 0.55,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.main>
  );
}
