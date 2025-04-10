import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Trash2 } from 'lucide-react';

function NotePage() {
  const [notes, setNotes] = useState<string[]>(() => {
    const savedNotes = localStorage.getItem('shreyuNotes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    localStorage.setItem('shreyuNotes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.trim()) {
      setNotes([...notes, newNote.trim()]);
      setNewNote('');
    }
  };

  const deleteNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-purple-light mb-4">
          Your Personal Canvas
        </h1>
        <p className="text-lg text-gray-600">
          A space just for you, write whatever your heart desires...
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={addNote}
        className="mb-8"
      >
        <div className="bg-white p-6 rounded-lg cute-shadow">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Write your thoughts here..."
            className="w-full p-4 min-h-[200px] note-paper border-none focus:outline-none resize-none"
          />
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-purple-light text-white px-6 py-2 rounded-lg hover:bg-purple-dark transition-colors flex items-center gap-2"
            >
              <Save className="w-5 h-5" />
              Save Note
            </button>
          </div>
        </div>
      </motion.form>

      <div className="space-y-6">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg cute-shadow"
          >
            <div className="flex justify-between items-start">
              <p className="whitespace-pre-wrap note-paper flex-1">{note}</p>
              <button
                onClick={() => deleteNote(index)}
                className="text-purple-light hover:text-purple-dark ml-4"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default NotePage;