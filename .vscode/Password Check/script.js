const errorText = document.querySelector(".error");
const correctText = document.querySelector(".correct");
const input1 = document.querySelector(".inputs #pass");
const input2 = document.querySelector(".inputs #con");
const btn = document.querySelector("button");
const show = document.querySelector(".inputs .show");
const cross = document.querySelector(".container .error-text .cross");
function active(){
    if(input1.value.length>7){
        btn.removeAttribute("disabled","");
        btn.classList.add("active");
        input2.removeAttribute("disabled","");
        show.style.display="block"
    }
    else{
        btn.setAttribute("disabled","");
        btn.classList.remove("active");
        input2.setAttribute("disabled","");
    }
}
btn.onclick = function(){
    if(input1.value!=input2.value){
        errorText.style.display="block";
        correctText.style.display="none";
        cross.style.display="block";
    }
    else{
        correctText.style.display="block";
        errorText.style.display="none";
        cross.style.display="block";
    }
}
cross.onclick = function(){
    errorText.style.display="none";
    correctText.style.display="none";
    cross.style.display="none";
}
show.onclick = function(){
    if(show.innerHTML=="SHOW"){
        // if(input2.value.length>0){
            input2.type = "text";
            show.innerHTML=`HIDE`;
        // }
    }
    else if(show.innerHTML=="HIDE"){
        // if(input2.value.length>0){
            input2.type = "password";
            show.innerHTML=`SHOW`;
        // }
    }
}