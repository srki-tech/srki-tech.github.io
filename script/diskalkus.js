document.getElementById("e2e_btn").onclick = () => {
    if (document.getElementById("e1d").value !== "" && document.getElementById("e1w").value !== "" && document.getElementById("e1h").value !== "" && document.getElementById("e2d").value !== "" && document.getElementById("e2w").value !== "" && document.getElementById("e2h").value !== ""){
        
        //uzeti vrednosti
        let e1d = document.getElementById("e1d").value;
        let e1w = document.getElementById("e1w").value;
        let e1h = document.getElementById("e1h").value;

        let e2d = document.getElementById("e2d").value;
        let e2w = document.getElementById("e2w").value;
        let e2h = document.getElementById("e2h").value;

        //pitagora preko diagonale
        let w1 = e1d * e1w / Math.sqrt(Math.pow(e1w, 2) + Math.pow(e1h, 2));
        let h1 =e1d * e1h / Math.sqrt(Math.pow(e1w, 2) + Math.pow(e1h, 2));
        let w2 = e2d * e2w / Math.sqrt(Math.pow(e2w, 2) + Math.pow(e2h, 2));
        let h2 =e2d * e2h / Math.sqrt(Math.pow(e2w, 2) + Math.pow(e2h, 2));

        //ponistiti vrednosti
        document.getElementById("e1").style.width="100%";
        document.getElementById("e2").style.width="100%";
        document.getElementById("e1").style.transform = "";
        document.getElementById("e2").style.transform = "";

        //sortirati array
        let Arr = [
            {key:"w1", value: w1, element: "e1", percent:""},
            {key:"h1", value: h1, element: "e1", percent:""},
            {key:"w2", value: w2, element: "e2", percent:""},
            {key:"h2", value: h2, element: "e2", percent:""}
        ];

        function compare( a, b ) {
            if ( a.value >= b.value ){
                return -1;
            }
            if ( a.value <= b.value ){
                return 1;
            }
            return 0;
        }
          
        Arr.sort(compare);

        for (let i = 1; i < Arr.length; i++){
            Arr[0].percent = 100;
            Arr[i].percent = 100 * Arr[i].value / Arr[0].value;
        }
     
        for (let j = 0; j < Arr.length; j++){
            if(Arr[j].key == "w1"){
                var e1w1 = Arr[j].percent;
            }
            else if(Arr[j].key == "h1"){
                var e1h1 = Arr[j].percent;
            }
            if(Arr[j].key == "w2"){
                var e2w2 = Arr[j].percent;
            }
            else if(Arr[j].key == "h2"){
                var e2h2 = Arr[j].percent;
            }
        }
        
        //prikazati vrednosti 
        let string1;
        let string2;
        document.getElementById("e1").style.transform = "scale(" + e1w1 + "%," + e1h1 + "%)";
        document.getElementById("e2").style.transform = "scale(" + e2w2 + "%," + e2h2 + "%)";
        
        if (w1>w2){
            string1 = "Ekran 1 je širi za " + (100- 100 * w2 / w1).toFixed(2) + " %";
        }
        else{
            string1 = "Ekran 2 je širi za " + (100 - 100 * w1 / w2).toFixed(2) + " %";
        }

        if (h1>h2){
            string2 = "Ekran 1 je viši za " + (100- 100 * h2 / h1).toFixed(2) + " %";
        }
        else{
            string2 = "Ekran 2 je viši za " + (100 - 100 * h1 / h2).toFixed(2) + " %";
        }
         
        document.getElementById("eInfo1").innerHTML = 
        "D1 je " + (e1d * 2.54).toFixed(2) + " cm<br>" +
        "Širina " + (w1 * 2.54).toFixed(2) + " cm<br>" + 
        "Visina " + (h1 * 2.54).toFixed(2) + " cm<br>";

        document.getElementById("eInfo2").innerHTML = 
        "D2 je " + (e2d * 2.54).toFixed(2) + " cm<br>" +
        "Širina " + (w2 * 2.54).toFixed(2) + " cm<br>" +
        "Visina " + (h2 * 2.54).toFixed(2) + " cm<br>";

        document.getElementById("eInfo3").innerHTML =
        string1 + "<br>" + string2;

    }
    else{
        alert("Unos ne može biti prazan!");
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
        p[i].classList.remove("col-md-6");
    } 
}
else{
    for (i = 0; i < p.length; i++) {
        p[i].classList.add("col-md-6");
        p[i].classList.remove("col-6");
    }
}
mql.addEventListener("change", (e)=>{
    if(e.matches){
        for (i = 0; i < p.length; i++) {
            p[i].classList.add("col-6");
            p[i].classList.remove("col-md-6");
        } 
    }
    else{
        for (i = 0; i < p.length; i++) {
            p[i].classList.add("col-md-6");
            p[i].classList.remove("col-md-6");
        }
    }
});