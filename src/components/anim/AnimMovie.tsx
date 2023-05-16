import { motion, AnimatePresence } from 'framer-motion';

interface AnimPreProps {
  children: React.ReactNode;
}

const AnimMovie = ({ children }: AnimPreProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimMovie;
