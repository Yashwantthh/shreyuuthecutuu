import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const flowers = [
  '🌸', '🌺', '🌹', '🌷', '🌻', '🌼', '💐', '🪷', '🍀', '🌿', '🌱'
];

function FlowerDoodle() {
  const [flower, setFlower] = useState('🌸');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setFlower(flowers[Math.floor(Math.random() * flowers.length)]);
    setPosition({
      x: Math.random() * 90,
      y: Math.random() * 90
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.2, 0.4, 0.2],
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ 
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="text-6xl flower-doodle"
      style={{
        left: `${position.x}vw`,
        top: `${position.y}vh`,
      }}
      whileHover={{
        scale: 1.5,
        opacity: 0.6,
        transition: { duration: 0.3 }
      }}
    >
      {flower}
    </motion.div>
  );
}

export default FlowerDoodle;