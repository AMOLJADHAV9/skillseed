export const MOCK_ROLES = [
  { id: 'student', name: 'Student', icon: '🎒', badgeBg: 'bg-purple-500/20 text-purple-300' },
  { id: 'parent', name: 'Parent', icon: '👨‍👩‍👧', badgeBg: 'bg-emerald-500/20 text-emerald-300' },
  { id: 'teacher', name: 'Teacher', icon: '👩‍🏫', badgeBg: 'bg-amber-500/20 text-amber-300' },
  { id: 'admin', name: 'Admin', icon: '⚡', badgeBg: 'bg-blue-500/20 text-blue-300' }
];

export const INITIAL_STUDENT_DATA = {
  name: 'Leo Spark',
  grade: 'Grade 4 (Age 9)',
  avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200',
  xp: 3250,
  coins: 480,
  streak: 14,
  level: 9,
  levelTitle: 'Star Explorer',
  nextLevelXp: 4000,
  badgesCount: 12,
  completedCoursesCount: 4,
  certificatesCount: 3,
  dailyGoals: [
    { id: 'g-1', text: 'Complete 1 Python Lesson', xp: 50, completed: true },
    { id: 'g-2', text: 'Score 100% on Space Quiz', xp: 100, completed: false },
    { id: 'g-3', text: 'Practice Spanish Vocabulary 10 mins', xp: 40, completed: false }
  ],
  achievements: [
    { id: 'a-1', name: 'First Rocket Launch', desc: 'Completed your first space lesson', icon: '🚀', date: '2 days ago', unlocked: true },
    { id: 'a-2', name: '7-Day Flame Streak', desc: 'Logged in 7 days in a row', icon: '🔥', date: '1 week ago', unlocked: true },
    { id: 'a-3', name: 'Code Detective', desc: 'Solved 10 Python bugs', icon: '🔍', date: '3 days ago', unlocked: true },
    { id: 'a-4', name: 'Quiz Mastermind', desc: 'Scored 100% on 3 quizzes', icon: '🏆', date: 'Just now', unlocked: true },
    { id: 'a-5', name: 'Polyglot Junior', desc: 'Mastered 50 Spanish words', icon: '🌮', date: 'Locked', unlocked: false },
    { id: 'a-6', name: 'Math Olympiad Hero', desc: 'Completed Math Logic track', icon: '🧮', date: 'Locked', unlocked: false }
  ]
};

export const MOCK_NOTIFICATIONS = [
  { id: 'n-1', title: '🎉 Badge Unlocked!', message: 'You earned the "Quiz Mastermind" gold badge! +100 XP added.', time: '10 mins ago', type: 'achievement', read: false },
  { id: 'n-2', title: '🚀 Upcoming Live Class', message: 'Dr. Sarah Spark starting "Space Shooter Pygame Lab" in 30 minutes!', time: '1 hour ago', type: 'class', read: false },
  { id: 'n-3', title: '📝 Parent Feedback Received', message: 'Mom signed off your weekly study report card.', time: '3 hours ago', type: 'parent', read: true },
  { id: 'n-4', title: '🔥 14-Day Streak Bonus!', message: 'Claim your 50 free coins for logging in today.', time: '1 day ago', type: 'reward', read: true }
];

export const MOCK_PARENT_DATA = {
  children: [
    { id: 'c-1', name: 'Leo Spark', grade: 'Grade 4', totalStudyHours: '14.5 hrs this week', streak: 14, focusSubject: 'Python & Space Science', attendanceRate: '98%' },
    { id: 'c-2', name: 'Maya Spark', grade: 'Grade 2', totalStudyHours: '8.2 hrs this week', streak: 6, focusSubject: 'Digital Art & Spanish', attendanceRate: '95%' }
  ],
  teacherFeedback: [
    { teacher: 'Dr. Sarah Spark', subject: 'Python Coding', message: 'Leo demonstrated outstanding problem solving during the loop assignment. Keep encouraging him!', date: 'Yesterday' },
    { teacher: 'Capt. Leo Starling', subject: 'Astronomy', message: 'Very active in Q&A session on Mars rover exploration.', date: '3 days ago' }
  ]
};

export const MOCK_TEACHER_DATA = {
  classes: [
    { id: 'tc-1', title: 'Python Coding Wizards - Grade 4-6', studentsCount: 28, nextSession: 'Today, 4:00 PM', status: 'Live Soon' },
    { id: 'tc-2', title: 'Space Science Exploration', studentsCount: 35, nextSession: 'Tomorrow, 2:00 PM', status: 'Scheduled' }
  ],
  pendingGrading: [
    { id: 'as-1', studentName: 'Leo Spark', title: 'Space Shooter Pygame Submission', course: 'Python Coding Wizards', date: 'Submitted Today' },
    { id: 'as-2', studentName: 'Aria Starburst', title: 'Mars Crater 3D Diagram', course: 'Space Science Exploration', date: 'Submitted Yesterday' }
  ]
};

export const MOCK_ADMIN_DATA = {
  totalLearners: 12450,
  activeTeachers: 142,
  totalCourses: 68,
  monthlyRevenue: '$48,920',
  usersList: [
    { id: 'u-101', name: 'Dr. Sarah Spark', role: 'Teacher', email: 'sarah.spark@skillseed.edu', status: 'Active', joined: 'Jan 2024' },
    { id: 'u-102', name: 'Leo Spark', role: 'Student', email: 'leo.parent@gmail.com', status: 'Active', joined: 'Feb 2024' },
    { id: 'u-103', name: 'Marcus Spark (Parent)', role: 'Parent', email: 'leo.parent@gmail.com', status: 'Active', joined: 'Feb 2024' },
    { id: 'u-104', name: 'Prof. Maya Lin', role: 'Teacher', email: 'maya.lin@skillseed.edu', status: 'Active', joined: 'Mar 2024' },
    { id: 'u-105', name: 'Admin Operations', role: 'Admin', email: 'admin@skillseed.com', status: 'Active', joined: 'Jan 2023' }
  ]
};
