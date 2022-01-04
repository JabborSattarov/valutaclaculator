var input = document.querySelector("#som");
var result = document.querySelector("#result");

var dollar = document.querySelector("#usd");
var euro = document.querySelector("#euro");
var rubl = document.querySelector("#rub");

var oneDoll = 10810;
var oneEuro = 11700;
var oneRub = 110;


dollar.addEventListener("click", ()=>{
    var calculate = (input.value / oneDoll).toFixed(2)

    if (calculate > 0) {
        result.innerHTML= `${calculate} Dollar`
    };
})

euro.addEventListener("click", ()=>{
    var calculate = (input.value / oneEuro).toFixed(2)

    if (calculate > 0) {
        result.innerHTML= `${calculate} Euro`
    };
})
rubl.addEventListener("click", ()=>{
    var calculate = (input.value / oneRub).toFixed(2)

    if (calculate > 0) {
        result.innerHTML= `${calculate} Rubl`
    };
})