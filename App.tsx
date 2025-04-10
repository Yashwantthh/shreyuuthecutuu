import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Calendar, MessageCircle, Gift, Edit, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import CountdownPage from './pages/CountdownPage';
import ContactPage from './pages/ContactPage';
import OpenWhenPage from './pages/OpenWhenPage';
import NotePage from './pages/NotePage';
import FloralBackground from './components/FloralBackground';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#FDF8F4] relative overflow-hidden">
        <FloralBackground />
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation */}
        <nav className={`
          fixed top-0 left-0 w-full md:w-auto h-full md:h-auto
          transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 transition-transform duration-300 ease-in-out
          bg-white/80 backdrop-blur-sm md:bg-transparent z-40 md:relative
        `}>
          <div className="container mx-auto flex md:flex-row flex-col items-center justify-center h-full md:h-auto space-y-8 md:space-y-0 md:space-x-12 py-8">
            <NavLink to="/" icon={<Home />} text="Home" onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/countdown" icon={<Calendar />} text="Countdown" onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/open-when" icon={<Gift />} text="Open When" onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/notes" icon={<Edit />} text="Notes" onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/contact" icon={<MessageCircle />} text="Contact" onClick={() => setIsMenuOpen(false)} />
          </div>
        </nav>

        <main className="container mx-auto px-4 py-20 md:py-12 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/countdown" element={<CountdownPage />} />
            <Route path="/open-when" element={<OpenWhenPage />} />
            <Route path="/notes" element={<NotePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="bg-gradient-to-r from-[#E8B4B8] to-[#EED6D3] py-16 text-center text-white mt-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative"
          >
            <div className="max-w-2xl mx-auto">
              <p className="text-2xl font-bold mb-6 text-[#4A3F35]">
                Made with way too much love, and a forever wala bond.
              </p>
              <div className="space-y-2">
                <p className="text-lg text-[#4A3F35]">Tera hi hamesha,</p>
                <p className="font-bold text-xl text-[#4A3F35]">Your one and only,</p>
                <motion.p 
                  className="text-3xl font-bold bg-white text-[#E8B4B8] px-6 py-2 rounded-full inline-block shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  yashuuuuuu
                </motion.p>
              </div>
            </div>
          </motion.div>
        </footer>
      </div>
    </Router>
  );
}

function NavLink({ to, icon, text, onClick }: { to: string; icon: React.ReactNode; text: string; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex flex-col items-center text-[#E8B4B8] hover:text-[#D88E95] transition-colors"
    >
      <motion.span 
        className="text-xl mb-1"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        {icon}
      </motion.span>
      <span className="text-sm">{text}</span>
    </Link>
  );
}

export default App;