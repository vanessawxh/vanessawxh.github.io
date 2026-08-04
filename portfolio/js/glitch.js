/* ============================================================
   GLITCH.JS — punctuation dividers + scramble-reveal headings
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  fillAsciiStrips();
  initScramble(reducedMotion);
});

const PATTERNS = {
  sparkle: 'ᐟ.⭑‧°𖦹｡ ⋆⁺₊⋆ ｡𖦹°‧⭑.ᐟ ⋆⁺₊⋆ ',
};

function repeatToFill(str, times){
  let out = '';
  for(let i=0; i<times; i++) out += str;
  return out;
}

/* ---------- ASCII strip dividers ---------- */
function fillAsciiStrips(){
  document.querySelectorAll('.ascii-strip').forEach(el => {
    const kind = el.dataset.pattern || 'sparkle';
    const pattern = PATTERNS[kind] || PATTERNS.sparkle;
    el.textContent = repeatToFill(pattern, 120);
  });
}

/* ---------- scramble-reveal on scroll into view ---------- */
function scrambleReveal(el){
  const original = el.textContent;
  const scrambleChars = '!<>-_\\/[]{}—=+*^?#~';
  const length = original.length;
  let frame = 0;

  function step(){
    let output = '';
    for(let i = 0; i < length; i++){
      if(original[i] === ' '){ output += ' '; continue; }
      if(i < frame){ output += original[i]; }
      else { output += scrambleChars[Math.floor(Math.random() * scrambleChars.length)]; }
    }
    el.textContent = output;
    if(frame < length){
      frame += Math.max(1, length / 24);
      requestAnimationFrame(step);
    } else {
      el.textContent = original;
    }
  }
  step();
}

function initScramble(reducedMotion){
  const items = document.querySelectorAll('.glitch-scramble');
  if(!items.length) return;
  if(reducedMotion || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        scrambleReveal(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.4 });

  items.forEach(i => io.observe(i));
}
