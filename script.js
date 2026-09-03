const btn=document.getElementById('langToggle');
let lang=localStorage.getItem('siteLang')||'en';
function applyLanguage(){
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.body.classList.toggle('rtl',lang==='ar');
  btn.textContent=lang==='en'?'العربية':'English';
  document.querySelectorAll('[data-en][data-ar]').forEach(el=>{el.textContent=el.dataset[lang];});
}
btn.addEventListener('click',()=>{lang=lang==='en'?'ar':'en';localStorage.setItem('siteLang',lang);applyLanguage();});
applyLanguage();
