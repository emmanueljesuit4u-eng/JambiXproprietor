/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Award,
  Layers,
  FileText,
  Play,
  HelpCircle,
  Lightbulb,
  BookMarked,
  Filter,
  Check,
  CheckCheck,
  X,
  ExternalLink,
  Book,
} from 'lucide-react';
import {
  JAMB_SYLLABUS_DATA,
  JambSubjectSyllabus,
  SubjectCategory,
} from '../../data/jambSyllabus';
import {
  VERIFIED_TEXTBOOKS,
  VerifiedTextbook,
  getVerifiedBookForSubject,
} from '../../data/verifiedTextbooks';

interface StudySyllabusTabProps {
  onLaunchTest: (title: string, type: string) => void;
  showToast: (msg: string) => void;
}

export const StudySyllabusTab: React.FC<StudySyllabusTabProps> = ({
  onLaunchTest,
  showToast,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Track open subject accordion (default to 'english' open)
  const [expandedSubjectId, setExpandedSubjectId] = useState<string | null>('english');

  // Track modal for viewing detailed verified textbook chapters & page index
  const [selectedBookForModal, setSelectedBookForModal] = useState<VerifiedTextbook | null>(null);

  // Track mastered topics in localStorage
  const [masteredTopics, setMasteredTopics] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('jambix_mastered_syllabus_topics');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleTopicMastery = (topicKey: string, topicName: string) => {
    const updated = {
      ...masteredTopics,
      [topicKey]: !masteredTopics[topicKey],
    };
    setMasteredTopics(updated);
    try {
      localStorage.setItem('jambix_mastered_syllabus_topics', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    if (!masteredTopics[topicKey]) {
      showToast(`🎯 Marked "${topicName.slice(0, 30)}..." as mastered!`);
    }
  };

  // Helper to get module verified textbook citation (strictly textbook reference)
  const getModuleCitation = (subjectId: string, _modIdx: number): string | null => {
    const book = getVerifiedBookForSubject(subjectId);
    if (book) {
      return `${book.bookTitle} by ${book.author}`;
    }
    return null;
  };

  // Filter subjects based on search query and category
  const filteredSubjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return JAMB_SYLLABUS_DATA.filter((sub) => {
      // Category filter
      if (selectedCategory !== 'All' && sub.category !== selectedCategory) {
        return false;
      }
      // Query filter
      if (!query) return true;
      const inName = sub.name.toLowerCase().includes(query);
      const inTextbooks = sub.recommendedTextbooks.some((tb) =>
        tb.toLowerCase().includes(query)
      );
      const inModules = sub.modules.some(
        (m) =>
          m.title.toLowerCase().includes(query) ||
          m.topics.some((t) => t.toLowerCase().includes(query)) ||
          m.objectives.some((o) => o.toLowerCase().includes(query))
      );
      return inName || inTextbooks || inModules;
    });
  }, [searchQuery, selectedCategory]);

  // Overall statistics
  const totalSubjectsCount = JAMB_SYLLABUS_DATA.length;
  const totalTopicsCount = JAMB_SYLLABUS_DATA.reduce(
    (acc, sub) => acc + sub.modules.reduce((mAcc, m) => mAcc + m.topics.length, 0),
    0
  );
  const totalMasteredCount = Object.values(masteredTopics).filter(Boolean).length;
  const overallPercentage = Math.round((totalMasteredCount / (totalTopicsCount || 1)) * 100);

  const [bookCategory, setBookCategory] = useState<'All' | 'Sciences' | 'Commercial' | 'Arts'>('All');

  const displayBooks = useMemo(() => {
    const allBooks = Object.values(VERIFIED_TEXTBOOKS);
    if (bookCategory === 'All') return allBooks;
    return allBooks.filter((b) => b.category === bookCategory);
  }, [bookCategory]);

  return (
    <div className="space-y-6">
      {/* Top Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-indigo-900/50">
        <div className="absolute right-0 top-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-rose-500/20 text-rose-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-xs border border-rose-400/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Official JAMB IBASS Directory · All {totalSubjectsCount} UTME Subjects</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
            Complete Updated JAMB UTME Syllabus (2026/2027)
          </h1>

          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Directly mapped to the Joint Admissions and Matriculation Board curriculum. 
            All explanations and citations are verified against the 5 primary accredited textbooks: 
            <strong> NEW SCHOOL PHYSICS</strong>, <strong>NEW SCHOOL CHEMISTRY</strong>, <strong>MODERN BIOLOGY</strong>, 
            <strong> HIDDEN FACTS IN MATHEMATICS</strong>, and <strong>A-Z OF ENGLISH</strong>.
          </p>

          {/* Quick Progress Bar */}
          <div className="pt-3 max-w-md">
            <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
              <span className="text-rose-200">Your Study Progress</span>
              <span className="text-white font-mono font-bold">
                {totalMasteredCount} / {totalTopicsCount} Topics ({overallPercentage}%)
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-rose-500 to-amber-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.max(0, overallPercentage))}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Standard Authority Textbooks Showcase */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-2xs space-y-3.5 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 rounded-md">
                <BookMarked className="w-4 h-4" />
              </span>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Official Verified Standard Authority Textbooks
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              All question explanations and citations strictly ground in official JAMB accredited textbooks across Sciences, Commercial, and Arts &amp; Languages.
            </p>
          </div>
          <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 px-2.5 py-1 rounded-lg self-start sm:self-auto">
            100% Accredited Sources
          </span>
        </div>

        {/* Textbook Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {(['All', 'Sciences', 'Commercial', 'Arts'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setBookCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                bookCategory === cat
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat === 'All' ? `All Textbooks (${Object.keys(VERIFIED_TEXTBOOKS).length})` : cat === 'Sciences' ? '🔬 Science Textbooks' : cat === 'Commercial' ? '📊 Commercial Textbooks' : '🎭 Arts & Language Books'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {displayBooks.map((book) => (
            <div
              key={book.subjectKey}
              className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 bg-slate-50/70 dark:bg-slate-800/40 flex flex-col justify-between transition-all group shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[10px] font-black uppercase text-emerald-800 dark:text-emerald-300 tracking-wider">
                    {book.subjectName}
                  </span>
                  <span className="text-[9px] bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold px-1.5 py-0.2 rounded-sm">
                    Verified
                  </span>
                </div>
                <h3 className="text-xs font-black text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                  {book.bookTitle}
                </h3>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium mt-1">
                  {book.author}
                </p>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-0.5">
                  {book.coreChapters.length} Curriculum Modules Covered
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedBookForModal(book);
                  }}
                  className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                >
                  <Layers className="w-3 h-3" />
                  <span>Topics Guide</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setExpandedSubjectId(book.subjectKey);
                    setSearchQuery(book.subjectName);
                  }}
                  className="text-[11px] font-bold text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 cursor-pointer"
                >
                  Syllabus →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-2xs space-y-4 transition-colors">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search syllabus by subject, topic (e.g. Calculus, Novel, Genetics, Elasticity), textbook..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-rose-500/30 focus:border-rose-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer text-xs"
              >
                ✕
              </button>
            )}
          </div>

          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">
            Showing <strong className="text-slate-900 dark:text-white">{filteredSubjects.length}</strong> of{' '}
            {totalSubjectsCount} Subjects
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {[
            { label: 'All (25)', value: 'All' },
            { label: 'Compulsory', value: 'Compulsory' },
            { label: 'Sciences', value: 'Sciences' },
            { label: 'Social Sciences & Commercial', value: 'Social Sciences / Commercial' },
            { label: 'Arts & Humanities', value: 'Arts & Humanities' },
            { label: 'Languages', value: 'Languages' },
            { label: 'Vocational & Technical', value: 'Vocational & Technical' },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Syllabus Subjects Accordion & Cards List */}
      <div className="space-y-4">
        {filteredSubjects.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-3">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto stroke-[1.5]" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              No Syllabus Matched "{searchQuery}"
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              Try searching with a broader topic keyword like "Mechanics", "Algebra", "Constitution", or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredSubjects.map((subject) => {
            const isExpanded = expandedSubjectId === subject.id;
            
            // Count total topics for this subject and how many mastered
            const allSubjectTopics = subject.modules.flatMap((m) => m.topics);
            const totalInSubject = allSubjectTopics.length;
            const masteredInSubject = allSubjectTopics.filter(
              (t) => masteredTopics[`${subject.id}_${t}`]
            ).length;
            const subjectPct = Math.round((masteredInSubject / (totalInSubject || 1)) * 100);

            return (
              <div
                key={subject.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs transition-colors"
              >
                {/* Accordion Header */}
                <div
                  onClick={() => setExpandedSubjectId(isExpanded ? null : subject.id)}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors select-none"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 font-black text-sm ${
                        subject.compulsory
                          ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/60'
                          : 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/60'
                      }`}
                    >
                      <BookMarked className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-black text-slate-900 dark:text-white">
                          {subject.name}
                        </h3>
                        {subject.compulsory && (
                          <span className="text-[10px] font-black uppercase bg-rose-500 text-white px-2 py-0.5 rounded-full">
                            Compulsory
                          </span>
                        )}
                        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md hidden sm:inline">
                          {subject.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                        <span>{subject.modules.length} Modules</span>
                        <span>·</span>
                        <span>{totalInSubject} Sub-Topics</span>
                        <span>·</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                          {masteredInSubject}/{totalInSubject} Mastered ({subjectPct}%)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Progress bar & Expand Icon */}
                  <div className="flex items-center gap-4 self-end sm:self-center">
                    <div className="hidden sm:block w-32">
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-emerald-500 h-full rounded-full transition-all"
                          style={{ width: `${subjectPct}%` }}
                        ></div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Accordion Content Details */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 border-t border-slate-100 dark:border-slate-800 space-y-6 bg-slate-50/50 dark:bg-slate-900/40 animate-in fade-in duration-200">
                    {/* Verified Standard Authority Reference Banner for the 5 Core Subjects */}
                    {(() => {
                      const verifiedBook = getVerifiedBookForSubject(subject.id);
                      if (!verifiedBook) return null;
                      return (
                        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
                          <div className="flex items-start sm:items-center gap-3">
                            <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
                              <BookMarked className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                                  Official Verified Authority
                                </span>
                                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                                  {verifiedBook.publisher}
                                </span>
                              </div>
                              <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-1">
                                {verifiedBook.bookTitle} — <span className="font-semibold text-slate-600 dark:text-slate-300">{verifiedBook.author}</span>
                              </h4>
                              <p className="text-xs text-emerald-800 dark:text-emerald-300 mt-0.5">
                                Primary accredited syllabus reference. All exam simulations refer to verified topics in this book.
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setSelectedBookForModal(verifiedBook)}
                            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs shrink-0 self-stretch sm:self-auto justify-center"
                          >
                            <Layers className="w-3.5 h-3.5" />
                            <span>View Accredited Topics</span>
                          </button>
                        </div>
                      );
                    })()}

                    {/* Key Exam Tips & Shortcut Advice */}
                    {subject.keyExamTips.length > 0 && (
                      <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-300">
                          <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                          <span>JAMB IBASS Examiner's Key Insights for {subject.name}</span>
                        </div>
                        <ul className="text-xs text-amber-800 dark:text-amber-300/90 space-y-1 list-disc list-inside">
                          {subject.keyExamTips.map((tip, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Verified Recommended Textbooks Section */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Accredited JAMB Textbooks &amp; References</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {subject.recommendedTextbooks.map((tb, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 text-xs text-slate-800 dark:text-slate-200 flex items-start gap-2 shadow-2xs"
                          >
                            <FileText className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{tb}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Modules & Subtopics Breakdown */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Detailed Modules &amp; Sub-Topics Breakdown</span>
                      </h4>

                      <div className="space-y-4">
                        {subject.modules.map((mod, modIdx) => {
                          const moduleCitation = getModuleCitation(subject.id, modIdx);
                          return (
                            <div
                              key={modIdx}
                              className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-4 sm:p-5 space-y-3"
                            >
                              <div className="flex items-center justify-between">
                                <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                                  {mod.title}
                                </h5>
                                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                                  {mod.topics.length} topics
                                </span>
                              </div>

                              {/* Verified Module Citation */}
                              {moduleCitation && (
                                <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50/80 dark:bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-200/80 dark:border-emerald-800/60">
                                  <BookMarked className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                  <span className="leading-tight">
                                    <strong className="text-emerald-900 dark:text-emerald-200">Verified Reference:</strong>{' '}
                                    {moduleCitation}
                                  </span>
                                </div>
                              )}

                              {/* Core Objectives */}
                              {mod.objectives.length > 0 && (
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1">
                                  <span className="font-bold text-slate-700 dark:text-slate-300">
                                    Learning Expectations:
                                  </span>
                                  {mod.objectives.map((obj, oIdx) => (
                                    <div key={oIdx} className="flex items-start gap-1.5">
                                      <span className="text-emerald-500 font-bold">•</span>
                                      <span>{obj}</span>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Topics with Interactive Mastery Checkbox */}
                              <div className="space-y-2 pt-1">
                                {mod.topics.map((topic, tIdx) => {
                                  const topicKey = `${subject.id}_${topic}`;
                                  const isMastered = !!masteredTopics[topicKey];

                                  return (
                                    <div
                                      key={tIdx}
                                      onClick={() => toggleTopicMastery(topicKey, topic)}
                                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                                        isMastered
                                          ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/80 text-emerald-900 dark:text-emerald-200'
                                          : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2.5 text-xs font-medium">
                                        {isMastered ? (
                                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                        ) : (
                                          <Circle className="w-4 h-4 text-slate-400 shrink-0" />
                                        )}
                                        <span className={isMastered ? 'line-through text-slate-500 dark:text-slate-400' : ''}>
                                          {topic}
                                        </span>
                                      </div>

                                      <span
                                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                          isMastered
                                            ? 'bg-emerald-200/80 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300'
                                            : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                      >
                                        {isMastered ? 'Mastered' : 'Mark Done'}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Launch Subject Test Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200/60 dark:border-slate-700/60">
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Ready to evaluate your knowledge in <strong>{subject.name}</strong>?
                      </div>
                      <button
                        onClick={() =>
                          onLaunchTest(`${subject.name} JAMB UTME Simulator Exam`, 'general')
                        }
                        className="w-full sm:w-auto px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Practice {subject.name} CBT Questions</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Verified Textbook Chapters & Citations Modal */}
      {selectedBookForModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh] transition-colors">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between bg-slate-50/80 dark:bg-slate-900/80">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs font-black">
                  <BookMarked className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-300/60 dark:border-emerald-700/60">
                      Verified Standard Authority
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      {selectedBookForModal.subjectName}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mt-1">
                    {selectedBookForModal.bookTitle}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    By {selectedBookForModal.author} · {selectedBookForModal.publisher} ({selectedBookForModal.edition})
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBookForModal(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Chapter List */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
              <div className="p-3.5 bg-emerald-50/90 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200/90 dark:border-emerald-900/60 text-xs text-emerald-950 dark:text-emerald-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold">Official JAMB UTME Accredited Reference Book:</span>
                  <p className="text-emerald-900/90 dark:text-emerald-300/90 leading-relaxed font-normal">
                    This textbook is the primary standard authority for {selectedBookForModal.subjectName}. All CBT practice drill questions and explanations refer directly to the accredited topics listed below.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Accredited Curriculum Topics</span>
                </h4>

                <div className="space-y-2.5">
                  {selectedBookForModal.coreChapters.map((ch, chIdx) => (
                    <div
                      key={ch.chapter || chIdx}
                      className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
                            Topic Area
                          </span>
                          <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                            {ch.title}
                          </h5>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {ch.topics.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-medium bg-white dark:bg-slate-700/80 border border-slate-200/80 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-900/50">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Cited in all {selectedBookForModal.subjectName} test explanations
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedBookForModal(null)}
                  className="w-full sm:w-auto px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl cursor-pointer transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const subName = selectedBookForModal.subjectName;
                    setSelectedBookForModal(null);
                    onLaunchTest(`${subName} UTME Drill (Verified ${selectedBookForModal.bookTitle})`, 'general');
                  }}
                  className="w-full sm:w-auto px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl cursor-pointer transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Practice {selectedBookForModal.subjectName} CBT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
