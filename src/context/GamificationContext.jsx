import React, { createContext, useContext, useState } from 'react';
import confetti from 'canvas-confetti';
import { INITIAL_STUDENT_DATA } from '../data/mockUsers';

const GamificationContext = createContext(null);

export const GamificationProvider = ({ children }) => {
  const [xp, setXp] = useState(INITIAL_STUDENT_DATA.xp);
  const [coins, setCoins] = useState(INITIAL_STUDENT_DATA.coins);
  const [streak, setStreak] = useState(INITIAL_STUDENT_DATA.streak);
  const [level, setLevel] = useState(INITIAL_STUDENT_DATA.level);
  const [achievements, setAchievements] = useState(INITIAL_STUDENT_DATA.achievements);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [celebrationModal, setCelebrationModal] = useState(null);

  const addXp = (amount, reason = 'Quest Completed!') => {
    setXp((prev) => {
      const nextXp = prev + amount;
      // Calculate level up every 500 XP
      const calculatedLevel = Math.floor(nextXp / 400) + 1;
      if (calculatedLevel > level) {
        setLevel(calculatedLevel);
        triggerCelebration({
          title: '⚡ LEVEL UP!',
          message: `Congratulations! You reached Level ${calculatedLevel}!`,
          icon: '👑',
          xpEarned: amount
        });
      }
      return nextXp;
    });
  };

  const addCoins = (amount) => {
    setCoins((prev) => prev + amount);
  };

  const triggerCelebration = ({ title, message, icon, xpEarned, badge }) => {
    // Trigger canvas confetti burst
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti burst');
    }

    setCelebrationModal({
      title: title || '🎉 Awesome Job!',
      message: message || 'You completed the activity!',
      icon: icon || '🌟',
      xpEarned: xpEarned || 50,
      badge: badge || null
    });
  };

  const closeCelebration = () => setCelebrationModal(null);

  const unlockAchievement = (id) => {
    setAchievements((prev) =>
      prev.map((ach) => (ach.id === id ? { ...ach, unlocked: true, date: 'Just now' } : ach))
    );
  };

  return (
    <GamificationContext.Provider
      value={{
        xp,
        coins,
        streak,
        level,
        achievements,
        addXp,
        addCoins,
        triggerCelebration,
        celebrationModal,
        closeCelebration,
        unlockAchievement,
        soundEnabled,
        setSoundEnabled
      }}
    >
      {children}
    </GamificationContext.Provider>
  );
};

export const useGamification = () => useContext(GamificationContext);
