"use client";
import { Phonetic } from '@/app/model/models';
import { useState } from 'react';

interface AudioPlayerProps {
  audioUrl: string;
}

const AudioPlayer = ({ audioUrl }: AudioPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    if (!audioUrl) return null;

    const playAudio = () => {
        setIsPlaying(true);
        const audio = new Audio(audioUrl);
        audio.onended = () => setIsPlaying(false);
        audio.play().catch(err => {
          console.error('Error playing audio:', err);
          setIsPlaying(false);
        });
      };
  return (
    <button
      onClick={playAudio}
      disabled={isPlaying}
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      {isPlaying ? "Playing..." : "Play Audio"}
    </button>

  )
}

export default AudioPlayer