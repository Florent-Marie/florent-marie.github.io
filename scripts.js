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
