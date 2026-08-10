import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCourses } from '../context/CourseContext';
import {
  Star,
  Clock,
  BookOpen,
  Award,
  Users,
  CheckCircle,
  PlayCircle,
  Sparkles,
  ChevronDown,
  ArrowLeft,
  Check,
  ShieldCheck,
  Video,
  FileText,
  HelpCircle,
  MessageSquare,
  Sparkle
} from 'lucide-react';
import { motion } from 'framer-motion';

const DEFAULT_MODULES = [
  {
    title: 'Module 1: Sound-Letter Mastery & Phonics Fundamentals',
    lessons: [
      { id: 'l1', title: '1.1 Phonemic Awareness & Alphabet Sounds', duration: '25 mins', completed: true },
      { id: 'l2', title: '1.2 Vowels vs Consonants Interactive Practice', duration: '30 mins', completed: true },
      { id: 'l3', title: '1.3 Short & Long Vowel Sounds Quiz', duration: '20 mins', completed: false },
      { id: 'l4', title: '1.4 Phonics Song & Rhyme Game', duration: '15 mins', completed: false },
    ],
  },
  {
    title: 'Module 2: Consonant Blends, Digraphs & Silent Letters',
    lessons: [
      { id: 'l5', title: '2.1 Blends: Sh, Ch, Th & Ph Sound Challenge', duration: '35 mins', completed: false },
      { id: 'l6', title: '2.2 Magic "E" Rule & Vowel Team Words', duration: '30 mins', completed: false },
      { id: 'l7', title: '2.3 Silent Letters (Kn, Wr, Mb) Mystery Game', duration: '25 mins', completed: false },
      { id: 'l8', title: '2.4 Flashcard Speed Drill & Spelling Bee', duration: '20 mins', completed: false },
    ],
  },
  {
    title: 'Module 3: Fluency, Sight Words & Storybook Reading',
    lessons: [
      { id: 'l9', title: '3.1 Top 100 High-Frequency Sight Words', duration: '30 mins', completed: false },
      { id: 'l10', title: '3.2 Guided Storybook Reading (Level 1)', duration: '40 mins', completed: false },
      { id: 'l11', title: '3.3 Expression, Punctuation & Vocal Tone', duration: '25 mins', completed: false },
      { id: 'l12', title: '3.4 Interactive Picture Passage Comprehension', duration: '30 mins', completed: false },
    ],
  },
  {
    title: 'Module 4: Advanced Comprehension & Graduation Quest',
    lessons: [
      { id: 'l13', title: '4.1 Story Plot & Character Analysis', duration: '35 mins', completed: false },
      { id: 'l14', title: '4.2 Creative Story Writing & Vocabulary Expansion', duration: '40 mins', completed: false },
      { id: 'l15', title: '4.3 Live Batch Recitation & Presentation', duration: '30 mins', completed: false },
      { id: 'l16', title: '4.4 Final Assessment & Certificate Unlocking', duration: '25 mins', completed: false },
    ],
  },
];

const PARENT_REVIEWS = [
  {
    id: 1,
    name: 'Ananya Sharma',
    location: 'Mumbai, India',
    childAge: 'Mother of Aarav (Age 6)',
    rating: 5,
    date: '2 weeks ago',
    comment: 'My son transformed from struggling with basic letter sounds to reading full storybooks fluently! The live Zoom classes are so engaging and the 4:1 ratio means he gets constant individual guidance.',
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Dubai, UAE',
    childAge: 'Mother of Riya (Age 5)',
    rating: 5,
    date: '1 month ago',
    comment: 'The gamified XP rewards and weekly certificates kept my daughter super motivated. Her teacher Dr. Sarah is so patient and warm. Highly recommend to all parents!',
  },
  {
    id: 3,
    name: 'Rahul Verma',
    location: 'Toronto, Canada',
    childAge: 'Father of Kabir (Age 7)',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Living overseas, we wanted our child to master both English reading and Hindi basics. Learn2Read provided the perfect structured curriculum. 10/10 experience!',
  },
];

const COURSE_FAQS = [
  {
    q: 'How are live classes conducted for this course?',
    a: 'Classes are conducted live on Zoom in small batches with a maximum 4:1 student-teacher ratio. Each session includes interactive slides, games, and direct teacher feedback.',
  },
  {
    q: 'What if my child misses a live session?',
    a: 'All live classes are recorded and available on the Parent Dashboard within 2 hours. Your child can rewatch any session or complete missed worksheets anytime.',
  },
  {
    q: 'What supplies or devices are needed?',
    a: 'Your child only needs a tablet, iPad, or laptop with Zoom installed, a stable internet connection, a notebook, and color pencils. All printable worksheets are provided in PDF format.',
  },
  {
    q: 'Will my child receive a certificate upon completion?',
    a: 'Yes! Upon completing the final module and graduation quiz, your child receives a personalized, verified digital Certificate of Phonics Mastery signed by the lead instructor.',
  },
];

