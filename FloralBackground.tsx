import React from 'react';
import { motion } from 'framer-motion';

const flowers = ['🌸', '🌺', '🌹', '🌷', '🌻', '🌼', '💐', '🪷', '🍀', '🌿', '🌱'];

function FloralBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            opacity: 0,
            scale: 0,
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`
          }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          <span className="text-4xl">
            {flowers[Math.floor(Math.random() * flowers.length)]}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default FloralBackground;