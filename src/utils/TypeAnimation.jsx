import { useState, useEffect } from "react";

const TypinAnimation = () => {
  const text = "EMPLETE"; // Replace with your desired text
  const [displayText, setDisplayText] = useState("");
  const typingSpeed = 200; // Adjust the typing speed as needed (in milliseconds)

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0; // Reset to the beginning of the text
        setDisplayText("");
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return <div>{displayText}</div>;
};

export default TypinAnimation;
