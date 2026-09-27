/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * JAMB UTME Past Questions & Explanations Archive (1978 - 2025)
 * Allows candidates to browse, study, and inspect verified questions, answers,
 * and step-by-step solutions from the 5 standard textbooks:
 * 1. NEW SCHOOL PHYSICS (M.W. Anyakoha, Ph.D.)
 * 2. NEW SCHOOL CHEMISTRY (Osei Yaw Ababio)
 * 3. MODERN BIOLOGY (Sarojini T. Ramalingam, Ph.D.)
 * 4. HIDDEN FACTS IN MATHEMATICS (M.A. Otumudia)
 * 5. A-Z OF ENGLISH (B.O. Dele Ashade)
 */

import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Calendar,
  Search,
  CheckCircle2,
  BookMarked,
  Play,
  Eye,
  EyeOff,
  Filter,
  Sparkles,
  Award,
  Layers,
  HelpCircle,
  RotateCcw,
  Check,
} from 'lucide-react';
import {
  JAMB_YEARS,
  SUBJECT_CONFIGS,
  SubjectKey,
  VerifiedQuestion,
  getSubjectQuestionsForYear,
} from '../../data/verifiedTextbooks';
import { QuestionImageDisplay } from '../common/QuestionImageDisplay';

interface PastQuestionsVaultTabProps {
  onLaunchTest: (title: string, type: string, subject?: string, year?: number) => void;
  showToast: (msg: string) => void;
}

