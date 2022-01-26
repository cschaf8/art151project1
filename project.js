function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  let x = 0;
  let y = 0;
  let speedX = 4;
  let speedY = 6;

  list1 = [25,75,125];
  list2 = [20,120,240];

  function draw() {
    background(240);
    /*
    //fill(112,155,220);
    strokeWeight(0);
    circle(x,y,10);

    x = x + speedX;
    y = y + speedY;
    color1 = color(173, 222, 255);
    color2 = color(255, 210, 173);
    */
   /* if(x >= windowWidth || x <= 0)
    {
        speedX = (-1)*speedX;
        fill(color1);
    }
    if(y >= windowHeight || y <= 0)
    {
        speedY = (-1)*speedY;
        fill(color2);
    } */

    x = windowWidth/255;
    y = windowHeight/255;
    var1 = map(mouseX/x, 0, 255, 0, 255);
    var2 = map(mouseY/y, 0, 255, 0, 255);
    radius1 = (windowWidth/mouseX)*30;
    radius3 = (windowWidth/(windowWidth-mouseX))*30;
    radius2 = abs(radius1-radius3)/2;

    strokeWeight(0);

    fill(var1,var2,220);
    circle(windowWidth/6,windowHeight/6, radius1);
    circle(windowWidth/6,5*windowHeight/6, radius1);

    fill(var1-(255-var1), var2-(255-var2),220);
    circle(windowWidth/2,windowHeight/6, radius2);
    circle(windowWidth/2,5*windowHeight/6, radius2);

    fill(255-var1,255-var2,220);
    circle(5*windowWidth/6,windowHeight/6, radius3);
    circle(5*windowWidth/6,5*windowHeight/6, radius3);


  }