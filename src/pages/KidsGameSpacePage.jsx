import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGamification } from '../context/GamificationContext';
import { Sparkles, Trophy, Flame, Volume2, CheckCircle2, XCircle, RefreshCw, Star, ArrowRight, Award, Zap } from 'lucide-react';

// ─── GAME 1: A-Z ALPHABET & PHONICS ──────────────────────────────────────────
const ALPHABET_DATA = [
  { letter: 'A', word: 'Apple', emoji: '🍎', sound: 'ay for apple' },
  { letter: 'B', word: 'Ball', emoji: '⚽', sound: 'bee for ball' },
  { letter: 'C', word: 'Cat', emoji: '🐱', sound: 'cee for cat' },
  { letter: 'D', word: 'Dog', emoji: '🐶', sound: 'dee for dog' },
  { letter: 'E', word: 'Elephant', emoji: '🐘', sound: 'ee for elephant' },
  { letter: 'F', word: 'Fish', emoji: '🐟', sound: 'eff for fish' },
  { letter: 'G', word: 'Giraffe', emoji: '🦒', sound: 'jee for giraffe' },
  { letter: 'H', word: 'House', emoji: '🏠', sound: 'aych for house' },
  { letter: 'I', word: 'Ice Cream', emoji: '🍦', sound: 'eye for ice cream' },
  { letter: 'J', word: 'Juice', emoji: '🧃', sound: 'jay for juice' },
  { letter: 'K', word: 'Kite', emoji: '🪁', sound: 'kay for kite' },
  { letter: 'L', word: 'Lion', emoji: '🦁', sound: 'el for lion' },
  { letter: 'M', word: 'Monkey', emoji: '🐒', sound: 'em for monkey' },
  { letter: 'N', word: 'Nest', emoji: '🪹', sound: 'en for nest' },
  { letter: 'O', word: 'Owl', emoji: '🦉', sound: 'oh for owl' },
  { letter: 'P', word: 'Penguin', emoji: '🐧', sound: 'pee for penguin' },
  { letter: 'Q', word: 'Queen', emoji: '👸', sound: 'kyoo for queen' },
  { letter: 'R', word: 'Rocket', emoji: '🚀', sound: 'ar for rocket' },
  { letter: 'S', word: 'Sun', emoji: '☀️', sound: 'ess for sun' },
  { letter: 'T', word: 'Tiger', emoji: '🐯', sound: 'tee for tiger' },
  { letter: 'U', word: 'Umbrella', emoji: '☂️', sound: 'yoo for umbrella' },
  { letter: 'V', word: 'Violin', emoji: '🎻', sound: 'vee for violin' },
  { letter: 'W', word: 'Watermelon', emoji: '🍉', sound: 'double-yoo for watermelon' },
  { letter: 'X', word: 'Xylophone', emoji: '🎼', sound: 'eks for xylophone' },
  { letter: 'Y', word: 'Yak', emoji: '🐂', sound: 'why for yak' },
  { letter: 'Z', word: 'Zebra', emoji: '🦓', sound: 'zed for zebra' }
];