export const PastQuestionsVaultTab: React.FC<PastQuestionsVaultTabProps> = ({
  onLaunchTest,
  showToast,
}) => {
  const [selectedSubjectKey, setSelectedSubjectKey] = useState<SubjectKey>('mathematics');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Sciences' | 'Commercial' | 'Arts'>('All');
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyImages, setOnlyImages] = useState(false);
  const [revealedQuestionIds, setRevealedQuestionIds] = useState<Record<number, boolean>>({});
  const [revealAll, setRevealAll] = useState(false);

  // Available subjects filtered by category
  const visibleSubjectKeys = useMemo(() => {
    const allKeys = Object.keys(SUBJECT_CONFIGS) as SubjectKey[];
    if (selectedCategory === 'All') return allKeys;
    return allKeys.filter((k) => SUBJECT_CONFIGS[k]?.category === selectedCategory);
  }, [selectedCategory]);

  // Load questions for the selected subject and year
  const currentQuestions: VerifiedQuestion[] = useMemo(() => {
    return getSubjectQuestionsForYear(selectedSubjectKey, selectedYear);
  }, [selectedSubjectKey, selectedYear]);

  // Search and visual diagram filter
  const filteredQuestions = useMemo(() => {
    let list = currentQuestions;
    if (onlyImages) {
      list = list.filter((q) => q.hasImage || q.imageSvg || q.imageUrl);
    }
    if (!searchQuery.trim()) return list;
    const qLower = searchQuery.toLowerCase();
    return list.filter(
      (q) =>
        q.text.toLowerCase().includes(qLower) ||
        q.topic.toLowerCase().includes(qLower) ||
        q.explanation.toLowerCase().includes(qLower) ||
        Object.values(q.options).some((opt) => opt.toLowerCase().includes(qLower))
    );
  }, [currentQuestions, searchQuery, onlyImages]);

  const toggleReveal = (id: number) => {
    setRevealedQuestionIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleToggleRevealAll = () => {
    const nextState = !revealAll;
    setRevealAll(nextState);
    const updated: Record<number, boolean> = {};
    if (nextState) {
      currentQuestions.forEach((q) => {
        updated[q.id] = true;
      });
    }
    setRevealedQuestionIds(updated);
    showToast(nextState ? 'Revealed all answers and textbook citations.' : 'Hid all answers.');
  };

  const currentConfig = SUBJECT_CONFIGS[selectedSubjectKey];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Hero Banner */}
      <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl overflow-hidden border border-slate-800">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-600 text-white rounded-full text-xs font-black uppercase tracking-wider shadow-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>1978 – 2026 Complete UTME Archive (49 Years)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              JAMB Past Questions &amp; Verified Explanations Bank
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Study authentic past examination questions from 1978 to 2026 for all accredited UTME subjects across Sciences, Commercial, and Arts &amp; Humanities.
              Every answer includes step-by-step solutions with citations from standard textbooks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
            <button
              onClick={() =>
                onLaunchTest(
                  `JAMB ${selectedYear} ${currentConfig.name} Practice Exam`,
                  'archive',
                  currentConfig.name,
                  selectedYear
                )
              }
              className="px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Practice {selectedYear} {currentConfig.name} in CBT</span>
            </button>

            <button
              onClick={() =>
                onLaunchTest(
                  `Full JAMB UTME ${selectedYear} CBT Exam (180 Questions)`,
                  'jamb',
                  undefined,
                  selectedYear
                )
              }
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>Full 180 Qs Mock ({selectedYear})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Verified Textbook Authority Spotlight Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs shrink-0">
            <BookMarked className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-100 rounded text-[10px] font-black uppercase">
                Official Accredited Reference
              </span>
              <span className="text-xs text-slate-500 font-semibold">{currentConfig.name}</span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">
              {currentConfig.bookTitle} — <span className="font-semibold text-slate-600 dark:text-slate-300">{currentConfig.author}</span>
            </h3>
            <p className="text-xs text-emerald-800 dark:text-emerald-300">
              All {selectedYear} questions below are indexed with verified curriculum topics in this volume.
            </p>
          </div>
        </div>

        <button
          onClick={handleToggleRevealAll}
          className="px-4 py-2 border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-900 dark:text-emerald-200 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
        >
          {revealAll ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          <span>{revealAll ? 'Hide All Explanations' : 'Reveal All Answers & Solutions'}</span>
        </button>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {(['All', 'Sciences', 'Commercial', 'Arts'] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat === 'All' ? `All Subjects (${Object.keys(SUBJECT_CONFIGS).length})` : cat === 'Sciences' ? '🔬 Sciences' : cat === 'Commercial' ? '📊 Commercial / Social' : '🎭 Arts & Humanities'}
          </button>
        ))}
      </div>

      {/* Subject Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
        {visibleSubjectKeys.map((key) => {
          const cfg = SUBJECT_CONFIGS[key];
          if (!cfg) return null;
          const isSelected = selectedSubjectKey === key;
          return (
            <button
              key={key}
              onClick={() => {
                setSelectedSubjectKey(key);
                setRevealAll(false);
                setRevealedQuestionIds({});
              }}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-950 dark:text-rose-100 shadow-xs ring-1 ring-rose-500/50'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              <div>
                <span className="text-[9px] font-black uppercase text-slate-400 block tracking-wider">
                  {key === 'english' ? 'Compulsory' : cfg.category || 'General'}
                </span>
                <h4 className="text-xs font-bold mt-0.5 truncate">{cfg.name}</h4>
              </div>
              <div className="mt-2 text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold truncate">
                Ref: {cfg.bookTitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Year Selector & Search Controls */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Year Dropdown & Label */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider shrink-0 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-rose-600" />
              <span>Exam Year:</span>
            </span>
            <select
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(parseInt(e.target.value, 10));
                setRevealAll(false);
                setRevealedQuestionIds({});
              }}
              className="p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs cursor-pointer shadow-2xs focus:ring-2 focus:ring-rose-500/30"
            >
              <optgroup label="Recent Years (2020 - 2026)">
                {[2026, 2025, 2024, 2023, 2022, 2021, 2020].map((yr) => (
                  <option key={yr} value={yr}>
                    JAMB UTME {yr}
                  </option>
                ))}
              </optgroup>
              <optgroup label="2010 - 2019 Past Questions">
                {[2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010].map((yr) => (
                  <option key={yr} value={yr}>
                    JAMB UTME {yr}
                  </option>
                ))}
              </optgroup>
              <optgroup label="2000 - 2009 Past Questions">
                {[2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000].map((yr) => (
                  <option key={yr} value={yr}>
                    JAMB UTME {yr}
                  </option>
                ))}
              </optgroup>
              <optgroup label="1978 - 1999 Classic Archive">
                {JAMB_YEARS.filter((y) => y < 2000).map((yr) => (
                  <option key={yr} value={yr}>
                    JAMB UTME {yr} Classic
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Quick Year Shortcuts */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {[2026, 2025, 2024, 2020, 2015, 2000, 1978].map((yr) => (
              <button
                key={yr}
                type="button"
                onClick={() => {
                  setSelectedYear(yr);
                  setRevealAll(false);
                  setRevealedQuestionIds({});
                }}
                className={`px-2 py-1 text-xs rounded-lg font-bold transition-colors cursor-pointer ${
                  selectedYear === yr
                    ? 'bg-rose-600 text-white shadow-2xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${currentConfig.name} ${selectedYear} questions, topics, formulas...`}
              className="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-rose-500/30"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Visual Diagrams Only Filter Button */}
          <button
            type="button"
            onClick={() => setOnlyImages(!onlyImages)}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
              onlyImages
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <span>📊</span>
            <span>{onlyImages ? 'Diagrams Only (Active)' : 'Diagram Questions'}</span>
          </button>
        </div>

        {/* Quick Year Pill Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          {JAMB_YEARS.slice(0, 20).map((yr) => (
            <button
              key={yr}
              onClick={() => {
                setSelectedYear(yr);
                setRevealAll(false);
                setRevealedQuestionIds({});
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedYear === yr
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {yr}
            </button>
          ))}
          <span className="text-[10px] text-slate-400 px-1 shrink-0">and 28 more years back to 1978</span>
        </div>
      </div>

      {/* Questions Counter Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <div>
          Showing <strong>{filteredQuestions.length}</strong> of {currentQuestions.length} questions for{' '}
          <strong className="text-slate-900 dark:text-white">{currentConfig.name} ({selectedYear})</strong>
        </div>
        <div className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
          Ref: {currentConfig.bookTitle}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 text-xs">
            No questions matched your search query &ldquo;{searchQuery}&rdquo;. Try another topic or keyword.
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isRevealed = revealAll || revealedQuestionIds[q.id];
            return (
              <div
                key={q.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 transition-colors"
              >
                {/* Question Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-black text-xs flex items-center justify-center">
                      {q.questionNumber || q.id % 100}
                    </span>
                    <span className="px-2 py-0.5 bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 rounded font-black text-[10px]">
                      JAMB {q.year}
                    </span>
                    <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded font-semibold text-[10px]">
                      {q.subject}
                    </span>
                    <span className="text-slate-500 text-xs font-medium">
                      [{q.topic}]
                    </span>
                    {(q.hasImage || q.imageSvg || q.imageUrl) && (
                      <span className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 rounded font-black text-[10px] flex items-center gap-1">
                        <span>📊</span> Illustrated
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => toggleReveal(q.id)}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {isRevealed ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                        <span>Hide Answer</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Show Answer &amp; Solution</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Question Body */}
                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                  {q.text}
                </p>

                {/* Visual Diagram if present */}
                {(q.imageSvg || q.imageUrl) && (
                  <QuestionImageDisplay
                    imageSvg={q.imageSvg}
                    imageUrl={q.imageUrl}
                    caption={q.imageCaption}
                    alt={q.imageAlt}
                  />
                )}

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {Object.entries(q.options).map(([optKey, optVal]) => {
                    const isAnswer = isRevealed && optKey === q.answer;
                    return (
                      <div
                        key={optKey}
                        className={`p-3 rounded-xl border flex items-center gap-2.5 transition-colors ${
                          isAnswer
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-bold shadow-2xs'
                            : 'bg-slate-50/70 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                            isAnswer
                              ? 'bg-emerald-600 text-white'
                              : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600'
                          }`}
                        >
                          {optKey}
                        </span>
                        <span>{optVal}</span>
                        {isAnswer && (
                          <span className="ml-auto text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-300">
                            ✓ Correct
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Answer and Verified Textbook Reference Box */}
                {isRevealed && (
                  <div className="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 space-y-2 text-xs animate-in fade-in">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-emerald-200/80 dark:border-emerald-900/40">
                      <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-200 font-bold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Official Correct Answer: Option {q.answer}</span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-800 dark:text-emerald-300 font-semibold">
                        Verified Reference: {q.textbookRef}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-emerald-950 dark:text-emerald-100 uppercase tracking-wider block">
                        Step-by-Step Textbook Explanation:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
