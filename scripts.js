/* FILE: scripts.js */
// Minimal JS for nav toggle and dynamic years
document.addEventListener('DOMContentLoaded', function(){
var navToggle = document.getElementById('nav-toggle');
var mainNav = document.getElementById('main-nav');
if(navToggle){
navToggle.addEventListener('click', function(){
mainNav.classList.toggle('show');
});
}
var y = new Date().getFullYear();
var years = ['year','year2','year3','year4'];
years.forEach(function(id){
var el = document.getElementById(id);
if(el) el.textContent = y;
});


// highlight current nav link (basic)
var links = document.querySelectorAll('.main-nav .nav-link');
links.forEach(function(a){
if(a.href === location.href || (a.getAttribute('href') !== '/' && location.href.endsWith(a.getAttribute('href')))){
a.classList.add('active');
}
});
});