const AlphabetGame = ({ addXP }) => {
  const [selectedLetter, setSelectedLetter] = useState(ALPHABET_DATA[0]);

  const playSound = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelect = (item) => {
    setSelectedLetter(item);
    playSound(`${item.letter} for ${item.word}`);
    addXP(5);
  };

  return (
    <div className="space-y-6">
      {/* Featured Big Card */}
      <div className="bg-white p-8 rounded-none border-2 border-purple-200 shadow-md text-center space-y-4 max-w-lg mx-auto">
        <div className="text-7xl font-black text-[#C04DF7]">{selectedLetter.emoji}</div>
        <div>
          <div className="text-5xl font-black text-slate-900">{selectedLetter.letter}</div>
          <div className="text-xl font-bold text-slate-600 mt-1">{selectedLetter.word}</div>
        </div>
        <button
          onClick={() => playSound(`${selectedLetter.letter}. ${selectedLetter.word}`)}
          className="px-6 py-2.5 bg-[#C04DF7] hover:bg-purple-700 text-white font-black text-xs rounded-none shadow-sm inline-flex items-center gap-2 cursor-pointer transition"
        >
          <Volume2 className="w-4 h-4" /> Listen Pronunciation
        </button>
      </div>

      {/* Grid of A-Z Buttons */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2.5 max-w-4xl mx-auto">
        {ALPHABET_DATA.map((item) => (
          <button
            key={item.letter}
            onClick={() => handleSelect(item)}
            className={`p-3 rounded-none font-black text-lg border transition cursor-pointer flex flex-col items-center justify-center ${
              selectedLetter.letter === item.letter
                ? 'bg-[#C04DF7] text-white border-[#C04DF7] shadow-md scale-105'
                : 'bg-white text-slate-800 border-slate-200 hover:bg-purple-50'
            }`}
          >
            <span>{item.letter}</span>
            <span className="text-xs">{item.emoji}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// ─── GAME 2: MARATHI / DEVANAGARI SWAR (अ, आ, इ, ई...) ────────────────────────
const MARATHI_DATA = [
  { letter: 'अ', transliteration: 'A', example: 'अननस (Ananas - Pineapple)', emoji: '🍍' },
  { letter: 'आ', transliteration: 'AA', example: 'आंबा (Aamba - Mango)', emoji: '🥭' },
  { letter: 'इ', transliteration: 'I', example: 'इमारत (Imarat - Building)', emoji: '🏢' },
  { letter: 'ई', transliteration: 'EE', example: 'ईडलिंबू (Eedlimbu - Lemon)', emoji: '🍋' },
  { letter: 'उ', transliteration: 'U', example: 'उखळ (Ukhal - Mortar)', emoji: '🥣' },
  { letter: 'ऊ', transliteration: 'OO', example: 'ऊस (Oos - Sugarcane)', emoji: '🌾' },
  { letter: 'ऋ', transliteration: 'RU', example: 'ऋषी (Rishi - Sage)', emoji: '🧘' },
  { letter: 'ए', transliteration: 'E', example: 'एक (Ek - One)', emoji: '1️⃣' },
  { letter: 'ऐ', transliteration: 'AI', example: 'ऐरण (Airan - Anvil)', emoji: '🔨' },
  { letter: 'ओ', transliteration: 'O', example: 'ओझं (Ojha - Load)', emoji: '📦' },
  { letter: 'औ', transliteration: 'AU', example: 'औषध (Aushadh - Medicine)', emoji: '💊' },
  { letter: 'अं', transliteration: 'AM', example: 'अंबारी (Ambari - Elephant Seat)', emoji: '🐘' },
  { letter: 'अः', transliteration: 'AHA', example: 'स्वतः (Swatah - Self)', emoji: '✨' }
];

const MarathiSwarGame = ({ addXP }) => {
  const [activeItem, setActiveItem] = useState(MARATHI_DATA[0]);

  const speakMarathi = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'mr-IN'; // Marathi / Hindi Voice Accent
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelect = (item) => {
    setActiveItem(item);
    speakMarathi(item.letter);
    addXP(5);
  };

  return (
    <div className="space-y-6">
      {/* Featured Display */}
      <div className="bg-white p-8 rounded-none border-2 border-emerald-300 shadow-md text-center space-y-4 max-w-lg mx-auto">
        <div className="text-7xl font-black text-emerald-600">{activeItem.emoji}</div>
        <div>
          <div className="text-6xl font-black text-slate-900">{activeItem.letter}</div>
          <div className="text-xs font-black text-[#C04DF7] uppercase tracking-widest mt-1">Pronunciation: "{activeItem.transliteration}"</div>
          <div className="text-base font-bold text-slate-700 mt-2">{activeItem.example}</div>
        </div>
        <button
          onClick={() => speakMarathi(activeItem.letter)}
          className="px-6 py-2.5 bg-[#22C55E] hover:bg-emerald-700 text-white font-black text-xs rounded-none shadow-sm inline-flex items-center gap-2 cursor-pointer transition"
        >
          <Volume2 className="w-4 h-4" /> Listen Audio (अ, आ, इ, ई)
        </button>
      </div>

      {/* Grid of Marathi Swar Cards */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 max-w-4xl mx-auto">
        {MARATHI_DATA.map((item) => (
          <button
            key={item.letter}
            onClick={() => handleSelect(item)}
            className={`p-4 rounded-none font-black border transition cursor-pointer flex flex-col items-center justify-center ${
              activeItem.letter === item.letter
                ? 'bg-[#22C55E] text-white border-[#22C55E] shadow-md scale-105'
                : 'bg-white text-slate-900 border-slate-200 hover:bg-emerald-50'
            }`}
          >
            <span className="text-3xl">{item.letter}</span>
            <span className="text-[10px] font-bold mt-1 opacity-90">{item.transliteration}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// ─── GAME 3: MATH WIZARD (ADDITION & SUBTRACTION PUZZLES) ────────────────────
const generateMathProblem = (type = 'mixed') => {
  const isAdd = type === 'add' || (type === 'mixed' && Math.random() > 0.5);
  const n1 = Math.floor(Math.random() * 15) + 1;
  const n2 = Math.floor(Math.random() * 10) + 1;
  
  if (isAdd) {
    const answer = n1 + n2;
    const options = [answer, answer + 2, answer - 1, answer + 3].sort(() => Math.random() - 0.5);
    return { num1: n1, num2: n2, op: '+', answer, options: Array.from(new Set(options)).slice(0, 4) };
  } else {
    const num1 = Math.max(n1, n2);
    const num2 = Math.min(n1, n2);
    const answer = num1 - num2;
    const options = [answer, answer + 1, answer + 2, Math.max(0, answer - 1)].sort(() => Math.random() - 0.5);
    return { num1, num2, op: '-', answer, options: Array.from(new Set(options)).slice(0, 4) };
  }
};

const MathWizardGame = ({ addXP }) => {
  const [problem, setProblem] = useState(() => generateMathProblem());
  const [selectedAns, setSelectedAns] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState(null);

  const handleAnswer = (val) => {
    setSelectedAns(val);
    if (val === problem.answer) {
      setFeedback('correct');
      setScore((s) => s + 1);
      setStreak((st) => st + 1);
      addXP(15);
      setTimeout(() => {
        setProblem(generateMathProblem());
        setSelectedAns(null);
        setFeedback(null);
      }, 1200);
    } else {
      setFeedback('wrong');
      setStreak(0);
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Score Header */}
      <div className="flex items-center justify-between bg-white p-4 rounded-none border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-500" />
          <span className="text-xs font-black text-slate-800">Score: {score}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#C04DF7] font-black text-xs">
          <Flame className="w-4 h-4 fill-[#C04DF7]" /> Streak: {streak} 🔥
        </div>
      </div>

      {/* Math Card */}
      <div className="bg-white p-8 rounded-none border-2 border-purple-200 shadow-md text-center space-y-6">
        <span className="px-3 py-1 bg-purple-100 text-[#C04DF7] text-xs font-black rounded-none inline-block">
          ➕ ➖ Math Challenge
        </span>

        <div className="text-5xl font-black text-slate-900 tracking-wider">
          {problem.num1} {problem.op} {problem.num2} = ?
        </div>

        {/* Visual Stars Helper */}
        <div className="flex items-center justify-center gap-1 flex-wrap pt-2">
          {Array.from({ length: problem.num1 }).map((_, i) => (
            <span key={i} className="text-lg">⭐</span>
          ))}
          <span className="text-xl font-black px-2 text-[#C04DF7]">{problem.op}</span>
          {Array.from({ length: problem.num2 }).map((_, i) => (
            <span key={i} className="text-lg">🌟</span>
          ))}
        </div>

        {/* Feedback Alert */}
        <AnimatePresence>
          {feedback === 'correct' && (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-3 bg-emerald-100 text-emerald-800 text-xs font-black rounded-none">
              🎉 Brilliant! Correct Answer! +15 XP
            </motion.div>
          )}
          {feedback === 'wrong' && (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-3 bg-rose-100 text-rose-800 text-xs font-black rounded-none">
              ❌ Oops! Try again! You can do it!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Answer Options Grid */}
        <div className="grid grid-cols-2 gap-4">
          {problem.options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              className={`p-4 rounded-none font-black text-2xl border transition cursor-pointer ${
                selectedAns === opt
                  ? opt === problem.answer
                    ? 'bg-emerald-500 text-white border-emerald-500'
                    : 'bg-rose-500 text-white border-rose-500'
                  : 'bg-slate-50 text-slate-900 border-slate-200 hover:bg-purple-50'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <button
          onClick={() => { setProblem(generateMathProblem()); setSelectedAns(null); setFeedback(null); }}
          className="text-xs font-black text-slate-500 hover:text-[#C04DF7] flex items-center justify-center gap-1 mx-auto pt-2 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Skip Question
        </button>
      </div>
    </div>
  );
};

// ─── GAME 4: ENGLISH GRAMMAR FILL-IN-THE-BLANKS ────────────────────────────────
const GRAMMAR_PUZZLES = [
  { sentence: 'The cat is sleeping ___ the couch.', answer: 'on', options: ['on', 'in', 'under', 'at'] },
  { sentence: 'She ___ to the park every evening.', answer: 'goes', options: ['goes', 'go', 'going', 'gone'] },
  { sentence: 'We have ___ apple for breakfast.', answer: 'an', options: ['an', 'a', 'the', 'some'] },
  { sentence: 'Dogs ___ very loyal animals.', answer: 'are', options: ['are', 'is', 'was', 'am'] },
  { sentence: 'The sun shines ___ in the sky.', answer: 'brightly', options: ['brightly', 'bright', 'darkly', 'slowly'] }
];

const GrammarBlanksGame = ({ addXP }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState(null);
  const [status, setStatus] = useState(null);

  const puzzle = GRAMMAR_PUZZLES[currentIndex];

  const handleSelectWord = (word) => {
    setSelectedWord(word);
    if (word === puzzle.answer) {
      setStatus('correct');
      addXP(15);
    } else {
      setStatus('wrong');
    }
  };

  const handleNext = () => {
    setStatus(null);
    setSelectedWord(null);
    setCurrentIndex((prev) => (prev + 1) % GRAMMAR_PUZZLES.length);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="bg-white p-8 rounded-none border-2 border-purple-200 shadow-md text-center space-y-6">
        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-black rounded-none inline-block">
          ✏️ Grammar & Sentence Blanks
        </span>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
          {puzzle.sentence.replace('___', selectedWord || '_____')}
        </h3>

        {status === 'correct' && (
          <div className="p-3 bg-emerald-100 text-emerald-800 text-xs font-black rounded-none flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Perfect Grammar! +15 XP
          </div>
        )}

        {status === 'wrong' && (
          <div className="p-3 bg-rose-100 text-rose-800 text-xs font-black rounded-none flex items-center justify-center gap-1.5">
            <XCircle className="w-4 h-4 text-rose-600" /> Incorrect word. Try another option!
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          {puzzle.options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelectWord(opt)}
              className={`p-3.5 rounded-none font-black text-base border transition cursor-pointer ${
                selectedWord === opt
                  ? opt === puzzle.answer
                    ? 'bg-emerald-500 text-white border-emerald-500'
                    : 'bg-rose-500 text-white border-rose-500'
                  : 'bg-slate-50 text-slate-900 border-slate-200 hover:bg-purple-50'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {status === 'correct' && (
          <button
            onClick={handleNext}
            className="w-full py-3 bg-[#22C55E] hover:bg-emerald-600 text-white font-black text-xs rounded-none shadow-md cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Next Sentence</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

// ─── MAIN KIDS GAME SPACE PAGE ─────────────────────────────────────────────
export const KidsGameSpacePage = () => {
  const { xp, addXP } = useGamification();
  const [activeTab, setActiveTab] = useState('alphabet');

  const tabs = [
    { id: 'alphabet', label: '🅰️ A-Z Alphabets', desc: 'English Phonics' },
    { id: 'marathi', label: '🪔 Marathi (अ, आ, इ, ई)', desc: 'Devanagari Swar' },
    { id: 'math', label: '🔢 Math Wizard', desc: 'Addition & Subtraction' },
    { id: 'grammar', label: '✏️ Grammar Blanks', desc: 'Fill in the Blanks' },
  ];

  return (
    <div className="bg-[#FAF5F8] text-slate-900 font-sans min-h-screen">
      
      {/* ── Header Banner ───────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#FDE8F0] via-[#FAF5F8] to-[#FCE6EE] py-12 border-b border-pink-100 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest block">SKILLSEED KIDS GAME ARCADE</span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Play, Learn &amp; Earn XP! 🎮
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-xl mx-auto leading-relaxed">
            Fun educational mini-games designed for young explorers. Solve math puzzles, learn Marathi Swar, and master English phonics!
          </p>

          {/* User XP Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-none border border-purple-200 shadow-sm text-xs font-black text-[#C04DF7]">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>Total Earned XP: {xp} XP</span>
          </div>
        </div>
      </section>

      {/* ── Game Navigation Tabs ────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 rounded-none border text-left transition cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#C04DF7] text-white border-[#C04DF7] shadow-md'
                  : 'bg-white text-slate-900 border-slate-200 hover:bg-purple-50'
              }`}
            >
              <div className="text-sm font-black">{tab.label}</div>
              <div className={`text-[10px] font-bold ${activeTab === tab.id ? 'text-purple-100' : 'text-slate-500'}`}>{tab.desc}</div>
            </button>
          ))}
        </div>

        {/* ── Active Game Space Container ───────────────────────────────── */}
        <div className="bg-white p-6 sm:p-10 rounded-none border border-slate-200 shadow-lg">
          {activeTab === 'alphabet' && <AlphabetGame addXP={addXP} />}
          {activeTab === 'marathi' && <MarathiSwarGame addXP={addXP} />}
          {activeTab === 'math' && <MathWizardGame addXP={addXP} />}
          {activeTab === 'grammar' && <GrammarBlanksGame addXP={addXP} />}
        </div>

      </div>
    </div>
  );
};
