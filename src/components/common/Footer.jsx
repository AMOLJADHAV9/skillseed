import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart } from 'lucide-react';
import {
  GooglePlayButton,
  AppStoreButton,
} from '../base/buttons/AppStoreButtons';

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="relative bg-white pt-16 pb-8 overflow-hidden border-t-2 border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-emerald-500 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-amber-50 flex items-center justify-center text-2xl">
                  🍎
                </div>
              </div>
              <div className="leading-tight">
                <span className="text-2xl font-black tracking-tight text-slate-900 flex items-center gap-0">
                  Skill<span className="text-[#C04DF7]">Seed</span>
                </span>
                <span className="text-[9px] uppercase font-black tracking-widest text-emerald-600 block">
                  Phonics & STEM Academy
                </span>
              </div>
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-semibold">
              The premier interactive learning platform for kids aged 3–15. Phonics reading, Hindi, math & logic, designed for joyful learning.
            </p>

            {/* COPPA Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 border-2 border-emerald-200 rounded-2xl shadow-sm">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              <div>
                <div className="text-xs font-black text-emerald-700">COPPA Certified Safe</div>
                <div className="text-[10px] text-emerald-600 font-bold">100% Kid-Safe & Ad-Free</div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-2">
               <a href="#" className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors shadow-sm"><FacebookIcon /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors shadow-sm"><InstagramIcon /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors shadow-sm"><YoutubeIcon /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-black text-base mb-6">Explore</h4>
            <ul className="space-y-3.5 text-sm font-bold text-slate-500">
              <li><Link to="/courses" className="hover:text-[#C04DF7] transition">All Programs</Link></li>
              <li><Link to="/about" className="hover:text-[#C04DF7] transition">Our Pedagogy</Link></li>
              <li><Link to="/pricing" className="hover:text-[#C04DF7] transition">Pricing Plans</Link></li>
              <li><Link to="/certificates" className="hover:text-[#C04DF7] transition">Sample Certificates</Link></li>
              <li><Link to="/faq" className="hover:text-[#C04DF7] transition">FAQ & Support</Link></li>
            </ul>
          </div>

          {/* Dashboards */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-900 font-black text-base mb-6">Dashboards</h4>
            <ul className="space-y-3.5 text-sm font-bold text-slate-500">
              <li><Link to="/dashboard/student" className="hover:text-amber-500 transition">Student Questroom</Link></li>
              <li><Link to="/dashboard/parent" className="hover:text-emerald-500 transition">Parent Safety Portal</Link></li>
              <li><Link to="/dashboard/teacher" className="hover:text-[#C04DF7] transition">Teacher Console</Link></li>
              <li><Link to="/dashboard/admin" className="hover:text-pink-500 transition">Admin Command</Link></li>
            </ul>
          </div>

          {/* App Downloads */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-900 font-black text-base mb-6">Download Our App</h4>
            <p className="text-sm text-slate-500 mb-5 font-semibold leading-relaxed">
              Take learning anywhere! Available on all major platforms.
            </p>
            <div className="flex flex-col gap-3">
              <GooglePlayButton size="md" />
              <AppStoreButton size="md" />
            </div>
          </div>

        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-8 border-t-2 border-slate-100 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 font-bold gap-4">
          <p>© {new Date().getFullYear()} SkillSeed Academy Inc. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500 inline mx-1 animate-pulse" /> for young curious explorers.
          </div>
        </div>
      </div>
    </footer>
  );
};
