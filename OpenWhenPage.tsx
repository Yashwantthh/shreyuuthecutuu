import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Star, Cloud, Coffee, Frown, Smile, Moon, Sun, Clock } from 'lucide-react';
import FlowerDoodle from '../components/FlowerDoodle';

function OpenWhenPage() {
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);

  const messages = [
    {
      title: "Open when you need a reminder of us",
      content: "6 saal ho gaye baba... aur har din, tu meri life ka best part ban jaati hai. We've grown up together and I'm still your biggest fan.",
      icon: <Heart className="w-12 h-12" />
    },
    {
      title: "Open when you doubt your worth",
      content: "Tu ek whole galaxy hai, aur main toh bas ek insaan hoon jo har din tujh mein kho jaata hai. Don't forget who tf you are, baby.",
      icon: <Star className="w-12 h-12" />
    },
    {
      title: "Open when you can't sleep",
      content: "Let me be your bedtime story: Once upon a time, there was a cutuuu who was the sweetest human alive. She changed my life forever. The end. Now sleep na cutiee.",
      icon: <Moon className="w-12 h-12" />
    },
    {
      title: "Open when you feel alone",
      content: "Tu kabhi akeli nahi hai. Tu toh woh star hai jo mere sky mein hamesha chamakti hai. Close your eyes, I'm holding your hand.",
      icon: <Sun className="w-12 h-12" />
    },
    {
      title: "Open when you feel like crying",
      content: "Cry if you need to, cutuuu. But remember, you're safe in my world. Always.",
      icon: <Cloud className="w-12 h-12" />
    },
    {
      title: "Open when you miss me",
      content: "Look at your left. Now your right. I'm not there. BUT, I'm always a call away and mentally sitting next to you like a ghost.",
      icon: <Heart className="w-12 h-12" />
    },
    {
      title: "Open when you're feeling insecure",
      content: "Mirror toh sirf face dikhata hai, but I see your soul kind, innocent, strong, and ridiculously amazing. Reminder: you're magic, sweetheart.",
      icon: <Star className="w-12 h-12" />
    },
    {
      title: "Open when you overthink something stupid",
      content: "Baby chilllll, duniya khatam nahi ho gayi. You're just overthinking again. Breathe in... breathe out... aur ek tight jaadu wala hug le le mentally.",
      icon: <Cloud className="w-12 h-12" />
    },
    {
      title: "Open when you're sick/tired",
      content: "Prescribing: 1 dose of love, 2 spoons of chill, and 3 hugs from me. Jaldi thik ho jaa meri Doraemon.",
      icon: <Coffee className="w-12 h-12" />
    },
    {
      title: "Open when you're angry at me",
      content: "Okay okay... galti ho gayi meri cutuuu par dekh, intention pure thi. Can we just hug it out and hangout?? Bill on me.",
      icon: <Frown className="w-12 h-12" />
    },
    {
      title: "Open when you had a really bad day",
      content: "Some days are storms, but you? You're a rainbow waiting to happen.",
      icon: <Smile className="w-12 h-12" />
    },
    {
      title: "Open when you don't feel like talking to anyone",
      content: "It's okay. You don't have to speak. Just know, I'm right here.",
      icon: <Clock className="w-12 h-12" />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto relative">
      {[...Array(5)].map((_, i) => (
        <FlowerDoodle key={i} />
      ))}

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center text-purple-light mb-12"
      >
        Special Messages Just for You
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8">
        {messages.map((message, index) => (
          <motion.div
            key={message.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <button
              onClick={() => setSelectedMessage(message.title)}
              className="w-full h-56 bg-white rounded-lg cute-shadow hover:transform hover:scale-105 transition-transform p-6 flex flex-col items-center justify-center text-center group"
            >
              <div className="text-purple-light group-hover:text-purple-dark transition-colors mb-4">
                {message.icon}
              </div>
              <h3 className="text-lg font-semibold text-purple-light group-hover:text-purple-dark transition-colors">
                {message.title}
              </h3>
            </button>
          </motion.div>
        ))}
      </div>

      {selectedMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedMessage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-purple-light mb-4">
              {selectedMessage}
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              {messages.find(m => m.title === selectedMessage)?.content}
            </p>
            <button
              onClick={() => setSelectedMessage(null)}
              className="w-full bg-purple-light text-white py-3 rounded-lg hover:bg-purple-dark transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default OpenWhenPage;