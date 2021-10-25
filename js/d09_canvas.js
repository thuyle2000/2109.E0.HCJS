let bv = document.getElementById("bv");
let ctx = bv.getContext("2d");

function drawLine() {
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(200, 150);
    ctx.strokeStyle = "green";
    ctx.stroke();
}

function drawRect() {
    ctx.beginPath();
    ctx.strokeStyle = "brown";
    ctx.strokeRect(50, 50, 200, 100);

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.fillRect(150, 100, 200, 100);
}

function drawCircle() {
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.arc(200, 180, 60, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(280, 200, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();


}