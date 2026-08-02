import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Clock, Calendar, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const featuredArticle = {
  id: 'featured-1',
  category: 'Phonics',
  thumbnailUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1400',
  title: 'Unlock Your Child\'s Reading Potential: The Science Behind Phonics',
  summary: 'Phonics isn\'t just a teaching method — it\'s a proven, research-backed approach that rewires how young brains process language. Discover the science and how to use it at home.',
  href: '#',
  publishedAt: '10 April 2026',
  readingTime: '8 min read',
  author: { name: 'Varshika Jain', avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100' },
  tags: ['Phonics', 'Reading Science', 'Early Learning'],
};

const articles = [
  {
    id: 'a1', category: 'Screen Time',
    title: "Screen Time for Kids: 7 Do's and Don'ts That Actually Work (2026)",
    summary: "You hand over the tablet so you can finish cooking. Twenty minutes later comes the meltdown. Discover how to set healthy boundaries that work.",
    href: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=700',
    publishedAt: 'July 31, 2026', readingTime: '6 min read',
    author: { name: 'Dr. Priya Mehta', avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=60' },
    tags: ['Screen Time', 'Parenting'],
  },
  {
    id: 'a2', category: 'Reading',
    title: 'Reading Milestones by Age: What Your Child Should Do at 3, 4, 5, 6 and 7',
    summary: 'Every child learns at their own pace, but there are clear milestones every parent should watch for. This guide covers what to expect at each age.',
    href: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=700',
    publishedAt: 'July 28, 2026', readingTime: '8 min read',
    author: { name: 'Varshika Jain', avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=60' },
    tags: ['Reading', 'Milestones'],
  },
  {
    id: 'a3', category: 'Phonics',
    title: "How to Choose a Phonics Program: A Parent's 10-Question Checklist",
    summary: "With dozens of phonics programs available, choosing the right one can feel overwhelming. Use our expert-designed checklist to find the perfect fit.",
    href: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=700',
    publishedAt: 'July 24, 2026', readingTime: '5 min read',
    author: { name: 'Dr. Priya Mehta', avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=60' },
    tags: ['Phonics', 'Curriculum'],
  },
  {
    id: 'a4', category: 'Phonics',
    title: '10 Best Phonics Classes in India (2026): An Honest Comparison',
    summary: "We analyzed 10 top phonics programs available to Indian families. Here's our unbiased breakdown of curriculum quality, pricing, and outcomes.",
    href: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=700',
    publishedAt: 'July 22, 2026', readingTime: '10 min read',
    author: { name: 'Varshika Jain', avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=60' },
    tags: ['Phonics', 'India'],
  },
  {
    id: 'a5', category: 'Hindi',
    title: 'Teaching Hindi to Kids Abroad: 5 Strategies That Actually Work',
    summary: 'Raising bilingual children outside India? Here are 5 proven strategies from our educators to help your child learn and love Hindi.',
    href: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=700',
    publishedAt: 'July 18, 2026', readingTime: '7 min read',
    author: { name: 'Anita Sharma', avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=60' },
    tags: ['Hindi', 'Bilingual'],
  },
  {
    id: 'a6', category: 'Parenting',
    title: 'How to Make Your Child Love Reading: 8 Practical Parent Tips',
    summary: 'Reading for pleasure is one of the best predictors of academic success. These 8 research-backed tips will spark a genuine love of books.',
    href: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&q=80&w=700',
    publishedAt: 'July 14, 2026', readingTime: '4 min read',
    author: { name: 'Dr. Priya Mehta', avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=60' },
    tags: ['Parenting', 'Reading'],
  },
  {
    id: 'a7', category: 'STEM',
    title: 'STEM for Early Learners: Why Starting at Age 4 Makes a Difference',
    summary: 'Research shows children who are exposed to early STEM concepts have stronger problem-solving skills throughout their academic career.',
    href: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=700',
    publishedAt: 'July 10, 2026', readingTime: '6 min read',
    author: { name: 'Varshika Jain', avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=60' },
    tags: ['STEM', 'Early Learning'],
  },
  {
    id: 'a8', category: 'Reading',
    title: 'Sight Words vs. Phonics: Which Approach Is Best for Your Child?',
    summary: 'The debate between sight words and phonics has gone on for decades. Here\'s what the latest research actually says.',
    href: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=700',
    publishedAt: 'July 6, 2026', readingTime: '9 min read',
    author: { name: 'Anita Sharma', avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=60' },
    tags: ['Reading', 'Phonics'],
  },
  {
    id: 'a9', category: 'Hindi',
    title: 'Hindi Alphabet Made Fun: 12 Games Your Child Will Actually Want to Play',
    summary: 'Memorizing Swar and Vyanjan doesn\'t have to be boring. These 12 interactive games make Hindi alphabet learning a daily joy.',
    href: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=700',
    publishedAt: 'July 1, 2026', readingTime: '5 min read',
    author: { name: 'Varshika Jain', avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=60' },
    tags: ['Hindi', 'Games'],
  },
];

const tabs = [
  { id: 'all', label: 'View all' },
  { id: 'Phonics', label: 'Phonics' },
  { id: 'Reading', label: 'Reading' },
  { id: 'Hindi', label: 'Hindi' },
  { id: 'Parenting', label: 'Parenting' },
  { id: 'STEM', label: 'STEM' },
  { id: 'Screen Time', label: 'Screen Time' },
];

const sortOptions = [
  { id: 'recent', label: 'Most recent' },
  { id: 'popular', label: 'Most popular' },
  { id: 'shortest', label: 'Shortest read' },
];

const ITEMS_PER_PAGE = 6;

// ─── ArticleCard (Square Styling) ──────────────────────────────────────────────
const ArticleCard = ({ article, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.06 }}
    className="group flex flex-col h-full bg-white rounded-none border border-slate-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-200 cursor-pointer text-left"
  >
    {/* Thumbnail */}
    <div className="relative h-52 overflow-hidden bg-slate-100">
      <img
        src={article.thumbnailUrl}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur text-[11px] font-black text-[#C04DF7] rounded-none shadow-sm border border-white/60">
        {article.category}
      </span>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 justify-between p-6 space-y-3">
      <div className="space-y-2">
        <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{article.publishedAt}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readingTime}</span>
        </div>
        <h3 className="text-base font-black text-slate-900 leading-snug group-hover:text-[#C04DF7] transition line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs text-slate-500 font-semibold leading-relaxed line-clamp-2">{article.summary}</p>
      </div>

      {/* Author + CTA */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <img src={article.author.avatarUrl} alt={article.author.name} className="w-7 h-7 rounded-none object-cover border border-purple-200" />
          <span className="text-xs font-bold text-slate-600">{article.author.name}</span>
        </div>
        <span className="flex items-center gap-1 text-xs font-black text-[#C04DF7] group-hover:gap-2 transition-all">
          Read <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  </motion.article>
);

// ─── Pagination ────────────────────────────────────────────────────────────────
const Pagination = ({ page, totalPages, onChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-center gap-2 pt-8">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="w-10 h-10 rounded-none border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-10 h-10 rounded-none text-xs font-black transition cursor-pointer ${
            p === page
              ? 'bg-[#C04DF7] text-white shadow-md'
              : 'border border-slate-200 text-slate-600 hover:bg-purple-50 hover:text-[#C04DF7] hover:border-purple-300'
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="w-10 h-10 rounded-none border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────────────────────
export const BlogsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = activeTab === 'all'
      ? articles
      : articles.filter((a) => a.category === activeTab);

    if (sortBy === 'shortest') {
      list = [...list].sort((a, b) => parseInt(a.readingTime) - parseInt(b.readingTime));
    }
    return list;
  }, [activeTab, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleTabChange = (id) => {
    setActiveTab(id);
    setPage(1);
  };

  return (
    <div className="bg-[#FAF5F8] min-h-screen font-sans text-slate-900">

      {/* ── Hero Header ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#FDE8F0] via-[#FAF5F8] to-[#FCE6EE] border-b border-pink-100 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest block">LEARN2READ BLOG & RESOURCES</span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Phonics, Reading & Parenting Guides
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-xl mx-auto leading-relaxed">
            Expert insights, research-backed reading strategies, and practical tips designed for parents of young learners aged 3 to 12.
          </p>
        </div>
      </section>

      {/* ── Main Content Grid ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* ── Featured Article Showcase (Generous & Spacious Layout) ───────── */}
        <div className="bg-white rounded-none border border-slate-200 shadow-md overflow-hidden text-left max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 h-72 md:h-80 overflow-hidden bg-slate-100">
              <img
                src={featuredArticle.thumbnailUrl}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 p-7 sm:p-9 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="px-3.5 py-1 bg-purple-100 text-[#C04DF7] text-xs font-black rounded-none inline-block">
                  ⭐ Featured Guide
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed line-clamp-3">
                  {featuredArticle.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img src={featuredArticle.author.avatarUrl} alt={featuredArticle.author.name} className="w-8 h-8 rounded-none object-cover border border-purple-200" />
                  <div>
                    <div className="text-xs font-black text-slate-900">{featuredArticle.author.name}</div>
                    <div className="text-[10px] text-slate-400 font-bold">{featuredArticle.publishedAt} • {featuredArticle.readingTime}</div>
                  </div>
                </div>

                <button className="px-5 py-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white font-black text-xs sm:text-sm rounded-none shadow-sm flex items-center gap-2 transition cursor-pointer">
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Filter Tabs & Controls ───────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => handleTabChange(t.id)}
                className={`px-4 py-2 rounded-none text-xs font-black transition cursor-pointer ${
                  activeTab === t.id
                    ? 'bg-[#C04DF7] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-purple-50 border border-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-slate-200 text-slate-900 font-bold text-xs px-3.5 py-2 rounded-none shadow-sm cursor-pointer focus:outline-none focus:border-[#C04DF7]"
            >
              {sortOptions.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* ── Articles Grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {paginated.map((article, idx) => (
            <ArticleCard key={article.id} article={article} index={idx} />
          ))}
        </div>

        {/* ── Pagination ──────────────────────────────────────────────────── */}
        {totalPages > 1 && (
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        )}

      </div>
    </div>
  );
};
