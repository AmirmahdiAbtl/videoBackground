const video = document.querySelector(".video");
const btn = document.querySelector(".btn");
const preloader = document.querySelector(".preloader");
let flag = 1;
window.addEventListener("load",function (){
    preloader.style.display="none";
})
btn.addEventListener("click",function (){
    if(flag === 1){
        video.pause();
        $(".switch").css({
            borderRadius : "0.25rem 0 0 0.25rem",
            left : "0"
        })
        flag = 0;
    }else{
        video.play();
        $(".switch").css({
            borderRadius : "0 0.25rem 0.25rem 0",
            left : "60px"
        })
        flag += 1;
    }
})