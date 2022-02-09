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

  let i = 0;
  let j = 3;

  let a = 100;
  let b = 10;
  let dir = 1;
  let acc = 1;

  function draw() {
    background(30);
   
    x = windowWidth/255;
    y = windowHeight/255;
    midX = windowWidth/2;

    //blue value fades back and forth
    if(a>255 || a<0)
    {
      dir = dir*-1;
    }
    a = a + (acc*dir);
    console.log(a);

    //mouse position on y axis controls red and green values
    var1 = map(mouseY/y, 0, 204, 0, 204, true);
    var2 = map(mouseY/y, 128, 229, 128, 229, true);

    radius1 = (windowWidth/mouseX)*20;
    //console.log("mouseX: ", mouseX);
    //console.log("radius: ", radius1)
    if(abs(radius1)>=200)
    {
      radius1 = 200; //limiting size of circle
    }
    radius9 = (windowWidth/(windowWidth-mouseX))*20;
    if(abs(radius9)>=200)
    {
      radius9 = 200; //limiting size of circle
    }
    radius5 = (radius1+radius9)/2;
    radius3 = (radius1+radius5)/2;
    radius2 = (radius1+radius3)/2;
    radius4 = (radius3+radius5)/2;
    radius7 = (radius5+radius9)/2;
    radius6 = (radius5+radius7)/2;
    radius8 = (radius7+radius9)/2;
    
    strokeWeight(0);
    col1 = color(var1,var2,a);
    console.log("r:",var1," g:",var2," b:",a)
    col2 = color(255-var1,255-var2,255-a);
    inter = lerpColor(col1,col2,0.5);
    inter3 = lerpColor(col1,inter,0.5);
    inter7 = lerpColor(inter,col2,0.5);
    inter2 = lerpColor(col1,inter3,0.5);
    inter4 = lerpColor(inter3,inter,0.5);
    inter6 = lerpColor(inter,inter7,0.5);
    inter8 = lerpColor(inter7,col2,0.5);

    colorList = [col1,col2,inter,inter2,inter3];
    fill(col1);
    //fill(var1,var2,255);
    for(let i = 1; i<10; i++)
    {
     // polygon(windowWidth/6,(i)*windowHeight/6, radius1,j);
      fill(col2);
      polygon(windowWidth/10,(i)*windowHeight/10, windowHeight/20,4); 
      fill(col1);
      circle(windowWidth/10,(i)*windowHeight/10, radius1);

      fill(inter8);
      polygon(2*windowWidth/10,(i)*windowHeight/10, windowHeight/20,4); 
      fill(inter2);
      circle(2*windowWidth/10,(i)*windowHeight/10, radius2);

      fill(inter7);
      polygon(3*windowWidth/10,(i)*windowHeight/10, windowHeight/20,4); 
      fill(inter3);
      circle(3*windowWidth/10,(i)*windowHeight/10, radius3);

      fill(inter6);
      polygon(4*windowWidth/10,(i)*windowHeight/10, windowHeight/20,4); 
      fill(inter4);
      circle(4*windowWidth/10,(i)*windowHeight/10, radius4);

      fill(inter);
      polygon(5*windowWidth/10,(i)*windowHeight/10, windowHeight/20,4); 
      fill(inter);
      circle(5*windowWidth/10,(i)*windowHeight/10, radius5);

      fill(inter4);
      polygon(6*windowWidth/10,(i)*windowHeight/10, windowHeight/20,4); 
      fill(inter6);
      circle(6*windowWidth/10,(i)*windowHeight/10, radius6);

      fill(inter3);
      polygon(7*windowWidth/10,(i)*windowHeight/10, windowHeight/20,4); 
      fill(inter7);
      circle(7*windowWidth/10,(i)*windowHeight/10, radius7);

      fill(inter2);
      polygon(8*windowWidth/10,(i)*windowHeight/10, windowHeight/20,4); 
      fill(inter8);
      circle(8*windowWidth/10,(i)*windowHeight/10, radius8);
      
      fill(col1);
      polygon(9*windowWidth/10,(i)*windowHeight/10, windowHeight/20,4); 
      fill(col2);
      circle(9*windowWidth/10,(i)*windowHeight/10, radius9);


    }

  
  }

  function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  function mousePressed() {
    console.log(i);
    console.log(roygbiv[i]);
    i++;
    j++;

    if(i >= 3)
    {
      i = 0;
    }

    if(j >= 20)
    {
      j = 3;
    }

  }
