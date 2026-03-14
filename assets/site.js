(function(){
  const drawer=document.querySelector('.mobile-drawer');
  const openBtn=document.querySelector('[data-open-drawer]');
  const closeBtn=document.querySelector('[data-close-drawer]');
  function open(){ if(drawer){ drawer.classList.add('open'); document.body.style.overflow='hidden'; } }
  function close(){ if(drawer){ drawer.classList.remove('open'); document.body.style.overflow=''; } }
  if(openBtn) openBtn.addEventListener('click', open);
  if(closeBtn) closeBtn.addEventListener('click', close);
  if(drawer) drawer.addEventListener('click', (e)=>{ if(e.target===drawer) close(); });

  document.querySelectorAll('[data-copy]').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const id=btn.getAttribute('data-copy');
      const el=document.getElementById(id);
      if(!el) return;
      const txt=el.innerText.trim();
      try{
        await navigator.clipboard.writeText(txt);
      }catch(e){
        const ta=document.createElement('textarea');
        ta.value=txt; document.body.appendChild(ta);
        ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      }
      const old=btn.textContent;
      btn.textContent='کپی شد ✓';
      setTimeout(()=>btn.textContent=old, 1200);
    });
  });

  // Lightbox: make content images open fullscreen on click/tap.
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('role','dialog');
  lb.setAttribute('aria-modal','true');
  lb.setAttribute('aria-label','نمایش تمام‌صفحه تصویر');
  lb.innerHTML = `
    <div class="panel">
      <button class="btn close" type="button" aria-label="بستن">بستن</button>
      <img alt="" />
    </div>
  `;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('img');
  const lbClose = lb.querySelector('button.close');

  function lbOpen(src, alt){
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function lbCloseFn(){
    lb.classList.remove('open');
    document.body.style.overflow = '';
    // Release image to stop large memory usage on mobile.
    lbImg.src = '';
  }

  lb.addEventListener('click', (e)=>{
    if(e.target === lb) lbCloseFn();
  });
  lbClose.addEventListener('click', lbCloseFn);
  window.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && lb.classList.contains('open')) lbCloseFn();
  });

  function isZoomable(img){
    if(!img || !img.src) return false;
    if(img.closest('.brand')) return false;
    if(img.closest('header')) return false;
    if(img.closest('footer')) return false;
    if(img.closest('.video-poster')) return false;
    if(img.classList.contains('no-lightbox')) return false;
    if(img.hasAttribute('data-no-lightbox')) return false;
    // Avoid tiny icons
    const w = img.naturalWidth || img.width || 0;
    const h = img.naturalHeight || img.height || 0;
    if(w && h && (w < 220 || h < 140)) return false;
    return true;
  }

  document.querySelectorAll('main img').forEach((img)=>{
    if(!isZoomable(img)) return;
    img.classList.add('zoomable');
    img.addEventListener('click', ()=>{
      const src = img.currentSrc || img.src;
      lbOpen(src, img.alt);
    });
  });

})();
