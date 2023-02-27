var canvas2=document.getElementById("canvas")
var radiuss=40
ctx=canvas2.getContext("2d")
color="blue" 
ctx.beginPath();
 ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.arc(500, 500, radiuss ,0 , 2*Math.PI)
   ctx.stroke();
 canvas2.addEventListener("mousedown", myMousedown);
 function myMousedown (e){
  radiuss=document.getElementById("radius").value
  color=document.getElementById("color").value
  mousex=e.clientX-canvas.offsetLeft;
  mousey=e.clientY-canvas.offsetTop;
  ctx.beginPath();
 ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.arc(mousex,mousey,radiuss,0,2*Math.PI)
  ctx.stroke();
 console.log(mousex)
console.log(mousey)

}
