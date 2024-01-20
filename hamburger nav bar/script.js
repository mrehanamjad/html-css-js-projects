let menu=document.querySelector("#menu");
let nav=document.querySelector("#nav");

const onClick=()=>{
    menu.classList.toggle("icon")
    nav.classList.toggle("change")
}

menu.addEventListener("click",onClick)