export const CourseDetailsPage = () => {
  const { id } = useParams();
  const { getCourseById } = useCourses();
  const course = getCourseById(id || 'course-1');

  const [activeModule, setActiveModule] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);

  const modulesToDisplay = course.modules && course.modules.length > 0 ? course.modules : DEFAULT_MODULES;

  return (
    <div className="bg-[#FAF9FF] text-slate-900 font-sans min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Back Link Button */}
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-black text-[#7C3AED] hover:bg-purple-50 transition uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Courses
        </Link>

        {/* ─── 1. HERO BANNER BOX ────────────────────────────── */}
        <div className="bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#4F46E5] p-8 sm:p-12 rounded-[32px] border border-purple-400/30 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute -top-12 -right-12 w-96 h-96 bg-white/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-5 text-left">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-black text-white border border-white/30 uppercase tracking-wider">
                  {course.category}
                </span>
                <span className="px-4 py-1.5 bg-amber-400 text-slate-950 text-xs font-black rounded-full shadow-sm">
                  Ages {course.ageGroup || '3-8 Yrs'}
                </span>
                <span className="px-4 py-1.5 bg-[#10B981] text-white text-xs font-black rounded-full shadow-sm flex items-center gap-1.5">
                  🎥 Live 4:1 Zoom Batch
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                {course.title}
              </h1>

              <p className="text-purple-100 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-black text-white">
                <span className="flex items-center gap-1.5 text-amber-300 bg-white/10 px-3 py-1.5 rounded-full">
                  <Star className="w-4 h-4 fill-amber-300" /> {course.rating} ({course.reviewsCount} Reviews)
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                  <Users className="w-4 h-4 text-purple-200" /> {course.studentsEnrolled} Students Enrolled
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 text-emerald-300" /> {course.duration}
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="bg-white p-7 rounded-[28px] border border-slate-100 shadow-2xl text-center space-y-4 text-slate-900">
              <div className="my-1 flex justify-center">
                <img src="/svg/book-opened-svgrepo-com.svg" alt="Book Icon" className="w-20 h-20 drop-shadow-md" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-100 text-amber-900 rounded-full font-black text-xs border border-amber-200">
                <Sparkles className="w-4 h-4 text-amber-600" /> Earn +{course.xpReward} XP Reward
              </div>

              <Link to={`/learn/${course.id}`} className="block">
                <button className="w-full py-4 bg-[#22C55E] hover:bg-[#16a34a] text-white font-black text-sm rounded-2xl shadow-xl shadow-green-500/25 flex items-center justify-center gap-2 transition hover:scale-102 active:scale-98 cursor-pointer">
                  <PlayCircle className="w-5 h-5 fill-white text-emerald-600" /> Start Learning Quest
                </button>
              </Link>
              <p className="text-[11px] text-slate-500 font-extrabold flex items-center justify-center gap-1.5">
                <img src="/svg/money-back-business-warranty-satisfaction-marketing-guaranted-svgrepo-com.svg" alt="Guarantee" className="w-4 h-4" />
                100% Satisfaction Guarantee • 7-Day Money Back
              </p>
            </div>

          </div>
        </div>

        {/* ─── 2. WHAT YOUR CHILD WILL MASTER ──────────────────────── */}
        <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-100/80 space-y-6 text-left">
          <div className="space-y-1">
            <span className="text-xs font-black text-[#7C3AED] uppercase tracking-widest block">Key Outcomes</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">What Your Child Will Master</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
            {[
              { title: 'Sound-Letter Associations', desc: 'Recognize 44 phonics sounds, blends, and vowel digraphs with confidence.', svg: '/svg/book-svgrepo-com.svg' },
              { title: 'Reading Speed & Fluency', desc: 'Read age-appropriate storybooks smoothly without hesitating or stuttering.', svg: '/svg/growth-svgrepo-com.svg' },
              { title: 'Spelling & Vocabulary', desc: 'Spell 200+ sight words and understand complex word families.', svg: '/svg/plan-list-svgrepo-com.svg' },
              { title: 'Comprehension & Logic', desc: 'Answer questions about story plots, character motivations, and main ideas.', svg: '/svg/laptop-with-a-graduation-cap-svgrepo-com.svg' },
              { title: 'Pronunciation & Accent', desc: 'Develop clear phonemic vocal awareness and public speaking confidence.', svg: '/svg/instructor-lecture-with-sceen-projection-tool-svgrepo-com.svg' },
              { title: 'Gamified XP & Badges', desc: 'Earn weekly achievement badges, XP levels, and graduation certificates.', svg: '/svg/bachelor-hat-svgrepo-com.svg' },
            ].map((obj, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-5 bg-[#F8F7FF] rounded-2xl border border-purple-100/80 hover:border-purple-200 transition">
                <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs border border-purple-200">
                  <img src={obj.svg} alt={obj.title} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 mb-1">{obj.title}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 3. SYLLABUS ACCORDION & INSTRUCTOR SIDEBAR ──────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Modules Accordion (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#7C3AED]" /> Detailed Curriculum Syllabus
              </h2>
              <span className="text-xs font-black text-slate-600 bg-purple-50 px-3.5 py-1.5 border border-purple-100 rounded-full">
                {modulesToDisplay.length} Modules • {modulesToDisplay.reduce((acc, m) => acc + m.lessons.length, 0)} Lessons
              </span>
            </div>

            <div className="space-y-4">
              {modulesToDisplay.map((mod, idx) => {
                const isOpen = activeModule === idx;
                return (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden">
                    <button
                      onClick={() => setActiveModule(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between font-black text-slate-900 text-base sm:text-lg hover:bg-purple-50/40 transition cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#F3E8FF] text-[#7C3AED] text-xs font-black flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-slate-900 font-extrabold">{mod.title}</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-[#7C3AED] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 space-y-2.5 border-t border-slate-100 pt-4 bg-slate-50/50">
                        {mod.lessons.map((les) => (
                          <div key={les.id} className="p-4 bg-white rounded-xl border border-slate-100 flex items-center justify-between text-xs text-slate-700 shadow-xs hover:border-purple-200 transition">
                            <div className="flex items-center gap-3">
                              <PlayCircle className="w-4 h-4 text-[#7C3AED]" />
                              <span className="font-extrabold text-slate-900">{les.title}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-slate-500 font-bold">{les.duration}</span>
                              {les.completed ? (
                                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-black rounded-full text-[10px]">Completed</span>
                              ) : (
                                <Link to={`/learn/${course.id}`}>
                                  <span className="px-3.5 py-1 bg-[#7C3AED] text-white hover:bg-purple-700 font-black rounded-full text-[10px] transition inline-block shadow-xs">Start Lesson</span>
                                </Link>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instructor & Batch Highlights (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            
            {/* Instructor Card */}
            <div className="bg-white p-6 sm:p-7 rounded-[28px] border border-slate-100 shadow-xl shadow-slate-100/70 space-y-4">
              <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-3">Your Lead Educator</h2>
              
              <div className="flex items-center gap-4">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-200 shadow-sm"
                />
                <div>
                  <h3 className="text-base font-black text-slate-900">{course.instructor.name}</h3>
                  <p className="text-xs text-[#7C3AED] font-black">{course.instructor.role}</p>
                  <div className="text-[11px] text-amber-500 font-bold mt-0.5">⭐ 4.98 Instructor Rating</div>
                </div>
              </div>

              <p className="text-xs text-slate-600 font-semibold leading-relaxed bg-purple-50/50 p-3.5 rounded-2xl border border-purple-100/60">
                "{course.instructor.bio}"
              </p>

              <div className="space-y-2 text-xs font-extrabold text-slate-700 pt-1">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-600" /> 10+ Years Teaching Experience
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" /> Taught 5,000+ Young Learners
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Certified Phonics &amp; Early Ed Specialist
                </div>
              </div>
            </div>

            {/* Batch & Program Details Box */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-[28px] border border-purple-100 shadow-md space-y-3">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Program Highlights</h3>
              <ul className="space-y-2.5 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2.5">
                  <img src="/svg/instructor-lecture-with-sceen-projection-tool-svgrepo-com.svg" alt="Live Zoom" className="w-4 h-4" /> Live Interactive Zoom Classes
                </li>
                <li className="flex items-center gap-2.5">
                  <img src="/svg/woman-taking-online-classes-svgrepo-com.svg" alt="Small Batches" className="w-4 h-4" /> Small 4:1 Student-Teacher Batches
                </li>
                <li className="flex items-center gap-2.5">
                  <img src="/svg/book-opened-svgrepo-com.svg" alt="Worksheets" className="w-4 h-4" /> Printable Phonics Worksheets &amp; Books
                </li>
                <li className="flex items-center gap-2.5">
                  <img src="/svg/bachelor-hat-svgrepo-com.svg" alt="Certificate" className="w-4 h-4" /> Official Graduation Certificate
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* ─── 4. PARENT REVIEWS & TESTIMONIALS SECTION ──────── */}
        <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-100/80 space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="text-xs font-black text-[#7C3AED] uppercase tracking-widest block">Verified Feedback</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">What Parents Say About This Course</h2>
            </div>
            <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 border border-amber-200 rounded-full">
              <span className="text-xl font-black text-slate-900">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-500">({course.reviewsCount} Ratings)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PARENT_REVIEWS.map((rev) => (
              <div key={rev.id} className="p-6 bg-slate-50/70 rounded-2xl border border-slate-100 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold">{rev.date}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-semibold leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60">
                  <div className="text-xs font-black text-slate-900">{rev.name}</div>
                  <div className="text-[10px] font-bold text-[#7C3AED]">{rev.childAge} • {rev.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 5. COURSE FAQS SECTION ───────────────────────── */}
        <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-100/80 space-y-6 text-left">
          <div className="space-y-1">
            <span className="text-xs font-black text-[#7C3AED] uppercase tracking-widest block">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {COURSE_FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden shadow-xs">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-black text-slate-900 text-sm sm:text-base hover:bg-purple-50/40 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#7C3AED] flex-shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#7C3AED] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 font-semibold leading-relaxed bg-slate-50/80 border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailsPage;
