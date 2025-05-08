import { useEffect, useState } from "react";

function TypingText({ text_before, text_highlight, text_after, speed = 100 }) {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [typingClass, setTypingClass] = useState(true);

  const fullText = text_before + text_highlight + text_after;
  const highlightStart = text_before.length;
  const highlightEnd = text_before.length + text_highlight.length;

  useEffect(() => {
    if (done) {
      const timeout = setTimeout(() => {
        setTypingClass(false);
      }, 500);
      return () => clearTimeout(timeout); // cleanup if component unmounts
    }
  }, [done]);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [index, fullText.length, speed]);

  const before = fullText.slice(0, Math.min(index, highlightStart));
  const highlight = index > highlightStart
    ? fullText.slice(highlightStart, Math.min(index, highlightEnd))
    : '';
  const after = index > highlightEnd
    ? fullText.slice(highlightEnd, index)
    : '';

  return (
    <div style={{minHeight: '1.3em'}}>
      {before}
      {highlight && (
        <strong
          className={typingClass ? "typing-text" : undefined}
          style={!done ? { color: '#ff8000' } : undefined}
        >
          {highlight}
        </strong>
      )}
      {after}
    </div>
  );
}

export default TypingText;