const email = document.querySelector("#email");
const icon1= document.querySelector(".icon1");
const icon2= document.querySelector(".icon2");
const errorText= document.querySelector(".error-txt");
const btn= document.querySelector("button");
let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
email.addEventListener("keyup",()=>{
    if(email.value.match(regex)){
        email.style.borderColor = '#27ae60';
        icon1.style.display = 'none'
        icon2.style.display = 'block'
        btn.style.display = 'block'
        errorText.style.display = 'none'
    }
    else{
        email.style.borderColor = '#e74c3c';
        icon1.style.display = 'block'
        icon2.style.display = 'none'
        // errorText.style.display = 'block'
        btn.style.display = 'none'
    }
});
icon1.onmouseover = function() {mouseOver()};
icon1.onmouseout = function() {mouseOut()};

function mouseOver() {
    errorText.style.display = "block";
}
function mouseOut() {
    errorText.style.display = "none";
}