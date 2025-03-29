import { motion } from "framer-motion";
import { useEffect, useRef, useState, ReactNode } from "react";

interface MotionDivWrapperProps {
  children: ReactNode;
}

const MotionDivWrapper = ({ children }: MotionDivWrapperProps) => {
  const ref = useRef(null);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const [viewportMargin, setViewportMargin] = useState("-100px 0px -100px 0px");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    const updateViewportMargin = () => {
      setViewportMargin(window.innerWidth < 768 ? "0px 0px 0px 0px" : "-100px 0px -100px 0px");
    };

    window.addEventListener("scroll", updateScrollDirection);
    window.addEventListener("resize", updateViewportMargin);
    updateViewportMargin(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
      window.removeEventListener("resize", updateViewportMargin);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: scrollDirection === "down" ? 50 : -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, margin: viewportMargin }} // Dynamic margin
      className="w-auto h-auto"
    >
      {children}
    </motion.div>
  );
};

export default MotionDivWrapper;
