import React from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const HowItWorksSection = ({ onBookDemo }) => {
  const steps = [
    {
      step: '01',
      lottieSrc: 'https://lottie.host/a6688841-1faa-4d36-93ed-baac9a553a8e/MiZUIhdEOu.lottie',
      svgSrc: '/svg/plan-list-svgrepo-com.svg',
      title: 'Book a Free Demo',
      desc: 'Talk to our counsellor and book a no-obligation free trial class for your child.',
    },
    {
      step: '02',
      svgSrc: '/svg/bachelor-hat-svgrepo-com.svg',
      title: 'Get Assessed',
      desc: 'Our educators assess your child\'s current level and recommend the perfect course.',
    },
    {
      step: '03',
      lottieSrc: 'https://lottie.host/a9a656dc-e293-407a-aa9c-52628974c7e6/JGXnc3T83V.lottie',
      svgSrc: '/svg/rocket-svgrepo-com.svg',
      title: 'Start Learning!',
      desc: 'Your child joins live interactive sessions and starts their reading journey immediately.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#FAFBFF] via-white to-[#FAFBFF] relative overflow-hidden text-slate-900 font-sans border-t border-purple-100/60">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Title */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-black text-[#A855F7] uppercase tracking-widest block">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
            Start Learning in 3 Easy Steps
          </h2>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Background Connecting Line */}
          <div className="hidden md:block absolute top-[56px] left-[18%] right-[18%] border-t-2 border-dashed border-purple-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((item, idx) => {
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.4 }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  {/* Square Icon Frame */}
                  <div className="relative">
                    <div className="w-28 h-28 rounded-2xl bg-white border-2 border-purple-200/90 shadow-md flex items-center justify-center p-3 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:border-[#A855F7] overflow-hidden">
                      {item.lottieSrc ? (
                        <DotLottieReact
                          src={item.lottieSrc}
                          loop
                          autoplay
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <img src={item.svgSrc} alt={item.title} className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300" />
                      )}
                    </div>
                    {/* Top Right Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#A855F7] text-white text-xs font-black flex items-center justify-center shadow-md border-2 border-white">
                      {item.step}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 mt-6 px-2">
                    <h3 className="text-xl font-black text-[#0F172A] group-hover:text-[#A855F7] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center pt-4">
          <button
            onClick={onBookDemo}
            className="px-8 py-4 bg-[#A855F7] hover:bg-purple-700 text-white font-black text-xs sm:text-sm rounded-none shadow-xl shadow-purple-200 transition cursor-pointer inline-flex items-center gap-2"
          >
            <span>Book Your Free Demo Now</span>
            <span>🎁</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
