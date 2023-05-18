import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useDrawer } from '../contexts/drawer';
import React from 'react';
import { styled } from 'styled-components';

const Drawer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, closeDrawer } = useDrawer();
  const controls = useAnimation();

  React.useEffect(() => {
    if (isOpen) {
      controls.start({ x: 0 });
    } else {
      controls.start({ x: '100%' });
    }
  }, [isOpen, controls]);

  const onOverlayClick = () => {
    closeDrawer();
  };

  return (
    <AnimatePresence>
      <Wrap>
        {isOpen && (
          <AnimatePresence>
            <motion.div
              key={2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '100%',
                background: 'black',
                zIndex: 998,
              }}
              onClick={onOverlayClick}
            />
            <motion.div
              key={1}
              initial={{ x: '100%' }}
              animate={controls}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '400px',
                height: '100%',
                background: '#111111',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                zIndex: 999998,
                borderLeft: '1px solid #242424',
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex',
                  height: '100%',
                  overflowY: 'auto',
                }}
              >
                {children}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </Wrap>
    </AnimatePresence>
  );
};

export default Drawer;

const Wrap = styled.div``;
