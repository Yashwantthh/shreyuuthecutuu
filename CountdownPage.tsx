import React from 'react';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';
import FlowerDoodle from '../components/FlowerDoodle';

function CountdownPage() {
  const birthdayDate = new Date('2025-11-12T00:00:00');

  const promises = [
    "I promise to be your personal cheerleader, even if you're just cleaning your room. GO SHREYUU GO!!",
    "I promise to annoy you forever, but with love.",
    "I promise that no matter what changes, Our bond? Not going anywhere.",
    "I promise to send you memes that make zero sense just to hear you say \"tu pagal hai kya?\"",
    "I promise to answer your call even if I'm 2% battery, in the shower, or in the middle of an apocalypse.",
    "I promise to be your human umbrella during all emotional baarish scenes. Bring on the drama, baba.",
    "I promise to keep being your comfort zone, your emergency hug person, your emotional Doraemon pocket.",
    "I promise to never let a day go by without reminding you: tu meri shakal se zyada cute hai."
  ];

  const renderer = ({ days, hours, minutes, seconds }: any) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      {[
        { value: days, label: 'Days' },
        { value: hours, label: 'Hours' },
        { value: minutes, label: 'Minutes' },
        { value: seconds, label: 'Seconds' },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg cute-shadow"
        >
          <div className="text-4xl font-bold text-purple-light">{item.value}</div>
          <div className="text-gray-600">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto text-center relative">
      {[...Array(5)].map((_, i) => (
        <FlowerDoodle key={i} />
      ))}

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-purple-light mb-8"
      >
        Countdown to Shreyu's Special Day
      </motion.h1>

      <Countdown date={birthdayDate} renderer={renderer} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 space-y-6"
      >
        <p className="text-xl text-purple-light">Days left until our queen turns more awesome</p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl italic text-purple-dark"
        >
          Tum aaye ho toh zindagi mein jaan aayi hai…
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="bg-white p-8 rounded-lg cute-shadow"
        >
          <h2 className="text-2xl font-bold text-purple-light mb-6">
            Get ready, sweetie, kyunki is saal ka birthday plan:
          </h2>
          
          <motion.div className="space-y-4">
            <p className="text-xl">Level: Next Level</p>
            <p className="text-xl">Gifts? Check. Surprises? Double Check</p>
            <p className="text-xl">Pyaar? Infinity Check</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-purple-light mb-8">Promises I Make to You</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg cute-shadow text-left"
              >
                <p className="text-lg text-purple-dark">{promise}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CountdownPage;