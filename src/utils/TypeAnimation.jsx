import { useState, useEffect } from "react";

const TypinAnimation = () => {
  const text = "EMPLETE"; 
  const [displayText, setDisplayText] = useState("");
  const typingSpeed = 200;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0; 
        setDisplayText("");
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return <div>{displayText}</div>;
};

export default TypinAnimation;
