var frameNumber = 0, 
playbackConst = 700, 
setHeight = document.getElementById("set-height"), 
vid = document.getElementById('v0'); 
const videoTop = $("#v0").offset().top;
vid.addEventListener('loadedmetadata', function() {
setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// alert(Math.floor(vid.duration) * playbackConst + "px")
});


function scrollPlay(){  
//   var frameNumber  = window.pageYOffset/playbackConst;
var frameNumber  = (window.scrollY - videoTop)/playbackConst;
vid.currentTime  = frameNumber;
window.requestAnimationFrame(scrollPlay);
}




addEventListener("scroll", (event) => {
    if(window.scrollY > videoTop && window.scrollY < (videoTop + $("#v0").outerHeight())){
        window.requestAnimationFrame(scrollPlay);
    }
    

});