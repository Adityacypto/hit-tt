
canvas = new fabric.Canvas("myCanvas");
ctx  = canvas.getContext("2d");
// Create canvas variable

//Set initial positions for ball and hole images.


block_image_object_h = 5
block_image_object_w = 5

ball_x = 0;
ball_y = 0;
hole_x = 400;
hole_y = 800;

function load_img(){
	
	fabric.Image.fromURL("golh-h.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole.obj);
	});
		new_image();
	}

	


function new_image()
{
    
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball.obj);
	});
}
	


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
     canvas.remove(ball_obj);
	}

	document.getElementById("hd3").innerHTML = "You have hit the goal!!!";
	document.getElementById("myCanvas").style.borderColor= "red";
	

		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		
        if(rover_y>=10)
        {
           rover_y= rover_y-10;
           console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();

        }
        
		// Write a code to move ball upward.
	}

	function down()
	{
		if(rover_y<=500)
        {
           rover_y= rover_y+10;
           console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();
		}

	}
		
// Write a code to move ball downward.
	

	function left()
	{
		if(ball_x >5)
		{
			rover_x= rover_x-10;
           console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();
		   // Write a code to move ball left side.

		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			 rover_x= rover_x+10;
           console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();
		   // Write a code to move ball right side
		
		}

	}
