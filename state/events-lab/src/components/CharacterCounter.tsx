
import {useState} from 'react';

// types/index.ts
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}


function CharacterCounter({minWords,maxWords,targetReadingTime}:CharacterCounterProps ){
    const [text, setText] = useState<string>('');
    const wordCount = text.trim() === '' ? 0 : text.trim().length;
    const currentReadingTime = (wordCount / 200).toFixed(1);
    return(
        <div>
          <textarea value ={text} onChange={(e)=>setText(e.target.value)}
          />
          <p>Min Words: {minWords ? `${minWords} words` : 'No minimum Words Set'}</p>
          <p>Max Words: {maxWords ? `${maxWords} words` : 'Maximum Words Reached'}</p>
          <p>Est. Reading Time: ~{currentReadingTime} min</p>
          <p>Target Reading Goal: {targetReadingTime ? `${targetReadingTime} min` : 'No target set'}</p>
        </div>
    );
}

export default CharacterCounter;