let bv = document.getElementById("bv");
let ctx = bv.getContext("2d");

function drawLine(){
    ctx.moveTo(10,10);
    ctx.lineTo(200,100);
    ctx.stroke();
}