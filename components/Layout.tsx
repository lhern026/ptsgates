import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={asPath}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default Layout;
