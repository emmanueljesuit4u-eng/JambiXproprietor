/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Users,
  ExternalLink,
  MapPin,
  CheckCircle2,
  Sparkles,
  Link as LinkIcon,
  Copy,
  Check,
  Edit3,
  ShieldCheck,
  School,
  GraduationCap,
  X,
  AlertCircle,
  MessageCircle,
  Bookmark,
  Share2,
} from 'lucide-react';
import {
  University,
  UniversityType,
  getUniversitiesList,
  saveCustomGroupLink,
} from '../../data/nigerianUniversities';

interface UniversityConnectTabProps {
  showToast: (msg: string) => void;
}

export const UniversityConnectTab: React.FC<UniversityConnectTabProps> = ({ showToast }) => {
  const [universities, setUniversities] = useState<University[]>(() => getUniversitiesList());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [onlyWithLinks, setOnlyWithLinks] = useState(false);
  
  // Track joined squads in localStorage
  const [joinedSquadIds, setJoinedSquadIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('jambix_joined_squads');
      return saved ? JSON.parse(saved) : ['unilag', 'ui'];
    } catch {
      return ['unilag'];
    }
  });

  // Modal states
  const [selectedUniForModal, setSelectedUniForModal] = useState<University | null>(null);
  const [isFixLinkModalOpen, setIsFixLinkModalOpen] = useState(false);
  const [targetUniToFix, setTargetUniToFix] = useState<University | null>(null);
  const [inputGroupLink, setInputGroupLink] = useState('');
  const [hasCopiedLink, setHasCopiedLink] = useState(false);

  // Refresh list when custom links update
  const refreshUniversities = () => {
    setUniversities(getUniversitiesList());
  };

  const handleToggleJoin = (uni: University) => {
    const isJoined = joinedSquadIds.includes(uni.id);
    let updated: string[];
    if (isJoined) {
      updated = joinedSquadIds.filter((id) => id !== uni.id);
      showToast(`Left ${uni.acronym} Aspirants Squad.`);
    } else {
      updated = [...joinedSquadIds, uni.id];
      showToast(`🎉 Joined ${uni.acronym} (${uni.name}) Aspirants Squad! Saved offline.`);
    }
    setJoinedSquadIds(updated);
    try {
      localStorage.setItem('jambix_joined_squads', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleJoinClick = (uni: University) => {
    if (uni.groupLink && uni.groupLink.trim()) {
      // Auto-join squad
      if (!joinedSquadIds.includes(uni.id)) {
        const updated = [...joinedSquadIds, uni.id];
        setJoinedSquadIds(updated);
        try {
          localStorage.setItem('jambix_joined_squads', JSON.stringify(updated));
        } catch (e) {
          console.error(e);
        }
      }

      // Safe open url
      let url = uni.groupLink.trim();
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = `https://${url}`;
      }

      try {
        navigator.clipboard?.writeText(url);
      } catch {
        // ignore clipboard error
      }

      showToast(`Opening ${uni.acronym} Squad link! Link also copied to clipboard.`);
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // Open informative join squad dialog where link can also be fixed
      setSelectedUniForModal(uni);
    }
  };

  const handleOpenFixModal = (uni: University) => {
    setTargetUniToFix(uni);
    setInputGroupLink(uni.groupLink || '');
    setIsFixLinkModalOpen(true);
  };

  const handleSaveGroupLink = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!targetUniToFix) return;

    saveCustomGroupLink(targetUniToFix.id, inputGroupLink);
    refreshUniversities();
    setIsFixLinkModalOpen(false);
    showToast(`✅ Group link updated successfully for ${targetUniToFix.acronym}!`);
    if (selectedUniForModal?.id === targetUniToFix.id) {
      setSelectedUniForModal((prev) => (prev ? { ...prev, groupLink: inputGroupLink.trim() } : null));
    }
    setTargetUniToFix(null);
  };

  // Filter universities
  const filteredUniversities = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return universities.filter((uni) => {
      // Type filter
      if (selectedType !== 'All' && uni.type !== selectedType) {
        return false;
      }
      // Only with links filter
      if (onlyWithLinks && (!uni.groupLink || !uni.groupLink.trim())) {
        return false;
      }
      // Text search
      if (!query) return true;
      return (
        uni.name.toLowerCase().includes(query) ||
        uni.acronym.toLowerCase().includes(query) ||
        uni.state.toLowerCase().includes(query) ||
        uni.city.toLowerCase().includes(query) ||
        uni.popularCourses.some((c) => c.toLowerCase().includes(query))
      );
    });
  }, [universities, searchQuery, selectedType, onlyWithLinks]);

  // Joined universities list
  const joinedUniversities = useMemo(() => {
    return universities.filter((u) => joinedSquadIds.includes(u.id));
  }, [universities, joinedSquadIds]);

  // Stats calculation
  const totalUnis = universities.length;
  const federalCount = universities.filter((u) => u.type === 'Federal').length;
  const stateCount = universities.filter((u) => u.type === 'State').length;
  const privateCount = universities.filter((u) => u.type === 'Private').length;
  const activeLinksCount = universities.filter((u) => !!u.groupLink && u.groupLink.trim()).length;

  return (
    <div className="space-y-6">
      {/* Top Banner & Overview */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg border border-emerald-800/40">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-xs border border-emerald-400/30">
            <School className="w-3.5 h-3.5" />
            <span>Official JAMB UTME Campus Directory · {totalUnis} Institutions</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
            Connect With Nigerian University Aspirants &amp; Study Squads
          </h1>

          <p className="text-sm text-emerald-100/90 leading-relaxed font-normal">
            Find your target Federal, State, or Private institution in Nigeria. Join active WhatsApp &amp; Telegram 
            aspirant groups, verify official Post-UTME cut-off marks, discuss subject combinations, and prepare together.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                // Open fix modal with first uni or blank
                setTargetUniToFix(universities[0]);
                setInputGroupLink(universities[0]?.groupLink || '');
                setIsFixLinkModalOpen(true);
              }}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-md cursor-pointer"
            >
              <Edit3 className="w-4 h-4" />
              <span>Fix / Set University Group Links</span>
            </button>

            <button
              onClick={() => {
                showToast('Sharing UTME Universities Aspirant directory...');
                try {
                  if (navigator.share) {
                    navigator.share({
                      title: 'JambiX Nigerian Universities Aspirant Squads',
                      text: 'Join your target Nigerian university study group for JAMB 2026/2027!',
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    showToast('Direct link copied to clipboard!');
                  }
                } catch {
                  // ignore
                }
              }}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-3.5 py-2 rounded-xl text-xs transition-all border border-white/15 cursor-pointer backdrop-blur-xs"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Directory</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-6 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <div className="text-emerald-300 font-extrabold text-lg">{federalCount}</div>
            <div className="text-emerald-100/70 font-medium">Federal Universities</div>
          </div>
          <div>
            <div className="text-sky-300 font-extrabold text-lg">{stateCount}</div>
            <div className="text-sky-100/70 font-medium">State Universities</div>
          </div>
          <div>
            <div className="text-purple-300 font-extrabold text-lg">{privateCount}</div>
            <div className="text-purple-100/70 font-medium">Private Universities</div>
          </div>
          <div>
            <div className="text-amber-300 font-extrabold text-lg">{activeLinksCount} Active</div>
            <div className="text-amber-100/70 font-medium">Squad Links Ready</div>
          </div>
        </div>
      </div>

      {/* My Joined Squads Quick Drawer (if any) */}
      {joinedUniversities.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-2xs transition-colors">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                My Target University Squads ({joinedUniversities.length})
              </h3>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              Saved Offline
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {joinedUniversities.map((uni) => (
              <div
                key={uni.id}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-xs text-slate-800 dark:text-slate-200"
              >
                <span className="font-extrabold text-rose-600 dark:text-rose-400">
                  {uni.acronym}
                </span>
                <span className="hidden sm:inline text-slate-400">·</span>
                <span className="hidden sm:inline truncate max-w-[150px]">{uni.name}</span>
                <button
                  onClick={() => handleJoinClick(uni)}
                  className="ml-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 cursor-pointer"
                  title="Open Squad Link"
                >
                  Join
                </button>
                <button
                  onClick={() => handleToggleJoin(uni)}
                  className="text-slate-400 hover:text-rose-500 ml-0.5 cursor-pointer"
                  title="Leave Squad"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search & Filtering Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-2xs space-y-4 transition-colors">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by university name, acronym (e.g. UNILAG, UI, OAU, LASU, CU), state..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick link status checkbox */}
          <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700 dark:text-slate-300 select-none shrink-0 px-1">
            <input
              type="checkbox"
              checked={onlyWithLinks}
              onChange={(e) => setOnlyWithLinks(e.target.checked)}
              className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 dark:border-slate-700 cursor-pointer"
            />
            <span>With Active Group Links ({activeLinksCount})</span>
          </label>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {[
            { label: 'All Universities', value: 'All', count: totalUnis },
            { label: 'Federal Universities', value: 'Federal', count: federalCount },
            { label: 'State Universities', value: 'State', count: stateCount },
            { label: 'Private Universities', value: 'Private', count: privateCount },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedType(tab.value)}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                selectedType === tab.value
                  ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedType === tab.value
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Universities Directory Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <span>
            Showing <strong className="text-slate-900 dark:text-white">{filteredUniversities.length}</strong> of{' '}
            {totalUnis} universities
          </span>
          <span className="text-[11px]">
            Tip: Click <strong>"Join"</strong> to access study group or <strong>"Fix Link"</strong> to configure URLs.
          </span>
        </div>

        {filteredUniversities.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-3">
            <School className="w-12 h-12 text-slate-400 mx-auto stroke-[1.5]" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              No Universities Matched "{searchQuery}"
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              Try searching by alternative acronym (e.g. UNILAG, UI, OAU, FUTA, LASU, CU) or clear filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('All');
                setOnlyWithLinks(false);
              }}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredUniversities.map((uni) => {
              const isJoined = joinedSquadIds.includes(uni.id);
              const hasLink = !!uni.groupLink && uni.groupLink.trim().length > 0;

              // Type badge styles
              const typeBadgeClass =
                uni.type === 'Federal'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                  : uni.type === 'State'
                  ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800'
                  : 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';

              return (
                <div
                  key={uni.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-md transition-all group"
                >
                  <div className="space-y-3">
                    {/* Top Row: Acronym & Type */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-800 text-white tracking-wide">
                          {uni.acronym}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${typeBadgeClass}`}
                        >
                          {uni.type}
                        </span>
                      </div>

                      {/* Bookmark / Target squad indicator */}
                      <button
                        onClick={() => handleToggleJoin(uni)}
                        title={isJoined ? 'Remove from My Squads' : 'Add to My Squads'}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          isJoined
                            ? 'text-rose-600 bg-rose-50 dark:bg-rose-950/50'
                            : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <Bookmark className={`w-4 h-4 ${isJoined ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* University Name */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {uni.name}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                        <span className="truncate">
                          {uni.city}, {uni.state} State
                        </span>
                      </div>
                    </div>

                    {/* Stats & Guidelines */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-medium">
                        <Users className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{uni.aspirantCount.toLocaleString()} Aspirants</span>
                      </div>
                      <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        Cut-off: <strong className="text-slate-900 dark:text-white">{uni.cutOffMark}+</strong>
                      </div>
                    </div>

                    {/* Popular Courses Tags */}
                    <div className="flex flex-wrap gap-1 text-[10px]">
                      {uni.popularCourses.slice(0, 3).map((course) => (
                        <span
                          key={course}
                          className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded"
                        >
                          {course}
                        </span>
                      ))}
                    </div>

                    {/* Group Link Status Indicator */}
                    <div className="pt-1">
                      {hasLink ? (
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-200/60 dark:border-emerald-800/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span>WhatsApp / Telegram Squad Active</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-lg border border-amber-200/60 dark:border-amber-800/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          <span>Squad Ready (Link Pending)</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions: Join Button & Fix Link */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                    <button
                      onClick={() => handleJoinClick(uni)}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs ${
                        hasLink
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-slate-900 hover:bg-slate-800 dark:bg-rose-600 dark:hover:bg-rose-700 text-white'
                      }`}
                    >
                      {hasLink ? (
                        <>
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Join Squad</span>
                        </>
                      ) : (
                        <>
                          <Users className="w-3.5 h-3.5" />
                          <span>Join Community</span>
                        </>
                      )}
                    </button>

                    {/* Quick Link Fixer / Editor Button */}
                    <button
                      onClick={() => handleOpenFixModal(uni)}
                      title={`Configure or fix group link for ${uni.acronym}`}
                      className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* MODAL 1: Community Hub Details Modal (when user clicks Join on a university without explicit link or wants details) */}
      {selectedUniForModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                  <School className="w-3 h-3" />
                  <span>{selectedUniForModal.type} University</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  {selectedUniForModal.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {selectedUniForModal.city}, {selectedUniForModal.state} State · Cut-off {selectedUniForModal.cutOffMark}+
                </p>
              </div>
              <button
                onClick={() => setSelectedUniForModal(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Status box */}
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Aspirant Squad Group Link Pending Update</span>
              </div>
              <p className="text-xs text-amber-700 dark:text-amber-400/90 leading-relaxed">
                The direct WhatsApp/Telegram invite link for{' '}
                <strong>{selectedUniForModal.acronym}</strong> is currently being configured by the 
                administrator. You can join the General UTME Hub now, or fix in the group link below if you 
                have it!
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  handleToggleJoin(selectedUniForModal);
                  setSelectedUniForModal(null);
                }}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-rose-600 dark:hover:bg-rose-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Bookmark className="w-4 h-4" />
                <span>Save {selectedUniForModal.acronym} to My Target Squads (Offline)</span>
              </button>

              <button
                onClick={() => {
                  const channelUrl = 'https://whatsapp.com/channel/0029VbDWWdJ3gvWeRGLswJ06';
                  showToast('Opening Official JAMB WhatsApp Channel...');
                  window.open(channelUrl, '_blank', 'noopener,noreferrer');
                }}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Join Official JAMB WhatsApp Channel for Updates</span>
              </button>

              {/* Admin / Contributor link fix button */}
              <button
                onClick={() => {
                  const uni = selectedUniForModal;
                  setSelectedUniForModal(null);
                  handleOpenFixModal(uni);
                }}
                className="w-full py-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Edit3 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Fix / Paste Group Link for {selectedUniForModal.acronym} Now</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Fix / Set Group Link Modal */}
      {isFixLinkModalOpen && targetUniToFix && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">
                  Admin &amp; Community Link Manager
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Fix Group Link: {targetUniToFix.acronym}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {targetUniToFix.name}
                </p>
              </div>
              <button
                onClick={() => setIsFixLinkModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveGroupLink} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  WhatsApp or Telegram Group Invite URL
                </label>
                <div className="relative">
                  <LinkIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="url"
                    value={inputGroupLink}
                    onChange={(e) => setInputGroupLink(e.target.value)}
                    placeholder="https://chat.whatsapp.com/... or https://t.me/..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-hidden"
                  />
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">
                  Paste the WhatsApp group link, Telegram invite link, or community channel. 
                  When students click <strong>Join</strong>, they will be routed directly to this group.
                </p>
              </div>

              {/* Sample link helpers */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-[11px] space-y-1">
                <span className="font-bold text-slate-700 dark:text-slate-300">Format examples:</span>
                <div className="text-slate-500 dark:text-slate-400 font-mono text-[10px] break-all">
                  • WhatsApp: https://chat.whatsapp.com/Gabc123xyz
                  <br />• Telegram: https://t.me/{targetUniToFix.id}_aspirants_2026
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFixLinkModalOpen(false)}
                  className="flex-1 py-2 px-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-xs"
                >
                  Save Group Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
