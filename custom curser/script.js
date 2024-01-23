let main = document.querySelector(".main")
let curser = document.querySelector("#curser");

main.addEventListener("mousemove",function(dets){
    curser.style.left = dets.x+"px"
    curser.style.top = dets.y+"px"
})
