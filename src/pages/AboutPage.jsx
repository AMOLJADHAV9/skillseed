import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ExternalLink, Award, Users, BookOpen, Heart, Globe, Sparkles } from 'lucide-react';

export const AboutPage = () => {
  const testimonials = [
    {
      name: 'Mrs. Shruthi',
      location: 'India',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
      text: "We are incredibly impressed with our child's course experience. They have shown remarkable growth in their knowledge and skills, and their enthusiasm for learning has skyrocketed. It's truly been a transformative journey for them."
    },
    {
      name: 'Mr. Bharath Kumar',
      location: 'India',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      text: "Our child's course has exceeded our expectations. The curriculum is engaging, and the instructors are highly knowledgeable and supportive. We've noticed a significant boost in our child's confidence and problem-solving abilities."
    }
  ];

  const blogInsights = [
    {
      title: "Screen Time for Kids: 7 Do's and Don'ts That Actually Work (2026)",
      date: 'July 31, 2026',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=700'
    },
    {
      title: 'Reading Milestones by Age: What Your Child Should Do at 3, 4, 5, 6 and 7',
      date: 'July 28, 2026',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=700'
    },
    {
      title: 'How to Choose a Phonics Program: A Parent\'s 10-Question Checklist',
      date: 'July 24, 2026',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=700'
    }
  ];

  return (
    <div className="bg-[#FAF5F8] text-slate-900 font-sans min-h-screen">
      
      {/* SECTION 1: TOP HERO HEADER BANNER (Light Theme, Square Styling) */}
      <section className="bg-gradient-to-r from-[#FDE8F0] via-[#FAF5F8] to-[#FCE6EE] py-14 border-b border-pink-100 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest block">SKILLSEED STORY</span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Discover the SkillSeed Journey
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-xl mx-auto">
            Empowering over 10,000+ children across 35+ countries to read, speak, and solve problems with joyful confidence.
          </p>
        </div>
      </section>

      {/* SECTION 2: ABOUT SKILLSEED */}
      <section className="py-16 bg-white border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Stack (Square Frame) */}
            <div className="lg:col-span-6 relative pb-6 sm:pb-0">
              <div className="relative rounded-none overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
                  alt="Child Learning Phonics and Reading"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-3 w-48 h-36 rounded-none overflow-hidden shadow-2xl border-4 border-white z-10 hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&q=80&w=500"
                  alt="Happy Boy Student"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest block">
                ABOUT SKILLSEED
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Cultivating the Joy of Learning: Our Road to Triumph
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                Incepted in 2020, our founder, Varshika Jain, envisioned SkillSeed as a haven for young learners beginning their linguistic journey. Now, our vibrant community extends across 35+ countries, including India, UAE, USA, Canada, Australia, Qatar, Belgium, among others, touching the lives of thousands of children. With an outstanding satisfaction rate of 98%, we take pride in our pioneering educational approaches. At SkillSeed, we replace repetitive learning with interactive, stimulating sessions, aiding students in understanding language intricacies, from elementary phonics to advanced vocabulary.
              </p>

              {/* Square Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3.5 bg-[#FAF5F8] rounded-none border border-purple-100 shadow-sm">
                  <div className="w-10 h-10 rounded-none bg-purple-100 flex items-center justify-center text-[#C04DF7] font-black text-lg flex-shrink-0">
                    📚
                  </div>
                  <span className="text-xs font-black text-slate-800">Interactive Phonics Education</span>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-[#FAF5F8] rounded-none border border-purple-100 shadow-sm">
                  <div className="w-10 h-10 rounded-none bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-lg flex-shrink-0">
                    🌱
                  </div>
                  <span className="text-xs font-black text-slate-800">Progressive STEM Curriculum</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT TO EXPECT (Square Cards) */}
      <section className="py-16 bg-[#FAF5F8] border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-left space-y-2">
            <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest block">
              WHAT TO EXPECT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Uncover the Learn2Read Distinction: What Our Courses Promise
            </h2>
            <p className="text-xs text-slate-600 font-semibold max-w-3xl">
              When you step into the Learn2Read family, you sign up your child for a journey of self-development and exploration. Here's what our diverse range of courses offer:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* 2-Column Square Feature Items */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
              
              <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-none bg-emerald-100 text-emerald-600 font-black flex items-center justify-center flex-shrink-0 text-sm">
                  🧩
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">Interactive Learning</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1">Our course curriculum incorporates fun educational phonics games and interactive activities that make learning a delightful experience.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-none bg-amber-100 text-amber-600 font-black flex items-center justify-center flex-shrink-0 text-sm">
                  📖
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">Comprehensive Curriculum</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1">From learning alphabet phonics to understanding advanced spelling rules, our programs are designed to equip learners with complete language proficiency.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-none bg-rose-100 text-rose-600 font-black flex items-center justify-center flex-shrink-0 text-sm">
                  ❤️
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">Personalized Attention</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1">Our small batch sizes (max 4:1) ensure that every student receives the individual attention they need to thrive.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-none bg-purple-100 text-purple-600 font-black flex items-center justify-center flex-shrink-0 text-sm">
                  👩‍🏫
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">Experienced Educators</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1">Our dedicated team of certified educators is passionate about nurturing a love for learning in each student.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-none bg-indigo-100 text-indigo-600 font-black flex items-center justify-center flex-shrink-0 text-sm">
                  🗣️
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">Multilingual Mastery</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1">With English and Hindi language courses, we promote bilingual proficiency from an early age.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-none bg-cyan-100 text-cyan-600 font-black flex items-center justify-center flex-shrink-0 text-sm">
                  🔢
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">Numerical & Logic Skills</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1">Our math learning programs help children develop strong analytical and problem-solving skills.</p>
                </div>
              </div>

            </div>

            {/* Right Photo Grid (Square Stack) */}
            <div className="lg:col-span-5 relative flex flex-col justify-center">
              <div className="rounded-none overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
                  alt="Child engaged in interactive learning"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: VOICES OF SKILLSEED PARENTS */}
      <section className="py-16 bg-white border-b border-pink-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest block">
              VOICES OF SKILLSEED PARENTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Echoes of Joy from Parents of our Proud Readers
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Couch Photo (Square Frame) */}
            <div className="lg:col-span-5">
              <div className="rounded-none overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600"
                  alt="Family Reading Book on Couch"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>

            {/* Right Parent Reviews Cards (Square Cards) */}
            <div className="lg:col-span-7 space-y-4 text-left">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-[#FAF5F8] p-6 rounded-none border border-purple-100 shadow-sm flex items-start gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-none object-cover flex-shrink-0 border-2 border-purple-300" />
                  <div className="space-y-1">
                    <div className="text-xs font-black text-slate-900">{t.name}</div>
                    <div className="text-[10px] font-bold text-[#C04DF7]">{t.location}</div>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed pt-1">
                      "{t.text}"
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <Link to="/courses">
                  <button className="px-6 py-3.5 bg-[#22C55E] hover:bg-[#16a34a] text-white font-black text-xs rounded-none shadow-md transition cursor-pointer flex items-center gap-2">
                    <span>Explore Our Courses</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: INSIGHTS FROM OUR BLOG */}
      <section className="py-16 bg-[#FAF5F8] border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest block">
              INSIGHTS FROM OUR BLOG
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Dive Into Our Treasure Trove of Phonics Education Knowledge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {blogInsights.map((post, idx) => (
              <div key={idx} className="bg-white rounded-none border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition">
                <div className="h-52 overflow-hidden bg-slate-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="text-[10px] text-slate-400 font-bold mt-2">
                      📅 {post.date}
                    </div>
                  </div>

                  <Link to="/resources" className="text-xs font-black text-[#C04DF7] flex items-center gap-1 hover:underline pt-2">
                    <span>Read Full Article</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: ADDRESS & CONTACT US */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest block">
              DROP IN OR REACH OUT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Visit us physically or virtually. We would love to have you
            </h2>
          </div>

          <div className="bg-[#FAF5F8] p-6 rounded-none border border-purple-200 shadow-sm max-w-md mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs font-black text-slate-900">
              <MapPin className="w-4 h-4 text-[#C04DF7]" />
              <span>Academy Address</span>
            </div>
            <p className="text-xs text-slate-600 font-semibold leading-relaxed">
              150, Nemi Sagar Colony, D - Block, <br />
              Hanuman Nagar, Jaipur, Rajasthan 302021
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
