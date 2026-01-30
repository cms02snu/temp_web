document.addEventListener('DOMContentLoaded',()=>{
  // Year
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  // Menu toggle for small screens
  const menuToggle=document.getElementById('menu-toggle');
  const nav=document.getElementById('nav');
  menuToggle?.addEventListener('click',()=>{
    if(!nav) return;
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });

  // Theme toggle (dark/light)
  const themeToggle=document.getElementById('theme-toggle');
  const root=document.documentElement;
  const applyTheme=(t)=>{
    if(t==='light') document.body.classList.add('light'); else document.body.classList.remove('light');
    localStorage.setItem('site-theme',t);
  }
  const saved = localStorage.getItem('site-theme')||'dark';
  applyTheme(saved);
  themeToggle?.addEventListener('click',()=>{
    const now = document.body.classList.contains('light') ? 'dark' : 'light';
    applyTheme(now);
  });

  // Gallery modal
  const gallery = document.getElementById('gallery-grid');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalClose = document.getElementById('modal-close');
  gallery?.addEventListener('click', (e)=>{
    const t=e.target;
    if(t && t.tagName === 'IMG'){
      modalImg.src = t.src;
      modalImg.alt = t.alt || '';
      modal?.setAttribute('aria-hidden','false');
    }
  });
  modalClose?.addEventListener('click',()=>modal?.setAttribute('aria-hidden','true'));
  document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') modal?.setAttribute('aria-hidden','true'); });

  // Simple form handler
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    alert(`Thanks, ${fd.get('name')}! Message received.`);
    form.reset();
  });
});
