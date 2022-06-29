$("#menu").load("https://srki-tech.github.io/static/menu.html");
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
