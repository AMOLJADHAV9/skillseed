import React, { createContext, useContext, useState } from 'react';
import { INITIAL_STUDENT_DATA, MOCK_ROLES } from '../data/mockUsers';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState('student'); // 'student' | 'parent' | 'teacher' | 'admin'
  const [user, setUser] = useState({
    name: 'Leo Spark',
    email: 'leo@skillseed.com',
    avatar: INITIAL_STUDENT_DATA.avatar,
    grade: 'Grade 4 (Age 9)'
  });

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login'); // 'login' | 'signup'

  const openAuthModal = (mode = 'login') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  const switchRole = (newRole) => {
    setRole(newRole);
    if (newRole === 'student') {
      setUser({ name: 'Leo Spark', email: 'leo@skillseed.com', avatar: INITIAL_STUDENT_DATA.avatar, grade: 'Grade 4' });
    } else if (newRole === 'parent') {
      setUser({ name: 'Marcus Spark', email: 'marcus.parent@gmail.com', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', grade: 'Parent Account' });
    } else if (newRole === 'teacher') {
      setUser({ name: 'Dr. Sarah Spark', email: 'sarah.spark@skillseed.edu', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200', grade: 'Senior AI Educator' });
    } else if (newRole === 'admin') {
      setUser({ name: 'SkillSeed Director', email: 'admin@skillseed.com', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200', grade: 'Super Admin' });
    }
  };

  const login = (email, password, selectedRole = 'student') => {
    switchRole(selectedRole);
    return true;
  };

  const logout = () => {
    switchRole('student');
  };

  return (
    <AuthContext.Provider value={{
      role,
      switchRole,
      user,
      setUser,
      login,
      logout,
      roles: MOCK_ROLES,
      authModalOpen,
      authModalMode,
      openAuthModal,
      closeAuthModal,
      setAuthModalMode
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
