document.addEventListener('DOMContentLoaded', function(){
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', function(){
      mainNav.classList.toggle('show');
    });
  }

  var y = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // highlight current nav link (basic)
  var links = document.querySelectorAll('#main-nav .nav-link');
  links.forEach(function(a){
    if(new URL(a.href, location.origin).pathname === location.pathname){
      a.classList.add('active');
    }
  });
});

// --- Lightbox animée et responsive ---
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<img src="" alt="">';
  document.body.appendChild(overlay);
  const overlayImg = overlay.querySelector('img');

  let lastThumbRect = null;

  document.querySelectorAll('img').forEach(img => {
    if (img.width > 80 && !img.closest('header') && !img.closest('footer')) {
      img.classList.add('zoomable');
      img.addEventListener('click', e => {
        const rect = img.getBoundingClientRect();
        lastThumbRect = rect;
        overlayImg.src = img.src;

        // Positionne l'image à la taille et position de la miniature
        overlayImg.style.transform = `
          translate(${rect.left + rect.width / 2 - window.innerWidth / 2}px,
                    ${rect.top + rect.height / 2 - window.innerHeight / 2}px)
          scale(${rect.width / overlayImg.offsetWidth || 0.1})
        `;

        overlay.classList.add('show');

        // Petite temporisation pour que l'animation prenne après affichage
        requestAnimationFrame(() => {
          overlayImg.style.transform = 'scale(1)';
          overlayImg.style.opacity = '1';
        });
      });
    }
  });

  // Ferme la lightbox
  overlay.addEventListener('click', () => {
    if (lastThumbRect) {
      const rect = lastThumbRect;
      overlayImg.style.transform = `
        translate(${rect.left + rect.width / 2 - window.innerWidth / 2}px,
                  ${rect.top + rect.height / 2 - window.innerHeight / 2}px)
        scale(${rect.width / overlayImg.offsetWidth || 0.1})
      `;
      overlayImg.style.opacity = '0';
      setTimeout(() => overlay.classList.remove('show'), 250);
    } else {
      overlay.classList.remove('show');
    }
  });
});
