//PDV KALK
document.getElementById("mpc_btn").onclick = function mpc2osn(){
    if (document.getElementById("tax_prc").value !== "" && document.getElementById("mpc_val").value !== ""){
        pdv_prc = document.getElementById("tax_prc").value;
        mpc_val = document.getElementById("mpc_val").value;

        pdv_val = (mpc_val * pdv_prc / (100 + parseFloat(pdv_prc))).toFixed(2);
        osn_val = (mpc_val - pdv_val).toFixed(2);

        document.getElementById("tax_val").value = pdv_val;
        document.getElementById("osn_val").value = osn_val;
    }
    else{
        alert("Unos ne može biti prazan!");
    }
};

document.getElementById("osn_btn").onclick = function osn2mpc(){
    if (document.getElementById("tax_prc").value !== "" && document.getElementById("osn_val").value !== ""){
        pdv_prc = document.getElementById("tax_prc").value;
        osn_val = document.getElementById("osn_val").value;

        pdv_val = (osn_val * pdv_prc / 100).toFixed(2);
        mpc_val = (parseFloat(osn_val) + parseFloat(pdv_val)).toFixed(2);

        document.getElementById("tax_val").value = pdv_val;
        document.getElementById("mpc_val").value = mpc_val;
    }
    else{
        alert("Unos ne može biti prazan!");
    }
};

//RUC KALK
document.getElementById("fpc_btn").onclick = function ncr2mpc(){
    if (document.getElementById("pdv_in").value !== "" && document.getElementById("pdv_out").value !== "" && document.getElementById("ncr").value !== "" && document.getElementById("ruc_ps").value !== ""){
        pdv_in = document.getElementById("pdv_in").value;
        pdv_out = document.getElementById("pdv_out").value;
        ncr = document.getElementById("ncr").value;
        ruc_ps = document.getElementById("ruc_ps").value;

        nin_pdv = (parseFloat(ncr) * parseFloat(pdv_in) / 100).toFixed(2);
        ncr_pdv = (parseFloat(ncr) + parseFloat(ncr) * parseFloat(pdv_in) / 100).toFixed(2);
        ruc_mar = (parseFloat(ncr_pdv) * parseFloat(ruc_ps) / 100).toFixed(2);
        pdv_mar = ((parseFloat(ncr_pdv) + parseFloat (ruc_mar)) * parseFloat(pdv_out) / 100).toFixed(2);
        mpc_fin = (parseFloat(ncr_pdv) + parseFloat(ruc_mar) + parseFloat(pdv_mar)).toFixed(2);

        document.getElementById("ncr_pdv").value = nin_pdv;
        document.getElementById("ruc_mar").value = ruc_mar;
        document.getElementById("pdv_mar").value = pdv_mar;
        document.getElementById("mpc_fin").value = mpc_fin;
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