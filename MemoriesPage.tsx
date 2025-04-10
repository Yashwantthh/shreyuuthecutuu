import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Plus, Trash2 } from 'lucide-react';

function MemoriesPage() {
  const [memories, setMemories] = useState<string[]>([]);
  const [newMemory, setNewMemory] = useState('');

  const addMemory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMemory.trim()) {
      setMemories([...memories, newMemory.trim()]);
      setNewMemory('');
    }
  };

  const removeMemory = (index: number) => {
    setMemories(memories.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center text-pink-600 mb-8"
      >
        Our Precious Memories
      </motion.h1>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={addMemory}
        className="mb-8"
      >
        <div className="flex gap-4">
          <input
            type="text"
            value={newMemory}
            onChange={(e) => setNewMemory(e.target.value)}
            placeholder="Add a new memory..."
            className="flex-1 p-3 border border-pink-200 rounded-lg focus:outline-none focus:border-pink-400"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 rounded-lg hover:bg-pink-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>
      </motion.form>

      <div className="space-y-4">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-4 rounded-lg cute-shadow flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-pink-600" />
              <p>{memory}</p>
            </div>
            <button
              onClick={() => removeMemory(index)}
              className="text-pink-600 hover:text-pink-800"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </motion.div>
        ))}
      </div>

      {memories.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mt-8"
        >
          Start adding your precious memories...
        </motion.p>
      )}
    </div>
  );
}

export default MemoriesPage;