const clickMe = document.querySelector(".click");
const popUp = document.querySelector(".pop_box");
const delBtn = document.querySelector(".pop_box .btns .btn2");
delBtn.addEventListener("click",()=>{
    confirm("Are you sure?");
});
clickMe.addEventListener("click",(e)=>{
    e.preventDefault();
    clickMe.style.display="none";
    popUp.style.display="block";
});
