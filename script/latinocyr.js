//LATINOCYR
let m = new Promise((resolve,reject)=>{
    let c = navigator.clipboard.readText().then(clipText => cliboard = clipText);
    if (c !== null || c !== ""){
        resolve(c);
    }
    else{
        reject();
    }
});

m.then((message)=>{
    console.log(message);

    document.getElementById('pastegrab').onclick = function pastegrab(){
        
        if (document.getElementById('textbox').value === ""){
            document.getElementById("textbox").value = cliboard;
            document.getElementById('pastegrab').value = "Zgrabi";
        }  
        else{
            var copyText = document.getElementById("textbox");
            copyText.select();
            copyText.setSelectionRange(0, 99999); /*For mobile devices*/
            document.execCommand("copy");
    
            document.getElementById('textbox').value = "";
            document.getElementById('pastegrab').value = "Zalepi";
            navigator.clipboard.readText().then(clipText => cliboard = clipText);
        }
    };
});

m.catch((message)=>{
    console.log(message);
    document.getElementById('textbox').readOnly = false;

    document.getElementById('pastegrab').value = "Zgrabi";
    document.getElementById('pastegrab').onclick = function pastegrab(){
        if (document.getElementById('textbox').value !== ""){
            var copyText = document.getElementById("textbox");
            copyText.select();
            copyText.setSelectionRange(0, 99999); /*For mobile devices*/
            document.execCommand("copy");
    
            document.getElementById('textbox').value = "";
        }
    };
})

document.getElementById('osvezi').onclick = function osvezi(){
    location.reload();
};

document.getElementById('all2low').onclick = function all2low(){
    if (document.getElementById('textbox').value !== ""){
        var str = document.getElementById('textbox').value;

        str = str.toLowerCase();

        document.getElementById('textbox').value = str;
    }
};

document.getElementById('all2big').onclick = function all2big(){
    if (document.getElementById('textbox').value !== ""){
        var str = document.getElementById('textbox').value;

        str = str.toUpperCase();

        document.getElementById('textbox').value = str;
    }
};

document.getElementById('swcase1').onclick = function swcase1(){
    if (document.getElementById('textbox').value !== ""){
        var str = document.getElementById('textbox').value;

        str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

        document.getElementById('textbox').value = str;    
    }
};

document.getElementById('swcase2').onclick = function swcase2(){
    if (document.getElementById('textbox').value !== ""){
        var str = document.getElementById('textbox').value;

        str = str.toLowerCase();

        str = str.replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, match => match.toUpperCase());

        document.getElementById('textbox').value = str;    
    }
};

document.getElementById('lat2cyr').onclick = function lat2cyr(){
    if (document.getElementById('textbox').value !== ""){
        var str = document.getElementById('textbox').value;

        // Uppercase special characters
        str = str.replace(/D??/g, "??");
        str = str.replace(/D??/g, "??");
        str = str.replace(/DJ/g, "??");
        str = str.replace(/Dj/g, "??");
        str = str.replace(/LJ/g, "??");
        str = str.replace(/Lj/g, "??");
        str = str.replace(/NJ/g, "??");
        str = str.replace(/Nj/g, "??");

        // Lowercase special characters
        str = str.replace(/d??/g, "??");
        str = str.replace(/dj/g, "??");
        str = str.replace(/lj/g, "??");
        str = str.replace(/nj/g, "??");

        // Uppercase characters
        str = str.replace(/A/g, "??");
        str = str.replace(/B/g, "??");
        str = str.replace(/V/g, "??");
        str = str.replace(/G/g, "??");
        str = str.replace(/D/g, "??");
        str = str.replace(/??/g, "??");
        str = str.replace(/E/g, "??");
        str = str.replace(/??/g, "??");
        str = str.replace(/Z/g, "??");
        str = str.replace(/I/g, "??");
        str = str.replace(/J/g, "??");
        str = str.replace(/K/g, "??");
        str = str.replace(/L/g, "??");
        str = str.replace(/M/g, "??");
        str = str.replace(/N/g, "??");
        str = str.replace(/O/g, "??");
        str = str.replace(/P/g, "??");
        str = str.replace(/R/g, "??");
        str = str.replace(/S/g, "??");
        str = str.replace(/T/g, "??");
        str = str.replace(/??/g, "??");
        str = str.replace(/U/g, "??");
        str = str.replace(/F/g, "??");
        str = str.replace(/H/g, "??");
        str = str.replace(/C/g, "??");
        str = str.replace(/??/g, "??");
        str = str.replace(/??/g, "??");

        // Lowercase characters
        str = str.replace(/a/g, "??");
        str = str.replace(/b/g, "??");
        str = str.replace(/v/g, "??");
        str = str.replace(/g/g, "??");
        str = str.replace(/d/g, "??");
        str = str.replace(/??/g, "??");
        str = str.replace(/e/g, "??");
        str = str.replace(/??/g, "??");
        str = str.replace(/z/g, "??");
        str = str.replace(/i/g, "??");
        str = str.replace(/j/g, "??");
        str = str.replace(/k/g, "??");
        str = str.replace(/l/g, "??");
        str = str.replace(/m/g, "??");
        str = str.replace(/n/g, "??");
        str = str.replace(/o/g, "??");
        str = str.replace(/p/g, "??");
        str = str.replace(/r/g, "??");
        str = str.replace(/s/g, "??");
        str = str.replace(/t/g, "??");
        str = str.replace(/??/g, "??");
        str = str.replace(/u/g, "??");
        str = str.replace(/f/g, "??");
        str = str.replace(/h/g, "??");
        str = str.replace(/c/g, "??");
        str = str.replace(/??/g, "??");
        str = str.replace(/??/g, "??");

        document.getElementById('textbox').value = str;
    }
};

