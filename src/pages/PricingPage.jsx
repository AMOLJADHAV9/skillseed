import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles } from 'lucide-react';

export const PricingPage = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter Quest',
      price: '$0',
      period: 'Forever Free',
      desc: 'Perfect for trying out 5 starter phonics & coding quests.',
      features: ['Access to 5 Intro Courses', 'Basic XP & Badges', '1 Student Profile', 'Ad-Free Experience'],
      popular: false,
      buttonText: 'Start Free 🚀',
      buttonBg: 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300'
    },
    {
      name: 'Genius Explorer',
      price: annual ? '$12' : '$15',
      period: 'per month',
      popular: true,
      desc: 'Full unlimited access to all 50+ Phonics, STEM & Math tracks.',
      features: [
        'Unlimited Access to All 50+ Courses',
        'Official Verified Certificates',
        'Live Stream Tutor Classes',
        'Advanced Python & AI Labs',
        'Parent Weekly Reports'
      ],
      buttonText: 'Start 14-Day Free Trial ⭐',
      buttonBg: 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20'
    },
    {
      name: 'Family Pass',
      price: annual ? '$24' : '$29',
      period: 'per month',
      popular: false,
      desc: 'Includes up to 4 child profiles + full parent control portal.',
      features: [
        'Everything in Genius Explorer',
        'Up to 4 Child Profiles',
        'Screen Time Control PIN',
        'Direct Teacher Q&A Messaging',
        'Priority Live Class Seating'
      ],
      buttonText: 'Get Family Pass 👨‍👩‍👧',
      buttonBg: 'bg-gradient-to-r from-[#C04DF7] to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg shadow-purple-500/20'
    }
  ];

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto space-y-12 min-h-screen bg-[#FAF5F8]">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-black text-xs">
          <Sparkles className="w-4 h-4 text-amber-600" /> TRANSPARENT FAMILY PRICING
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
          Invest in Your Child Future <br />
          <span className="gradient-text-amber">With 100% Risk-Free Guarantee</span>
        </h1>
        <p className="text-slate-600 text-sm font-semibold">
          Transparent pricing for families. 14-day money-back guarantee on all paid plans.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <span className={`text-xs font-black ${!annual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly Billing</span>
          <button
            onClick={() => setAnnual(!annual)}
            className="w-14 h-8 bg-[#C04DF7] rounded-full p-1 transition cursor-pointer relative"
          >
            <div className={`w-6 h-6 bg-white rounded-full transition-transform ${annual ? 'translate-x-6' : ''}`} />
          </button>
          <span className={`text-xs font-black ${annual ? 'text-slate-900' : 'text-slate-500'}`}>
            Annual (Save 20% 🎉)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white p-8 rounded-[36px] border flex flex-col justify-between space-y-6 relative shadow-lg ${
              plan.popular ? 'border-amber-400 ring-4 ring-amber-400/20 shadow-2xl scale-105' : 'border-slate-200'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-slate-950 font-black text-[10px] uppercase rounded-full shadow-md">
                MOST POPULAR FOR KIDS
              </span>
            )}

            <div className="space-y-4">
              <h3 className="text-2xl font-black text-slate-900">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                <span className="text-xs text-slate-500 font-bold">/{plan.period}</span>
              </div>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed">{plan.desc}</p>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs font-bold text-slate-700">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/signup">
              <button className={`w-full py-3.5 rounded-2xl font-black text-xs sm:text-sm transition cursor-pointer flex items-center justify-center gap-2 ${plan.buttonBg}`}>
                {plan.buttonText}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
