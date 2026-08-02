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
  Maximize2
} from 'lucide-react';
import { Button } from '../components/common/Button';

export const VideoLearningPage = () => {
  const { courseId } = useParams();
  const { getCourseById, completeLesson } = useCourses();
  const { addXp, triggerCelebration } = useGamification();

  const course = getCourseById(courseId || 'course-1');

  const [isPlaying, setIsPlaying] = useState(true);
  const [videoProgress, setVideoProgress] = useState(45); // percentage
  const [activeTab, setActiveTab] = useState('notes');

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

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      
      {/* Top Header Bar */}
      <div className="flex items-center justify-between">
        <Link to={`/courses/${course.id}`} className="inline-flex items-center gap-2 text-xs font-extrabold text-purple-400 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Course Overview
        </Link>
        <span className="text-xs font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
          Module 1 • Lesson 2 of 18
        </span>
      </div>

      {/* Main Video & Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Player */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* Mock Video Canvas */}
          <div className="relative aspect-video rounded-3xl overflow-hidden glass-card border border-white/20 bg-slate-950 flex flex-col justify-between p-6 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-indigo-900/20 to-slate-950 pointer-events-none" />

            {/* Video Watermark & Title */}
            <div className="relative z-10 flex justify-between items-center text-xs font-bold text-white">
              <span className="bg-black/50 px-3 py-1 rounded-full border border-white/10">
                {course.title}
              </span>
              <span className="text-purple-300">1080p HD</span>
            </div>

            {/* Center Play Animated Emoji/Icon */}
            <div className="relative z-10 text-center my-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 mx-auto rounded-full bg-purple-600/90 hover:bg-purple-500 text-white flex items-center justify-center shadow-2xl shadow-purple-500/50 hover:scale-110 transition cursor-pointer"
              >
                {isPlaying ? <Pause className="w-8 h-8 fill-white" /> : <Play className="w-8 h-8 fill-white ml-1" />}
              </button>
              <div className="text-sm font-extrabold text-slate-300 mt-3">
                {isPlaying ? 'Playing Lesson 2: Secret Code Variables' : 'Paused'}
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="relative z-10 space-y-2 bg-slate-900/90 p-3 rounded-2xl border border-white/10">
              {/* Progress Slider */}
              <input
                type="range"
                min="0"
                max="100"
                value={videoProgress}
                onChange={(e) => setVideoProgress(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <div className="flex items-center gap-3">
                  <button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <Volume2 className="w-4 h-4" />
                  <span>04:15 / 12:30</span>
                </div>
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

          </div>

          {/* Lesson Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 glass-card rounded-2xl border border-white/10">
            <div>
              <h2 className="text-lg font-black text-white">Variables: Storing Secret Codes</h2>
              <p className="text-xs text-slate-400">Lesson 2 • Python Coding Wizards</p>
            </div>
            <div className="flex items-center gap-3">
              <Button size="md" variant="amber" onClick={handleFinishLesson}>
                <CheckCircle2 className="w-4 h-4" /> Mark Complete (+50 XP)
              </Button>
              <Link to="/quiz/quiz-code-1">
                <Button size="md" variant="primary">
                  Take Lesson Quiz 🚀
                </Button>
              </Link>
            </div>
          </div>

          {/* Tabs: Notes & Q&A */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center gap-4 border-b border-white/10 pb-3">
              <button
                onClick={() => setActiveTab('notes')}
                className={`text-xs font-extrabold pb-1 ${activeTab === 'notes' ? 'text-purple-300 border-b-2 border-purple-400' : 'text-slate-400'}`}
              >
                Lesson Notes
              </button>
              <button
                onClick={() => setActiveTab('qa')}
                className={`text-xs font-extrabold pb-1 ${activeTab === 'qa' ? 'text-purple-300 border-b-2 border-purple-400' : 'text-slate-400'}`}
              >
                Student Q&A
              </button>
            </div>

            {activeTab === 'notes' ? (
              <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <p>💡 <strong>Key Takeaway:</strong> A variable is like a labeled secret box in computer memory.</p>
                <code className="block p-3 bg-slate-900 rounded-xl border border-white/10 text-amber-300 font-mono">
                  secret_score = 100 <br />
                  player_name = "Leo Star"
                </code>
              </div>
            ) : (
              <div className="text-xs text-slate-400">
                Ask Dr. Sarah Spark a question about Python variables!
              </div>
            )}
          </div>

        </div>

        {/* Right Col: Playlist */}
        <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-base font-black text-white">Course Lessons</h3>
          <div className="space-y-2">
            <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-2xl text-xs flex justify-between text-emerald-300 font-bold">
              <span>1. Welcome to Python Land</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="p-3 bg-purple-600/30 border border-purple-500/50 rounded-2xl text-xs flex justify-between text-white font-black">
              <span>2. Variables: Secret Codes</span>
              <span className="text-purple-300">Playing</span>
            </div>
            <div className="p-3 bg-slate-900/60 border border-white/5 rounded-2xl text-xs flex justify-between text-slate-400">
              <span>3. Code Detective Quiz</span>
              <span>10 min</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
