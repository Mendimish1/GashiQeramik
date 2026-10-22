document.getElementById('y').textContent=new Date().getFullYear();
document.querySelectorAll('.links a').forEach(a=>a.onclick=()=>document.getElementById('links').classList.remove('open'));
document.getElementById('form').addEventListener('submit',e=>{
  e.preventDefault();
  const t=`Përshëndetje Gashi Qeramik!%0AEmri: ${encodeURIComponent(n.value)}%0ATelefoni: ${encodeURIComponent(p.value)}%0AInteresi: ${encodeURIComponent(s.value)}%0AMesazhi: ${encodeURIComponent(m.value)}`;
  window.open('https://wa.me/38344000000?text='+t,'_blank');
});

// header shadow
const hd=document.querySelector('header');
addEventListener('scroll',()=>hd.classList.toggle('scrolled',scrollY>20),{passive:true});
// scroll reveal with stagger
const els=document.querySelectorAll('.sec-head,.card,.why-item,.g,.info,form');
els.forEach(el=>{el.classList.add('reveal');const sib=[...el.parentElement.children].indexOf(el);el.style.transitionDelay=(sib*0.12)+'s';});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.15});
els.forEach(el=>io.observe(el));
// count-up stats
document.querySelectorAll('.stats strong').forEach(el=>{
  const m=el.textContent.match(/(\d+)(.*)/); if(!m) return;
  const end=+m[1], suf=m[2]; let t0=null;
  const step=ts=>{t0??=ts;const k=Math.min((ts-t0)/1600,1);el.textContent=Math.round(end*(1-Math.pow(1-k,3)))+suf;if(k<1)requestAnimationFrame(step);};
  setTimeout(()=>requestAnimationFrame(step),700);
});
