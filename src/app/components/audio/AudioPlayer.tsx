"use client";

import { useState } from "react";
import { FiPlayCircle } from "react-icons/fi";

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
    audio.play().catch((err) => {
      console.error("Error playing audio:", err);
      setIsPlaying(false);
    });
  };
  return (
    <FiPlayCircle
      className={`mr-3.5 ${isPlaying ? "opacity-50 cursor-not-allowed" : ""}`}
      size={30}
      onClick={playAudio}
     
    />
  );
};

export default AudioPlayer;
