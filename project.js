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
  greyList = [40,120,200];

  j = 0;

  width = windowWidth;
  height = windowHeight;

  // class sixCirlces{

  //   constructor(spaceA,spaceB,size){
  //     this.spaceA = spaceA;
  //     this.spaceB = spaceB;
  //     this.size = size;
  //   }

  //   circle(width/spaceA, (space)
    
  // }

  function draw() {
    background(roygbiv[i]);
   
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
    //ellipse(windowWidth/6, windowHeight/6, radius1, radius2);
    //ellipse(windowWidth/6, 5*windowHeight/6, radius2, radius1);
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
    //ellipse(5*windowWidth/6,windowHeight/6, radius1/2, radius1/2);

  
  }

  function mousePressed() {
    console.log(i);
    console.log(roygbiv[i]);
    i++;

    if(i >= 9)
    {
      i = 0;
    }

    // fill(128,128,255);
    // console.log("circle");
    // circle(random(windowWidth), random(windowHeight), random(0,100));

    // function setup() {
    //   createCanvas(400, 400);
    // }
    
    // function draw() {
    //   background(220);
      
    //   for(i = 0; i<400; i+=20)
    //     {
    //       line(i,0, 400, 400-i);
    //     }
    //   for(i = 0; i<400;i+=20)
    //     {
    //       line(0,i,400-i,400);
    //     }
      
    //   for (var gridY = 0; gridY < width+20; gridY += 20) {
    //     for (var gridX = 0; gridX < height+20; gridX += 20) {
    //       var diameter = dist(mouseX, mouseY, 200, 200);
    //       diameter = diameter / 400 * 20;
    //       push();
    //       translate(gridX, gridY, diameter * 15);
    //       ellipse(0, 0, diameter, diameter); // also nice: ellipse(...)
    //       pop();
    //     }
    //   }
    // }
  }