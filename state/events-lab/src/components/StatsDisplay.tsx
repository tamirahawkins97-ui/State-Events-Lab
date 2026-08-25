

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes (e.g. 0.5 for 30 seconds)
  minWords?: number;
  maxWords?: number;
}

export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

function StatsDisplay({ stats, showReadingTime = true }: StatsDisplayProps) {
  const { characterCount, wordCount, readingTime, minWords = 25, maxWords = 100 } = stats;

  // Convert fractional minutes to MM:SS format
  const totalSeconds = Math.round(readingTime * 60);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedReadingTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  // Highlight word count in red if out of bounds
  const isInvalidWordCount = wordCount < minWords || wordCount > maxWords;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
      <div className={`grid text-center items-start ${showReadingTime ? 'grid-cols-3' : 'grid-cols-2'}`}>
        
        {/* Characters */}
        <div className="space-y-2">
          <p className="text-gray-500 text-sm font-medium">Characters</p>
          <p className="text-3xl font-semibold text-gray-800">{characterCount}</p>
        </div>

        {/* Words */}
        <div className="space-y-2">
          <p className="text-gray-500 text-sm font-medium">Words</p>
          <p className={`text-3xl font-semibold ${isInvalidWordCount && wordCount > 0 ? 'text-red-500' : 'text-gray-800'}`}>
            {wordCount}
          </p>
          <p className="text-xs text-gray-400 font-medium pt-1">
            Min: {minWords} | Max: {maxWords}
          </p>
        </div>

        {/* Reading Time (Optional) */}
        {showReadingTime && (
          <div className="space-y-2">
            <p className="text-gray-500 text-sm font-medium">Reading Time</p>
            <p className="text-3xl font-semibold text-gray-800">{formattedReadingTime}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default StatsDisplay;