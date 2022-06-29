document.getElementById("cal_btn").onclick = () => {
    if (document.getElementById("in_1").value !== "" && document.getElementById("in_2").value !== ""){
        
        //uzeti vrednosti
        let in1 = document.getElementById("in_1").value;
        let in2 = document.getElementById("in_2").value;

        
        if (document.getElementById("odo1").hasAttribute("checked")){
            let khm = in2 / (in1 / 60);
            document.getElementById("display").innerHTML = khm.toFixed(2);
        }
        else if(document.getElementById("odo2").hasAttribute("checked")){
            let khm = in2 / (60 / in1);
            document.getElementById("display").innerHTML = khm.toFixed(2);
        }
        else if(document.getElementById("odo3").hasAttribute("checked")){
            let m = in1 / in2;
            document.getElementById("display").innerHTML = m.toFixed(2);
        }
        else{
            alert("Error!")
        }
        
    }
    else{
        alert("Unos ne može biti prazan!");
    }
}

document.getElementById("odo3").onclick = () =>{
    document.getElementById("km2kmh").innerHTML = "Km";
    document.getElementById("km2m").innerHTML = "Kmh";
    document.getElementById("odo2").removeAttribute("checked");
    document.getElementById("odo1").setAttribute("checked", "checked");
}

document.getElementById("odo2").onclick = () =>{
    document.getElementById("km2kmh").innerHTML = "Kmh";
    document.getElementById("km2m").innerHTML = "Minuta m";
    document.getElementById("odo1").removeAttribute("checked");
    document.getElementById("odo2").setAttribute("checked", "checked");
}

document.getElementById("odo1").onclick = () =>{
    document.getElementById("km2kmh").innerHTML = "Km";
    document.getElementById("km2m").innerHTML = "Minuta m";
    document.getElementById("odo2").removeAttribute("checked");
    document.getElementById("odo1").setAttribute("checked", "checked");
}