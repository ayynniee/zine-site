//using an image array, cycle through 5 images

let img = [];
let currentImage = 0;

function preload(){
  for (let i = 0; i < 9; i++){
    img[i] = loadImage('images/page' + (i+1) + '.png');
  }
}

function setup(){
  var cnv = createCanvas(1000,1000);
  cnv.parent('sketchholder');
  imageMode(CENTER);
}

function draw(){
  background(0);
  image(img[currentImage],width/2,height/2,img[currentImage].width,img[currentImage].height);

}

function mousePressed(){
  currentImage++;

  if(currentImage == 9){
    currentImage = 0;
  }
}