document.getElementById('cyr2lat').onclick = function cyr2lat(){
    if (document.getElementById('textbox').value !== ''){ 
        var str = document.getElementById('textbox').value;

        // Uppercase special characters
        str = str.replace(/??/g, "D??");
        str = str.replace(/??/g, "LJ");
        str = str.replace(/??/g, "NJ");

        // Lowercase special characters
        str = str.replace(/??/g, "d??");
        str = str.replace(/??/g, "lj");
        str = str.replace(/??/g, "nj");

        // Uppercase characters
        str = str.replace(/??/g, "A");
        str = str.replace(/??/g, "B");
        str = str.replace(/??/g, "V");
        str = str.replace(/??/g, "G");
        str = str.replace(/??/g, "D");
        str = str.replace(/??/g, "??");
        str = str.replace(/??/g, "E");
        str = str.replace(/??/g, "??");
        str = str.replace(/??/g, "Z");
        str = str.replace(/??/g, "I");
        str = str.replace(/??/g, "J");
        str = str.replace(/??/g, "K");
        str = str.replace(/??/g, "L");
        str = str.replace(/??/g, "M");
        str = str.replace(/??/g, "N");
        str = str.replace(/??/g, "O");
        str = str.replace(/??/g, "P");
        str = str.replace(/??/g, "R");
        str = str.replace(/??/g, "S");
        str = str.replace(/??/g, "T");
        str = str.replace(/??/g, "??");
        str = str.replace(/??/g, "U");
        str = str.replace(/??/g, "F");
        str = str.replace(/??/g, "H");
        str = str.replace(/??/g, "C");
        str = str.replace(/??/g, "??");
        str = str.replace(/??/g, "??");

        // Lowercase characters
        str = str.replace(/??/g, "a");
        str = str.replace(/??/g, "b");
        str = str.replace(/??/g, "v");
        str = str.replace(/??/g, "g");
        str = str.replace(/??/g, "d");
        str = str.replace(/??/g, "??");
        str = str.replace(/??/g, "e");
        str = str.replace(/??/g, "??");
        str = str.replace(/??/g, "z");
        str = str.replace(/??/g, "i");
        str = str.replace(/??/g, "j");
        str = str.replace(/??/g, "k");
        str = str.replace(/??/g, "l");
        str = str.replace(/??/g, "m");
        str = str.replace(/??/g, "n");
        str = str.replace(/??/g, "o");
        str = str.replace(/??/g, "p");
        str = str.replace(/??/g, "r");
        str = str.replace(/??/g, "s");
        str = str.replace(/??/g, "t");
        str = str.replace(/??/g, "??");
        str = str.replace(/??/g, "u");
        str = str.replace(/??/g, "f");
        str = str.replace(/??/g, "h");
        str = str.replace(/??/g, "c");
        str = str.replace(/??/g, "??");
        str = str.replace(/??/g, "??");

        document.getElementById('textbox').value = str;
    }
};

//RENDER P
var p = [];
p = document.getElementsByClassName("kontrole");
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
})