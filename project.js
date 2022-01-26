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
    //background(220);

    //fill(112,155,220);
    strokeWeight(0);
    circle(x,y,10);

    x = x + speedX;
    y = y + speedY;
    color1 = color(173, 222, 255);
    color2 = color(255, 210, 173);

    if(x >= windowWidth || x <= 0)
    {
        speedX = (-1)*speedX;
        fill(color1);
    }
    if(y >= windowHeight || y <= 0)
    {
        speedY = (-1)*speedY;
        fill(color2);
    }

  }