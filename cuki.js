// Create a reference for the canvas
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
		//write a code to check the type of key pressed
		aplhabetkey();
      document.getElementById("d1").InnerHTML="You have pressed either: a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y or z!";
      console.log("akuma");
    }
      else   if((keyPressed >=48 && keyPressed<=57)) 
		{
		//write a code to check the type of key pressed
		numberkey();
      document.getElementById("d1").InnerHTML="You have pressed either: 1,2,3,4,5,6,7,8,9, or 0!";
      console.log("ezeeba");
    }     
      
   else	if((keyPressed >=37 && keyPressed<=40))
		{
		//write a code to check the type of key pressed
		arrowkey();
      document.getElementById("d1").InnerHTML="You have pressed either:⇧,⇩,⇦,⇨!";
      console.log("sii");   
    }
  
 else     if((keyPressed ==17 || keyPressed==18 || keyPressed==27))
		{
		//write a code to check the type of key pressed
		specialkey();
      document.getElementById("d1").InnerHTML="You have pressed either: ctrl,alt or esc!";
      console.log("qwertyqueen");   
    }
      
	else
	{
		otherkey();
		document.getElementById("d1").innerHTML="You have pressed either: enter,shift or del!";
		console.log("pupa");
	}
}

function aplhabetkey()
{
	//upload respective image with the message. 
	img_image="Alpkey.png";
	add();
}
function numberkey()
{
	img_image="numkey.png";
	add();	
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
