$("#menu").load("https://srki-tech.github.io/static/menu-en.html");
$("#wnav").load("https://srki-tech.github.io/static/wnav-en.html");
$("#bannersc").load("https://srki-tech.github.io/static/c.html");
$("#author").load("https://srki-tech.github.io/static/a.html");
$("#bannersf").load("https://srki-tech.github.io/static/f.html");

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

var x = readCookie('dark-theme');

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if ( x !== null && prefersDarkScheme.matches){
    document.body.classList.add("dark-theme");
}

window.onload = setTimeout(function(){
  document.getElementById('NavTheme').addEventListener('click', () => {
    if(document.body.classList.contains('dark-theme')){
      document.body.classList.toggle('dark-theme');
      document.cookie = "dark-theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    else{
      document.body.classList.toggle('dark-theme');
      document.cookie = "dark-theme=on;path=/;";
    }
  }); 
},400);