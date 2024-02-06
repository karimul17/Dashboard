//add hovered class to selected list item

let list = document.querySelectorAll(".navagition li ");
function activeLink(){
list.forEach((item)=>{
    item.classList.remove("hovered")
});
}

list.forEach((item) => item.addEventListener("mouseover",activeLink));

//menu toggle

let toggle = document.querySelector(".toggle");
let navagition = document.querySelector(".navagition");
let main = document.querySelector(".main");

toggle.onclick=function(){
    navagition.classList.toggle("active");
  main.classList.toggle("active");

};