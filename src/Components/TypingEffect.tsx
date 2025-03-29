import { useEffect, useState } from 'react';
import './Styles.scss';

const words = [
  '<React developer />',
  '<Web developer />',
  '<JavaScript developer />',
  '<Frontend engineer />',
];

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && charIndex < currentWord.length) {
      // Typing Effect
      const timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Wait for 3 seconds before deleting
      const timeout = setTimeout(() => setIsDeleting(true), 3000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      // Deleting Effect
      const timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      // Move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [charIndex, isDeleting, wordIndex]);

  return <p className="font-bold typing-effect--text">{text}|</p>;
};

export default TypingEffect;
