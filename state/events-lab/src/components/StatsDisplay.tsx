
// types/index.ts
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}
 
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}


function StatsDisplay(){
    return(
        <div>

        </div>
    )
}

export default StatsDisplay;