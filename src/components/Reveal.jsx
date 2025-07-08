// components/Reveal.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Reveal = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // 👈 animate every time it comes into view
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
