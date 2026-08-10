import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCourses } from '../context/CourseContext';
import { useGamification } from '../context/GamificationContext';
import {
  Play,
  Pause,
  CheckCircle2,
  Sparkles,
  BookOpen,
  HelpCircle,
  FileText,
  ArrowLeft,
  Volume2,
  Maximize2,
  List,
  Copy,
  Lock,
  Trophy,
  Rocket,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';

export const VideoLearningPage = () => {
  const { courseId } = useParams();
  const { getCourseById, completeLesson } = useCourses();
  const { addXp, triggerCelebration } = useGamification();

  const course = getCourseById(courseId || 'course-1');

  const [isPlaying, setIsPlaying] = useState(true);
  const [videoProgress, setVideoProgress] = useState(35); // percentage
  const [activeTab, setActiveTab] = useState('notes');
  const [copied, setCopied] = useState(false);

  const handleFinishLesson = () => {
    completeLesson(course.id, 'les-1');
    addXp(50);
    triggerCelebration({
      title: '🌟 LESSON COMPLETED!',
      message: 'Great job watching the video! +50 XP awarded.',
      icon: '🎉',
      xpEarned: 50
    });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('secret_score = 100\nplayer_name = "Leo Star"');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#FAF9FF] min-h-screen py-8 px-4 sm:px-6 lg:px-8 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* ── 1. TOP HEADER BAR ─────────────────────────────────────────── */}
        <div className="flex items-center justify-between">
          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-2 text-xs font-black text-[#7C3AED] hover:underline uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Course Overview
          </Link>

          <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 shadow-2xs flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" /> Module 1 • Lesson 2 of 18
          </span>
        </div>

        {/* ── 2. MAIN 2-COLUMN LAYOUT (LEFT PLAYER/NOTES + RIGHT SIDEBARS) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (8 cols): Video Player, Details & Notes */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* ── VIDEO PLAYER CANVAS ───────────────────────────────────── */}
            <div className="relative aspect-video rounded-[32px] overflow-hidden bg-gradient-to-br from-[#E0E7FF] via-[#F3E8FF] to-[#FAE8FF] border border-purple-100 shadow-2xl flex flex-col justify-between p-6 sm:p-8 relative group">
              
              {/* Top Watermark & Quality Pills */}
              <div className="relative z-20 flex justify-between items-center text-xs font-black">
                <span className="bg-[#7C3AED] text-white px-4 py-1.5 rounded-full shadow-md">
                  {course.title || 'Active Readers - Vocabulary Boost'}
                </span>
                <span className="bg-white/95 backdrop-blur-md text-emerald-700 px-3.5 py-1 rounded-full border border-slate-200 shadow-xs">
                  1080p HD
                </span>
              </div>

              {/* Center Play Graphic Area */}
              <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-6 my-auto text-left px-4">
                
                {/* Left Text / Mystery Badge */}
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#7C3AED] block leading-tight">
                    Variables
                  </span>
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 block leading-tight">
                    Secret Codes
                  </span>
                  <div className="relative pt-1">
                    <span className="text-xs sm:text-sm font-extrabold text-purple-600 italic">
                      Let's unlock the mystery!
                    </span>
                    <svg className="w-28 h-3 text-amber-400 mt-0.5" viewBox="0 0 100 12" fill="none">
                      <path d="M 2 8 C 30 2, 70 2, 98 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Big Center Play Button */}
                <div className="flex-shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#7C3AED] hover:bg-purple-700 text-white flex items-center justify-center shadow-2xl shadow-purple-500/50 cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 fill-white" />
                    ) : (
                      <Play className="w-8 h-8 fill-white ml-1" />
                    )}
                  </motion.button>
                </div>

                {/* Right 3D Box Illustration (x, y, z blocks) */}
                <div className="hidden sm:flex items-center gap-2 relative">
                  <div className="w-10 h-10 bg-emerald-400 rounded-xl text-white font-black text-lg flex items-center justify-center shadow-md transform -rotate-12">
                    x
                  </div>
                  <div className="w-10 h-10 bg-amber-400 rounded-xl text-white font-black text-lg flex items-center justify-center shadow-md transform rotate-6">
                    y
                  </div>
                  <div className="w-10 h-10 bg-purple-500 rounded-xl text-white font-black text-lg flex items-center justify-center shadow-md transform -rotate-6">
                    z
                  </div>
                </div>

              </div>

              {/* Bottom Player Controls Bar */}
              <div className="relative z-20 space-y-2 bg-[#0F172A]/90 backdrop-blur-md p-3.5 px-5 rounded-2xl border border-white/10 text-white shadow-xl">
                <div className="flex items-center gap-4">
                  
                  {/* Play / Pause Toggle */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-purple-300 transition cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <Volume2 className="w-4 h-4 text-slate-300" />

                  {/* Time */}
                  <span className="text-xs font-bold text-slate-300 whitespace-nowrap">
                    04:15 / 12:30
                  </span>

                  {/* Progress Slider */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={videoProgress}
                    onChange={(e) => setVideoProgress(Number(e.target.value))}
                    className="w-full accent-[#7C3AED] cursor-pointer h-1.5 rounded-lg bg-slate-700"
                  />

                  {/* Right Actions */}
                  <span className="text-xs font-black text-slate-300 px-2 py-0.5 bg-slate-800 rounded-md border border-slate-700">
                    1.25x
                  </span>
                  <span className="text-xs font-bold text-slate-400 hover:text-white cursor-pointer px-1">
                    CC
                  </span>
                  <Maximize2 className="w-4 h-4 text-slate-300 hover:text-white cursor-pointer" />
                </div>
              </div>

            </div>

            {/* ── LESSON DETAILS & ACTION BUTTONS CARD ──────────────────── */}
            <div className="bg-white p-6 sm:p-7 rounded-[28px] border border-slate-100 shadow-xl shadow-slate-100/70 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center font-mono font-black text-xs">
                    &lt;/&gt;
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900">
                      Variables: Storing Secret Codes
                    </h2>
                    <p className="text-xs font-extrabold text-slate-400">
                      Lesson 2 • Python Coding Wizards
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed pt-2 max-w-xl">
                  Learn how variables work in Python and how they store secret information that can be used later.
                </p>
              </div>

              {/* Right Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleFinishLesson}
                  className="w-full sm:w-auto px-5 py-3 bg-[#FEF3C7] hover:bg-amber-200 text-amber-900 font-black text-xs rounded-2xl border border-amber-300/80 shadow-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-600 fill-amber-300" />
                  <span>Mark Complete (+50 XP)</span>
                </button>

                <Link to="/quiz/quiz-code-1" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-5 py-3 bg-[#F3E8FF] hover:bg-purple-200 text-[#7C3AED] font-black text-xs rounded-2xl border border-purple-200 shadow-xs flex items-center justify-center gap-2 transition cursor-pointer">
                    <Rocket className="w-4 h-4 text-[#7C3AED]" />
                    <span>Take Lesson Quiz</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* ── TABS: LESSON NOTES & STUDENT Q&A ─────────────────────── */}
            <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-100/70 space-y-5 text-left">
              
              {/* Tab Header Buttons */}
              <div className="flex items-center gap-6 border-b border-slate-100 pb-3">
                <button
                  onClick={() => setActiveTab('notes')}
                  className={`text-xs font-black pb-2 border-b-2 transition cursor-pointer ${
                    activeTab === 'notes'
                      ? 'text-[#7C3AED] border-[#7C3AED]'
                      : 'text-slate-400 border-transparent hover:text-slate-600'
                  }`}
                >
                  Lesson Notes
                </button>
                <button
                  onClick={() => setActiveTab('qa')}
                  className={`text-xs font-black pb-2 border-b-2 transition cursor-pointer ${
                    activeTab === 'qa'
                      ? 'text-[#7C3AED] border-[#7C3AED]'
                      : 'text-slate-400 border-transparent hover:text-slate-600'
                  }`}
                >
                  Student Q&amp;A
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'notes' ? (
                <div className="space-y-4">
                  {/* Key Takeaway Pill */}
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-2xl p-4 text-xs font-semibold flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-base">💡</span>
                      <span>
                        <strong className="font-black text-emerald-950">Key Takeaway:</strong> A variable is like a labeled secret box in computer memory.
                      </span>
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-extrabold rounded-xl text-xs flex items-center gap-1.5 shadow-2xs transition cursor-pointer flex-shrink-0"
                    >
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>

                  {/* Code Editor Snippet Container */}
                  <div className="bg-[#0F172A] rounded-2xl p-4 text-xs font-mono text-emerald-400 space-y-1.5 shadow-inner border border-slate-800">
                    <div className="flex items-center gap-3 text-slate-500">
                      <span className="w-4 select-none">1</span>
                      <span className="text-emerald-400">secret_score</span>
                      <span className="text-white">=</span>
                      <span className="text-amber-300">100</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500">
                      <span className="w-4 select-none">2</span>
                      <span className="text-emerald-400">player_name</span>
                      <span className="text-white">=</span>
                      <span className="text-amber-300">"Leo Star"</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-500 font-semibold py-4 space-y-3">
                  <p>Have questions about Python variables or loops? Ask your instructor!</p>
                  <textarea
                    placeholder="Type your question here..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#7C3AED]"
                    rows={3}
                  />
                  <button className="px-5 py-2.5 bg-[#7C3AED] text-white font-black text-xs rounded-xl shadow-xs">
                    Submit Question
                  </button>
                </div>
              )}

            </div>

          </div>

          {/* Right Column (4 cols): Playlist & Progress Sidebars */}
          <div className="lg:col-span-4 space-y-6 text-left">
            
            {/* ── 1. COURSE LESSONS PLAYLIST CARD ──────────────────────── */}
            <div className="bg-white p-6 sm:p-7 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-100/70 space-y-5">
              <div className="flex items-center gap-2 font-black text-slate-900 text-base">
                <List className="w-5 h-5 text-[#7C3AED]" />
                <span>Course Lessons</span>
              </div>

              {/* Lesson Items */}
              <div className="space-y-3">
                
                {/* Lesson 1 (Completed) */}
                <div className="p-4 bg-emerald-50/80 border border-emerald-200/80 rounded-2xl text-xs flex items-center justify-between text-emerald-900 font-extrabold shadow-2xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">1</span>
                    <span>1. Welcome to Python Land</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 font-black text-[11px]">
                    <span>Completed</span>
                    <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white" />
                  </div>
                </div>

                {/* Lesson 2 (Active/Playing) */}
                <div className="p-4 bg-[#F3E8FF] border border-purple-200 rounded-2xl text-xs flex items-center justify-between text-[#7C3AED] font-black shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-[10px]">2</span>
                    <span>2. Variables: Secret Codes</span>
                  </div>
                  <span className="text-purple-600 font-black text-[11px] flex items-center gap-1">
                    Playing
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-600 animate-ping" />
                  </span>
                </div>

                {/* Lesson 3 (Locked/Upcoming) */}
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-xs flex items-center justify-between text-slate-400 font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[10px]">3</span>
                    <span>3. Code Detective Quiz</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 font-bold">
                    <span>10 min</span>
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>

              {/* Progress Box */}
              <div className="pt-4 border-t border-slate-100 space-y-2 bg-slate-50/60 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center text-xs font-black text-slate-900">
                  <span>Your Progress</span>
                  <span className="text-[#7C3AED]">11%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200/80 rounded-full overflow-hidden">
                  <div className="w-[11%] h-full bg-[#7C3AED] rounded-full transition-all duration-500" />
                </div>
                <p className="text-[11px] font-extrabold text-slate-400">
                  2 of 18 lessons completed
                </p>
              </div>

            </div>

            {/* ── 2. "KEEP GOING!" TROPHY CARD ──────────────────────────── */}
            <div className="bg-gradient-to-br from-purple-50/80 via-indigo-50/50 to-pink-50/60 p-6 sm:p-7 rounded-[32px] border border-purple-100 shadow-xl shadow-slate-100/70 text-left relative overflow-hidden space-y-3">
              
              <div className="flex items-start justify-between">
                <div className="space-y-1.5 max-w-[190px]">
                  <h3 className="text-lg font-black text-slate-900 leading-snug">
                    Keep Going!
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                    You're doing great. Complete the lesson and level up your skills!
                  </p>
                </div>

                {/* 3D Gold Trophy Graphic */}
                <div className="text-5xl transform hover:scale-110 transition flex-shrink-0">
                  🏆
                </div>
              </div>

              {/* Ambient sparkles */}
              <div className="absolute top-2 right-2 text-amber-400 text-sm">✦</div>
              <div className="absolute bottom-2 right-6 text-purple-400 text-sm">⭐</div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default VideoLearningPage;

