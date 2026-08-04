/* ============================================================
   PROJECTS.JS — tag filtering, live search, and sorting
   Runs only on projects.html
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.project-grid');
  if(!grid) return;

  const tiles = Array.from(grid.querySelectorAll('.project-tile'));
  const filterBtns = Array.from(document.querySelectorAll('.tag-filter'));
  const searchInput = document.querySelector('#project-search');
  const sortSelect = document.querySelector('#project-sort');
  const noResults = document.querySelector('.no-results');
  const countEl = document.querySelector('.projects-count');
  const totalCount = tiles.length;

  let activeTag = 'all';
  let query = '';
  let sortMode = 'default';

  function applyFilters(){
    let visible = 0;
    tiles.forEach(tile => {
      const tags = (tile.dataset.tags || '').toLowerCase();
      const title = (tile.dataset.title || '').toLowerCase();
      const matchesTag = activeTag === 'all' || tags.split(' ').includes(activeTag);
      const matchesQuery = query === '' || title.includes(query);
      const show = matchesTag && matchesQuery;
      tile.classList.toggle('is-hidden', !show);
      if(show) visible++;
    });
    if(noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
    if(countEl) countEl.textContent = `SHOWING ${visible} / ${totalCount} PROJECTS`;
  }

  function applySort(){
    let sorted;
    if(sortMode === 'alpha'){
      sorted = tiles.slice().sort((a, b) => a.dataset.title.localeCompare(b.dataset.title));
    } else if(sortMode === 'recent'){
      sorted = tiles.slice().sort((a, b) => Number(b.dataset.year) - Number(a.dataset.year));
    } else {
      sorted = tiles.slice().sort((a, b) => Number(a.dataset.order) - Number(b.dataset.order));
    }
    sorted.forEach(tile => grid.appendChild(tile));
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTag = btn.dataset.tag.toLowerCase();
      applyFilters();
    });
  });

  if(searchInput){
    searchInput.addEventListener('input', (e) => {
      query = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  if(sortSelect){
    sortSelect.addEventListener('change', (e) => {
      sortMode = e.target.value;
      applySort();
    });
  }

  applyFilters();
});
