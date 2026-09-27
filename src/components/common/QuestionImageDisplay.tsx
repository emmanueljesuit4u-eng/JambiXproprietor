import React, { useState } from 'react';
import { ZoomIn, X, Maximize2 } from 'lucide-react';

interface QuestionImageDisplayProps {
  imageSvg?: string;
  imageUrl?: string;
  caption?: string;
  alt?: string;
  className?: string;
}

export const QuestionImageDisplay: React.FC<QuestionImageDisplayProps> = ({
  imageSvg,
  imageUrl,
  caption,
  alt = 'Question diagram',
  className = '',
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!imageSvg && !imageUrl) return null;

  return (
    <>
      <div className={`my-3 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/90 shadow-2xs ${className}`}>
        {/* Caption & Expand Button Bar */}
        <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-200">
            <span className="inline-block w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-rose-700 dark:text-rose-400 font-extrabold">
              {caption || 'UTME Visual Diagram / Illustration'}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsZoomed(true)}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            title="Enlarge diagram"
          >
            <Maximize2 className="w-3 h-3" />
            <span>Enlarge</span>
          </button>
        </div>

        {/* Diagram Area */}
        <div
          onClick={() => setIsZoomed(true)}
          className="cursor-pointer group relative flex items-center justify-center p-2 rounded-lg bg-slate-50/80 dark:bg-slate-950/60 overflow-x-auto"
        >
          {imageSvg ? (
            <div
              className="w-full flex items-center justify-center transition-transform group-hover:scale-[1.01]"
              dangerouslySetInnerHTML={{ __html: imageSvg }}
            />
          ) : imageUrl ? (
            <img
              src={imageUrl}
              alt={alt}
              className="max-h-64 object-contain rounded-md transition-transform group-hover:scale-[1.01]"
            />
          ) : null}

          {/* Hover indicator */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 rounded-lg flex items-center justify-center transition-opacity pointer-events-none">
            <span className="bg-slate-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-md">
              <ZoomIn className="w-3 h-3" /> Click to zoom diagram
            </span>
          </div>
        </div>

        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2 text-center italic">
          Study the diagram carefully to answer the question. Tap to view full size.
        </p>
      </div>

      {/* Full-Screen Zoom Modal */}
      {isZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] p-5 shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  {caption || 'Enlarged UTME Diagram'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-50 dark:bg-slate-950/80 rounded-xl my-3">
              {imageSvg ? (
                <div
                  className="w-full max-w-2xl"
                  dangerouslySetInnerHTML={{ __html: imageSvg }}
                />
              ) : imageUrl ? (
                <img
                  src={imageUrl}
                  alt={alt}
                  className="max-h-[70vh] object-contain"
                />
              ) : null}
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
              <span>Verified JAMB Past Examination Diagram</span>
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="px-4 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:bg-slate-800 cursor-pointer transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
