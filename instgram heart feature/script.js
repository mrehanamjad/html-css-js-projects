let heart = document.querySelector("i");
let img = document.querySelector("img");
heart.style.opacity = "0.8";
img.addEventListener("dblclick",()=>{
    heart.style.transform = "translate(-50%,-50%) scale(1)";
    heart.style.opacity = "0.8"
    setTimeout(()=>{
    heart.style.opacity = "0";
    heart.style.transform = "translate(-50%,-50%) scale(0)";
    },1000) 
})

