(function(){
  const drawer = document.querySelector('.mobile-drawer');
  const openBtn = document.querySelector('[data-open-drawer]');
  const closeBtn = document.querySelector('[data-close-drawer]');
  function open(){ if(drawer){ drawer.classList.add('open'); document.body.style.overflow='hidden'; } }
  function close(){ if(drawer){ drawer.classList.remove('open'); document.body.style.overflow=''; } }
  if(openBtn) openBtn.addEventListener('click', open);
  if(closeBtn) closeBtn.addEventListener('click', close);
  if(drawer) drawer.addEventListener('click', (e)=>{ if(e.target === drawer) close(); });
})();
