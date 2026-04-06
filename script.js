const btnE1=document.getElementById("calculate");
const btnE2=document.getElementById("Principle");
const btnE3=document.getElementById("rate");
const btnE4=document.getElementById("Year");
const btnE5=document.getElementById("compound");


btnE1.addEventListener("click",calculateFD);

function calculateFD(){
    let p= parseFloat(document.getElementById("Principle").value);
    let r= parseFloat(document.getElementById("rate").value)/100;
    let t= parseFloat(document.getElementById("Year").value);
    let n= parseInt(document.getElementById("compound").value);

    if(isNaN(p) ||isNaN(r) ||isNaN(t) ){
        alert("Please Enter All values");
        return;
    }
    if(p<=0||r<=0||t<=0){
        alert("Please enter valid Input");
        return;
    }
    let A= p* Math.pow((1+ (r/n)),(n*t));
    let I= A-p;
    document.getElementById("result1").innerText =
        "Your Deposit amount is: ₹" + p.toFixed(2);

    document.getElementById("result2").innerText =
        "Your Interest is: ₹" + I.toFixed(2);

    document.getElementById("result3").innerText =
        "Your Total Amount is: ₹" + A.toFixed(2); 
 
}
btnE2.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        e.preventDefault();
        btnE3.focus(); // next field
    }
});

btnE3.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        e.preventDefault();
        btnE4.focus();
    }
});

btnE4.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        e.preventDefault();
        btnE5.focus();
    }
});

btnE5.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        e.preventDefault();
        btnE1.click(); // calculate
    }
});