export function initTypewriter() {
  const typewriterSpan = document.getElementById('typewriter-text');
  if (typewriterSpan) {
    const words = ["Intelligent.", "Verified.", "Unstoppable."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typewriterSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typewriterSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 120;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 1800; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 600; // Pause before starting next word
      }

      setTimeout(type, typingSpeed);
    }

    // Start typewriter loop
    setTimeout(type, 800);
  }
}
