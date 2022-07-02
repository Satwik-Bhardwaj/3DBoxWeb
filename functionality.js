var sp = document.getElementById("space");
var controllers = document.getElementsByClassName("controllers");
var playPause = document.getElementById("playPause");
var mode = "onPause";
var resX = 0;
var resY = 0;
function move(vi){
    if (vi == 1) {
        resX+=90;
    }
    if (vi == 2) {
        resY+=-90;
    }
    if (vi == -2) {
        resY+=90;
    }
    if (vi == -1) {
        resX+=-90;
    }
    sp.style.transform="translateZ(-100px) rotateX("+ resX +"deg) rotateY(" + resY + "deg)";
}
function onPlay(){
    if (mode == "onPause") {
        sp.style.animation="spin 10s infinite linear";
        for (let i = 0; i< controllers.length; i++) {
           controllers[i].style="opacity: 0";
        }
        playPause.innerHTML="Pause";
        mode = "onPlay";
    }else{
        sp.style.animation="null";
        for (let i = 0; i< controllers.length; i++) {
            controllers[i].style="opacity: 1";
        }
        playPause.innerHTML="Play";
        mode = "onPause";
    }
}