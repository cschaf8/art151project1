function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  let x = 0;
  let y = 0;
  let speedX = 4;
  let speedY = 6;

  list1 = [25,75,125];
  list2 = [20,120,240];

  // colorR = (255,204,204);
  // colorO = (255,229,204);
  // colorY = (255,255,204);
  // colorG = (204,255,204);
  // colorB = (204,255,255);
  // colorI = (229,204,255);
  // colorV = (255,204,255);
  // colorW = (255,255,255);
  // colorBl = (0, 0, 0);

  i = 0;

  // roygbiv = [colorR, colorO, colorY, colorG, colorB, colorI, colorV, colorW, colorBl];
  roygbiv = ['#FFCCCC', '#FFE5CC', '#FFFFCC', '#CCFFCC', '#CCFFFF', '#E5CCFF', '#FFCCFF', '#FFFFFF', '#000000'];

  function draw() {
    background(roygbiv[i]);
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
    midX = windowWidth/2;
    var1 = map(mouseX/x, 0, 255, 0, 255);
    var2 = map(mouseY/y, 0, 255, 0, 255);
    radius1 = (windowWidth/mouseX)*30;
    radius3 = (windowWidth/(windowWidth-mouseX))*30;
    radius2 = abs(radius1-radius3)/2;
    if(radius1 >= radius3)
    {
      radius2 = radius1/2;
    }
    else
    {
      radius2 = radius3/2;
    }
    
    strokeWeight(0);
    col1 = color(var1,var2,255);
    col2 = color(255-var1,255-var2,255);

    //fill(var1,var2,220);
    //fill(var1,0,var2);
    fill(var1,var2,255);
    circle(windowWidth/6,windowHeight/6, radius1);
    circle(windowWidth/6,5*windowHeight/6, radius1);
    //fill(255-var1,0,255-var2)
    fill(255-var1,255-var2,255);
    circle(windowWidth/6,windowHeight/6, radius1/2);
    circle(windowWidth/6,5*windowHeight/6, radius1/2);

    //fill(var1-(255-var1), var2-(255-var2),220);
    inter = lerpColor(col1,col2,0.5);
    fill(inter);
    circle(windowWidth/2,windowHeight/6, radius2);
    circle(windowWidth/2,5*windowHeight/6, radius2);

    //fill(255-var1,255-var2,220);
    //fill(255-var1,0,255-var2);
    fill(255-var1,255-var2,255);
    circle(5*windowWidth/6,windowHeight/6, radius3);
    circle(5*windowWidth/6,5*windowHeight/6, radius3);
    //fill(var1,0,var2);
    fill(var1,var2,255);
    circle(5*windowWidth/6,windowHeight/6, radius3/2);
    circle(5*windowWidth/6,5*windowHeight/6, radius3/2);


  }

  function mousePressed() {
    console.log(i);
    console.log(roygbiv[i]);
    i++;

    if(i >= 9)
    {
      i = 0;
    }
  }