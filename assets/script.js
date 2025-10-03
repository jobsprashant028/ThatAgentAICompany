// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Sticky navbar shadow + active link highlighting
const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.nav-link');

function onScroll(){
  if(window.scrollY > 4){
    navbar.style.boxShadow = '0 6px 14px rgba(0,0,0,.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }

  // Active link
  const positions = Array.from(links).map(a => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(!el) return {a, top: Infinity};
    const rect = el.getBoundingClientRect();
    return {a, top: Math.abs(rect.top)};
  });
  positions.sort((x,y)=>x.top-y.top);
  links.forEach(l=>l.classList.remove('active'));
  if(positions[0] && positions[0].top !== Infinity){
    positions[0].a.classList.add('active');
  }
}
document.addEventListener('scroll', onScroll, {passive:true});
onScroll();
