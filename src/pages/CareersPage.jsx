import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Briefcase, MapPin, Clock, ArrowRight, UserCheck } from 'lucide-react';

export const CareersPage = () => {
  const [applyModalJob, setApplyModalJob] = useState(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const jobOpenings = [
    { title: 'Process Coordinator', exp: '0-1 Year', location: 'Jaipur (On-Site)', type: 'Full-Time' },
    { title: 'Sales Counsellor (On-Site)', exp: '2+ Years', location: 'Jaipur (On-Site)', type: 'Full-Time' },
    { title: 'Math & Logic Instructor (Primary)', exp: '2+ Years', location: 'Remote', type: 'Part-Time / Full-Time' },
    { title: 'Public Speaking & Drama Educator', exp: '3+ Years', location: 'Remote', type: 'Part-Time' },
    { title: 'Phonics & Reading Specialist (Remote)', exp: '2+ Years', location: 'Remote', type: 'Full-Time' },
    { title: 'Hindi Curriculum Creator', exp: '2+ Years', location: 'Remote', type: 'Contract' }
  ];

  return (
    <div className="bg-[#FAF5F8] text-slate-900 font-sans min-h-screen">
      
      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#FDE8F0] via-[#FAF5F8] to-[#FCE6EE] py-14 lg:py-20 border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest block">JOIN OUR TEAM</span>
              <h1 className="text-3xl sm:text-5xl font-black text-[#1E1B2E] tracking-tight leading-tight">
                Shape Young Minds. <br />
                Grow With Us. 🚀
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold max-w-lg leading-relaxed">
                Be a part of India's premier early literacy & STEM movement. Inspire children across 35+ countries, empower families, and build your dream career with purpose.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setApplyModalJob('General Application')}
                  className="px-8 py-4 bg-[#22C55E] hover:bg-[#16a34a] text-white font-black text-xs sm:text-sm rounded-none shadow-lg shadow-green-500/25 transition cursor-pointer flex items-center gap-2"
                >
                  <span>Apply For Open Roles</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Educator Photo (Crisp Square Frame) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md w-full">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700"
                  alt="Educator Professional at Laptop"
                  className="w-full h-80 sm:h-96 object-cover rounded-none shadow-xl border-4 border-white"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CURRENT JOB OPENINGS SECTION ───────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest block">CAREER OPPORTUNITIES</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Current Job Openings
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold max-w-lg mx-auto">
              Find the perfect role that matches your skills, passion, and location preference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job, idx) => (
              <div
                key={idx}
                className="bg-[#FAF5F8] p-6 rounded-none border border-purple-100 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition text-left"
              >
                <div className="space-y-3">
                  <span className="px-3 py-1 bg-white text-[#C04DF7] text-[10px] font-black rounded-none border border-purple-200 inline-block shadow-xs">
                    {job.type}
                  </span>
                  <h3 className="text-base font-black text-slate-900 leading-snug">
                    {job.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-600 space-y-1 pt-1">
                    <p className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-[#C04DF7]" /> Exp: <span className="text-[#C04DF7] font-bold">{job.exp}</span></p>
                    <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-500" /> Location: <span className="text-slate-900 font-bold">{job.location}</span></p>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setApplyModalJob(job.title)}
                    className="w-full py-3 bg-[#C04DF7] hover:bg-[#b03de5] text-white font-black text-xs rounded-none shadow-sm transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS 3-STEP FLOW ────────────────────────────────────────── */}
      <section className="py-16 bg-[#FAF5F8] border-b border-pink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest block">
              HIRING PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Start Your Career in 3 Simple Steps
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold max-w-xl mx-auto">
              Take the next step in your professional journey with a quick and transparent application process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-none border border-slate-200 shadow-sm text-center space-y-4 relative">
              <div className="w-12 h-12 rounded-none bg-[#C04DF7] text-white font-black text-xl flex items-center justify-center mx-auto shadow-md">
                1
              </div>
              <h3 className="text-base font-black text-slate-900">Resume Screening</h3>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                Your application and resume will be reviewed by our HR and talent team within 24 hours.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-none border-2 border-[#C04DF7] shadow-md text-center space-y-4 relative">
              <div className="w-12 h-12 rounded-none bg-[#C04DF7] text-white font-black text-xl flex items-center justify-center mx-auto shadow-md">
                2
              </div>
              <h3 className="text-base font-black text-slate-900">Quick HR Revert</h3>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                Within 48 hours our recruitment coordinator will contact shortlisted candidates for an interview.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-none border border-slate-200 shadow-sm text-center space-y-4 relative">
              <div className="w-12 h-12 rounded-none bg-[#C04DF7] text-white font-black text-xl flex items-center justify-center mx-auto shadow-md">
                3
              </div>
              <h3 className="text-base font-black text-slate-900">Onboarding & Demo</h3>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                Complete a short teaching demo session and get onboarded into our global educator network.
              </p>
            </div>

          </div>

          <div className="text-center">
            <button
              onClick={() => setApplyModalJob('General Application')}
              className="px-8 py-4 bg-[#22C55E] hover:bg-[#16a34a] text-white font-black text-xs sm:text-sm rounded-none shadow-lg shadow-green-500/25 transition cursor-pointer"
            >
              Start Your Application Today 🚀
            </button>
          </div>

        </div>
      </section>

      {/* ── APPLICATION MODAL (Square Styling) ────────────────────────────────── */}
      <AnimatePresence>
        {applyModalJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-none border-2 border-purple-200 max-w-md w-full relative shadow-2xl space-y-5 text-left"
            >
              <button
                onClick={() => { setApplyModalJob(null); setAppliedSuccess(false); }}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {appliedSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="text-5xl">🎉</div>
                  <h3 className="text-xl font-black text-slate-900">Application Submitted!</h3>
                  <p className="text-xs text-slate-600 font-semibold">Our recruitment team will review your details and revert within 48 hours.</p>
                  <button
                    onClick={() => { setApplyModalJob(null); setAppliedSuccess(false); }}
                    className="px-6 py-2.5 bg-[#C04DF7] text-white font-black text-xs rounded-none"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-slate-900">Apply for Role</h3>
                    <p className="text-xs text-[#C04DF7] font-black uppercase tracking-wider">{applyModalJob}</p>
                  </div>

                  <form onSubmit={(e) => { e.preventDefault(); setAppliedSuccess(true); }} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-black text-slate-700 mb-1">Full Name</label>
                      <input required type="text" placeholder="e.g. Ananya Sharma" className="w-full p-3 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7]" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-700 mb-1">Email Address</label>
                      <input required type="email" placeholder="name@example.com" className="w-full p-3 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7]" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-700 mb-1">Phone Number</label>
                      <input required type="tel" placeholder="+91 98765 43210" className="w-full p-3 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7]" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-700 mb-1">Resume Link (Drive / LinkedIn)</label>
                      <input required type="url" placeholder="https://drive.google.com/..." className="w-full p-3 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7]" />
                    </div>
                    <button type="submit" className="w-full py-3.5 bg-[#22C55E] hover:bg-[#16a34a] text-white font-black text-xs rounded-none shadow-md cursor-pointer flex items-center justify-center gap-2">
                      <span>Submit Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
