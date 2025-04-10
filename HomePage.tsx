import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import FlowerDoodle from '../components/FlowerDoodle';

function HomePage() {
  return (
    <div className="max-w-4xl mx-auto relative">
      {[...Array(8)].map((_, i) => (
        <FlowerDoodle key={i} />
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-center gap-12 mb-16"
      >
        <div className="md:w-1/2">
          <motion.div 
            className="photo-frame cute-shadow"
            whileHover={{ scale: 1.02, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/shreyu-collage.jpg"
              alt="Shreyu Collage"
              className="rounded-lg w-full h-auto object-cover"
            />
            <motion.p 
              className="text-center mt-4 text-sm text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              i love you moreeee
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-8 leading-relaxed">
            This isn't just a website, this is a little digital hug wrapped up in pixels and love.
          </h1>
          <p className="text-xl mb-6 text-gray-700">
            Welcome to the cutest corner of the internet, dedicated to my one and only Shreyu,
            my DORAEMON, my cutuuu, my whole heart.
          </p>
          <p className="text-xl mb-6 text-gray-700">
            Every line on this site, every memory, every tiny doodle sab kuch is just my way of saying:
          </p>
          <p className="text-2xl font-bold text-primary italic flex items-center gap-2">
            "Tere bina main adhoora hoon, babyy." 
            <Heart className="inline text-primary animate-pulse" />
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center p-8 bg-white rounded-lg cute-shadow space-y-6"
      >
        <p className="text-xl text-primary italic">
          "You're not just my best friend... you're my DORAEMON, meri sweetie, meri forever ka default setting."
        </p>
        <p className="text-xl text-primary italic">
          "And babyy, just saying… agar tu coffee hoti na, toh main overdose se mar gaya hota kab ka"
        </p>
      </motion.div>
    </div>
  );
}

export default HomePage;