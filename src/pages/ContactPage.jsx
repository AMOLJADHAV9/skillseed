import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    setNewsletterSubscribed(true);
  };

  return (
    <div className="bg-[#FAF5F8] text-slate-900 font-sans min-h-screen">
      
      {/* Top Soft Pink Gradient Hero Header Banner from Screenshot #4 */}
      <section className="bg-gradient-to-r from-[#FDE8F0] via-[#FAF5F8] to-[#FCE6EE] py-14 border-b border-pink-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Get in Touch with Learn2Read
          </h1>
        </div>
      </section>

      {/* Form Section (Matches Screenshot #4) */}
      <section className="py-16 bg-[#FFFDF9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          
          <div className="space-y-2">
            <span className="text-xs font-black text-[#D93688] uppercase tracking-widest block">
              WE'D LOVE TO HEAR FROM YOU
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Share your queries, suggestions, or just say hello!
            </h2>
          </div>

          {submitted ? (
            <div className="p-8 bg-white rounded-3xl border border-pink-100 shadow-md space-y-3">
              <div className="text-5xl">🎉</div>
              <h3 className="text-xl font-black text-slate-900">Thank You!</h3>
              <p className="text-xs text-slate-600 font-semibold">Your message has been received. Our education counsellor will reach out within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7] shadow-sm"
                />
                <input
                  required
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7] shadow-sm"
                />
              </div>

              {/* Row 2: Your Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7] shadow-sm"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7] shadow-sm"
                />
              </div>

              {/* Row 3: Message Textarea */}
              <div>
                <textarea
                  rows={5}
                  required
                  placeholder="Message"
                  className="w-full p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7] shadow-sm"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#C04DF7] hover:bg-[#b03de5] text-white font-black text-xs sm:text-sm rounded-xl shadow-lg transition cursor-pointer"
                >
                  Send Message
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* Address & Reach Out Section (Matches Screenshot #5) */}
      <section className="py-16 bg-white border-t border-pink-100 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          
          <div className="space-y-2">
            <span className="text-xs font-black text-[#D93688] uppercase tracking-widest block">
              DROP IN OR REACH OUT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Visit us physically or virtually. We would love to have you
            </h2>
          </div>

          {/* Address Box */}
          <div className="bg-[#FFF9F6] p-6 rounded-3xl border border-pink-100 shadow-sm max-w-md mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs font-black text-slate-900">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Address</span>
            </div>
            <p className="text-xs text-slate-600 font-semibold leading-relaxed">
              150, Nemi Sagar Colony, D - Block, <br />
              Hanuman Nagar, Jaipur, Rajasthan 302021
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <a href="#facebook" className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:scale-110 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#youtube" className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 hover:scale-110 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#instagram" className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:scale-110 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Newsletter Subscription Banner (Matches Screenshot #5) */}
      <section className="bg-[#181829] text-white py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-1">
            <h3 className="text-lg font-black text-white">
              Stay Connected with Learn2Read!
            </h3>
            <p className="text-xs text-slate-300 font-semibold">
              Subscribe for Updates on Phonics Education and Exclusive Deals
            </p>
          </div>

          {/* Form Input */}
          <form onSubmit={handleNewsletter} className="flex items-center gap-2 w-full md:w-auto">
            {newsletterSubscribed ? (
              <span className="text-xs font-black text-emerald-400">🎉 Subscribed Successfully!</span>
            ) : (
              <div className="flex items-center w-full md:w-auto bg-white rounded-xl overflow-hidden p-1 shadow-md">
                <input
                  required
                  type="email"
                  placeholder="Enter Your Email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-2 text-xs font-bold text-slate-900 focus:outline-none w-full md:w-60"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#C04DF7] hover:bg-[#b03de5] text-white font-black text-xs rounded-xl flex-shrink-0 transition cursor-pointer"
                >
                  Subscribe Now
                </button>
              </div>
            )}
          </form>

        </div>
      </section>

    </div>
  );
};
