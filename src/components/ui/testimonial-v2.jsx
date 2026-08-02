import React from 'react';
import { motion } from "framer-motion";

// --- Data ---
const testimonials = [
  {
    text: "Our child has shown remarkable growth in their knowledge and skills, and their enthusiasm for learning has skyrocketed. Truly a transformative journey!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Mrs. Shruthi",
    role: "Parent, India",
  },
  {
    text: "The curriculum is engaging, and the instructors are highly knowledgeable. We've noticed a significant boost in our child's confidence and problem-solving.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Mr. Bharath Kumar",
    role: "Parent, India",
  },
  {
    text: "My daughter went from not recognizing letters to reading full sentences in just 3 months. The teachers are incredibly patient and supportive!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah Al-Rashid",
    role: "Parent, UAE",
  },
  {
    text: "The personalized attention in the 1-on-1 classes is phenomenal. My son looks forward to his Phonics sessions every single day.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "Parent, Qatar",
  },
  {
    text: "Learning Hindi has never been so fun. The gamified approach and friendly teachers keep my children fully engaged.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Parent, USA",
  },
  {
    text: "We tried many online classes, but Learn2Read stands out. The interactive exercises and progress tracking give us complete peace of mind.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Parent, UK",
  },
  {
    text: "Our son's vocabulary and spelling improved dramatically. It's amazing to see him read storybooks all by himself now.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "Parent, Canada",
  },
  {
    text: "The combination of English grammar and Math logic in one platform makes it so convenient. Highly recommended to all parents!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Saman Malik",
    role: "Parent, Australia",
  },
  {
    text: "A truly wonderful academy. The teachers know exactly how to interact with kids and make learning a joyful experience.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "Parent, Belgium",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-10 rounded-3xl border border-neutral-200 shadow-lg shadow-black/5 max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-purple-300" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-slate-700 leading-relaxed font-semibold m-0 transition-colors duration-300 italic text-sm">
                      "{text}"
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-purple-100 group-hover:ring-purple-300 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-bold not-italic tracking-tight leading-5 text-slate-900 transition-colors duration-300 text-sm">
                          {name}
                        </cite>
                        <span className="text-xs font-bold leading-5 tracking-tight text-slate-500 mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export const TestimonialV2 = () => {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-white border-t border-pink-100 py-24 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="max-w-6xl px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16 text-center">
          <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest mb-3">
            PARENT VOICES
          </span>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 transition-colors">
            Echoes of Joy from Proud Parents
          </h2>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={35} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={45} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={40} />
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialV2;
