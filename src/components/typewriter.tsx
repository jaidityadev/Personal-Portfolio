"use client";

import {useEffect, useMemo, useState} from "react";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursor?: boolean;
}

const DEFAULT_TYPING_SPEED = 70;
const DEFAULT_DELETING_SPEED = 40;
const DEFAULT_PAUSE_DURATION = 1000;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    handleChange();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return prefersReducedMotion;
}

export default function Typewriter({
  phrases,
  typingSpeed = DEFAULT_TYPING_SPEED,
  deletingSpeed = DEFAULT_DELETING_SPEED,
  pauseDuration = DEFAULT_PAUSE_DURATION,
  className,
  cursor = true,
}: TypewriterProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayText, setDisplayText] = useState(phrases[0] ?? "");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const maxPhraseLength = useMemo(() => {
    return phrases.reduce((max, phrase) => Math.max(max, phrase.length), 0);
  }, [phrases]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(phrases[0] ?? "");
      return;
    }

    const currentPhrase = phrases[phraseIndex] ?? "";

    if (!isDeleting && displayText === currentPhrase) {
      const pauseTimeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);

      return () => window.clearTimeout(pauseTimeout);
    }

    if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = window.setTimeout(() => {
      const nextText = isDeleting
        ? currentPhrase.slice(0, displayText.length - 1)
        : currentPhrase.slice(0, displayText.length + 1);

      setDisplayText(nextText);
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [
    deletingSpeed,
    displayText,
    isDeleting,
    pauseDuration,
    phraseIndex,
    phrases,
    prefersReducedMotion,
    typingSpeed,
  ]);

  return (
    <span
      className={className ? `inline-block ${className}` : "inline-block"}
      style={{minWidth: maxPhraseLength > 0 ? `${maxPhraseLength}ch` : undefined}}
    >
      <span className="inline-block">{displayText}</span>
      {!prefersReducedMotion && cursor && <span className="typewriter-cursor">|</span>}
    </span>
  );
}