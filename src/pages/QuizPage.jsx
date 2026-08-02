import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_QUIZZES } from '../data/mockQuizzes';
import { useGamification } from '../context/GamificationContext';
import { Clock, CheckCircle2, XCircle, Sparkles, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '../components/common/Button';

export const QuizPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { addXp, addCoins, triggerCelebration } = useGamification();

  const quiz = MOCK_QUIZZES[quizId || 'quiz-space-1'] || MOCK_QUIZZES['quiz-space-1'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimitSeconds);
  const [isCompleted, setIsCompleted] = useState(false);
  const [shakeWrong, setShakeWrong] = useState(false);

  const currentQuestion = quiz.questions[currentIndex];

  useEffect(() => {
    if (isCompleted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isCompleted, timeLeft]);

  const handleSelectOption = (index) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);

    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    } else {
      setShakeWrong(true);
      setTimeout(() => setShakeWrong(false), 500);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < quiz.questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsCompleted(true);
      const earnedXp = Math.round((score / quiz.questions.length) * quiz.xpReward);
      addXp(earnedXp);
      addCoins(quiz.coinReward);
      triggerCelebration({
        title: '🏆 QUIZ VICTORIOUS!',
        message: `You scored ${score}/${quiz.questions.length} on "${quiz.title}"! Unlocked "${quiz.badgeUnlocked}" badge!`,
        icon: '🥇',
        xpEarned: earnedXp
      });
    }
  };

  return (
    <div className="py-12 px-4 max-w-3xl mx-auto space-y-8 min-h-[80vh] flex flex-col justify-center">
      
      {!isCompleted ? (
        <motion.div
          animate={shakeWrong ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="glass-card p-8 rounded-[36px] border border-purple-500/40 shadow-2xl space-y-6 glow-purple relative"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between text-xs font-black">
            <span className="text-purple-300 uppercase tracking-widest">{quiz.title}</span>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-full">
              <Clock className="w-4 h-4 animate-pulse" />
              <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-amber-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / quiz.questions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase mb-1">
              Question {currentIndex + 1} of {quiz.questions.length}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Options Grid */}
          <div className="space-y-3">
            {currentQuestion.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQuestion.correctIndex;
              let optionStyle = 'bg-slate-900/80 border-white/10 text-slate-200 hover:border-purple-400';

              if (selectedOption !== null) {
                if (isCorrect) optionStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-extrabold';
                else if (isSelected) optionStyle = 'bg-rose-500/20 border-rose-500 text-rose-300 font-extrabold';
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleSelectOption(idx)}
                  disabled={selectedOption !== null}
                  className={`w-full p-4 rounded-2xl border text-left text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${optionStyle}`}
                >
                  <span>{opt}</span>
                  {selectedOption !== null && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                  {selectedOption !== null && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {selectedOption !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-purple-950/60 rounded-2xl border border-purple-500/30 text-xs text-purple-200"
            >
              💡 <strong>Did You Know?</strong> {currentQuestion.explanation}
            </motion.div>
          )}

          {/* Next Action */}
          {selectedOption !== null && (
            <Button size="lg" variant="amber" className="w-full font-black text-slate-950" onClick={handleNext}>
              {currentIndex + 1 < quiz.questions.length ? 'Next Question →' : 'Complete Quiz & View Score 🏆'}
            </Button>
          )}
        </motion.div>
      ) : (
        /* Final Summary Box */
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-card p-10 rounded-[40px] border border-amber-500/40 text-center space-y-6 shadow-2xl glow-amber"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-3xl flex items-center justify-center text-5xl shadow-xl shadow-amber-500/30">
            🏆
          </div>
          <h2 className="text-3xl font-black text-white">Quiz Completed!</h2>
          <div className="text-5xl font-black gradient-text-amber">
            {score} / {quiz.questions.length} Correct
          </div>
          <p className="text-slate-300 text-sm">
            Awesome effort! You unlocked the <strong className="text-amber-300">"{quiz.badgeUnlocked}"</strong> badge and earned +{quiz.xpReward} XP.
          </p>
          <Button size="lg" variant="primary" className="w-full" onClick={() => navigate('/dashboard/student')}>
            Return to Questroom 🚀
          </Button>
        </motion.div>
      )}

    </div>
  );
};
