import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Heart } from 'lucide-react';

function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-pink-600 mb-4">
          Wanna talk to the dukh engineer of your life?
        </h1>
        <p className="text-lg mb-4">
          Here's your hotline to me. your personal 24x7 therapist, meme distributor, and lifelong simp.
        </p>
        <p className="text-lg text-pink-600">
          I'm always just one ping away.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-8 rounded-lg cute-shadow mb-8"
      >
        <p className="text-xl text-center italic text-pink-600 mb-8">
          Kabhi kabhi lagta hai... tu mujhe call kar le bas aise hi. Kyunki main hamesha ready hoon sunne ke liye.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Your Message</label>
            <textarea
              className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:border-pink-400"
              rows={4}
              placeholder="Tell me everything..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Send to Yashuuu
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center gap-8"
      >
        <a href="tel:" className="flex flex-col items-center text-pink-600">
          <Phone className="w-8 h-8 mb-2" />
          <span>Call Me</span>
        </a>
        <a href="mailto:" className="flex flex-col items-center text-pink-600">
          <Mail className="w-8 h-8 mb-2" />
          <span>Email Me</span>
        </a>
      </motion.div>
    </div>
  );
}

export default ContactPage;