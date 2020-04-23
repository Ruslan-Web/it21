var polosa = document.getElementById("animal");
var left=0;
document.getElementById("button_right").onclick = function () {
    if (left<-680){
        left=-680;
    }
    left=left-340;
    animal.style.marginLeft = left+"px";
}
document.getElementById("button_left").onclick = function () {
    left=left+340;
    if (left>0){
        left=0;
    }
    animal.style.marginLeft = left+"px";
}
