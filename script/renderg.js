//RENDER G
var p = [];

p = document.getElementsByClassName("projectsart");

var i;

var mql = window.matchMedia("(max-width: 768px)");
if(mql.matches){
    for (i = 0; i < p.length; i++) {
        p[i].classList.add("col-6");
        p[i].classList.remove("col-md-3");
    } 
}
else{
    for (i = 0; i < p.length; i++) {
        p[i].classList.add("col-md-3");
        p[i].classList.remove("col-6");
    }
}
mql.addEventListener("change", (e)=>{
    if(e.matches){
        for (i = 0; i < p.length; i++) {
            p[i].classList.add("col-6");
            p[i].classList.remove("col-md-3");
        } 
    }
    else{
        for (i = 0; i < p.length; i++) {
            p[i].classList.add("col-md-3");
            p[i].classList.remove("col-6");
        }
    }
});