// CharacterCounter.tsx
import { useState } from 'react';
import TextInput from './TextInput';
import StatsDisplay from './StatsDisplay';

export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
}

function CharacterCounter({ minWords = 25, maxWords = 100 }: CharacterCounterProps) {
  const [text, setText] = useState<string>('');

  // Callback function to receive text from TextInput child
  const handleTextChange = (incomingText: string) => {
    setText(incomingText);
  };

  // Real-time calculations based on state received from child
  const charCount = text.length;
  const trimmedText = text.trim();
  const wordCount = trimmedText === '' ? 0 : trimmedText.split(/\s+/).length;
  const readingTime = wordCount / 250; // in minutes

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 opacity-85">
      {/* 1. Pass callback function to TextInput child */}
      <TextInput onTextChange={handleTextChange} />

      {/* 2. Declare and render StatsDisplay child component */}
      <StatsDisplay 
        stats={{
          characterCount: charCount,
          wordCount: wordCount,
          readingTime: readingTime,
          minWords: minWords,
          maxWords: maxWords,
        }}
        showReadingTime={true}
        />
    </div>
  );
}

export default CharacterCounter;