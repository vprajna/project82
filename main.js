canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
var linewidth = 1;
var mouseevent = "";
var lastxposition = 0;
var lastyposition = 0;
canvas.addEventListener("mousedown", mymousedown);
canvas.addEventListener("mouseleave", mymouseleave);
canvas.addEventListener("mouseup", mymouseup);
canvas.addEventListener("mousemove", mymousemove);
function mymousedown(e) {
  mouseevent = "mousedown";
}
function mymouseup(e) {
  mouseevent = "mouseup";
}
function mymouseleave(e) {
  mouseevent = "mouseleave";
}
function mymousemove(e) {
  mouse_x = e.clientX - canvas.offsetLeft;
  mouse_y = e.clientY - canvas.offsetTop;
  if (mouseevent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + lastxposition + "y = " + lastyposition);
    ctx.moveTo(lastxposition, lastyposition);
    console.log("Current position of x and y coordinates = ");
    ctx.lineTo(mouse_x, mouse_y);
    ctx.stroke(); //pen down
  }
  lastxposition=mouse_x;
  lastyposition=mouse_y;
  canvas = document.getElementById("myCanvas");
function drawfunction(e) {
  mouse_x = e.clientX - canvas.offsetLeft;
  mouse_y = e.clientY - canvas.offsetTop;
  circle(mouse_x,mouse_y)
}
function circle(x, y) {
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.arc(x, y, 40, 0, 360);
  ctx.stroke();
}
}
