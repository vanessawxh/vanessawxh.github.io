/* ============================================================
   LIGHTBOX.JS — click-to-expand for case study media blocks
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.case-media .placeholder-art');
  if(!targets.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Close">CLOSE ✕</button>
    <div class="lightbox-inner">
      <div class="placeholder-art" id="lightbox-art" style="min-height:70vh;"></div>
    </div>`;
  document.body.appendChild(overlay);

  const art = overlay.querySelector('#lightbox-art');
  const closeBtn = overlay.querySelector('.lightbox-close');

  function open(sourceEl){
    art.className = 'placeholder-art ' + (sourceEl.dataset.variant || '');
    art.dataset.tag = sourceEl.dataset.tag || '';
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function close(){
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  targets.forEach(t => t.addEventListener('click', () => open(t)));
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if(e.target === overlay) close(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') close(); });
});
