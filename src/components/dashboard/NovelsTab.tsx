/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  BookOpen,
  Users,
  Award,
  Bookmark,
  CheckCircle2,
  ChevronRight,
  Play,
  Sparkles,
  HelpCircle,
  Clock,
  Layers,
  Search,
  Quote,
  Flame,
} from 'lucide-react';
import {
  JAMB_NOVELS,
  NOVEL_EXAM_QUESTIONS,
  NovelDetails,
} from '../../data/jambNovelsData';

interface NovelsTabProps {
  onLaunchTest: (title: string, type: string, subject?: string, year?: number) => void;
  showToast: (msg: string) => void;
}

export const NovelsTab: React.FC<NovelsTabProps> = ({ onLaunchTest, showToast }) => {
  const [selectedNovelId, setSelectedNovelId] = useState<string>('the-lekki-headmaster');
  const [activeSection, setActiveSection] = useState<'summary' | 'characters' | 'chapters' | 'questions'>('summary');
  const [selectedChapterNum, setSelectedChapterNum] = useState<number>(1);
  const [searchCharacter, setSearchCharacter] = useState<string>('');
  const [revealedAnswerIds, setRevealedAnswerIds] = useState<Set<number>>(new Set());

  const activeNovel: NovelDetails =
    JAMB_NOVELS.find((n) => n.id === selectedNovelId) || JAMB_NOVELS[0];

  const novelQuestions = NOVEL_EXAM_QUESTIONS.filter(
    (q) => q.novel.toLowerCase() === activeNovel.title.toLowerCase()
  );

  const toggleAnswer = (id: number) => {
    setRevealedAnswerIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredCharacters = activeNovel.characters.filter(
    (c) =>
      c.name.toLowerCase().includes(searchCharacter.toLowerCase()) ||
      c.role.toLowerCase().includes(searchCharacter.toLowerCase()) ||
      c.description.toLowerCase().includes(searchCharacter.toLowerCase())
  );

  const activeChapter =
    activeNovel.chapters.find((c) => c.chapterNumber === selectedChapterNum) ||
    activeNovel.chapters[0];

  return (
    <div className="space-y-6">
      {/* Top Banner: Green Horizontal Hero */}
      <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6 bg-gradient-to-r from-[#047857] via-[#059669] to-[#065f46] text-white shadow-xs border border-emerald-600/40">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-900/70 text-emerald-200 border border-emerald-400/30">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Official JAMB UTME Prescribed Novels</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
              Master the Compulsory Novels &amp; Characters
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
              JAMB tests 10 to 15 questions in Use of English strictly on the prescribed novels. Study full chapter-by-chapter summaries, in-depth character analyses, and authentic UTME exam questions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() =>
                onLaunchTest(
                  `JAMB Compulsory Novel Drills: "${activeNovel.title}"`,
                  'novel',
                  'Use of English'
                )
              }
              className="px-4 py-2.5 bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold text-xs rounded-xl shadow-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-emerald-900" />
              <span>Practice {activeNovel.title} CBT</span>
            </button>
          </div>
        </div>
      </div>

      {/* Novel Selector Bar (The Lekki Headmaster, The Life Changer, Sweet Sixteen) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
        {JAMB_NOVELS.map((novel) => {
          const isSelected = selectedNovelId === novel.id;
          return (
            <button
              key={novel.id}
              onClick={() => {
                setSelectedNovelId(novel.id);
                setSelectedChapterNum(1);
                setActiveSection('summary');
                showToast(`Switched to: ${novel.title}`);
              }}
              className={`py-3 px-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all cursor-pointer ${
                isSelected
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <div className="text-left min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="block truncate font-bold">{novel.title}</span>
                  {novel.id === 'the-lekki-headmaster' && (
                    <span className={`text-[9px] font-black px-1.5 py-0.5 rounded uppercase shrink-0 ${isSelected ? 'bg-emerald-900 text-emerald-200' : 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'}`}>
                      2025 UTME
                    </span>
                  )}
                </div>
                <span className={`text-[10px] block truncate font-normal ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                  By {novel.author}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Sub Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200 dark:border-slate-800">
        {[
          { id: 'summary', label: 'Overview & Themes', icon: Layers },
          { id: 'characters', label: `Major Characters (${activeNovel.characters.length})`, icon: Users },
          { id: 'chapters', label: `Chapter Summaries (${activeNovel.chapters.length})`, icon: BookOpen },
          { id: 'questions', label: `Exam Questions (${novelQuestions.length})`, icon: HelpCircle },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* SECTION 1: Overview & Themes */}
      {activeSection === 'summary' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                    {activeNovel.jambUsage}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                    {activeNovel.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Written by <strong className="text-slate-800 dark:text-slate-200">{activeNovel.author}</strong>
                  </p>
                </div>

                <button
                  onClick={() =>
                    onLaunchTest(
                      `JAMB Novel CBT: ${activeNovel.title}`,
                      'novel',
                      'Use of English'
                    )
                  }
                  className="px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Start Practice</span>
                </button>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Synopsis &amp; Core Plot
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {activeNovel.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Setting &amp; Cultural Context
                </h4>
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeNovel.setting}
                </div>
              </div>
            </div>

            {/* Central Themes Grid */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-4">
              <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Flame className="w-4 h-4 text-emerald-600" />
                <span>Major Themes Frequently Tested by JAMB</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeNovel.centralThemes.map((theme, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl border border-emerald-200/80 dark:border-emerald-900/40 bg-emerald-50/50 dark:bg-emerald-950/20 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      {theme}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Rail: Quick Actions & Chapter Shortcuts */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-2xs space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Chapter Directory
              </h4>
              <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1">
                {activeNovel.chapters.map((ch) => (
                  <button
                    key={ch.chapterNumber}
                    onClick={() => {
                      setSelectedChapterNum(ch.chapterNumber);
                      setActiveSection('chapters');
                    }}
                    className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between text-xs transition-all cursor-pointer ${
                      selectedChapterNum === ch.chapterNumber
                        ? 'bg-emerald-700 text-white font-bold'
                        : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="min-w-0 pr-2">
                      <span className="font-bold block">
                        Chapter {ch.chapterNumber}
                      </span>
                      <span className="truncate block opacity-90 text-[11px]">
                        {ch.title}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>JAMB UTME Scoring Tip</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                In JAMB Use of English, questions 11 to 20 are strictly based on the prescribed novel. Reading the character quotes and chapter summaries guarantees a free 15–20 marks in your overall UTME aggregate.
              </p>
              <button
                onClick={() =>
                  onLaunchTest(
                    `JAMB Compulsory Novel Drills: "${activeNovel.title}"`,
                    'novel',
                    'Use of English'
                  )
                }
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Take Timed 10-Question Novel Drill
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: Major Characters */}
      {activeSection === 'characters' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                Major Characters &amp; Roles in &ldquo;{activeNovel.title}&rdquo;
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Detailed personality, pivotal actions, and specific JAMB exam significance for each character.
              </p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchCharacter}
                onChange={(e) => setSearchCharacter(e.target.value)}
                placeholder="Search character name..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCharacters.map((char) => (
              <div
                key={char.name}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 flex flex-col justify-between hover:border-emerald-300 dark:hover:border-emerald-700 transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-black text-slate-900 dark:text-white">
                        {char.name}
                      </h4>
                      <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                        {char.role}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {char.description}
                  </p>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Pivotal Actions in the Novel:
                    </span>
                    <ul className="space-y-1">
                      {char.keyActions.map((act, i) => (
                        <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-emerald-600 font-bold shrink-0">•</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 bg-emerald-50/40 dark:bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                  <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wide block">
                    JAMB Exam Tip:
                  </span>
                  <p className="text-[11px] text-emerald-900 dark:text-emerald-200 leading-snug mt-0.5">
                    {char.examSignificance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: Chapter-by-Chapter Summaries */}
      {activeSection === 'chapters' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chapter Selector Sidebar */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
              Select Chapter to Read:
            </h4>
            <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
              {activeNovel.chapters.map((ch) => {
                const isSelected = selectedChapterNum === ch.chapterNumber;
                return (
                  <button
                    key={ch.chapterNumber}
                    onClick={() => setSelectedChapterNum(ch.chapterNumber)}
                    className={`w-full p-3 rounded-xl text-left flex items-center justify-between text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-700 text-white font-bold shadow-xs'
                        : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div className="min-w-0 pr-2">
                      <span className="font-bold block">
                        Chapter {ch.chapterNumber}
                      </span>
                      <span className="truncate block opacity-90 text-[11px]">
                        {ch.title}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chapter Content Canvas */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs space-y-5">
              <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                  Chapter {activeChapter.chapterNumber} of {activeNovel.chapters.length}
                </span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  {activeChapter.title}
                </h3>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Detailed Chapter Summary:
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal whitespace-pre-line">
                  {activeChapter.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Key Plot Events to Remember for UTME:
                </h4>
                <div className="space-y-2">
                  {activeChapter.keyEvents.map((evt, i) => (
                    <div
                      key={i}
                      className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{evt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vital Quotes from Chapter */}
              {activeChapter.vitalExamQuotes && activeChapter.vitalExamQuotes.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Key Character Quote &amp; Context:
                  </h4>
                  <div className="space-y-2.5">
                    {activeChapter.vitalExamQuotes.map((vq, i) => (
                      <div
                        key={i}
                        className="p-3.5 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800/50 space-y-1.5"
                      >
                        <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                          <Quote className="w-3.5 h-3.5" />
                          <span>&ldquo;{vq.quote}&rdquo;</span>
                        </div>
                        <div className="text-[11px] text-slate-600 dark:text-slate-400 pl-5">
                          — Spoken by <strong className="text-slate-900 dark:text-white">{vq.speaker}</strong> ({vq.context})
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  disabled={selectedChapterNum <= 1}
                  onClick={() => setSelectedChapterNum((prev) => Math.max(1, prev - 1))}
                  className="px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                >
                  ← Previous Chapter
                </button>
                <button
                  disabled={selectedChapterNum >= activeNovel.chapters.length}
                  onClick={() => setSelectedChapterNum((prev) => Math.min(activeNovel.chapters.length, prev + 1))}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                >
                  Next Chapter →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: Practice Exam Questions */}
      {activeSection === 'questions' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                Authentic UTME Novel Practice Questions
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                These questions match JAMB examination standards for &ldquo;{activeNovel.title}&rdquo;.
              </p>
            </div>

            <button
              onClick={() =>
                onLaunchTest(
                  `JAMB Compulsory Novel Drills: "${activeNovel.title}"`,
                  'novel',
                  'Use of English'
                )
              }
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Launch Timed CBT Mode</span>
            </button>
          </div>

          <div className="space-y-3.5">
            {novelQuestions.map((q, idx) => {
              const isAnswerShown = revealedAnswerIds.has(q.id);
              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                      Question {idx + 1} · Chapter {q.chapter}
                    </span>
                    <button
                      onClick={() => toggleAnswer(q.id)}
                      className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer"
                    >
                      {isAnswerShown ? 'Hide Answer' : 'Show Answer & Explanation'}
                    </button>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {q.question}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                      const isCorrect = isAnswerShown && opt === q.answer;
                      return (
                        <div
                          key={opt}
                          className={`p-2.5 rounded-xl border text-xs flex items-center gap-2 transition-all ${
                            isCorrect
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-bold'
                              : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 ${
                              isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {opt}
                          </span>
                          <span>{q.options[opt]}</span>
                        </div>
                      );
                    })}
                  </div>

                  {isAnswerShown && (
                    <div className="p-3 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs space-y-1">
                      <div className="font-bold text-emerald-800 dark:text-emerald-300">
                        Correct Answer: Option {q.answer} ({q.options[q.answer]})
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-snug">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
