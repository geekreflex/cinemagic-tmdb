import { motion, AnimatePresence } from 'framer-motion';

interface AnimPreProps {
  children: React.ReactNode;
}

const AnimPre = ({ children }: AnimPreProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimPre;
