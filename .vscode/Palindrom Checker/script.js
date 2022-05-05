const textInput = document.querySelector(".inputs input");
checkBtn = document.querySelector(".inputs button");
infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click",()=>{
    let reverseInput = filterInput.split("").reverse().join("");
    // console.log(reverseInput);
    infoTxt.style.display="block";
    if(filterInput!=reverseInput){
        return infoTxt.innerHTML = `No, <span>'${textInput.value}'</span> isn't a palindrome`;
    }
    else{
        return infoTxt.innerHTML = `<span>'${textInput.value}'</span> is a palindrome`;
    }
});
textInput.addEventListener("keyup",()=>{
    filterInput = textInput.value.replace(/[^A-Z0-9]/ig,"");
    // console.log(filterInput);
    if(filterInput){
        return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");
});
