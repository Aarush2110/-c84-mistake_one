canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

backgroung_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add()
{
    backgroung_imgTag = new Image(); 
    backgroung_imgTag.onload = uploadBackground;
    backgroung_imgTag.src = backgroung_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground()
{
    ctx.drawImage(backgroung_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover()
{
     ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

  window.addEventListener("Keydown", my_keydown) ;
  
  function my_keydown(e)
  {
      KeyPressed = e.keyCode;
      console.log(KeyPressed);
        if(KeyPressed == '38')
        {
            up();
            console.log("up");
        }

        if(KeyPressed == '40')
        {
            down();
            console.log("down");
        }
        if(KeyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(KeyPressed == '39')
        {
            right();
            console.log("right");
        }
  }
  function up() 
  {
      if(rover_y >=0)
      {
          rover_y=rover_y-10;
          console.log("When up arrow is pressed = " + rover_x + "-"+ rover_y );
          uploadBackground();
          uploadrover();
      }
  }

  function down() 
  {
      if(rover_y <=500)
      {
          rover_y=rover_y+10;
          console.log("When down arrow is pressed, x = " + rover_x + "| y = "+ rover_y );
          uploadBackground();
          uploadrover();
      }
  }
  function left() 
  {
      if(rover_x >=0)
      {
          rover_x=rover_x-10;
          console.log("When left arrow is pressed, x = " + rover_x + "| y = "+ rover_y );
          uploadBackground();
          uploadrover();
      }
  }
  function right() 
  {
      if(rover_x <=700)
      {
          rover_x=rover_x+10;
          console.log("When right arrow is pressed, x = " + rover_x + "| y = "+ rover_y );
          uploadBackground();
          uploadrover();
      }
  }