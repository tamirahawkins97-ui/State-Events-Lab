// TextInput.tsx
import { useState } from 'react';

export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

function TextInput({ 
  placeholder = "Start typing your content here...", 
  initialValue = "", 
  onTextChange 
}: TextInputProps) {
  const [text, setText] = useState<string>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText); // Pass current text up to parent
  };

  return (
    <div className="w-full">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        rows={6}
        className="p-4 pr-16 pb-16 w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 placeholder-gray-500 shadow-lg resize-y bg-[url('https://wallpapers.com/images/hd/hello-kitty-and-friends-1279-x-946-wallpaper-7hceql6iga25anbh.jpg')] bg-contain"
      />
    </div>
  );
}

export default TextInput;