function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  let num = 0;
  
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


  // class leftleftCircles() {
  //   constructor(width,height,radius,num,r,g){
  //     this.width = width;
  //     this.height = height;
  //     this.radius = radius;
  //     this.num = num;
  //   }
  //   for(let i = 1; i<num; i++)
  //   {
  //     fill(r,g,255);
  //     circle(width,i*height,radius);
  //   }
  // }

  colList = [0,123,255];

  function draw() {
    background(roygbiv[7]);
   
    x = windowWidth/255;
    y = windowHeight/255;
    midX = windowWidth/2;

    var1 = map(mouseX/x, 0, 255, 0, 255);
    var2 = map(mouseY/y, 0, 255, 0, 255);

    radius1 = (windowWidth/mouseX)*30;
    radius3 = (windowWidth/(windowWidth-mouseX))*30;
    //radius2 = abs(radius1-radius3)/2;
    radius2 = (radius1+radius3)/2;
    //radius4 = radius1/1.5;
    radius4 = (radius1+radius2)/2;
    //radius5 = radius3/1.5;
    radius5 = (radius3+radius2)/2;
    
    strokeWeight(0);
    col1 = color(var1,var2,colList[i]);
    //col1 = color(var1,var2,255);
    col2 = color(255-var1,255-var2,colList[i]);
    //col2 = color(255-var1,255-var2,255);
    inter = lerpColor(col1,col2,0.5);

    fill(col1);
    //fill(var1,var2,255);
    for(let i = 1; i<6; i++)
    {
      circle(windowWidth/6,(i)*windowHeight/6, radius1);
    }

    //fill(var1,var2,255);
    inter2 = lerpColor(col1,inter,0.5);
    fill(inter2);
    for(let i = 1; i<6; i++)
    {
      circle(2*windowWidth/6,(i)*windowHeight/6, radius4);
    }

    fill(inter);
    for(let i = 1; i<6; i++)
    {
      circle(windowWidth/2,(i)*windowHeight/6, radius2);
    }

    inter3 = lerpColor(inter,col2,0.5);
    fill(inter3);
    //fill(255-var1,255-var2,255);
    for(let i = 1; i<6; i++)
    {
      circle(4*windowWidth/6,(i)*windowHeight/6, radius5);
    }

   // fill(255-var1,255-var2,255);
    fill(col2);
    for(let i = 1; i<6; i++)
    {
      circle(5*windowWidth/6,(i)*windowHeight/6, radius3);
    }

  
  }

  function mousePressed() {
    console.log(i);
    console.log(roygbiv[i]);
    i++;

    if(i >= 3)
    {
      i = 0;
    }

  }