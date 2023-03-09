/*
Project: js-canvas
Date:    06.09.2021
https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo
https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
https://www.w3schools.com/tags/ref_canvas.asp
*/

'use strict';
const appName = 'canvas';
document.getElementById('mytitle').innerText = appName;
document.getElementById('myheading1').innerText = appName;
let myCanvas = document.getElementById('myCanvas'); 
myCanvas.width = 400;
myCanvas.height = 400;
let ctx = myCanvas.getContext('2d'); 
ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); 

ctx.beginPath();
ctx.moveTo(0,0); 

ctx.strokeStyle = 'green';

ctx.strokeRect(90,150,220,170);
ctx.strokeRect(120,190,60,40);
ctx.strokeRect(220,190,60,40);
ctx.strokeRect(180,260,40,60);


ctx.beginPath();
ctx.strokeStyle = 'yellow';
ctx.arc(50, 50, 30, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(35,200);
ctx.lineTo(200,50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(365,200);
ctx.lineTo(200,50);
ctx.stroke();



const TEXTFONT = '20px Arial'; 






ctx.font = TEXTFONT;
let wall1='wand1';
ctx.strokeText(wall1, 30, 220);


ctx.font = TEXTFONT;
let wall2='wand2';
ctx.strokeText(wall2, 310, 220);


ctx.font = TEXTFONT;
let ceiling1='decke1';
ctx.strokeText(ceiling1, 170, 150);


ctx.font = TEXTFONT;
let floor1='boden1';
ctx.strokeText(floor1, 170, 340);

const TEXTFONT1 = '15px Barmeno';
ctx.font = TEXTFONT1;
let window1='fenster1';
ctx.strokeText(window1, 120, 190);


ctx.font = TEXTFONT1;
let window2='fenster2';
ctx.strokeText(window2, 220, 190);


ctx.font = TEXTFONT1;
let sun='sun';
ctx.strokeText(sun, 40, 40);

const TEXTFONT2 = '20px Agenda';
ctx.font = TEXTFONT2;
let door='tür';
ctx.strokeText(door, 190, 280);