'use client';

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  className?: string;
  duration?: number;
}

export default function TypingAnimation({ 
  text, 
  className,
  duration = 3500 
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, duration / text.length);

    return () => clearInterval(timer);
  }, [text, duration]);

  return (
    <span 
      className={cn(
        "typing-animation",
        isComplete && "border-r-transparent",
        className
      )}
      style={{
        borderRight: isComplete ? 'none' : '2px solid #3b82f6',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        borderRightColor: isComplete ? 'transparent' : '#3b82f6',
        animation: isComplete ? 'none' : 'blink 1s infinite',
        background: 'linear-gradient(135deg, #3b82f6 0%, #ef4444 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}
    >
      {displayedText}
    </span>
  );
}
