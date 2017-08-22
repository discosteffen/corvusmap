var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var cw=canvas.width;
var ch=canvas.height;

// define a rect using a javascript object
var rect1={
  x:20,
  y:20,
  width:40,
  height:40,
  directionX:1
}

// define another rect using a javascript object
var rect2={
  x:250,
  y:90,
  width:40,
  height:40,
  directionX:-1
}

// put each rect in a rects[] array
var rects=[rect1,rect2];

// start the animation loop
requestAnimationFrame(animate);

function animate(time){

  // move each rect in the rects[] array by its
  // own directionx
  for(var i=0;i<rects.length;i++){
    rects[i].x+=rects[i].directionX;
    if(rects[i].x<0){
      console.log("hit edge")
    }
  }

/*
  for(var i = 0; i< 360; i++){
    console.log(i)
  }
*/
  // draw all the rects in their new positions
  draw();

  // request another frame in the animation loop
  requestAnimationFrame(animate);
}

function draw(){
  ctx.clearRect(0,0,cw,ch);
  for(var i=0;i<rects.length;i++){
    var r=rects[i]
    ctx.strokeRect(r.x,r.y,r.width,r.height);
  }
}
