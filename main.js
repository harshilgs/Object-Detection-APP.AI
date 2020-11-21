img="";

function setup()
{
    canvas = createCanvas( 640 , 420);
    canvas.center();
}

function preload()
{
    img=loadImage('dog_cat.jpg');
}

function draw()
{
    image(img , 0 , 0 , 640 , 420);
    fill("#ff0000");
    text("Dog And Cat" , 45 , 75);
    noFill();
    stroke("#ff0000");
    rect( 30 , 60 , 540 , 350)
}
