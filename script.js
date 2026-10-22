const products = [
 {name:'Banner Ulang Tahun',category:'ulang-tahun',tag:'BEST SELLER',kind:'birthday',icon:'🎂',desc:'Tema karakter, safari, dinosaurus, bola, dan lainnya.'},
 {name:'Banner Wisuda',category:'wisuda',tag:'CUSTOM',kind:'grad',icon:'🎓',desc:'Rayakan kelulusan dengan banner yang personal.'},
 {name:'Banner Tema Safari',category:'ulang-tahun',tag:'FAVORIT',kind:'safari',icon:'🦁',desc:'Nuansa alam dan hewan yang ceria.'},
 {name:'Gantungan Kunci Custom',category:'merch',tag:'MERCH',kind:'keychain',icon:'🔑',desc:'Merchandise personal untuk hadiah dan souvenir.'},
 {name:'Stiker Custom',category:'merch',tag:'CUSTOM',kind:'sticker',icon:'✨',desc:'Stiker label, kemasan, dan dekorasi.'},
 {name:'Banner Acara & Usaha',category:'wisuda',tag:'SERBAGUNA',kind:'business',icon:'🎉',desc:'Untuk perayaan, promosi, dan berbagai acara.'}
];
const catalog=document.querySelector('#catalog');
function render(filter='all'){
 catalog.innerHTML=products.filter(p=>filter==='all'||p.category===filter).map(p=>`<article class="product-card"><div class="product-image ${p.kind}"><span class="product-tag">${p.tag}</span><div class="illustration"><span class="illustration-icon">${p.icon}</span><strong>${p.kind==='birthday'?'HAPPY BIRTHDAY':p.kind==='grad'?'CONGRATULATIONS':p.kind==='safari'?'WILD ONE':p.kind==='keychain'?'CUSTOM KEYCHAIN':p.kind==='sticker'?'STICKER PACK':'YOUR SPECIAL DAY'}</strong><small>VOLTIX PRINTING</small></div></div><div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p><a href="https://wa.me/6283893793285?text=${encodeURIComponent('Halo Voltix Printing, saya mau tanya tentang '+p.name)}" target="_blank" rel="noopener">Tanya Produk <span>↗</span></a></div></article>`).join('');
}
render();
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter)}));
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));document.querySelector('#year').textContent=new Date().getFullYear();
