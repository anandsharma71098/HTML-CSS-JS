const ul = document.querySelector("ul");
input = ul.querySelector("input");
countTags = document.querySelector(".details span");
const removeBtn = document.querySelector("button");
let tags = [];
let maxTags = 10;

function countTag(){
    countTags.innerHTML = maxTags - tags.length;
}
function createTag(){
    ul.querySelectorAll("li").forEach(li => li.remove());
    tags.slice().reverse().forEach(tag =>{
        let liTag = `<li>${tag} <i class="fa fa-times" onclick="remove(this,'${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin",liTag);
    });
    countTag();
}
function remove(ele, tag){
    let index = tags.indexOf(tag);
    tags.splice(index,1);
    ele.parentElement.remove();
    countTag();
}
function addTag(e){
    if(e.key == 'Enter' && tags.length<=10){
        let tag = e.target.value.replace(/\s+/g," ");
        if(tag.length>=1 && !tags.includes(tag)){
            tag.split(",").forEach(tag => {
                tags.push(tag);
                console.log(tags);
            });
        }
        createTag();
        e.target.value="";
    }
}
input.addEventListener("keyup",addTag);

removeBtn.addEventListener("click",()=>{
    tags=[];
    ul.querySelectorAll("li").forEach(li => li.remove());
    countTag();
});