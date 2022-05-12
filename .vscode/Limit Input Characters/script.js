const input = document.querySelector(".items input");
const counter = document.querySelector(".items .counter-items .counter");
const maxLength = input.getAttribute("maxLength");
const icon = document.querySelector(".items i");
function changeColors(){
    counter.style.color = "#58cff1";
    icon.style.color = "#58cff1";
}
input.onkeyup=()=>{
    counter.innerHTML = maxLength - input.value.length;
    changeColors();
}