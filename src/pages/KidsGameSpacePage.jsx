import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGamification } from '../context/GamificationContext';
import {
  Sparkles, Trophy, Flame, Volume2, CheckCircle2, XCircle,
  RefreshCw, Star, ArrowRight, Award, Zap, Timer, HelpCircle,
  Play, Pause, Heart, RotateCcw, Shuffle
} from 'lucide-react';

// Speech Utility
const playSpeech = (text) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }
};

// ─── 1. 🔤 ALPHABET MATCH GAME (Age 3-6) ─────────────────────────────────────
const AlphabetMatchGame = ({ addXP }) => {
  const pairsData = [
    { upper: 'A', lower: 'a', emoji: '🍎', name: 'Apple' },
    { upper: 'B', lower: 'b', emoji: '⚽', name: 'Ball' },
    { upper: 'C', lower: 'c', emoji: '🐱', name: 'Cat' },
    { upper: 'D', lower: 'd', emoji: '🐶', name: 'Dog' },
    { upper: 'E', lower: 'e', emoji: '🐘', name: 'Elephant' },
    { upper: 'F', lower: 'f', emoji: '🐟', name: 'Fish' },
  ];

  const [selectedUpper, setSelectedUpper] = useState(null);
  const [matched, setMatched] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleUpperClick = (item) => {
    setSelectedUpper(item);
    playSpeech(`Capital ${item.upper}`);
  };

  const handleLowerClick = (lowerLetter) => {
    if (!selectedUpper) {
      setFeedback('Select a capital letter first!');
      return;
    }

    if (selectedUpper.lower === lowerLetter) {
      setMatched((prev) => [...prev, selectedUpper.upper]);
      playSpeech(`Great job! ${selectedUpper.upper} matches ${selectedUpper.lower} for ${selectedUpper.name}!`);
      setFeedback(`Correct! ${selectedUpper.upper} ➔ ${lowerLetter} (${selectedUpper.emoji} ${selectedUpper.name})`);
      addXP(10);
      setSelectedUpper(null);
    } else {
      playSpeech('Try again!');
      setFeedback('Oops! Not a match. Try another lower-case letter.');
    }
  };

  const resetGame = () => {
    setMatched([]);
    setSelectedUpper(null);
    setFeedback('');
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto text-center">
      <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl">
        <h3 className="text-xl font-black text-[#C04DF7]">🔤 Alphabet Match (Ages 3–6)</h3>
        <p className="text-xs font-semibold text-slate-600">Select an Uppercase letter on the left, then click its matching Lowercase letter on the right!</p>
      </div>

      {feedback && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm font-bold text-amber-900 animate-bounce">
          {feedback}
        </div>
      )}

      <div className="grid grid-cols-2 gap-8 items-center">
        {/* Uppercase Column */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">Uppercase Letters</h4>
          {pairsData.map((item) => {
            const isDone = matched.includes(item.upper);
            const isSelected = selectedUpper?.upper === item.upper;
            return (
              <button
                key={item.upper}
                disabled={isDone}
                onClick={() => handleUpperClick(item)}
                className={`w-full p-4 rounded-xl border-2 font-black text-2xl flex items-center justify-between transition cursor-pointer ${
                  isDone
                    ? 'bg-emerald-100 border-emerald-300 text-emerald-700 opacity-60'
                    : isSelected
                    ? 'bg-[#C04DF7] border-[#C04DF7] text-white shadow-lg scale-105'
                    : 'bg-white border-slate-200 hover:border-purple-300 text-slate-800'
                }`}
              >
                <span>{item.upper}</span>
                <span className="text-xl">{item.emoji}</span>
              </button>
            );
          })}
        </div>

        {/* Lowercase Column */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">Lowercase Letters</h4>
          {['c', 'a', 'f', 'b', 'e', 'd'].map((lower) => {
            const isMatched = matched.some((u) => pairsData.find((p) => p.upper === u)?.lower === lower);
            return (
              <button
                key={lower}
                disabled={isMatched}
                onClick={() => handleLowerClick(lower)}
                className={`w-full p-4 rounded-xl border-2 font-black text-2xl transition cursor-pointer text-center ${
                  isMatched
                    ? 'bg-emerald-100 border-emerald-300 text-emerald-700 opacity-60'
                    : 'bg-white border-slate-200 hover:border-emerald-400 text-slate-800 hover:bg-emerald-50'
                }`}
              >
                {lower}
              </button>
            );
          })}
        </div>
      </div>

      {matched.length === pairsData.length && (
        <div className="p-6 bg-emerald-50 border-2 border-emerald-300 rounded-2xl space-y-3">
          <h4 className="text-2xl font-black text-emerald-800">🎉 Level Complete! All Matched!</h4>
          <p className="text-xs font-bold text-emerald-600">You earned +60 XP!</p>
          <button
            onClick={resetGame}
            className="px-6 py-2.5 bg-emerald-600 text-white font-black rounded-xl text-xs shadow-md hover:bg-emerald-700 transition"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

// ─── 2. 🔢 MATH QUIZ GAME ───────────────────────────────────────────────────
const MathQuizGame = ({ addXP }) => {
  const [difficulty, setDifficulty] = useState('easy'); // easy, medium, hard
  const [num1, setNum1] = useState(3);
  const [num2, setNum2] = useState(4);
  const [operator, setOperator] = useState('+');
  const [userAnswer, setUserAnswer] = useState('');
  const [stars, setStars] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [timeLeft, setTimeLeft] = useState(15);

  const generateQuestion = (level) => {
    let max = level === 'easy' ? 10 : level === 'medium' ? 20 : 12;
    let n1 = Math.floor(Math.random() * max) + 1;
    let n2 = Math.floor(Math.random() * max) + 1;
    let ops = level === 'easy' ? ['+'] : level === 'medium' ? ['+', '-'] : ['+', '-', '×'];
    let op = ops[Math.floor(Math.random() * ops.length)];

    if (op === '-' && n1 < n2) {
      [n1, n2] = [n2, n1];
    }

    setNum1(n1);
    setNum2(n2);
    setOperator(op);
    setUserAnswer('');
    setTimeLeft(15);
  };

  useEffect(() => {
    generateQuestion(difficulty);
  }, [difficulty]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setFeedback('⏰ Time is up! Try the next question.');
      setStreak(0);
      setTimeout(() => generateQuestion(difficulty), 1200);
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, difficulty]);

  const getCorrectResult = () => {
    if (operator === '+') return num1 + num2;
    if (operator === '-') return num1 - num2;
    if (operator === '×') return num1 * num2;
    return 0;
  };

  const handleCheck = (e) => {
    e.preventDefault();
    const correct = getCorrectResult();
    if (parseInt(userAnswer) === correct) {
      playSpeech('Correct Math Answer!');
      setStars((s) => s + 1);
      setStreak((st) => st + 1);
      setFeedback(`🎉 Correct! ${num1} ${operator} ${num2} = ${correct}`);
      addXP(15);
      setTimeout(() => generateQuestion(difficulty), 1000);
    } else {
      playSpeech('Not quite! Try again.');
      setStreak(0);
      setFeedback(`❌ Not quite! ${num1} ${operator} ${num2} = ${correct}`);
    }
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto text-center">
      {/* Difficulty Selector */}
      <div className="flex justify-center gap-2">
        {['easy', 'medium', 'hard'].map((lvl) => (
          <button
            key={lvl}
            onClick={() => setDifficulty(lvl)}
            className={`px-4 py-2 text-xs font-black rounded-xl capitalize transition cursor-pointer ${
              difficulty === lvl
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-purple-50'
            }`}
          >
            {lvl} Mode
          </button>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="flex items-center justify-between p-4 bg-purple-50 border border-purple-200 rounded-2xl text-xs font-black text-slate-800">
        <div className="flex items-center gap-1.5 text-amber-500">
          <Star className="w-5 h-5 fill-amber-400" />
          <span>Stars: {stars}</span>
        </div>
        <div className="flex items-center gap-1.5 text-rose-500">
          <Timer className="w-5 h-5" />
          <span>Timer: {timeLeft}s</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#C04DF7]">
          <Flame className="w-5 h-5 fill-[#C04DF7]" />
          <span>Streak: {streak}</span>
        </div>
      </div>

      {/* Question Card */}
      <div className="p-8 bg-white border-2 border-purple-200 rounded-3xl shadow-xl space-y-6">
        <div className="text-6xl font-black text-slate-900 tracking-wider">
          {num1} {operator} {num2} = ?
        </div>

        <form onSubmit={handleCheck} className="flex gap-3 max-w-xs mx-auto">
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Answer"
            className="w-full text-center text-2xl font-black p-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:outline-none"
            autoFocus
            required
          />
          <button
            type="submit"
            className="px-6 bg-[#C04DF7] hover:bg-purple-700 text-white font-black text-sm rounded-xl shadow-md cursor-pointer"
          >
            Submit
          </button>
        </form>

        {feedback && <p className="text-sm font-bold text-slate-700 animate-pulse">{feedback}</p>}
      </div>
    </div>
  );
};

// ─── 3. 🧩 JIGSAW PUZZLE GAME ──────────────────────────────────────────────
const JigsawPuzzleGame = ({ addXP }) => {
  const categoryData = {
    Animals: ['🐶', '🐱', '🦁', '🐘'],
    Fruits: ['🍎', '🍌', '🍇', '🍓'],
    Vehicles: ['🚗', '🚀', '✈️', '⛵'],
    Cartoons: ['🦸', '🧙‍♂️', '🤖', '🦄']
  };

  const [category, setCategory] = useState('Animals');
  const [items, setItems] = useState([...categoryData.Animals]);
  const [complete, setComplete] = useState(false);

  const shuffleItems = (cat) => {
    const list = [...categoryData[cat]];
    setItems(list.sort(() => Math.random() - 0.5));
    setComplete(false);
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    shuffleItems(cat);
  };

  const handleSwap = (idx) => {
    const newItems = [...items];
    const nextIdx = (idx + 1) % newItems.length;
    [newItems[idx], newItems[nextIdx]] = [newItems[nextIdx], newItems[idx]];
    setItems(newItems);

    const original = categoryData[category];
    if (JSON.stringify(newItems) === JSON.stringify(original)) {
      setComplete(true);
      playSpeech(`Puzzle solved! Great job matching ${category}!`);
      addXP(30);
    }
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto text-center">
      <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl">
        <h3 className="text-xl font-black text-[#C04DF7]">🧩 Jigsaw Puzzle</h3>
        <p className="text-xs font-semibold text-slate-600">Click tiles to swap them and restore the original order!</p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-2 flex-wrap">
        {Object.keys(categoryData).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 text-xs font-black rounded-xl transition cursor-pointer ${
              category === cat
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-purple-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
        {items.map((emoji, idx) => (
          <button
            key={idx}
            onClick={() => handleSwap(idx)}
            className="h-28 bg-white border-2 border-purple-200 hover:border-purple-400 rounded-2xl flex items-center justify-center text-5xl shadow-md cursor-pointer active:scale-95 transition"
          >
            {emoji}
          </button>
        ))}
      </div>

      {complete && (
        <div className="p-4 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-900 font-black text-sm">
          🎉 Puzzle Complete! You earned +30 XP!
        </div>
      )}
    </div>
  );
};

// ─── 4. 🎨 COLOR MATCHING GAME ──────────────────────────────────────────────
const ColorMatchingGame = ({ addXP }) => {
  const colorData = [
    { object: '🍎 Apple', color: 'Red', hex: '#EF4444', emoji: '🍎' },
    { object: '🍌 Banana', color: 'Yellow', hex: '#EAB308', emoji: '🍌' },
    { object: '🐸 Frog', color: 'Green', hex: '#22C55E', emoji: '🐸' },
    { object: '🫐 Blueberry', color: 'Blue', hex: '#3B82F6', emoji: '🫐' },
    { object: '🍇 Grapes', color: 'Purple', hex: '#A855F7', emoji: '🍇' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  const currentObj = colorData[currentIndex];

  const handleSelectColor = (colorName) => {
    if (colorName === currentObj.color) {
      playSpeech(`Correct! ${currentObj.color} for ${currentObj.object}`);
      setScore((s) => s + 1);
      addXP(15);
      setFeedback(`✅ Correct! ${currentObj.emoji} is ${currentObj.color}`);
      setTimeout(() => {
        setFeedback('');
        setCurrentIndex((i) => (i + 1) % colorData.length);
      }, 1000);
    } else {
      playSpeech('Try again!');
      setFeedback(`❌ Incorrect! Try another color.`);
    }
  };

  return (
    <div className="space-y-6 max-w-md mx-auto text-center">
      <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl">
        <h3 className="text-xl font-black text-[#C04DF7]">🎨 Color Matching</h3>
        <p className="text-xs font-semibold text-slate-600">Match the correct color with the object shown!</p>
      </div>

      <div className="p-8 bg-white border-2 border-purple-200 rounded-3xl shadow-lg space-y-4">
        <div className="text-8xl">{currentObj.emoji}</div>
        <div className="text-2xl font-black text-slate-800">What color is this {currentObj.object}?</div>
      </div>

      {feedback && <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm font-bold text-amber-900">{feedback}</div>}

      <div className="grid grid-cols-2 gap-3">
        {colorData.map((c) => (
          <button
            key={c.color}
            onClick={() => handleSelectColor(c.color)}
            className="p-4 rounded-xl font-black text-white text-base shadow-md cursor-pointer transition active:scale-95"
            style={{ backgroundColor: c.hex }}
          >
            {c.color}
          </button>
        ))}
      </div>
    </div>
  );
};

// ─── 5. 🐶 ANIMAL SOUNDS GAME ───────────────────────────────────────────────
const AnimalSoundsGame = ({ addXP }) => {
  const animals = [
    { name: 'Dog', emoji: '🐶', soundText: 'Woof Woof!' },
    { name: 'Cat', emoji: '🐱', soundText: 'Meow Meow!' },
    { name: 'Lion', emoji: '🦁', soundText: 'Roar!' },
    { name: 'Cow', emoji: '🐮', soundText: 'Moo Moo!' },
    { name: 'Duck', emoji: '🦆', soundText: 'Quack Quack!' },
    { name: 'Rooster', emoji: '🐓', soundText: 'Cock-a-doodle-doo!' }
  ];

  const [currentAnimal, setCurrentAnimal] = useState(animals[0]);
  const [feedback, setFeedback] = useState('');

  const playAnimalSound = (animal) => {
    setCurrentAnimal(animal);
    playSpeech(`${animal.name} says ${animal.soundText}`);
  };

  const handleGuess = (guessedName) => {
    if (guessedName === currentAnimal.name) {
      playSpeech(`Correct! It's a ${currentAnimal.name}!`);
      setFeedback(`🎉 Correct! ${currentAnimal.emoji} is a ${currentAnimal.name}!`);
      addXP(10);
    } else {
      playSpeech('Try again!');
      setFeedback('❌ Oops! Guess again.');
    }
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto text-center">
      <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl">
        <h3 className="text-xl font-black text-[#C04DF7]">🐶 Animal Sounds</h3>
        <p className="text-xs font-semibold text-slate-600">Click any animal to listen to its sound, then guess the animal!</p>
      </div>

      <div className="p-8 bg-white border-2 border-purple-200 rounded-3xl shadow-lg space-y-4">
        <div className="text-7xl">{currentAnimal.emoji}</div>
        <button
          onClick={() => playAnimalSound(currentAnimal)}
          className="px-6 py-3 bg-[#C04DF7] hover:bg-purple-700 text-white font-black text-xs rounded-xl shadow-md inline-flex items-center gap-2 cursor-pointer"
        >
          <Volume2 className="w-4 h-4" /> Listen Sound ({currentAnimal.soundText})
        </button>
      </div>

      {feedback && <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm font-bold text-amber-900">{feedback}</div>}

      <div className="grid grid-cols-3 gap-3">
        {animals.map((a) => (
          <button
            key={a.name}
            onClick={() => handleGuess(a.name)}
            className="p-4 bg-white border-2 border-slate-200 hover:border-purple-400 rounded-2xl flex flex-col items-center gap-1 cursor-pointer transition active:scale-95"
          >
            <span className="text-4xl">{a.emoji}</span>
            <span className="text-xs font-black text-slate-800">{a.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// ─── 6. 📝 WORD BUILDER GAME ───────────────────────────────────────────────
const WordBuilderGame = ({ addXP }) => {
  const wordList = [
    { target: 'CAT', scrambled: ['T', 'C', 'A'], emoji: '🐱' },
    { target: 'DOG', scrambled: ['G', 'O', 'D'], emoji: '🐶' },
    { target: 'SUN', scrambled: ['N', 'S', 'U'], emoji: '☀️' },
    { target: 'BALL', scrambled: ['L', 'B', 'A', 'L'], emoji: '⚽' },
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [builtLetters, setBuiltLetters] = useState([]);
  const [feedback, setFeedback] = useState('');

  const currentObj = wordList[wordIndex];

  const handleLetterClick = (letter, idx) => {
    const updated = [...builtLetters, letter];
    setBuiltLetters(updated);

    const currentString = updated.join('');
    if (currentString === currentObj.target) {
      playSpeech(`Awesome! You spelled ${currentObj.target}!`);
      setFeedback(`🎉 Perfect! ${currentObj.emoji} ${currentObj.target}`);
      addXP(20);
      setTimeout(() => {
        setBuiltLetters([]);
        setFeedback('');
        setWordIndex((i) => (i + 1) % wordList.length);
      }, 1200);
    }
  };

  const handleClear = () => {
    setBuiltLetters([]);
    setFeedback('');
  };

  return (
    <div className="space-y-6 max-w-md mx-auto text-center">
      <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl">
        <h3 className="text-xl font-black text-[#C04DF7]">📝 Word Builder</h3>
        <p className="text-xs font-semibold text-slate-600">Arrange the scrambled letters to form the correct word!</p>
      </div>

      <div className="p-8 bg-white border-2 border-purple-200 rounded-3xl shadow-lg space-y-4">
        <div className="text-7xl">{currentObj.emoji}</div>
        
        {/* Built Word Box */}
        <div className="h-16 flex items-center justify-center gap-2 bg-slate-50 border-2 border-dashed border-purple-300 rounded-2xl px-4 text-3xl font-black text-purple-700">
          {builtLetters.length > 0 ? builtLetters.join(' ') : <span className="text-xs text-slate-400 font-bold">Click letters below</span>}
        </div>
      </div>

      {feedback && <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-sm font-bold text-emerald-800">{feedback}</div>}

      {/* Scrambled Buttons */}
      <div className="flex justify-center gap-3">
        {currentObj.scrambled.map((char, i) => (
          <button
            key={i}
            onClick={() => handleLetterClick(char, i)}
            className="w-14 h-14 bg-white border-2 border-purple-300 hover:bg-purple-600 hover:text-white rounded-xl text-2xl font-black text-slate-800 shadow-md cursor-pointer transition active:scale-95"
          >
            {char}
          </button>
        ))}
      </div>

      <button
        onClick={handleClear}
        className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl cursor-pointer"
      >
        Clear Selection
      </button>
    </div>
  );
};

// ─── 7. 🧠 MEMORY CARD GAME ─────────────────────────────────────────────────
const MemoryCardGame = ({ addXP }) => {
  const cardEmojis = ['🍎', '🐶', '🚀', '⭐', '🎈', '🎨'];

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  const initGame = () => {
    const deck = [...cardEmojis, ...cardEmojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, id) => ({ id, emoji }));
    setCards(deck);
    setFlipped([]);
    setMatchedPairs([]);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matchedPairs.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].emoji === cards[second].emoji) {
        setMatchedPairs((prev) => [...prev, first, second]);
        playSpeech('Pair matched!');
        addXP(15);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 900);
      }
    }
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto text-center">
      <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl flex items-center justify-between">
        <div>
          <h3 className="text-xl font-black text-[#C04DF7]">🧠 Memory Card Game</h3>
          <p className="text-xs font-semibold text-slate-600">Flip two cards to find matching pairs!</p>
        </div>
        <button
          onClick={initGame}
          className="p-2.5 bg-purple-600 text-white rounded-xl font-bold text-xs hover:bg-purple-700 transition"
        >
          Reset Game
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {cards.map((card, idx) => {
          const isOpen = flipped.includes(idx) || matchedPairs.includes(idx);
          return (
            <button
              key={idx}
              onClick={() => handleCardClick(idx)}
              className={`h-24 rounded-2xl border-2 font-black text-4xl flex items-center justify-center shadow-md cursor-pointer transition ${
                isOpen
                  ? 'bg-white border-purple-400 text-slate-800 rotate-0'
                  : 'bg-[#C04DF7] border-purple-500 text-white'
              }`}
            >
              {isOpen ? card.emoji : '❓'}
            </button>
          );
        })}
      </div>

      {matchedPairs.length === cards.length && cards.length > 0 && (
        <div className="p-6 bg-emerald-50 border-2 border-emerald-300 rounded-2xl">
          <h4 className="text-2xl font-black text-emerald-800">🎉 Congratulations! Memory Champion!</h4>
          <p className="text-xs font-bold text-emerald-600">You earned +90 XP!</p>
        </div>
      )}
    </div>
  );
};

// ─── 8. 🎈 BALLOON POP GAME ────────────────────────────────────────────────
const BalloonPopGame = ({ addXP }) => {
  const balloonsList = [
    { id: 1, text: 'A', isTarget: true, color: 'bg-rose-400' },
    { id: 2, text: '5', isTarget: false, color: 'bg-blue-400' },
    { id: 3, text: 'B', isTarget: true, color: 'bg-purple-400' },
    { id: 4, text: '9', isTarget: false, color: 'bg-amber-400' },
    { id: 5, text: 'C', isTarget: true, color: 'bg-emerald-400' },
  ];

  const [popped, setPopped] = useState([]);
  const [score, setScore] = useState(0);

  const handlePop = (balloon) => {
    if (popped.includes(balloon.id)) return;
    setPopped((prev) => [...prev, balloon.id]);

    if (balloon.isTarget) {
      playSpeech('Pop! Correct letter!');
      setScore((s) => s + 10);
      addXP(10);
    } else {
      playSpeech('Oops! Wrong balloon!');
      setScore((s) => Math.max(0, s - 5));
    }
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto text-center">
      <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl flex justify-between items-center">
        <div>
          <h3 className="text-xl font-black text-[#C04DF7]">🎈 Balloon Pop</h3>
          <p className="text-xs font-semibold text-slate-600">Pop balloons containing LETTERS! Avoid numbers.</p>
        </div>
        <div className="text-sm font-black text-purple-700">Score: {score}</div>
      </div>

      <div className="h-72 bg-gradient-to-b from-sky-100 to-indigo-50 border-2 border-sky-200 rounded-3xl relative overflow-hidden flex items-center justify-around p-4">
        {balloonsList.map((b) => {
          const isPopped = popped.includes(b.id);
          return (
            <motion.button
              key={b.id}
              onClick={() => handlePop(b)}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: b.id * 0.3 }}
              className={`w-16 h-20 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg cursor-pointer transition ${b.color} ${
                isPopped ? 'opacity-0 scale-0' : 'opacity-100 scale-100 hover:scale-110'
              }`}
            >
              🎈 {b.text}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

// ─── 9. 🌍 SHAPE & OBJECT MATCH GAME ─────────────────────────────────────────
const ShapeMatchGame = ({ addXP }) => {
  const shapeData = [
    { shape: 'Circle 🔴', item: 'Wall Clock 🕒' },
    { shape: 'Triangle 🔺', item: 'Pizza Slice 🍕' },
    { shape: 'Square ⬛', item: 'Gift Box 🎁' },
    { shape: 'Rectangle ▭', item: 'Door 🚪' },
  ];

  const [selectedShape, setSelectedShape] = useState(null);
  const [matched, setMatched] = useState([]);

  const handleSelectShape = (shape) => {
    setSelectedShape(shape);
    playSpeech(shape);
  };

  const handleMatchObject = (itemObj) => {
    if (!selectedShape) return;
    if (selectedShape.item === itemObj.item) {
      setMatched((prev) => [...prev, selectedShape.shape]);
      playSpeech(`Correct! ${selectedShape.shape} matches ${itemObj.item}`);
      addXP(15);
      setSelectedShape(null);
    } else {
      playSpeech('Try another shape!');
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto text-center">
      <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl">
        <h3 className="text-xl font-black text-[#C04DF7]">🌍 Shape &amp; Object Match</h3>
        <p className="text-xs font-semibold text-slate-600">Select a shape on the left, then click its real-life object on the right!</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-3">
          <h4 className="text-xs font-black text-slate-500 uppercase">Shapes</h4>
          {shapeData.map((s) => {
            const isDone = matched.includes(s.shape);
            return (
              <button
                key={s.shape}
                disabled={isDone}
                onClick={() => handleSelectShape(s)}
                className={`w-full p-4 rounded-xl border-2 font-black text-sm flex items-center justify-center transition cursor-pointer ${
                  isDone
                    ? 'bg-emerald-100 border-emerald-300 text-emerald-800 opacity-60'
                    : selectedShape?.shape === s.shape
                    ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                    : 'bg-white border-slate-200 hover:border-purple-300 text-slate-800'
                }`}
              >
                {s.shape}
              </button>
            );
          })}
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-black text-slate-500 uppercase">Objects</h4>
          {shapeData.map((s) => (
            <button
              key={s.item}
              onClick={() => handleMatchObject(s)}
              className="w-full p-4 rounded-xl border-2 border-slate-200 hover:border-emerald-400 bg-white font-black text-sm text-slate-800 transition cursor-pointer text-center"
            >
              {s.item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── 10. ⏱️ QUICK QUIZ GAME ────────────────────────────────────────────────
const QuickQuizGame = ({ addXP }) => {
  const quizQuestions = [
    { q: 'What letter comes after B?', options: ['A', 'C', 'D'], answer: 'C' },
    { q: 'Which color is an Apple?', options: ['Red', 'Blue', 'Green'], answer: 'Red' },
    { q: 'What is 5 + 3?', options: ['7', '8', '9'], answer: '8' },
    { q: 'Which animal says Meow?', options: ['Dog', 'Cat', 'Lion'], answer: 'Cat' },
    { q: 'What shape is a pizza slice?', options: ['Circle', 'Triangle', 'Square'], answer: 'Triangle' },
  ];

  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timer <= 0) {
      setGameOver(true);
      return;
    }
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswer = (opt) => {
    if (opt === quizQuestions[qIndex].answer) {
      setScore((s) => s + 1);
      addXP(10);
      playSpeech('Correct!');
    } else {
      playSpeech('Incorrect!');
    }

    if (qIndex + 1 < quizQuestions.length) {
      setQIndex((i) => i + 1);
    } else {
      setGameOver(true);
    }
  };

  const restartQuiz = () => {
    setQIndex(0);
    setScore(0);
    setTimer(30);
    setGameOver(false);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto text-center">
      <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl flex justify-between items-center">
        <div>
          <h3 className="text-xl font-black text-[#C04DF7]">⏱️ Quick Quiz</h3>
          <p className="text-xs font-semibold text-slate-600">Answer as many questions as you can before the 30s timer ends!</p>
        </div>
        <div className="text-sm font-black text-rose-600 flex items-center gap-1">
          <Timer className="w-4 h-4" /> {timer}s
        </div>
      </div>

      {!gameOver ? (
        <div className="p-8 bg-white border-2 border-purple-200 rounded-3xl shadow-xl space-y-6">
          <div className="text-xs font-black text-purple-600 uppercase">Question {qIndex + 1} of {quizQuestions.length}</div>
          <div className="text-2xl font-black text-slate-900">{quizQuestions[qIndex].q}</div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {quizQuestions[qIndex].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="p-4 bg-slate-50 border-2 border-slate-200 hover:border-purple-500 rounded-2xl text-base font-black text-slate-800 transition cursor-pointer"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-8 bg-emerald-50 border-2 border-emerald-300 rounded-3xl space-y-4">
          <h4 className="text-3xl font-black text-emerald-900">🏆 Quiz Finished!</h4>
          <p className="text-base font-bold text-emerald-700">Your Score: {score} / {quizQuestions.length}</p>
          <button
            onClick={restartQuiz}
            className="px-6 py-3 bg-emerald-600 text-white font-black text-xs rounded-xl shadow-md hover:bg-emerald-700 transition cursor-pointer"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

// ─── MAIN KIDS GAME SPACE PAGE ─────────────────────────────────────────────
export const KidsGameSpacePage = () => {
  const { xp, addXP } = useGamification();
  const [activeTab, setActiveTab] = useState('alphabetMatch');

  const games = [
    { id: 'alphabetMatch', label: '🔤 Alphabet Match', desc: 'A ➔ a matching' },
    { id: 'mathQuiz', label: '🔢 Math Quiz', desc: 'Addition & Stars' },
    { id: 'jigsaw', label: '🧩 Jigsaw Puzzle', desc: 'Animals & Vehicles' },
    { id: 'colorMatch', label: '🎨 Color Matching', desc: 'Match 🍎 Red' },
    { id: 'animalSounds', label: '🐶 Animal Sounds', desc: 'Listen & Guess' },
    { id: 'wordBuilder', label: '📝 Word Builder', desc: 'Spell C-A-T' },
    { id: 'memory', label: '🧠 Memory Cards', desc: 'Flip pairs' },
    { id: 'balloonPop', label: '🎈 Balloon Pop', desc: 'Pop letters' },
    { id: 'shapeMatch', label: '🌍 Shape Match', desc: 'Circles & Squares' },
    { id: 'quickQuiz', label: '⏱️ Quick Quiz', desc: '30s timer challenge' },
  ];

  return (
    <div className="bg-[#FAF5F8] text-slate-900 font-sans min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#FDE8F0] via-[#FAF5F8] to-[#FCE6EE] py-12 border-b border-pink-100 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest block">SKILLSEED KIDS GAME ARCADE</span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            10 Interactive Learning Games! 🎮
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-xl mx-auto leading-relaxed">
            Alphabet match, math quiz, memory cards, balloon popping, animal sounds &amp; more. Earn XP points with every game!
          </p>

          {/* User XP Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-purple-200 shadow-sm text-xs font-black text-[#C04DF7]">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>Total Earned XP: {xp} XP</span>
          </div>
        </div>
      </section>

      {/* Game Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {games.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveTab(g.id)}
              className={`p-3.5 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                activeTab === g.id
                  ? 'bg-[#C04DF7] text-white border-[#C04DF7] shadow-lg scale-105'
                  : 'bg-white text-slate-900 border-slate-200 hover:bg-purple-50'
              }`}
            >
              <div className="text-xs sm:text-sm font-black truncate">{g.label}</div>
              <div className={`text-[10px] font-bold ${activeTab === g.id ? 'text-purple-100' : 'text-slate-500'}`}>{g.desc}</div>
            </button>
          ))}
        </div>

        {/* Active Game Container */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
          {activeTab === 'alphabetMatch' && <AlphabetMatchGame addXP={addXP} />}
          {activeTab === 'mathQuiz' && <MathQuizGame addXP={addXP} />}
          {activeTab === 'jigsaw' && <JigsawPuzzleGame addXP={addXP} />}
          {activeTab === 'colorMatch' && <ColorMatchingGame addXP={addXP} />}
          {activeTab === 'animalSounds' && <AnimalSoundsGame addXP={addXP} />}
          {activeTab === 'wordBuilder' && <WordBuilderGame addXP={addXP} />}
          {activeTab === 'memory' && <MemoryCardGame addXP={addXP} />}
          {activeTab === 'balloonPop' && <BalloonPopGame addXP={addXP} />}
          {activeTab === 'shapeMatch' && <ShapeMatchGame addXP={addXP} />}
          {activeTab === 'quickQuiz' && <QuickQuizGame addXP={addXP} />}
        </div>

      </div>
    </div>
  );
};
