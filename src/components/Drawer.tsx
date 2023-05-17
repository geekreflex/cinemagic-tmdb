import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Drawer</button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '300px',
              height: '100%',
              background: '#ffffff',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              zIndex: 999,
            }}
          >
            {/* Drawer Content */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Drawer;
